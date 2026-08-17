import { Suspense } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ProjectsGrid } from '@/components/projects-grid'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projets open source - Kernel Forge',
  description: 'Découvrez les logiciels libres construits par la communauté Kernel Forge : applications web, outils, bibliothèques et projets universitaires.',
  keywords: ['open source projects', 'software', 'GitHub', 'web applications', 'development tools'],
  openGraph: {
    title: 'Projets open source - Kernel Forge',
    description: 'Découvrez les logiciels libres construits par la communauté Kernel Forge.',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Affiche%20Kernel%20Forge%20Academy.png-km9Xou1MF4bDNLZ4sqkXNoMiDQLHmF.jpeg',
        width: 1600,
        height: 900,
        alt: 'Kernel Forge Academy',
      },
    ],
  },
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Nos projets
            </h1>
            <p className="text-lg text-muted-foreground">
              Explorez les logiciels, outils et expériences que nous construisons et partageons avec la communauté.
            </p>
          </div>

          {/* Projects Grid */}
          <Suspense fallback={<div className="h-96 bg-secondary animate-pulse rounded-lg" />}>
            <ProjectsGrid />
          </Suspense>
        </div>
      </section>
      <Footer />
    </main>
  )
}
