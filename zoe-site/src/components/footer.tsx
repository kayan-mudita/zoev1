'use client'

export const Footer = () => (
  <footer className="relative border-t border-white/10 bg-graphite/90 py-10 text-sm text-slate/70">
    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" aria-hidden="true" />
    <div className="container flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-offwhite/80">ZOE · Built by operators, for operators.</p>
        <p className="text-xs text-slate/60">© {new Date().getFullYear()} ZOE Diagnostics. All rights reserved.</p>
      </div>
      <nav className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.2em]">
        <a href="#security" className="transition hover:text-offwhite">
          Security
        </a>
        <a href="#" className="transition hover:text-offwhite">
          Privacy
        </a>
        <a href="#" className="transition hover:text-offwhite">
          Terms
        </a>
        <a href="mailto:hello@zoe.ai" className="transition hover:text-offwhite">
          Contact
        </a>
      </nav>
    </div>
  </footer>
)
