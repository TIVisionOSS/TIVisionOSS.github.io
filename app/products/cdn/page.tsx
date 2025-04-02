import { HeroSection } from "@/components/products/hero-section"
import { FeaturesGrid, type Feature } from "@/components/products/features-grid"
import { StatsSection } from "@/components/products/stats-section"
import { CTASection } from "@/components/products/cta-section"
import data from "@/data/products/cdn.json"

const isFeature = (item: any): item is Feature => {
  const validIcons = ["Lock", "Shield", "Globe", "CheckCircle", "BarChart", "Zap"]
  return (
    typeof item === 'object' &&
    validIcons.includes(item.icon) &&
    typeof item.title === 'string' &&
    typeof item.description === 'string' &&
    Array.isArray(item.benefits) &&
    item.benefits.every((b: any) => typeof b === 'string')
  )
}

const validateData = (data: any) => {
  if (!Array.isArray(data.features) || !data.features.every(isFeature)) {
    throw new Error('Invalid features data structure')
  }
  return data as {
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
}

const typedData = validateData(data)

export default function CdnPage() {
  return (
    <div className="flex flex-col">
      <HeroSection {...typedData.hero} />
      <FeaturesGrid features={typedData.features} />
      <StatsSection stats={typedData.stats} />
      <CTASection {...typedData.cta} />
    </div>
  )
}