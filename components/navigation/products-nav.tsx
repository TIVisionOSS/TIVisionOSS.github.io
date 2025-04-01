"use client"

import * as React from "react"
import Link from "next/link"
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Shield, Globe, Lock, Zap, Server, Network, Cloud, Database, Bot, FileCode, Mail, Search } from "lucide-react"
import { ListItem } from "./nav-item"

const products = [
  {
    title: "Cloud Hosting",
    href: "/products/cloud-hosting",
    description: "Scalable and reliable cloud hosting solutions.",
    icon: <Cloud className="h-6 w-6 text-orange-500" />,
  },
  {
    title: "SSL Certificates",
    href: "/products/ssl-certificates",
    description: "Secure your website with trusted SSL certificates.",
    icon: <Lock className="h-6 w-6 text-orange-500" />,
  },
  {
    title: "CDN",
    href: "/products/cdn",
    description: "Global content delivery network for faster websites.",
    icon: <Globe className="h-6 w-6 text-orange-500" />,
  },
  {
    title: "DNS Services",
    href: "/products/dns-services",
    description: "Enterprise DNS management with global availability.",
    icon: <Network className="h-6 w-6 text-orange-500" />,
  },
  {
    title: "Database Services",
    href: "/products/database-services",
    description: "Managed database solutions for enterprise applications.",
    icon: <Database className="h-6 w-6 text-orange-500" />,
  },
  {
    title: "Security Suite",
    href: "/products/security-suite",
    description: "Comprehensive security solutions for your infrastructure.",
    icon: <Shield className="h-6 w-6 text-orange-500" />,
  },
  {
    title: "Load Balancer",
    href: "/products/load-balancer",
    description: "Advanced load balancing for high-traffic applications.",
    icon: <Server className="h-6 w-6 text-orange-500" />,
  },
  {
    title: "Developer Tools",
    href: "/products/developer-tools",
    description: "API management and development tools.",
    icon: <FileCode className="h-6 w-6 text-orange-500" />,
  },
  {
    title: "Email Security",
    href: "/products/email-security",
    description: "Advanced email protection and filtering.",
    icon: <Mail className="h-6 w-6 text-orange-500" />,
  },
  {
    title: "AI Services",
    href: "/products/ai-services",
    description: "Machine learning and AI-powered solutions.",
    icon: <Bot className="h-6 w-6 text-orange-500" />,
  },
  {
    title: "Performance Monitoring",
    href: "/products/performance-monitoring",
    description: "Real-time monitoring and optimization tools.",
    icon: <Zap className="h-6 w-6 text-orange-500" />,
  },
  {
    title: "Search Services",
    href: "/products/search",
    description: "Enterprise search and discovery solutions.",
    icon: <Search className="h-6 w-6 text-orange-500" />,
  },
]

export function ProductsNav() {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="h-9 px-4 text-sm font-medium">Products</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[600px] gap-3 p-6 md:w-[700px] md:grid-cols-2 lg:w-[920px] lg:grid-cols-3">
          {products.map((product) => (
            <ListItem
              key={product.title}
              title={product.title}
              href={product.href}
              icon={product.icon}
            >
              {product.description}
            </ListItem>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}