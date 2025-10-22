'use client'

import { motion } from 'framer-motion'

const integrations = ['QuickBooks', 'Stripe', 'HubSpot', 'NetSuite', 'Salesforce', 'Gusto', 'BambooHR']

export const SecurityStrip = () => (
  <section id="security" className="relative isolate border-y border-white/10 bg-graphite/80 py-10 shadow-inner-line">
    <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-slate/60">Security &amp; Integrations</p>
        <p className="mt-2 max-w-xl text-sm text-slate/80">
          Read-only, least-privilege connectors. SOC 2 roadmap in motion. DPAs signed. 7-day data deletion SLA after engagement.
        </p>
      </div>
      <div className="relative w-full overflow-hidden md:max-w-xl">
        <motion.div
          className="flex min-w-full gap-3 text-sm text-offwhite/80"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        >
          {[...integrations, ...integrations].map((logo, idx) => (
            <span
              key={`${logo}-${idx}`}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2"
            >
              {logo}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
)
