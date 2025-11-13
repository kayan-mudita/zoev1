'use client'

import { SectionHeading } from '@/components/ui/section-heading'

const impactStats = [
  { value: '2×', label: 'Faster path to clarity', detail: 'Intervene before underperformance compounds.' },
  { value: '35%', label: 'Higher success rate on redeploying capital', detail: 'Replace guesswork with proven recovery sequences.' },
  { value: '+180 bps', label: 'Fund-level delta from the mid-stack', detail: 'Unlock the quiet middle of the book.' },
]

export const InvestorWhySection = () => {
  return (
    <section id="why" className="relative isolate py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_bottom_left,rgba(106,226,255,0.12),transparent_70%)]" aria-hidden="true" />
      <div className="container">
        <SectionHeading
          eyebrow="Why It Matters"
          title="Faster turnarounds. Stronger compounding. Real fund-level uplift."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {impactStats.map((impact) => (
            <div
              key={impact.label}
              className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-graphite/80 to-graphite/95 p-6 text-center"
            >
              <p className="text-4xl font-semibold text-offwhite">{impact.value}</p>
              <p className="text-xs uppercase tracking-[0.35em] text-slate/60">{impact.label}</p>
              <p className="text-sm text-slate/70">{impact.detail}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <a
            href="https://calendly.com/kayan-muditastudios/zoe-diagnostic-meeting"
            className="inline-flex items-center justify-center rounded-full bg-offwhite px-6 py-3 text-sm font-semibold text-charcoal transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-glow-cyan"
          >
            Meet Our Team
          </a>
        </div>
      </div>
    </section>
  )
}
