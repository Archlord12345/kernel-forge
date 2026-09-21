import { Stagger, StaggerItem } from '@/components/motion/primitives'
import { SectionHeading } from '@/components/site/section-heading'
import { Sticker } from '@/components/ui/sticker'
import { IconTile, type SpotIconName } from '@/components/ui/spot-icon'
import { PILLARS } from '@/lib/data/content'

const meta: Record<string, { icon: SpotIconName; tone: 'forge' | 'creeper' | 'ember' | 'paper-2' }> = {
  Construire: { icon: 'build', tone: 'forge' },
  Apprendre: { icon: 'learn', tone: 'ember' },
  Partager: { icon: 'share', tone: 'paper-2' },
  Contribuer: { icon: 'contribute', tone: 'creeper' },
}

export function Pillars() {
  return (
    <section className="section bg-paper">
      <div className="wrap">
        <SectionHeading title="Quatre verbes, une méthode." lead="Build, learn, share, contribute : c’est ce que nous répétons depuis le premier commit. Chaque projet du collectif passe par ces quatre étapes." />
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar) => (
            <StaggerItem key={pillar.verb} className="h-full">
              <Sticker as="article" hover className="group flex h-full flex-col p-6">
                <IconTile name={meta[pillar.verb].icon} tone={meta[pillar.verb].tone} size="lg" />
                <h3 className="mt-6 font-display text-2xl font-extrabold tracking-tight">{pillar.verb}</h3>
                <p className="mt-2 text-[15px] leading-7 text-smoke">{pillar.text}</p>
              </Sticker>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
