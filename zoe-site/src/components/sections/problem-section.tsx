'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/section-heading'

const riskTiles = [
  {
    label: 'Runway erosion',
    value: '-4.8 mo',
    caption: 'Burn outruns plan before board review.',
    gradient: 'from-[#FF6A6A]/60 via-[#FF6A6A]/10',
  },
  {
    label: 'Signal lag',
    value: '3× slower',
    caption: 'Leading indicators surface after the miss.',
    gradient: 'from-cyan/60 via-cyan/10',
  },
  {
    label: 'Decision debt',
    value: '14 days',
    caption: 'Median delay to assign an owner.',
    gradient: 'from-signal-green/60 via-signal-green/10',
  },
]

const degradationTrack = [
  { label: 'Signal clarity', percent: 82 },
  { label: 'Decision speed', percent: 47 },
  { label: 'Board awareness', percent: 18 },
]

const collapseStages = [
  {
    title: 'Signal → Noise',
    pulse: 'Vitals drown in KPI debates.',
  },
  {
    title: 'Ops gridlock',
    pulse: 'Leaders firefight symptoms, not causes.',
  },
  {
    title: 'Founder pushback',
    pulse: 'Generic fixes trigger organ rejection.',
  },
  {
    title: 'Capital bleed',
    pulse: 'Board intervenes, momentum already gone.',
  },
]

export const ProblemSection = () => {
  return (
    <section id="problem" className="relative isolate py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_right,rgba(106,226,255,0.12),transparent_70%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 -z-30 bg-grid-lines bg-grid opacity-30" aria-hidden="true" />
      <div className="container">
        <SectionHeading
          eyebrow="The Portfolio Risk"
          title="Portfolios don’t miss plan because of one bad month — they miss because the real causes stay hidden."
          description="In the 200-employee band, runway evaporates between board decks. GTM coverage, delivery bottlenecks, and leadership debt fester while teams argue about downstream KPIs. Default “cut opex” playbooks torch talent and still miss the number."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-graphite/80 to-graphite/95 p-8 shadow-[0_35px_120px_rgba(8,12,18,0.55)] backdrop-blur">
            <span className="pointer-events-none absolute -right-24 top-10 h-56 w-56 rounded-full bg-gradient-to-br from-cyan/15 to-transparent blur-3xl" aria-hidden="true" />
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-slate/70">
              <span>Vitals before the board sees the miss</span>
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] text-offwhite/80">
                Week 0–6
              </span>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {riskTiles.map((tile) => (
                <div
                  key={tile.label}
                  className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5`}
                >
                  <span className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${tile.gradient} opacity-60`} aria-hidden="true" />
                  <p className="text-xs uppercase tracking-[0.3em] text-slate/60">{tile.label}</p>
                  <p className="mt-3 text-2xl font-semibold text-offwhite">{tile.value}</p>
                  <p className="mt-2 text-xs text-slate/70">{tile.caption}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-slate/60">Signal decay</p>
              <div className="mt-5 space-y-4">
                {degradationTrack.map((item) => (
                  <div key={item.label} className="flex flex-col gap-2">
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-slate/60">
                      <span>{item.label}</span>
                      <span>{item.percent}%</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                      <span
                        className="block h-full rounded-full bg-gradient-to-r from-cyan/80 via-cyan/40 to-transparent"
                        style={{ width: `${item.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-graphite/90 p-10 shadow-inner-line">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(106,226,255,0.16),transparent_70%)]" aria-hidden="true" />
            <div className="pointer-events-none absolute left-6 top-12 h-[calc(100%-6rem)] w-px bg-gradient-to-b from-cyan/40 via-white/10 to-transparent" aria-hidden="true" />
            <h3 className="text-sm uppercase tracking-[0.35em] text-slate/70">How momentum quietly disappears</h3>
            <div className="mt-8 flex flex-col gap-6">
              {collapseStages.map((stage, index) => (
                <motion.div
                  key={stage.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                  className="group relative flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan/40 bg-cyan/15 text-xs font-semibold text-cyan">
                    {index + 1}
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-semibold uppercase tracking-[0.25em] text-offwhite/90">{stage.title}</span>
                    <span className="text-xs text-slate/70">{stage.pulse}</span>
                  </div>
                  <span className="pointer-events-none absolute inset-0 -z-10 opacity-0 blur-xl transition-opacity duration-400 group-hover:opacity-80" aria-hidden="true">
                    <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan/20 to-transparent" />
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
