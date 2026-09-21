import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type BurstProps = {
  points?: number
  inner?: number
  className?: string
  stroke?: boolean
}

function burstPoints(points: number, inner: number) {
  return Array.from({ length: points * 2 }, (_, index) => {
    const radius = index % 2 === 0 ? 48 : 48 * inner
    const angle = (Math.PI * index) / points - Math.PI / 2
    return `${(50 + radius * Math.cos(angle)).toFixed(2)},${(50 + radius * Math.sin(angle)).toFixed(2)}`
  }).join(' ')
}

/** Éclat de bande dessinée, hérité des onomatopées du logo. Se colore avec `currentColor`. */
export function Burst({ points = 14, inner = 0.72, className, stroke = true }: BurstProps) {
  return (
    <svg viewBox="0 0 100 100" className={cn('block', className)} aria-hidden="true" focusable="false">
      <polygon points={burstPoints(points, inner)} fill="currentColor" stroke={stroke ? 'var(--color-ink)' : 'none'} strokeWidth={stroke ? 2.5 : 0} strokeLinejoin="round" />
    </svg>
  )
}

type BurstLabelProps = {
  children: ReactNode
  tone?: 'forge' | 'creeper' | 'paper' | 'tnt'
  rotate?: number
  className?: string
  textClassName?: string
}

const toneClass = { forge: 'text-forge', creeper: 'text-creeper', paper: 'text-paper', tnt: 'text-tnt' }

/** Un éclat avec un court texte au centre, façon tampon. */
export function BurstLabel({ children, tone = 'forge', rotate = -8, className, textClassName }: BurstLabelProps) {
  return (
    <span className={cn('relative inline-grid place-items-center', toneClass[tone], className)} style={{ transform: `rotate(${rotate}deg)` }}>
      <Burst className="col-start-1 row-start-1 h-full w-full" />
      <span className={cn('col-start-1 row-start-1 px-[14%] text-center font-display font-extrabold leading-none tracking-tight text-ink', textClassName)}>{children}</span>
    </span>
  )
}
