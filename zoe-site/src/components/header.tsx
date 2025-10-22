'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'Product', href: '#solution' },
  { label: 'Modules', href: '#modules' },
  { label: 'Outcomes', href: '#outcomes' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#cta' },
]

export const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-charcoal/60 backdrop-blur-xl">
      <div className="container flex items-center justify-between py-4">
        <a href="#hero" className="text-sm font-semibold uppercase tracking-[0.4em] text-offwhite">
          ZOE
        </a>
        <nav className="hidden items-center gap-8 text-sm text-slate/70 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative transition-colors duration-200 hover:text-offwhite"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="mailto:hello@zoe.ai?subject=Contact%20ZOE"
            className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-offwhite transition-colors hover:border-cyan hover:text-cyan"
          >
            Contact Us
          </a>
          <a
            href="#book"
            className="rounded-full bg-offwhite px-4 py-2 text-sm font-semibold text-charcoal transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-glow-cyan"
          >
            Book Diagnostic
          </a>
        </div>
        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-offwhite/90 lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="absolute h-px w-5 -translate-y-2 bg-current transition-transform" style={{ transform: open ? 'rotate(45deg)' : undefined }} />
          <span className="absolute h-px w-5 bg-current opacity-80 transition-opacity" style={{ opacity: open ? 0 : undefined }} />
          <span className="absolute h-px w-5 translate-y-2 bg-current transition-transform" style={{ transform: open ? 'rotate(-45deg)' : undefined }} />
        </button>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="border-t border-white/10 bg-graphite/95 lg:hidden"
          >
            <div className="container flex flex-col gap-4 py-6 text-sm text-offwhite/90">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="transition-colors hover:text-cyan"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-4 flex flex-col gap-3">
                <a
                  href="mailto:hello@zoe.ai?subject=Contact%20ZOE"
                  className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-offwhite transition-colors hover:border-cyan hover:text-cyan"
                >
                  Contact Us
                </a>
                <a
                  href="#book"
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-offwhite px-4 py-2 text-sm font-semibold text-charcoal"
                >
                  Book Diagnostic
                </a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
