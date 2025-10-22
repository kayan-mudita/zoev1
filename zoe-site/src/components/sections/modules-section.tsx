'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHeading } from '@/components/ui/section-heading'

type Module = {
  id: string
  name: string
  delta: { label: string; value: string }
  description: string
  firstMoves: string[]
  metrics: { name: string; before: string; after: string }[]
}

const modules: Module[] = [
  {
    id: 'burn',
    name: 'Burn & Runway Triage',
    delta: { label: 'Runway impact', value: '+3–6 months' },
    description:
      'Stress-tests unit economics, hiring plans, and vendor spend to extend runway without stalling momentum.',
    firstMoves: [
      'Rebuild burn bridge & cash waterfall',
      'Segment spend vs. growth contributions',
      'Sequence corrective plays with owners',
    ],
    metrics: [
      { name: 'Runway', before: '7.1 mo', after: '11.6 mo' },
      { name: 'Gross margin', before: '57%', after: '63%' },
      { name: 'Cash burn', before: '$820k', after: '$610k' },
    ],
  },
  {
    id: 'pipeline',
    name: 'PMF & Pipeline Heatmap',
    delta: { label: 'Win-rate delta', value: '+28%' },
    description:
      'Maps ICP coverage, conversion kill points, and engagement signals to reset GTM focus around the right customers.',
    firstMoves: [
      'Rebuild pipeline quality diagnostic',
      'Quantify CAC payback vs. segment',
      'Launch operator playbooks on stalled stages',
    ],
    metrics: [
      { name: 'Win rate', before: '18%', after: '23%' },
      { name: 'CAC payback', before: '19 mo', after: '13 mo' },
      { name: 'Pipeline coverage', before: '0.8×', after: '1.4×' },
    ],
  },
  {
    id: 'delivery',
    name: 'Delivery Bottleneck Scan',
    delta: { label: 'Cycle time delta', value: '−35%' },
    description:
      'Instrument queues, rework, and SLA risk across delivery to increase ship rate and protect NRR.',
    firstMoves: [
      'Instrument throughput & queue depth',
      'Identify chronic blockers and ownership gaps',
      'Sequence backlog hygiene and release cadence plays',
    ],
    metrics: [
      { name: 'Cycle time', before: '18.4d', after: '12.0d' },
      { name: 'SLA breach risk', before: '22%', after: '9%' },
      { name: 'NRR', before: '94%', after: '106%' },
    ],
  },
  {
    id: 'org',
    name: 'Org & Leadership Health',
    delta: { label: 'Decision velocity', value: '↑41%' },
    description:
      'Exposes decision-rights confusion, leadership bandwidth gaps, and the shadow org undermining execution.',
    firstMoves: [
      'Interview map on cadence, escalation, shadow work',
      'Define accountable owners and new operating rhythm',
      'Coach CEO on board-prep and talent swaps',
    ],
    metrics: [
      { name: 'Time to decision', before: '3.8w', after: '2.2w' },
      { name: 'Leadership capacity', before: '63%', after: '82%' },
      { name: 'Voluntary attrition', before: '17%', after: '9%' },
    ],
  },
]

const moduleSpotlights: Record<Module['id'], { issue: string; impact: string; owner: string; due: string }> = {
  burn: {
    issue: 'Cash intensity outpaced pipeline velocity by 38%',
    impact: '+$2.3M runway if hiring plan resequenced',
    owner: 'Interim CFO',
    due: 'Day 21',
  },
  pipeline: {
    issue: 'Stage 2 → 3 conversion collapsed after new ICP rollout',
    impact: '+9 pts win-rate with focused revival sequences',
    owner: 'Head of Growth',
    due: 'Day 18',
  },
  delivery: {
    issue: 'Cycle time drag traced to approval loops + rework spikes',
    impact: '−11.4d cycle time, +12 pts NRR confidence',
    owner: 'Delivery Ops Lead',
    due: 'Day 26',
  },
  org: {
    issue: 'Shadow steering committee overruling exec cadence',
    impact: 'Decision velocity +41%, attrition risk down 8 pts',
    owner: 'CEO + Chief of Staff',
    due: 'Day 24',
  },
}

