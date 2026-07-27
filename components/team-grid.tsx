'use client'

import { useEffect, useState } from 'react'
import { localDataClient } from '@/lib/local-data'
import { TeamMemberCard } from '@/components/team-member-card'
import { Loader } from 'lucide-react'

interface TeamMember {
  id: string
  user_id: string | null
  position: string
  order_priority: number
  profile?: {
    username: string
    full_name: string | null
    avatar_url: string | null
    bio: string | null
    github_username: string | null
    twitter_handle: string | null
  }
}

export function TeamGrid() {
  const [members, setMembers] = useState<TeamMember[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchMembers()
  }, [])

  async function fetchMembers() {
    try {
      const { data, error } = await localDataClient
        .from('members')
        .select(`
          *,
          profile:user_id (
            username,
            full_name,
            avatar_url,
            bio,
            github_username,
            twitter_handle
          )
        `)
        .order('order_priority', { ascending: true })

      if (error) throw error

      setMembers(data || [])
    } catch (error) {
      console.error('Error fetching team members:', error)
    } finally {
      setLoading(false)
    }
  }

  // Group by position
  const groupedMembers = members.reduce((acc, member) => {
    const pos = member.position || 'Contributor'
    if (!acc[pos]) acc[pos] = []
    acc[pos].push(member)
    return acc
  }, {} as Record<string, TeamMember[]>)

  const positionOrder = ['Founder', 'Core Team', 'Contributor']

  return (
    <div>
      {loading && (
        <div className="flex items-center justify-center py-12">
          <Loader className="w-6 h-6 text-primary animate-spin" />
        </div>
      )}

      {!loading && members.length > 0 && (
        <div className="space-y-16">
          {positionOrder.map((position) => {
            const positionMembers = groupedMembers[position]
            if (!positionMembers || positionMembers.length === 0) return null

            return (
              <div key={position}>
                <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
                  {position}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {positionMembers.map((member) => (
                    <TeamMemberCard key={member.id} member={member} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      )}

      {!loading && members.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">No team members found</p>
        </div>
      )}
    </div>
  )
}
