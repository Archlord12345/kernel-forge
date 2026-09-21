import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Mascot } from '@/components/mascot'
import { Footer } from '@/components/site/footer'
import { Header } from '@/components/site/header'
import { Button } from '@/components/ui/button'
import { Burst } from '@/components/ui/burst'
import { Sticker } from '@/components/ui/sticker'
import { IconTile, SpotIcon, type SpotIconName } from '@/components/ui/spot-icon'

export const metadata: Metadata = { title: 'Page introuvable', robots: { index: false } }

const SHORTCUTS: { href: string; label: string; text: string; icon: SpotIconName; tone: 'forge' | 'ember' | 'creeper' | 'paper-2' }[] = [
  { href: '/projects', label: 'Projets', text: 'UniFlow et les projets du collectif', icon: 'repo', tone: 'ember' },
  { href: '/services', label: 'Services', text: 'Web, mobile, API, Linux, tarifs', icon: 'maintenance', tone: 'paper-2' },
  { href: '/team', label: 'Équipe', text: 'Les membres et leurs CV publics', icon: 'collab', tone: 'creeper' },
  { href: '/contact', label: 'Contact', text: 'Écrire au collectif', icon: 'mail', tone: 'forge' },
]

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="contenu" className="relative overflow-hidden border-b-2 border-ink bg-ink text-paper">
        <div className="forge-grid absolute inset-0" aria-hidden="true" />
        <div className="glow-orb -left-32 top-0 h-[26rem] w-[26rem] bg-forge/30 animate-drift" aria-hidden="true" />
        <div className="glow-orb -right-32 bottom-0 h-[24rem] w-[24rem] bg-tnt/20 animate-drift-2" aria-hidden="true" />
        <div className="wrap relative grid items-center gap-10 py-16 lg:grid-cols-[1.1fr_.9fr] lg:py-24">
          <div>
            <p className="font-pixel text-[clamp(4rem,14vw,8.5rem)] font-bold leading-none text-forge animate-glitch" aria-label="Erreur 404">404</p>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">Cette page n’existe pas, ou plus.</h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-sand/85">Arch a fouillé tous les dépôts : rien à cette adresse. Le lien est peut-être ancien, ou une lettre s’est glissée dans l’URL. Voici les pages les plus utiles.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/" variant="forge" size="lg" className="shine">Retour à l’accueil <ArrowRight className="h-4 w-4" /></Button>
              <Button href="/contact" variant="ghost-light" size="lg"><SpotIcon name="chat" size={20} /> Signaler le lien cassé</Button>
            </div>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {SHORTCUTS.map((item) => (
                <li key={item.href}>
                  <Sticker as={Link} href={item.href} tone="paper" shadow="forge" hover small className="group flex items-center gap-3 p-3">
                    <IconTile name={item.icon} tone={item.tone} size="sm" />
                    <span className="min-w-0 flex-1">
                      <span className="block font-display font-extrabold">{item.label}</span>
                      <span className="block truncate text-sm text-smoke">{item.text}</span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-smoke transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
                  </Sticker>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative mx-auto w-[70%] max-w-xs lg:w-[80%] lg:max-w-sm">
            <div className="absolute inset-x-[12%] bottom-0 top-[18%] rounded-[3rem] border-2 border-ink bg-paper-2 shadow-hard-forge" aria-hidden="true" />
            <Burst className="absolute -left-2 top-[10%] h-12 w-12 text-ember animate-pop" stroke={false} />
            <Burst className="absolute right-0 top-[40%] h-8 w-8 text-creeper animate-pop [animation-delay:-2s]" stroke={false} />
            <Mascot pose="lost" priority float className="relative z-10 drop-shadow-[0_14px_0_rgba(23,18,15,0.4)]" sizes="(min-width: 1024px) 30vw, 70vw" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
