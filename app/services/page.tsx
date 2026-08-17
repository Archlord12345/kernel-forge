import { Metadata } from 'next'
import { ArrowUpRight, BookOpen, Code2, Lightbulb, MessageCircle, Send, Users, UsersRound } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Services & tarifs — Développement web, mobile et Linux | Kernel Forge',
  description: 'Découvrez les services Kernel Forge : sites web professionnels, applications mobiles, API, logiciels desktop, installation Linux, maintenance, UI/UX, 3D et accompagnement open source. Tarifs indicatifs en FCFA.',
  keywords: ['services informatiques Yaoundé', 'développement application mobile Cameroun', 'création site web professionnel', 'installation Linux', 'maintenance informatique', 'modélisation 3D', 'Kernel Forge tarifs'],
  alternates: { canonical: 'https://kernelforge.codes/services' },
  openGraph: {
    title: 'Services & tarifs — Kernel Forge',
    description: 'Des solutions numériques utiles, documentées et adaptées à vos besoins, de Linux à la 3D.',
    url: 'https://kernelforge.codes/services',
    images: [{ url: '/kernel-forge-academy.png', width: 2048, height: 1152, alt: 'Kernel Forge Academy' }],
  },
}

const services = [
  { icon: Code2, title: 'Sites web professionnels', description: 'Site vitrine, portfolio, landing page ou plateforme métier responsive, rapide et optimisée pour le référencement.', price: 'À partir de 150 000 FCFA', tag: 'Web' },
  { icon: Users, title: 'Applications mobiles', description: 'Applications Android et iOS de tout type : éducation, commerce, communauté, productivité ou service interne.', price: 'À partir de 350 000 FCFA', tag: 'Mobile' },
  { icon: BookOpen, title: 'Applications web & SaaS', description: 'Interfaces modernes, espaces membres, tableaux de bord, workflows et plateformes collaboratives.', price: 'À partir de 300 000 FCFA', tag: 'Produit' },
  { icon: MessageCircle, title: 'API & back-end', description: 'API REST, authentification, bases de données, synchronisation offline-first, intégrations et déploiement.', price: 'À partir de 250 000 FCFA', tag: 'Technique' },
  { icon: Lightbulb, title: 'Logiciels desktop', description: 'Outils multiplateformes pour Windows, Linux et macOS, avec packaging, stockage local et documentation.', price: 'À partir de 400 000 FCFA', tag: 'Desktop' },
  { icon: Send, title: 'Linux & maintenance', description: 'Installation de distributions Linux, configuration poste, sauvegarde, nettoyage, mises à jour et assistance simple.', price: 'À partir de 15 000 FCFA', tag: 'Support' },
  { icon: UsersRound, title: 'UI/UX & identité produit', description: 'Parcours utilisateurs, wireframes, design system, maquettes et amélioration de l’expérience existante.', price: 'À partir de 75 000 FCFA', tag: 'Design' },
  { icon: Code2, title: '3D & expériences interactives', description: 'Modélisation 3D, visualisation produit, scènes interactives, assets web et prototypes immersifs.', price: 'À partir de 200 000 FCFA', tag: 'Créatif' },
]

const packages = [
  { name: 'Essentiel', price: '75 000 FCFA', description: 'Pour lancer une présence numérique propre et crédible.', features: ['Audit et cadrage du besoin', 'Landing page ou site simple', 'Version mobile responsive', 'Mise en ligne et prise en main'], accent: false },
  { name: 'Professionnel', price: '250 000 FCFA', description: 'Pour un site ou outil métier complet prêt à évoluer.', features: ['Conception UI/UX', 'Site multi-pages ou API légère', 'SEO technique de base', 'Documentation et formation'], accent: true },
  { name: 'Application', price: 'À partir de 450 000 FCFA', description: 'Pour une application mobile ou une plateforme métier sur mesure.', features: ['Architecture et maquettes', 'Développement mobile ou web', 'Backend et base de données', 'Tests et accompagnement au lancement'], accent: false },
  { name: 'Sur mesure', price: 'Devis personnalisé', description: 'Pour les projets ambitieux, scolaires, associatifs ou institutionnels.', features: ['Périmètre défini ensemble', 'Équipe adaptée au projet', 'Sprints et livrables réguliers', 'Maintenance évolutive disponible'], accent: false },
]

