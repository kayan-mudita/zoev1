'use client'

import { motion } from 'framer-motion'

export const FinalCtaSection = () => (
  <section id="cta" className="relative isolate py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-graphite via-soft-graphite to-graphite p-12 shadow-inner-line"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(106,226,255,0.18),transparent_65%)]" aria-hidden="true" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:140px_140px] opacity-30" aria-hidden="true" />
        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="text-3xl font-semibold text-offwhite">Your next quarter depends on this month.</h3>
            <p className="mt-3 max-w-2xl text-sm text-slate/80">
              Let ZOE uncover the real causes, deploy the right plays, and rebuild momentum before the next board meeting.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="https://calendly.com/kayan-muditastudios/zoe-diagnostic-meeting"
              className="inline-flex items-center justify-center rounded-full bg-offwhite px-6 py-3 text-sm font-semibold text-charcoal transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-glow-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
            >
              Meet Our Team
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
)
