"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Shield } from "lucide-react"

export default function CookiesPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
            <p className="text-xl text-muted-foreground">
              Learn about how we use cookies to improve your experience.
            </p>
          </div>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">What Are Cookies?</h2>
              <p className="text-muted-foreground mb-4">
                Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, analyzing site usage, and assisting with our marketing efforts.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Essential Cookies</h3>
                  <p className="text-muted-foreground">
                    These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Analytics Cookies</h3>
                  <p className="text-muted-foreground">
                    We use analytics cookies to understand how visitors interact with our website, helping us improve our services and user experience.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Marketing Cookies</h3>
                  <p className="text-muted-foreground">
                    These cookies track your online activity to help advertisers deliver more relevant advertising or to limit how many times you see an ad.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>To remember your preferences and settings</li>
                <li>To understand how you use our website</li>
                <li>To improve our services and user experience</li>
                <li>To provide personalized content and advertising</li>
                <li>To ensure the security of your account</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
              <p className="text-muted-foreground mb-4">
                You can control and manage cookies in various ways:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Browser settings to block or delete cookies</li>
                <li>Cookie consent preferences on our website</li>
                <li>Third-party opt-out mechanisms</li>
                <li>Private browsing modes</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Please note that blocking some types of cookies may impact your experience on our website.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Third-Party Cookies</h2>
              <p className="text-muted-foreground mb-4">
                Some cookies are placed by third-party services that appear on our pages. We use these services to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Analyze site traffic and user behavior</li>
                <li>Provide social media features</li>
                <li>Deliver relevant advertising</li>
                <li>Monitor site performance</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about our cookie policy, please contact us:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p>Email: privacy@tonmoyiv.com</p>
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
