"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Users, Shield, Server, MapPin, Clock } from "lucide-react"
import data from "@/data/careers/index.json"

const icons = {
  Globe,
  Users,
  Shield,
  Server
}

export default function CareersPage() {
  return (
    <div className="flex flex-col">
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-background pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80')] opacity-5 bg-cover bg-center" />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              {data.hero.title}
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              {data.hero.description}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
          {data.departments.map((department, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-12"
            >
              <h3 className="text-2xl font-semibold mb-6">{department.name}</h3>
              <div className="grid gap-6">
                {department.positions.map((position, posIndex) => (
                  <Card key={posIndex}>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-semibold">{position.title}</h4>
                          <div className="flex items-center gap-4 mt-2 text-muted-foreground">
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {position.location}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {position.type}
                            </div>
                          </div>
                        </div>
                        <Link href="/careers/apply" className="mt-4 md:mt-0">
                          <Button className="cloudflare-button">Apply Now</Button>
                        </Link>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        {position.description}
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-semibold">Requirements:</h5>
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          {position.requirements.map((req, reqIndex) => (
                            <li key={reqIndex}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-orange-500/5 via-orange-500/10 to-orange-600/5">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Why Join Us?</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {data.benefits.map((benefit, index) => {
              const Icon = icons[benefit.icon as keyof typeof icons]
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="flex justify-center mb-4">
                        <Icon className="h-12 w-12 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground">
                        {benefit.description}
                      </p>
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