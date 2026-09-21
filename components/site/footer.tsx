import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Cog, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Monogram } from '@/components/ui/monogram'
import { WhatsAppButton } from '@/components/ui/whatsapp-button'
import { CHANNELS, NAV, SITE } from '@/lib/data/site'

const ecosystem = [
  { name: 'UniFlow', href: SITE.uniflow, external: true },
  { name: 'Kernel Forge Academy', href: '/community', external: false },
  { name: 'Rejoindre l’équipe', href: '/community#rejoindre', external: false },
  { name: 'Administration', href: '/admin', external: false },
]

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative overflow-hidden border-t-2 border-ink bg-ink text-sand">
      <div className="forge-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="glow-orb -right-20 top-0 h-80 w-80 bg-forge/25 animate-drift" aria-hidden="true" />
      <Cog className="absolute -left-16 bottom-24 h-64 w-64 text-paper/[0.04] animate-spin-slower" aria-hidden="true" />

      <div className="wrap relative pt-16 pb-10">
        <div className="grid gap-10 border-b border-paper/10 pb-12 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
          <div>
            <p className="font-display text-3xl font-extrabold leading-tight tracking-tight text-paper sm:text-4xl lg:text-5xl">
              Une idée, un besoin, une envie de contribuer ? <span className="text-forge">La forge est ouverte.</span>
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Button href="/contact" variant="forge" size="lg" className="shine"><Mail className="h-4 w-4" /> Écrire au collectif</Button>
            <WhatsAppButton variant="ghost-light" size="lg">Rejoindre le WhatsApp</WhatsAppButton>
          </div>
        </div>

        <div className="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-[1.3fr_.8fr_.9fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="sticker-sm sticker-forge grid h-12 w-12 place-items-center overflow-hidden bg-paper">
                <Image src="/kernel-forge-mascot.webp" alt="" width={48} height={48} className="h-full w-full object-cover object-top" />
              </span>
              <span className="font-display text-xl font-extrabold text-paper">Kernel <span className="text-forge">Forge</span></span>
            </Link>
            <p className="mt-5 max-w-sm text-[15px] leading-7 text-sand/80">Collectif étudiant de l’{SITE.university}. Nous construisons, documentons et partageons du logiciel libre utile.</p>
            <a href={`mailto:${SITE.email}`} className="mt-5 inline-flex items-center gap-2 font-semibold text-ember hover:text-paper"><Mail className="h-4 w-4" />{SITE.email}</a>
            <p className="mt-2 inline-flex items-center gap-2 text-sm text-sand/70"><MapPin className="h-4 w-4 text-creeper" />{SITE.city}</p>
          </div>

          <div>
            <h3 className="font-display text-base font-extrabold text-paper">Explorer</h3>
            <ul className="mt-4 space-y-2.5 text-[15px]">
              {NAV.map((item) => (
                <li key={item.href}><Link href={item.href} className="text-sand/80 transition-colors hover:text-forge">{item.name}</Link></li>
              ))}
              <li><Link href="/contact" className="text-sand/80 transition-colors hover:text-forge">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-base font-extrabold text-paper">Écosystème</h3>
            <ul className="mt-4 space-y-2.5 text-[15px]">
              {ecosystem.map((item) => (
                <li key={item.href}>
                  {item.external ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sand/80 transition-colors hover:text-creeper">{item.name} <ArrowUpRight className="h-3.5 w-3.5" /></a>
                  ) : (
                    <Link href={item.href} className="text-sand/80 transition-colors hover:text-creeper">{item.name}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-base font-extrabold text-paper">Nos canaux</h3>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {CHANNELS.map((channel) => (
                <li key={channel.id}>
                  <a href={channel.href} target="_blank" rel="noopener noreferrer" aria-label={`${channel.name} Kernel Forge`} title={channel.name} className="press inline-block shadow-hard-paper/0 hover:shadow-[3px_3px_0_0_var(--color-paper)]">
                    <Monogram channel={channel} className="h-11 w-11 text-base" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-6 text-sand/70">Discord pour discuter, Telegram pour les annonces, WhatsApp pour le quotidien. Le code des projets est partagé sur demande, via WhatsApp.</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-paper/10 pt-6 text-sm text-sand/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Kernel Forge, {SITE.university}.</p>
          <p className="font-display font-bold text-ember">{SITE.tagline}</p>
        </div>
      </div>

      <p aria-hidden="true" className="text-outline pointer-events-none relative -mb-[0.22em] select-none whitespace-nowrap px-2 text-center font-display text-[16.5vw] font-extrabold leading-none tracking-tighter">
        KERNEL FORGE
      </p>
    </footer>
  )
}
