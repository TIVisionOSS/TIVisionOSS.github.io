import { HeroSection } from "@/components/home/hero-section"
import { FeaturesSection } from "@/components/home/features-section"
import { StatsSection } from "@/components/home/stats-section"
import { CTASection } from "@/components/home/cta-section"
import homeData from "@/data/home.json"

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection data={homeData.hero} />
      <FeaturesSection data={homeData.features} />
      <StatsSection data={homeData.stats} />
      <CTASection data={homeData.cta} />
    </div>
  )
}