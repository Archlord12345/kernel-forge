import type { Metadata } from 'next'
import { ArrowRight, Check, ChevronDown } from 'lucide-react'
import { Mascot } from '@/components/mascot'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/primitives'
import { ChannelsGrid } from '@/components/site/channels-grid'
import { PageIntro } from '@/components/site/page-intro'
import { SectionHeading } from '@/components/site/section-heading'
import { Button } from '@/components/ui/button'
import { Sticker } from '@/components/ui/sticker'
import { IconTile, SpotIcon, type SpotIconName } from '@/components/ui/spot-icon'
import { FAQ, PACKAGES, PROCESS, SERVICES } from '@/lib/data/services'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Services et tarifs — Web, mobile, API, Linux',
  description: 'Sites web, applications mobiles, API, logiciels desktop, installation Linux, UI/UX et 3D par le collectif Kernel Forge à Yaoundé. Tarifs indicatifs en FCFA, devis après échange.',
  keywords: ['services informatiques Yaoundé', 'développement application mobile Cameroun', 'création site web professionnel', 'installation Linux', 'maintenance informatique', 'Kernel Forge tarifs'],
  alternates: { canonical: '/services' },
  openGraph: { title: 'Services et tarifs — Kernel Forge', description: 'Des solutions numériques utiles, documentées et adaptées à vos besoins, de Linux à la 3D.', url: '/services' },
}

