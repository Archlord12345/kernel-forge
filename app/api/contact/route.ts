import { NextResponse, type NextRequest } from 'next/server'
import { isSupabaseConfigured, supabase } from '@/lib/supabase'
import { SITE } from '@/lib/data/site'

type Field = 'name' | 'email' | 'subject' | 'message'
const LIMITS: Record<Field, number> = { name: 80, email: 120, subject: 140, message: 4000 }
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 5
const hits = new Map<string, number[]>()

function rateLimited(key: string) {
  const now = Date.now()
  const recent = (hits.get(key) ?? []).filter((time) => now - time < WINDOW_MS)
  recent.push(now)
  hits.set(key, recent)
  if (hits.size > 5000) hits.clear()
  return recent.length > MAX_PER_WINDOW
}

function clean(value: unknown, max: number) {
  return typeof value === 'string' ? value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim().slice(0, max + 1) : ''
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || request.headers.get('x-real-ip') || 'anonymous'
  if (rateLimited(ip)) {
    return NextResponse.json({ error: 'Trop de messages en peu de temps. Réessayez dans quelques minutes.' }, { status: 429 })
  }

  let body: Record<string, unknown>
  try {
    body = (await request.json()) as Record<string, unknown>
  } catch {
    return NextResponse.json({ error: 'Requête illisible.' }, { status: 400 })
  }

  // Honeypot : un robot remplit ce champ invisible, on fait semblant d'accepter.
  if (typeof body.website === 'string' && body.website.trim() !== '') {
    return NextResponse.json({ ok: true }, { status: 201 })
  }

  const values = {
    name: clean(body.name, LIMITS.name),
    email: clean(body.email, LIMITS.email),
    subject: clean(body.subject, LIMITS.subject),
    message: clean(body.message, LIMITS.message),
  }

  const errors: Partial<Record<Field, string>> = {}
  if (values.name.length < 2) errors.name = 'Indiquez votre nom (2 caractères minimum).'
  else if (values.name.length > LIMITS.name) errors.name = `Le nom ne peut pas dépasser ${LIMITS.name} caractères.`
  if (!EMAIL_RE.test(values.email) || values.email.length > LIMITS.email) errors.email = 'Entrez une adresse e-mail valide.'
  if (values.subject.length < 3) errors.subject = 'Donnez un sujet à votre message (3 caractères minimum).'
  else if (values.subject.length > LIMITS.subject) errors.subject = `Le sujet ne peut pas dépasser ${LIMITS.subject} caractères.`
  if (values.message.length < 20) errors.message = 'Décrivez votre besoin en quelques phrases (20 caractères minimum).'
  else if (values.message.length > LIMITS.message) errors.message = `Le message ne peut pas dépasser ${LIMITS.message} caractères.`
  if (Object.keys(errors).length) {
    return NextResponse.json({ errors }, { status: 400 })
  }

  if (!isSupabaseConfigured) {
    return NextResponse.json({ error: `Le formulaire n’est pas encore relié à la base de données. Écrivez-nous à ${SITE.email}.` }, { status: 503 })
  }

  const { error } = await supabase.from('contact_messages').insert([values])
  if (error) {
    console.error('Contact : insertion Supabase échouée.', error)
    return NextResponse.json({ error: 'Impossible d’enregistrer le message pour le moment. Réessayez ou écrivez-nous directement.' }, { status: 500 })
  }

  return NextResponse.json({ ok: true }, { status: 201 })
}
