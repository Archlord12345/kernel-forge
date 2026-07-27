'use client'

import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/animations/scroll-reveal'

export default function AboutPage() {

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
              About Kernel Forge
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-lg text-muted-foreground"
            >
              Learn about our mission and values
            </motion.p>
          </div>
        </section>
      </ScrollReveal>

      {/* Story Section */}
      <ScrollReveal>
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-8"
              >
                Our Story
              </motion.h2>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  Kernel Forge was founded - a place where passionate developers come together to create meaningful open-source software.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Our dedication is unwavering. We believe that the best innovations come from collaboration, and that sharing knowledge is key to growth.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Our collective is built on the principles of open-source development: transparency, collaboration, and community-driven innovation. We welcome developers of all skill levels to join us on this exciting journey.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </section>
      </ScrollReveal>

      {/* Poster Section */}
      <ScrollReveal>
        <section className="py-20 md:py-32 bg-secondary/30">
          <div className="container mx-auto px-4">
            <motion.img
              src="/kernel-forge-logo.png"
              alt="Kernel Forge Academy"
              className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </section>
      </ScrollReveal>
    </main>
  )
}
