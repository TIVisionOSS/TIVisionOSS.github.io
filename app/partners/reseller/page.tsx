"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, Users, LineChart, Trophy } from "lucide-react"
import { motion } from "framer-motion"

export default function ResellerPartnersPage() {
  return (
    <div className="flex flex-col">
      <section className="relative py-24 md:py-40 overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 to-transparent"></div>
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70"
            >
              Reseller Program
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-xl md:text-2xl text-muted-foreground"
            >
              Join our global network of resellers and grow your business with our industry-leading security and infrastructure solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link href="/contact">
                <Button size="lg" className="cloudflare-button px-8 py-6 text-lg">Become a Reseller</Button>
              </Link>
              <Link href="/partners">
                <Button size="lg" variant="outline" className="cloudflare-outline-button px-8 py-6 text-lg">Learn More</Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full transition-all hover:shadow-lg hover:border-primary/30">
                <CardContent className="pt-8 pb-10">
                  <div className="flex items-center justify-center w-16 h-16 mb-6 mx-auto rounded-full bg-primary/10">
                    <DollarSign className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">Competitive Margins</h3>
                  <p className="text-muted-foreground mb-5 text-center">
                    Maximize your profits with our competitive reseller margins and incentive programs.
                  </p>
                  <ul className="space-y-2.5 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span> Tiered pricing structure
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span> Volume discounts
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span> Recurring revenue
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span> Performance bonuses
                    </li>
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

      <section className="py-20 md:py-28 bg-gradient-to-r from-orange-500/5 via-orange-500/10 to-orange-600/5">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-3 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative p-8 rounded-xl bg-background/50 backdrop-blur-sm border border-orange-500/10"
            >
              <div className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">
                1000+
              </div>
              <div className="text-xl text-muted-foreground font-medium">
                Active Resellers
              </div>
              <div className="absolute -z-10 inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500/5 to-transparent opacity-50"></div>
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

      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6"
            >
              Ready to grow your business?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-muted-foreground mb-10"
            >
              Join our reseller program and start offering industry-leading solutions to your customers.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link href="/contact">
                <Button size="lg" className="cloudflare-button px-10 py-7 text-lg">Apply Now</Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
