import { ArrowRight } from 'lucide-react'
import { ChannelsGrid } from '@/components/site/channels-grid'
import { SectionHeading } from '@/components/site/section-heading'
import { Button } from '@/components/ui/button'

export function CommunityBand() {
  return (
    <section className="section bg-paper">
      <div className="wrap">
        <SectionHeading
          title="Choisissez votre porte d’entrée."
          lead="Suivez les annonces, posez une question ou venez construire avec nous. Chaque canal a son rythme, tous mènent à la même communauté."
          action={<Button href="/community" variant="paper">La communauté <ArrowRight className="h-4 w-4" /></Button>}
        />
        <ChannelsGrid />
      </div>
    </section>
  )
}
