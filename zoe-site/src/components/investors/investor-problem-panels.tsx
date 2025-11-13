'use client'

import { SectionHeading } from '@/components/ui/section-heading'

const panels = [
  {
    title: 'Quiet underperformers',
    description:
      'PortCos stall below plan while the narrative still sounds on-track. By the time KPIs wobble, the fund has already lost quarters of compounding.',
    stat: '7 / 10',
    statLabel: 'Sit <20% YoY before anyone says it aloud.',
  },
  {
    title: 'Signal lag',
    description:
      'Boards debate dashboards while the real friction sits inside operating cadence, culture, and GTM triage. The evidence never makes it into the deck.',
    stat: '3.5 mo',
    statLabel: 'Average delay between degradation and board visibility.',
  },
  {
    title: 'Capital stuck in limbo',
    description:
      'Without a prescriptive health readout, partners rely on instinct. Capital gets redeployed late, operating partners chase symptoms, and momentum keeps bleeding.',
    stat: '35%',
    statLabel: 'Hit-rate drop when interventions aren’t operator-tested.',
  },
]

export const InvestorProblemPanels = () => (
  <section id="problem" className="relative isolate py-24 sm:py-32">
    <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_right,rgba(106,226,255,0.12),transparent_70%)]" aria-hidden="true" />
    <div className="container">
      <SectionHeading
        eyebrow="The Portfolio Problem"
        title="You can’t compound what you can’t see."
        description="Stagnation hides inside ops, GTM, and leadership behavior—not the board deck. Zoe surfaces those root causes before they metastasize."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {panels.map((panel) => (
          <div key={panel.title} className="flex flex-col gap-5 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-graphite/80 to-graphite/95 p-6 shadow-[0_25px_80px_rgba(8,12,18,0.45)]">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-slate/60">{panel.title}</p>
              <p className="mt-3 text-sm text-slate/75">{panel.description}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center">
              <p className="text-2xl font-semibold text-offwhite">{panel.stat}</p>
              <p className="mt-1 text-xs text-slate/60">{panel.statLabel}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10">
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
