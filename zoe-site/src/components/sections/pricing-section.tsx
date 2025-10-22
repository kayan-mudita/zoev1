'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/section-heading'

const tiers = [
  {
    stage: 'Seed',
    diagnostic: '$18k–$24k',
    interventions: 'Fixed-fee sprints $8k–$12k / module',
    monitoring: '$1.5k/mo post-diagnostic (optional)',
    notes: [
      'Optimized for sub-40 person teams aligning on PMF and burn sanity.',
      'Equity optional (≤0.15%) when cash-strapped.',
    ],
  },
  {
    stage: 'Series A',
    diagnostic: '$28k–$36k',
    interventions: 'Fixed-fee operator engagements $12k–$18k / module',
    monitoring: '$2.5k/mo after first 90 days (optional)',
    notes: [
      'Handles cross-functional GTM + delivery bottlenecks and leadership realignment.',
      'Risk reversal: defer up to 40% until next board meeting if no value.',
    ],
  },
  {
    stage: 'Series B+',
    diagnostic: '$45k–$65k',
    interventions: 'Structured 90-day programs $18k–$32k / module',
    monitoring: '$4k/mo with portfolio benchmarks',
    notes: [
      'Designed for multi-market scale-ups and post-merger integration health.',
      'Fund / OpCo split invoicing available.',
    ],
  },
]

export const PricingSection = () => (
  <section id="pricing" className="relative isolate py-24 sm:py-32">
    <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_right,rgba(106,226,255,0.16),transparent_70%)]" aria-hidden="true" />
    <div className="container">
      <SectionHeading
        eyebrow="Pricing & Scope"
        title="Stage-aligned pricing. Fixed-fee interventions. Monitoring by choice."
        description="Transparent diagnostics deliver certainty fast. Interventions are structured, not hourly. Monitoring only begins once founder trust is earned."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {tiers.map((tier, index) => (
          <motion.article
            key={tier.stage}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.1, duration: 0.35 }}
            className={`relative overflow-hidden rounded-2xl border border-white/10 bg-graphite/85 p-8 shadow-inner-line transition-transform duration-400 ease-out hover:-translate-y-2 hover:border-cyan/50 ${
              index === 1 ? 'lg:-translate-y-1 lg:shadow-[0_35px_70px_rgba(5,8,12,0.45)]' : ''
            }`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(106,226,255,0.22),transparent_75%)] opacity-70" aria-hidden="true" />
            <div className="relative flex items-center justify-between">
              <h3 className="text-xl font-semibold text-offwhite">{tier.stage}</h3>
              <span className="rounded-full border border-cyan/40 bg-cyan/15 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan">
                {index === 1 ? 'Most Selected' : 'Diagnostic'}
              </span>
            </div>
            <p className="relative mt-4 text-lg font-semibold text-offwhite">{tier.diagnostic}</p>
            <div className="relative mt-6 space-y-4 text-sm text-slate/80">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate/60">Interventions</p>
                <p className="mt-2 font-medium text-offwhite/90">{tier.interventions}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate/60">Monitoring</p>
                <p className="mt-2 font-medium text-offwhite/90">{tier.monitoring}</p>
              </div>
              <ul className="mt-4 space-y-2">
                {tier.notes.map((note) => (
                  <li key={note} className="flex gap-3 text-sm">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-signal-green" aria-hidden="true" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="relative mt-10 flex flex-col items-start gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 shadow-inner-line sm:flex-row sm:items-center sm:justify-between">
        <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(106,226,255,0.18),transparent_70%)] opacity-80" aria-hidden="true" />
        <p className="max-w-2xl text-sm text-slate/80">
          <strong className="text-offwhite">Risk reversal:</strong> money-back if the board rates “no value.” Funds and OpCos can split invoices. Deferred billing available pre-raise.
        </p>
        <a
          href="#pricing-cta"
          className="inline-flex items-center justify-center rounded-full border border-cyan/40 px-6 py-3 text-sm font-semibold text-cyan transition hover:border-cyan hover:bg-cyan/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
        >
          Get Pricing &amp; Scope →
        </a>
      </div>
    </div>
  </section>
)
