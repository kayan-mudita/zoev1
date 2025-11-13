'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Investors', href: '/investors' },
  { label: 'Operators', href: '/operators' },
]

export const Header = () => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const navItemClasses = (href: string) => {
    const isActive = pathname === href
    return [
      'rounded-full px-4 py-2 text-sm transition-all duration-200',
      isActive ? 'bg-offwhite text-charcoal shadow-glow-cyan' : 'text-slate/70 hover:text-offwhite hover:bg-white/5',
    ].join(' ')
  }

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-charcoal/60 backdrop-blur-xl">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="text-sm font-semibold uppercase tracking-[0.4em] text-offwhite">
          ZOE
        </Link>
        <nav className="hidden rounded-full border border-white/10 bg-white/5 p-1 lg:flex">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className={navItemClasses(item.href)}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="https://calendly.com/kayan-muditastudios/zoe-diagnostic-meeting"
            className="rounded-full bg-offwhite px-4 py-2 text-sm font-semibold text-charcoal transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-glow-cyan"
          >
            Meet Our Team
          </Link>
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
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="transition-colors hover:text-cyan"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-3">
                <Link
                  href="https://calendly.com/kayan-muditastudios/zoe-diagnostic-meeting"
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-offwhite px-4 py-2 text-sm font-semibold text-charcoal text-center"
                >
                  Meet Our Team
                </Link>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
