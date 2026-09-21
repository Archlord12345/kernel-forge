import type { Metadata } from 'next'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { FinalCta } from '@/components/home/final-cta'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/primitives'
import { PageIntro } from '@/components/site/page-intro'
import { SectionHeading } from '@/components/site/section-heading'
import { Button } from '@/components/ui/button'
import { Burst } from '@/components/ui/burst'
import { Sticker } from '@/components/ui/sticker'
import { IconTile, SpotIcon, type SpotIconName } from '@/components/ui/spot-icon'
import { WhatsAppButton } from '@/components/ui/whatsapp-button'
import { STORY, VALUES } from '@/lib/data/content'
import { PROJECTS } from '@/lib/data/projects'
import { CHANNELS, SITE } from '@/lib/data/site'
import { TEAM } from '@/lib/data/team'

export const metadata: Metadata = {
  title: 'À propos — Mission, histoire et valeurs',
  description: 'Kernel Forge, collectif étudiant de l’Université de Yaoundé I : une forge ouverte pour apprendre, construire et partager des logiciels libres utiles.',
  alternates: { canonical: '/about' },
  openGraph: { title: 'À propos de Kernel Forge', description: 'Apprendre en construisant et faire grandir le logiciel libre depuis Yaoundé.', url: '/about' },
}

const VALUE_ICONS: { icon: SpotIconName; tone: 'forge' | 'ember' | 'creeper' | 'paper-2' }[] = [
  { icon: 'collab', tone: 'creeper' },
  { icon: 'learn', tone: 'ember' },
  { icon: 'impact', tone: 'forge' },
  { icon: 'opensource', tone: 'paper-2' },
]

const STATS = [
  { value: String(TEAM.length), label: 'membres actifs', icon: 'collab' as SpotIconName },
  { value: String(PROJECTS.length), label: 'projets livrés ou en cours', icon: 'repo' as SpotIconName },
  { value: String(CHANNELS.length), label: 'canaux communautaires', icon: 'chat' as SpotIconName },
  { value: '1', label: 'campus, Yaoundé I', icon: 'location' as SpotIconName },
]

export default function AboutPage() {
  return (
    <>
      <PageIntro
        title={<>Nous apprenons en construisant <span className="text-forge">ce qui compte.</span></>}
        lead="Kernel Forge est un collectif étudiant de l’Université de Yaoundé I qui transforme la curiosité technique en logiciels libres utiles, accessibles et durables."
        aside={
          <Sticker tone="paper" shadow="forge" className="overflow-hidden">
            <Image src="/kernel-forge-crew.webp" alt="Arch, Tux et le Creeper, l’équipage Kernel Forge" width={1280} height={720} priority sizes="(min-width: 1024px) 40vw, 90vw" className="h-auto w-full" />
          </Sticker>
        }
      >
        <Button href="/projects" variant="forge" className="shine"><SpotIcon name="repo" size={20} /> Voir nos projets</Button>
        <Button href="/team" variant="ghost-light">Rencontrer l’équipe <ArrowRight className="h-4 w-4" /></Button>
      </PageIntro>

      <section className="section bg-paper">
        <div className="wrap grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl">Bâtir, documenter, partager, recommencer.</h2>
            <div className="relative mt-8 inline-block">
              <Burst className="absolute -left-6 -top-6 h-14 w-14 text-ember" stroke />
              <p className="relative border-l-4 border-forge pl-5 font-display text-xl font-bold leading-relaxed text-ink">« La meilleure façon d’apprendre est de bâtir avec les autres. »</p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="space-y-5 text-lg leading-8 text-smoke">
            {STORY.map((paragraph) => <p key={paragraph.slice(0, 24)}>{paragraph}</p>)}
            <div className="flex flex-wrap gap-3 pt-2">
              <Button href={SITE.uniflow} variant="ink" size="sm">Découvrir UniFlow <ArrowRight className="h-4 w-4" /></Button>
              <WhatsAppButton size="sm">Rejoindre le WhatsApp</WhatsAppButton>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y-2 border-ink bg-forge">
        <div className="wrap py-10">
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat) => (
              <StaggerItem key={stat.label}>
                <Sticker tone="paper" className="flex items-center gap-4 p-4">
                  <IconTile name={stat.icon} tone="paper-2" size="sm" wiggle={false} />
                  <div>
                    <p className="font-pixel text-2xl leading-none text-ink">{stat.value}</p>
                    <p className="mt-1 text-sm font-semibold text-smoke">{stat.label}</p>
                  </div>
                </Sticker>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section bg-paper-2">
        <div className="wrap">
          <SectionHeading align="center" title="Une culture qui se pratique." lead="Quatre principes que l’on retrouve dans chaque dépôt, chaque revue de code et chaque atelier." />
          <Stagger className="grid gap-5 md:grid-cols-2">
            {VALUES.map((value, index) => (
              <StaggerItem key={value.title} className="h-full">
                <Sticker as="article" hover className="group flex h-full gap-5 p-6">
                  <IconTile name={VALUE_ICONS[index].icon} tone={VALUE_ICONS[index].tone} size="lg" className="shrink-0" />
                  <div>
                    <h3 className="font-display text-2xl font-extrabold tracking-tight">{value.title}</h3>
                    <p className="mt-2 text-[15px] leading-7 text-smoke">{value.text}</p>
                  </div>
                </Sticker>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <FinalCta title="La prochaine contribution peut commencer avec vous." text="Explorez nos dépôts, rejoignez les discussions ou écrivez-nous pour transformer une idée en projet." />
    </>
  )
}
