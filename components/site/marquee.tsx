import { SpotIcon, type SpotIconName } from '@/components/ui/spot-icon'
import { cn } from '@/lib/utils'

type MarqueeItem = { label: string; icon: SpotIconName }

const DEFAULT_ITEMS: MarqueeItem[] = [
  { label: 'Construire', icon: 'build' },
  { label: 'Apprendre', icon: 'learn' },
  { label: 'Partager', icon: 'share' },
  { label: 'Contribuer', icon: 'contribute' },
  { label: 'Open source', icon: 'opensource' },
  { label: 'Linux', icon: 'linux' },
  { label: 'UniFlow', icon: 'saas' },
  { label: 'Yaoundé', icon: 'location' },
]

type MarqueeProps = { items?: MarqueeItem[]; tone?: 'forge' | 'ink' | 'paper'; className?: string }

/** Bandeau défilant continu, en pause au survol. */
export function Marquee({ items = DEFAULT_ITEMS, tone = 'forge', className }: MarqueeProps) {
  const doubled = [...items, ...items]
  return (
    <div className={cn('overflow-hidden border-y-2 border-ink', tone === 'forge' && 'bg-forge text-ink', tone === 'ink' && 'bg-ink text-paper', tone === 'paper' && 'bg-paper text-ink', className)} aria-hidden="true">
      <div className="marquee-track py-3">
        {doubled.map((item, index) => (
          <span key={`${item.label}-${index}`} className="flex items-center gap-5 pr-5 font-display text-lg font-extrabold tracking-tight sm:text-xl">
            <span className={cn('grid h-11 w-11 place-items-center rounded-xl border-2 border-ink', tone === 'ink' ? 'bg-paper' : 'bg-paper')}>
              <SpotIcon name={item.icon} size={30} />
            </span>
            {item.label}
          </span>
        ))}
      </div>
    </div>
  )
}
