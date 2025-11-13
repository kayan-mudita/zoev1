'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/section-heading'

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
          eyebrow="The Reality Every CEO Knows"
          title="Companies rarely fall apart all at once. They degrade silently."
          description="Margins slip a little. Delivery slows. Sales efficiency drifts. Teams fight symptoms instead of causes. Zoe catches the vitality issues before they turn into existential ones—and prescribes the fastest path to recovery."
        />

        <div className="mt-16">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-graphite/90 p-10 shadow-inner-line">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(106,226,255,0.16),transparent_70%)]" aria-hidden="true" />
            <div className="pointer-events-none absolute left-6 top-12 h-[calc(100%-6rem)] w-px bg-gradient-to-b from-cyan/40 via-white/10 to-transparent" aria-hidden="true" />
            <h3 className="text-sm uppercase tracking-[0.35em] text-slate/70">How momentum quietly disappears</h3>
            <p className="mt-3 text-sm text-slate/75">The business is whispering something&apos;s wrong—Zoe amplifies the signal and treats the condition.</p>
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
