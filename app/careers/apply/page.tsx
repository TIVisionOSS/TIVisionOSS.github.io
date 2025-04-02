"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Briefcase, Upload } from "lucide-react"
import { motion } from "framer-motion"
import data from "@/data/careers/apply.json"

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
            <h1 className="text-4xl font-bold mb-4">{data.hero.title}</h1>
            <p className="text-xl text-muted-foreground">
              {data.hero.description}
            </p>
          </motion.div>

          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <Label htmlFor="firstName">{data.form.fields.firstName.label}</Label>
                    <Input
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required={data.form.fields.firstName.required}
                      placeholder={data.form.fields.firstName.placeholder}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">{data.form.fields.lastName.label}</Label>
                    <Input
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required={data.form.fields.lastName.required}
                      placeholder={data.form.fields.lastName.placeholder}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <Label htmlFor="email">{data.form.fields.email.label}</Label>
                    <Input
                      id="email"
                      type={data.form.fields.email.type}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required={data.form.fields.email.required}
                      placeholder={data.form.fields.email.placeholder}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">{data.form.fields.phone.label}</Label>
                    <Input
                      id="phone"
                      type={data.form.fields.phone.type}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required={data.form.fields.phone.required}
                      placeholder={data.form.fields.phone.placeholder}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <Label htmlFor="position">{data.form.fields.position.label}</Label>
                    <Input
                      id="position"
                      value={position}
                      onChange={(e) => setPosition(e.target.value)}
                      required={data.form.fields.position.required}
                      placeholder={data.form.fields.position.placeholder}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="location">{data.form.fields.location.label}</Label>
                    <Input
                      id="location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      required={data.form.fields.location.required}
                      placeholder={data.form.fields.location.placeholder}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="experience">{data.form.fields.experience.label}</Label>
                  <Input
                    id="experience"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    required={data.form.fields.experience.required}
                    placeholder={data.form.fields.experience.placeholder}
                    className="mt-1"
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <Label htmlFor="linkedin">{data.form.fields.linkedin.label}</Label>
                    <Input
                      id="linkedin"
                      type={data.form.fields.linkedin.type}
                      value={linkedin}
                      onChange={(e) => setLinkedin(e.target.value)}
                      required={data.form.fields.linkedin.required}
                      placeholder={data.form.fields.linkedin.placeholder}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="portfolio">{data.form.fields.portfolio.label}</Label>
                    <Input
                      id="portfolio"
                      type={data.form.fields.portfolio.type}
                      value={portfolio}
                      onChange={(e) => setPortfolio(e.target.value)}
                      required={data.form.fields.portfolio.required}
                      placeholder={data.form.fields.portfolio.placeholder}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="coverLetter">{data.form.fields.coverLetter.label}</Label>
                  <textarea
                    id="coverLetter"
                    value={coverLetter}
                    onChange={(e) => setCoverLetter(e.target.value)}
                    required={data.form.fields.coverLetter.required}
                    placeholder={data.form.fields.coverLetter.placeholder}
                    className="mt-1 w-full min-h-[200px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>

                <div>
                  <Label htmlFor="resume">{data.form.fields.resume.label}</Label>
                  <div className="mt-1">
                    <div className="flex items-center justify-center w-full">
                      <label className="w-full flex flex-col items-center px-4 py-6 bg-background text-primary rounded-lg border-2 border-primary/20 border-dashed cursor-pointer hover:border-primary/40 transition-colors">
                        <Upload className="h-8 w-8 mb-2" />
                        <span className="text-sm">{data.form.fields.resume.description}</span>
                        <input 
                          id="resume" 
                          type="file" 
                          className="hidden" 
                          accept={data.form.fields.resume.accept}
                          required={data.form.fields.resume.required}
                        />
                      </label>
                    </div>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 text-lg cloudflare-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? data.form.button.loadingText : data.form.button.text}
                </Button>

                <p className="text-sm text-center text-muted-foreground">
                  {data.form.privacyNotice.text}{" "}
                  {data.form.privacyNotice.links.map((link, index) => (
                    <span key={link.href}>
                      {index > 0 && " and "}
                      <Link href={link.href} className="text-primary hover:underline">
                        {link.text}
                      </Link>
                    </span>
                  ))}.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}