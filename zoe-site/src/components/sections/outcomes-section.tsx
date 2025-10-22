'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { SectionHeading } from '@/components/ui/section-heading'

type CounterProps = {
  value: number
  precision?: number
  prefix?: string
  suffix?: string
}

const Counter = ({ value, precision = 0, prefix = '', suffix = '' }: CounterProps) => {
  const spanRef = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { stiffness: 80, damping: 20 })
  const isInView = useInView(spanRef, { once: true, amount: 0.5 })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    const unsubscribe = spring.on('change', (latest) => {
      if (!spanRef.current) return
      spanRef.current.textContent = `${prefix}${latest.toFixed(precision)}${suffix}`
    })
    return () => unsubscribe()
  }, [precision, prefix, spring, suffix])

  return <span ref={spanRef} className="tabular-nums" aria-label={`${prefix}${value}${suffix}`} />
}

const cases = [
  {
    headline: 'Series A SaaS · Missed plan three quarters straight',
    before: [
      { label: 'Runway', value: '6.2 months' },
      { label: 'CAC payback', value: '21 months' },
      { label: 'Cycle time', value: '16.8 days' },
    ],
    after: [
      { label: 'Runway', value: '11.4 months' },
      { label: 'CAC payback', value: '13 months' },
      { label: 'Cycle time', value: '10.9 days' },
    ],
    quote:
      '“The So-What Cards turned a messy board conversation into an execution plan. The founders never felt second-guessed — they led it.”',
    attribution: 'Operating Partner, $1.2B multi-stage fund',
  },
  {
    headline: 'Vertical AI seed · Founder sales, no GTM engine',
    before: [
      { label: 'Win rate', value: '11%' },
      { label: 'Pipeline coverage', value: '0.7×' },
      { label: 'Sales cycle', value: '88 days' },
    ],
    after: [
      { label: 'Win rate', value: '19%' },
      { label: 'Pipeline coverage', value: '1.5×' },
      { label: 'Sales cycle', value: '61 days' },
    ],
    quote:
      '“ZOE gave us the operator muscle without hiring a CRO we couldn’t afford. The founders stayed in control; the board got certainty.”',
    attribution: 'Fractional CFO network lead',
  },
  {
    headline: 'Series B fintech · Delivery gridlock post-acquisition',
    before: [
      { label: 'SLA breach risk', value: '28%' },
      { label: 'NRR', value: '91%' },
      { label: 'Leadership capacity', value: '58%' },
    ],
    after: [
      { label: 'SLA breach risk', value: '8%' },
      { label: 'NRR', value: '108%' },
      { label: 'Leadership capacity', value: '81%' },
    ],
    quote:
      '“It felt like a calm surgical team. Intake, diagnosis, operators on the field, pulse. The board stopped guessing.”',
    attribution: 'Managing Director, PE-backed roll-up',
  },
]

export const OutcomesSection = () => {
  const [index, setIndex] = useState(0)

  const metrics = useMemo(
    () => [
      { label: 'Runway extension', value: 4.5, suffix: ' mo', precision: 1, prefix: '+', caption: 'Median gain across diagnostics' },
      { label: 'Cycle time reduction', value: 35, suffix: '%', precision: 0, prefix: '−', caption: 'Delivery bottlenecks removed' },
      { label: 'Win-rate lift', value: 28, suffix: '%', precision: 0, prefix: '+', caption: 'GTM focus and ICP discipline' },
    ],
    []
  )

  return (
    <section id="outcomes" className="relative isolate py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(106,226,255,0.14),transparent_70%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-[0.15]" aria-hidden="true" />
      <div className="container">
        <SectionHeading
          eyebrow="Outcomes"
          title="Founder-first truth. Board-ready deltas."
          description="Every diagnostic ends with measurable changes in cash, growth, and execution. We track the ROI — you decide how much the board sees."
          align="center"
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-graphite/90 p-8 shadow-inner-line backdrop-blur">
            <div className="pointer-events-none absolute -right-24 top-12 h-56 w-56 rounded-full bg-gradient-to-br from-signal-green/15 to-transparent blur-3xl" aria-hidden="true" />
            <h3 className="text-sm uppercase tracking-[0.25em] text-slate/70">90-day KPI movement</h3>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="group relative flex flex-col gap-2 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                  <span className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(106,226,255,0.16),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
                  <p className="text-xs uppercase tracking-[0.3em] text-slate/60">{metric.label}</p>
                  <p className="text-3xl font-semibold text-offwhite">
                    <Counter value={metric.value} precision={metric.precision} prefix={metric.prefix} suffix={metric.suffix} />
                  </p>
                  <p className="text-xs text-slate/60">{metric.caption}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-slate/60">
              *Ranges based on anonymized ZOE engagements. Actual outcomes depend on scope, baseline data integrity, and founder participation.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-offwhite">Proof in practice</h3>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setIndex((prev) => (prev === 0 ? cases.length - 1 : prev - 1))}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-offwhite transition hover:border-cyan hover:text-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
                  aria-label="Previous case"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => setIndex((prev) => (prev === cases.length - 1 ? 0 : prev + 1))}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-offwhite transition hover:border-cyan hover:text-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
                  aria-label="Next case"
                >
                  →
                </button>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-graphite/90 p-8 shadow-inner-line">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" aria-hidden="true" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={cases[index].headline}
                  initial={{ opacity: 0, x: 32 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -32 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="flex flex-col gap-6"
                >
                  <h4 className="text-base font-semibold text-offwhite">{cases[index].headline}</h4>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-slate/60">Before</p>
                      <ul className="mt-3 space-y-2 text-sm text-slate/80">
                        {cases[index].before.map((metric) => (
                          <li key={metric.label} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                            <span>{metric.label}</span>
                            <span className="text-slate/60">{metric.value}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-slate/60">After</p>
                      <ul className="mt-3 space-y-2 text-sm text-signal-green/90">
                        {cases[index].after.map((metric) => (
                          <li key={metric.label} className="flex items-center justify-between rounded-xl border border-signal-green/30 bg-signal-green/10 px-4 py-3">
                            <span>{metric.label}</span>
                            <span className="font-semibold">{metric.value}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <blockquote className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-offwhite/90">
                    <span className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(25,195,125,0.12),transparent_70%)]" aria-hidden="true" />
                    <p className="italic leading-relaxed">“{cases[index].quote}”</p>
                    <footer className="mt-4 text-xs uppercase tracking-[0.2em] text-slate/60">
                      {cases[index].attribution}
                    </footer>
                  </blockquote>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
