import { Suspense } from 'react'
import { HeroSection } from '@/components/hero-section-pro'
import { FeaturedProjects } from '@/components/featured-projects'
import { CTASection } from '@/components/cta-section'
import { ScrollReveal } from '@/components/animations/scroll-reveal'

export default function Home() {
  return (
    <div>
      <HeroSection />
      
      <ScrollReveal>
        <section className="py-20 md:py-32 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Featured Projects
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover the innovative open-source software we&apos;re building
              </p>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
              <FeaturedProjects />
            </Suspense>
          </div>
        </section>
      </ScrollReveal>

      <CTASection />
    </div>
  )
}
