"use client"

import * as React from "react"
import Link from "next/link"
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Shield, Globe, Lock, Zap, Server, Network, Cloud, Database, LineChart, Users, Bot, Workflow } from "lucide-react"
import { ListItem } from "./nav-item"

const solutions = [
  {
    title: "DDoS Protection",
    href: "/solutions/ddos-protection",
    description: "Enterprise-grade DDoS mitigation for uninterrupted service.",
    icon: <Shield className="h-6 w-6 text-orange-500" />,
  },
  {
    title: "DNS Management",
    href: "/solutions/dns-management",
    description: "Fast and reliable DNS services with global coverage.",
    icon: <Globe className="h-6 w-6 text-orange-500" />,
  },
  {
    title: "Web Security",
    href: "/solutions/web-security",
    description: "Comprehensive security solutions for your web applications.",
    icon: <Lock className="h-6 w-6 text-orange-500" />,
  },
  {
    title: "Performance",
    href: "/solutions/performance",
    description: "Optimize your website's speed and performance globally.",
    icon: <Zap className="h-6 w-6 text-orange-500" />,
  },
  {
    title: "Load Balancing",
    href: "/solutions/load-balancing",
    description: "Distribute traffic efficiently across your infrastructure.",
    icon: <Server className="h-6 w-6 text-orange-500" />,
  },
  {
    title: "Network Services",
    href: "/solutions/network-services",
    description: "Advanced networking solutions for enterprise needs.",
    icon: <Network className="h-6 w-6 text-orange-500" />,
  },
  {
    title: "Cloud Migration",
    href: "/solutions/cloud-migration",
    description: "Seamless migration of your applications to the cloud.",
    icon: <Cloud className="h-6 w-6 text-orange-500" />,
  },
  {
    title: "Database Solutions",
    href: "/solutions/database-solutions",
    description: "Managed database services with high availability.",
    icon: <Database className="h-6 w-6 text-orange-500" />,
  },
  {
    title: "Analytics & Monitoring",
    href: "/solutions/analytics-monitoring",
    description: "Real-time insights and monitoring for your infrastructure.",
    icon: <LineChart className="h-6 w-6 text-orange-500" />,
  },
  {
    title: "Identity Management",
    href: "/solutions/identity-management",
    description: "Secure identity and access management solutions.",
    icon: <Users className="h-6 w-6 text-orange-500" />,
  },
  {
    title: "AI & Automation",
    href: "/solutions/ai-automation",
    description: "Intelligent automation and AI-powered solutions.",
    icon: <Bot className="h-6 w-6 text-orange-500" />,
  },
  {
    title: "DevOps Solutions",
    href: "/solutions/devops",
    description: "Streamline your development and operations.",
    icon: <Workflow className="h-6 w-6 text-orange-500" />,
  },
]

export function SolutionsNav() {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="h-9 px-4 text-sm font-medium">Solutions</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[600px] gap-3 p-6 md:w-[700px] md:grid-cols-2 lg:w-[920px] lg:grid-cols-3">
          {solutions.map((solution) => (
            <ListItem
              key={solution.title}
              title={solution.title}
              href={solution.href}
              icon={solution.icon}
            >
              {solution.description}
            </ListItem>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}