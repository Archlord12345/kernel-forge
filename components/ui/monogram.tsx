import type { Channel } from '@/lib/data/site'
import { cn } from '@/lib/utils'

type MonogramProps = {
  channel: Pick<Channel, 'mark' | 'color' | 'name'>
  className?: string
}

/** Pastille de réseau : lettre sur la couleur officielle du canal, contour encre. */
export function Monogram({ channel, className }: MonogramProps) {
  return (
    <span
      aria-hidden="true"
      className={cn('grid h-10 w-10 shrink-0 place-items-center rounded-xl border-2 border-ink font-display text-sm font-extrabold leading-none text-white', className)}
      style={{ backgroundColor: channel.color }}
    >
      {channel.mark}
    </span>
  )
}
