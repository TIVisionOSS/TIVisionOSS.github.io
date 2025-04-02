"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Handshake, Building2, Users2, Trophy } from "lucide-react"
import data from "@/data/partners.json"

const icons = {
  Handshake,
  Building2,
  Users2,
  Trophy
}

export default function Partners() {
  return (
    <div className="flex flex-col">
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80')] opacity-5 bg-cover bg-center" />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">
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
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            {data.partnerTypes.map((partner, index) => {
              const Icon = icons[partner.icon as keyof typeof icons]
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full transition-transform duration-300 hover:scale-105">
                    <CardContent className="pt-6">
                      <Icon className="h-12 w-12 mb-4 text-primary" />
                      <h3 className="text-xl font-semibold mb-2">{partner.title}</h3>
                      <p className="text-muted-foreground mb-4">
                        {partner.description}
                      </p>
                      <ul className="space-y-2 mb-6 text-sm">
                        {partner.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center">
                            <span className="text-primary mr-2">✓</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                      <Link href={partner.link.href}>
                        <Button variant="outline" className="w-full cloudflare-outline-button">
                          {partner.link.text}
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

      <section className="py-20 bg-gradient-to-r from-orange-500/5 via-orange-500/10 to-orange-600/5">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-3 text-center">
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
          <h2 className="text-3xl font-bold text-center mb-12">What Our Partners Say</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {data.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
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

      <section className="py-20 bg-primary/5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">{data.cta.title}</h2>
            <p className="text-xl text-muted-foreground mb-8">
              {data.cta.description}
            </p>
            <Link href={data.cta.button.link}>
              <Button size="lg" className="cloudflare-button">{data.cta.button.text}</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}