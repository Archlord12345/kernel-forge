'use client'

import { useEffect, useState } from 'react'
import { supabase, isSupabaseConfigured } from '@/lib/supabase'
import { TeamMemberCard } from '@/components/team-member-card'
import { Loader } from 'lucide-react'

const PUBLIC_TEAM = [
  ['ravel', 'Lead & Architecture', 'NGHOMSI FEUKOUO RAVEL', 'Chef de projet & Architecte', 'Architecture & Direction', 'Archlord12345', 'https://github.com/Archlord12345.png', 'ravelnghomsi@kernelforge.codes'],
  ['aliya', 'Frontend', 'Aliyatou Rachid Oumou Tourab', 'Frontend Developer', 'Frontend Desktop & Web', 'aliya-nadi', 'https://github.com/aliya-nadi.png', 'oumou.aliyatou@facsciences-uy1.cm'],
  ['judith', 'Mobile', 'Mandeng Judith Oceanne', 'Mobile Developer', 'Frontend Mobile App', 'oceannemj', 'https://github.com/oceannemj.png', 'judithoceanne12@gmail.com'],
  ['william', 'Backend & Data', 'Meli William', 'Backend Developer', 'Backend APIs & BD', 'WilliamMeli-27', 'https://github.com/WilliamMeli-27.png', 'meliwilliam27@gmail.com'],
  ['sandra', 'Mobile', 'FEBNCHAK M. Borelle Sandra', 'Mobile Developer', 'Frontend Mobile App', 'FEBNCHAK', 'https://ui-avatars.com/api/?name=FEBNCHAK%20M.%20Borelle%20Sandra&background=0d9488&color=fff&size=256&bold=true', 'sandraborelle0@gmail.com'],
  ['hassane', 'Backend & Data', 'HASSANE YOUSSOF OUMAR', 'Backend Developer', 'Backend Microservices', 'hawadja1', 'https://ui-avatars.com/api/?name=HASSANE%20YOUSSOF%20OUMAR&background=d97706&color=fff&size=256&bold=true', 'h.hawadja1@gmail.com'],
  ['ange', 'Backend & Data', 'Mokam Ange', 'Backend Developer', 'SGBD & Infrastructure', 'Ange55-star', 'https://ui-avatars.com/api/?name=Mokam%20Ange&background=7c3aed&color=fff&size=256&bold=true', 'ange.mokam@facsciences-uy1.cm'],
  ['juvenal', 'Backend & Data', 'SINENG KENGNI JUVENAL', 'Backend Developer', 'APIs, bases de données & services multiplateformes', 'skjuv', 'https://github.com/skjuv.png', 'sinengjuvenal@gmail.com'],
].map(([id, position, full_name, role, bio, github_username, avatar_url, email]) => ({ id, position, order_priority: 0, profile: { username: github_username, full_name, avatar_url, bio: `${role} · ${bio}`, github_username, twitter_handle: null, email } }))

export function TeamGrid() {
  const [members, setMembers] = useState<any[]>(PUBLIC_TEAM)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!isSupabaseConfigured) return
    async function fetchMembers() {
      try {
        const { data, error } = await supabase.from('members').select('*, profile:user_id (username, full_name, avatar_url, bio, github_username, twitter_handle)').order('order_priority', { ascending: true })
        if (error) throw error
        setMembers(data?.length ? data : PUBLIC_TEAM)
      } catch (error) {
        console.error('Erreur de chargement de l’équipe :', error)
        setMembers(PUBLIC_TEAM)
      } finally {
        setLoading(false)
      }
    }
    fetchMembers()
  }, [])

  const positionOrder = ['Lead & Architecture', 'Frontend', 'Mobile', 'Backend & Data']
  const groupedMembers = members.reduce((acc, member) => { const position = member.position || 'Contributeurs'; (acc[position] ||= []).push(member); return acc }, {} as Record<string, any[]>)

  return <div>
    {loading && <div className="flex items-center justify-center py-12"><Loader className="h-6 w-6 animate-spin text-primary" /></div>}
    {!loading && <div className="mx-auto max-w-6xl space-y-16">{positionOrder.map((position) => groupedMembers[position]?.length ? <section key={position} className="mx-auto"><h2 className="mb-8 text-center text-2xl font-black text-foreground md:text-3xl">{position}</h2><div className="mx-auto grid max-w-5xl grid-cols-1 justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3">{groupedMembers[position].map((member: any) => <TeamMemberCard key={member.id} member={member} />)}</div></section> : null)}</div>}
  </div>
}
