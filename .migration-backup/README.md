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
- Local-first data fetching with seeded data and browser persistence
- Server-side rendering with Next.js 16
- TypeScript for type safety
- Tailwind CSS for styling with custom cream/orange/green theme

## Environment Setup

### Prerequisites
- Node.js 18+ (pnpm)
- No external service account, database, or environment file required

### Installation

1. **Clone and install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   ```

2. **Start the development server:**
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
└── local-data.ts         # Local data client, seed data, and type definitions
```

## Local Data Schema

The app uses an in-repository local data client with seeded data and browser `localStorage` persistence for client-side edits. The API route uses the same local client in memory, so the project can build and run without Supabase or any external service credentials.

### Tables

**profiles**
- Stores local profile information
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

The admin dashboard currently runs locally without external authentication. Future implementations can optionally add:
1. Email/password authentication
2. Protection for `/admin/*` routes with auth middleware
3. Role-based access control (RBAC)

## Deployment

### Deploy to Vercel

```bash
git add .
git commit -m "Initial commit"
git push
```

Then connect your GitHub repository to your host. No database service, analytics service, or runtime environment variables are required for the default local-first setup.

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
