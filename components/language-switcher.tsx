'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export function LanguageSwitcher() {
  // For now, just show a simple switcher
  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
  ]

  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <motion.div
          key={lang.code}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href={`/${lang.code}`}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${
              lang.code === 'en'
                ? 'bg-primary text-primary-foreground shadow-lg'
                : 'bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80'
            }`}
          >
            {lang.label}
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
