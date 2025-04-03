"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Globe, Users, Rocket, Award, Target, Linkedin, Twitter } from "lucide-react"
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
            <div className="mt-8 flex justify-center">
              <Link href="/contact">
                <Button size="lg" className="cloudflare-button">
                  Contact Us
                </Button>
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
                  <h3 className="text-xl font-semibold mb-2">{aboutData.mission.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {aboutData.mission.description}
                  </p>
                  <ul className="space-y-2 mb-6 text-sm">
                    {aboutData.mission.points.map((point, index) => (
                      <li key={index} className="flex items-center">✓ {point}</li>
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
                  <h3 className="text-xl font-semibold mb-2">{aboutData.presence.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {aboutData.presence.description}
                  </p>
                  <ul className="space-y-2 mb-6 text-sm">
                    {aboutData.presence.points.map((point, index) => (
                      <li key={index} className="flex items-center">✓ {point}</li>
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
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 w-0.5 h-full bg-gradient-to-b from-orange-500 to-orange-600 -ml-px" />
              <div className="space-y-8">
                {aboutData.timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                    <div className="w-16 h-16 rounded-full bg-orange-500/10 flex items-center justify-center border-2 border-orange-500/20">
                      <span className="text-orange-500 font-bold">{item.year}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary/5">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {aboutData.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <div className="relative w-16 h-16 mr-4">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={64}
                          height={64}
                          className="rounded-full w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="italic">"{testimonial.quote}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {aboutData.teamGallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                className="aspect-square overflow-hidden rounded-lg"
              >
                <Image
                  src={image}
                  alt={`Team member ${index + 1}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
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
                      <Image
                        src={aboutData.leadership[0].image}
                        alt={aboutData.leadership[0].name}
                        width={128}
                        height={128}
                        className="rounded-full w-full h-full object-cover border-4 border-orange-500/20"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-1">{aboutData.leadership[0].name}</h3>
                    <p className="text-muted-foreground text-center mb-4">{aboutData.leadership[0].role}</p>
                    <p className="text-sm text-muted-foreground text-center mb-4">
                      {aboutData.leadership[0].description}
                    </p>
                    <div className="flex justify-center space-x-4">
                      <Link href={aboutData.leadership[0].social.linkedin} target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="icon">
                          <Linkedin className="h-5 w-5" />
                        </Button>
                      </Link>
                      <Link href={aboutData.leadership[0].social.twitter} target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="icon">
                          <Twitter className="h-5 w-5" />
                        </Button>
                      </Link>
                    </div>
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
                      <Image
                        src={aboutData.leadership[1].image}
                        alt={aboutData.leadership[1].name}
                        width={128}
                        height={128}
                        className="rounded-full w-full h-full object-cover border-4 border-orange-500/20"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-1">{aboutData.leadership[1].name}</h3>
                    <p className="text-muted-foreground text-center mb-4">{aboutData.leadership[1].role}</p>
                    <p className="text-sm text-muted-foreground text-center mb-4">
                      {aboutData.leadership[1].description}
                    </p>
                    <div className="flex justify-center space-x-4">
                      <Link href={aboutData.leadership[1].social.linkedin} target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="icon">
                          <Linkedin className="h-5 w-5" />
                        </Button>
                      </Link>
                      <Link href={aboutData.leadership[1].social.twitter} target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="icon">
                          <Twitter className="h-5 w-5" />
                        </Button>
                      </Link>
                    </div>
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
            <h2 className="text-3xl font-bold mb-6">{aboutData.careers.title}</h2>
            <p className="text-xl text-muted-foreground mb-8">
              {aboutData.careers.description}
            </p>
            <Link href={aboutData.careers.button.link}>
              <Button size="lg" className="cloudflare-button">{aboutData.careers.button.text}</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}