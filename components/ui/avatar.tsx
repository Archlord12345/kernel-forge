import { cn, initials } from '@/lib/utils'

type AvatarProps = {
  src: string | null | undefined
  name: string
  className?: string
  sizes?: string
}

export function Avatar({ src, name, className }: AvatarProps) {
  if (src) {
    return <img src={src} alt={`Portrait de ${name}`} loading="lazy" decoding="async" className={cn('block h-full w-full object-cover', className)} />
  }
  return (
    <span role="img" aria-label={`Initiales de ${name}`} className={cn('grid h-full w-full place-items-center bg-ink font-display text-2xl font-extrabold text-forge', className)}>
      {initials(name)}
    </span>
  )
}
