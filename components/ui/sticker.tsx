import type { ComponentPropsWithoutRef, ElementType } from 'react'
import { cn } from '@/lib/utils'

type Tone = 'paper' | 'paper-2' | 'white' | 'ink' | 'forge' | 'creeper'
type Shadow = 'ink' | 'forge' | 'creeper' | 'paper' | 'none'

const tones: Record<Tone, string> = {
  paper: 'bg-paper text-ink',
  'paper-2': 'bg-paper-2 text-ink',
  white: 'bg-white text-ink',
  ink: 'bg-ink text-paper',
  forge: 'bg-forge text-ink',
  creeper: 'bg-creeper text-ink',
}

const shadows: Record<Shadow, string> = {
  ink: '',
  forge: 'sticker-forge',
  creeper: 'sticker-creeper',
  paper: 'sticker-paper',
  none: 'sticker-flat',
}

type StickerProps<T extends ElementType> = {
  as?: T
  tone?: Tone
  shadow?: Shadow
  hover?: boolean
  small?: boolean
  className?: string
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'className'>

export function Sticker<T extends ElementType = 'div'>({ as, tone = 'paper', shadow = 'ink', hover = false, small = false, className, ...rest }: StickerProps<T>) {
  const Component = (as ?? 'div') as ElementType
  return <Component className={cn(small ? 'sticker-sm' : 'sticker', tones[tone], shadows[shadow], hover && 'sticker-hover', className)} {...rest} />
}
