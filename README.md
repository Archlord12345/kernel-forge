# Kernel Forge — site du collectif

Site de **Kernel Forge**, collectif étudiant open source de l'Université de Yaoundé I.
Production : [kernelforge.codes](https://kernelforge.codes)

## Stack

- [Next.js 16](https://nextjs.org) (App Router, React 19, TypeScript, Turbopack)
- [Tailwind CSS v4](https://tailwindcss.com) : tokens et utilitaires dans `app/globals.css`, pas de `tailwind.config`
- [Framer Motion](https://www.framer.com/motion/) : entrées de page, révélations au défilement, micro-interactions
- [Supabase](https://supabase.com) (optionnel) : surcharges projets/équipe, messages de contact, authentification admin
- Icônes : planches illustrées maison (`public/icons/*.webp`) via `SpotIcon`, plus `lucide-react` pour les glyphes utilitaires

## Démarrer

```bash
pnpm install
cp .env.local.example .env.local   # optionnel, voir ci-dessous
pnpm dev                           # http://localhost:3000
```

Autres scripts : `pnpm build`, `pnpm start -p 3123`, `pnpm typecheck`.

### Variables d'environnement

| Variable | Rôle |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | URL du projet Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Clé anonyme Supabase |

Sans ces variables, le site fonctionne intégralement avec les données statiques de `lib/data/`
et `lib/team-profiles.ts` ; l'API `/api/contact` répond `503` et `/admin` affiche un écran
« configuration requise ».

### Supabase (optionnel)

1. Créer un projet Supabase et exécuter `supabase/migrations/001_initial_schema.sql`.
   Tables : `profiles`, `members`, `project_overrides`, `site_settings`, `contact_messages`
   (RLS activé, écriture réservée aux profils `role = 'admin'`).
2. Renseigner `.env.local` (et les mêmes variables dans Vercel).
3. Créer un utilisateur (Supabase Auth) et lui donner `role = 'admin'` dans `profiles` :
   `/admin` est protégé par `components/admin/auth-gate.tsx` (connexion e-mail + mot de passe, vérification du rôle).

## Règle éditoriale : pas de lien de dépôt sur le site

Le code des projets est partagé **sur demande, via WhatsApp**. Le site ne doit donc afficher
aucun lien vers un dépôt Git (ni organisation, ni projet, ni profil GitHub dans les CV) :
les cartes projet affichent « Code sur demande » vers `SITE.whatsapp`, et les liens GitHub des
profils sont filtrés dans `app/(site)/team/[id]/page.tsx`.

Seule exception : le terminal de la page d'accueil (`components/home/terminal.tsx`) montre la
commande `git clone` du dépôt **Joinus** (`SITE.joinRepo`), dont le README explique comment
rejoindre l'équipe, le fonctionnement du collectif, les réseaux et les contacts.

## Structure

```
app/
├── layout.tsx              # polices, métadonnées globales, Open Graph, icônes, lang="fr"
├── (site)/                 # pages publiques : layout (header/footer), template (transition), loading, error
│   ├── page.tsx            # accueil
│   ├── about/ services/ projects/ team/ team/[id]/ community/ contact/
├── admin/                  # tableau de bord protégé (AuthGate)
├── api/contact/route.ts    # POST : validation, honeypot, limitation de débit, insertion Supabase
├── not-found.tsx global-error.tsx manifest.ts sitemap.ts robots.ts
└── globals.css             # design system

components/
├── ui/                     # Button, Sticker, Burst, Avatar, Monogram, SpotIcon/IconTile, WhatsAppButton
├── site/                   # Header, Footer, PageIntro, SectionHeading, Marquee, ChannelsGrid
├── home/                   # Hero, Terminal, Pillars, FeaturedProjects, ServicesTeaser, TeamStrip, CommunityBand, FinalCta
├── projects/ team/ contact/ admin/ motion/
└── mascot.tsx              # Arch dans ses cinq poses

lib/
├── data/                   # site.ts (constantes, navigation, canaux), team.ts, projects.ts, services.ts, content.ts
├── team-profiles.ts        # CV publics des membres (/team/[id])
├── supabase.ts utils.ts
public/
├── arch/                   # pointing, waving, lost, fixing, coding (WebP détourés)
├── icons/                  # 24 icônes illustrées (WebP)
├── projects/               # couvertures et captures des projets
└── og-kernel-forge.jpg kernel-forge-crew.webp icon-*.png apple-touch-icon.png
```

## Design system

Tout est dans `app/globals.css` (`@theme`).

**Couleurs** : `forge #ff7626` / `forge-deep`, `ember #ffb27a`, `ink #17120f` (+ `ink-2`, `ink-3`),
`paper #fffbef` / `paper-2`, `sand`, `smoke`, `creeper #4bc03a` / `creeper-deep`, `tnt #e5352b`.
Les tokens sémantiques (`background`, `primary`, `accent`, `destructive`…) pointent vers ces couleurs.

**Typographie** : Bricolage Grotesque (titres, `font-display`), Instrument Sans (texte), Silkscreen (`font-pixel`, accents rétro).

**Langage visuel** : contours encre 2 px, ombres dures décalées (`shadow-hard*`), autocollants (`.sticker`, `.sticker-sm`, `.sticker-forge`),
trames (`.halftone`, `.forge-grid`, `.scanlines`), ligne de forge animée (`.forge-line`).

**Animations** : `animate-float`, `animate-drift`, `animate-pop`, `animate-shimmer`, `animate-blink`, `animate-glitch`, `animate-marquee`,
plus `.press` (enfoncement au clic) et `.shine` (reflet au survol) sur les boutons. Toutes respectent `prefers-reduced-motion`.

## Images

- Visuels servis en **WebP** pré-optimisés (`images.unoptimized: true`), largeur d'affichage ×2, qualité ~80.
- La mascotte Arch et les icônes sont générées puis détourées ; ne pas réintroduire de PNG lourds dans `public/`.
- `public/og-kernel-forge.jpg` (1200×630) est l'image de partage ; garder ce format.

## SEO et accessibilité

- Métadonnées par page, `metadataBase` = `https://kernelforge.codes`, JSON-LD `Organization` et `Person`.
- `sitemap.ts` inclut les pages principales et les CV ; `robots.ts` bloque `/admin` et `/api/`.
- Lien d'évitement, focus visibles, `aria-*` sur les menus et onglets, animations réduites si demandé.

## Déploiement (Vercel)

`vercel.json` définit `pnpm install --frozen-lockfile` / `pnpm build`.
Ajouter les variables Supabase dans le projet Vercel si besoin.

## Contact

ravelnghomsi@kernelforge.codes · [Groupe WhatsApp](https://chat.whatsapp.com/IFkGMr4Ev2KCFAKw9EmEde)
