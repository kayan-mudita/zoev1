'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/section-heading'

const timeline = [
  {
    label: 'Intake secured',
    detail: 'Read-only connectors, DPA signed. Founder signs off on every data source.',
  },
  {
    label: 'CEO readout',
    detail: 'Private draft. CEO curates what flows to the board and what stays internal.',
  },
  {
    label: 'Board memo',
    detail: 'Operator-authored memo with approved cards, ROI tracker, and redacted sensitivities.',
  },
]

export const GuaranteeSection = () => (
  <section id="founder-first" className="relative isolate py-24 sm:py-32">
    <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_center,rgba(25,195,125,0.1),transparent_70%)]" aria-hidden="true" />
    <div className="container">
      <SectionHeading
        eyebrow="Founder-First Guarantee"
        title="ZOE works for founders, not against them."
        description="No surveillance. No surprise downloads. The CEO is our first customer and final editor. We expose truth without eroding control."
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-graphite/85 p-8 shadow-inner-line">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(106,226,255,0.18),transparent_70%)] opacity-50" aria-hidden="true" />
          <div className="flex items-start gap-4">
            <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-cyan/40 bg-cyan/15">
              <span className="absolute inset-0 bg-[conic-gradient(from_140deg,rgba(106,226,255,0.3),transparent)]" aria-hidden="true" />
              <span className="relative text-xl text-cyan">⛨</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-offwhite">Control stays with the CEO</h3>
              <p className="mt-3 text-sm text-slate/80">
                Every diagnostic produces a private CEO readout before any board-facing artifact. The founder decides what moves forward, what stays sealed, and how plays get sequenced.
              </p>
            </div>
          </div>
          <ul className="mt-8 space-y-4 text-sm text-slate/80">
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-cyan/70" aria-hidden="true" />
              <span>No hidden stakeholders in the room. We clear partner involvement up front.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-cyan/70" aria-hidden="true" />
              <span>Operator Fellows sign founder-first NDAs and integrate as an extension of the team.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-cyan/70" aria-hidden="true" />
              <span>Money-back guarantee if the board rates “no value” after the diagnostic.</span>
            </li>
          </ul>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-graphite/90 p-10 shadow-inner-line">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(25,195,125,0.12),transparent_70%)]" aria-hidden="true" />
          <div className="pointer-events-none absolute left-6 top-12 h-[calc(100%-6rem)] w-px bg-gradient-to-b from-signal-green/50 via-white/10 to-transparent" aria-hidden="true" />
          <h3 className="relative text-sm uppercase tracking-[0.25em] text-slate/70">Founder-first timeline</h3>
          <div className="relative mt-8 flex flex-col gap-6">
            {timeline.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: index * 0.1, duration: 0.35 }}
                className="group relative flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-signal-green/50 bg-signal-green/10 text-sm font-semibold text-signal-green">
                  {index + 1}
                </span>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-offwhite/90">
                    {item.label}
                  </h4>
                  <p className="mt-3 text-sm text-slate/75">{item.detail}</p>
                </div>
                <div className="pointer-events-none absolute inset-0 -z-10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-signal-green/20 to-cyan/20" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
)
