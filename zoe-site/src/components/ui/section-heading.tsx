'use client'

import { motion } from 'framer-motion'
import type { PropsWithChildren } from 'react'

type SectionHeadingProps = PropsWithChildren<{
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}>

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = 'left',
  children,
}: SectionHeadingProps) => {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left'
  const accentJustify = align === 'center' ? 'justify-center' : 'justify-start'

  return (
    <motion.header
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`flex flex-col gap-5 ${alignment}`}
    >
      {eyebrow && (
        <span className={`flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-slate/70 ${accentJustify}`}>
          <span className="inline-flex h-px w-10 bg-gradient-to-r from-cyan/90 via-cyan/40 to-transparent" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2 className="relative max-w-4xl text-3xl font-semibold leading-tight text-offwhite sm:text-4xl md:text-5xl">
        <span
          className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle_at_top,rgba(106,226,255,0.12),transparent_65%)] blur-3xl"
          aria-hidden="true"
        />
        <span className="bg-gradient-to-br from-offwhite via-white to-cyan/70 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {description && (
        <p className="max-w-2xl text-base text-slate/80 sm:text-lg">
          {description}
        </p>
      )}
      {children}
    </motion.header>
  )
}
