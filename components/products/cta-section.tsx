"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface CTAProps {
  title: string
  description: string
  button: {
    text: string
    link: string
  }
}

export function CTASection({ title, description, button }: CTAProps) {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-6">{title}</h2>
          <p className="text-xl text-muted-foreground mb-8">
            {description}
          </p>
          <Link href={button.link}>
            <Button size="lg" className="cloudflare-button">{button.text}</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}