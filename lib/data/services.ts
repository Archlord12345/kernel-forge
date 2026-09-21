import { Box, Globe, Layers, Monitor, Palette, Server, Smartphone, Terminal, type LucideIcon } from 'lucide-react'

export type Service = {
  id: string
  icon: LucideIcon
  title: string
  description: string
  price: string
  tag: string
}

export const SERVICES: Service[] = [
  { id: 'web', icon: Globe, title: 'Sites web professionnels', description: 'Site vitrine, portfolio, landing page ou plateforme métier : rapide, responsive et optimisé pour le référencement.', price: '100 000 – 500 000 FCFA', tag: 'Web' },
  { id: 'mobile', icon: Smartphone, title: 'Applications mobiles', description: 'Applications Android et iOS pour l’éducation, le commerce, la communauté, la productivité ou un service interne.', price: '300 000 – 2 000 000 FCFA', tag: 'Mobile' },
  { id: 'saas', icon: Layers, title: 'Applications web & SaaS', description: 'Espaces membres, tableaux de bord, workflows et plateformes collaboratives.', price: '250 000 – 1 500 000 FCFA', tag: 'Produit' },
  { id: 'api', icon: Server, title: 'API & back-end', description: 'API REST, authentification, bases de données, synchronisation hors ligne, intégrations et déploiement.', price: '150 000 – 1 000 000 FCFA', tag: 'Technique' },
  { id: 'desktop', icon: Monitor, title: 'Logiciels desktop', description: 'Outils multiplateformes pour Windows, Linux et macOS, avec packaging, stockage local et documentation.', price: '300 000 – 1 800 000 FCFA', tag: 'Desktop' },
  { id: 'linux', icon: Terminal, title: 'Linux & maintenance', description: 'Installation de distributions Linux, configuration du poste, sauvegardes, nettoyage, mises à jour et assistance.', price: '10 000 – 150 000 FCFA', tag: 'Support' },
  { id: 'design', icon: Palette, title: 'UI/UX & identité produit', description: 'Parcours utilisateurs, wireframes, design system, maquettes et amélioration d’une expérience existante.', price: '50 000 – 400 000 FCFA', tag: 'Design' },
  { id: '3d', icon: Box, title: '3D & expériences interactives', description: 'Modélisation 3D, visualisation produit, scènes interactives, assets web et prototypes immersifs.', price: '150 000 – 1 500 000 FCFA', tag: 'Créatif' },
]

export type Package = {
  name: string
  price: string
  description: string
  features: string[]
  highlighted?: boolean
}

export const PACKAGES: Package[] = [
  { name: 'Essentiel', price: '50 000 – 150 000 FCFA', description: 'Pour lancer une présence numérique propre et crédible.', features: ['Audit et cadrage du besoin', 'Landing page ou site simple', 'Version mobile responsive', 'Mise en ligne et prise en main'] },
  { name: 'Professionnel', price: '150 000 – 450 000 FCFA', description: 'Pour un site ou un outil métier complet, prêt à évoluer.', features: ['Conception UI/UX', 'Site multi-pages ou API légère', 'SEO technique de base', 'Documentation et formation'], highlighted: true },
  { name: 'Application', price: '350 000 – 2 500 000 FCFA', description: 'Pour une application mobile ou une plateforme métier sur mesure.', features: ['Architecture et maquettes', 'Développement mobile ou web', 'Backend et base de données', 'Tests et accompagnement au lancement'] },
  { name: 'Sur mesure', price: '500 000 – 5 000 000+ FCFA', description: 'Pour les projets ambitieux, scolaires, associatifs ou institutionnels.', features: ['Périmètre défini ensemble', 'Équipe adaptée au projet', 'Sprints et livrables réguliers', 'Maintenance évolutive disponible'] },
]

export const PROCESS = [
  { title: 'Cadrage', text: 'Un premier échange pour comprendre le besoin, le contexte, le délai et le budget. Vous repartez avec une proposition claire.' },
  { title: 'Maquettes et plan', text: 'Parcours utilisateurs, wireframes et architecture technique validés ensemble avant d’écrire la première ligne.' },
  { title: 'Développement par sprints', text: 'Des livraisons régulières et testables, un dépôt partagé, et des retours intégrés au fil de l’eau.' },
  { title: 'Livraison et suivi', text: 'Mise en ligne, documentation, formation à la prise en main et maintenance si vous le souhaitez.' },
]

export const FAQ = [
  { question: 'Comment sont fixés les prix ?', answer: 'Les fourchettes ci-dessus donnent un ordre de grandeur en FCFA. Le devis final dépend du périmètre, du délai, du niveau de finition, des tests et de l’accompagnement inclus. Il est toujours défini après un échange.' },
  { question: 'Travaillez-vous à distance ?', answer: 'Oui. Nous sommes basés à Yaoundé mais nous travaillons avec des dépôts partagés, des visioconférences et des livraisons en ligne, où que vous soyez.' },
  { question: 'Le code me sera-t-il remis ?', answer: 'Oui. Vous recevez le code source, la documentation et les accès. Quand c’est pertinent et que vous le souhaitez, nous publions aussi une partie du travail en open source.' },
  { question: 'Proposez-vous la maintenance ?', answer: 'Oui, sous forme d’interventions ponctuelles ou d’un suivi régulier : mises à jour, corrections, évolutions et sauvegardes.' },
]
