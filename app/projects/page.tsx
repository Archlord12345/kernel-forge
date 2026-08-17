import { Suspense } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ProjectsGrid } from '@/components/projects-grid'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Open Source Projects - Kernel Forge',
  description: 'Discover innovative open-source software projects built by our community. Explore web apps, CLI tools, libraries, and more from Kernel Forge.',
  keywords: ['open source projects', 'software', 'GitHub', 'web applications', 'development tools'],
  openGraph: {
    title: 'Open Source Projects - Kernel Forge',
    description: 'Discover the innovative open-source software built by our community',
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
              Our Projects
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover the innovative open-source software built by our community
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
