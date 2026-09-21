export type Position = 'Lead & Architecture' | 'Frontend' | 'Mobile' | 'Backend & Data'

export type TeamMember = {
  id: string
  name: string
  role: string
  position: Position
  focus: string
  github: string
  avatarUrl: string | null
  email?: string
}

export const POSITION_ORDER: Position[] = ['Lead & Architecture', 'Frontend', 'Mobile', 'Backend & Data']

export const POSITION_BLURB: Record<Position, string> = {
  'Lead & Architecture': 'Cadrage, architecture et coordination des projets.',
  Frontend: 'Interfaces web et desktop, du prototype à la production.',
  Mobile: 'Applications Android et iOS, offline-first.',
  'Backend & Data': 'APIs, bases de données, microservices et infrastructure.',
}

export const TEAM: TeamMember[] = [
  { id: 'ravel', name: 'Nghomsi Feukouo Ravel', role: 'Chef de projet & architecte', position: 'Lead & Architecture', focus: 'Architecture & direction', github: 'Archlord12345', avatarUrl: 'https://github.com/Archlord12345.png', email: 'ravelnghomsi@kernelforge.codes' },
  { id: 'aliya', name: 'Aliyatou Rachid Oumou Tourab', role: 'Développeuse frontend', position: 'Frontend', focus: 'Frontend desktop & web', github: 'aliya-nadi', avatarUrl: 'https://github.com/aliya-nadi.png', email: 'oumou.aliyatou@facsciences-uy1.cm' },
  { id: 'judith', name: 'Mandeng Judith Oceanne', role: 'Développeuse mobile', position: 'Mobile', focus: 'Application mobile', github: 'oceannemj', avatarUrl: 'https://github.com/oceannemj.png', email: 'judithoceanne12@gmail.com' },
  { id: 'william', name: 'Meli William', role: 'Développeur backend', position: 'Backend & Data', focus: 'APIs & bases de données', github: 'WilliamMeli-27', avatarUrl: 'https://github.com/WilliamMeli-27.png', email: 'meliwilliam27@gmail.com' },
  { id: 'sandra', name: 'Febnchak M. Borelle Sandra', role: 'Développeuse mobile', position: 'Mobile', focus: 'Application mobile', github: 'FEBNCHAK', avatarUrl: null, email: 'sandraborelle0@gmail.com' },
  { id: 'hassane', name: 'Hassane Youssof Oumar', role: 'Développeur backend', position: 'Backend & Data', focus: 'Microservices', github: 'hawadja1', avatarUrl: null, email: 'h.hawadja1@gmail.com' },
  { id: 'ange', name: 'Mokam Ange', role: 'Développeur backend', position: 'Backend & Data', focus: 'SGBD & infrastructure', github: 'Ange55-star', avatarUrl: null, email: 'ange.mokam@facsciences-uy1.cm' },
  { id: 'juvenal', name: 'Sineng Kengni Juvenal', role: 'Développeur backend', position: 'Backend & Data', focus: 'APIs, bases de données & services multiplateformes', github: 'skjuv', avatarUrl: 'https://github.com/skjuv.png', email: 'sinengjuvenal@gmail.com' },
]

export function groupByPosition(members: TeamMember[]) {
  return POSITION_ORDER.map((position) => ({ position, members: members.filter((member) => member.position === position) })).filter((group) => group.members.length > 0)
}
