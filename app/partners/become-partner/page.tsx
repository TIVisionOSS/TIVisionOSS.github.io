"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Handshake, Shield, Users, LineChart } from "lucide-react"
import { motion } from "framer-motion"

export default function BecomePartnerPage() {
  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Join Our Partner Network
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Partner with us to expand your business opportunities and deliver enhanced value to your customers through our industry-leading solutions.
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
                  <Handshake className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Technology Partners</h3>
                  <p className="text-muted-foreground mb-4">
                    Integrate our solutions with your technology stack and deliver enhanced value to your customers.
                  </p>
                  <ul className="space-y-2 mb-6 text-sm">
                    <li className="flex items-center">✓ API integration support</li>
                    <li className="flex items-center">✓ Technical documentation</li>
                    <li className="flex items-center">✓ Partner portal access</li>
                    <li className="flex items-center">✓ Joint marketing opportunities</li>
                  </ul>
                  <Link href="/contact">
                    <Button variant="outline" className="w-full cloudflare-outline-button">Apply Now</Button>
                  </Link>
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
                  <Shield className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Solution Partners</h3>
                  <p className="text-muted-foreground mb-4">
                    Resell our solutions and provide implementation services to your customers.
                  </p>
                  <ul className="space-y-2 mb-6 text-sm">
                    <li className="flex items-center">✓ Competitive margins</li>
                    <li className="flex items-center">✓ Sales enablement</li>
                    <li className="flex items-center">✓ Training programs</li>
                    <li className="flex items-center">✓ Lead sharing</li>
                  </ul>
                  <Link href="/contact">
                    <Button variant="outline" className="w-full cloudflare-outline-button">Apply Now</Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-orange-500/5 via-orange-500/10 to-orange-600/5">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Partner Benefits</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <Users className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Dedicated Support</h3>
                  <p className="text-muted-foreground">
                    Get access to dedicated partner support, training resources, and technical expertise.
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
                  <LineChart className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Growth Opportunities</h3>
                  <p className="text-muted-foreground">
                    Expand your business with new revenue streams and market opportunities.
                  </p>
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
                  <h3 className="text-xl font-semibold mb-2">Industry Leadership</h3>
                  <p className="text-muted-foreground">
                    Partner with a recognized leader in security and infrastructure solutions.
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
            <h2 className="text-3xl font-bold mb-6">Ready to become a partner?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join our partner ecosystem and help shape the future of internet security and infrastructure.
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