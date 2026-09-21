'use client'

import './globals.css'

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="fr">
      <body className="min-h-dvh bg-ink text-paper antialiased">
        <main className="wrap grid min-h-dvh place-items-center py-16">
          <div className="sticker sticker-forge max-w-xl bg-paper p-8 text-ink sm:p-10">
            <p className="inline-flex rounded-full border-2 border-ink bg-tnt px-3 py-1 font-mono text-xs font-bold text-white">Erreur critique</p>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight tracking-tight">Le site n’a pas pu se charger.</h1>
            <p className="mt-4 text-lg leading-8 text-smoke">Une erreur s’est produite avant même l’affichage de la page. Réessayez ; si cela continue, écrivez-nous à ravelnghomsi@kernelforge.codes.</p>
            {error.digest && <p className="mt-3 font-mono text-xs text-smoke">Référence : {error.digest}</p>}
            <div className="mt-8 flex flex-wrap gap-3">
              <button type="button" onClick={reset} className="press inline-flex h-12 items-center rounded-xl border-2 border-ink bg-forge px-5 font-display font-bold shadow-hard-sm">Réessayer</button>
              <a href="/" className="press inline-flex h-12 items-center rounded-xl border-2 border-ink bg-paper px-5 font-display font-bold shadow-hard-sm">Retour à l’accueil</a>
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
