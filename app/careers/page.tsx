"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Code, FileText, Terminal, MapPin, Clock, Users, Shield, Globe, Server, Database, Bot } from "lucide-react"
import { motion } from "framer-motion"
import { constructMetadata } from "@/lib/metadata"

export const metadata = constructMetadata({
  title: "Careers",
  description: "Join our team of innovators shaping the future of internet security and infrastructure. Explore career opportunities at Tonmoy I&V.",
  openGraph: {
    title: "Careers at Tonmoy Infrastructure & Vision",
    description: "Join our team of innovators shaping the future of internet security and infrastructure.",
  }
})

export default function CareersPage() {
  const departments = [
    {
      name: "Engineering",
      positions: [
        {
          title: "Senior Security Engineer",
          location: "San Francisco, CA",
          type: "Full-time",
          description: "Join our security team to help protect enterprise infrastructure from evolving cyber threats.",
          requirements: [
            "5+ years of security engineering experience",
            "Experience with cloud security",
            "Knowledge of network protocols",
            "Strong coding skills in Python/Go"
          ]
        },
        {
          title: "Full Stack Developer",
          location: "Remote",
          type: "Full-time",
          description: "Build and maintain enterprise-grade applications using modern web technologies.",
          requirements: [
            "3+ years of full stack development",
            "Experience with React and Node.js",
            "Database design expertise",
            "CI/CD knowledge"
          ]
        }
      ]
    },
    {
      name: "Infrastructure",
      positions: [
        {
          title: "Cloud Infrastructure Architect",
          location: "New York, NY",
          type: "Full-time",
          description: "Design and implement scalable cloud infrastructure solutions for enterprise clients.",
          requirements: [
            "7+ years of cloud architecture",
            "Multi-cloud experience",
            "Infrastructure as Code",
            "Performance optimization"
          ]
        }
      ]
    },
    {
      name: "Product",
      positions: [
        {
          title: "Product Manager",
          location: "San Francisco, CA",
          type: "Full-time",
          description: "Lead product strategy and development for our security solutions.",
          requirements: [
            "5+ years product management",
            "Security product experience",
            "Technical background",
            "Strong communication skills"
          ]
        }
      ]
    }
  ]

  const benefits = [
    {
      icon: <Globe className="h-12 w-12 text-primary" />,
      title: "Remote-First Culture",
      description: "Work from anywhere in the world with our distributed team."
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Health & Wellness",
      description: "Comprehensive health coverage and wellness programs for you and your family."
    },
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "Learning & Development",
      description: "Continuous learning opportunities and professional development budget."
    },
    {
      icon: <Server className="h-12 w-12 text-primary" />,
      title: "Latest Technology",
      description: "Work with cutting-edge technology and tools in cloud and security."
    }
  ]

  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Join Our Team
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Help us build the future of internet security and infrastructure. We're looking for talented individuals who share our passion for innovation and excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
          {departments.map((department, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-12"
            >
              <h3 className="text-2xl font-semibold mb-6">{department.name}</h3>
              <div className="grid gap-6">
                {department.positions.map((position, posIndex) => (
                  <Card key={posIndex}>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-semibold">{position.title}</h4>
                          <div className="flex items-center gap-4 mt-2 text-muted-foreground">
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {position.location}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {position.type}
                            </div>
                          </div>
                        </div>
                        <Link href="/careers/apply" className="mt-4 md:mt-0">
                          <Button className="cloudflare-button">Apply Now</Button>
                        </Link>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        {position.description}
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-semibold">Requirements:</h5>
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          {position.requirements.map((req, reqIndex) => (
                            <li key={reqIndex}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-orange-500/5 via-orange-500/10 to-orange-600/5">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Why Join Us?</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Don't see the right position?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Link href="/contact">
              <Button size="lg" className="cloudflare-button">Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}