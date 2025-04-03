"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Shield } from "lucide-react"
import { ArrowUpRight } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container max-w-6xl">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your privacy is our top priority. This policy explains how we collect, use, and protect your personal information.
            </p>
          </div>

          <div className="space-y-8">
            <Card className="first:mb-8">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-2 w-12 bg-primary rounded-full" />
                  <h2 className="text-2xl font-semibold">Information We Collect</h2>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-muted-background rounded-lg">
                    <h3 className="font-medium mb-2">Personal Information</h3>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Name and email address</li>
                      <li>Phone number</li>
                      <li>Company name</li>
                      <li>Job title</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-muted-background rounded-lg">
                    <h3 className="font-medium mb-2">Non-Personal Information</h3>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Device information (IP address, browser type)</li>
                      <li>Usage data (pages visited, features used)</li>
                      <li>Cookie identifiers</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-2 w-12 bg-primary rounded-full" />
                  <h2 className="text-2xl font-semibold">How We Use Your Data</h2>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-muted-background rounded-lg">
                    <h3 className="font-medium mb-2">To Provide Services</h3>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Authenticate your account</li>
                      <li>Process payments securely</li>
                      <li>Provide customer support</li>
                      <li>Deliver products and services</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-muted-background rounded-lg">
                    <h3 className="font-medium mb-2">For Improvement</h3>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Analyze usage patterns</li>
                      <li>Develop new features</li>
                      <li>Enhance security measures</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-2 w-12 bg-primary rounded-full" />
                  <h2 className="text-2xl font-semibold">Data Security</h2>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-muted-background rounded-lg">
                    <h3 className="font-medium mb-2">Security Measures</h3>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>End-to-end encryption (TLS 1.3)</li>
                      <li>Regular security audits</li>
                      <li>Third-party security certifications</li>
                      <li>Employee access controls</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-muted-background rounded-lg">
                    <h3 className="font-medium mb-2">Data Retention</h3>
                    <p className="text-muted-foreground">
                      We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, or until you request deletion of your account.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-2 w-12 bg-primary rounded-full" />
                  <h2 className="text-2xl font-semibold">Your Rights</h2>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-muted-background rounded-lg">
                    <h3 className="font-medium mb-2">Access and Control</h3>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Access your personal data</li>
                      <li>Request data correction</li>
                      <li>Delete your account</li>
                      <li>Opt-out of marketing</li>
                      <li>Export your data</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-muted-background rounded-lg">
                    <h3 className="font-medium mb-2">Cookie Management</h3>
                    <p className="text-muted-foreground">
                      You can manage cookies through your browser settings or through our cookie consent manager.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-2 w-12 bg-primary rounded-full" />
                  <h2 className="text-2xl font-semibold">Legal Compliance</h2>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-muted-background rounded-lg">
                    <h3 className="font-medium mb-2">Regulations</h3>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>GDPR (General Data Protection Regulation)</li>
                      <li>CCPA (California Consumer Privacy Act)</li>
                      <li>Other applicable data protection laws</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-muted-background rounded-lg">
                    <h3 className="font-medium mb-2">Third-Party Sharing</h3>
                    <p className="text-muted-foreground">
                      We only share data with vetted third-party service providers necessary for our operations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-2 w-12 bg-primary rounded-full" />
                  <h2 className="text-2xl font-semibold">Contact Us</h2>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-muted-background rounded-lg">
                    <h3 className="font-medium mb-2">Privacy Team</h3>
                    <p className="text-muted-foreground">
                      For any privacy-related questions or requests, please contact our Data Protection Officer:
                    </p>
                    <div className="mt-2 space-y-1">
                      <p className="text-muted-foreground">
                        <span className="font-medium">Email:</span>{" "}
                        <a href="mailto:privacy@tonmoyiv.com" className="text-primary hover:text-primary-foreground">
                          privacy@tonmoyiv.com
                        </a>
                      </p>
                      <p className="text-muted-foreground">
                        <span className="font-medium">Phone:</span>{" "}
                        +1 (888) 123-4567
                      </p>
                      <p className="text-muted-foreground">
                        <span className="font-medium">Address:</span>{" "}
                        123 Tech Street, Suite 400
                        <br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-muted-background rounded-lg">
                    <p className="text-muted-foreground">
                      We aim to respond to all requests within 30 days. For more information about your rights and how to exercise them, please visit our{" "}
                      <Link href="/terms" className="text-primary hover:text-primary-foreground">
                        Terms of Service
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Last updated: March 15, 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}