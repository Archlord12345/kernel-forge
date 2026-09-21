import { ArrowRight } from 'lucide-react'
import { Mascot } from '@/components/mascot'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/primitives'
import { Button } from '@/components/ui/button'
import { Sticker } from '@/components/ui/sticker'
import { IconTile, type SpotIconName } from '@/components/ui/spot-icon'
import { SERVICES } from '@/lib/data/services'

const ICONS: Record<string, SpotIconName> = { web: 'web', mobile: 'mobile', saas: 'saas', api: 'api', desktop: 'desktop', linux: 'linux', design: 'design', '3d': '3d' }
const TONES = ['forge', 'creeper', 'ember', 'paper-2'] as const

export function ServicesTeaser() {
  const picks = SERVICES.filter((service) => ['web', 'mobile', 'api', 'linux'].includes(service.id))
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div className="forge-grid absolute inset-0" aria-hidden="true" />
      <div className="glow-orb -right-40 top-10 h-[30rem] w-[30rem] bg-forge/25 animate-drift" aria-hidden="true" />
      <div className="wrap section relative grid items-center gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <Reveal>
          <div className="relative mx-auto max-w-xs lg:max-w-sm">
            <div className="absolute inset-x-[8%] bottom-0 top-[18%] rounded-[3rem] border-2 border-ink bg-creeper shadow-hard-paper" aria-hidden="true" />
            <Mascot pose="fixing" className="relative z-10 drop-shadow-[0_14px_0_rgba(23,18,15,0.4)]" sizes="(min-width: 1024px) 28vw, 70vw" />
          </div>
          <h2 className="mt-10 font-display text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl">Un besoin concret ? On sait aussi livrer.</h2>
          <p className="mt-4 text-lg leading-8 text-sand/80">Sites, applications, API, postes Linux : des solutions utiles, documentées et adaptées au contexte local. Tarifs indicatifs en FCFA, devis après échange.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="/services" variant="forge" className="shine">Services et tarifs <ArrowRight className="h-4 w-4" /></Button>
            <Button href="/contact" variant="ghost-light">Demander un devis</Button>
          </div>
        </Reveal>
        <Stagger className="grid gap-4 sm:grid-cols-2">
          {picks.map((service, index) => (
            <StaggerItem key={service.id} className="h-full">
              <Sticker as="article" tone="paper" shadow="forge" hover className="group flex h-full flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                  <IconTile name={ICONS[service.id]} tone={TONES[index % TONES.length]} size="md" />
                  <span className="rounded-full border-2 border-ink bg-paper-2 px-2.5 py-1 font-display text-xs font-extrabold">{service.tag}</span>
                </div>
                <h3 className="mt-5 font-display text-xl font-extrabold tracking-tight">{service.title}</h3>
                <p className="mt-2 flex-1 text-[15px] leading-7 text-smoke">{service.description}</p>
                <p className="mt-4 border-t-2 border-sand pt-3 font-display text-sm font-extrabold text-forge-deep">{service.price}</p>
              </Sticker>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
