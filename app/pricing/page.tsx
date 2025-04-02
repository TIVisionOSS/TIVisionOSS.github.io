"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Shield, Zap, Globe } from "lucide-react"
import { motion } from "framer-motion"

const tiers = [
  {
    name: "Starter",
    description: "Perfect for small businesses and startups",
    price: "$29",
    billing: "per month",
    features: [
      "DDoS protection up to 10 Gbps",
      "5 domains",
      "100 GB bandwidth",
      "Basic SSL certificates",
      "Email support",
      "Basic analytics"
    ],
    icon: Shield
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses",
    price: "$99",
    billing: "per month",
    features: [
      "DDoS protection up to 50 Gbps",
      "25 domains",
      "500 GB bandwidth",
      "Advanced SSL management",
      "24/7 priority support",
      "Advanced analytics",
      "Load balancing",
      "Custom rules"
    ],
    popular: true,
    icon: Zap
  },
  {
    name: "Enterprise",
    description: "For large organizations with custom needs",
    price: "Custom",
    billing: "contact sales",
    features: [
      "DDoS protection up to 100+ Gbps",
      "Unlimited domains",
      "Custom bandwidth",
      "Custom SSL solutions",
      "Dedicated support team",
      "Enterprise analytics",
      "Advanced load balancing",
      "Custom rulesets",
      "SLA guarantees"
    ],
    icon: Globe
  }
]

export default function PricingPage() {
  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Simple, transparent pricing
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Choose the perfect plan for your business needs. All plans include our core security features.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            {tiers.map((tier, index) => {
              const Icon = tier.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className={`relative h-full ${tier.popular ? 'border-primary shadow-lg' : ''}`}>
                    {tier.popular && (
                      <div className="absolute -top-4 left-0 right-0 flex justify-center">
                        <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <CardContent className={`p-6 ${tier.popular ? 'pt-8' : 'pt-6'}`}>
                      <Icon className="h-12 w-12 mb-4 text-primary" />
                      <h3 className="text-2xl font-bold">{tier.name}</h3>
                      <p className="text-muted-foreground mt-2 mb-6">{tier.description}</p>
                      <div className="mb-6">
                        <span className="text-4xl font-bold">{tier.price}</span>
                        <span className="text-muted-foreground ml-2">{tier.billing}</span>
                      </div>
                      <ul className="space-y-3 mb-6">
                        {tier.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2">
                            <Check className="h-5 w-5 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link href="/contact" className="block mt-auto">
                        <Button 
                          className={`w-full ${tier.popular ? 'cloudflare-button' : ''}`}
                          variant={tier.popular ? 'default' : 'outline'}
                        >
                          {tier.price === "Custom" ? "Contact Sales" : "Get Started"}
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Need a custom solution?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contact our sales team to discuss your specific requirements and get a tailored quote.
            </p>
            <Link href="/contact">
              <Button size="lg" className="cloudflare-button">Contact Sales</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}