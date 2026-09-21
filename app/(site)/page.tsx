import type { Metadata } from 'next'
import { CommunityBand } from '@/components/home/community-band'
import { FeaturedProjects } from '@/components/home/featured-projects'
import { FinalCta } from '@/components/home/final-cta'
import { Hero } from '@/components/home/hero'
import { Pillars } from '@/components/home/pillars'
import { ServicesTeaser } from '@/components/home/services-teaser'
import { TeamStrip } from '@/components/home/team-strip'
import { Marquee } from '@/components/site/marquee'
import { ORGANIZATION_JSON_LD, SITE } from '@/lib/data/site'

export const metadata: Metadata = {
  title: 'Kernel Forge — Collectif open source de l’Université de Yaoundé I',
  description: SITE.description,
  alternates: { canonical: '/' },
  openGraph: { title: 'Kernel Forge — Code. Forge. Impact.', description: SITE.description, url: '/' },
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSON_LD) }} />
      <Hero />
      <Marquee />
      <Pillars />
      <FeaturedProjects />
      <ServicesTeaser />
      <TeamStrip />
      <CommunityBand />
      <FinalCta />
    </>
  )
}
