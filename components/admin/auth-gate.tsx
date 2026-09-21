'use client'

import { useEffect, useState, type FormEvent } from 'react'
import Link from 'next/link'
import { LoaderCircle, Lock, LogIn, ShieldAlert } from 'lucide-react'
import type { Session } from '@supabase/supabase-js'
import { Mascot } from '@/components/mascot'
import { Button } from '@/components/ui/button'
import { Sticker } from '@/components/ui/sticker'
import { isSupabaseConfigured, supabase } from '@/lib/supabase'

type Gate = 'checking' | 'anonymous' | 'forbidden' | 'admin'

async function resolveRole(session: Session | null): Promise<Gate> {
  if (!session) return 'anonymous'
  const { data, error } = await supabase.from('profiles').select('role').eq('id', session.user.id).maybeSingle()
  if (error || data?.role !== 'admin') return 'forbidden'
  return 'admin'
}

/** Protège l'espace d'administration : Supabase Auth + rôle « admin » dans la table profiles. */
export function AuthGate({ children }: { children: React.ReactNode }) {
  const [gate, setGate] = useState<Gate>(isSupabaseConfigured ? 'checking' : 'anonymous')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [pending, setPending] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  useEffect(() => {
    if (!isSupabaseConfigured) return
    let cancelled = false
    supabase.auth.getSession().then(async ({ data }) => {
      const next = await resolveRole(data.session)
      if (!cancelled) setGate(next)
    })
    const { data: subscription } = supabase.auth.onAuthStateChange(async (_event, session) => {
      const next = await resolveRole(session)
      if (!cancelled) setGate(next)
    })
    return () => {
      cancelled = true
      subscription.subscription.unsubscribe()
    }
  }, [])

  async function signIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setPending(true)
    setMessage(null)
    const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password })
    if (error) setMessage('Identifiants refusés. Vérifiez l’e-mail et le mot de passe.')
    setPending(false)
  }

  if (gate === 'admin') return <>{children}</>

  return (
    <div className="relative grid min-h-dvh place-items-center overflow-hidden bg-ink px-5 py-16 text-paper">
      <div className="forge-grid absolute inset-0" aria-hidden="true" />
      <div className="glow-orb -left-32 top-0 h-[26rem] w-[26rem] bg-forge/25 animate-drift" aria-hidden="true" />
      <Sticker tone="paper" shadow="forge" className="relative grid w-full max-w-3xl overflow-hidden text-ink md:grid-cols-[1fr_.8fr]">
        <div className="p-7 sm:p-10">
          <Link href="/" className="font-display text-sm font-extrabold text-smoke hover:text-ink">← kernelforge.codes</Link>
          <div className="mt-5 flex items-center gap-3">
            <span className="sticker-sm grid h-11 w-11 place-items-center bg-forge"><Lock className="h-5 w-5" /></span>
            <h1 className="font-display text-3xl font-extrabold tracking-tight">Administration</h1>
          </div>

          {!isSupabaseConfigured && (
            <div className="mt-6 space-y-3 text-[15px] leading-7 text-smoke">
              <p className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-ember px-3 py-1 font-display text-xs font-extrabold text-ink"><ShieldAlert className="h-4 w-4" /> Supabase non configuré</p>
              <p>L’espace d’administration nécessite un projet Supabase. Renseignez <code className="rounded-md bg-paper-2 px-1.5 py-0.5 font-mono text-sm">NEXT_PUBLIC_SUPABASE_URL</code> et <code className="rounded-md bg-paper-2 px-1.5 py-0.5 font-mono text-sm">NEXT_PUBLIC_SUPABASE_ANON_KEY</code> dans <code className="rounded-md bg-paper-2 px-1.5 py-0.5 font-mono text-sm">.env.local</code>, exécutez les migrations du dossier <code className="rounded-md bg-paper-2 px-1.5 py-0.5 font-mono text-sm">supabase/</code>, puis relancez le serveur.</p>
              <p>Le site public fonctionne sans base de données : les projets et l’équipe utilisent les données locales.</p>
            </div>
          )}

          {isSupabaseConfigured && gate === 'checking' && (
            <p className="mt-6 inline-flex items-center gap-2 font-display font-bold text-smoke"><LoaderCircle className="h-4 w-4 animate-spin text-forge" /> Vérification de la session…</p>
          )}

          {isSupabaseConfigured && gate === 'forbidden' && (
            <div className="mt-6 space-y-4">
              <p className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-tnt px-3 py-1 font-display text-xs font-extrabold text-white"><ShieldAlert className="h-4 w-4" /> Accès refusé</p>
              <p className="text-[15px] leading-7 text-smoke">Votre compte est connecté mais n’a pas le rôle <strong>admin</strong> dans la table <code className="rounded-md bg-paper-2 px-1.5 py-0.5 font-mono text-sm">profiles</code>. Demandez à un administrateur de vous l’attribuer.</p>
              <Button variant="paper" onClick={() => supabase.auth.signOut()}>Se déconnecter</Button>
            </div>
          )}

          {isSupabaseConfigured && gate === 'anonymous' && (
            <form onSubmit={signIn} className="mt-6 space-y-4">
              <div>
                <label htmlFor="admin-email" className="mb-1.5 block font-display text-sm font-extrabold">E-mail</label>
                <input id="admin-email" type="email" autoComplete="username" required value={email} onChange={(event) => setEmail(event.target.value)} className="w-full rounded-xl border-2 border-sand bg-paper px-4 py-3 outline-none transition focus:border-ink focus:shadow-hard-forge-sm" />
              </div>
              <div>
                <label htmlFor="admin-password" className="mb-1.5 block font-display text-sm font-extrabold">Mot de passe</label>
                <input id="admin-password" type="password" autoComplete="current-password" required value={password} onChange={(event) => setPassword(event.target.value)} className="w-full rounded-xl border-2 border-sand bg-paper px-4 py-3 outline-none transition focus:border-ink focus:shadow-hard-forge-sm" />
              </div>
              {message && <p role="alert" className="text-sm font-semibold text-tnt">{message}</p>}
              <Button type="submit" variant="forge" disabled={pending} className="shine w-full">
                {pending ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <LogIn className="h-4 w-4" />} Se connecter
              </Button>
            </form>
          )}
        </div>
        <div className="relative hidden border-l-2 border-ink bg-paper-2 p-6 md:block">
          <div className="halftone absolute inset-0 text-ink/10" aria-hidden="true" />
          <div className="relative mx-auto w-[85%]"><Mascot pose="coding" sizes="260px" /></div>
        </div>
      </Sticker>
    </div>
  )
}
