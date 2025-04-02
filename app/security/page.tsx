"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Lock, AlertTriangle, Eye, FileCheck, Users } from "lucide-react"
import { motion } from "framer-motion"

export default function SecurityPage() {
  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Enterprise Security Overview
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Learn about our comprehensive security measures and compliance standards that protect your infrastructure and data.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="cloudflare-button">Contact Security Team</Button>
              </Link>
              <Link href="/resources">
                <Button size="lg" variant="outline" className="cloudflare-outline-button">View Documentation</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <Shield className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Infrastructure Security</h3>
                  <p className="text-muted-foreground mb-4">
                    Multi-layered security approach protecting your infrastructure at every level.
                  </p>
                  <ul className="space-y-2 mb-6 text-sm">
                    <li className="flex items-center">✓ DDoS protection up to 100 Tbps</li>
                    <li className="flex items-center">✓ Web Application Firewall (WAF)</li>
                    <li className="flex items-center">✓ Zero-trust architecture</li>
                    <li className="flex items-center">✓ 24/7 security monitoring</li>
                  </ul>
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
                  <Lock className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Data Protection</h3>
                  <p className="text-muted-foreground mb-4">
                    Enterprise-grade encryption and data security measures.
                  </p>
                  <ul className="space-y-2 mb-6 text-sm">
                    <li className="flex items-center">✓ End-to-end encryption</li>
                    <li className="flex items-center">✓ Data sovereignty compliance</li>
                    <li className="flex items-center">✓ Regular security audits</li>
                    <li className="flex items-center">✓ Secure backup systems</li>
                  </ul>
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
                  <AlertTriangle className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Threat Prevention</h3>
                  <p className="text-muted-foreground mb-4">
                    Advanced threat detection and prevention systems.
                  </p>
                  <ul className="space-y-2 mb-6 text-sm">
                    <li className="flex items-center">✓ AI-powered threat detection</li>
                    <li className="flex items-center">✓ Real-time attack mitigation</li>
                    <li className="flex items-center">✓ Vulnerability scanning</li>
                    <li className="flex items-center">✓ Security intelligence feeds</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <Eye className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Security Monitoring</h3>
                  <p className="text-muted-foreground mb-4">
                    Comprehensive monitoring and incident response.
                  </p>
                  <ul className="space-y-2 mb-6 text-sm">
                    <li className="flex items-center">✓ 24/7 SOC operations</li>
                    <li className="flex items-center">✓ Incident response team</li>
                    <li className="flex items-center">✓ Security analytics</li>
                    <li className="flex items-center">✓ Automated alerts</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-orange-500/5 via-orange-500/10 to-orange-600/5">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-3 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="relative"
            >
              <div className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">
                100K+
              </div>
              <div className="text-xl text-muted-foreground font-medium">
                Threats Blocked Daily
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">
                99.99%
              </div>
              <div className="text-xl text-muted-foreground font-medium">
                Uptime SLA
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">
                24/7
              </div>
              <div className="text-xl text-muted-foreground font-medium">
                Security Operations
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Compliance & Certifications</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <FileCheck className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Industry Standards</h3>
                  <p className="text-muted-foreground mb-4">
                    Compliance with major security standards and regulations.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">✓ ISO 27001 certified</li>
                    <li className="flex items-center">✓ SOC 2 Type II compliant</li>
                    <li className="flex items-center">✓ GDPR compliant</li>
                    <li className="flex items-center">✓ HIPAA compliant</li>
                  </ul>
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
                  <Users className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Security Team</h3>
                  <p className="text-muted-foreground mb-4">
                    Expert security professionals protecting your infrastructure.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">✓ Certified security experts</li>
                    <li className="flex items-center">✓ Dedicated incident response</li>
                    <li className="flex items-center">✓ Regular security training</li>
                    <li className="flex items-center">✓ Continuous monitoring</li>
                  </ul>
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
                  <Shield className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Security Practices</h3>
                  <p className="text-muted-foreground mb-4">
                    Industry-leading security practices and protocols.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">✓ Regular security audits</li>
                    <li className="flex items-center">✓ Penetration testing</li>
                    <li className="flex items-center">✓ Vulnerability assessments</li>
                    <li className="flex items-center">✓ Security documentation</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to secure your infrastructure?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contact our security team to learn more about our enterprise security solutions.
            </p>
            <Link href="/contact">
              <Button size="lg" className="cloudflare-button">Contact Security Team</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}