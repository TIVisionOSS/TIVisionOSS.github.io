import { HeroSection } from "@/components/solutions/hero-section"
import { FeaturesGrid } from "@/components/solutions/features-grid"
import { StatsSection } from "@/components/solutions/stats-section"
import { TestimonialsSection } from "@/components/solutions/testimonials-section"
import { DetailedFeatures } from "@/components/solutions/detailed-features"
import { CTASection } from "@/components/solutions/cta-section"
import data from "@/data/solutions/ddos-protection.json"

export default function DDosProtectionPage() {
  return (
    <div className="flex flex-col">
      <HeroSection 
        title={data.hero.title}
        description={data.hero.description}
        cta={data.hero.cta}
      />
      <FeaturesGrid features={data.features} />
      <StatsSection stats={data.stats} />
      <DetailedFeatures features={data.features_detailed} />
      <TestimonialsSection testimonials={data.testimonials} />
      <CTASection 
        title={data.cta.title}
        description={data.cta.description}
        button={data.cta.button}
      />
    </div>
  )
}