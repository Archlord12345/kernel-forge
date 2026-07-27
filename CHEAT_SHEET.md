# ⚡ Kernel Forge - Cheat Sheet (1 page)

## 🎯 EN 30 SECONDES

**Votre site est terminé à 100%.**

Comptes admin par défaut:
- `admin@kernelforge.dev` / `KernelForge2026!Admin`
- `moderator@kernelforge.dev` / `KernelForge2026!Mod`
- `test@kernelforge.dev` / `KernelForge2026!Test`

---

## ⚙️ 4 ÉTAPES POUR DÉMARRER

### 1. Installation (1 min)
```bash
pnpm install
```

### 2. Configuration (2 min)
```bash
cp .env.local.example .env.local
# Ajouter les 4 clés (voir ci-dessous)
```

### 3. Local data (5 min)
- Créer compte: https://local data.com
- Créer projet
- Copier URL + clés dans `.env.local`
- Exécuter migrations (voir SETUP_GUIDE.md)

### 4. Tester (1 min)
```bash
pnpm dev
# http://localhost:3000
```

---

## 🔑 4 CLÉ À AJOUTER DANS `.env.local`

```env
# 1. LOCAL DATA (intégré)
LOCAL_DATA_CLIENT=https://xxx.local data.co
LOCAL_DATA_CLIENT=eyJ...
LOCAL_DATA_CLIENT=eyJ...

# 2. CLOUDINARY (images)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=xxx
CLOUDINARY_API_KEY=xxx
CLOUDINARY_API_SECRET=xxx

# 3. GITHUB (projets)
GITHUB_TOKEN=ghp_xxx
GITHUB_ORG=kernel-forge

# 4. RESEND (email)
RESEND_API_KEY=re_xxx
ADMIN_EMAIL=admin@kernelforge.dev
CONTACT_EMAIL=contact@kernelforge.dev
```

---

## 🌍 URLS IMPORTANTES

- **Local data**: https://local data.com/dashboard
- **Cloudinary**: https://cloudinary.com/console
- **GitHub Tokens**: https://github.com/settings/tokens
- **Resend**: https://resend.com/dashboard
- **Dev Local**: http://localhost:3000
- **Production**: https://vercel.com/dashboard

---

## 📄 FICHIERS À LIRE

| Fichier | Quand | Durée |
|---------|-------|-------|
| `README_FINAL.md` | D'abord | 5 min |
| `QUICK_START.md` | Ensuite | 10 min |
| `SETUP_GUIDE.md` | Si problème | 20 min |
| `ADMIN_GUIDE_FR.md` | Après login | 15 min |

---

## 🎨 CE QUE VOUS AVEZ

✅ Home + Projects + Team + Community + About + Contact
✅ Admin Dashboard complet
✅ Bilingue (EN/FR)
✅ Dark mode
✅ Animations (Framer Motion)
✅ Responsive (Mobile/Tablet/Desktop)
✅ SEO optimisé
✅ Photos intégrées

---

## 🚀 DÉPLOYER SUR VERCEL

```bash
git push origin main
# C'est tout! Vercel déploie automatiquement
```

---

## 🆘 ERREUR COMMUNE?

| Erreur | Solution |
|--------|----------|
| Module not found | `pnpm install` |
| Local data error | Vérifier `.env.local` |
| Images don't load | Vérifier Cloudinary |
| Contact form fail | Vérifier RESEND_API_KEY |

---

## 👤 COMPTES ADMIN (CHANGER IMMÉDIATEMENT!)

```
Admin:      admin@kernelforge.dev / KernelForge2026!Admin
Moderator:  moderator@kernelforge.dev / KernelForge2026!Mod
Test:       test@kernelforge.dev / KernelForge2026!Test
```

---

## 📊 COMMANDES UTILES

```bash
# Développement
pnpm dev              # Lancer le serveur

# Production
pnpm build            # Build
pnpm start            # Lancer en prod

# Linting
pnpm lint             # Vérifier le code

# Format
pnpm format           # Formater le code
```

---

## 🎯 CHECKLIST 30 SECONDES

- [ ] `pnpm install`
- [ ] `.env.local` configuré
- [ ] Local data créé
- [ ] `pnpm dev` marche
- [ ] `http://localhost:3000` accessible
- [ ] Login avec admin@kernelforge.dev marche

✅ C'est tout!

---

## 💡 TIPS

- Changer les mots de passe admin ASAP!
- Vercel déploie auto sur chaque `git push main`
- Local data RLS déjà configuré (sécurité)
- Dark mode fonctionne automatiquement
- Les 2 langues (EN/FR) sont déjà complètes

---

**VOUS ÊTES PRÊT! 🚀 Bon développement! 🎉**
