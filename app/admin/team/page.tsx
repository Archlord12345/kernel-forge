'use client'

import { useState } from 'react'

export default function AdminTeamPage() {
  return (
    <div className="flex-1">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="px-8 py-6">
          <h1 className="text-3xl font-bold text-foreground">Team Members</h1>
          <p className="text-muted-foreground mt-1">Manage team members and roles</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="bg-card border border-border rounded-xl p-8 text-center">
          <p className="text-muted-foreground">Team management coming soon</p>
        </div>
      </div>
    </div>
  )
}
