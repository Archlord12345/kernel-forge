import { Cog } from 'lucide-react'

export default function Loading() {
  return (
    <div className="wrap py-24" role="status" aria-live="polite">
      <div className="mx-auto flex max-w-md flex-col items-center text-center">
        <span className="relative grid h-20 w-20 place-items-center">
          <span className="absolute inset-0 rounded-full border-2 border-ink bg-forge/30 animate-pulse-ring" aria-hidden="true" />
          <span className="sticker-sm sticker-forge relative grid h-16 w-16 place-items-center bg-paper"><Cog className="h-8 w-8 text-ink animate-spin-slow [animation-duration:3s]" /></span>
        </span>
        <p className="mt-6 font-display text-xl font-extrabold">La forge chauffe…</p>
        <p className="mt-1 text-sm text-smoke">Chargement de la page.</p>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-3" aria-hidden="true">
        {[0, 1, 2].map((index) => (
          <div key={index} className="sticker sticker-flat animate-pulse bg-paper-2 p-5" style={{ animationDelay: `${index * 120}ms` }}>
            <div className="aspect-video rounded-xl bg-sand" />
            <div className="mt-4 h-5 w-2/3 rounded-md bg-sand" />
            <div className="mt-2 h-4 w-full rounded-md bg-sand/70" />
            <div className="mt-1.5 h-4 w-5/6 rounded-md bg-sand/70" />
          </div>
        ))}
      </div>
    </div>
  )
}
