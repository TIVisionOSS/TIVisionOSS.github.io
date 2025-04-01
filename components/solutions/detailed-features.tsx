"use client"

import { motion } from "framer-motion"

interface DetailedFeature {
  title: string
  description: string
  capabilities: string[]
}

interface DetailedFeaturesProps {
  features: DetailedFeature[]
}

export function DetailedFeatures({ features }: DetailedFeaturesProps) {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid gap-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  {feature.description}
                </p>
              </div>
              <div className="bg-primary/5 rounded-lg p-6">
                <ul className="space-y-4">
                  {feature.capabilities.map((capability, capIndex) => (
                    <li key={capIndex} className="flex items-center text-lg">
                      <span className="mr-3 text-primary">✓</span>
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}