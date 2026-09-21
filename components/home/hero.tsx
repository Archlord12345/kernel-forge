'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Mascot } from '@/components/mascot'
import { Button } from '@/components/ui/button'
import { Burst, BurstLabel } from '@/components/ui/burst'
import { IconTile, SpotIcon } from '@/components/ui/spot-icon'
import { WhatsAppButton } from '@/components/ui/whatsapp-button'
import { Terminal } from '@/components/home/terminal'
import { SITE } from '@/lib/data/site'

const EASE = [0.2, 0.8, 0.2, 1] as const
const words = ['Apprendre', 'en', 'forgeant', 'du', 'logiciel', 'libre.']

const wordVariants: Variants = {
  hidden: { y: '110%', opacity: 0, rotate: 4 },
  show: (index: number) => ({ y: 0, opacity: 1, rotate: 0, transition: { duration: 0.7, ease: EASE, delay: 0.08 * index } }),
}

export function Hero() {
  const reduced = useReducedMotion()
  const enter = (delay: number) => (reduced ? {} : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, ease: EASE, delay } })

  return (
    <section className="relative overflow-hidden border-b-2 border-ink bg-ink text-paper">
      <div className="forge-grid absolute inset-0" aria-hidden="true" />
      <div className="glow-orb -left-40 -top-40 h-[34rem] w-[34rem] bg-forge/30 animate-drift" aria-hidden="true" />
      <div className="glow-orb -bottom-48 right-[10%] h-[28rem] w-[28rem] bg-creeper/20 animate-drift-2" aria-hidden="true" />

      <div className="wrap relative grid items-center gap-12 pb-20 pt-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-8 lg:pb-28 lg:pt-20">
        <div className="relative z-10">
          <motion.p {...enter(0)} className="inline-flex items-center gap-2 rounded-full border-2 border-paper/20 bg-paper/5 px-3 py-1.5 text-sm font-semibold text-sand">
            <span className="relative flex h-2.5 w-2.5"><span className="absolute inset-0 rounded-full bg-creeper animate-pulse-ring" /><span className="relative h-2.5 w-2.5 rounded-full bg-creeper" /></span>
            Collectif open source, {SITE.university}
          </motion.p>

          <h1 className="mt-6 font-display text-[2.9rem] font-extrabold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.4rem]">
            {words.map((word, index) => (
              <span key={word} className="inline-block overflow-hidden pb-[0.08em] pr-[0.18em] align-bottom">
                <motion.span custom={index} variants={wordVariants} initial={reduced ? false : 'hidden'} animate="show" className={`inline-block ${word === 'forgeant' ? 'text-forge' : ''}`}>
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p {...enter(0.45)} className="mt-6 max-w-xl text-lg leading-8 text-sand/85 sm:text-xl">
            Nous sommes des étudiants de Yaoundé. Nous construisons UniFlow et d’autres outils libres, nous les documentons, et nous aidons les organisations à lancer leurs produits web, mobile et Linux.
          </motion.p>

          <motion.div {...enter(0.6)} className="mt-8 flex flex-wrap gap-3">
            <Button href="/projects" variant="forge" size="lg" className="shine">
              <SpotIcon name="repo" size={22} /> Voir nos projets <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/contact" variant="paper" size="lg">
              <SpotIcon name="chat" size={22} /> Parler de votre projet
            </Button>
            <WhatsAppButton variant="ghost-light" size="lg">WhatsApp</WhatsAppButton>
          </motion.div>

          <motion.div {...enter(0.8)} className="mt-10 max-w-xl">
            <Terminal />
            <p className="mt-3 text-sm leading-6 text-sand/70">Le dépôt Joinus explique comment rejoindre l’équipe. Le code de nos projets, lui, se partage sur demande : écrivez-nous sur WhatsApp.</p>
          </motion.div>
        </div>

        <div className="relative mx-auto w-full max-w-[26rem] lg:max-w-none">
          <motion.div initial={reduced ? false : { opacity: 0, x: 60, rotate: 3 }} animate={{ opacity: 1, x: 0, rotate: 0 }} transition={{ duration: 0.9, ease: EASE, delay: 0.25 }} className="relative">
            <div className="absolute inset-x-[12%] bottom-[6%] top-[12%] rounded-[3rem] border-2 border-ink bg-forge/90 shadow-hard-paper" aria-hidden="true" />
            <div className="halftone absolute inset-x-[12%] bottom-[6%] top-[12%] rounded-[3rem] text-ink/20" aria-hidden="true" />
            <Mascot pose="pointing" flip float priority className="relative z-10 mx-auto w-[88%] drop-shadow-[0_18px_0_rgba(23,18,15,0.35)]" sizes="(min-width: 1024px) 38vw, 80vw" />

            <motion.div {...enter(0.9)} className="absolute -left-2 top-[14%] z-20 sm:left-0">
              <BurstLabel tone="paper" rotate={-10} className="h-28 w-28 sm:h-32 sm:w-32" textClassName="text-[0.95rem] sm:text-base">{SITE.tagline}</BurstLabel>
            </motion.div>
            <motion.div {...enter(1.05)} className="absolute right-0 top-[8%] z-20 animate-float [animation-delay:-2s]">
              <IconTile name="linux" tone="paper" size="md" wiggle={false} className="sticker-forge" />
            </motion.div>
            <motion.div {...enter(1.15)} className="absolute -right-1 bottom-[22%] z-20 animate-float [animation-delay:-4s] sm:right-2">
              <IconTile name="opensource" tone="creeper" size="md" wiggle={false} />
            </motion.div>
            <motion.div {...enter(1.25)} className="absolute bottom-[8%] left-[4%] z-20 animate-float [animation-delay:-1s]">
              <IconTile name="build" tone="paper" size="sm" wiggle={false} />
            </motion.div>

            <Burst className="absolute left-[8%] top-[4%] h-8 w-8 text-ember animate-pop" stroke={false} />
            <Burst className="absolute right-[14%] top-[36%] h-6 w-6 text-creeper animate-pop [animation-delay:-1.6s]" stroke={false} />
            <Burst className="absolute bottom-[10%] right-[30%] h-10 w-10 text-forge animate-pop [animation-delay:-3s]" stroke={false} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
