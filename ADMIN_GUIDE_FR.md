# 👨‍💼 Guide Administrateur Kernel Forge

## 🔐 Identifiants Admin par Défaut

### **Compte Admin Principal**
```
Email:    admin@kernelforge.dev
Password: KernelForge2026!Admin
```

### **Compte Modérateur**
```
Email:    moderator@kernelforge.dev
Password: KernelForge2026!Mod
```

### **Compte Test**
```
Email:    test@kernelforge.dev
Password: KernelForge2026!Test
```

⚠️ **IMPORTANT**: Changer ces mots de passe immédiatement après le premier login!

---

## 🚀 Tâches Admin Essentielles

### **1. Changer les mots de passe admin (PRIORITÉ 1)**

1. Se connecter avec: `admin@kernelforge.dev` / `KernelForge2026!Admin`
2. Aller dans le profil admin
3. Changer le mot de passe en quelque chose de sécurisé:
   - Minimum 16 caractères
   - Majuscules, minuscules, chiffres, symboles
   - Exemple: `K3rnelForge@2026Secure!`

### **2. Ajouter des membres à l'équipe**

Via le Dashboard Admin:
1. Aller dans "Team Members"
2. Cliquer "Add Member"
3. Remplir:
   - Nom
   - Email
   - Rôle (Founder, Lead, Contributor)
   - Bio
   - Avatar (Cloudinary)

### **3. Ajouter des projets**

Via le Dashboard Admin:
1. Aller dans "Projects"
2. Cliquer "Add Project"
3. Remplir:
   - Repo Name (ex: kernel-forge-api)
   - Repo Owner (ex: kernel-forge)
   - Title
   - Description
   - Category (Web, CLI, Library, OS)
   - Featured (mettre en avant)
   - Image (Cloudinary)

### **4. Gérer les messages de contact**

Via le Dashboard Admin:
1. Aller dans "Messages"
2. Voir tous les messages reçus
3. Marquer comme lu/archivé
4. Répondre via email (admin@kernelforge.dev)

### **5. Configurer les paramètres du site**

Via le Dashboard Admin:
1. Aller dans "Settings"
2. Modifier:
   - Nom du site
   - Description
   - Année de création
   - Informations de contact
   - Logo et favicon

---

## 📊 Base de Données - Gestion

### **Tables principales**

#### **profiles** (Profils utilisateurs)
```sql
SELECT * FROM profiles;
-- Voir tous les utilisateurs
```

#### **project_overrides** (Projets)
```sql
SELECT * FROM project_overrides WHERE featured = true;
-- Voir les projets en avant
```

#### **members** (Membres d'équipe)
```sql
SELECT * FROM members ORDER BY created_at DESC;
-- Voir tous les membres
```

#### **contact_messages** (Messages de contact)
```sql
SELECT * FROM contact_messages WHERE read = false;
-- Voir les messages non lus
```

---

## 🔒 Sécurité - Checklist

### **Avant de lancer en production**

- [ ] Tous les mots de passe admin changés
- [ ] SSL/HTTPS activé
- [ ] Backups configurés
- [ ] Rate limiting activé
- [ ] CORS configuré correctement
- [ ] Supabase RLS policies activées
- [ ] Logs monitoring configurés
- [ ] Sentry/error tracking activé

### **Permissions par rôle**

| Action | Admin | Mod | Member | Public |
|--------|-------|-----|--------|--------|
| Lire projets | ✅ | ✅ | ✅ | ✅ |
| Ajouter projet | ✅ | ❌ | ❌ | ❌ |
| Éditer projet | ✅ | ✅ | ❌ | ❌ |
| Supprimer projet | ✅ | ❌ | ❌ | ❌ |
| Gérer utilisateurs | ✅ | ❌ | ❌ | ❌ |
| Voir messages | ✅ | ✅ | ❌ | ❌ |
| Répondre messages | ✅ | ✅ | ❌ | ❌ |
| Configurer site | ✅ | ❌ | ❌ | ❌ |

---

## 📈 Maintenance Régulière

### **Quotidienne**
- Vérifier les messages de contact
- Vérifier les erreurs dans les logs

### **Hebdomadaire**
- Vérifier la santé du serveur
- Vérifier les uploads Cloudinary
- Vérifier les appels API GitHub

### **Mensuelle**
- Nettoyer les anciens logs
- Mettre à jour les dépendances
- Vérifier les backups Supabase
- Révoir les permissions d'accès

### **Trimestrielle**
- Audit de sécurité
- Vérifier les certificats SSL
- Mettre à jour les politiques de contenu

---

## 🛠️ Commandes utiles

### **Supabase CLI**

```bash
# Voir le status
supabase status

# Voir les migrations
supabase db show

# Exécuter les migrations
supabase db push

# Voir les logs
supabase logs tail

# Télécharger les données
supabase db pull
```

### **Vérifier les uploads Cloudinary**

```bash
# Voir les fichiers uploadés
curl https://res.cloudinary.com/[CLOUD_NAME]/image/list

# Nettoyer les anciens fichiers
# (via Dashboard Cloudinary)
```

---

## 💬 Communication

### **Modération du contenu**

1. **Projets**: Vérifier la qualité et la pertinence
2. **Messages**: Répondre rapidement (< 24h)
3. **Équipe**: Mettre à jour les bios et descriptions

### **Réseaux sociaux à mettre à jour**

- GitHub: @kernel-forge
- Twitter: @kernel_forge
- Email: admin@kernelforge.dev

---

## 🎯 KPIs à suivre

- Nombre de membres
- Nombre de projets
- Nombre de stars GitHub
- Taux de réponse aux messages
- Taux de downtime

---

## 🆘 Troubleshooting Admin

### **Problème: Les projets ne mettent pas à jour**
→ Vérifier le GitHub token dans `.env`
→ Vérifier que le repo existe

### **Problème: Images ne s'affichent pas**
→ Vérifier Cloudinary credentials
→ Vérifier les permissions CORS

### **Problème: Formulaire de contact ne fonctionne pas**
→ Vérifier Resend API key
→ Vérifier l'adresse email d'administration

### **Problème: Utilisateurs ne peuvent pas se connecter**
→ Vérifier Supabase auth settings
→ Vérifier que l'utilisateur existe
→ Réinitialiser le mot de passe

---

## 📞 Escalade d'urgence

**Si le site est down:**
1. Vérifier les logs Vercel
2. Vérifier les logs Supabase
3. Vérifier l'état du DNS
4. Contacter le support (voir liens en bas)

---

## 🔗 Ressources Admin

- **Supabase Dashboard**: https://supabase.com/dashboard
- **Cloudinary Console**: https://cloudinary.com/console
- **Vercel Dashboard**: https://vercel.com/dashboard
- **GitHub Settings**: https://github.com/settings
- **Resend Dashboard**: https://resend.com/dashboard

---

## ✅ Checklist de démarrage

- [ ] Mots de passe admin changés
- [ ] Premier administrateur confirmé
- [ ] Équipe de modération configurée
- [ ] Premier projet ajouté
- [ ] Logo/favicon mis à jour
- [ ] Description du site configurée
- [ ] Contact email testé
- [ ] Réseaux sociaux liés

---

**Bienvenue en tant qu'administrateur de Kernel Forge! 🎉**
