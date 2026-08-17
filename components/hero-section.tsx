'use client'

import Link from 'next/link'
import { ArrowDown, ArrowRight, Code2, GitBranch, Sparkles, Terminal } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#17120f] text-[#fffaf0]">
      <div className="absolute inset-0 opacity-25" aria-hidden="true"><div className="forge-grid h-full w-full" /></div>
      <div className="absolute -right-40 -top-48 h-[34rem] w-[34rem] rounded-full bg-[#ff6b1a]/20 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-48 -left-40 h-[30rem] w-[30rem] rounded-full bg-[#56d5a0]/15 blur-3xl" aria-hidden="true" />
      <div className="container relative mx-auto px-4 pb-20 pt-16 sm:px-6 md:pb-28 md:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_.98fr] lg:gap-16">
          <div className="max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#ff6b1a]/40 bg-[#ff6b1a]/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#ff9a5a]"><Sparkles className="h-4 w-4" />Collectif open source · UY1</div>
            <h1 className="max-w-3xl text-5xl font-black leading-[0.96] tracking-[-0.05em] sm:text-6xl lg:text-8xl">Code.<br /><span className="text-[#ff7626]">Forge.</span><br />Impact.</h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-[#d9cec3] sm:text-xl">Kernel Forge rassemble des étudiants, des créateurs et des développeurs qui transforment des idées en logiciels libres utiles, accessibles et durables.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Link href="/projects" className="duo-button inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm">Explorer les projets<ArrowRight className="h-4 w-4" /></Link><a href="https://github.com/KERNEL-FORGE-G" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#fffaf0]/25 bg-[#fffaf0]/5 px-6 py-3.5 text-sm font-extrabold text-[#fffaf0] transition hover:border-[#ff7626] hover:bg-[#ff7626]/10"><GitBranch className="h-4 w-4" />Voir sur GitHub</a></div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-[#fffaf0]/15 pt-6 text-sm text-[#b9aea4]"><span className="inline-flex items-center gap-2"><Code2 className="h-4 w-4 text-[#56d5a0]" />Build en public</span><span className="inline-flex items-center gap-2"><Terminal className="h-4 w-4 text-[#ff9a5a]" />Linux & open source</span><span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#56d5a0]" />Communauté étudiante</span></div>
          </div>
          <div className="relative lg:pl-6"><div className="absolute -left-5 top-8 hidden h-24 w-24 rounded-2xl border border-[#ff7626]/50 sm:block" aria-hidden="true" /><div className="relative overflow-hidden rounded-[2rem] border border-[#fffaf0]/20 bg-[#271b15] p-2 shadow-2xl shadow-black/40"><img src="/kernel-forge-academy.png" alt="Kernel Forge Academy — Build, Learn, Share, Contribute" className="aspect-[16/10] w-full rounded-[1.5rem] object-cover" /><div className="flex items-center justify-between gap-4 px-4 pb-2 pt-4 text-xs font-bold uppercase tracking-[0.16em] text-[#cfc1b5]"><span>Build · Learn · Share</span><span className="text-[#ff7626]">Innovate · Repeat</span></div></div><div className="absolute -bottom-7 -right-4 hidden w-44 rounded-2xl border border-[#fffaf0]/15 bg-[#fffaf0] p-3 text-[#17120f] shadow-xl sm:block"><img src="/kernel-forge-mascot.jpeg" alt="Mascotte Kernel Forge" className="h-24 w-full rounded-xl object-cover object-top" /><p className="mt-2 text-center text-[10px] font-black uppercase tracking-[0.18em]">Open source software</p></div></div>
        </div>
        <a href="#manifesto" className="mt-16 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#b9aea4] transition hover:text-[#ff9a5a]">Découvrir Kernel Forge <ArrowDown className="h-4 w-4" /></a>
      </div>
    </section>
  )
}
