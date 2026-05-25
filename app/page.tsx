import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { FeaturesSection } from "@/components/features-section"
import { EverythingSection } from "@/components/everything-section"
import { AwardsSection } from "@/components/awards-section"

import { FaqSection } from "@/components/faq-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { GradientBlindsBackground } from "@/components/gradient-blinds-background"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0B0F14]">
      <GradientBlindsBackground />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <EverythingSection />
        <AwardsSection />
        <FaqSection />
        <CtaSection />
        <Footer />
      </div>
    </main>
  )
}
