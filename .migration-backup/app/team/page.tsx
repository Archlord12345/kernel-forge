import { Suspense } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { TeamGrid } from '@/components/team-grid'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Team - Kernel Forge Contributors',
  description: 'Meet the talented developers, designers, and creators behind Kernel Forge. Connect with our passionate team members working on open-source innovation.',
  keywords: ['team', 'developers', 'contributors', 'software engineers', 'creators'],
  openGraph: {
    title: 'Our Team - Kernel Forge',
    description: 'Meet the talented people behind Kernel Forge',
    images: [
      {
        url: '/kernel-forge-logo.png',
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
              Meet the Team
            </h1>
            <p className="text-lg text-muted-foreground">
              Talented developers, designers, and creators working together to build amazing things
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
