import type { ReactNode } from 'react'
import { Button, type ButtonProps } from '@/components/ui/button'
import { Monogram } from '@/components/ui/monogram'
import { CHANNELS, SITE } from '@/lib/data/site'

const WHATSAPP = CHANNELS.find((channel) => channel.id === 'whatsapp')!

type WhatsAppButtonProps = Omit<Extract<ButtonProps, { href: string }>, 'href' | 'children'> & { children?: ReactNode }

/** Le point d'entrée unique vers le code et l'équipe : le groupe WhatsApp du collectif. */
export function WhatsAppButton({ children = 'Nous écrire sur WhatsApp', variant = 'paper', ...rest }: WhatsAppButtonProps) {
  return (
    <Button href={SITE.whatsapp} variant={variant} {...rest}>
      <Monogram channel={WHATSAPP} className="h-6 w-6 rounded-md text-[11px]" /> {children}
    </Button>
  )
}
