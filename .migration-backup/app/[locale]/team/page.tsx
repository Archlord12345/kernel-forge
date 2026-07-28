'use client'

import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/animations/scroll-reveal'

const teamMembers = [
  {
    name: 'NGHOMSI FEUKOUO RAVEL',
    role: 'Chef de projet & Développeur n8n/Backend',
    bio: 'Leader de projet passionné par l\'open source et l\'automatisation',
    avatar: '👨‍💼',
  },
  {
    name: 'Succès',
    role: 'Analyste Réseau & Développeur Frontend',
    bio: 'Expert en infrastructure réseau et développement web moderne',
    avatar: '🌐',
  },
  {
    name: 'MIGUEL KARMA',
    role: 'Analyste en Cybersécurité & Développeur',
    bio: 'Spécialiste en sécurité informatique et développement système',
    avatar: '🔐',
  },
  {
    name: 'Tchinda-BL4Z3',
    role: 'Développeur',
    bio: 'Développeur passionné par les solutions innovantes',
    avatar: '💻',
  },
  {
    name: 'JUVÉNAL',
    role: 'Développeur',
    bio: 'Contributeur actif aux projets open source',
    avatar: '🔧',
  },
  {
    name: 'BIDIAZ',
    role: 'Concepteur & Développeur UX/UI',
    bio: 'Designer créatif avec expertise en développement front-end',
    avatar: '🎨',
  },
  {
    name: 'Charles-Kamga',
    role: 'Analyste en Cybersécurité',
    bio: 'Spécialiste en protection et audit de sécurité',
    avatar: '🛡️',
  },
]

export default function TeamPage() {

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
              Our Team
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-lg text-muted-foreground"
            >
              Meet the talented people behind Kernel Forge
            </motion.p>
          </div>
        </section>
      </ScrollReveal>

      {/* Team Grid */}
      <ScrollReveal>
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 text-center"
                >
                  <motion.div
                    className="text-7xl mb-4"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    {member.avatar}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-sm font-semibold text-primary mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </ScrollReveal>

      {/* Join Section */}
      <ScrollReveal>
        <section className="py-20 md:py-32 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6"
            >
              Join Our Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-muted-foreground mb-8"
            >
              We&apos;re always looking for passionate developers to join our team
            </motion.p>
            <motion.a
              href="mailto:hello@kernelforge.dev"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Get In Touch
            </motion.a>
          </div>
        </section>
      </ScrollReveal>
    </main>
  )
}
