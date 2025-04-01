"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileCode, Terminal, GitBranch, Workflow } from "lucide-react"

export default function DeveloperToolsPage() {
  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Developer Tools
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Comprehensive development tools and APIs for seamless integration and efficient workflows.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link href="/signup">
                <Button size="lg" className="cloudflare-button">Get started</Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="cloudflare-outline-button">Contact sales</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardContent className="pt-6">
                <FileCode className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">API Management</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive API management and development tools.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center">✓ RESTful API support</li>
                  <li className="flex items-center">✓ API documentation</li>
                  <li className="flex items-center">✓ Rate limiting</li>
                  <li className="flex items-center">✓ Version control</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Terminal className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">CLI Tools</h3>
                <p className="text-muted-foreground mb-4">
                  Powerful command-line tools for automation and management.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center">✓ Automated deployments</li>
                  <li className="flex items-center">✓ Configuration management</li>
                  <li className="flex items-center">✓ Resource provisioning</li>
                  <li className="flex items-center">✓ Scripting capabilities</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <GitBranch className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Version Control</h3>
                <p className="text-muted-foreground mb-4">
                  Integrated version control and collaboration features.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center">✓ Git integration</li>
                  <li className="flex items-center">✓ Code review tools</li>
                  <li className="flex items-center">✓ Branch management</li>
                  <li className="flex items-center">✓ Release tracking</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Workflow className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">CI/CD Integration</h3>
                <p className="text-muted-foreground mb-4">
                  Seamless integration with CI/CD pipelines and workflows.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center">✓ Pipeline automation</li>
                  <li className="flex items-center">✓ Build management</li>
                  <li className="flex items-center">✓ Deployment controls</li>
                  <li className="flex items-center">✓ Testing frameworks</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-orange-500/5 via-orange-500/10 to-orange-600/5">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-3 text-center">
            <div className="relative">
              <div className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">
                99.99%
              </div>
              <div className="text-xl text-muted-foreground font-medium">
                API Uptime
              </div>
            </div>
            <div className="relative">
              <div className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">
                50M+
              </div>
              <div className="text-xl text-muted-foreground font-medium">
                API Requests Daily
              </div>
            </div>
            <div className="relative">
              <div className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">
                24/7
              </div>
              <div className="text-xl text-muted-foreground font-medium">
                Developer Support
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to start building?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get started with our developer tools and build amazing applications today.
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