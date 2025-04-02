import { HeroSection } from "@/components/solutions/hero-section"
import { FeaturesGrid } from "@/components/solutions/features-grid"
import { StatsSection } from "@/components/solutions/stats-section"
import { TestimonialsSection } from "@/components/solutions/testimonials-section"
import { DetailedFeatures } from "@/components/solutions/detailed-features"
import { CTASection } from "@/components/solutions/cta-section"
import type { Feature } from "@/components/solutions/features-grid"
import rawData from "@/data/solutions/ddos-protection.json"

interface DDosProtectionData {
  hero: {
    title: string
    description: string
    cta: {
      primary: { text: string; link: string }
      secondary: { text: string; link: string }
    }
  }
  features: Array<{
    icon: "Shield" | "Globe" | "Zap" | "Server"
    title: string
    description: string
    benefits: string[]
  }>
  stats: Array<{ value: string; label: string }>
  testimonials: Array<{ quote: string; author: string; role: string; company: string }>
  features_detailed: Array<{ title: string; description: string; capabilities: string[] }>
  cta: { title: string; description: string; button: { text: string; link: string } }
}

const data = rawData as DDosProtectionData

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