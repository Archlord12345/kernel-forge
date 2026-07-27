import { Suspense } from 'react'
import { HeroSection } from '@/components/hero-section-pro'
import { FeaturedProjects } from '@/components/featured-projects'
import { CTASection } from '@/components/cta-section'
import { ScrollReveal } from '@/components/animations/scroll-reveal'

export default function Home() {
  const services = [
    {
      icon: '⚙️',
      title: 'Infrastructure & DevOps',
      description: 'Gestion, automatisation et supervision des infrastructures Linux et open source'
    },
    {
      icon: '🚀',
      title: 'Logiciels Open Source',
      description: 'Développement d\'applications fiables, performantes et scalables'
    },
    {
      icon: '🌐',
      title: 'Sites & Applications',
      description: 'Création de sites web et d\'applications modernes'
    },
    {
      icon: '🎨',
      title: 'Design & UX',
      description: 'Interfaces intuitives avec expérience utilisateur soignée'
    },
    {
      icon: '🔒',
      title: 'Réseaux & Sécurité',
      description: 'Configuration et sécurisation des infrastructures réseau'
    },
    {
      icon: '🎮',
      title: 'Communauté',
      description: 'Partage, feedback et collaboration entre membres'
    },
  ]

  return (
    <div>
      <HeroSection />
      
      {/* Services Section */}
      <ScrollReveal>
        <section className="py-20 md:py-32 bg-gradient-to-b from-transparent to-secondary/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Nos Expertises
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Découvrez les services que nous proposons à la communauté
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="p-8 rounded-lg border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>
      
      <ScrollReveal>
        <section className="py-20 md:py-32 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Projets en Vedette
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Découvrez les solutions innovantes que nous construisons
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
