"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Book, Search, FileText, HelpCircle, Shield } from "lucide-react"
import { motion } from "framer-motion"

const categories = [
  {
    title: "Getting Started",
    icon: Book,
    articles: [
      {
        title: "Quick Start Guide",
        description: "Learn the basics of setting up and using our platform",
        readTime: "5 min read"
      },
      {
        title: "Platform Overview",
        description: "Understanding our core features and capabilities",
        readTime: "8 min read"
      },
      {
        title: "Security Best Practices",
        description: "Essential security guidelines for your infrastructure",
        readTime: "10 min read"
      }
    ]
  },
  {
    title: "Security & Protection",
    icon: Shield,
    articles: [
      {
        title: "DDoS Protection Setup",
        description: "Configure DDoS protection for your applications",
        readTime: "7 min read"
      },
      {
        title: "SSL Certificate Management",
        description: "Managing and deploying SSL certificates",
        readTime: "6 min read"
      },
      {
        title: "WAF Configuration",
        description: "Setting up and optimizing Web Application Firewall",
        readTime: "12 min read"
      }
    ]
  },
  {
    title: "Troubleshooting",
    icon: HelpCircle,
    articles: [
      {
        title: "Common Issues",
        description: "Solutions to frequently encountered problems",
        readTime: "8 min read"
      },
      {
        title: "Performance Optimization",
        description: "Tips for improving application performance",
        readTime: "10 min read"
      },
      {
        title: "Error Messages",
        description: "Understanding and resolving error messages",
        readTime: "5 min read"
      }
    ]
  }
]

export default function KnowledgeBasePage() {
  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Knowledge Base
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Find answers, learn best practices, and discover tips for getting the most out of our platform.
            </p>
            <div className="mt-8 relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <input
                type="search"
                placeholder="Search articles..."
                className="w-full h-12 pl-12 pr-4 rounded-lg border border-input bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid gap-12">
            {categories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Icon className="h-8 w-8 text-primary" />
                    <h2 className="text-2xl font-bold">{category.title}</h2>
                  </div>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {category.articles.map((article, articleIndex) => (
                      <Card key={articleIndex} className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <FileText className="h-8 w-8 text-primary mb-4" />
                          <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                          <p className="text-muted-foreground mb-4">{article.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">{article.readTime}</span>
                            <Link href="#">
                              <Button variant="ghost" className="text-primary hover:text-primary/80">
                                Read more
                              </Button>
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Can't find what you're looking for?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our support team is here to help you with any questions or concerns.
            </p>
            <Link href="/contact">
              <Button size="lg" className="cloudflare-button">Contact Support</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}