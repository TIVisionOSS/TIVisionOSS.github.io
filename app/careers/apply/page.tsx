"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Briefcase, Upload } from "lucide-react"
import { motion } from "framer-motion"

export default function CareersApplyPage() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [position, setPosition] = useState("")
  const [location, setLocation] = useState("")
  const [experience, setExperience] = useState("")
  const [linkedin, setLinkedin] = useState("")
  const [portfolio, setPortfolio] = useState("")
  const [coverLetter, setCoverLetter] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Here you would typically send the application data to your backend
      await new Promise(resolve => setTimeout(resolve, 1500)) // Simulated API call

      toast({
        title: "Application submitted successfully",
        description: "We'll review your application and get back to you soon.",
      })

      // Reset form
      setFirstName("")
      setLastName("")
      setEmail("")
      setPhone("")
      setPosition("")
      setLocation("")
      setExperience("")
      setLinkedin("")
      setPortfolio("")
      setCoverLetter("")
    } catch (error) {
      toast({
        title: "Error submitting application",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Apply for a Position</h1>
            <p className="text-xl text-muted-foreground">
              Take the next step in your career and join our team of innovators.
            </p>
          </motion.div>

          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <Label htmlFor="position">Position</Label>
                    <Input
                      id="position"
                      value={position}
                      onChange={(e) => setPosition(e.target.value)}
                      required
                      className="mt-1"
                      placeholder="Position you're applying for"
                    />
                  </div>
                  <div>
                    <Label htmlFor="location">Preferred Location</Label>
                    <Input
                      id="location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      required
                      className="mt-1"
                      placeholder="City, Country or Remote"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="experience">Years of Experience</Label>
                  <Input
                    id="experience"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    required
                    className="mt-1"
                    placeholder="e.g., 5 years"
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <Label htmlFor="linkedin">LinkedIn Profile</Label>
                    <Input
                      id="linkedin"
                      type="url"
                      value={linkedin}
                      onChange={(e) => setLinkedin(e.target.value)}
                      className="mt-1"
                      placeholder="https://linkedin.com/in/..."
                    />
                  </div>
                  <div>
                    <Label htmlFor="portfolio">Portfolio/Website</Label>
                    <Input
                      id="portfolio"
                      type="url"
                      value={portfolio}
                      onChange={(e) => setPortfolio(e.target.value)}
                      className="mt-1"
                      placeholder="https://..."
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="coverLetter">Cover Letter</Label>
                  <textarea
                    id="coverLetter"
                    value={coverLetter}
                    onChange={(e) => setCoverLetter(e.target.value)}
                    required
                    className="mt-1 w-full min-h-[200px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tell us about yourself and why you're interested in this position..."
                  />
                </div>

                <div>
                  <Label htmlFor="resume">Resume/CV</Label>
                  <div className="mt-1">
                    <div className="flex items-center justify-center w-full">
                      <label className="w-full flex flex-col items-center px-4 py-6 bg-background text-primary rounded-lg border-2 border-primary/20 border-dashed cursor-pointer hover:border-primary/40 transition-colors">
                        <Upload className="h-8 w-8 mb-2" />
                        <span className="text-sm">Upload your resume (PDF, DOC, DOCX)</span>
                        <input id="resume" type="file" className="hidden" accept=".pdf,.doc,.docx" required />
                      </label>
                    </div>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 text-lg cloudflare-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting application..." : "Submit Application"}
                </Button>

                <p className="text-sm text-center text-muted-foreground">
                  By submitting this application, you agree to our{" "}
                  <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
                  {" "}and{" "}
                  <a href="/terms" className="text-primary hover:underline">Terms of Service</a>.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
