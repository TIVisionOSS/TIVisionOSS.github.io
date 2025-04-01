"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Shield } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-muted-foreground">
              Your privacy is important to us. This policy outlines how we collect, use, and protect your data.
            </p>
          </div>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Information Collection</h2>
              <p className="text-muted-foreground mb-4">
                We collect information that you provide directly to us when you:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Create an account or sign up for our services</li>
                <li>Contact us for support or inquiries</li>
                <li>Subscribe to our newsletters or updates</li>
                <li>Use our products and services</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Data Protection</h2>
              <p className="text-muted-foreground mb-4">
                We implement robust security measures to protect your data:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>End-to-end encryption for sensitive data</li>
                <li>Regular security audits and updates</li>
                <li>Strict access controls and authentication</li>
                <li>Compliance with industry security standards</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Data Usage</h2>
              <p className="text-muted-foreground mb-4">
                We use your information to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide and improve our services</li>
                <li>Communicate with you about your account</li>
                <li>Send important updates and notifications</li>
                <li>Analyze and enhance user experience</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Access your personal data</li>
                <li>Request data correction or deletion</li>
                <li>Opt-out of marketing communications</li>
                <li>Export your data in a portable format</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about our privacy policy, please contact us:
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