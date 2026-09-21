import type { Metadata } from 'next'
import { AdminSidebar } from '@/components/admin-sidebar'
import { AuthGate } from '@/components/admin/auth-gate'

export const metadata: Metadata = { title: 'Administration', robots: { index: false, follow: false } }

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGate>
      <div className="flex min-h-dvh bg-background text-foreground">
        <AdminSidebar />
        <main id="contenu" className="flex-1 overflow-auto">{children}</main>
      </div>
    </AuthGate>
  )
}
