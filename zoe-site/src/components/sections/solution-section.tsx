'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/section-heading'

const solutionPillars = [
  {
    title: 'Diagnose',
    timeframe: '2–3 weeks',
    copy: 'Build a root-cause health model from the data you already have. No integrations, no dashboards—just the truth.',
    artifacts: ['Financial + GTM anomaly scan', 'Operator interviews & friction mapping', 'Founder-first readout (private to the CEO)'],
  },
  {
    title: 'Prescribe',
    timeframe: '90 days',
    copy: 'Turn findings into sequenced recovery plays. Each lever ships with owners, impact $, deadlines, and operator support until it sticks.',
    artifacts: ['Prioritized vitality levers (“So-What Cards”)', 'Stage-aware playbooks', 'Owners, impact $, and deadlines set'],
  },
  {
    title: 'Monitor',
    timeframe: 'Ongoing',
    copy: 'Sustain momentum without surveillance. Monthly pulses, anomaly alerts, and ROI movement give boards signal—not noise.',
    artifacts: ['Monthly health pulse', 'Anomaly alerts + ROI movement', 'Board-ready summaries without noise'],
  },
]

export const SolutionSection = () => {
  return (
    <section id="solution" className="relative isolate py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_bottom_left,rgba(25,195,125,0.12),transparent_70%)]" aria-hidden="true" />
      <div className="container">
        <SectionHeading
          eyebrow="How ZOE Works"
          title="We rebuild company health for venture-backed teams."
          description="Zoe is the first system that fuses AI pattern detection with veteran operator playbooks to restore company health and accelerate performance."
        />

        <div className="relative mt-14 grid gap-8 md:grid-cols-3">
          <div className="pointer-events-none absolute inset-x-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-white/10 to-transparent md:block" aria-hidden="true" />
          {solutionPillars.map((pillar, index) => (
            <motion.article
              key={pillar.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-graphite/85 p-8 shadow-inner-line backdrop-blur transition-transform duration-500 ease-out hover:-translate-y-2 hover:border-cyan/50"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(106,226,255,0.18),transparent_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-full border border-cyan/40 bg-cyan/10 text-sm font-semibold uppercase tracking-[0.2em] text-cyan shadow-[0_0_20px_rgba(106,226,255,0.3)]">
                {index + 1}
              </span>
              <h3 className="relative mt-6 text-2xl font-semibold text-offwhite">
                {pillar.title}
                <span className="ml-3 text-sm font-medium uppercase tracking-[0.2em] text-slate/70">
                  {pillar.timeframe}
                </span>
              </h3>
              <p className="relative mt-4 text-base text-slate/80">{pillar.copy}</p>
              <ul className="relative mt-6 space-y-3 text-sm text-slate/75">
                {pillar.artifacts.map((artifact) => (
                  <li key={artifact} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-cyan/70" aria-hidden="true" />
                    <span>{artifact}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
