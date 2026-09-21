'use client'

import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { Check, Copy } from 'lucide-react'
import { SITE } from '@/lib/data/site'
import { cn } from '@/lib/utils'

const CLONE_COMMAND = `git clone ${SITE.joinRepo}`

const LINES = [
  { prompt: true, text: CLONE_COMMAND },
  { prompt: true, text: 'cd Joinus && cat README.md' },
  { prompt: false, text: '# Rejoindre Kernel Forge : notre fonctionnement, nos réseaux, nos contacts.' },
  { prompt: false, text: '✔ Bienvenue dans la forge. La suite se passe sur WhatsApp.' },
]

/** Faux terminal qui tape ses commandes ; la commande de clonage se copie en un clic. */
export function Terminal({ className }: { className?: string }) {
  const reduced = useReducedMotion()
  const [progress, setProgress] = useState<{ line: number; chars: number }>(reduced ? { line: LINES.length, chars: 0 } : { line: 0, chars: 0 })
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (reduced) return
    if (progress.line >= LINES.length) return
    const current = LINES[progress.line]
    const done = progress.chars >= current.text.length
    const delay = done ? (current.prompt ? 420 : 800) : 16 + Math.random() * 28
    const timer = window.setTimeout(() => {
      setProgress((state) => (done ? { line: state.line + 1, chars: 0 } : { line: state.line, chars: state.chars + 1 }))
    }, delay)
    return () => window.clearTimeout(timer)
  }, [progress, reduced])

  useEffect(() => {
    if (!copied) return
    const timer = window.setTimeout(() => setCopied(false), 1800)
    return () => window.clearTimeout(timer)
  }, [copied])

  async function copy() {
    try {
      await navigator.clipboard.writeText(CLONE_COMMAND)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className={cn('sticker sticker-forge overflow-hidden bg-ink-2 text-left font-mono text-[13px] leading-6 text-sand', className)}>
      <div className="flex items-center gap-1.5 border-b-2 border-ink bg-ink px-4 py-2">
        <span className="h-3 w-3 rounded-full bg-tnt" />
        <span className="h-3 w-3 rounded-full bg-forge" />
        <span className="h-3 w-3 rounded-full bg-creeper" />
        <span className="ml-3 text-xs font-semibold text-sand/60">arch@kernel-forge — zsh</span>
        <button type="button" onClick={copy} className={cn('press ml-auto inline-flex h-7 items-center gap-1.5 rounded-lg border-2 border-ink px-2 font-sans text-xs font-bold', copied ? 'bg-creeper text-ink' : 'bg-paper text-ink hover:bg-ember')} aria-live="polite">
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? 'Copié' : <><span className="sm:hidden">Copier</span><span className="hidden sm:inline">Copier la commande</span></>}
        </button>
      </div>
      <div className="min-h-[7.5rem] px-4 py-3" aria-label="Démonstration : cloner le dépôt Joinus pour rejoindre l’équipe" role="img">
        {LINES.map((line, index) => {
          if (index > progress.line) return null
          const text = index < progress.line ? line.text : line.text.slice(0, progress.chars)
          const active = index === progress.line
          return (
            <p key={line.text} className={cn('whitespace-pre-wrap break-all', !line.prompt && (line.text.startsWith('#') ? 'text-ember' : 'text-creeper'))}>
              {line.prompt && <span className="mr-2 select-none text-forge">$</span>}
              {text}
              {active && <span className="ml-0.5 inline-block h-[1.1em] w-[0.55em] translate-y-[3px] bg-ember align-baseline animate-blink" aria-hidden="true" />}
            </p>
          )
        })}
        {progress.line >= LINES.length && <p><span className="mr-2 select-none text-forge">$</span><span className="inline-block h-[1.1em] w-[0.55em] translate-y-[3px] bg-ember animate-blink" aria-hidden="true" /></p>}
      </div>
    </div>
  )
}
