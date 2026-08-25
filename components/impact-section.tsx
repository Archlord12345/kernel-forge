import { ArrowUpRight, CheckCircle2, ShieldCheck, Users } from 'lucide-react'

const highlights = [
  { title: '3 projets phares actifs', description: 'Kernel Forge, UniFlow et Kernel Academy portent nos expérimentations et livrables.', icon: CheckCircle2 },
  { title: '5 canaux communautaires', description: 'Discord, Telegram, WhatsApp, LinkedIn et YouTube pour rester connectés.', icon: Users },
  { title: 'Ancrage universitaire', description: 'Collectif étudiant de l’Université de Yaoundé I avec une approche orientée impact local.', icon: ShieldCheck },
]

const priorities = [
  { title: 'Lancer un projet', description: 'Passez de l’idée au cadrage en échangeant avec notre équipe.', href: '/contact' },
  { title: 'Découvrir nos réalisations', description: 'Parcourez les solutions déjà construites et documentées par le collectif.', href: '/projects' },
  { title: 'Rejoindre la communauté', description: 'Contribuez au code, aux retours utilisateurs et aux ateliers du collectif.', href: '/community' },
]

export function ImpactSection() {
  return (
    <section className="bg-[#fffaf0] px-4 py-20 md:py-28">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#e95716]">Objectifs clairs</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#17120f] md:text-5xl">Un site pensé pour orienter chaque visiteur vers la bonne action.</h2>
          <p className="mt-5 text-lg leading-8 text-[#65584f]">Que vous ayez un besoin produit, une envie de collaboration ou un intérêt pour l’open source, vous trouverez ici un parcours simple et direct.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {priorities.map((priority) => (
            <a key={priority.title} href={priority.href} className="group rounded-[1.35rem] border border-[#eadfd4] bg-white p-6 transition hover:-translate-y-1 hover:border-[#ff7626] hover:shadow-[0_16px_35px_rgba(23,18,15,0.08)]">
              <h3 className="text-xl font-black text-[#17120f]">{priority.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#65584f]">{priority.description}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-black text-[#e95716]">Passer à l’action <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" /></span>
            </a>
          ))}
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {highlights.map(({ title, description, icon: Icon }) => (
            <article key={title} className="rounded-[1.35rem] border border-[#eadfd4] bg-[#f3eadf] p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#17120f] text-[#ff9a5a]"><Icon className="h-5 w-5" /></span>
              <h3 className="mt-5 text-lg font-black text-[#17120f]">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#65584f]">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
