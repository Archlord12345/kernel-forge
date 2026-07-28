'use client'

import { useEffect, useState } from 'react'
import { localDataClient } from '@/lib/local-data'
import { Code2, Users, MessageSquare, TrendingUp } from 'lucide-react'

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    projects: 0,
    members: 0,
    messages: 0,
    unreadMessages: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadStats()
  }, [])

  async function loadStats() {
    try {
      const [projectsData, membersData, messagesData, unreadData] = await Promise.all([
        localDataClient.from('project_overrides').select('id', { count: 'exact', head: true }),
        localDataClient.from('members').select('id', { count: 'exact', head: true }),
        localDataClient.from('contact_messages').select('id', { count: 'exact', head: true }),
        localDataClient.from('contact_messages').select('id', { count: 'exact', head: true }).eq('read', false),
      ])

      setStats({
        projects: projectsData.count || 0,
        members: membersData.count || 0,
        messages: messagesData.count || 0,
        unreadMessages: unreadData.count || 0,
      })
    } catch (error) {
      console.error('Error loading stats:', error)
    } finally {
      setLoading(false)
    }
  }

  const statCards = [
    {
      title: 'Projects',
      value: stats.projects,
      icon: Code2,
      href: '/admin/projects',
    },
    {
      title: 'Team Members',
      value: stats.members,
      icon: Users,
      href: '/admin/team',
    },
    {
      title: 'Messages',
      value: stats.messages,
      icon: MessageSquare,
      href: '/admin/messages',
    },
    {
      title: 'Unread',
      value: stats.unreadMessages,
      icon: TrendingUp,
      href: '/admin/messages',
    },
  ]

  return (
    <div className="flex-1">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="px-8 py-6">
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Welcome to the Kernel Forge admin panel</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statCards.map((card) => {
            const Icon = card.icon
            return (
              <a
                key={card.title}
                href={card.href}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary transition-all hover:shadow-lg cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-4">
                  <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <p className="text-sm text-muted-foreground mb-1">{card.title}</p>
                <p className="text-3xl font-bold text-foreground">{loading ? '...' : card.value}</p>
              </a>
            )
          })}
        </div>

        {/* Recent Activity */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-xl font-bold text-foreground mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Add Project', href: '/admin/projects?mode=add' },
              { title: 'Add Team Member', href: '/admin/team?mode=add' },
              { title: 'View Messages', href: '/admin/messages' },
              { title: 'Site Settings', href: '/admin/settings' },
            ].map((action) => (
              <a
                key={action.title}
                href={action.href}
                className="p-4 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground font-medium transition-colors text-center"
              >
                {action.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
