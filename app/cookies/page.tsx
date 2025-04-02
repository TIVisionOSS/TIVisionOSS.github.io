"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Shield } from "lucide-react"
import { motion } from "framer-motion"
import data from "@/data/cookies.json"

export default function CookiesPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">{data.hero.title}</h1>
            <p className="text-xl text-muted-foreground">
              {data.hero.description}
            </p>
          </motion.div>

          {data.sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                  
                  {section.content && (
                    <p className="text-muted-foreground mb-4">
                      {section.content}
                    </p>
                  )}

                  {section.subsections && (
                    <div className="space-y-4">
                      {section.subsections.map((subsection, idx) => (
                        <div key={idx}>
                          <h3 className="text-lg font-medium mb-2">{subsection.title}</h3>
                          <p className="text-muted-foreground">
                            {subsection.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.items && (
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      {section.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {section.contact && (
                    <div className="space-y-2 text-muted-foreground">
                      <p>Email: {section.contact.email}</p>
                      <p>Address: {section.contact.address}</p>
                      <p>Phone: {section.contact.phone}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-sm text-center text-muted-foreground mt-8"
          >
            Last updated: {data.lastUpdated}
          </motion.p>
        </div>
      </div>
    </div>
  )
}