'use client'

import { useEffect } from 'react'
import { RotateCcw } from 'lucide-react'
import { Mascot } from '@/components/mascot'
import { Button } from '@/components/ui/button'
import { Burst } from '@/components/ui/burst'
import { Sticker } from '@/components/ui/sticker'
import { SpotIcon } from '@/components/ui/spot-icon'
import { SITE } from '@/lib/data/site'

export default function SiteError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className="relative overflow-hidden bg-paper">
      <div className="glow-orb -right-40 -top-40 h-[26rem] w-[26rem] bg-tnt/15 animate-drift" aria-hidden="true" />
      <div className="wrap relative py-16 lg:py-24">
        <Sticker tone="white" shadow="forge" className="relative grid overflow-hidden lg:grid-cols-[1fr_.8fr]">
          <div className="p-7 sm:p-10">
            <p className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-tnt px-3 py-1 font-pixel text-xs text-white">TNT · erreur 500</p>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl">Quelque chose a explosé.</h1>
            <p className="mt-4 max-w-lg text-lg leading-8 text-smoke">Une erreur inattendue s’est produite en affichant cette page. Arch est déjà en train de réparer. Vous pouvez réessayer tout de suite ; si le problème persiste, dites-le-nous.</p>
            {error.digest && <p className="mt-3 font-pixel text-[10px] text-smoke">Référence : {error.digest}</p>}
            <div className="mt-8 flex flex-wrap gap-3">
              <Button onClick={reset} variant="forge" size="lg" className="shine"><RotateCcw className="h-4 w-4" /> Réessayer</Button>
              <Button href="/" variant="paper" size="lg">Retour à l’accueil</Button>
              <Button href={`mailto:${SITE.email}?subject=${encodeURIComponent('Erreur sur kernelforge.codes')}`} variant="ghost" size="lg"><SpotIcon name="mail" size={20} /> Signaler</Button>
            </div>
          </div>
          <div className="relative border-t-2 border-ink bg-paper-2 p-6 lg:border-l-2 lg:border-t-0">
            <div className="halftone absolute inset-0 text-ink/10" aria-hidden="true" />
            <Burst className="absolute left-6 top-6 h-14 w-14 text-tnt animate-pop" stroke={false} />
            <Burst className="absolute right-8 top-1/3 h-8 w-8 text-forge animate-pop [animation-delay:-1.5s]" stroke={false} />
            <div className="relative mx-auto w-[80%] max-w-xs"><Mascot pose="fixing" sizes="(min-width: 1024px) 28vw, 60vw" /></div>
          </div>
        </Sticker>
      </div>
    </section>
  )
}
