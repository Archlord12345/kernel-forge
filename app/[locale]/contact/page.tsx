'use client'

import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { ContactForm } from '@/components/contact-form'
import { Mail, MapPin, Zap } from 'lucide-react'

export default function ContactPage() {

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@kernelforge.dev',
      href: 'mailto:hello@kernelforge.dev',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'University of Yaoundé I, Cameroon',
      href: '#',
    },
    {
      icon: Zap,
      title: 'Quick Response',
      value: 'We typically respond within 24 hours',
      href: '#',
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Header */}
      <ScrollReveal>
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            >
              {t('title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-lg text-muted-foreground"
            >
              {t('subtitle')}
            </motion.p>
          </div>
        </section>
      </ScrollReveal>

      {/* Contact Methods */}
      <ScrollReveal>
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {contactMethods.map((method, index) => {
                const Icon = method.icon
                return (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                    className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 text-center"
                  >
                    <motion.div
                      className="flex justify-center mb-4"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      <Icon className="w-12 h-12 text-primary" />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                    <p className="text-muted-foreground">{method.value}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>
      </ScrollReveal>

      {/* Contact Form */}
      <ScrollReveal>
        <section className="py-20 md:py-32 bg-secondary/30">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-center mb-12"
              >
                {t('sendMessage')}
              </motion.h2>
              <ContactForm />
            </motion.div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  )
}
