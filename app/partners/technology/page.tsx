"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileCode, Server, Shield, Globe, Zap, Code, Database, Cpu } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const partnerLogos = [
  "/partners/aws.png",
  "/partners/google-cloud.png",
  "/partners/microsoft.png",
  "/partners/docker.png",
  "/partners/kubernetes.png",
  "/partners/terraform.png"
]

const testimonials = [
  {
    quote: "Partnering with this platform has allowed us to deliver enterprise-grade solutions to our customers with minimal integration effort.",
    author: "Sarah Johnson",
    role: "CTO, CloudTech Solutions"
  },
  {
    quote: "The API documentation and developer support are exceptional, making it easy to build integrated products.",
    author: "Michael Chen",
    role: "Lead Developer, API Masters"
  }
]

export default function TechnologyPartnersPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid.svg')] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold tracking-tight sm:text-6xl"
            >
              Technology <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">Partners</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-xl text-muted-foreground"
            >
              Join our ecosystem of technology partners and deliver enhanced value to your customers through integrated solutions.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 flex justify-center gap-4"
            >
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                  Become a Partner
                </Button>
              </Link>
              <Link href="/partners">
                <Button size="lg" variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500/10">
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner Logos Section */}
      <section className="py-12 bg-background">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 md:gap-16"
          >
            {partnerLogos.map((logo, index) => (
              <div key={index} className="relative h-12 w-32 grayscale hover:grayscale-0 transition-all duration-300">
                <Image 
                  src={logo}
                  alt="Partner logo"
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Partnership <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">Benefits</span>
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <FileCode className="h-12 w-12 mb-4 text-orange-500" />,
                title: "API Integration",
                description: "Comprehensive API platform with SDK support and detailed documentation.",
                features: ["RESTful API access", "Webhooks", "SDK support", "Developer resources"]
              },
              {
                icon: <Server className="h-12 w-12 mb-4 text-orange-500" />,
                title: "Infrastructure",
                description: "Enterprise-grade infrastructure for reliable and scalable solutions.",
                features: ["Global edge network", "High availability", "Auto-scaling", "Performance optimization"]
              },
              {
                icon: <Shield className="h-12 w-12 mb-4 text-orange-500" />,
                title: "Security",
                description: "Advanced protection features to enhance your security capabilities.",
                features: ["DDoS protection", "WAF integration", "SSL management", "Access controls"]
              },
              {
                icon: <Globe className="h-12 w-12 mb-4 text-orange-500" />,
                title: "Global Reach",
                description: "Worldwide infrastructure to expand your market presence.",
                features: ["250+ edge locations", "Global load balancing", "CDN integration", "Regional optimization"]
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="pt-6">
                    {item.icon}
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {item.description}
                    </p>
                    <ul className="space-y-2 mb-6 text-sm">
                      {item.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <Zap className="h-4 w-4 mr-2 text-orange-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500/5 via-orange-500/10 to-orange-600/5">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            What Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">Partners Say</span>
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-8">
                    <div className="text-2xl font-medium mb-6">"{testimonial.quote}"</div>
                    <div className="text-sm text-muted-foreground">
                      <div className="font-semibold">{testimonial.author}</div>
                      <div>{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary/5">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-3 text-center">
            {[
              { value: "500+", label: "Technology Partners" },
              { value: "99.9%", label: "API Uptime" },
              { value: "24/7", label: "Partner Support" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-6"
            >
              Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">Join Us</span>?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-muted-foreground mb-8"
            >
              Join our technology partner program and start building innovative solutions together.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                  Apply Now
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}