'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/section-heading'

const steps = [
  {
    name: 'Intake',
    window: 'Days 0–3',
    copy: 'Secure connectors (finance, GTM, HRIS) + operator interviews + sentiment baseline.',
    deliverable: 'Access log & diagnostic scope, founder priorities recorded.',
  },
  {
    name: 'Truth',
    window: 'Days 4–10',
    copy: 'AI anomaly scan + cohort benchmarks + qualitative synthesis from interviews.',
    deliverable: 'Draft So-What Cards with impact sizing and confidence bands.',
  },
  {
    name: 'Decision',
    window: 'Days 11–15',
    copy: 'Founder-first readout. CEO curates what moves forward. Board preview deck refined.',
    deliverable: 'Approved So-What Cards with owners and deadlines.',
  },
  {
    name: 'Execution',
    window: 'Days 16–45',
    copy: 'Operator Fellows and internal leaders launch plays, clear blockers, and update ROI tracker weekly.',
    deliverable: '90-day operator plan + weekly pulse + risk log.',
  },
  {
    name: 'Pulse',
    window: 'Monthly after',
    copy: 'Light instrumentation tracks KPI movement, anomalies, and adoption. Board sees deltas, not dashboards.',
    deliverable: 'Founder-controlled board memo + ROI tracker.',
  },
]

export const MethodSection = () => (
  <section id="method" className="relative isolate py-24 sm:py-32">
    <div className="container">
      <SectionHeading
        eyebrow="Method"
        title="Healthcare for companies: vitals → diagnosis → prescription → follow-up."
        description="ZOE productizes veteran operator instincts into a system your founders trust and your board believes. No bloat, no 200-slide decks."
      />

      <div className="relative mt-16 overflow-hidden rounded-2xl border border-white/10 bg-graphite/80 shadow-inner-line">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:120px_120px] opacity-40" aria-hidden="true" />
        <div className="grid gap-0 md:grid-cols-5">
          {steps.map((step, index) => (
            <motion.div
              key={step.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.08, duration: 0.35 }}
              className={`group relative flex flex-col gap-4 border-white/5 p-6 text-left transition-colors duration-300 ${
                index > 0 ? 'md:border-l' : ''
              }`}
            >
              {index === 0 ? (
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-cyan/70 to-transparent md:static md:h-1 md:w-auto md:bg-gradient-to-r" aria-hidden="true" />
              ) : null}
              {index > 0 && index < steps.length ? (
                <div className="pointer-events-none absolute -right-0.5 top-6 hidden h-[calc(100%-3rem)] w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent md:block" aria-hidden="true" />
              ) : null}
              <span className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-slate/60">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-cyan/40 bg-cyan/10 text-[10px] font-semibold text-cyan">
                  {index + 1}
                </span>
                {step.window}
              </span>
              <h3 className="text-xl font-semibold text-offwhite">{step.name}</h3>
              <p className="text-sm text-slate/80">{step.copy}</p>
              <div className="relative mt-2 overflow-hidden rounded-xl border border-white/10 bg-white/5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(106,226,255,0.15),transparent_70%)]" aria-hidden="true" />
                <div className="relative flex items-center justify-between px-4 py-3">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-slate/60">Flow</span>
                  <div className="flex flex-1 items-center justify-center gap-3 px-4">
                    <span className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan/60 to-transparent" aria-hidden="true" />
                    <span className="h-2 w-2 rounded-full bg-cyan/70 shadow-[0_0_12px_rgba(106,226,255,0.4)]" aria-hidden="true" />
                    <span className="h-2 w-2 rounded-full bg-signal-green/70 shadow-[0_0_10px_rgba(25,195,125,0.4)]" aria-hidden="true" />
                    <span className="h-px flex-1 bg-gradient-to-r from-transparent via-signal-green/60 to-transparent" aria-hidden="true" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.4em] text-slate/60">Pulse</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
)
