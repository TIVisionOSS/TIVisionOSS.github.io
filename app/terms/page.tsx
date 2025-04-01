"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Shield } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl text-muted-foreground">
              Please read these terms carefully before using our services.
            </p>
          </div>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground mb-4">
                By accessing and using Tonmoy Infrastructure & Vision&apos;s services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
              <p className="text-muted-foreground mb-4">
                Tonmoy Infrastructure & Vision provides enterprise-grade infrastructure and security solutions, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Cloud hosting and infrastructure services</li>
                <li>DDoS protection and security solutions</li>
                <li>Content delivery network services</li>
                <li>DNS management and optimization</li>
                <li>Database services and solutions</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">3. User Obligations</h2>
              <p className="text-muted-foreground mb-4">
                Users of our services agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of their account credentials</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Use services in accordance with acceptable use policies</li>
                <li>Report any security vulnerabilities or service issues promptly</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">4. Service Level Agreements</h2>
              <p className="text-muted-foreground mb-4">
                Our service level agreements (SLAs) include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>99.99% uptime guarantee for infrastructure services</li>
                <li>24/7 technical support availability</li>
                <li>Response time guarantees based on issue severity</li>
                <li>Data backup and recovery procedures</li>
                <li>Performance monitoring and optimization</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">5. Privacy and Data Protection</h2>
              <p className="text-muted-foreground mb-4">
                We are committed to protecting your privacy and handling your data securely. Our data protection measures include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>End-to-end encryption for sensitive data</li>
                <li>Regular security audits and updates</li>
                <li>Compliance with GDPR and other privacy regulations</li>
                <li>Transparent data handling practices</li>
                <li>User control over data storage and deletion</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">6. Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                For questions about these terms, please contact us:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p>Email: legal@tonmoyiv.com</p>
                <p>Address: 123 Tech Street, San Francisco, CA 94105</p>
                <p>Phone: +1 (888) 123-4567</p>
              </div>
            </CardContent>
          </Card>

          <p className="text-sm text-center text-muted-foreground mt-8">
            Last updated: March 15, 2024
          </p>
        </div>
      </div>
    </div>
  )
}