import { HeroSection } from "@/components/products/hero-section"
import { FeaturesGrid } from "@/components/products/features-grid"
import { StatsSection } from "@/components/products/stats-section"
import { CTASection } from "@/components/products/cta-section"
import data from "@/data/products/ssl-certificates.json"
import { Feature } from "@/components/products/features-grid"

interface SSLData {
  hero: {
    title: string
    description: string
    cta: {
      primary: { text: string; link: string }
      secondary: { text: string; link: string }
    }
  }
  features: Feature[]
  stats: Array<{ value: string; label: string }>
  cta: {
    title: string
    description: string
    button: { text: string; link: string }
  }
}

const typedData = data as SSLData

export default function SslCertificatesPage() {
  return (
    <div className="flex flex-col">
      <HeroSection {...typedData.hero} />
      <FeaturesGrid features={typedData.features} />
      <StatsSection stats={typedData.stats} />
      <CTASection {...data.cta} />
    </div>
  )
}