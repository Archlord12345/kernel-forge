import { Suspense } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { TeamGrid } from '@/components/team-grid'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Notre équipe - Contributeurs Kernel Forge',
  description: 'Découvrez les développeurs, designers et créateurs qui construisent Kernel Forge et contribuent au logiciel libre.',
  keywords: ['team', 'developers', 'contributors', 'software engineers', 'creators'],
  openGraph: {
    title: 'Notre équipe - Kernel Forge',
    description: 'Rencontrez les personnes qui font vivre Kernel Forge.',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-21%20at%2016.14.57-3sws87d7kKN9W5WMT4IcP74PjoJ2tp.jpeg',
        width: 1200,
        height: 1200,
        alt: 'Kernel Forge Team',
      },
    ],
  },
}

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Rencontrer l’équipe
            </h1>
            <p className="text-lg text-muted-foreground">
              Des développeurs, designers et créateurs qui apprennent et construisent ensemble.
            </p>
          </div>

          {/* Team Grid */}
          <Suspense fallback={<div className="h-96 bg-secondary animate-pulse rounded-lg" />}>
            <TeamGrid />
          </Suspense>
        </div>
      </section>
      <Footer />
    </main>
  )
}