const socials = [
  { href: 'https://discord.gg/qqhVxZzQg', label: 'Discord', icon: MessageCircle },
  { href: 'https://t.me/kernelforge', label: 'Telegram', icon: Send },
  { href: 'https://chat.whatsapp.com/IFkGMr4Ev2KCFAKw9EmEde', label: 'WhatsApp', icon: UsersRound },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <section className="relative overflow-hidden bg-[#17120f] px-4 py-24 text-white md:py-32">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'linear-gradient(rgba(255,118,38,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,118,38,.18) 1px, transparent 1px)', backgroundSize: '42px 42px' }} />
        <div className="container relative mx-auto max-w-6xl">
          <p className="mb-5 text-xs font-black uppercase tracking-[0.22em] text-[#ff9a5a]">Kernel Forge Studio</p>
          <h1 className="max-w-4xl text-4xl font-black leading-tight md:text-7xl">Des idées solides. Des produits qui fonctionnent.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">Nous accompagnons les étudiants, associations, entreprises et institutions dans la création de solutions numériques utiles, documentées et adaptées au contexte local.</p>
          <div className="mt-9 flex flex-wrap gap-4"><a href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-[#ff7626] px-6 py-3 font-black text-[#17120f] shadow-[0_4px_0_#b83c0d] transition hover:-translate-y-0.5">Parler de votre projet <ArrowUpRight className="h-4 w-4" /></a><a href="#tarifs" className="rounded-xl border border-white/20 px-6 py-3 font-black text-white transition hover:border-[#ff9a5a] hover:text-[#ff9a5a]">Voir les tarifs</a></div>
        </div>
      </section>

      <section className="px-4 py-20 md:py-28"><div className="container mx-auto max-w-6xl"><div className="mb-12 max-w-2xl"><p className="text-xs font-black uppercase tracking-[0.18em] text-[#e95716]">Ce que nous savons livrer</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Un collectif polyvalent, du poste Linux à la plateforme complète.</h2></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{services.map(({ icon: Icon, title, description, price, tag }) => <article key={title} className="group rounded-[1.35rem] border border-[#eadfd4] bg-[#fffaf0] p-6 shadow-[0_10px_30px_rgba(23,18,15,0.05)] transition hover:-translate-y-1 hover:border-[#ff7626] hover:shadow-[0_16px_35px_rgba(233,87,22,0.12)]"><div className="flex items-center justify-between"><span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#17120f] text-[#ff9a5a]"><Icon className="h-5 w-5" /></span><span className="rounded-full bg-[#56b88b]/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-[#237453]">{tag}</span></div><h3 className="mt-6 text-lg font-black text-[#17120f]">{title}</h3><p className="mt-3 min-h-[84px] text-sm leading-6 text-[#65584f]">{description}</p><p className="mt-5 border-t border-[#eadfd4] pt-4 text-sm font-black text-[#e95716]">{price}</p></article>)}</div></div></section>

      <section id="tarifs" className="bg-[#f3eadf] px-4 py-20 md:py-28"><div className="container mx-auto max-w-6xl"><div className="mx-auto mb-12 max-w-2xl text-center"><p className="text-xs font-black uppercase tracking-[0.18em] text-[#e95716]">Tarifs indicatifs</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Choisissez un point de départ</h2><p className="mt-4 text-sm leading-6 text-[#65584f]">Les montants donnent un ordre de grandeur en FCFA. Après un échange, nous adaptons le devis au périmètre, au délai et au niveau d’accompagnement souhaité.</p></div><div className="grid gap-5 lg:grid-cols-4">{packages.map((pack) => <article key={pack.name} className={`rounded-[1.35rem] border p-7 ${pack.accent ? 'border-[#ff7626] bg-[#17120f] text-white shadow-[0_14px_0_#ff7626]' : 'border-[#eadfd4] bg-[#fffaf0] text-[#17120f]'}`}><h3 className={`text-xl font-black ${pack.accent ? 'text-[#ff9a5a]' : 'text-[#17120f]'}`}>{pack.name}</h3><p className={`mt-4 text-2xl font-black ${pack.accent ? 'text-white' : 'text-[#e95716]'}`}>{pack.price}</p><p className={`mt-4 min-h-[72px] text-sm leading-6 ${pack.accent ? 'text-white/70' : 'text-[#65584f]'}`}>{pack.description}</p><ul className={`mt-6 space-y-3 border-t pt-5 text-sm ${pack.accent ? 'border-white/15 text-white/75' : 'border-[#eadfd4] text-[#65584f]'}`}>{pack.features.map((feature) => <li key={feature} className="flex gap-2"><span className="font-black text-[#56b88b]">✓</span>{feature}</li>)}</ul><a href="/contact" className={`mt-7 inline-flex items-center gap-2 text-sm font-black ${pack.accent ? 'text-[#ff9a5a]' : 'text-[#e95716]'}`}>Demander un devis <ArrowUpRight className="h-4 w-4" /></a></article>)}</div></div></section>

      <section className="px-4 py-20 md:py-28"><div className="container mx-auto max-w-4xl text-center"><h2 className="text-3xl font-black md:text-5xl">Un besoin Linux, web, mobile ou 3D ?</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#65584f]">Écrivez-nous avec quelques lignes sur votre projet. Nous vous orienterons vers le bon format et le bon niveau d’accompagnement.</p><div className="mt-8 flex flex-wrap justify-center gap-3">{socials.map(({ href, label, icon: Icon }) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-[#eadfd4] bg-[#fffaf0] px-4 py-3 text-sm font-black text-[#65584f] transition hover:-translate-y-0.5 hover:border-[#ff7626] hover:text-[#e95716]"><Icon className="h-4 w-4" />{label}</a>)}<a href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-[#17120f] px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5">Contact direct <ArrowUpRight className="h-4 w-4" /></a></div></div></section>
      <Footer />
    </main>
  )
}
