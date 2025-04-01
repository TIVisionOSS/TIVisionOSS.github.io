"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, Users, LineChart, Trophy } from "lucide-react"
import { motion } from "framer-motion"

export default function ResellerPartnersPage() {
  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Reseller Program
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Join our global network of resellers and grow your business with our industry-leading security and infrastructure solutions.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="cloudflare-button">Become a Reseller</Button>
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
                  <DollarSign className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Competitive Margins</h3>
                  <p className="text-muted-foreground mb-4">
                    Maximize your profits with our competitive reseller margins and incentive programs.
                  </p>
                  <ul className="space-y-2 mb-6 text-sm">
                    <li className="flex items-center">✓ Tiered pricing structure</li>
                    <li className="flex items-center">✓ Volume discounts</li>
                    <li className="flex items-center">✓ Recurring revenue</li>
                    <li className="flex items-center">✓ Performance bonuses</li>
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
                  <Users className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Sales Support</h3>
                  <p className="text-muted-foreground mb-4">
                    Comprehensive sales enablement and support to help you succeed.
                  </p>
                  <ul className="space-y-2 mb-6 text-sm">
                    <li className="flex items-center">✓ Sales training</li>
                    <li className="flex items-center">✓ Marketing resources</li>
                    <li className="flex items-center">✓ Lead sharing</li>
                    <li className="flex items-center">✓ Deal registration</li>
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
                  <LineChart className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Business Growth</h3>
                  <p className="text-muted-foreground mb-4">
                    Tools and resources to help you expand your business.
                  </p>
                  <ul className="space-y-2 mb-6 text-sm">
                    <li className="flex items-center">✓ Market insights</li>
                    <li className="flex items-center">✓ Growth strategies</li>
                    <li className="flex items-center">✓ Business planning</li>
                    <li className="flex items-center">✓ Success metrics</li>
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
                  <Trophy className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Partner Benefits</h3>
                  <p className="text-muted-foreground mb-4">
                    Exclusive benefits and rewards for our reseller partners.
                  </p>
                  <ul className="space-y-2 mb-6 text-sm">
                    <li className="flex items-center">✓ Partner portal access</li>
                    <li className="flex items-center">✓ Priority support</li>
                    <li className="flex items-center">✓ Certification programs</li>
                    <li className="flex items-center">✓ Partner events</li>
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
                1000+
              </div>
              <div className="text-xl text-muted-foreground font-medium">
                Active Resellers
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">
                50+
              </div>
              <div className="text-xl text-muted-foreground font-medium">
                Countries Served
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">
                95%
              </div>
              <div className="text-xl text-muted-foreground font-medium">
                Partner Satisfaction
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to grow your business?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join our reseller program and start offering industry-leading solutions to your customers.
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
