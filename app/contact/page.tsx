import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/contact-form'
import { Metadata } from 'next'
import { Mail, MapPin, MessageSquare } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contacter Kernel Forge - Rejoindre la forge',
  description: 'Contactez Kernel Forge pour parler collaboration, partenariat, logiciel libre ou rejoindre notre communauté de développeurs.',
  keywords: ['contact', 'get in touch', 'collaboration', 'partnership', 'email'],
  openGraph: {
    title: 'Contacter Kernel Forge - Rejoindre la forge',
    description: 'Échangez avec Kernel Forge autour de vos idées, projets et contributions open source.',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-21%20at%2016.14.57-3sws87d7kKN9W5WMT4IcP74PjoJ2tp.jpeg',
        width: 1200,
        height: 1200,
        alt: 'Kernel Forge',
      },
    ],
  },
}

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'E-mail',
      description: 'Écrivez-nous et nous vous répondrons dès que possible.',
      value: 'ravelnghomsi@kernelforge.codes',
      href: 'mailto:ravelnghomsi@kernelforge.codes',
    },
    {
      icon: MapPin,
      title: 'Localisation',
      description: 'Le collectif est basé à l’Université de Yaoundé I.',
      value: 'Yaoundé, Cameroon',
      href: '#',
    },
    {
      icon: MessageSquare,
      title: 'Organisation GitHub',
      description: 'Suivez nos projets et nos contributions open source.',
      value: 'KERNEL-FORGE-G',
      href: 'https://github.com/KERNEL-FORGE-G',
    },
  ]

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Page Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Contactez Kernel Forge
              </h1>
              <p className="text-lg text-muted-foreground">
                Une idée, un projet ou une envie de contribuer ? Écrivez-nous, nous vous répondrons dès que possible.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Methods */}
              <div className="space-y-6">
                {contactMethods.map((method) => {
                  const Icon = method.icon
                  return (
                    <a
                      key={method.title}
                      href={method.href}
                      className="p-6 rounded-xl bg-card border border-border hover:border-primary transition-colors block group"
                    >
                      <Icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                      <h3 className="font-bold text-foreground mb-1">{method.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                      <p className="text-sm font-semibold text-primary">{method.value}</p>
                    </a>
                  )
                })}
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
