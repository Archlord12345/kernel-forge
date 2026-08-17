import { Suspense } from 'react'
import { Metadata } from 'next'
import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { FeaturedProjects } from '@/components/featured-projects'
import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Kernel Forge — Logiciel libre à l’Université de Yaoundé I',
  description: 'Kernel Forge est le collectif open source de l’Université de Yaoundé I : nous construisons, apprenons, partageons et contribuons à des projets logiciels utiles.',
  keywords: ['Kernel Forge', 'KERNEL FORGE', 'logiciel libre', 'open source Cameroun', 'Université de Yaoundé I', 'UniFlow', 'collectif développeurs Yaoundé'],
  openGraph: {
    title: 'Kernel Forge — Code. Forge. Impact.',
    description: 'Le collectif étudiant de l’Université de Yaoundé I dédié au logiciel libre et aux projets open source.',
    images: [
      {
        url: '/kernel-forge-academy.png',
        width: 2048,
        height: 1152,
        alt: 'Kernel Forge Academy — Build, Learn, Share, Contribute',
      },
    ],
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Kernel Forge',
        alternateName: 'KERNEL FORGE',
        url: 'https://kernelforge.codes',
        logo: 'https://kernelforge.codes/kernel-forge-logo.png',
        description: 'Collectif étudiant open source de l’Université de Yaoundé I.',
        email: 'ravelnghomsi@kernelforge.codes',
        sameAs: ['https://github.com/KERNEL-FORGE-G', 'https://uniflow.kernelforge.codes/', 'https://discord.gg/qqhVxZzQg', 'https://t.me/kernelforge', 'https://chat.whatsapp.com/IFkGMr4Ev2KCFAKw9EmEde'],
        address: { '@type': 'PostalAddress', addressLocality: 'Yaoundé', addressCountry: 'CM' },
      }) }} />
      <Header />
      <HeroSection />
      <Suspense fallback={<div className="h-96 bg-secondary animate-pulse" />}>
        <FeaturedProjects />
      </Suspense>
      <CTASection />
      <Footer />
    </main>
  )
}
