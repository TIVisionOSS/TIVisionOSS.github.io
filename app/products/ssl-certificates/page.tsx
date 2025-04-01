import { HeroSection } from "@/components/products/hero-section"
import { FeaturesGrid } from "@/components/products/features-grid"
import { StatsSection } from "@/components/products/stats-section"
import { CTASection } from "@/components/products/cta-section"
import data from "@/data/products/ssl-certificates.json"

export default function SslCertificatesPage() {
  return (
    <div className="flex flex-col">
      <HeroSection {...data.hero} />
      <FeaturesGrid features={data.features} />
      <StatsSection stats={data.stats} />
      <CTASection {...data.cta} />
    </div>
  )
}