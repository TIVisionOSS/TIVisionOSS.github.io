"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface HeroProps {
  title: string
  description: string
  cta: {
    primary: {
      text: string
      link: string
    }
    secondary: {
      text: string
      link: string
    }
  }
}

export function HeroSection({ title, description, cta }: HeroProps) {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-xl text-muted-foreground">
            {description}
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href={cta.primary.link}>
              <Button size="lg" className="cloudflare-button">{cta.primary.text}</Button>
            </Link>
            <Link href={cta.secondary.link}>
              <Button size="lg" variant="outline" className="cloudflare-outline-button">{cta.secondary.text}</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}