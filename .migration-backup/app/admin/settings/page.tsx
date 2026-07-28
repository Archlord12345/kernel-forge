'use client'

export default function AdminSettingsPage() {
  return (
    <div className="flex-1">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="px-8 py-6">
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground mt-1">Manage site settings and configuration</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="bg-card border border-border rounded-xl p-8 text-center">
          <p className="text-muted-foreground">Settings management coming soon</p>
        </div>
      </div>
    </div>
  )
}
