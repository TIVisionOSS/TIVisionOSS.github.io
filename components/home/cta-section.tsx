"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface CTAProps {
  data: {
    title: string
    description: string
    button: {
      text: string
      link: string
    }
  }
}

export function CTASection({ data }: CTAProps) {
  return (
    <section className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl gradient-bg p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay" />
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white max-w-3xl mx-auto leading-tight">
              {data.title}
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-2xl mx-auto">
              {data.description}
            </p>
            <Link href={data.button.link}>
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-lg h-14 px-8 rounded-full hover:bg-white/90 transition-colors"
              >
                {data.button.text}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}