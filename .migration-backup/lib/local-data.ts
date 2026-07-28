const STORAGE_KEY = 'kernel-forge-local-data'

type TableName = 'profiles' | 'members' | 'project_overrides' | 'contact_messages' | 'site_settings'
type SortRule<T> = { column: keyof T; ascending: boolean }

type LocalDatabase = {
  profiles: Profile[]
  members: Member[]
  project_overrides: ProjectOverride[]
  contact_messages: ContactMessage[]
  site_settings: SiteSettings[]
}

type TableRowMap = {
  profiles: Profile
  members: Member
  project_overrides: ProjectOverride
  contact_messages: ContactMessage
  site_settings: SiteSettings
}

const now = () => new Date().toISOString()
const id = () => globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random()}`

const seedData: LocalDatabase = {
  profiles: [
    {
      id: 'profile-ada',
      username: 'ada',
      full_name: 'Ada Kernel',
      avatar_url: null,
      bio: 'Founder focused on open-source tooling and community learning.',
      role: 'admin',
      github_username: 'ada-kernel',
      twitter_handle: null,
      created_at: now(),
      updated_at: now(),
    },
    {
      id: 'profile-linus',
      username: 'linus',
      full_name: 'Linus Forge',
      avatar_url: null,
      bio: 'Core contributor building reliable developer experiences.',
      role: 'member',
      github_username: 'linus-forge',
      twitter_handle: null,
      created_at: now(),
      updated_at: now(),
    },
  ],
  members: [
    {
      id: 'member-founder',
      user_id: 'profile-ada',
      position: 'Founder',
      order_priority: 1,
      created_at: now(),
      updated_at: now(),
    },
    {
      id: 'member-core',
      user_id: 'profile-linus',
      position: 'Core Team',
      order_priority: 2,
      created_at: now(),
      updated_at: now(),
    },
  ],
  project_overrides: [
    {
      id: 'project-kernel-forge',
      github_repo_url: 'https://github.com/kernel-forge/kernel-forge',
      display_name: 'Kernel Forge',
      description: 'A fully local showcase for open-source projects and community work.',
      featured: true,
      featured_order: 1,
      category: 'web',
      tags: ['nextjs', 'typescript', 'local-first'],
      image_url: null,
      custom_color: null,
      created_at: now(),
      updated_at: now(),
    },
  ],
  contact_messages: [],
  site_settings: [],
}

const clone = <T,>(value: T): T => JSON.parse(JSON.stringify(value))
let serverData = clone(seedData)

function readDatabase(): LocalDatabase {
  if (typeof window === 'undefined') return serverData

  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (!stored) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(seedData))
    return clone(seedData)
  }

  return JSON.parse(stored)
}

function writeDatabase(database: LocalDatabase) {
  if (typeof window === 'undefined') {
    serverData = database
    return
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(database))
}

class LocalQuery<T extends { id: string; created_at?: string; updated_at?: string }> implements PromiseLike<{ data: T[] | null; error: Error | null; count?: number | null }> {
  private filters: Array<{ column: keyof T; value: unknown }> = []
  private sortRules: SortRule<T>[] = []
  private mutation: 'insert' | 'update' | 'delete' | null = null
  private payload: Partial<T>[] | Partial<T> | null = null
  private head = false
  private withCount = false

  constructor(private table: TableName) {}

  select(_columns = '*', options?: { count?: 'exact'; head?: boolean }) {
    this.head = Boolean(options?.head)
    this.withCount = Boolean(options?.count)
    return this
  }

  order(column: keyof T, options?: { ascending?: boolean }) {
    this.sortRules.push({ column, ascending: options?.ascending ?? true })
    return this
  }

  eq(column: keyof T, value: unknown) {
    this.filters.push({ column, value })
    return this
  }

  insert(payload: Partial<T>[]) {
    this.mutation = 'insert'
    this.payload = payload
    return this
  }

  update(payload: Partial<T>) {
    this.mutation = 'update'
    this.payload = payload
    return this
  }

  delete() {
    this.mutation = 'delete'
    return this
  }

  then<TResult1 = { data: T[] | null; error: Error | null; count?: number | null }, TResult2 = never>(
    onfulfilled?: ((value: { data: T[] | null; error: Error | null; count?: number | null }) => TResult1 | PromiseLike<TResult1>) | null,
    onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
  ): PromiseLike<TResult1 | TResult2> {
    return this.execute().then(onfulfilled, onrejected)
  }

  private async execute() {
    try {
      const database = readDatabase()
      const tableData = database[this.table] as unknown as T[]

      if (this.mutation === 'insert') {
        const rows = (this.payload as Partial<T>[]).map((row) => ({
          ...row,
          id: row.id ?? id(),
          created_at: row.created_at ?? now(),
          updated_at: row.updated_at ?? now(),
          ...(this.table === 'contact_messages' ? { read: (row as Partial<ContactMessage>).read ?? false } : {}),
        })) as T[]
        tableData.push(...rows)
        writeDatabase(database)
        return { data: this.head ? null : rows, error: null, count: this.withCount ? rows.length : null }
      }

      const matches = (row: T) => this.filters.every((filter) => row[filter.column] === filter.value)

      if (this.mutation === 'update') {
        const updated: T[] = []
        database[this.table] = tableData.map((row) => {
          if (!matches(row)) return row
          const next = { ...row, ...(this.payload as Partial<T>), updated_at: now() } as T
          updated.push(next)
          return next
        }) as any
        writeDatabase(database)
        return { data: this.head ? null : updated, error: null, count: this.withCount ? updated.length : null }
      }

      if (this.mutation === 'delete') {
        const deleted = tableData.filter(matches)
        database[this.table] = tableData.filter((row) => !matches(row)) as any
        writeDatabase(database)
        return { data: this.head ? null : deleted, error: null, count: this.withCount ? deleted.length : null }
      }

      let rows = tableData.filter(matches)
      rows = rows.map((row) => {
        if (this.table !== 'members') return row
        const member = row as unknown as Member
        return {
          ...member,
          profile: database.profiles.find((profile) => profile.id === member.user_id),
        } as unknown as T
      })
      for (const rule of this.sortRules.reverse()) {
        rows.sort((a, b) => {
          const av = a[rule.column]
          const bv = b[rule.column]
          if (av === bv) return 0
          if (av === null || av === undefined) return 1
          if (bv === null || bv === undefined) return -1
          return (av > bv ? 1 : -1) * (rule.ascending ? 1 : -1)
        })
      }
      return { data: this.head ? null : clone(rows), error: null, count: this.withCount ? rows.length : null }
    } catch (error) {
      return { data: null, error: error instanceof Error ? error : new Error('Local data error'), count: null }
    }
  }
}

export const localDataClient = {
  from<K extends TableName>(table: K) {
    return new LocalQuery<TableRowMap[K]>(table)
  },
  auth: {
    async signOut() {
      return { error: null }
    },
  },
}

export type Profile = {
  id: string
  username: string
  full_name: string | null
  avatar_url: string | null
  bio: string | null
  role: 'member' | 'admin'
  github_username: string | null
  twitter_handle: string | null
  created_at: string
  updated_at: string
}

export type Member = {
  id: string
  user_id: string | null
  position: string
  order_priority: number
  created_at: string
  updated_at: string
  profile?: Profile
}

export type ProjectOverride = {
  id: string
  github_repo_url: string
  display_name: string | null
  description: string | null
  featured: boolean
  featured_order: number | null
  category: string | null
  tags: string[] | null
  image_url: string | null
  custom_color: string | null
  created_at: string
  updated_at: string
}

export type ContactMessage = {
  id: string
  name: string
  email: string
  subject: string
  message: string
  read: boolean
  created_at: string
}

export type SiteSettings = {
  id: string
  key: string
  value: Record<string, any>
  created_at: string
  updated_at: string
}
