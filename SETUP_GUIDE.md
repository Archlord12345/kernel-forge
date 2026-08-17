# Kernel Forge - Complete Setup Guide

## 🚀 Installation & Configuration

### 1. **Installation des dépendances**

```bash
# Installer toutes les dépendances
pnpm install

# Démarrer le serveur de développement
pnpm dev

# La site sera accessible sur http://localhost:3000
```

---

## 🔐 Paramètres d'Environnement Requis

Créer un fichier `.env.local` à la racine du projet avec les paramètres suivants:

### **A. Supabase (Base de données & Authentication)**

```env
# === SUPABASE CONFIGURATION ===
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Comment obtenir ces clés:**
1. Aller sur https://supabase.com
2. Créer un nouveau projet
3. Aller dans Settings → API
4. Copier `Project URL` et `anon key`
5. Copier aussi la `service_role key`

---

### **B. Cloudinary (Gestion des images)**

```env
# === CLOUDINARY CONFIGURATION ===
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

**Comment obtenir ces clés:**
1. Aller sur https://cloudinary.com
2. S'inscrire/se connecter
3. Aller dans Dashboard → Settings
4. Copier `Cloud Name`
5. Aller dans Settings → Security → API Keys
6. Copier `API Key` et `API Secret`

---

### **C. GitHub (Intégration des projets)**

```env
# === GITHUB CONFIGURATION ===
GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
GITHUB_ORG=kernel-forge
```

**Comment obtenir le token:**
1. Aller sur https://github.com/settings/tokens
2. Cliquer sur "Generate new token (classic)"
3. Ajouter les scopes: `repo`, `public_repo`, `read:org`
4. Copier le token

---

### **D. Configuration Email (Pour formulaire de contact)**

```env
# === EMAIL CONFIGURATION ===
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
ADMIN_EMAIL=admin@kernelforge.dev
CONTACT_EMAIL=contact@kernelforge.dev
```

**Comment obtenir Resend API Key:**
1. Aller sur https://resend.com
2. S'inscrire/se connecter
3. Aller dans Settings → API Keys
4. Générer une nouvelle clé

---

### **E. Configuration de la Base de Données**

```env
# === DATABASE SCHEMA SETUP ===
# Exécuter les migrations Supabase avec:
# pnpm supabase db push

# Vérifier l'état des migrations:
# pnpm supabase db show
```

---

## 👤 Identifiants Admin par Défaut

### **Compte Admin Initial**

```
Email:    admin@kernelforge.dev
Password: KernelForge2026!Admin
Rôle:     Super Admin
```

### **Compte Modérateur**

```
Email:    moderator@kernelforge.dev
Password: KernelForge2026!Mod
Rôle:     Moderator
```

### **Compte Test**

```
Email:    test@kernelforge.dev
Password: KernelForge2026!Test
Rôle:     Member
```

**⚠️ IMPORTANT:** 
- Changer ces mots de passe immédiatement après le premier login
- Ne jamais partager ces identifiants
- Utiliser des mots de passe forts en production

---

## 📊 Configuration Supabase - Tables & Schéma

### **Tables à créer:**

#### 1. **profiles** (Profils utilisateurs)
```sql
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  username VARCHAR(50) UNIQUE,
  display_name VARCHAR(100),
  avatar_url TEXT,
  bio TEXT,
  github_username VARCHAR(100),
  twitter_handle VARCHAR(100),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- RLS Policy
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public profiles are viewable by everyone" ON profiles FOR SELECT USING (true);
CREATE POLICY "Users can update their own profile" ON profiles FOR UPDATE USING (auth.uid() = id);
```

#### 2. **projects** (Projets GitHub)
```sql
CREATE TABLE project_overrides (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  repo_name VARCHAR(255),
  repo_owner VARCHAR(255),
  title VARCHAR(255),
  description TEXT,
  category VARCHAR(50), -- 'web', 'cli', 'library', 'other'
  featured BOOLEAN DEFAULT false,
  featured_order INTEGER,
  image_url TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- RLS Policy
ALTER TABLE project_overrides ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Projects are viewable by everyone" ON project_overrides FOR SELECT USING (true);
CREATE POLICY "Admins can manage projects" ON project_overrides FOR ALL USING (
  (SELECT role FROM profiles WHERE id = auth.uid()) = 'admin'
);
```

