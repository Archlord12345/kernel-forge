# Kernel Forge - Final Setup Checklist

## 🎯 What You Have

✅ **Full Kernel Forge Website**
- 9 pages + Admin dashboard
- Bilingual (EN/FR)
- Duolingo-inspired design adapted for Kernel Forge
- Community page with reduced banner
- Mock environment variables
- Design system documentation

---

## 📋 Step-by-Step Setup (30-40 minutes)

### Step 1: Copy Environment File (1 min)
```bash
cd /path/to/kernel-forge
cp .env.local.mock .env.local
```

### Step 2: Configure Environment Variables (5 min)

Open `.env.local` and update these 4 services:

#### 2.1 Supabase (Database)
- Go to https://supabase.com
- Create new project
- Copy these to `.env.local`:
  - `NEXT_PUBLIC_SUPABASE_URL` → Project URL
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY` → anon key
  - `SUPABASE_SERVICE_ROLE_KEY` → service role key

#### 2.2 Cloudinary (Image Management)
- Go to https://cloudinary.com
- Sign up and go to Settings → API Keys
- Copy these to `.env.local`:
  - `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
  - `CLOUDINARY_API_KEY`
  - `CLOUDINARY_API_SECRET`

#### 2.3 GitHub (Project Sync)
- Go to https://github.com/settings/tokens
- Create Personal Access Token
- Select scopes: `repo`, `read:user`, `read:org`
- Copy to `.env.local`:
  - `GITHUB_TOKEN`
  - `GITHUB_ORG` = your organization name

#### 2.4 Resend (Email)
- Go to https://resend.com
- Sign up and go to API Keys
- Copy to `.env.local`:
  - `RESEND_API_KEY`

### Step 3: Install Dependencies (2 min)
```bash
pnpm install
```

### Step 4: Database Setup (5 min)

#### Option A: Auto Migration (Recommended)
```bash
# This will run migrations if SUPABASE_AUTO_MIGRATE=true
pnpm dev
```

#### Option B: Manual Migration
1. Go to Supabase dashboard
2. Open SQL Editor
3. Copy & paste SQL from SETUP_GUIDE.md
4. Execute all queries

### Step 5: Start Development Server (1 min)
```bash
pnpm dev
```

The site opens at: http://localhost:3000

### Step 6: Login to Admin (1 min)
Navigate to: http://localhost:3000/admin

Use default credentials:
- **Email:** admin@kernelforge.dev
- **Password:** KernelForge2026!Admin

⚠️ **Change this password immediately!**

---

## 🔑 Default Admin Accounts

| Role | Email | Password | Use |
|------|-------|----------|-----|
| Admin | admin@kernelforge.dev | KernelForge2026!Admin | Full system access |
| Moderator | moderator@kernelforge.dev | KernelForge2026!Mod | Content management |
| Test | test@kernelforge.dev | KernelForge2026!Test | Testing/development |

**These are created automatically during first Supabase connection.**

---

## 📚 Documentation Files (Read in This Order)

1. **CHEAT_SHEET.md** (2 min)
   - Quick overview, one page

2. **README_FINAL.md** (5 min)
   - Project features and structure

3. **DESIGN_SYSTEM_KERNEL_FORGE.md** (10 min)
   - Color palette, typography, components
   - Design tokens and guidelines
   - Duolingo inspiration explained

4. **SETUP_GUIDE.md** (20 min)
   - Detailed configuration steps
   - SQL schema and migrations
   - Database structure

5. **ADMIN_GUIDE_FR.md** (15 min)
   - For French administrators
   - Content management guide

---

## 🎨 Design System Highlights

### Colors (Duolingo-Inspired, Kernel Forge Adapted)
- **Primary:** Kernel Orange (#FF6B35) - Main CTAs & headings
- **Accent:** Kernel Mint (#65D080) - Outlined buttons & links
- **Background:** Kernel Cream (#faf8f3) - Page background
- **Text:** Graphite (#3c3c3c) - Primary text

### Typography
- **Body:** Inter 500/700 at 15px (friendly, open)
- **Headings:** Inter 800-900 at 32-64px (bold, confident)
- **Spacing:** 0.053em letter-spacing (breezy feel)

### Components
- No shadows - use thick borders instead
- Flat illustrations - no gradients
- 12px border-radius everywhere
- 100px section gaps

### Banner
- Height: 200px (mobile) / 250px (desktop)
- Full-width with 4px orange bottom border
- Gradient overlay for text readability

---

## 🚀 Deployment

### Local Development
```bash
pnpm dev
# http://localhost:3000
```

### Build for Production
```bash
pnpm build
pnpm start
```

### Deploy to Vercel (Recommended)
1. Push to GitHub: `git push origin main`
2. Connect repo to Vercel
3. Set environment variables in Vercel
4. Auto-deploys on push

---

## ✅ Quick Verification

After setup, verify:

- [ ] Site loads at http://localhost:3000
- [ ] EN/FR language switcher works
- [ ] Dark mode toggle works
- [ ] Community page shows banner
- [ ] Admin login works
- [ ] Supabase data syncs
- [ ] Images load correctly
- [ ] Navigation works on all pages

---

## 🛠️ Troubleshooting

### Supabase Connection Fails
- Check NEXT_PUBLIC_SUPABASE_URL format (should end in .supabase.co)
- Verify anon key is not service role key
- Test: `curl https://your-url.supabase.co`

### Images Not Loading
- Verify Cloudinary credentials
- Check NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
- Images auto-upload when admin creates project

### Email Not Sending
- Verify Resend API key in .env.local
- Check email settings in admin dashboard
- Test with test account first

### Login Issues
- Ensure migrations ran successfully
- Check default credentials in .env.local
- Clear browser cache and retry

---

## 📞 Support

For issues:
1. Check the ADMIN_GUIDE_FR.md
2. Review SETUP_GUIDE.md
3. Check Supabase dashboard for errors
4. Check browser console for errors

---

## 🎉 You're Ready!

Your Kernel Forge website is now:
✅ Installed
✅ Configured
✅ Connected to database
✅ Ready to customize
✅ Ready to deploy

### Next Steps:
1. Update admin password
2. Add projects in admin dashboard
3. Customize content
4. Test all features
5. Deploy to production

**Total setup time: 30-40 minutes**

Good luck! 🚀
