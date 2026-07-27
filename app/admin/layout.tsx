'use client'

import { ReactNode } from 'react'
import { AdminSidebar } from '@/components/admin-sidebar'

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground flex">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
