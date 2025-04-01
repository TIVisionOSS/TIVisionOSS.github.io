"use client"

import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Code, FileText, Terminal } from "lucide-react"

export default function DocumentationPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Documentation</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive guides and technical documentation for our products and services.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardContent className="pt-6">
                <Code className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">API Reference</h3>
                <p className="text-muted-foreground mb-4">
                  Complete API documentation with examples and integration guides.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">✓ RESTful API endpoints</li>
                  <li className="flex items-center">✓ Authentication methods</li>
                  <li className="flex items-center">✓ Rate limiting guidelines</li>
                  <li className="flex items-center">✓ Response formats</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Terminal className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">SDK Documentation</h3>
                <p className="text-muted-foreground mb-4">
                  Detailed documentation for our client libraries and SDKs.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">✓ Installation guides</li>
                  <li className="flex items-center">✓ Code examples</li>
                  <li className="flex items-center">✓ Best practices</li>
                  <li className="flex items-center">✓ Troubleshooting</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <FileText className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">User Guides</h3>
                <p className="text-muted-foreground mb-4">
                  Step-by-step guides for using our products and features.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">✓ Getting started</li>
                  <li className="flex items-center">✓ Configuration guides</li>
                  <li className="flex items-center">✓ Feature tutorials</li>
                  <li className="flex items-center">✓ FAQs</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <BookOpen className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Release Notes</h3>
                <p className="text-muted-foreground mb-4">
                  Latest updates, changes, and improvements to our products.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">✓ Version history</li>
                  <li className="flex items-center">✓ New features</li>
                  <li className="flex items-center">✓ Bug fixes</li>
                  <li className="flex items-center">✓ Deprecation notices</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Need help? Contact our{" "}
              <a href="/contact" className="text-primary hover:underline">
                support team
              </a>{" "}
              for assistance.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}