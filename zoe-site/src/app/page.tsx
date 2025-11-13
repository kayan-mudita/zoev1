'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Footer } from '@/components/footer'

const audiences = [
  {
    id: 'investors',
    href: '/investors',
    eyebrow: 'Capital View',
    badge: 'For Investors',
    summary:
      'Unlock the hidden multiple inside your portfolio.',
    detail:
      "Zoe gives GPs and Operating Partners a prescriptive view of portfolio health--what's causing drag, what to fix first, and how to convert mid-performers into compounding assets.",
    cta: 'Enter Investor Experience →',
  },
  {
    id: 'operators',
    href: '/operators',
    eyebrow: 'Execution View',
    badge: 'For Operators',
    summary:
      'Restore your company’s power—and push it further than before.',
    detail:
      'Zoe helps operators execute the right fixes in the right order—restoring health, rebuilding velocity, and unlocking upside faster.',
    cta: 'Enter Operator Experience →',
  },
]

export default function Home() {
  return (
    <>
      <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(106,226,255,0.12),transparent_60%)]" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-0 -z-20 bg-grid-lines bg-grid opacity-40" aria-hidden="true" />
        <section
          id="hero"
          className="container relative flex flex-col items-center gap-10 py-24 text-center sm:py-32"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-xs uppercase tracking-[0.5em] text-slate/70"
          >
            Choose Your Zoe Experience
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5, ease: 'easeOut' }}
            className="max-w-5xl text-4xl font-semibold leading-tight text-offwhite sm:text-5xl md:text-6xl"
          >
            Fix what&apos;s hidden. Fast.
          </motion.h1>
          <div className="mt-6 grid w-full gap-6 lg:grid-cols-2">
            {audiences.map((audience, index) => (
              <motion.div
                key={audience.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5, ease: 'easeOut' }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-graphite/85 to-graphite/95 p-8 text-left shadow-[0_35px_120px_rgba(8,12,18,0.55)] backdrop-blur"
              >
                <span className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(106,226,255,0.18),transparent_65%)] opacity-70 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-slate/70">
                  <span>{audience.eyebrow}</span>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-[10px]">{audience.badge}</span>
                </div>
                <p className="mt-6 text-base font-semibold text-offwhite">{audience.summary}</p>
                <p className="mt-4 text-sm text-slate/80">{audience.detail}</p>
                <Link
                  href={audience.href}
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2 text-sm font-semibold text-offwhite transition-all duration-200 hover:border-cyan hover:text-cyan"
                >
                  {audience.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
