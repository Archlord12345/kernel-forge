import type { Metadata } from 'next'
import { ArrowUpRight } from 'lucide-react'
import { FinalCta } from '@/components/home/final-cta'
import { Mascot } from '@/components/mascot'
import { Reveal } from '@/components/motion/primitives'
import { ProjectsExplorer } from '@/components/projects/projects-explorer'
import { PageIntro } from '@/components/site/page-intro'
import { SectionHeading } from '@/components/site/section-heading'
import { Button } from '@/components/ui/button'
import { Sticker } from '@/components/ui/sticker'
import { IconTile, type SpotIconName } from '@/components/ui/spot-icon'
import { WhatsAppButton } from '@/components/ui/whatsapp-button'
import { ECOSYSTEM, PROJECTS } from '@/lib/data/projects'

export const metadata: Metadata = {
  title: 'Projets open source',
  description: 'UniFlow (web, mobile, desktop, backend), Kernel Store, Dino Project : les projets du collectif Kernel Forge, leurs technologies et leur état d’avancement. Code partagé sur demande.',
  alternates: { canonical: '/projects' },
  openGraph: { title: 'Projets open source — Kernel Forge', description: 'Les projets du collectif, d’UniFlow aux projets étudiants.', url: '/projects' },
}

const ECOSYSTEM_ICONS: SpotIconName[] = ['chat', 'saas', 'learn']
const ECOSYSTEM_TONES = ['creeper', 'forge', 'ember'] as const

export default function ProjectsPage() {
  return (
    <>
      <PageIntro
        title={<>Des projets livrés, <span className="text-forge">pas des promesses.</span></>}
        lead={`${PROJECTS.length} projets, du produit universitaire complet au jeu de cours. Le code est partagé sur demande : écrivez-nous sur WhatsApp et nous vous ouvrons les dépôts.`}
        aside={
          <div className="relative mx-auto w-[70%] max-w-xs lg:w-[78%]">
            <div className="absolute inset-x-[10%] bottom-0 top-[16%] rounded-[3rem] border-2 border-ink bg-forge shadow-hard-paper" aria-hidden="true" />
            <Mascot pose="pointing" priority className="relative z-10 drop-shadow-[0_14px_0_rgba(23,18,15,0.4)]" sizes="(min-width: 1024px) 28vw, 60vw" />
          </div>
        }
      >
        <WhatsAppButton variant="forge" className="shine">Demander l’accès au code</WhatsAppButton>
        <Button href="/community" variant="ghost-light">Comment contribuer <ArrowUpRight className="h-4 w-4" /></Button>
      </PageIntro>

      <section className="section bg-paper">
        <div className="wrap">
          <ProjectsExplorer />
        </div>
      </section>

      <section className="section border-t-2 border-ink bg-paper-2">
        <div className="wrap">
          <SectionHeading title="Trois espaces qui font vivre la forge." lead="L’équipe, le produit et l’apprentissage : trois portes vers le même collectif." />
          <div className="grid gap-5 md:grid-cols-3">
            {ECOSYSTEM.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.08} className="h-full">
                <Sticker as="a" href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined} hover className="group flex h-full flex-col p-6">
                  <IconTile name={ECOSYSTEM_ICONS[index]} tone={ECOSYSTEM_TONES[index]} size="md" />
                  <h3 className="mt-5 font-display text-xl font-extrabold tracking-tight">{item.name}</h3>
                  <p className="mt-2 flex-1 text-[15px] leading-7 text-smoke">{item.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">{item.tags.map((tag) => <li key={tag} className="rounded-full border border-sand bg-paper px-2.5 py-0.5 text-xs font-semibold text-smoke">{tag}</li>)}</ul>
                  <span className="mt-5 inline-flex items-center gap-1 font-display text-sm font-extrabold text-forge-deep">Découvrir <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
                </Sticker>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta title="Une idée de projet libre ?" text="Proposez-la sur WhatsApp ou Discord : les meilleurs projets du collectif ont commencé par une conversation." />
    </>
  )
}
