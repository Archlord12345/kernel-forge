import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import { FinalCta } from '@/components/home/final-cta'
import { Mascot } from '@/components/mascot'
import { PageIntro } from '@/components/site/page-intro'
import { TeamGrid } from '@/components/team/team-grid'
import { Button } from '@/components/ui/button'
import { SpotIcon } from '@/components/ui/spot-icon'
import { POSITION_ORDER, TEAM } from '@/lib/data/team'

export const metadata: Metadata = {
  title: 'Équipe — Les membres du collectif',
  description: `Les ${TEAM.length} membres de Kernel Forge : lead, frontend, mobile, backend et data. Chaque profil a un CV public avec ses dépôts, compétences et certifications.`,
  alternates: { canonical: '/team' },
  openGraph: { title: 'Équipe — Kernel Forge', description: 'Des étudiants qui livrent, relisent et transmettent.', url: '/team' },
}

export default function TeamPage() {
  return (
    <>
      <PageIntro
        tone="paper"
        title={<>{TEAM.length} membres, {POSITION_ORDER.length} pôles, <span className="text-forge-deep">un seul dépôt d’idées.</span></>}
        lead="Frontend, mobile, backend et architecture. Chaque membre a une page CV publique : dépôts, compétences, formation et certifications vérifiables."
        aside={
          <div className="relative mx-auto w-[70%] max-w-xs lg:w-[76%]">
            <div className="absolute inset-x-[10%] bottom-0 top-[16%] rounded-[3rem] border-2 border-ink bg-ember shadow-hard" aria-hidden="true" />
            <Mascot pose="waving" priority className="relative z-10 drop-shadow-[0_14px_0_rgba(23,18,15,0.3)]" sizes="(min-width: 1024px) 26vw, 60vw" />
          </div>
        }
      >
        <Button href="/community" variant="ink" className="shine"><SpotIcon name="collab" size={20} /> Rejoindre l’équipe <ArrowRight className="h-4 w-4" /></Button>
      </PageIntro>

      <section className="section bg-paper">
        <div className="wrap">
          <TeamGrid />
        </div>
      </section>

      <FinalCta title="Il manque votre nom sur cette page." text="Débutant ou confirmé, designer ou rédacteur : le collectif recrute par la contribution. Venez dire bonjour." />
    </>
  )
}
