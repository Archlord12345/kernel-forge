import { Suspense } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ProjectsGrid } from '@/components/projects-grid'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects - Kernel Forge',
  description: 'Explore all open-source projects created by Kernel Forge',
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