export const ModulesSection = () => {
  const [activeId, setActiveId] = useState<Module['id']>('burn')
  const activeModule = modules.find((module) => module.id === activeId) ?? modules[0]

  return (
    <section id="modules" className="relative isolate py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Diagnostic Modules"
          title="Pick the pressure points. ZOE assembles the right playbooks."
          description="Start with one module or run the full scan. Each diagnostic produces So-What Cards with owners, impact, and confidence ratings — ready for board review."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative flex flex-col gap-4">
            <span className="pointer-events-none absolute -left-6 top-6 hidden h-[calc(100%-3rem)] w-px bg-gradient-to-b from-cyan/60 via-white/10 to-transparent lg:block" aria-hidden="true" />
            {modules.map((module) => {
              const isActive = module.id === activeModule.id
              return (
                <button
                  key={module.id}
                  onClick={() => setActiveId(module.id)}
                  className={`relative flex flex-col gap-2 overflow-hidden rounded-2xl border px-6 py-5 text-left transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan/70 ${
                    isActive
                      ? 'border-cyan/60 bg-cyan/10 shadow-glow-cyan'
                      : 'border-white/10 bg-white/5 hover:border-cyan/40'
                  }`}
                >
                  <span className="text-sm font-semibold text-offwhite">{module.name}</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-slate/70">
                    {module.delta.label} {module.delta.value}
                  </span>
                  {isActive && (
                    <motion.span
                      layoutId="module-highlight"
                      className="pointer-events-none absolute inset-0 border border-cyan/50"
                    />
                  )}
                </button>
              )
            })}
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-graphite/90 p-10 shadow-inner-line">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(106,226,255,0.18),transparent_65%)] opacity-70" aria-hidden="true" />
            <div className="pointer-events-none absolute -right-32 top-20 h-64 w-64 rounded-full bg-gradient-to-br from-cyan/15 to-transparent blur-3xl" aria-hidden="true" />
            <AnimatePresence mode="wait">
              <motion.div
                key={activeModule.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="relative flex flex-col gap-8"
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <h3 className="text-2xl font-semibold text-offwhite">{activeModule.name}</h3>
                  <div className="rounded-full border border-signal-green/40 bg-signal-green/15 px-4 py-2 text-xs uppercase tracking-[0.25em] text-signal-green">
                    {activeModule.delta.label}: {activeModule.delta.value}
                  </div>
                </div>
                <p className="max-w-2xl text-base text-slate/80">{activeModule.description}</p>

                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                    <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate/70">
                      Typical first three moves
                    </h4>
                    <ul className="mt-4 space-y-3 text-sm text-slate/80">
                      {activeModule.firstMoves.map((move) => (
                        <li key={move} className="flex items-start gap-3">
                          <span className="mt-1 h-2 w-2 rounded-full bg-cyan/70" aria-hidden="true" />
                          <span>{move}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                    <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate/70">
                      From → To metrics
                    </h4>
                    <div className="mt-4 flex flex-col gap-4">
                      {activeModule.metrics.map((metric) => (
                        <div key={metric.name} className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-graphite/80 px-4 py-3">
                          <div>
                            <p className="text-xs uppercase tracking-[0.2em] text-slate/60">
                              {metric.name}
                            </p>
                            <p className="mt-1 text-sm text-offwhite/90">
                              {metric.before} → <span className="font-semibold text-signal-green">{metric.after}</span>
                            </p>
                          </div>
                          <span aria-hidden="true" className="text-lg text-cyan">
                            ↗
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <motion.div
                  key={`${activeModule.id}-card`}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.35, ease: 'easeOut' }}
                  className="relative w-full overflow-hidden rounded-2xl border border-cyan/40 bg-gradient-to-br from-white/10 via-graphite/70 to-graphite/90 p-6 shadow-[0_25px_60px_rgba(6,10,14,0.45)]"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(106,226,255,0.18),transparent_70%)] opacity-80" aria-hidden="true" />
                  <div className="relative flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs uppercase tracking-[0.35em] text-cyan/90">So-What Card</span>
                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-offwhite/80">
                      Priority · P1
                    </span>
                  </div>
                  <p className="relative mt-4 text-base font-semibold text-offwhite/90">
                    {moduleSpotlights[activeModule.id].issue}
                  </p>
                  <div className="relative mt-4 grid gap-4 sm:grid-cols-3">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-xs uppercase tracking-[0.2em] text-slate/70">
                      Impact
                      <p className="mt-2 text-sm font-semibold text-signal-green/90">
                        {moduleSpotlights[activeModule.id].impact}
                      </p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-xs uppercase tracking-[0.2em] text-slate/70">
                      Owner
                      <p className="mt-2 text-sm font-semibold text-offwhite/90">
                        {moduleSpotlights[activeModule.id].owner}
                      </p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-xs uppercase tracking-[0.2em] text-slate/70">
                      Deadline
                      <p className="mt-2 text-sm font-semibold text-offwhite/90">
                        {moduleSpotlights[activeModule.id].due}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
