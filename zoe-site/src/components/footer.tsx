'use client'

export const Footer = () => (
  <footer className="relative border-t border-white/10 bg-graphite/90 py-10 text-sm text-slate/70">
    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" aria-hidden="true" />
    <div className="container flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-offwhite/80">ZOE · Built by investors and operators.</p>
        <p className="text-xs text-slate/60">© 2025 ZOE Diagnostics. All rights reserved.</p>
      </div>
      <div className="flex flex-col gap-2 text-xs text-slate/60 sm:items-end">
        <a href="/privacy" className="uppercase tracking-[0.2em] text-offwhite hover:text-cyan">
          Privacy Policy
        </a>
        <p>Built with respect for founder privacy and partner trust.</p>
      </div>
    </div>
  </footer>
)
