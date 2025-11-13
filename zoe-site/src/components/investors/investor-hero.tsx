'use client'

import Link from 'next/link'

export const InvestorHero = () => {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden pb-24 pt-32 sm:pb-32 sm:pt-36 md:pb-40 md:pt-40"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(106,226,255,0.18),transparent_65%)]" aria-hidden="true" />
      <div className="absolute inset-0 -z-20 bg-grid-lines bg-grid opacity-30" aria-hidden="true" />
      <div className="container">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center lg:items-start lg:text-left">
          <span className="text-xs uppercase tracking-[0.45em] text-slate/70">
            For portfolio investors
          </span>
          <div className="space-y-6">
            <h1 className="text-5xl font-semibold leading-[1.05] text-offwhite sm:text-6xl lg:text-7xl">
              Unlock the hidden multiple inside your portfolio.
            </h1>
            <p className="text-lg leading-relaxed text-slate/80">
              Zoe is the operational health engine that reveals the root causes of stagnation and prescribes the interventions that restore performance and unlock multiple expansion.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="https://calendly.com/kayan-muditastudios/zoe-diagnostic-meeting"
              className="inline-flex items-center justify-center rounded-full bg-offwhite px-6 py-3 text-sm font-semibold text-charcoal transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-glow-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
            >
              Meet Our Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
