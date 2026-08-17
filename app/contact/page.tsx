import { Metadata } from 'next'
import { ArrowUpRight, Mail, MapPin, MessageCircle, MessageSquare, Send, UsersRound } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Nous contacter — Parler à Kernel Forge',
  description: 'Contactez Kernel Forge pour un site web, une application mobile, un service Linux, un projet open source, une collaboration ou une contribution communautaire.',
  keywords: ['contacter Kernel Forge', 'devis développement web Yaoundé', 'application mobile Cameroun', 'maintenance Linux Yaoundé', 'collaboration open source'],
  alternates: { canonical: 'https://kernelforge.codes/contact' },
  openGraph: { title: 'Nous contacter — Kernel Forge', description: 'Une idée, un projet ou une envie de contribuer ? Parlons-en.', url: 'https://kernelforge.codes/contact', images: [{ url: '/kernel-forge-mascot.jpeg', width: 1024, height: 1024, alt: 'Mascotte Kernel Forge' }] },
}

const methods = [
  { icon: Mail, title: 'E-mail direct', description: 'Pour un besoin détaillé, un devis ou une proposition de collaboration.', value: 'ravelnghomsi@kernelforge.codes', href: 'mailto:ravelnghomsi@kernelforge.codes', tone: 'text-[#e95716] bg-[#ff7626]/10 border-[#ff7626]/30' },
  { icon: MessageSquare, title: 'Organisation GitHub', description: 'Pour découvrir nos dépôts, suivre les issues et contribuer au code.', value: 'KERNEL-FORGE-G', href: 'https://github.com/KERNEL-FORGE-G', tone: 'text-[#17120f] bg-[#17120f]/5 border-[#17120f]/20' },
  { icon: MapPin, title: 'Université de Yaoundé I', description: 'Un collectif étudiant ancré à Yaoundé et ouvert aux collaborations.', value: 'Yaoundé, Cameroun', href: 'https://www.google.com/maps/search/Universit%C3%A9+de+Yaound%C3%A9+I', tone: 'text-[#237453] bg-[#56b88b]/10 border-[#56b88b]/30' },
]

const channels = [
  { icon: MessageCircle, name: 'Discord', text: 'Discussions et entraide en direct', href: 'https://discord.gg/qqhVxZzQg', color: 'text-[#5865f2]' },
  { icon: Send, name: 'Telegram', text: 'Annonces et actualités', href: 'https://t.me/kernelforge', color: 'text-[#1688c2]' },
  { icon: UsersRound, name: 'WhatsApp', text: 'Groupe de proximité', href: 'https://chat.whatsapp.com/IFkGMr4Ev2KCFAKw9EmEde', color: 'text-[#168b43]' },
  { icon: ArrowUpRight, name: 'LinkedIn', text: 'Présence professionnelle', href: 'https://www.linkedin.com/in/kernelforge', color: 'text-[#0a66c2]' },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <section className="relative overflow-hidden bg-[#17120f] px-4 py-24 text-white md:py-32"><div className="absolute inset-0 opacity-25" style={{ backgroundImage: 'linear-gradient(rgba(255,118,38,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,118,38,.18) 1px, transparent 1px)', backgroundSize: '42px 42px' }} /><div className="container relative mx-auto max-w-6xl"><p className="text-xs font-black uppercase tracking-[0.2em] text-[#ff9a5a]">Entrer dans la forge</p><h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-7xl">Parlons de ce que vous voulez construire.</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">Décrivez-nous votre idée, votre besoin technique ou votre envie de contribuer. Nous vous aiderons à trouver le bon format pour avancer.</p></div></section>

      <section className="px-4 py-20 md:py-28"><div className="container mx-auto max-w-6xl"><div className="grid gap-5 md:grid-cols-3">{methods.map(({ icon: Icon, title, description, value, href, tone }) => <a key={title} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className="group rounded-[1.35rem] border border-[#eadfd4] bg-[#fffaf0] p-6 transition hover:-translate-y-1 hover:border-[#ff7626] hover:shadow-[0_15px_35px_rgba(23,18,15,0.08)]"><span className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border ${tone}`}><Icon className="h-5 w-5" /></span><h2 className="mt-5 text-lg font-black text-[#17120f]">{title}</h2><p className="mt-2 text-sm leading-6 text-[#65584f]">{description}</p><span className="mt-5 inline-flex items-center gap-1 text-sm font-black text-[#e95716]">{value} <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" /></span></a>)}</div></div></section>

      <section className="px-4 pb-20 md:pb-28"><div className="container mx-auto grid max-w-6xl gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start"><div><p className="text-xs font-black uppercase tracking-[0.2em] text-[#e95716]">Message ou devis</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Un premier échange simple.</h2><p className="mt-5 leading-7 text-[#65584f]">Indiquez le contexte, les fonctionnalités souhaitées et, si possible, votre délai. Ces informations nous permettent de vous orienter vers la bonne offre et une estimation réaliste.</p><div className="mt-8 rounded-[1.35rem] bg-[#f3eadf] p-6"><p className="text-sm font-black text-[#17120f]">Pour obtenir une réponse plus rapide</p><p className="mt-2 text-sm leading-6 text-[#65584f]">Rejoignez aussi l’un de nos espaces communautaires. Vous pouvez poser une question, suivre les annonces ou rencontrer les contributeurs.</p><div className="mt-5 grid grid-cols-2 gap-3">{channels.map(({ icon: Icon, name, text, href, color }) => <a key={name} href={href} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-[#eadfd4] bg-[#fffaf0] p-3 transition hover:border-[#ff7626]"><Icon className={`h-4 w-4 ${color}`} /><span className="mt-2 block text-sm font-black text-[#17120f]">{name}</span><span className="mt-1 block text-xs leading-4 text-[#65584f]">{text}</span></a>)}</div></div></div><div className="rounded-[1.5rem] border border-[#eadfd4] bg-[#fffaf0] p-6 shadow-[0_15px_40px_rgba(23,18,15,0.06)] md:p-8"><ContactForm /></div></div></section>
      <Footer />
    </main>
  )
}
