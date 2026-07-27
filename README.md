# Kernel Forge - Open Source Software Collective

A full-stack Next.js application for Kernel Forge, a student software development collective at the University of Yaoundé I.

## Features

### Public Pages
- **Home**: Hero section with featured projects and call-to-action
- **Projects**: Browse all open-source projects with filtering by category
- **Team**: Meet the team members with their profiles and social links
- **Community**: Learn about the community values and vision
- **About**: Mission, vision, and story of Kernel Forge
- **Contact**: Contact form for inquiries

### Admin Dashboard
- **Dashboard**: Overview stats of projects, members, and messages
- **Projects Management**: Add, edit, and delete project metadata overrides
- **Messages**: View and manage contact form submissions
- **Team Management**: Coming soon
- **Settings**: Coming soon

### Technical Features
- Responsive mobile-first design with light/dark mode support
- Real-time data fetching with Supabase
- Server-side rendering with Next.js 16
- TypeScript for type safety
- Tailwind CSS for styling with custom cream/orange/green theme

## Environment Setup

### Prerequisites
- Node.js 18+ (pnpm)
- Supabase account and project

### Installation

1. **Clone and install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   ```

2. **Set up environment variables:**
   Create a `.env.local` file in the project root:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

3. **Set up Supabase database:**
   - Create a new Supabase project
   - Run the SQL migration from `supabase/migrations/001_initial_schema.sql` in the Supabase SQL editor
   - This creates tables for profiles, members, projects, messages, and settings

4. **Start the development server:**
   ```bash
   pnpm dev
   ```

   The application will be available at `http://localhost:3000`

## Project Structure

```
app/
├── api/
│   └── contact/          # Contact form API endpoint
├── admin/
│   ├── page.tsx          # Admin dashboard
│   ├── projects/         # Project management
│   ├── messages/         # Message management
│   ├── team/             # Team management
│   └── settings/         # Settings management
├── projects/             # Projects page
├── team/                 # Team page
├── community/            # Community page
├── about/                # About page
├── contact/              # Contact page
├── page.tsx              # Home page
├── layout.tsx            # Root layout
└── globals.css           # Global styles with design tokens

components/
├── header.tsx            # Navigation header
├── footer.tsx            # Footer
├── hero-section.tsx      # Hero section
├── featured-projects.tsx # Featured projects carousel
├── projects-grid.tsx     # Projects filtering grid
├── project-card.tsx      # Individual project card
├── team-grid.tsx         # Team members grid
├── team-member-card.tsx  # Individual team member
├── contact-form.tsx      # Contact form component
├── theme-toggle.tsx      # Light/dark mode toggle
├── admin/
│   ├── admin-sidebar.tsx # Admin navigation sidebar
│   └── project-form.tsx  # Project management form
└── cta-section.tsx       # Call to action section

lib/
└── supabase.ts           # Supabase client and type definitions
```

## Database Schema

### Tables

**profiles**
- Extends auth.users with additional profile information
- Fields: username, full_name, avatar_url, bio, role, github_username, twitter_handle

**members**
- Team members with position and display order
- Fields: user_id, position, order_priority

**project_overrides**
- Custom metadata for GitHub projects
- Fields: github_repo_url, display_name, description, featured, category, tags, image_url

**site_settings**
- Global site configuration
- Fields: key, value (JSONB)

**contact_messages**
- Contact form submissions
- Fields: name, email, subject, message, read

All tables include RLS policies for security and appropriate timestamps.

## Design System

### Color Palette
- **Primary**: Orange (`oklch(0.55 0.25 40)`) - CTA buttons and highlights
- **Accent**: Mint Green (`oklch(0.65 0.15 155)`) - Secondary accents
- **Background**: Cream (`oklch(0.98 0.005 70)`) - Light mode background
- **Neutrals**: Grays for text and borders

### Typography
- **Headings**: Inter font family
- **Body**: Inter font family
- **Code**: JetBrains Mono (planned)

### Spacing
- Uses Tailwind CSS spacing scale for consistency
- Base unit: 0.25rem (4px)

## API Routes

### POST /api/contact
Submit a contact form message.

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Inquiry",
  "message": "Your message here"
}
```

**Response:**
```json
{
  "message": "Message sent successfully",
  "data": { ... }
}
```

## Authentication

The admin dashboard uses Supabase Auth. Future implementations should:
1. Add email/password authentication
2. Protect `/admin/*` routes with auth middleware
3. Implement role-based access control (RBAC)

## Deployment

### Deploy to Vercel

```bash
git add .
git commit -m "Initial commit"
git push
```

Then connect your GitHub repository to Vercel and configure the environment variables in the Vercel project settings.

### Environment Variables (Vercel)
Set the same `NEXT_PUBLIC_SUPABASE_*` variables in your Vercel project settings.

## Contributing

1. Clone the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For issues or questions, please:
1. Open an issue on GitHub
2. Contact: hello@kernelforge.dev
3. Follow us on Twitter: @kernel_forge

## Roadmap

- [ ] GitHub API integration for auto-syncing projects
- [ ] Cloudinary integration for project images
- [ ] Team member management interface
- [ ] Site settings management
- [ ] Email notifications
- [ ] Advanced analytics
- [ ] Blog/news section

---

**Kernel Forge** - Code. Forge. Impact. Repeat.

## Deploying on Vercel

This project is configured for a straightforward Vercel deployment via `vercel.json`.

1. Import the repository in Vercel and keep the detected framework as **Next.js**.
2. Use the default commands from `vercel.json`:
   - Install: `pnpm install --frozen-lockfile`
   - Build: `pnpm build`
   - Output: `.next`
3. Add these environment variables in Vercel Project Settings:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy. Vercel Analytics is already enabled in production.
