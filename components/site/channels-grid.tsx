import { ArrowUpRight } from 'lucide-react'
import { Stagger, StaggerItem } from '@/components/motion/primitives'
import { Monogram } from '@/components/ui/monogram'
import { Sticker } from '@/components/ui/sticker'
import { CHANNELS } from '@/lib/data/site'
import { cn } from '@/lib/utils'

/** Les cinq canaux, chacun avec son monogramme et une ombre à sa couleur. */
export function ChannelsGrid({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <Stagger className={cn('grid gap-4 sm:grid-cols-2 lg:grid-cols-5', className)}>
      {CHANNELS.map((channel) => (
        <StaggerItem key={channel.id} className="h-full">
          <Sticker as="a" href={channel.href} target="_blank" rel="noopener noreferrer" tone="paper" hover className={cn('group flex h-full flex-col', compact ? 'p-4' : 'p-5')} style={{ ['--sticker-shadow' as string]: channel.color }}>
            <Monogram channel={channel} className="h-12 w-12 text-lg transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110" />
            <h3 className="mt-4 font-display text-lg font-extrabold tracking-tight">{channel.name}</h3>
            <p className="font-display text-sm font-bold" style={{ color: channel.color }}>{channel.action}</p>
            {!compact && <p className="mt-2 flex-1 text-sm leading-6 text-smoke">{channel.description}</p>}
            <span className="mt-4 inline-flex items-center gap-1 font-display text-xs font-extrabold text-ink">Ouvrir <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
          </Sticker>
        </StaggerItem>
      ))}
    </Stagger>
  )
}
