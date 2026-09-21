import type { ReactNode } from 'react'
import { Reveal } from '@/components/motion/primitives'
import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  title: ReactNode
  lead?: ReactNode
  action?: ReactNode
  align?: 'left' | 'center'
  tone?: 'ink' | 'paper'
  className?: string
}

export function SectionHeading({ title, lead, action, align = 'left', tone = 'paper', className }: SectionHeadingProps) {
  const dark = tone === 'ink'
  return (
    <Reveal className={cn('mb-10 flex flex-col gap-6 md:mb-14', align === 'center' ? 'items-center text-center' : 'md:flex-row md:items-end md:justify-between', className)}>
      <div className={cn('max-w-2xl', align === 'center' && 'mx-auto')}>
        <h2 className={cn('font-display text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl', dark ? 'text-paper' : 'text-ink')}>{title}</h2>
        {lead && <p className={cn('mt-4 text-lg leading-8', dark ? 'text-sand/80' : 'text-smoke')}>{lead}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </Reveal>
  )
}
