'use client'

import { motion, useReducedMotion } from 'framer-motion'

export default function SiteTemplate({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion()
  return (
    <motion.div initial={reduced ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}>
      {children}
    </motion.div>
  )
}
