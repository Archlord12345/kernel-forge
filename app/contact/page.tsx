import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/contact-form'
import { Metadata } from 'next'
import { Mail, MapPin, MessageSquare } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact - Kernel Forge',
  description: 'Get in touch with Kernel Forge',
}

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'Send us an email and we&apos;ll get back to you as soon as possible',
      value: 'hello@kernelforge.dev',
      href: 'mailto:hello@kernelforge.dev',
    },
    {
      icon: MapPin,
      title: 'Location',
      description: 'We&apos;re based at the University of Yaoundé I',
      value: 'Yaoundé, Cameroon',
      href: '#',
    },
    {
      icon: MessageSquare,
      title: 'Social',
      description: 'Follow us on social media for updates',
      value: '@kernel_forge',
      href: 'https://twitter.com/kernel_forge',
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
                Get in Touch
              </h1>
              <p className="text-lg text-muted-foreground">
                We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
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
