import type { Metadata } from 'next'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/work-sans/500.css'
import '@fontsource/work-sans/600.css'
import '@fontsource/work-sans/700.css'
import './globals.css'
import { Header } from '@/components/header'

export const metadata: Metadata = {
  title: 'ZOE — AI-Powered Growth Diagnostics for Portfolios',
  description:
    'ZOE combines AI diagnostics with operator playbooks to expose and correct the root causes throttling your portfolio companies in 2–3 weeks.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen bg-charcoal text-offwhite">
        <div className="absolute inset-0 -z-10 bg-grid-lines bg-grid opacity-40" aria-hidden="true" />
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_center,rgba(106,226,255,0.12),transparent_60%)]" aria-hidden="true" />
        <div className="flex min-h-screen flex-col">
          <Header />
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  )
}
