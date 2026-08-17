import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'À propos de Kernel Forge - Mission et vision',
  description: 'Découvrez Kernel Forge, collectif étudiant de l’Université de Yaoundé I dédié au logiciel libre, à l’apprentissage et à l’innovation.',
  keywords: ['about', 'mission', 'vision', 'open source collective', 'student developers', 'UY1'],
  openGraph: {
    title: 'À propos de Kernel Forge - Mission et vision',
    description: 'Découvrez l’histoire, la mission et les valeurs du collectif Kernel Forge.',
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
                À propos de Kernel Forge
              </h1>
              <p className="text-lg text-muted-foreground">
                Kernel Forge est un collectif étudiant de l’Université de Yaoundé I qui apprend, construit et partage des logiciels libres utiles, accessibles et durables.
              </p>
            </div>

            {/* Content Sections */}
            <div className="space-y-12">
              {/* Mission */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Notre mission</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Notre mission est de donner aux étudiants les moyens de construire de vrais logiciels, de contribuer au monde open source et de créer un impact positif. Nous croyons que chacun peut apprendre en construisant, quel que soit son niveau de départ.
                </p>
              </div>

              {/* Vision */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Notre vision</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Nous voulons faire émerger une communauté où le logiciel libre se construit de manière collaborative, avec des profils variés, des idées concrètes et une culture de transmission.
                </p>
              </div>

              {/* Values */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Nos valeurs</h2>
                <ul className="space-y-3">
                  {[
                    'Collaboration : nous croyons à la force du travail collectif',
                    'Innovation : nous accueillons les idées nouvelles et les solutions créatives',
                    'Transparence : nous partageons nos décisions et nos apprentissages',
                    'Apprentissage : nous progressons en construisant et en transmettant',
                    'Communauté : nous cultivons un environnement accueillant et solidaire',
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
                <h2 className="text-3xl font-bold text-foreground mb-4">Notre histoire</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Kernel Forge est né de la rencontre d’étudiants passionnés de l’Université de Yaoundé I qui partageaient une même envie : apprendre ensemble, créer des logiciels utiles et contribuer à l’open source. Le collectif réunit développeurs, designers et créateurs autour de projets concrets.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Nous poursuivons cette mission avec une conviction simple : le meilleur moyen d’apprendre est de bâtir, documenter, partager et recommencer.
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
