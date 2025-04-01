"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface HeroProps {
  data: {
    title: string
    description: string
    cta: {
      primary: { text: string; link: string }
      secondary: { text: string; link: string }
    }
  }
}

export function HeroSection({ data }: HeroProps) {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 via-orange-500/5 to-background pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] opacity-5 bg-cover bg-center" />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {data.title}
          </motion.h1>
          <motion.p 
            className="mt-8 text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {data.description}
          </motion.p>
          <motion.div 
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link href={data.cta.primary.link}>
              <Button size="lg" className="cloudflare-button text-lg h-14 px-8 rounded-full">
                {data.cta.primary.text}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href={data.cta.secondary.link}>
              <Button size="lg" variant="outline" className="cloudflare-outline-button text-lg h-14 px-8 rounded-full">
                {data.cta.secondary.text}
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}