-- Create profiles table (extends auth.users)
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username TEXT UNIQUE NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  bio TEXT,
  role TEXT DEFAULT 'member', -- 'member', 'admin'
  github_username TEXT,
  twitter_handle TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create members table for team display
CREATE TABLE members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  position TEXT NOT NULL, -- 'Founder', 'Core Team', 'Contributor'
  order_priority INT DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create project_overrides table (custom project metadata)
CREATE TABLE project_overrides (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  github_repo_url TEXT UNIQUE NOT NULL,
  display_name TEXT,
  description TEXT,
  featured BOOLEAN DEFAULT FALSE,
  featured_order INT,
  category TEXT, -- 'web', 'cli', 'library', 'other'
  tags TEXT[], -- array of tags
  image_url TEXT,
  custom_color TEXT, -- hex color
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create site_settings table
CREATE TABLE site_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  key TEXT UNIQUE NOT NULL,
  value JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create contact_messages table
CREATE TABLE contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE members ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_overrides ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Profiles: Public read, users can update own
CREATE POLICY "Profiles are publicly readable"
  ON profiles FOR SELECT
  USING (TRUE);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Members: Public read only
CREATE POLICY "Members are publicly readable"
  ON members FOR SELECT
  USING (TRUE);

CREATE POLICY "Admins can manage members"
  ON members FOR ALL
  USING (
    auth.uid() IN (
      SELECT id FROM profiles WHERE role = 'admin'
    )
  );

-- Project overrides: Public read, admins write
CREATE POLICY "Project overrides are publicly readable"
  ON project_overrides FOR SELECT
  USING (TRUE);

CREATE POLICY "Admins can manage project overrides"
  ON project_overrides FOR ALL
  USING (
    auth.uid() IN (
      SELECT id FROM profiles WHERE role = 'admin'
    )
  );

-- Site settings: Public read, admins write
CREATE POLICY "Site settings are publicly readable"
  ON site_settings FOR SELECT
  USING (TRUE);

CREATE POLICY "Admins can manage site settings"
  ON site_settings FOR ALL
  USING (
    auth.uid() IN (
      SELECT id FROM profiles WHERE role = 'admin'
    )
  );

-- Contact messages: Anyone can insert, admins can read/manage
CREATE POLICY "Contact messages can be created"
  ON contact_messages FOR INSERT
  WITH CHECK (TRUE);

CREATE POLICY "Admins can view contact messages"
  ON contact_messages FOR SELECT
  USING (
    auth.uid() IN (
      SELECT id FROM profiles WHERE role = 'admin'
    )
  );

CREATE POLICY "Admins can update contact messages"
  ON contact_messages FOR UPDATE
  USING (
    auth.uid() IN (
      SELECT id FROM profiles WHERE role = 'admin'
    )
  );

-- Create indexes for better query performance
CREATE INDEX idx_members_user_id ON members(user_id);
CREATE INDEX idx_members_position ON members(position);
CREATE INDEX idx_project_overrides_featured ON project_overrides(featured);
CREATE INDEX idx_site_settings_key ON site_settings(key);
CREATE INDEX idx_contact_messages_read ON contact_messages(read);
CREATE INDEX idx_contact_messages_created ON contact_messages(created_at DESC);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = CURRENT_TIMESTAMP;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_members_updated_at BEFORE UPDATE ON members
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_project_overrides_updated_at BEFORE UPDATE ON project_overrides
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_site_settings_updated_at BEFORE UPDATE ON site_settings
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
