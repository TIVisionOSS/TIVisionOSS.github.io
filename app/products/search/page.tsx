"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Shield, Globe, Lock, Zap, Server, Network, Cloud, Database, Bot, FileCode } from "lucide-react"

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const products = [
    {
      title: "Cloud Hosting",
      description: "Scalable and reliable cloud hosting solutions.",
      icon: <Cloud className="h-6 w-6 text-primary" />,
      href: "/products/cloud-hosting"
    },
    {
      title: "SSL Certificates",
      description: "Secure your website with trusted SSL certificates.",
      icon: <Lock className="h-6 w-6 text-primary" />,
      href: "/products/ssl-certificates"
    },
    {
      title: "CDN",
      description: "Global content delivery network for faster websites.",
      icon: <Globe className="h-6 w-6 text-primary" />,
      href: "/products/cdn"
    },
    {
      title: "DNS Services",
      description: "Enterprise DNS management with global availability.",
      icon: <Network className="h-6 w-6 text-primary" />,
      href: "/products/dns-services"
    },
    {
      title: "Database Services",
      description: "Managed database solutions for enterprise applications.",
      icon: <Database className="h-6 w-6 text-primary" />,
      href: "/products/database-services"
    },
    {
      title: "Security Suite",
      description: "Comprehensive security solutions for your infrastructure.",
      icon: <Shield className="h-6 w-6 text-primary" />,
      href: "/products/security-suite"
    },
    {
      title: "Load Balancer",
      description: "Advanced load balancing for high-traffic applications.",
      icon: <Server className="h-6 w-6 text-primary" />,
      href: "/products/load-balancer"
    },
    {
      title: "Developer Tools",
      description: "API management and development tools.",
      icon: <FileCode className="h-6 w-6 text-primary" />,
      href: "/products/developer-tools"
    },
    {
      title: "AI Services",
      description: "Machine learning and AI-powered solutions.",
      icon: <Bot className="h-6 w-6 text-primary" />,
      href: "/products/ai-services"
    },
    {
      title: "Performance Monitoring",
      description: "Real-time monitoring and optimization tools.",
      icon: <Zap className="h-6 w-6 text-primary" />,
      href: "/products/performance-monitoring"
    }
  ]

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Search Products
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Find the perfect solution for your business needs
            </p>
            <div className="mt-8 flex items-center gap-4 max-w-xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  {product.icon}
                  <h3 className="text-xl font-semibold mb-2 mt-4">{product.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {product.description}
                  </p>
                  <Link href={product.href}>
                    <Button variant="outline" className="w-full">Learn more</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
            {filteredProducts.length === 0 && (
              <div className="col-span-full text-center py-12">
                <p className="text-xl text-muted-foreground">No products found matching your search.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}