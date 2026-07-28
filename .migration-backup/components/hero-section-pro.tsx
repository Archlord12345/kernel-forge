'use client'

import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export function HeroSection() {

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Academy Poster as Background */}
          <motion.div
            variants={itemVariants}
            className="mb-8 relative"
          >
            <img
              src="/kernel-forge-logo.png"
              alt="Kernel Forge Academy"
              className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl"
            />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-balance mb-6 bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent"
          >
            Build. Learn. Innovate.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Join Kernel Forge Academy, where passionate developers create amazing open-source software
          </motion.p>

          {/* Motto */}
          <motion.div
            variants={itemVariants}
            className="inline-block"
          >
            <div className="px-6 py-3 bg-primary/10 border border-primary/30 rounded-full text-primary font-semibold backdrop-blur-sm">
              Code. Forge. Impact. Repeat.
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
          >
            <Link
              href="/en/projects"
              className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative block">Explore Our Projects</span>
            </Link>
            <Link
              href="/en/contact"
              className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all"
            >
              Get In Touch
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </motion.div>
    </section>
  )
}
