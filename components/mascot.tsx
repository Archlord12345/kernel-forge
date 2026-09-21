import Image from 'next/image'
import { cn } from '@/lib/utils'

export type MascotPose = 'pointing' | 'waving' | 'lost' | 'fixing' | 'coding'

const POSES: Record<MascotPose, { src: string; width: number; height: number; alt: string }> = {
  pointing: { src: '/arch/pointing.webp', width: 726, height: 900, alt: 'Arch, la mascotte de Kernel Forge, pointe du doigt en tenant une liste de tâches' },
  waving: { src: '/arch/waving.webp', width: 694, height: 900, alt: 'Arch salue de la main, une lettre à la main' },
  lost: { src: '/arch/lost.webp', width: 571, height: 900, alt: 'Arch, perplexe, cherche avec une loupe' },
  fixing: { src: '/arch/fixing.webp', width: 900, height: 859, alt: 'Arch répare avec une clé et un ordinateur portable' },
  coding: { src: '/arch/coding.webp', width: 803, height: 900, alt: 'Arch code, assis avec son ordinateur, un café et une peluche Creeper' },
}

type MascotProps = {
  pose: MascotPose
  className?: string
  priority?: boolean
  flip?: boolean
  float?: boolean
  sizes?: string
}

export function Mascot({ pose, className, priority = false, flip = false, float = false, sizes = '(min-width: 1024px) 40vw, 80vw' }: MascotProps) {
  const { src, width, height, alt } = POSES[pose]
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      sizes={sizes}
      draggable={false}
      className={cn('h-auto w-full select-none', flip && '-scale-x-100', float && 'animate-float', className)}
    />
  )
}
