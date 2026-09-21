import Image from 'next/image'
import { cn } from '@/lib/utils'

export type SpotIconName =
  | 'web' | 'mobile' | 'saas' | 'api' | 'desktop' | 'linux' | 'design' | '3d'
  | 'build' | 'learn' | 'share' | 'contribute' | 'collab' | 'opensource' | 'innovation' | 'impact'
  | 'mail' | 'location' | 'repo' | 'rocket' | 'maintenance' | 'shield' | 'chat' | 'calendar'

type SpotIconProps = { name: SpotIconName; size?: number; className?: string; alt?: string }

/** Icône illustrée (planche générée dans le style d'Arch), fond transparent. */
export function SpotIcon({ name, size = 56, className, alt = '' }: SpotIconProps) {
  return <Image src={`/icons/${name}.webp`} alt={alt} width={size} height={size} sizes={`${size}px`} draggable={false} className={cn('select-none', className)} style={{ width: size, height: size, objectFit: 'contain' }} />
}

type Tone = 'forge' | 'creeper' | 'paper' | 'paper-2' | 'ink' | 'ember' | 'white'

const tones: Record<Tone, string> = {
  forge: 'bg-forge',
  creeper: 'bg-creeper',
  paper: 'bg-paper',
  'paper-2': 'bg-paper-2',
  ink: 'bg-ink-2',
  ember: 'bg-ember',
  white: 'bg-white',
}

type IconTileProps = { name: SpotIconName; tone?: Tone; size?: 'sm' | 'md' | 'lg'; className?: string; wiggle?: boolean }

// Boîte − bordure 2×2 px − rembourrage = taille de l'icône, sinon le `max-width: 100%` du preflight écrase la largeur seule.
const tileSizes = { sm: { box: 'h-11 w-11 p-1', icon: 32 }, md: { box: 'h-16 w-16 p-2', icon: 44 }, lg: { box: 'h-24 w-24 p-3', icon: 68 } }

/** Tuile colorée « sticker » contenant une icône illustrée ; s'anime quand le parent `.group` est survolé. */
export function IconTile({ name, tone = 'paper', size = 'md', className, wiggle = true }: IconTileProps) {
  const { box, icon } = tileSizes[size]
  return (
    <span className={cn('sticker-sm grid shrink-0 place-items-center', tones[tone], box, wiggle && 'transition-transform duration-300 ease-out group-hover:-rotate-6 group-hover:scale-110', className)}>
      <SpotIcon name={name} size={icon} />
    </span>
  )
}
