'use client'

const inputs = ['Finance', 'CRM', 'People', 'Ops', 'Leadership']

const diagnosticGrid = [
  { label: 'Vital metrics analyzed', value: '480+' },
  { label: 'Operational health signals surfaced', value: '126' },
  { label: 'Momentum levers modeled', value: '34' },
]

export const InvestorSolutionSection = () => (
  <section id="solution" className="relative isolate py-24 sm:py-32">
    <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_center,rgba(155,255,240,0.12),transparent_70%)]" aria-hidden="true" />
    <div className="container">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_35px_120px_rgba(8,12,18,0.35)]">
            <span className="text-xs uppercase tracking-[0.35em] text-slate/60">Our Solution</span>
            <h2 className="text-3xl font-semibold text-offwhite sm:text-4xl">
              The fastest, most reliable way to restore PortCo health and lift fund performance.
            </h2>
            <p className="text-base text-slate/80">
              Drop the exports you already have. Zoe&apos;s investor-trained AI evaluates company vitality, identifies the forces dragging performance, and hands you the recovery &amp; acceleration plan.
            </p>
            <div>
              <a
                href="https://calendly.com/kayan-muditastudios/zoe-diagnostic-meeting"
                className="inline-flex items-center justify-center rounded-full bg-offwhite px-6 py-3 text-sm font-semibold text-charcoal transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-glow-cyan"
              >
                Meet Our Team
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-graphite/85 to-graphite/95 p-8 shadow-[0_35px_120px_rgba(8,12,18,0.45)]">
          <span className="pointer-events-none absolute -left-10 top-12 h-32 w-32 rounded-full bg-gradient-to-br from-cyan/20 to-transparent blur-3xl" aria-hidden="true" />
          <p className="text-xs uppercase tracking-[0.4em] text-slate/60">Data in</p>
          <p className="mt-2 text-[11px] text-slate/60">(Finance · CRM · People · Ops · Leadership — whatever signals reveal health, velocity, or decay.)</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {inputs.map((input) => (
              <span key={input} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-slate/60">
                {input}
              </span>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-white/15 bg-gradient-to-br from-cyan/10 to-transparent">
              <span className="text-xs uppercase tracking-[0.4em] text-slate/70">AI Core</span>
              <span className="pointer-events-none absolute inset-3 rounded-full border border-white/10" />
            </div>
            <div className="flex-1 border-t border-dashed border-white/15 sm:border-l sm:border-t-0 sm:pl-6">
              <p className="text-sm text-slate/70">
                Portfolio-trained models pinpoint the systems causing drag—revenue engines, execution rhythms, leadership behaviors, operational load, and cultural friction.
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {diagnosticGrid.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center">
                <p className="text-2xl font-semibold text-offwhite">{item.value}</p>
                <p className="text-[11px] uppercase tracking-[0.3em] text-slate/60">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
)
