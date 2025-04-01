import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { constructMetadata } from "@/lib/metadata"
import { Shield, Globe, Lock, Zap, Server, Network, Cloud, Database, LineChart, Users, Bot, Workflow } from "lucide-react"

export const metadata = constructMetadata({
  title: "Solutions",
  description: "Discover our enterprise solutions for security, infrastructure, and performance optimization tailored to your business needs.",
  openGraph: {
    title: "Enterprise Solutions | Tonmoy I&V",
    description: "Discover our enterprise solutions for security, infrastructure, and performance optimization.",
  }
})

export default function Solutions() {
  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Enterprise-grade solutions for every need
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Protect, accelerate, and ensure the reliability of your online presence with our comprehensive suite of solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">DDoS Protection</h3>
                <p className="text-muted-foreground mb-4">
                  Enterprise-grade protection against distributed denial of service attacks.
                </p>
                <Link href="/solutions/ddos-protection">
                  <Button variant="outline" className="w-full">Learn more</Button>
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Globe className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">DNS Management</h3>
                <p className="text-muted-foreground mb-4">
                  Fast and reliable DNS with automatic failover and global coverage.
                </p>
                <Link href="/solutions/dns-management">
                  <Button variant="outline" className="w-full">Learn more</Button>
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Lock className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Web Security</h3>
                <p className="text-muted-foreground mb-4">
                  Protect your web applications from threats and vulnerabilities.
                </p>
                <Link href="/solutions/web-security">
                  <Button variant="outline" className="w-full">Learn more</Button>
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Zap className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Performance</h3>
                <p className="text-muted-foreground mb-4">
                  Optimize your website's speed and performance globally.
                </p>
                <Link href="/solutions/performance">
                  <Button variant="outline" className="w-full">Learn more</Button>
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Server className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Load Balancing</h3>
                <p className="text-muted-foreground mb-4">
                  Distribute traffic efficiently across your infrastructure.
                </p>
                <Link href="/solutions/load-balancing">
                  <Button variant="outline" className="w-full">Learn more</Button>
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Network className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Network Services</h3>
                <p className="text-muted-foreground mb-4">
                  Advanced networking solutions for enterprise needs.
                </p>
                <Link href="/solutions/network-services">
                  <Button variant="outline" className="w-full">Learn more</Button>
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Cloud className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Cloud Migration</h3>
                <p className="text-muted-foreground mb-4">
                  Seamless migration of your applications to the cloud infrastructure.
                </p>
                <Link href="/solutions/cloud-migration">
                  <Button variant="outline" className="w-full">Learn more</Button>
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Database className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Database Solutions</h3>
                <p className="text-muted-foreground mb-4">
                  Managed database services with high availability and scalability.
                </p>
                <Link href="/solutions/database-solutions">
                  <Button variant="outline" className="w-full">Learn more</Button>
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <LineChart className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Analytics & Monitoring</h3>
                <p className="text-muted-foreground mb-4">
                  Real-time insights and monitoring for your infrastructure.
                </p>
                <Link href="/solutions/analytics-monitoring">
                  <Button variant="outline" className="w-full">Learn more</Button>
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Users className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Identity Management</h3>
                <p className="text-muted-foreground mb-4">
                  Secure identity and access management solutions for enterprises.
                </p>
                <Link href="/solutions/identity-management">
                  <Button variant="outline" className="w-full">Learn more</Button>
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Bot className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">AI & Automation</h3>
                <p className="text-muted-foreground mb-4">
                  Intelligent automation and AI-powered solutions for your business.
                </p>
                <Link href="/solutions/ai-automation">
                  <Button variant="outline" className="w-full">Learn more</Button>
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Workflow className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">DevOps Solutions</h3>
                <p className="text-muted-foreground mb-4">
                  Streamline your development and operations with integrated tools.
                </p>
                <Link href="/solutions/devops">
                  <Button variant="outline" className="w-full">Learn more</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}