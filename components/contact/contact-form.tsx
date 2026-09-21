'use client'

import { useId, useState, type FormEvent } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { LoaderCircle, Mail, RotateCcw, Send } from 'lucide-react'
import { Mascot } from '@/components/mascot'
import { Button } from '@/components/ui/button'
import { Burst } from '@/components/ui/burst'
import { SpotIcon, type SpotIconName } from '@/components/ui/spot-icon'
import { SITE } from '@/lib/data/site'
import { cn } from '@/lib/utils'

type Field = 'name' | 'email' | 'subject' | 'message'
type Values = Record<Field, string>
type Errors = Partial<Record<Field, string>>
type Status = 'idle' | 'sending' | 'sent' | 'error' | 'unavailable'

const LIMITS: Record<Field, number> = { name: 80, email: 120, subject: 140, message: 4000 }
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const TOPICS: { label: string; icon: SpotIconName }[] = [
  { label: 'Devis site web', icon: 'web' },
  { label: 'Application mobile', icon: 'mobile' },
  { label: 'Installation Linux', icon: 'linux' },
  { label: 'Contribuer au collectif', icon: 'contribute' },
  { label: 'Partenariat ou atelier', icon: 'collab' },
]

export function validate(values: Values): Errors {
  const errors: Errors = {}
  const name = values.name.trim(), email = values.email.trim(), subject = values.subject.trim(), message = values.message.trim()
  if (name.length < 2) errors.name = 'Indiquez votre nom (2 caractères minimum).'
  else if (name.length > LIMITS.name) errors.name = `Le nom ne peut pas dépasser ${LIMITS.name} caractères.`
  if (!EMAIL_RE.test(email)) errors.email = 'Entrez une adresse e-mail valide, par exemple nom@exemple.com.'
  else if (email.length > LIMITS.email) errors.email = `L’adresse ne peut pas dépasser ${LIMITS.email} caractères.`
  if (subject.length < 3) errors.subject = 'Donnez un sujet à votre message (3 caractères minimum).'
  else if (subject.length > LIMITS.subject) errors.subject = `Le sujet ne peut pas dépasser ${LIMITS.subject} caractères.`
  if (message.length < 20) errors.message = 'Décrivez votre besoin en quelques phrases (20 caractères minimum).'
  else if (message.length > LIMITS.message) errors.message = `Le message ne peut pas dépasser ${LIMITS.message} caractères.`
  return errors
}

const EMPTY: Values = { name: '', email: '', subject: '', message: '' }

