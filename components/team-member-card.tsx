import { GitBranch, Mail, ArrowUpRight } from 'lucide-react'

interface TeamMemberCardProps {
  member: {
    id: string
    position: string
    profile?: {
      username: string
      full_name: string | null
      avatar_url: string | null
      bio: string | null
      github_username: string | null
      twitter_handle: string | null
      email?: string | null
    }
  }
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  const profile = member.profile
  const name = profile?.full_name || profile?.username || 'Membre Kernel Forge'
  const initials = name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2)
  const [role, expertise] = (profile?.bio || '').split(' · ')

  return (
    <article className="group relative overflow-hidden rounded-[1.4rem] border border-[#eadfd4] bg-[#fffaf0] p-6 text-left shadow-[0_12px_35px_rgba(23,18,15,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#ff7626] hover:shadow-[0_18px_45px_rgba(233,87,22,0.14)]">
      <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[4rem] bg-[#ff7626]/10 transition-transform duration-300 group-hover:scale-125" />
      <div className="relative flex items-start justify-between gap-4">
        {profile?.avatar_url ? (
          <img src={profile.avatar_url} alt={`Portrait de ${name}`} className="h-20 w-20 rounded-2xl border-2 border-[#ff7626]/30 object-cover shadow-sm transition-transform duration-300 group-hover:rotate-2 group-hover:scale-105" />
        ) : (
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-[#ff7626]/30 bg-[#17120f] text-xl font-black text-[#ff9a5a]">{initials}</div>
        )}
        <span className="rounded-full border border-[#56b88b]/30 bg-[#56b88b]/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#237453]">{member.position}</span>
      </div>
      <div className="relative mt-5">
        <h3 className="text-lg font-black uppercase tracking-tight text-[#17120f]">{name}</h3>
        {role && <p className="mt-1 text-sm font-extrabold text-[#e95716]">{role}</p>}
        {expertise && <p className="mt-3 text-sm leading-6 text-[#65584f]">{expertise}</p>}
      </div>
      <div className="relative mt-6 flex items-center justify-between border-t border-[#eadfd4] pt-4">
        <span className="text-xs font-bold text-[#9a8a7c]">Contributeur public</span>
        <div className="flex items-center gap-2">
          {profile?.github_username && <a href={`https://github.com/${profile.github_username}`} target="_blank" rel="noopener noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[#eadfd4] text-[#65584f] transition hover:border-[#17120f] hover:bg-[#17120f] hover:text-white" aria-label={`GitHub de ${name}`}><GitBranch className="h-4 w-4" /></a>}
          {profile?.email && <a href={`mailto:${profile.email}`} className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[#eadfd4] text-[#65584f] transition hover:border-[#ff7626] hover:bg-[#ff7626] hover:text-[#17120f]" aria-label={`Envoyer un e-mail à ${name}`}><Mail className="h-4 w-4" /></a>}
          {profile?.github_username && <a href={`/team/${member.id}`} className="inline-flex items-center gap-1 text-xs font-black text-[#e95716] sm:inline-flex">CV <ArrowUpRight className="h-3.5 w-3.5" /></a>}
        </div>
      </div>
    </article>
  )
}
