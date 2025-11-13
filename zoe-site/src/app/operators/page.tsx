'use client'

import { FinalCtaSection } from '@/components/sections/final-cta-section'
import { GuaranteeSection } from '@/components/sections/guarantee-section'
import { Hero } from '@/components/sections/hero'
import { MethodSection } from '@/components/sections/method-section'
import { ModulesSection } from '@/components/sections/modules-section'
import { OutcomesSection } from '@/components/sections/outcomes-section'
import { ProblemSection } from '@/components/sections/problem-section'
import { SolutionSection } from '@/components/sections/solution-section'
import { Footer } from '@/components/footer'

export default function OperatorsPage() {
  return (
    <main className="relative flex min-h-screen flex-col gap-0">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <ModulesSection />
      <MethodSection />
      <OutcomesSection />
      <GuaranteeSection />
      <FinalCtaSection />
      <Footer />
    </main>
  )
}
