import Link from 'next/link'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'forge' | 'ink' | 'paper' | 'creeper' | 'ghost' | 'ghost-light'
type Size = 'sm' | 'md' | 'lg'

const base = 'press inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border-2 font-display font-bold tracking-tight whitespace-nowrap select-none disabled:pointer-events-none disabled:opacity-60'

const variants: Record<Variant, string> = {
  forge: 'border-ink bg-forge text-ink shadow-hard-sm hover:shadow-hard',
  ink: 'border-ink bg-ink text-paper shadow-hard-forge-sm hover:shadow-hard-forge',
  paper: 'border-ink bg-paper text-ink shadow-hard-sm hover:shadow-hard',
  creeper: 'border-ink bg-creeper text-ink shadow-hard-sm hover:shadow-hard',
  ghost: 'border-transparent bg-transparent text-ink hover:bg-ink/6',
  'ghost-light': 'border-paper/25 bg-transparent text-paper hover:border-paper/60 hover:bg-paper/8',
}

const sizes: Record<Size, string> = {
  sm: 'h-10 px-4 text-sm',
  md: 'h-12 px-5 text-[15px]',
  lg: 'h-14 px-7 text-base',
}

type CommonProps = { variant?: Variant; size?: Size; className?: string; children: ReactNode }
type ButtonAsButton = CommonProps & ComponentPropsWithoutRef<'button'> & { href?: undefined }
type ButtonAsLink = CommonProps & Omit<ComponentPropsWithoutRef<'a'>, 'href'> & { href: string }

export type ButtonProps = ButtonAsButton | ButtonAsLink

export function Button(props: ButtonProps) {
  const { variant = 'forge', size = 'md', className, children } = props
  const classes = cn(base, variants[variant], sizes[size], className)

  if (props.href !== undefined) {
    const { href, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props
    const external = /^https?:\/\//.test(href) || href.startsWith('mailto:')
    if (external) {
      return (
        <a href={href} className={classes} target={href.startsWith('mailto:') ? undefined : '_blank'} rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'} {...rest}>
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  const { variant: _v, size: _s, className: _c, children: _ch, type = 'button', ...rest } = props
  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  )
}
