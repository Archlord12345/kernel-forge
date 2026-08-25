'use client'

import Link from 'next/link'
import { track } from '@vercel/analytics'

export function CTASection() {
  const handleTrack = (eventName: string) => {
    track(eventName, { location: 'homepage_cta' })
  }

  return (
    <section className="py-20 md:py-32 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary-foreground text-balance">
            Prêt à transformer votre idée en projet concret ?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-balance">
            Décrivez votre besoin, échangez avec l’équipe et obtenez un plan d’exécution clair. Débutant ou expert, vous avez votre place chez Kernel Forge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              onClick={() => handleTrack('cta_contact_bottom_click')}
              className="px-8 py-4 rounded-lg bg-primary-foreground text-primary font-semibold hover:shadow-lg transition-all"
            >
              Obtenir un premier échange
            </Link>
            <Link
              href="/services"
              onClick={() => handleTrack('cta_services_bottom_click')}
              className="px-8 py-4 rounded-lg border-2 border-primary-foreground text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors"
            >
              Voir les services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
