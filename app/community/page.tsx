import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Users, BookOpen, Code2, Lightbulb } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Community - Kernel Forge Academy | Open Source Software Collective',
  description: 'Join our vibrant community of developers, designers, and creators. Build, learn, share, contribute, and innovate with Kernel Forge Academy.',
  keywords: ['community', 'developers', 'open source', 'collaboration', 'learning'],
  openGraph: {
    title: 'Community - Kernel Forge Academy',
    description: 'Join our vibrant community of developers and creators dedicated to open-source innovation.',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Affiche%20Kernel%20Forge%20Academy.png-km9Xou1MF4bDNLZ4sqkXNoMiDQLHmF.jpeg',
        width: 1600,
        height: 900,
        alt: 'Kernel Forge Academy Building',
      },
    ],
  },
}

export default function CommunityPage() {
  const values = [
    {
      icon: Users,
      title: 'Collaborative',
      description: 'We believe in the power of collaboration and teamwork to achieve great things.',
    },
    {
      icon: Code2,
      title: 'Open Source',
      description: 'All our projects are open source, transparent, and accessible to everyone.',
    },
    {
      icon: BookOpen,
      title: 'Learning-Focused',
      description: 'We prioritize continuous learning and knowledge sharing within our community.',
    },
    {
      icon: Lightbulb,
      title: 'Innovative',
      description: 'We embrace creativity and encourage innovative solutions to real-world problems.',
    },
  ]

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section with Academy Poster */}
      <section className="relative py-12 overflow-hidden">
        <img 
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Affiche%20Kernel%20Forge%20Academy.png-km9Xou1MF4bDNLZ4sqkXNoMiDQLHmF.jpeg" 
          alt="Kernel Forge Academy - Build Learn Share Contribute Innovate Repeat" 
          className="w-full h-auto object-cover rounded-xl shadow-lg"
        />
      </section>

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Our Community
            </h1>
            <p className="text-lg text-muted-foreground">
              Join a vibrant community of passionate developers, designers, and creators dedicated to building amazing open-source software.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title} className="p-8 rounded-xl bg-card border border-border hover:border-primary transition-colors">
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              )
            })}
          </div>

          {/* Call to Action */}
          <div className="bg-primary rounded-xl p-8 md:p-12 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Ready to Join?
            </h2>
            <p className="text-primary-foreground/90 mb-8">
              Whether you&apos;re a beginner or an expert, there&apos;s a place for you in Kernel Forge. Get in touch with us to learn more about joining our community.
            </p>
            <a
              href="/contact"
              className="inline-flex px-8 py-3 rounded-lg bg-primary-foreground text-primary font-semibold hover:shadow-lg transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
