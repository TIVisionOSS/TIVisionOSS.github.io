"use client"

import { motion } from "framer-motion"

interface Stat {
  value: string
  label: string
}

interface StatsProps {
  stats: Stat[]
}

export function StatsSection({ stats }: StatsProps) {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-500/5 via-orange-500/10 to-orange-600/5">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-3 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">
                {stat.value}
              </div>
              <div className="text-xl text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}