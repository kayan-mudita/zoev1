'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/section-heading'

const solutionPillars = [
  {
    title: 'Diagnose',
    timeframe: '2–3 weeks',
    copy: 'Read-only connectors, structured interviews, and sentiment capture build a defensible model of what is really driving the miss.',
    artifacts: ['Financial + GTM anomaly scan', 'Operator interviews & friction map', 'Founder-first readout'],
  },
  {
    title: 'Prescribe',
    timeframe: '90 days',
    copy: 'So-What Cards convert findings into plays: issue, impact $, owner, deadline, and first three moves. Operators embed until actions stick.',
    artifacts: ['Prioritized So-What Cards', 'Stage-aware playbooks', 'Owner, impact, deadline clear'],
  },
  {
    title: 'Monitor',
    timeframe: 'Ongoing',
    copy: 'Lightweight monthly pulse. AI shops for anomalies, surfaces ROI, and keeps the board aligned without turning into surveillance.',
    artifacts: ['Monthly ROI pulse', 'Anomaly alerts & benchmarks', 'Board-ready summary'],
  },
]

export const SolutionSection = () => {
  return (
    <section id="solution" className="relative isolate py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_bottom_left,rgba(25,195,125,0.12),transparent_70%)]" aria-hidden="true" />
      <div className="container">
        <SectionHeading
          eyebrow="How ZOE Works"
          title="AI diagnostics fused with operator-grade intervention."
          description="ZOE is the first AI-operator hybrid built for VC/PE portfolios. We translate noisy systems into clear, sequenced plays that boards trust and founders control."
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
