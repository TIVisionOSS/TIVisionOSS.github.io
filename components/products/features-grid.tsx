"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Lock, Shield, Globe, CheckCircle, BarChart, Zap } from "lucide-react"
import { motion } from "framer-motion"

const icons = {
  Lock,
  Shield,
  Globe,
  CheckCircle,
  BarChart,
  Zap
}

interface Feature {
  icon: keyof typeof icons
  title: string
  description: string
  benefits: string[]
}

interface FeaturesGridProps {
  features: Feature[]
}

export function FeaturesGrid({ features }: FeaturesGridProps) {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = icons[feature.icon]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
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
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}