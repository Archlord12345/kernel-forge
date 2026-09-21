export const SITE = {
  name: 'Kernel Forge',
  legalName: 'KERNEL FORGE',
  url: 'https://kernelforge.codes',
  tagline: 'Code. Forge. Impact.',
  description:
    'Kernel Forge est le collectif étudiant open source de l’Université de Yaoundé I. Nous construisons, documentons et partageons des logiciels libres utiles, et nous aidons les organisations à lancer leurs produits web, mobile et Linux.',
  email: 'ravelnghomsi@kernelforge.codes',
  uniflow: 'https://uniflow.kernelforge.codes/',
  university: 'Université de Yaoundé I',
  city: 'Yaoundé, Cameroun',
  mapsUrl: 'https://www.google.com/maps/search/Universit%C3%A9+de+Yaound%C3%A9+I',
  ogImage: '/og-kernel-forge.jpg',
  whatsapp: 'https://chat.whatsapp.com/IFkGMr4Ev2KCFAKw9EmEde',
  joinRepo: 'https://github.com/KERNEL-FORGE-G/Joinus.git',
} as const

export const NAV = [
  { name: 'Projets', href: '/projects' },
  { name: 'Services', href: '/services' },
  { name: 'Équipe', href: '/team' },
  { name: 'Communauté', href: '/community' },
  { name: 'À propos', href: '/about' },
] as const

export type Channel = {
  id: 'discord' | 'telegram' | 'whatsapp' | 'linkedin' | 'youtube'
  name: string
  mark: string
  action: string
  description: string
  href: string
  color: string
}

export const CHANNELS: Channel[] = [
  { id: 'discord', name: 'Discord', mark: 'D', action: 'Discuter en direct', description: 'Entraide, échanges techniques et ateliers avec les contributeurs.', href: 'https://discord.gg/qqhVxZzQg', color: '#5865F2' },
  { id: 'telegram', name: 'Telegram', mark: 'T', action: 'Suivre les annonces', description: 'Les actualités, sorties et rendez-vous du collectif.', href: 'https://t.me/kernelforge', color: '#229ED9' },
  { id: 'whatsapp', name: 'WhatsApp', mark: 'W', action: 'Rejoindre le groupe', description: 'Un espace simple pour rester connecté au quotidien.', href: 'https://chat.whatsapp.com/IFkGMr4Ev2KCFAKw9EmEde', color: '#25D366' },
  { id: 'linkedin', name: 'LinkedIn', mark: 'in', action: 'Suivre Kernel Forge', description: 'Notre présence professionnelle, nos projets et nos collaborations.', href: 'https://www.linkedin.com/in/kernelforge', color: '#0A66C2' },
  { id: 'youtube', name: 'YouTube', mark: '▶', action: 'Voir nos vidéos', description: 'Démonstrations, coulisses, tutoriels et moments forts du collectif.', href: 'https://www.youtube.com/@KERNEL-FORGE.c', color: '#FF0000' },
]

export const ORGANIZATION_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.name,
  alternateName: SITE.legalName,
  url: SITE.url,
  logo: `${SITE.url}/kernel-forge-logo.png`,
  description: 'Collectif étudiant open source de l’Université de Yaoundé I.',
  email: SITE.email,
  sameAs: [SITE.uniflow, ...CHANNELS.map((channel) => channel.href)],
  address: { '@type': 'PostalAddress', addressLocality: 'Yaoundé', addressCountry: 'CM' },
}
