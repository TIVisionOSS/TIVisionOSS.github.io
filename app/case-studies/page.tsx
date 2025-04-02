"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Users, Globe, Shield } from "lucide-react"
import { motion } from "framer-motion"

const caseStudies = [
  {
    title: "Global E-commerce Platform",
    company: "ShopGlobal Inc.",
    industry: "E-commerce",
    challenge: "Needed to handle high-traffic spikes during sales events while maintaining security",
    solution: "Implemented DDoS protection and global load balancing",
    results: [
      "99.99% uptime during peak events",
      "50% reduction in page load times",
      "Zero successful DDoS attacks"
    ],
    icon: Globe,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80"
  },
  {
    title: "Financial Services Security",
    company: "SecureBank Ltd.",
    industry: "Financial Services",
    challenge: "Required enterprise-grade security for sensitive financial transactions",
    solution: "Deployed comprehensive security suite with WAF and SSL management",
    results: [
      "100% compliance with regulations",
      "75% reduction in security incidents",
      "Enhanced customer trust"
    ],
    icon: Shield,
    image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&q=80"
  },
  {
    title: "Enterprise Cloud Migration",
    company: "TechCorp Solutions",
    industry: "Technology",
    challenge: "Needed to migrate legacy infrastructure to cloud while maintaining performance",
    solution: "Implemented cloud migration strategy with zero-downtime transition",
    results: [
      "40% cost reduction",
      "Zero downtime during migration",
      "Improved scalability"
    ],
    icon: Building2,
    image: "https://images.unsplash.com/photo-1556742205-e7530428f707?auto=format&fit=crop&q=80"
  }
]

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Customer Success Stories
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              See how leading organizations are transforming their infrastructure with our solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid gap-12">
            {caseStudies.map((study, index) => {
              const Icon = study.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-2">
                        <div 
                          className="h-64 md:h-auto bg-cover bg-center"
                          style={{ backgroundImage: `url(${study.image})` }}
                        />
                        <div className="p-8">
                          <Icon className="h-12 w-12 text-primary mb-4" />
                          <h2 className="text-2xl font-bold mb-2">{study.title}</h2>
                          <p className="text-primary font-medium mb-4">{study.company}</p>
                          <div className="space-y-4">
                            <div>
                              <h3 className="font-semibold mb-1">Challenge</h3>
                              <p className="text-muted-foreground">{study.challenge}</p>
                            </div>
                            <div>
                              <h3 className="font-semibold mb-1">Solution</h3>
                              <p className="text-muted-foreground">{study.solution}</p>
                            </div>
                            <div>
                              <h3 className="font-semibold mb-1">Results</h3>
                              <ul className="text-muted-foreground space-y-1">
                                {study.results.map((result, resultIndex) => (
                                  <li key={resultIndex} className="flex items-center gap-2">
                                    <span className="text-primary">✓</span>
                                    {result}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
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
            <h2 className="text-3xl font-bold mb-6">Ready to transform your infrastructure?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join these successful organizations and see how our solutions can help your business grow.
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