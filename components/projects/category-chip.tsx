import { CATEGORY_LABELS, type ProjectCategory } from '@/lib/data/projects'
import { cn } from '@/lib/utils'

const tones: Record<ProjectCategory, string> = {
  web: 'bg-forge text-ink',
  cli: 'bg-ink text-paper',
  library: 'bg-ember text-ink',
  other: 'bg-creeper text-ink',
}

export function CategoryChip({ category, className }: { category: ProjectCategory; className?: string }) {
  return <span className={cn('inline-flex h-7 items-center rounded-full border-2 border-ink px-2.5 font-display text-xs font-extrabold', tones[category], className)}>{CATEGORY_LABELS[category]}</span>
}
