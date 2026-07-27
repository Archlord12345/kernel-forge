# 🚀 Kernel Forge - Démarrage Rapide

## 📋 Résumé - Ce qu'il faut faire

### **Étape 1: Cloner le projet**
```bash
git clone https://github.com/your-org/kernel-forge.git
cd kernel-forge
pnpm install
```

### **Étape 2: Créer le fichier `.env.local`**
```bash
cp .env.local.example .env.local
```

### **Étape 3: Configurer les services (5-10 minutes)**

#### **A. Supabase (Base de données)**
1. Créer un compte sur https://supabase.com
2. Créer un nouveau projet
3. Copier `Project URL` et `anon key` depuis Settings → API
4. Remplir dans `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...
```

#### **B. Cloudinary (Images)**
1. Créer un compte sur https://cloudinary.com
2. Copier Cloud Name depuis Dashboard
3. Créer API Key dans Settings → Security
4. Remplir dans `.env.local`:
```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=xxx
CLOUDINARY_API_KEY=xxx
CLOUDINARY_API_SECRET=xxx
```

#### **C. GitHub (Projets)**
1. Aller sur https://github.com/settings/tokens
2. Générer nouveau token (scopes: `repo`, `read:org`)
3. Remplir dans `.env.local`:
```env
GITHUB_TOKEN=ghp_xxx
GITHUB_ORG=kernel-forge
```

#### **D. Resend (Email)**
1. Créer compte sur https://resend.com
2. Générer API Key
3. Remplir dans `.env.local`:
```env
RESEND_API_KEY=re_xxx
ADMIN_EMAIL=admin@kernelforge.dev
CONTACT_EMAIL=contact@kernelforge.dev
```

### **Étape 4: Configurer la base de données**

Via Supabase Console, exécuter le SQL de migration:
```bash
# Télécharger le fichier
cat supabase/migrations/001_initial_schema.sql
```

Copier et exécuter dans Supabase SQL Editor.

### **Étape 5: Créer les comptes admin**

Via Supabase Auth, ajouter les 3 utilisateurs:

```
Admin:
- Email: admin@kernelforge.dev
- Password: KernelForge2026!Admin

Modérateur:
- Email: moderator@kernelforge.dev
- Password: KernelForge2026!Mod

Test:
- Email: test@kernelforge.dev
- Password: KernelForge2026!Test
```

### **Étape 6: Tester localement**
```bash
pnpm dev
# Ouvrir http://localhost:3000
```

---

## ✅ Checklist d'installation

- [ ] `.env.local` créé avec tous les paramètres
- [ ] Supabase URL et clés ajoutées
- [ ] Cloudinary configuré
- [ ] GitHub token généré
- [ ] Resend API key ajoutée
- [ ] Migration Supabase exécutée
- [ ] 3 comptes admin créés
- [ ] `pnpm dev` fonctionne
- [ ] Pages accéder sans erreur

---

## 🌐 URLs importantes

- **Développement**: http://localhost:3000
- **Supabase Console**: https://supabase.com/dashboard
- **Cloudinary Dashboard**: https://cloudinary.com/console
- **GitHub Settings**: https://github.com/settings/tokens
- **Resend Dashboard**: https://resend.com/dashboard

---

## 👤 Comptes par défaut

| Rôle | Email | Mot de passe | Accès |
|------|-------|---|---|
| Admin | admin@kernelforge.dev | KernelForge2026!Admin | Panel admin complet |
| Modérateur | moderator@kernelforge.dev | KernelForge2026!Mod | Gestion contenu |
| Test | test@kernelforge.dev | KernelForge2026!Test | Utilisateur normal |

⚠️ **CHANGER les mots de passe immédiatement après login!**

---

## 🎯 Fonctionnalités activées

- ✅ Authentification Email/Password
- ✅ Galerie de projets GitHub
- ✅ Gestion d'images Cloudinary
- ✅ Formulaire de contact avec Resend
- ✅ Admin dashboard
- ✅ Bilingue (EN/FR)
- ✅ Dark mode
- ✅ SEO optimisé
- ✅ Animations Framer Motion

---

## 🐛 Erreurs courantes

### "Cannot find module '@supabase/supabase-js'"
```bash
pnpm install
```

### "Supabase URL is not configured"
Vérifier que `.env.local` a `NEXT_PUBLIC_SUPABASE_URL`

### "Images not loading"
Vérifier Cloudinary permissions dans `.env.local`

### "Contact form not sending"
Vérifier `RESEND_API_KEY` est valide

---

## 📞 Besoin d'aide?

Voir le fichier `SETUP_GUIDE.md` pour les détails complets.

---

**Bon développement! 🎉**
