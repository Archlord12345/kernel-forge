'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Star } from 'lucide-react'
import Link from 'next/link'

interface ProjectCardProProps {
  name: string
  description: string
  category: string
  stars?: number
  link?: string
  image?: string
  featured?: boolean
}

export function ProjectCardPro({
  name,
  description,
  category,
  stars = 0,
  link,
  image,
  featured = false,
}: ProjectCardProProps) {
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`group relative overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 ${
        featured ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Image */}
      {image && (
        <div className="relative h-40 overflow-hidden bg-secondary">
          <motion.img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}

      {/* Content */}
      <div className="relative p-6">
        {/* Category badge */}
        <div className="flex items-center justify-between mb-3">
          <motion.span
            className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            {category}
          </motion.span>
          {featured && (
            <div className="flex gap-1 text-accent">
              {Array.from({ length: 3 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent" />
              ))}
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
          {name}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 group-hover:line-clamp-none transition-all">
          {description}
        </p>

        {/* Stats and Link */}
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          {stars > 0 && (
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Star className="w-4 h-4 fill-accent text-accent" />
              <span>{stars}</span>
            </div>
          )}
          {link && (
            <motion.a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
              whileHover={{ x: 4 }}
            >
              View Project
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
