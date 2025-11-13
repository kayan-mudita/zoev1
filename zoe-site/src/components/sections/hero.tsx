'use client'

import { motion } from 'framer-motion'

const orbitCards = [
  {
    label: 'Runway',
    metric: '+4.3 mo',
    detail: 'Cash horizon regained after vitality reset',
    position: { x: -120, y: -100 },
  },
  {
    label: 'CAC',
    metric: '↓22%',
    detail: 'After targeted GTM recovery work',
    position: { x: 140, y: -60 },
  },
  {
    label: 'Cycle Time',
    metric: '↓31%',
    detail: 'From operational unclog + delivery acceleration',
    position: { x: -80, y: 110 },
  },
]

const rotationAnimation = {
  animate: { rotate: 360 },
  transition: { duration: 80, repeat: Infinity, ease: 'linear' as const },
}

const orbitRings = [190, 260, 330]

const dataParticles = [
  { id: 'p1', top: '16%', left: '68%', delay: 0 },
  { id: 'p2', top: '68%', left: '78%', delay: 0.6 },
  { id: 'p3', top: '72%', left: '30%', delay: 1.2 },
  { id: 'p4', top: '32%', left: '22%', delay: 1.7 },
]

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden pb-24 pt-32 sm:pb-32 sm:pt-36 md:pb-40 md:pt-40"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(106,226,255,0.18),transparent_65%)]" aria-hidden="true" />
      <div className="container">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_1fr]">
          <div className="relative flex flex-col gap-9">
            <div className="absolute -top-16 left-0 h-32 w-px bg-gradient-to-b from-cyan/60 to-transparent" aria-hidden="true" />
            <div className="flex flex-col gap-6">
              <span className="relative w-max overflow-hidden rounded-full border border-white/10 bg-white/5 px-5 py-1 text-xs uppercase tracking-[0.3em] text-slate/90">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 blur-md transition-opacity duration-500 hover:opacity-100" aria-hidden="true" />
                Portfolio Health & Momentum Recovery
              </span>
              <h1 className="text-5xl font-semibold leading-[1.05] text-offwhite sm:text-6xl lg:text-7xl">
                Fix what&apos;s draining performance. Fast.
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-slate/80">
                Zoe is the operational health engine that diagnoses what&apos;s weakening your company and prescribes the interventions that restore momentum in weeks—not quarters.
              </p>
              <p className="max-w-xl text-base text-slate/75">
                We cut through noise, pinpoint the true causes of stall-out, and guide you through the exact sequence that gets the business healthy again.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="https://calendly.com/kayan-muditastudios/zoe-diagnostic-meeting"
                className="inline-flex items-center justify-center rounded-full bg-offwhite px-6 py-3 text-sm font-semibold text-charcoal transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-glow-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
              >
                Meet Our Team
              </a>
            </div>
          </div>

          <div className="relative hidden justify-center lg:flex">
            <div className="relative h-[420px] w-[420px]">
              {orbitRings.map((radius, idx) => (
                <motion.div
                  key={radius}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"
                  style={{ width: radius, height: radius }}
                  animate={{ opacity: [0.2, 0.6, 0.2] }}
                  transition={{ duration: 12 + idx * 2, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.8 }}
                  aria-hidden="true"
                />
              ))}
              <motion.div
                {...rotationAnimation}
                className="absolute inset-0 rounded-full border border-cyan/40 bg-diagnostic-radial shadow-glow-cyan blur-xl"
                aria-hidden="true"
              />
              <motion.div
                {...rotationAnimation}
                className="absolute inset-0 rounded-full border border-white/5 bg-white/5 backdrop-blur-lg"
              />
              <div className="absolute inset-6 rounded-full border border-white/10 bg-graphite/80 backdrop-blur-lg" />

              <motion.div
                className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white/20 bg-white/10 text-center shadow-inner-line"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="text-xs uppercase tracking-[0.4em] text-slate/70">
                  Core
                </span>
                <span className="mt-2 text-2xl font-semibold">ZOE</span>
              </motion.div>

              {orbitCards.map((card) => (
                <motion.div
                  key={card.label}
                  className="absolute flex w-40 flex-col gap-2 overflow-hidden rounded-2xl border border-white/10 bg-graphite/95 p-4 text-left shadow-inner-line backdrop-blur"
                  style={{
                    left: `calc(50% + ${card.position.x}px)`,
                    top: `calc(50% + ${card.position.y}px)`,
                  }}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
                >
                  <span className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(106,226,255,0.2),transparent_70%)] opacity-60" aria-hidden="true" />
                  <span className="text-xs uppercase tracking-[0.25em] text-slate/70">
                    {card.label}
                  </span>
                  <span className="text-2xl font-semibold text-offwhite">
                    {card.metric}
                  </span>
                  <span className="text-xs text-slate/70">{card.detail}</span>
                </motion.div>
              ))}

              {dataParticles.map((particle) => (
                <motion.span
                  key={particle.id}
                  className="pointer-events-none absolute h-2 w-2 rounded-full bg-cyan/70 shadow-[0_0_12px_rgba(106,226,255,0.7)]"
                  style={{ top: particle.top, left: particle.left }}
                  animate={{ opacity: [0.2, 1, 0.2], y: [0, -16, 0] }}
                  transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut', delay: particle.delay }}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
