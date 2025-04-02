"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Globe, Users, Rocket, Award, Target } from "lucide-react"
import { motion } from "framer-motion"
// import { constructMetadata } from "@/lib/metadata"
import aboutData from "@/data/about.json"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              {aboutData.hero.title}
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              {aboutData.hero.description}
            </p>
            <div className="mt-8 flex justify-center gap-4">
              {aboutData.hero.ctaButtons.map((button, index) => (
                <Link key={index} href={button.href}>
                  <Button size="lg" variant={button.variant as "default" | "outline"} className={button.variant === 'default' ? 'cloudflare-button' : 'cloudflare-outline-button'}>
                    {button.text}
                  </Button>
                </Link>
              ))}
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
                  <h3 className="text-xl font-semibold mb-2">{aboutData.mission.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {aboutData.mission.description}
                  </p>
                  <ul className="space-y-2 mb-6 text-sm">
                    {aboutData.mission.bullets.map((bullet, index) => (
                      <li key={index} className="flex items-center">✓ {bullet}</li>
                    ))}
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
                  <h3 className="text-xl font-semibold mb-2">{aboutData.globalPresence.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {aboutData.globalPresence.description}
                  </p>
                  <ul className="space-y-2 mb-6 text-sm">
                    {aboutData.globalPresence.bullets.map((bullet, index) => (
                      <li key={index} className="flex items-center">✓ {bullet}</li>
                    ))}
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
                {aboutData.stats[0].value}
              </div>
              <div className="text-xl text-muted-foreground font-medium">
                {aboutData.stats[0].label}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">
                {aboutData.stats[1].value}
              </div>
              <div className="text-xl text-muted-foreground font-medium">
                {aboutData.stats[1].label}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">
                {aboutData.stats[2].value}
              </div>
              <div className="text-xl text-muted-foreground font-medium">
                {aboutData.stats[2].label}
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
                  <h3 className="text-xl font-semibold mb-2">{aboutData.values[0].title}</h3>
                  <p className="text-muted-foreground">
                    {aboutData.values[0].description}
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
                  <h3 className="text-xl font-semibold mb-2">{aboutData.values[1].title}</h3>
                  <p className="text-muted-foreground">
                    {aboutData.values[1].description}
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
                  <h3 className="text-xl font-semibold mb-2">{aboutData.values[2].title}</h3>
                  <p className="text-muted-foreground">
                    {aboutData.values[2].description}
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
                        src={aboutData.leadership[0].image}
                        alt={aboutData.leadership[0].name}
                        className="rounded-full w-full h-full object-cover border-4 border-orange-500/20"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-1">{aboutData.leadership[0].name}</h3>
                    <p className="text-muted-foreground text-center mb-4">{aboutData.leadership[0].title}</p>
                    <p className="text-sm text-muted-foreground text-center">
                      {aboutData.leadership[0].bio}
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
                        src={aboutData.leadership[1].image}
                        alt={aboutData.leadership[1].name}
                        className="rounded-full w-full h-full object-cover border-4 border-orange-500/20"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-1">{aboutData.leadership[1].name}</h3>
                    <p className="text-muted-foreground text-center mb-4">{aboutData.leadership[1].title}</p>
                    <p className="text-sm text-muted-foreground text-center">
                      {aboutData.leadership[1].bio}
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
            <h2 className="text-3xl font-bold mb-6">{aboutData.joinTeam.title}</h2>
            <p className="text-xl text-muted-foreground mb-8">
              {aboutData.joinTeam.description}
            </p>
            <Link href={aboutData.joinTeam.ctaButton.href}>
              <Button size="lg" className="cloudflare-button">{aboutData.joinTeam.ctaButton.text}</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}