"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { HelpCircle, Book, MessageSquare, FileText, Phone, Mail } from "lucide-react"
import { motion } from "framer-motion"

export default function SupportPage() {
  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              How can we help?
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Get the support you need with our comprehensive resources and expert assistance.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <Book className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Documentation</h3>
                  <p className="text-muted-foreground mb-4">
                    Comprehensive guides and technical documentation for all our products and services.
                  </p>
                  <Link href="/resources/documentation">
                    <Button variant="outline" className="w-full">View Documentation</Button>
                  </Link>
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
                  <MessageSquare className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Community Forum</h3>
                  <p className="text-muted-foreground mb-4">
                    Connect with other users, share experiences, and get community support.
                  </p>
                  <Link href="/resources/community">
                    <Button variant="outline" className="w-full">Visit Forum</Button>
                  </Link>
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
                  <FileText className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Knowledge Base</h3>
                  <p className="text-muted-foreground mb-4">
                    Find answers to common questions and learn best practices.
                  </p>
                  <Link href="/resources/knowledge-base">
                    <Button variant="outline" className="w-full">Browse Articles</Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary/5">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Support</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card>
                <CardContent className="p-8">
                  <Phone className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Phone Support</h3>
                  <p className="text-muted-foreground mb-4">
                    24/7 phone support for urgent issues and technical assistance.
                  </p>
                  <div className="space-y-2">
                    <p className="font-medium">Enterprise Support:</p>
                    <p className="text-muted-foreground">+1 (888) 123-4567</p>
                    <p className="font-medium mt-4">Standard Support:</p>
                    <p className="text-muted-foreground">+1 (888) 765-4321</p>
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
                <CardContent className="p-8">
                  <Mail className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Email Support</h3>
                  <p className="text-muted-foreground mb-4">
                    Submit a ticket for non-urgent issues and general inquiries.
                  </p>
                  <div className="space-y-2">
                    <p className="font-medium">Technical Support:</p>
                    <p className="text-muted-foreground">support@tonmoyiv.com</p>
                    <p className="font-medium mt-4">Billing Support:</p>
                    <p className="text-muted-foreground">billing@tonmoyiv.com</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Still need help?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our support team is available 24/7 to assist you with any questions or concerns.
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