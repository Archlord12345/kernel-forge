import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - Kernel Forge',
  description: 'Learn about Kernel Forge and our mission',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Page Header */}
            <div className="mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                About Kernel Forge
              </h1>
              <p className="text-lg text-muted-foreground">
                Kernel Forge is a student software development collective at the University of Yaoundé I dedicated to creating exceptional open-source software and fostering a community of innovation.
              </p>
            </div>

            {/* Content Sections */}
            <div className="space-y-12">
              {/* Mission */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our mission is to empower students to build amazing software, contribute to the open-source community, and make a positive impact on the world. We believe that everyone has the potential to create great things, regardless of their background or experience level.
                </p>
              </div>

              {/* Vision */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We envision a world where open-source software is created collaboratively by passionate individuals from diverse backgrounds. Our vision is to build a thriving community where innovation and creativity flourish, and where everyone has the opportunity to learn, grow, and make a difference.
                </p>
              </div>

              {/* Values */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
                <ul className="space-y-3">
                  {[
                    'Collaboration: We believe in the power of working together',
                    'Innovation: We embrace new ideas and creative solutions',
                    'Transparency: We operate with honesty and openness',
                    'Learning: We prioritize continuous growth and development',
                    'Community: We foster a supportive and inclusive environment',
                  ].map((value) => (
                    <li key={value} className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-muted-foreground">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* History */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Story</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Kernel Forge was founded by a group of passionate students at the University of Yaoundé I who shared a vision of building great software and contributing to the open-source community. What started as a small group of friends has grown into a vibrant collective of developers, designers, and creators.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, we continue to pursue our mission of empowering students and creating exceptional open-source software that makes a positive impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
