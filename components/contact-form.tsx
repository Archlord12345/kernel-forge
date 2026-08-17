'use client'

import { useState } from 'react'
import { Loader, Check } from 'lucide-react'

export function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) })
      const result = await response.json()
      if (!response.ok) throw new Error(result.error || 'Erreur lors de l’envoi')
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error('Erreur d’envoi du formulaire :', error)
      alert(error instanceof Error ? error.message : 'Impossible d’envoyer le message. Écrivez-nous directement à ravelnghomsi@kernelforge.codes.')
    } finally {
      setLoading(false)
    }
  }

  const update = (key: keyof typeof formData, value: string) => setFormData((current) => ({ ...current, [key]: value }))

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      {submitted && <div className="mb-6 flex items-center gap-3 rounded-2xl border border-accent/40 bg-accent/20 p-4"><Check className="h-5 w-5 text-accent" /><p className="text-sm font-semibold text-accent">Message envoyé avec succès. Nous reviendrons vers vous rapidement.</p></div>}
      <div className="space-y-5">
        <div><label htmlFor="contact-name" className="mb-2 block text-sm font-semibold text-foreground">Nom</label><input id="contact-name" type="text" required value={formData.name} onChange={(e) => update('name', e.target.value)} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="Votre nom" /></div>
        <div><label htmlFor="contact-email" className="mb-2 block text-sm font-semibold text-foreground">Adresse e-mail</label><input id="contact-email" type="email" required value={formData.email} onChange={(e) => update('email', e.target.value)} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="vous@exemple.com" /></div>
        <div><label htmlFor="contact-subject" className="mb-2 block text-sm font-semibold text-foreground">Sujet</label><input id="contact-subject" type="text" required value={formData.subject} onChange={(e) => update('subject', e.target.value)} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="L’objet de votre message" /></div>
        <div><label htmlFor="contact-message" className="mb-2 block text-sm font-semibold text-foreground">Votre message</label><textarea id="contact-message" required rows={6} value={formData.message} onChange={(e) => update('message', e.target.value)} className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="Décrivez votre idée, votre projet ou votre demande…" /></div>
        <button type="submit" disabled={loading} className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3.5 font-black text-primary-foreground shadow-[0_3px_0_#b83c0d] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50">{loading ? <><Loader className="h-4 w-4 animate-spin" />Envoi en cours…</> : 'Envoyer le message'}</button>
      </div>
    </form>
  )
}
