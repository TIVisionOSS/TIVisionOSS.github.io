import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Cloud, 
  Lock, 
  Zap, 
  Globe, 
  Database, 
  Shield, 
  Server, 
  Network,
  Mail,
  Phone,
  FileCode,
  Search,
  Bot,
  LineChart,
  Users
} from "lucide-react"

export default function Products() {
  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Products that power the internet
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              From cloud hosting to advanced security solutions, we provide the enterprise-grade tools you need to succeed online.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <Cloud className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Cloud Hosting</h3>
                <p className="text-muted-foreground mb-4">
                  Scalable and reliable cloud hosting solutions with global availability.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center">✓ Auto-scaling infrastructure</li>
                  <li className="flex items-center">✓ Global CDN integration</li>
                  <li className="flex items-center">✓ 24/7 monitoring</li>
                </ul>
                <Link href="/products/cloud-hosting">
                  <Button className="w-full">Learn more</Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Lock className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">SSL Certificates</h3>
                <p className="text-muted-foreground mb-4">
                  Secure your website with trusted SSL certificates.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center">✓ Domain validation</li>
                  <li className="flex items-center">✓ Wildcard certificates</li>
                  <li className="flex items-center">✓ Auto-renewal</li>
                </ul>
                <Link href="/products/ssl-certificates">
                  <Button className="w-full">Learn more</Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Zap className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">CDN</h3>
                <p className="text-muted-foreground mb-4">
                  Global content delivery network for faster websites.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center">✓ Global edge locations</li>
                  <li className="flex items-center">✓ Real-time analytics</li>
                  <li className="flex items-center">✓ DDoS protection</li>
                </ul>
                <Link href="/products/cdn">
                  <Button className="w-full">Learn more</Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Globe className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">DNS Services</h3>
                <p className="text-muted-foreground mb-4">
                  Enterprise DNS management with global availability.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center">✓ Anycast DNS</li>
                  <li className="flex items-center">✓ DNSSEC support</li>
                  <li className="flex items-center">✓ Load balancing</li>
                </ul>
                <Link href="/products/dns-services">
                  <Button className="w-full">Learn more</Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Database className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Database Services</h3>
                <p className="text-muted-foreground mb-4">
                  Managed database solutions for enterprise applications.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center">✓ Automated backups</li>
                  <li className="flex items-center">✓ High availability</li>
                  <li className="flex items-center">✓ Scaling options</li>
                </ul>
                <Link href="/products/database-services">
                  <Button className="w-full">Learn more</Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Security Suite</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive security solutions for your infrastructure.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center">✓ WAF protection</li>
                  <li className="flex items-center">✓ DDoS mitigation</li>
                  <li className="flex items-center">✓ Threat monitoring</li>
                </ul>
                <Link href="/products/security-suite">
                  <Button className="w-full">Learn more</Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Server className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Load Balancer</h3>
                <p className="text-muted-foreground mb-4">
                  Advanced load balancing for high-traffic applications.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center">✓ Global load balancing</li>
                  <li className="flex items-center">✓ Health monitoring</li>
                  <li className="flex items-center">✓ Traffic distribution</li>
                </ul>
                <Link href="/products/load-balancer">
                  <Button className="w-full">Learn more</Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Network className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Private Network</h3>
                <p className="text-muted-foreground mb-4">
                  Secure private networking solutions for enterprises.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center">✓ VPN services</li>
                  <li className="flex items-center">✓ MPLS networks</li>
                  <li className="flex items-center">✓ SD-WAN solutions</li>
                </ul>
                <Link href="/products/private-network">
                  <Button className="w-full">Learn more</Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Bot className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">AI Platform</h3>
                <p className="text-muted-foreground mb-4">
                  Enterprise AI and machine learning solutions.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center">✓ ML model deployment</li>
                  <li className="flex items-center">✓ AI-powered analytics</li>
                  <li className="flex items-center">✓ Custom AI solutions</li>
                </ul>
                <Link href="/products/ai-platform">
                  <Button className="w-full">Learn more</Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <LineChart className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Analytics</h3>
                <p className="text-muted-foreground mb-4">
                  Advanced analytics and monitoring platform.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center">✓ Real-time monitoring</li>
                  <li className="flex items-center">✓ Custom dashboards</li>
                  <li className="flex items-center">✓ Performance insights</li>
                </ul>
                <Link href="/products/analytics">
                  <Button className="w-full">Learn more</Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Users className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Identity Platform</h3>
                <p className="text-muted-foreground mb-4">
                  Enterprise identity and access management.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center">✓ SSO integration</li>
                  <li className="flex items-center">✓ Multi-factor auth</li>
                  <li className="flex items-center">✓ Identity federation</li>
                </ul>
                <Link href="/products/identity">
                  <Button className="w-full">Learn more</Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <FileCode className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Developer Tools</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive tools for developers and DevOps.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center">✓ API management</li>
                  <li className="flex items-center">✓ CI/CD pipelines</li>
                  <li className="flex items-center">✓ Code repositories</li>
                </ul>
                <Link href="/products/developer-tools">
                  <Button className="w-full">Learn more</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Choose the products that fit your needs and start building today.
            </p>
            <Link href="/signup">
              <Button size="lg" className="cloudflare-button">Start your free trial</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}