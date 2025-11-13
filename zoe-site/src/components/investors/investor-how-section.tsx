'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/section-heading'

const steps = [
  {
    title: 'Drop existing exports',
    description: 'Finance, CRM, HR, and ops data—no integrations required.',
  },
  {
    title: 'Assess operational health',
    description: 'AI triangulates performance patterns, velocity signals, and leadership behavior.',
  },
  {
    title: 'Prescribe recovery levers',
    description: 'You get the prioritized playbook, owners, and momentum gates.',
  },
]

export const InvestorHowSection = () => {
  return (
    <section id="how" className="relative isolate py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_bottom_right,rgba(106,226,255,0.14),transparent_75%)]" aria-hidden="true" />
      <div className="container">
        <SectionHeading
          eyebrow="Workflow Snapshot"
          title="Three moves. No new systems. Just the data you already trust."
          align="center"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.1, duration: 0.4, ease: 'easeOut' }}
              className="relative flex flex-col gap-4 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-graphite/85 to-graphite/95 p-6"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cyan/40 bg-cyan/10 text-sm font-semibold text-cyan">
                {index + 1}
              </span>
              <p className="text-base font-semibold text-offwhite">{step.title}</p>
              <p className="text-sm text-slate/80">{step.description}</p>
              {index < steps.length - 1 && (
                <span className="pointer-events-none absolute -right-5 top-1/2 hidden h-px w-10 bg-gradient-to-r from-white/10 to-transparent lg:block" aria-hidden="true" />
              )}
            </motion.div>
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
