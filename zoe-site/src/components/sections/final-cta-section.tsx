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
              Let ZOE surface the real causes, deliver the plays, and keep your board focused on progress — not surprises.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              id="book"
              href="mailto:hello@zoe.ai?subject=Book%20a%20Diagnostic"
              className="inline-flex items-center justify-center rounded-full bg-offwhite px-6 py-3 text-sm font-semibold text-charcoal transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-glow-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
            >
              Book Diagnostic →
            </a>
            <a
              id="board-memo"
              href="/board-memo-sample.pdf"
              download
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-offwhite transition-all duration-200 hover:border-cyan hover:text-cyan hover:shadow-[0_0_30px_rgba(106,226,255,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
            >
              Download Board Memo →
            </a>
            <a
              id="pricing-cta"
              href="mailto:operators@zoe.ai?subject=Operator%20Fellow%20Network"
              className="inline-flex items-center justify-center rounded-full border border-cyan/40 px-6 py-3 text-sm font-semibold text-cyan transition hover:border-cyan hover:bg-cyan/10 hover:text-offwhite focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
            >
              Join Operator Fellow Network →
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
)
