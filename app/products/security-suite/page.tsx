"use client"

import { HeroSection } from "@/components/products/hero-section"
import { FeaturesGrid } from "@/components/products/features-grid"
import { StatsSection } from "@/components/products/stats-section"
import { CTASection } from "@/components/products/cta-section"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Lock, AlertTriangle, Eye, LineChart, FileCheck } from "lucide-react"
import Link from "next/link"
import data from "@/data/products/security-suite.json"

export default function SecuritySuitePage() {
  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              {data.hero.title}
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              {data.hero.description}
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link href={data.hero.cta.primary.link}>
                <Button size="lg" className="cloudflare-button">{data.hero.cta.primary.text}</Button>
              </Link>
              <Link href={data.hero.cta.secondary.link}>
                <Button size="lg" variant="outline" className="cloudflare-outline-button">{data.hero.cta.secondary.text}</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            {data.features.map((feature, index) => {
              const Icon = {
                Shield,
                Lock,
                AlertTriangle,
                Eye
              }[feature.icon as keyof typeof feature.icon]

              return (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <Icon className="h-12 w-12 mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {feature.description}
                    </p>
                    <ul className="space-y-2 mb-6 text-sm">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center">✓ {benefit}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-orange-500/5 via-orange-500/10 to-orange-600/5">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-3 text-center">
            {data.stats.map((stat, index) => (
              <div key={index} className="relative">
                <div className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">
                  {stat.value}
                </div>
                <div className="text-xl text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Additional Security Features</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <LineChart className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Security Analytics</h3>
                <p className="text-muted-foreground mb-4">
                  Advanced analytics and reporting for security incidents and trends.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">✓ Real-time monitoring</li>
                  <li className="flex items-center">✓ Threat intelligence</li>
                  <li className="flex items-center">✓ Custom dashboards</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <FileCheck className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Compliance Tools</h3>
                <p className="text-muted-foreground mb-4">
                  Tools and features to maintain regulatory compliance.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">✓ Compliance reporting</li>
                  <li className="flex items-center">✓ Policy enforcement</li>
                  <li className="flex items-center">✓ Audit trails</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Zero Trust Security</h3>
                <p className="text-muted-foreground mb-4">
                  Implement zero trust architecture across your infrastructure.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">✓ Identity verification</li>
                  <li className="flex items-center">✓ Access controls</li>
                  <li className="flex items-center">✓ Network segmentation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">{data.cta.title}</h2>
            <p className="text-xl text-muted-foreground mb-8">
              {data.cta.description}
            </p>
            <Link href={data.cta.button.link}>
              <Button size="lg" className="cloudflare-button">{data.cta.button.text}</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}