import { Suspense } from 'react'
import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { FeaturedProjects } from '@/components/featured-projects'
import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
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
