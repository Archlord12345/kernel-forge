import type { Metadata } from 'next'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { FinalCta } from '@/components/home/final-cta'
import { Mascot } from '@/components/mascot'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/primitives'
import { ChannelsGrid } from '@/components/site/channels-grid'
import { PageIntro } from '@/components/site/page-intro'
import { SectionHeading } from '@/components/site/section-heading'
import { Button } from '@/components/ui/button'
import { Sticker } from '@/components/ui/sticker'
import { IconTile, SpotIcon, type SpotIconName } from '@/components/ui/spot-icon'
import { WhatsAppButton } from '@/components/ui/whatsapp-button'
import { CONTRIBUTE_STEPS, WHO_CAN_JOIN } from '@/lib/data/content'

export const metadata: Metadata = {
  title: 'Communauté — Rejoindre la forge',
  description: 'Discord, Telegram, WhatsApp, LinkedIn, YouTube : rejoignez la communauté Kernel Forge, apprenez à contribuer et participez à la Kernel Forge Academy.',
  alternates: { canonical: '/community' },
  openGraph: { title: 'Communauté Kernel Forge', description: 'Construire, apprendre, partager et contribuer au logiciel libre depuis Yaoundé.', url: '/community' },
}

const WHO_ICONS: { icon: SpotIconName; tone: 'forge' | 'ember' | 'creeper' }[] = [
  { icon: 'learn', tone: 'ember' },
  { icon: 'rocket', tone: 'forge' },
  { icon: 'design', tone: 'creeper' },
]
const STEP_ICONS: SpotIconName[] = ['chat', 'repo', 'contribute', 'collab']

export default function CommunityPage() {
  return (
    <>
      <PageIntro
        tone="paper"
        title={<>Une communauté qui <span className="text-forge-deep">code en public.</span></>}
        lead="Débutants, étudiants confirmés, designers, rédacteurs : la forge accueille tout le monde, à condition d’avoir envie de construire avec les autres."
        aside={
          <div className="relative mx-auto w-[80%] max-w-sm lg:w-[84%]">
            <div className="absolute inset-x-[6%] bottom-0 top-[20%] rounded-[3rem] border-2 border-ink bg-forge shadow-hard" aria-hidden="true" />
            <Mascot pose="coding" priority className="relative z-10 drop-shadow-[0_14px_0_rgba(23,18,15,0.3)]" sizes="(min-width: 1024px) 30vw, 70vw" />
          </div>
        }
      >
        <Button href="#canaux" variant="ink" size="lg" className="shine"><SpotIcon name="chat" size={22} /> Choisir un canal</Button>
        <WhatsAppButton size="lg">Rejoindre le WhatsApp</WhatsAppButton>
      </PageIntro>

      <section id="rejoindre" className="section scroll-mt-24 bg-paper">
        <div className="wrap">
          <SectionHeading title="Qui peut rejoindre ?" lead="Il n’y a pas de test d’entrée. Il y a des tâches de toutes tailles et des gens pour relire." />
          <Stagger className="grid gap-5 md:grid-cols-3">
            {WHO_CAN_JOIN.map((item, index) => (
              <StaggerItem key={item.title} className="h-full">
                <Sticker as="article" hover className="group flex h-full flex-col p-6">
                  <IconTile name={WHO_ICONS[index].icon} tone={WHO_ICONS[index].tone} size="lg" />
                  <h3 className="mt-6 font-display text-2xl font-extrabold tracking-tight">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-7 text-smoke">{item.text}</p>
                </Sticker>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section id="canaux" className="section scroll-mt-24 border-y-2 border-ink bg-paper-2">
        <div className="wrap">
          <SectionHeading title="Cinq canaux, une seule communauté." lead="Discord pour discuter et s’entraider, Telegram pour les annonces, WhatsApp pour le quotidien, LinkedIn et YouTube pour suivre le collectif." />
          <ChannelsGrid />
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink text-paper">
        <div className="forge-grid absolute inset-0" aria-hidden="true" />
        <div className="glow-orb -right-40 bottom-0 h-[28rem] w-[28rem] bg-creeper/20 animate-drift-2" aria-hidden="true" />
        <div className="wrap section relative">
          <SectionHeading tone="ink" title="Votre première contribution en quatre étapes." lead="C’est le parcours que suivent tous les nouveaux membres. Comptez une soirée pour la première pull request." />
          <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {CONTRIBUTE_STEPS.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.1} className="h-full">
                <Sticker as="li" tone="paper" shadow="creeper" className="relative flex h-full flex-col p-6">
                  <span className="absolute -top-4 left-5 grid h-9 w-9 place-items-center rounded-lg border-2 border-ink bg-creeper font-pixel text-sm font-bold text-ink">{index + 1}</span>
                  <IconTile name={STEP_ICONS[index]} tone="paper-2" size="md" className="mt-3" wiggle={false} />
                  <h3 className="mt-5 font-display text-xl font-extrabold tracking-tight">{step.title}</h3>
                  <p className="mt-2 text-[15px] leading-7 text-smoke">{step.text}</p>
                </Sticker>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section border-t-2 border-ink bg-paper">
        <div className="wrap">
          <Reveal>
            <Sticker tone="paper" shadow="forge" className="grid overflow-hidden lg:grid-cols-[1.1fr_.9fr]">
              <div className="relative aspect-[16/10] border-b-2 border-ink lg:aspect-auto lg:border-b-0 lg:border-r-2">
                <Image src="/kernel-forge-academy.webp" alt="Affiche Kernel Forge Academy : build, learn, share, contribute" fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover object-[center_30%]" />
                <div className="scanlines absolute inset-0" aria-hidden="true" />
              </div>
              <div className="p-7 sm:p-10">
                <div className="flex items-center gap-3"><IconTile name="learn" tone="ember" size="sm" wiggle={false} /><p className="font-display text-sm font-extrabold text-smoke">Kernel Forge Academy</p></div>
                <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-4xl">Apprendre en construisant, pas en regardant.</h2>
                <p className="mt-4 text-lg leading-8 text-smoke">Ateliers Linux et Git, revues de code en direct, sessions de pair programming sur UniFlow : l’Academy est le volet formation du collectif, ouvert aux étudiants du campus.</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button href="/contact" variant="forge" className="shine">Participer au prochain atelier <ArrowRight className="h-4 w-4" /></Button>
                </div>
              </div>
            </Sticker>
          </Reveal>
        </div>
      </section>

      <FinalCta title="Prêt à forger avec nous ?" text="Débutant ou expert, vous avez votre place. Un message suffit pour découvrir comment contribuer." />
    </>
  )
}