export function ContactForm() {
  const id = useId()
  const reduced = useReducedMotion()
  const [values, setValues] = useState<Values>(EMPTY)
  const [errors, setErrors] = useState<Errors>({})
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({})
  const [status, setStatus] = useState<Status>('idle')
  const [serverMessage, setServerMessage] = useState<string | null>(null)
  const [honeypot, setHoneypot] = useState('')

  const update = (field: Field) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const next = { ...values, [field]: event.target.value }
    setValues(next)
    if (touched[field]) setErrors(validate(next))
  }
  const blur = (field: Field) => () => {
    setTouched((state) => ({ ...state, [field]: true }))
    setErrors(validate(values))
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validate(values)
    setTouched({ name: true, email: true, subject: true, message: true })
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) {
      const first = (Object.keys(nextErrors) as Field[])[0]
      document.getElementById(`${id}-${first}`)?.focus()
      return
    }
    setStatus('sending')
    setServerMessage(null)
    try {
      const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...values, website: honeypot }) })
      const payload = (await response.json().catch(() => ({}))) as { error?: string; errors?: Errors }
      if (response.status === 201) {
        setStatus('sent')
        return
      }
      if (response.status === 400 && payload.errors) {
        setErrors(payload.errors)
        setStatus('idle')
        return
      }
      if (response.status === 503) {
        setStatus('unavailable')
        setServerMessage(payload.error ?? null)
        return
      }
      setStatus('error')
      setServerMessage(payload.error ?? 'Le message n’a pas pu être envoyé.')
    } catch {
      setStatus('error')
      setServerMessage('Impossible de joindre le serveur. Vérifiez votre connexion puis réessayez.')
    }
  }

  const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(values.subject || 'Contact depuis kernelforge.codes')}&body=${encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`)}`
  const inputClass = (field: Field) =>
    cn('w-full rounded-xl border-2 bg-paper px-4 py-3 text-[15px] text-ink outline-none transition-[border-color,box-shadow] placeholder:text-smoke/60 focus:border-ink focus:shadow-hard-forge-sm', errors[field] ? 'border-tnt' : 'border-sand hover:border-smoke/50')

  return (
    <AnimatePresence mode="wait" initial={false}>
      {status === 'sent' ? (
        <motion.div key="sent" initial={reduced ? false : { opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }} className="relative overflow-hidden text-center" role="status" aria-live="polite">
          <Burst className="absolute -left-6 -top-6 h-24 w-24 text-creeper animate-pop" stroke={false} />
          <Burst className="absolute -right-4 top-10 h-16 w-16 text-forge animate-pop [animation-delay:-2s]" stroke={false} />
          <div className="mx-auto w-40"><Mascot pose="waving" sizes="160px" /></div>
          <h3 className="mt-4 font-display text-3xl font-extrabold tracking-tight">Message envoyé.</h3>
          <p className="mx-auto mt-3 max-w-md text-lg leading-8 text-smoke">Merci {values.name.trim().split(' ')[0]}. Un membre du collectif vous répond en général sous 48 heures ouvrées, à l’adresse {values.email.trim()}.</p>
          <Button variant="paper" className="mt-7" onClick={() => { setValues(EMPTY); setTouched({}); setErrors({}); setStatus('idle') }}><RotateCcw className="h-4 w-4" /> Envoyer un autre message</Button>
        </motion.div>
      ) : (
        <motion.form key="form" initial={false} exit={{ opacity: 0 }} onSubmit={onSubmit} noValidate className="space-y-5">
          <fieldset>
            <legend className="font-display text-sm font-extrabold text-smoke">De quoi s’agit-il ? (facultatif)</legend>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {TOPICS.map((topic) => {
                const active = values.subject === topic.label
                return (
                  <button key={topic.label} type="button" aria-pressed={active} onClick={() => { setValues((state) => ({ ...state, subject: active ? '' : topic.label })); setErrors((state) => ({ ...state, subject: undefined })) }} className={cn('press inline-flex h-10 items-center gap-2 rounded-xl border-2 border-ink px-3 font-display text-sm font-bold', active ? 'bg-forge shadow-hard-sm' : 'bg-paper hover:bg-paper-2')}>
                    <SpotIcon name={topic.icon} size={20} /> {topic.label}
                  </button>
                )
              })}
            </div>
          </fieldset>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor={`${id}-name`} className="mb-1.5 block font-display text-sm font-extrabold">Votre nom</label>
              <input id={`${id}-name`} name="name" autoComplete="name" required maxLength={LIMITS.name} value={values.name} onChange={update('name')} onBlur={blur('name')} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? `${id}-name-error` : undefined} placeholder="Prénom Nom" className={inputClass('name')} />
              <FieldError id={`${id}-name-error`} message={errors.name} />
            </div>
            <div>
              <label htmlFor={`${id}-email`} className="mb-1.5 block font-display text-sm font-extrabold">Votre e-mail</label>
              <input id={`${id}-email`} name="email" type="email" inputMode="email" autoComplete="email" required maxLength={LIMITS.email} value={values.email} onChange={update('email')} onBlur={blur('email')} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? `${id}-email-error` : undefined} placeholder="nom@exemple.com" className={inputClass('email')} />
              <FieldError id={`${id}-email-error`} message={errors.email} />
            </div>
          </div>

          <div>
            <label htmlFor={`${id}-subject`} className="mb-1.5 block font-display text-sm font-extrabold">Sujet</label>
            <input id={`${id}-subject`} name="subject" required maxLength={LIMITS.subject} value={values.subject} onChange={update('subject')} onBlur={blur('subject')} aria-invalid={Boolean(errors.subject)} aria-describedby={errors.subject ? `${id}-subject-error` : undefined} placeholder="Ex. : site vitrine pour une association" className={inputClass('subject')} />
            <FieldError id={`${id}-subject-error`} message={errors.subject} />
          </div>

          <div>
            <div className="mb-1.5 flex items-baseline justify-between gap-4">
              <label htmlFor={`${id}-message`} className="font-display text-sm font-extrabold">Votre message</label>
              <span className={cn('font-pixel text-[10px]', values.message.length > LIMITS.message ? 'text-tnt' : 'text-smoke')} aria-hidden="true">{values.message.length}/{LIMITS.message}</span>
            </div>
            <textarea id={`${id}-message`} name="message" required rows={6} maxLength={LIMITS.message + 50} value={values.message} onChange={update('message')} onBlur={blur('message')} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? `${id}-message-error` : `${id}-message-hint`} placeholder="Le contexte, les fonctionnalités souhaitées, votre délai et, si vous l’avez, une idée de budget." className={cn(inputClass('message'), 'min-h-36 resize-y leading-7')} />
            {!errors.message && <p id={`${id}-message-hint`} className="mt-1.5 text-xs text-smoke">Plus c’est précis, plus la réponse est utile.</p>}
            <FieldError id={`${id}-message-error`} message={errors.message} />
          </div>

          <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
            <label htmlFor={`${id}-website`}>Laissez ce champ vide</label>
            <input id={`${id}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(event) => setHoneypot(event.target.value)} />
          </div>

          <AnimatePresence>
            {(status === 'error' || status === 'unavailable') && (
              <motion.div key={status} initial={reduced ? false : { opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} role="alert" className={cn('sticker-sm flex flex-col gap-3 p-4 text-sm sm:flex-row sm:items-center', status === 'unavailable' ? 'bg-ember/40' : 'bg-tnt/10')}>
                <p className="flex-1 leading-6">
                  {status === 'unavailable' ? 'Le formulaire n’est pas encore relié à la base de données.' : serverMessage} {status === 'unavailable' && 'Envoyez votre message directement par e-mail : il est déjà prérempli.'}
                </p>
                {status === 'unavailable' && <Button href={mailto} variant="ink" size="sm"><Mail className="h-4 w-4" /> Ouvrir mon e-mail</Button>}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-5 text-smoke">Vos informations servent uniquement à vous répondre. Aucune newsletter, aucun partage.</p>
            <Button type="submit" variant="forge" size="lg" disabled={status === 'sending'} className="shine w-full sm:w-auto">
              {status === 'sending' ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              {status === 'sending' ? 'Envoi en cours…' : 'Envoyer le message'}
            </Button>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  )
}

function FieldError({ id, message }: { id: string; message?: string }) {
  return (
    <AnimatePresence initial={false}>
      {message && (
        <motion.p key={message} id={id} role="alert" initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-1.5 flex items-start gap-1.5 text-sm font-semibold text-tnt">
          <span aria-hidden="true" className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-tnt" />{message}
        </motion.p>
      )}
    </AnimatePresence>
  )
}
