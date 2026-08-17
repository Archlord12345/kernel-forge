'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

export function ScrollReveal({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'up',
}: ScrollRevealProps) {
  const initialVariants = {
    up: { opacity: 0, y: 40 },
    down: { opacity: 0, y: -40 },
    left: { opacity: 0, x: -40 },
    right: { opacity: 0, x: 40 },
  }

  return (
    <motion.div
      initial={initialVariants[direction]}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  )
}
