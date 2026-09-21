import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/motion/primitives'
import { Button } from '@/components/ui/button'
import { Burst } from '@/components/ui/burst'
import { Sticker } from '@/components/ui/sticker'
import { SpotIcon } from '@/components/ui/spot-icon'
import { WhatsAppButton } from '@/components/ui/whatsapp-button'

type FinalCtaProps = { title?: string; text?: string }

export function FinalCta({ title = 'Rejoignez l’équipage.', text = 'Arch, Tux et le Creeper vous attendent. Une première contribution, une question, un projet à lancer : tout commence par un message.' }: FinalCtaProps) {
  return (
    <section className="section border-t-2 border-ink bg-paper-2">
      <div className="wrap">
        <Reveal>
          <Sticker tone="paper" shadow="forge" className="relative overflow-hidden">
            <Burst className="absolute left-[46%] top-6 hidden h-10 w-10 text-forge animate-pop lg:block" stroke={false} />
            <div className="grid items-center lg:grid-cols-[.9fr_1.1fr]">
              <div className="p-7 sm:p-10 lg:pr-0">
                <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl">{title}</h2>
                <p className="mt-4 max-w-md text-lg leading-8 text-smoke">{text}</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button href="/contact" variant="forge" size="lg" className="shine"><SpotIcon name="mail" size={22} /> Écrire au collectif <ArrowRight className="h-4 w-4" /></Button>
                  <WhatsAppButton size="lg">Rejoindre le WhatsApp</WhatsAppButton>
                </div>
              </div>
              <div className="relative">
                <Image src="/kernel-forge-crew.webp" alt="Arch, Tux avec un bloc de TNT, et le Creeper devant un grand engrenage orange" width={1280} height={720} sizes="(min-width: 1024px) 55vw, 100vw" className="h-auto w-full object-contain object-right-bottom" />
              </div>
            </div>
          </Sticker>
        </Reveal>
      </div>
    </section>
  )
}
