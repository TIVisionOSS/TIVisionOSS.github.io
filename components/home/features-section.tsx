"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Shield, Globe, Cloud } from "lucide-react"
import { motion } from "framer-motion"

const icons = {
  Shield,
  Globe,
  Cloud
}

interface FeaturesProps {
  data: Array<{
    icon: keyof typeof icons
    title: string
    description: string
  }>
}

export function FeaturesSection({ data }: FeaturesProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-orange-50/5 to-background pointer-events-none" />
      <div className="container relative">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 md:grid-cols-3"
        >
          {data.map((feature, index) => {
            const Icon = icons[feature.icon]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full transition-transform duration-300 hover:scale-105 hover:shadow-lg border-orange-100 hover:border-orange-200">
                  <CardContent className="p-8">
                    <div className="rounded-full bg-orange-50 w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-orange-100 transition-colors">
                      <Icon className="h-8 w-8 text-orange-500" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}