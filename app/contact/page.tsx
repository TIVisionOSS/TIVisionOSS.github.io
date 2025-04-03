"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MessageSquare, Building } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import emailjs from '@emailjs/browser'
import data from "@/data/contact.json"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: name,
          from_email: email,
          company,
          message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )

      toast({
        title: "Message sent successfully",
        description: "We'll get back to you as soon as possible.",
      })

      // Reset form
      setName("")
      setEmail("")
      setCompany("")
      setMessage("")
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col">
      <section className="relative py-24 md:py-36 bg-gradient-to-b from-primary/10 to-background overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,transparent)]" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              {data.hero.title}
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              {data.hero.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            {data.contactCards.map((card, index) => {
              const Icon = {
                Phone,
                MessageSquare,
                Building
              }[card.icon as "Phone" | "MessageSquare" | "Building"]

              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent className="pt-8 pb-6 px-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{card.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {card.description}
                    </p>
                    <p className="text-sm whitespace-pre-line font-medium">{card.contact}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="mt-16 md:mt-24">
            <Card className="border-none shadow-xl">
              <CardContent className="p-8 md:p-12">
                <div className="max-w-2xl mx-auto">
                  <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold mb-2">{data.form.title}</h2>
                    <p className="text-muted-foreground">We typically respond within 24 hours</p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">{data.form.fields.name.label}</Label>
                      <Input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={data.form.fields.name.placeholder}
                        className="mt-1"
                        required={data.form.fields.name.required}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{data.form.fields.email.label}</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={data.form.fields.email.placeholder}
                        className="mt-1"
                        required={data.form.fields.email.required}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">{data.form.fields.company.label}</Label>
                      <Input
                        id="company"
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder={data.form.fields.company.placeholder}
                        className="mt-1"
                        required={data.form.fields.company.required}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">{data.form.fields.message.label}</Label>
                      <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder={data.form.fields.message.placeholder}
                        className="mt-1 w-full min-h-[150px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        required={data.form.fields.message.required}
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full h-12 text-lg transition-all duration-300 hover:shadow-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        data.form.button.text
                      )}
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}