const ICONS: Record<string, SpotIconName> = { web: 'web', mobile: 'mobile', saas: 'saas', api: 'api', desktop: 'desktop', linux: 'linux', design: 'design', '3d': '3d' }
const TONES = ['forge', 'ember', 'creeper', 'paper-2', 'creeper', 'forge', 'paper-2', 'ember'] as const
const PROCESS_ICONS: SpotIconName[] = ['chat', 'design', 'build', 'rocket']

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        title={<>Des idées solides. <span className="text-forge">Des produits qui marchent.</span></>}
        lead="Nous accompagnons étudiants, associations, entreprises et institutions dans la création de solutions numériques utiles, documentées et adaptées au contexte local."
        aside={
          <div className="relative mx-auto w-[80%] max-w-sm lg:w-[86%]">
            <div className="absolute inset-x-[6%] bottom-0 top-[22%] rounded-[3rem] border-2 border-ink bg-creeper shadow-hard-paper" aria-hidden="true" />
            <Mascot pose="fixing" priority className="relative z-10 drop-shadow-[0_14px_0_rgba(23,18,15,0.4)]" sizes="(min-width: 1024px) 30vw, 70vw" />
          </div>
        }
      >
        <Button href="/contact" variant="forge" size="lg" className="shine"><SpotIcon name="chat" size={22} /> Parler de votre projet</Button>
        <Button href="#tarifs" variant="ghost-light" size="lg">Voir les tarifs <ChevronDown className="h-4 w-4" /></Button>
      </PageIntro>

      <section className="section bg-paper">
        <div className="wrap">
          <SectionHeading title="Du poste Linux à la plateforme complète." lead="Huit savoir-faire, une même exigence : livrer quelque chose d’utile, documenté et maintenable." />
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service, index) => (
              <StaggerItem key={service.id} className="h-full">
                <Sticker as="article" hover className="group flex h-full flex-col p-5">
                  <div className="flex items-start justify-between gap-3">
                    <IconTile name={ICONS[service.id]} tone={TONES[index]} size="md" />
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

      <section className="relative overflow-hidden border-y-2 border-ink bg-ink text-paper">
        <div className="forge-grid absolute inset-0" aria-hidden="true" />
        <div className="glow-orb -left-32 top-0 h-[26rem] w-[26rem] bg-forge/25 animate-drift" aria-hidden="true" />
        <div className="wrap section relative">
          <SectionHeading tone="ink" title="Comment se passe un projet avec nous." lead="Quatre étapes, toujours dans cet ordre. Vous savez où l’on en est à chaque moment." />
          <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.1} className="h-full">
                <Sticker as="li" tone="paper" shadow="forge" className="group relative flex h-full flex-col p-6">
                  <span className="absolute -top-4 left-5 grid h-9 w-9 place-items-center rounded-lg border-2 border-ink bg-forge font-pixel text-sm font-bold text-ink">{index + 1}</span>
                  <IconTile name={PROCESS_ICONS[index]} tone="paper-2" size="md" className="mt-3" />
                  <h3 className="mt-5 font-display text-xl font-extrabold tracking-tight">{step.title}</h3>
                  <p className="mt-2 text-[15px] leading-7 text-smoke">{step.text}</p>
                </Sticker>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section id="tarifs" className="section scroll-mt-24 bg-paper-2">
        <div className="wrap">
          <SectionHeading align="center" title="Choisissez un point de départ." lead="Des fourchettes en FCFA pour vous situer. Le périmètre, le délai et le niveau de finition font varier le devis, toujours défini après échange." />
          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {PACKAGES.map((pack) => (
              <StaggerItem key={pack.name} className="h-full">
                <Sticker as="article" tone={pack.highlighted ? 'ink' : 'paper'} shadow={pack.highlighted ? 'forge' : 'ink'} hover className={cn('relative flex h-full flex-col p-6', pack.highlighted && 'lg:-translate-y-3')}>
                  {pack.highlighted && <span className="absolute -top-3.5 right-5 rounded-full border-2 border-ink bg-forge px-3 py-1 font-display text-xs font-extrabold text-ink">Le plus demandé</span>}
                  <h3 className={cn('font-display text-xl font-extrabold', pack.highlighted ? 'text-ember' : 'text-ink')}>{pack.name}</h3>
                  <p className="mt-3 font-display text-2xl font-extrabold leading-tight tracking-tight">{pack.price}</p>
                  <p className={cn('mt-3 text-[15px] leading-7', pack.highlighted ? 'text-sand/80' : 'text-smoke')}>{pack.description}</p>
                  <ul className={cn('mt-5 flex-1 space-y-2.5 border-t-2 pt-5 text-[15px]', pack.highlighted ? 'border-paper/15 text-sand/90' : 'border-sand text-smoke')}>
                    {pack.features.map((feature) => (
                      <li key={feature} className="flex gap-2.5"><span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border-2 border-ink bg-creeper"><Check className="h-3 w-3 text-ink" strokeWidth={3.5} /></span>{feature}</li>
                    ))}
                  </ul>
                  <Button href="/contact" variant={pack.highlighted ? 'forge' : 'paper'} className="mt-6 w-full">Demander un devis <ArrowRight className="h-4 w-4" /></Button>
                </Sticker>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section border-t-2 border-ink bg-paper">
        <div className="wrap grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-4xl">Questions fréquentes</h2>
            <p className="mt-4 text-lg leading-8 text-smoke">Ce que l’on nous demande le plus souvent avant de démarrer.</p>
            <div className="mt-6 w-40"><Mascot pose="waving" sizes="160px" /></div>
          </Reveal>
          <div className="space-y-3">
            {FAQ.map((item, index) => (
              <Reveal key={item.question} delay={index * 0.06}>
                <details className="sticker-sm group bg-paper open:sticker-forge">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-display text-lg font-extrabold tracking-tight [&::-webkit-details-marker]:hidden">
                    {item.question}
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border-2 border-ink bg-paper-2 transition-transform duration-300 group-open:rotate-180 group-open:bg-forge"><ChevronDown className="h-4 w-4" /></span>
                  </summary>
                  <p className="px-5 pb-5 text-[15px] leading-7 text-smoke">{item.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-t-2 border-ink bg-paper-2">
        <div className="wrap">
          <SectionHeading align="center" title="Écrivez-nous où vous êtes déjà." lead="Quelques lignes sur votre projet suffisent. Nous vous orientons vers le bon format et le bon niveau d’accompagnement." action={<Button href="/contact" variant="ink" className="shine"><SpotIcon name="mail" size={20} /> Contact direct</Button>} />
          <ChannelsGrid compact />
        </div>
      </section>
    </>
  )
}
