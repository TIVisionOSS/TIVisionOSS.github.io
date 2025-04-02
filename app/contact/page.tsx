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
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              {data.hero.title}
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              {data.hero.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-3">
            {data.contactCards.map((card, index) => {
              const Icon = {
                Phone,
                MessageSquare,
                Building
              }[card.icon as "Phone" | "MessageSquare" | "Building"]

              return (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <Icon className="h-12 w-12 mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {card.description}
                    </p>
                    <p className="text-sm whitespace-pre-line">{card.contact}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="mt-20">
            <Card>
              <CardContent className="p-8">
                <div className="max-w-2xl mx-auto">
                  <h2 className="text-3xl font-bold text-center mb-8">{data.form.title}</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
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
                    <div>
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
                    <div>
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
                    <div>
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
                      className="w-full cloudflare-button"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : data.form.button.text}
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