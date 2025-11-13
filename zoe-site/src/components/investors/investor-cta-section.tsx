'use client'

export const InvestorCtaSection = () => {
  return (
    <section id="cta" className="relative isolate py-24">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(106,226,255,0.18),transparent_70%)]" aria-hidden="true" />
      <div className="container">
        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/5 via-graphite/85 to-graphite/95 p-10 text-center shadow-[0_35px_120px_rgba(8,12,18,0.45)]">
          <h2 className="text-3xl font-semibold leading-tight text-offwhite sm:text-4xl">
            See what&apos;s holding your companies back—and how to fix it.
          </h2>
          <p className="mt-4 text-base text-slate/80">
            Get early access to the investor program and receive Zoe health diagnostics before your next partner meeting.
          </p>
          <a
            href="https://calendly.com/kayan-muditastudios/zoe-diagnostic-meeting"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-offwhite px-6 py-3 text-sm font-semibold text-charcoal transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-glow-cyan"
          >
            Meet Our Team
          </a>
        </div>
      </div>
    </section>
  )
}
