"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
}

interface TestimonialsProps {
  testimonials: Testimonial[]
}

export function TestimonialsSection({ testimonials }: TestimonialsProps) {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <p className="text-lg mb-6 italic text-muted-foreground">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}