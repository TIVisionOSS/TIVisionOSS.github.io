"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileCode, Server, Shield, Globe } from "lucide-react"
import { motion } from "framer-motion"

export default function TechnologyPartnersPage() {
  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Technology Partners
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Join our ecosystem of technology partners and deliver enhanced value to your customers through integrated solutions.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="cloudflare-button">Become a Partner</Button>
              </Link>
              <Link href="/partners">
                <Button size="lg" variant="outline" className="cloudflare-outline-button">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <FileCode className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">API Integration</h3>
                  <p className="text-muted-foreground mb-4">
                    Integrate our solutions with your technology stack through our comprehensive API platform.
                  </p>
                  <ul className="space-y-2 mb-6 text-sm">
                    <li className="flex items-center">✓ RESTful API access</li>
                    <li className="flex items-center">✓ Detailed documentation</li>
                    <li className="flex items-center">✓ SDK support</li>
                    <li className="flex items-center">✓ Developer resources</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <Server className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Infrastructure Solutions</h3>
                  <p className="text-muted-foreground mb-4">
                    Build on our enterprise-grade infrastructure for reliable and scalable solutions.
                  </p>
                  <ul className="space-y-2 mb-6 text-sm">
                    <li className="flex items-center">✓ Global edge network</li>
                    <li className="flex items-center">✓ High availability</li>
                    <li className="flex items-center">✓ Auto-scaling</li>
                    <li className="flex items-center">✓ Performance optimization</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <Shield className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Security Features</h3>
                  <p className="text-muted-foreground mb-4">
                    Enhance your security capabilities with our advanced protection features.
                  </p>
                  <ul className="space-y-2 mb-6 text-sm">
                    <li className="flex items-center">✓ DDoS protection</li>
                    <li className="flex items-center">✓ WAF integration</li>
                    <li className="flex items-center">✓ SSL management</li>
                    <li className="flex items-center">✓ Access controls</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <Globe className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
                  <p className="text-muted-foreground mb-4">
                    Expand your market presence with our worldwide infrastructure.
                  </p>
                  <ul className="space-y-2 mb-6 text-sm">
                    <li className="flex items-center">✓ 250+ edge locations</li>
                    <li className="flex items-center">✓ Global load balancing</li>
                    <li className="flex items-center">✓ CDN integration</li>
                    <li className="flex items-center">✓ Regional optimization</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-orange-500/5 via-orange-500/10 to-orange-600/5">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-3 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="relative"
            >
              <div className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">
                500+
              </div>
              <div className="text-xl text-muted-foreground font-medium">
                Technology Partners
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">
                99.9%
              </div>
              <div className="text-xl text-muted-foreground font-medium">
                API Uptime
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">
                24/7
              </div>
              <div className="text-xl text-muted-foreground font-medium">
                Partner Support
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to become a partner?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join our technology partner program and start building innovative solutions together.
            </p>
            <Link href="/contact">
              <Button size="lg" className="cloudflare-button">Apply Now</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}