'use client'

import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/animations/scroll-reveal'

export default function CommunityPage() {

  const values = [
    {
      title: 'Build',
      description: 'Create amazing open-source software together',
      icon: '🔨',
    },
    {
      title: 'Learn',
      description: 'Share knowledge and grow as developers',
      icon: '📚',
    },
    {
      title: 'Share',
      description: 'Contribute back to the community',
      icon: '🤝',
    },
    {
      title: 'Innovate',
      description: 'Push boundaries and think creatively',
      icon: '💡',
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Banner - Top Section Only - Fits to size */}
      <section className="relative w-full h-[200px] md:h-[280px] overflow-hidden bg-gradient-to-b from-secondary to-background border-b-4 border-primary flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="w-full h-full flex items-center justify-center"
        >
          <img
            src="/kernel-forge-logo.png"
            alt="Kernel Forge Academy Community"
            className="w-full h-full object-contain"
            loading="eager"
          />
        </motion.div>
      </section>

      {/* Title Section */}
      <ScrollReveal>
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            >
              Our Community
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Join our vibrant community of passionate developers, designers, and creators
            </motion.p>
          </div>
        </section>
      </ScrollReveal>

      {/* Motto Section */}
      <ScrollReveal>
        <section className="py-16 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              whileInView={{ scale: 1 }}
              initial={{ scale: 0.95 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <p className="text-3xl md:text-4xl font-black text-balance">
                <span className="text-primary">Build, Learn, Share, Contribute, Innovate, Repeat.</span>
              </p>
            </motion.div>
          </div>
        </section>
      </ScrollReveal>

      {/* Values Grid */}
      <ScrollReveal>
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-16"
            >
              Our Core Values
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </ScrollReveal>

      {/* Mission Section */}
      <ScrollReveal>
        <section className="py-20 md:py-32 bg-secondary/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-8"
              >
                Our Mission
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                Our mission is to foster a vibrant community of developers, designers, and creators at the University of Yaoundé I. We believe in the power of open-source software to create positive change in the world. Together, we build, learn, share, and innovate.
              </motion.p>
            </motion.div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  )
}
