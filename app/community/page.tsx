import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Users, BookOpen, Code2, Lightbulb, MessageCircle, Send, UsersRound, ArrowUpRight } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Communauté Kernel Forge - Construire ensemble',
  description: 'Rejoignez la communauté Kernel Forge : construisez, apprenez, partagez et contribuez au logiciel libre depuis Yaoundé.',
  keywords: ['community', 'developers', 'open source', 'collaboration', 'learning'],
  openGraph: {
    title: 'Communauté Kernel Forge',
    description: 'Une communauté de développeurs et créateurs dédiée à l’innovation open source.',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Affiche%20Kernel%20Forge%20Academy.png-km9Xou1MF4bDNLZ4sqkXNoMiDQLHmF.jpeg',
        width: 1600,
        height: 900,
        alt: 'Kernel Forge Academy Building',
      },
    ],
  },
}

export default function CommunityPage() {
  const values = [
    {
      icon: Users,
      title: 'Collaborative',
      description: 'Nous croyons à la force du travail collectif pour transformer de bonnes idées en projets concrets.',
    },
    {
      icon: Code2,
      title: 'Open Source',
      description: 'Nos projets sont conçus pour être partagés, documentés et accessibles à la communauté.',
    },
    {
      icon: BookOpen,
      title: 'Apprentissage',
      description: 'Nous progressons ensemble grâce à la pratique, à la documentation et au partage des connaissances.',
    },
    {
      icon: Lightbulb,
      title: 'Innovante',
      description: 'Nous cherchons des solutions créatives à des problèmes réels, en particulier dans notre contexte local.',
    },
  ]

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section with Academy Poster */}
      <section className="community-banner">
        <img
          src="/kernel-forge-academy.png"
          alt="Kernel Forge Academy - Build Learn Share Contribute Innovate Repeat"
        />
      </section>

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="font-feather text-4xl md:text-6xl font-black mb-4 text-primary">
              Notre communauté
            </h1>
            <p className="text-lg text-muted-foreground">
              Rejoignez des développeurs, designers et créateurs passionnés qui construisent et partagent des logiciels libres utiles.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title} className="duo-card p-8 hover:border-[var(--color-lingot-lime)] transition-colors">
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              )
            })}
          </div>

          <section className="mb-16 rounded-[1.5rem] border border-[#eadfd4] bg-[#17120f] p-8 text-white shadow-[0_18px_45px_rgba(23,18,15,0.12)] md:p-10">
            <div className="mb-7 max-w-2xl">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff9a5a]">Les espaces Kernel Forge</p>
              <h2 className="mt-2 text-2xl font-black md:text-3xl">Construisons la suite ensemble</h2>
              <p className="mt-3 text-sm leading-6 text-white/70">Choisissez le canal qui vous convient pour suivre les annonces, poser une question ou rejoindre les discussions du collectif.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <a href="https://discord.gg/qqhVxZzQg" target="_blank" rel="noopener noreferrer" className="group rounded-2xl border border-[#7289da]/40 bg-[#5865f2]/15 p-5 transition hover:-translate-y-1 hover:border-[#7289da]">
                <MessageCircle className="h-7 w-7 text-[#aeb8ff]" /><h3 className="mt-4 font-black">Discord</h3><p className="mt-1 text-xs leading-5 text-white/65">Discussions et entraide en direct.</p><span className="mt-4 inline-flex items-center gap-1 text-xs font-black text-[#aeb8ff]">Rejoindre <ArrowUpRight className="h-3.5 w-3.5" /></span>
              </a>
              <a href="https://t.me/kernelforge" target="_blank" rel="noopener noreferrer" className="group rounded-2xl border border-[#29a9ea]/40 bg-[#29a9ea]/15 p-5 transition hover:-translate-y-1 hover:border-[#29a9ea]">
                <Send className="h-7 w-7 text-[#7dd3fc]" /><h3 className="mt-4 font-black">Telegram</h3><p className="mt-1 text-xs leading-5 text-white/65">Actualités et annonces du collectif.</p><span className="mt-4 inline-flex items-center gap-1 text-xs font-black text-[#7dd3fc]">Suivre <ArrowUpRight className="h-3.5 w-3.5" /></span>
              </a>
              <a href="https://chat.whatsapp.com/IFkGMr4Ev2KCFAKw9EmEde" target="_blank" rel="noopener noreferrer" className="group rounded-2xl border border-[#25d366]/40 bg-[#25d366]/15 p-5 transition hover:-translate-y-1 hover:border-[#25d366]">
                <UsersRound className="h-7 w-7 text-[#86efac]" /><h3 className="mt-4 font-black">WhatsApp</h3><p className="mt-1 text-xs leading-5 text-white/65">Le groupe pour rester connecté.</p><span className="mt-4 inline-flex items-center gap-1 text-xs font-black text-[#86efac]">Rejoindre <ArrowUpRight className="h-3.5 w-3.5" /></span>
              </a>
            </div>
          </section>

          {/* Call to Action */}
          <div className="bg-primary rounded-xl border-b-[3px] border-[#46a302] p-8 md:p-12 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Prêt à nous rejoindre ?
            </h2>
            <p className="text-primary-foreground/90 mb-8">
              Débutant ou expert, vous avez votre place chez Kernel Forge. Écrivez-nous pour découvrir comment contribuer à la communauté.
            </p>
            <a
              href="/contact"
              className="duo-outline inline-flex px-8 py-3 transition-all"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
