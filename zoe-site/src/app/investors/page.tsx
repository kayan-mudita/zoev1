'use client'

import { Footer } from '@/components/footer'
import { InvestorHero } from '@/components/investors/investor-hero'
import { InvestorProblemPanels } from '@/components/investors/investor-problem-panels'
import { InvestorSolutionSection } from '@/components/investors/investor-solution-section'
import { InvestorWhySection } from '@/components/investors/investor-why-section'
import { InvestorHowSection } from '@/components/investors/investor-how-section'
import { InvestorCtaSection } from '@/components/investors/investor-cta-section'

export default function InvestorsPage() {
  return (
    <main className="relative flex min-h-screen flex-col gap-0">
      <InvestorHero />
      <InvestorProblemPanels />
      <InvestorSolutionSection />
      <InvestorWhySection />
      <InvestorHowSection />
      <InvestorCtaSection />
      <Footer />
    </main>
  )
}
