import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Profile = {
  id: string
  username: string
  full_name: string | null
  avatar_url: string | null
  bio: string | null
  role: 'member' | 'admin'
  github_username: string | null
  twitter_handle: string | null
  created_at: string
  updated_at: string
}

export type Member = {
  id: string
  user_id: string | null
  position: string
  order_priority: number
  created_at: string
  updated_at: string
  profile?: Profile
}

export type ProjectOverride = {
  id: string
  github_repo_url: string
  display_name: string | null
  description: string | null
  featured: boolean
  featured_order: number | null
  category: string | null
  tags: string[] | null
  image_url: string | null
  custom_color: string | null
  created_at: string
  updated_at: string
}

export type ContactMessage = {
  id: string
  name: string
  email: string
  subject: string
  message: string
  read: boolean
  created_at: string
}

export type SiteSettings = {
  id: string
  key: string
  value: Record<string, any>
  created_at: string
  updated_at: string
}
