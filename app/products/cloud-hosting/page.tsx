"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Cloud, Shield, Zap, Settings } from "lucide-react"
import { motion } from "framer-motion"
import data from "@/data/products/cloud-hosting.json"

const icons = {
  Cloud,
  Shield,
  Zap,
  Settings
}

export default function CloudHostingPage() {
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
              const Icon = icons[feature.icon as keyof typeof icons]
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

      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {data.tiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={tier.popular ? "border-primary" : ""}>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
                    <p className="text-muted-foreground mb-4">{tier.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold">{tier.price}</span>
                      <span className="text-muted-foreground">/{tier.unit}</span>
                    </div>
                    <ul className="space-y-2 mb-6 text-sm">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">✓ {feature}</li>
                      ))}
                    </ul>
                    <Link href="/signup">
                      <Button 
                        className={`w-full ${tier.popular ? 'cloudflare-button' : ''}`}
                        variant={tier.popular ? 'default' : 'outline'}
                      >
                        Get started
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-orange-500/5 via-orange-500/10 to-orange-600/5">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-4 text-center">
            {data.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">
                  {stat.value}
                </div>
                <div className="text-xl text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {data.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-lg mb-6 italic text-muted-foreground">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Detailed Features</h2>
          <div className="grid gap-12">
            {data.features_detailed.map((feature, index) => (
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
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-lg">
                        <span className="mr-3 text-primary">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
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