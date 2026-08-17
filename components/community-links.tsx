import { ArrowUpRight, MessageCircle, Play, Send, UsersRound } from 'lucide-react'

const communities = [
  { name: 'Discord', label: 'Discuter en direct', description: 'Entraide, échanges techniques et ateliers avec les contributeurs.', href: 'https://discord.gg/qqhVxZzQg', icon: MessageCircle, tone: 'border-[#7289da]/40 bg-[#5865f2]/10 text-[#5865f2]' },
  { name: 'Telegram', label: 'Suivre les annonces', description: 'Les actualités, sorties et rendez-vous du collectif.', href: 'https://t.me/kernelforge', icon: Send, tone: 'border-[#29a9ea]/40 bg-[#29a9ea]/10 text-[#1688c2]' },
  { name: 'WhatsApp', label: 'Rejoindre le groupe', description: 'Un espace simple pour rester connecté au quotidien.', href: 'https://chat.whatsapp.com/IFkGMr4Ev2KCFAKw9EmEde', icon: UsersRound, tone: 'border-[#25d366]/40 bg-[#25d366]/10 text-[#168b43]' },
  { name: 'LinkedIn', label: 'Suivre Kernel Forge', description: 'Notre présence professionnelle, nos projets et nos collaborations.', href: 'https://www.linkedin.com/in/kernelforge', icon: ArrowUpRight, tone: 'border-[#0a66c2]/40 bg-[#0a66c2]/10 text-[#0a66c2]' },
  { name: 'YouTube', label: 'Voir nos vidéos', description: 'Démonstrations, coulisses, tutoriels et moments forts du collectif.', href: 'https://www.youtube.com/@KERNEL-FORGE.c', icon: Play, tone: 'border-[#ff0000]/40 bg-[#ff0000]/10 text-[#d60000]' },
]

export function CommunityLinks() {
  return (
    <section id="communautes" className="bg-[#f3eadf] px-4 py-20 md:py-28">
      <div className="container mx-auto max-w-6xl">
        <div className="grid items-end gap-8 md:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#e95716]">La forge reste ouverte</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#17120f] md:text-5xl">Choisissez votre façon de nous rejoindre.</h2>
            <p className="mt-5 text-lg leading-8 text-[#65584f]">Suivez nos annonces, échangez avec l’équipe ou venez construire avec nous. Chaque canal a son rythme, mais tous mènent vers la même communauté.</p>
          </div>
          <a href="/community" className="inline-flex items-center gap-2 text-sm font-black text-[#e95716] transition hover:gap-3">Découvrir la communauté <ArrowUpRight className="h-4 w-4" /></a>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {communities.map(({ name, label, description, href, icon: Icon, tone }) => (
            <a key={name} href={href} target="_blank" rel="noopener noreferrer" className={`group rounded-[1.35rem] border bg-[#fffaf0] p-6 transition hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(23,18,15,0.1)] ${tone.split(' ').slice(0, 1).join(' ')}`}>
              <div className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border ${tone}`}><Icon className="h-5 w-5" /></div>
              <h3 className="mt-5 text-lg font-black text-[#17120f]">{name}</h3>
              <p className="mt-1 text-sm font-black text-[#e95716]">{label}</p>
              <p className="mt-3 text-sm leading-6 text-[#65584f]">{description}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-xs font-black text-[#17120f] transition group-hover:text-[#e95716]">Ouvrir le lien <ArrowUpRight className="h-3.5 w-3.5" /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
