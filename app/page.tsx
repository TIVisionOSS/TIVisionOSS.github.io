import { HeroSection } from "@/components/home/hero-section"
import { FeaturesSection } from "@/components/home/features-section"
import { StatsSection } from "@/components/home/stats-section"
import { CTASection } from "@/components/home/cta-section"
import homeData from "@/data/home.json"

interface HomeData {
  hero: {
    title: string
    description: string
    cta: {
      primary: {
        text: string
        link: string
      }
      secondary: {
        text: string
        link: string
      }
    }
  }
  features: Array<{
    icon: "Shield" | "Globe" | "Cloud"
    title: string
    description: string
  }>
  stats: Array<{
    value: string
    label: string
  }>
  cta: {
    title: string
    description: string
    button: {
      text: string
      link: string
    }
  }
}

const typedHomeData = homeData as HomeData

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection data={typedHomeData.hero} />
      <FeaturesSection data={typedHomeData.features} />
      <StatsSection data={typedHomeData.stats} />
      <CTASection data={typedHomeData.cta} />
    </div>
  )
}