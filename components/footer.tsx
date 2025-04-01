"use client"

import Link from "next/link"
import { Shield, Twitter, Linkedin, Github } from "lucide-react"
import { motion } from "framer-motion"
import footerData from "@/data/footer.json"

const socialIcons = {
  Twitter,
  Linkedin,
  Github
}

export function Footer() {
  return (
    <footer className="border-t bg-gradient-to-b from-background to-gray-50/50">
      <div className="container py-12 md:py-16 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">{footerData.logo.text}</span>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md">
              {footerData.description}
            </p>
            <div className="mt-6 flex space-x-4">
              {footerData.social.links.map((link, index) => {
                const Icon = socialIcons[link.icon as keyof typeof socialIcons]
                return (
                  <Link 
                    key={index}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                )
              })}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-3"
          >
            {footerData.columns.map((column, index) => (
              <div key={index}>
                <h3 className="text-sm font-semibold">{column.title}</h3>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 pt-8 border-t"
        >
          <p className="text-center text-sm text-muted-foreground">
            {footerData.copyright.text.replace("{year}", new Date().getFullYear().toString())}
          </p>
        </motion.div>
      </div>
    </footer>
  )
}