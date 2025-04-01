"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { LineChart, Trophy, Users, Briefcase } from "lucide-react"
import { motion } from "framer-motion"

export default function InvestorsPage() {
  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Investor Relations
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Explore investment opportunities in the rapidly growing cybersecurity and infrastructure market with an industry leader.
            </p>
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
                  <LineChart className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Market Growth</h3>
                  <p className="text-muted-foreground mb-4">
                    Strong market position in the rapidly expanding cybersecurity and cloud infrastructure sectors.
                  </p>
                  <ul className="space-y-2 mb-6 text-sm">
                    <li className="flex items-center">✓ 40% YoY revenue growth</li>
                    <li className="flex items-center">✓ Expanding market share</li>
                    <li className="flex items-center">✓ Global customer base</li>
                    <li className="flex items-center">✓ Industry-leading retention rates</li>
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
                  <Trophy className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Market Leadership</h3>
                  <p className="text-muted-foreground mb-4">
                    Recognized industry leader with innovative technology and strong competitive advantages.
                  </p>
                  <ul className="space-y-2 mb-6 text-sm">
                    <li className="flex items-center">✓ Industry-leading technology</li>
                    <li className="flex items-center">✓ Strong IP portfolio</li>
                    <li className="flex items-center">✓ Strategic partnerships</li>
                    <li className="flex items-center">✓ Award-winning solutions</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-orange-500/5 via-orange-500/10 to-orange-600/5">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Key Metrics</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold mb-2 text-primary">40%</div>
                  <p className="text-lg font-semibold">Revenue Growth</p>
                  <p className="text-sm text-muted-foreground">Year over Year</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold mb-2 text-primary">95%</div>
                  <p className="text-lg font-semibold">Customer Retention</p>
                  <p className="text-sm text-muted-foreground">Enterprise Clients</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold mb-2 text-primary">50+</div>
                  <p className="text-lg font-semibold">Countries</p>
                  <p className="text-sm text-muted-foreground">Global Presence</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Investment Highlights</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <Users className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Strong Leadership</h3>
                  <p className="text-muted-foreground">
                    Experienced management team with proven track record in scaling technology companies.
                  </p>
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
                  <Briefcase className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Market Opportunity</h3>
                  <p className="text-muted-foreground">
                    Operating in a $500B+ addressable market with strong growth potential.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Interested in Learning More?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contact our investor relations team to receive detailed information about investment opportunities.
            </p>
            <Link href="/contact">
              <Button size="lg" className="cloudflare-button">Contact Investor Relations</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
