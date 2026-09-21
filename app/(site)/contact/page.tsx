import type { Metadata } from 'next'
import { ArrowUpRight, Clock } from 'lucide-react'
import { ContactForm } from '@/components/contact/contact-form'
import { Mascot } from '@/components/mascot'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/primitives'
import { ChannelsGrid } from '@/components/site/channels-grid'
import { PageIntro } from '@/components/site/page-intro'
import { Sticker } from '@/components/ui/sticker'
import { IconTile, type SpotIconName } from '@/components/ui/spot-icon'
import { SITE } from '@/lib/data/site'

export const metadata: Metadata = {
  title: 'Contact — Parler à Kernel Forge',
  description: 'Un site web, une application mobile, un poste Linux, un projet open source ou une envie de contribuer ? Écrivez au collectif Kernel Forge, à Yaoundé.',
  alternates: { canonical: '/contact' },
  openGraph: { title: 'Contact — Kernel Forge', description: 'Une idée, un projet ou une envie de contribuer ? Parlons-en.', url: '/contact' },
}

const METHODS: { icon: SpotIconName; tone: 'forge' | 'ember' | 'creeper'; title: string; text: string; value: string; href: string }[] = [
  { icon: 'mail', tone: 'forge', title: 'E-mail direct', text: 'Pour un besoin détaillé, un devis ou une proposition de collaboration.', value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: 'chat', tone: 'ember', title: 'Groupe WhatsApp', text: 'Pour rejoindre l’équipe, demander l’accès au code d’un projet ou poser une question rapide.', value: 'Rejoindre le groupe', href: SITE.whatsapp },
  { icon: 'location', tone: 'creeper', title: SITE.university, text: 'Un collectif étudiant ancré à Yaoundé et ouvert aux collaborations à distance.', value: SITE.city, href: SITE.mapsUrl },
]

export default function ContactPage() {
  return (
    <>
      <PageIntro
        compact
        title={<>Parlons de ce que vous <span className="text-forge">voulez construire.</span></>}
        lead="Décrivez votre idée, votre besoin technique ou votre envie de contribuer. Nous vous aidons à trouver le bon format pour avancer."
        aside={
          <div className="relative mx-auto w-[64%] max-w-[17rem] lg:w-[70%]">
            <div className="absolute inset-x-[10%] bottom-0 top-[16%] rounded-[3rem] border-2 border-ink bg-forge shadow-hard-paper" aria-hidden="true" />
            <Mascot pose="waving" priority float className="relative z-10 drop-shadow-[0_14px_0_rgba(23,18,15,0.4)]" sizes="(min-width: 1024px) 24vw, 60vw" />
          </div>
        }
      >
        <p className="inline-flex items-center gap-2 rounded-full border-2 border-paper/20 bg-paper/5 px-3 py-1.5 text-sm font-semibold text-sand"><Clock className="h-4 w-4 text-creeper" /> Réponse en général sous 48 h ouvrées</p>
      </PageIntro>

      <section className="section bg-paper">
        <div className="wrap grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
          <div className="space-y-6">
            <Reveal>
              <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-4xl">Un premier échange simple.</h2>
              <p className="mt-4 text-lg leading-8 text-smoke">Indiquez le contexte, les fonctionnalités souhaitées et, si possible, votre délai. Ces informations nous permettent de vous orienter vers la bonne offre et une estimation réaliste.</p>
            </Reveal>
            <Stagger className="grid gap-4">
              {METHODS.map((method) => (
                <StaggerItem key={method.title}>
                  <Sticker as="a" href={method.href} target={method.href.startsWith('http') ? '_blank' : undefined} rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined} hover small className="group flex items-center gap-4 p-4">
                    <IconTile name={method.icon} tone={method.tone} size="md" />
                    <div className="min-w-0 flex-1">
                      <h3 className="font-display text-lg font-extrabold leading-tight tracking-tight">{method.title}</h3>
                      <p className="mt-0.5 text-sm leading-6 text-smoke">{method.text}</p>
                      <p className="mt-1 truncate font-display text-sm font-extrabold text-forge-deep">{method.value}</p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-smoke transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
                  </Sticker>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <Reveal delay={0.1}>
            <Sticker tone="white" shadow="forge" className="relative p-6 sm:p-8">
              <ContactForm />
            </Sticker>
          </Reveal>
        </div>
      </section>

      <section className="section border-t-2 border-ink bg-paper-2">
        <div className="wrap">
          <Reveal className="mb-10 max-w-2xl">
            <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-4xl">Pour une réponse plus rapide</h2>
            <p className="mt-4 text-lg leading-8 text-smoke">Rejoignez un de nos espaces : vous pouvez poser une question en direct, suivre les annonces ou rencontrer les contributeurs.</p>
          </Reveal>
          <ChannelsGrid compact />
        </div>
      </section>
    </>
  )
}
