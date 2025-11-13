'use client'

const earlyWarnings = [
  'Ownerless “temporary” work turns into silent drag.',
  'Board pre-reads smooth the story but hide the real deltas.',
  'Decisions queue up behind a single exec while morale cools.',
]

export const InvestorProblemSection = () => {
  return (
    <section id="problem" className="relative isolate py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_right,rgba(106,226,255,0.12),transparent_70%)]" aria-hidden="true" />
      <div className="container">
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-graphite/90 p-8 shadow-inner-line">
          <p className="text-xs uppercase tracking-[0.35em] text-slate/60">Portfolio drift, before the miss</p>
          <p className="mt-4 text-sm text-slate/75">
            By the time metrics wobble, the real problem is already spreading through operating cadence, decision velocity, and leadership focus. Zoe watches those human signals so the board is never surprised.
          </p>
          <ul className="mt-6 space-y-4 text-sm text-slate/75">
            {earlyWarnings.map((warning) => (
              <li key={warning} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan/70" aria-hidden="true" />
                <span>{warning}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
