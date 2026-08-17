import Link from 'next/link'
import { ArrowUpRight, GitBranch, Mail } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="bg-[#17120f] text-[#d9cec3]">
      <div className="container mx-auto px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-[1.4fr_.8fr_.8fr_1fr]">
          <div>
            <div className="flex items-center gap-3"><img src="/kernel-forge-mascot.jpeg" alt="Kernel Forge" className="h-12 w-12 rounded-2xl object-cover object-top" /><div><strong className="block text-sm font-black uppercase tracking-[0.16em] text-[#fffaf0]">Kernel</strong><strong className="block text-sm font-black uppercase tracking-[0.16em] text-[#ff7626]">Forge</strong></div></div>
            <p className="mt-5 max-w-sm text-sm leading-7 text-[#a99b90]">Collectif étudiant de l’Université de Yaoundé I. Nous construisons, apprenons et partageons du logiciel libre.</p>
            <a href="mailto:ravelnghomsi@kernelforge.codes" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#ff9a5a] hover:text-[#fffaf0]"><Mail className="h-4 w-4" />ravelnghomsi@kernelforge.codes</a>
          </div>
          <div><h3 className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-[#fffaf0]">Explorer</h3><ul className="space-y-3 text-sm"><li><Link href="/projects" className="hover:text-[#ff9a5a]">Projets</Link></li><li><Link href="/team" className="hover:text-[#ff9a5a]">Équipe</Link></li><li><Link href="/community" className="hover:text-[#ff9a5a]">Communauté</Link></li><li><Link href="/contact" className="hover:text-[#ff9a5a]">Contact</Link></li></ul></div>
          <div><h3 className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-[#fffaf0]">Écosystème</h3><ul className="space-y-3 text-sm"><li><a href="https://uniflow.kernelforge.codes/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-[#56d5a0]">UniFlow <ArrowUpRight className="h-3.5 w-3.5" /></a></li><li><a href="https://github.com/KERNEL-FORGE-G" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-[#56d5a0]">Dépôt GitHub <ArrowUpRight className="h-3.5 w-3.5" /></a></li><li><Link href="/about" className="hover:text-[#56d5a0]">Notre mission</Link></li></ul></div>
          <div><h3 className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-[#fffaf0]">Rejoindre la forge</h3><p className="text-sm leading-6 text-[#a99b90]">Une idée, un projet ou une envie de contribuer ? Échangeons et construisons la suite ensemble.</p><Link href="/contact" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#ff7626] px-4 py-2.5 text-sm font-black text-[#17120f] shadow-[0_3px_0_#b83c0d] transition hover:-translate-y-0.5">Parler au collectif <ArrowUpRight className="h-4 w-4" /></Link></div>
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-[#fffaf0]/10 pt-7 text-xs text-[#8e8177] sm:flex-row sm:items-center sm:justify-between"><p>© {currentYear} Kernel Forge · Université de Yaoundé I</p><div className="flex items-center gap-4"><a href="https://github.com/KERNEL-FORGE-G" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-[#fffaf0]"><GitBranch className="h-4 w-4" /></a><span>Code. Forge. Impact.</span></div></div>
      </div>
    </footer>
  )
}