#### 3. **members** (Membres de l'équipe)
```sql
CREATE TABLE members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  name VARCHAR(100),
  role VARCHAR(50), -- 'founder', 'lead', 'contributor', 'member'
  bio TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- RLS Policy
ALTER TABLE members ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Members are viewable by everyone" ON members FOR SELECT USING (true);
CREATE POLICY "Admins can manage members" ON members FOR ALL USING (
  (SELECT role FROM profiles WHERE id = auth.uid()) = 'admin'
);
```

#### 4. **contact_messages** (Messages de contact)
```sql
CREATE TABLE contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100),
  email VARCHAR(255),
  subject VARCHAR(255),
  message TEXT,
  inquiry_type VARCHAR(50), -- 'partnership', 'collaboration', 'question', 'other'
  read BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);

-- RLS Policy
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins can view all messages" ON contact_messages FOR SELECT USING (
  (SELECT role FROM profiles WHERE id = auth.uid()) = 'admin'
);
CREATE POLICY "Anyone can insert a message" ON contact_messages FOR INSERT WITH CHECK (true);
```

#### 5. **site_settings** (Paramètres du site)
```sql
CREATE TABLE site_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  key VARCHAR(255) UNIQUE,
  value TEXT,
  updated_at TIMESTAMP DEFAULT NOW()
);

-- RLS Policy
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Settings are viewable by everyone" ON site_settings FOR SELECT USING (true);
CREATE POLICY "Admins can update settings" ON site_settings FOR UPDATE USING (
  (SELECT role FROM profiles WHERE id = auth.uid()) = 'admin'
);
```

---

## 🗄️ Migration Supabase

Exécuter le fichier migration fourni:

```bash
# Copier le fichier de migration
cp supabase/migrations/001_initial_schema.sql ~/your-migration-file.sql

# Via Supabase CLI
pnpm supabase db push

# Ou via l'interface web Supabase:
# 1. Aller dans SQL Editor
# 2. Créer une nouvelle requête
# 3. Copier-coller le contenu du fichier migration
# 4. Exécuter
```

---

## 🔑 Configuration de l'Authentification

### **Activer Email/Password dans Supabase:**

1. Aller dans Authentication → Providers
2. S'assurer que "Email" est activé
3. Aller dans Settings → Email Templates
4. Personnaliser les emails si besoin

### **Ajouter les identifiants admin:**

Via Supabase Console:
1. Aller dans Authentication → Users
2. Créer les 3 utilisateurs avec les emails fournis
3. Générer des mots de passe temporaires
4. Les utilisateurs doivent les changer au premier login

---

## 🌐 Variables Globales (optionnel)

```env
# === GLOBAL SETTINGS ===
NEXT_PUBLIC_APP_NAME=Kernel Forge
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development

# Sentry (Error Tracking - optionnel)
SENTRY_AUTH_TOKEN=your_token_here

# Analytics (optionnel)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## ✅ Checklist de Déploiement

### **Avant le lancement en production:**

- [ ] Tous les `.env` sont configurés
- [ ] Supabase est déployé en production
- [ ] Les migrations de base de données sont appliquées
- [ ] Les 3 comptes admin sont créés
- [ ] Cloudinary est configuré
- [ ] GitHub token est valide
- [ ] Resend API key fonctionne
- [ ] SSL/HTTPS est activé
- [ ] Domain DNS est pointé vers le serveur
- [ ] Backup de la base de données est configuré
- [ ] Monitoring est activé (Sentry, etc.)

---

## 🚀 Déploiement sur Vercel

```bash
# 1. Pousser sur GitHub
git push origin main

# 2. Connecter le repo à Vercel
# Via https://vercel.com/new

# 3. Ajouter les variables d'environnement dans Vercel Settings
# Ajouter tous les paramètres de .env.local

# 4. Déployer
# Vercel déploiera automatiquement lors des push sur main
```

---

## 🐛 Troubleshooting

### **Erreur: "SUPABASE_URL is required"**
→ Ajouter `NEXT_PUBLIC_SUPABASE_URL` dans `.env.local`

### **Erreur: "Images can't be loaded"**
→ Vérifier les permissions Cloudinary ou utiliser des URLs publiques

### **Erreur: "Contact form not sending"**
→ Vérifier que `RESEND_API_KEY` est valide

### **Page Admin ne charge pas**
→ Vérifier l'authentification Supabase et le rôle utilisateur

---

## 📞 Support

Pour plus d'aide:
- Documentation Supabase: https://supabase.com/docs
- Documentation Cloudinary: https://cloudinary.com/documentation
- Documentation Next.js: https://nextjs.org/docs

---

**Créé pour Kernel Forge Academy - 2026**
