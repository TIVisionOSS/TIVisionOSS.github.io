"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Globe, Users, Rocket, Award, Target } from "lucide-react"
import { motion } from "framer-motion"
import { constructMetadata } from "@/lib/metadata"

export const metadata = constructMetadata({
  title: "About Us",
  description: "Learn about Tonmoy Infrastructure & Vision's mission, values, and the team behind our enterprise security and infrastructure solutions.",
  openGraph: {
    title: "About Tonmoy Infrastructure & Vision",
    description: "Learn about our mission, values, and the team behind our enterprise security and infrastructure solutions.",
  }
})

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              About Tonmoy Infrastructure & Vision
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Leading the future of internet security and infrastructure with innovative solutions and unmatched expertise.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="cloudflare-button">Contact Us</Button>
              </Link>
              <Link href="/careers">
                <Button size="lg" variant="outline" className="cloudflare-outline-button">Join Our Team</Button>
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
                  <Shield className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                  <p className="text-muted-foreground mb-4">
                    To secure and accelerate the internet through innovative infrastructure solutions that empower businesses worldwide.
                  </p>
                  <ul className="space-y-2 mb-6 text-sm">
                    <li className="flex items-center">✓ Enterprise-grade security</li>
                    <li className="flex items-center">✓ Global infrastructure</li>
                    <li className="flex items-center">✓ Innovative solutions</li>
                    <li className="flex items-center">✓ Customer-first approach</li>
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
                  <Globe className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Global Presence</h3>
                  <p className="text-muted-foreground mb-4">
                    Operating worldwide with a network of data centers and edge locations.
                  </p>
                  <ul className="space-y-2 mb-6 text-sm">
                    <li className="flex items-center">✓ 250+ edge locations</li>
                    <li className="flex items-center">✓ 50+ countries served</li>
                    <li className="flex items-center">✓ 24/7 global support</li>
                    <li className="flex items-center">✓ Regional expertise</li>
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
                2015
              </div>
              <div className="text-xl text-muted-foreground font-medium">
                Founded
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">
                500+
              </div>
              <div className="text-xl text-muted-foreground font-medium">
                Team Members
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">
                10K+
              </div>
              <div className="text-xl text-muted-foreground font-medium">
                Customers Worldwide
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <Rocket className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                  <p className="text-muted-foreground">
                    Pushing the boundaries of technology to create cutting-edge solutions that address tomorrow's challenges today.
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
                  <Users className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Customer Focus</h3>
                  <p className="text-muted-foreground">
                    Putting our customers first and building long-term relationships based on trust and mutual success.
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
                  <Award className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                  <p className="text-muted-foreground">
                    Striving for excellence in everything we do, from product development to customer support.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Leadership Team</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Card>
                  <CardContent className="pt-6">
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full opacity-10 animate-pulse" />
                      <img
                        src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80"
                        alt="Eshan Roy"
                        className="rounded-full w-full h-full object-cover border-4 border-orange-500/20"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-1">Eshan Roy</h3>
                    <p className="text-muted-foreground text-center mb-4">CEO & Founder</p>
                    <p className="text-sm text-muted-foreground text-center">
                      15+ years of experience in infrastructure and security. Previously led security initiatives at major tech companies.
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
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full opacity-10 animate-pulse" />
                      <img
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
                        alt="Sarah Chen"
                        className="rounded-full w-full h-full object-cover border-4 border-orange-500/20"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-1">Sarah Chen</h3>
                    <p className="text-muted-foreground text-center mb-4">CTO</p>
                    <p className="text-sm text-muted-foreground text-center">
                      Expert in cloud infrastructure and distributed systems. Pioneered several breakthrough technologies in web security.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl text-muted-foreground mb-8">
              We're always looking for talented individuals who share our passion for innovation and excellence.
            </p>
            <Link href="/careers">
              <Button size="lg" className="cloudflare-button">View Open Positions</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}