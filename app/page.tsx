import { HeroSection } from "@/components/home/hero-section"
import { FeaturesSection } from "@/components/home/features-section"
import { StatsSection } from "@/components/home/stats-section"
import { CTASection } from "@/components/home/cta-section"
import rawHomeData from "@/data/home.json"

type HomeData = {
  hero: {
    title: string
    description: string
    cta: {
      primary: { text: string; link: string }
      secondary: { text: string; link: string }
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

const homeData = rawHomeData as HomeData
import { constructMetadata } from "@/lib/metadata"

export const metadata = constructMetadata({
  title: "Enterprise Security & Infrastructure Solutions",
  description: "Secure and accelerate your online presence with enterprise-grade security, performance, and reliability solutions.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    title: "Enterprise Security & Infrastructure Solutions | Tonmoy I&V",
    description: "Secure and accelerate your online presence with enterprise-grade security, performance, and reliability solutions.",
  }
})

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