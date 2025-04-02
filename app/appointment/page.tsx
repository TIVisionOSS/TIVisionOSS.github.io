"use client"

import { useState } from "react"
import Image from "next/image"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Shield, Calendar as CalendarIcon, Clock, MapPin, Globe, Mail } from "lucide-react"
import emailjs from '@emailjs/browser'
import data from "@/data/appointment.json"

const icons = {
  Globe,
  Shield,
  Mail,
  MapPin,
  Clock
}

export default function AppointmentPage() {
  const [date, setDate] = useState<Date>()
  const [timeSlot, setTimeSlot] = useState<string>("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [topic, setTopic] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!date || !timeSlot) {
      toast({
        title: "Please select a date and time",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: name,
          from_email: email,
          company,
          appointment_date: date.toLocaleDateString(),
          appointment_time: timeSlot,
          meeting_topic: topic,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )

      toast({
        title: "Appointment request sent successfully",
        description: "We'll confirm your appointment shortly.",
      })

      // Reset form
      setDate(undefined)
      setTimeSlot("")
      setName("")
      setEmail("")
      setCompany("")
      setTopic("")
    } catch (error) {
      toast({
        title: "Error sending appointment request",
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
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* CEO Information Section */}
            <div>
              <div className="sticky top-24">
                <div className="text-center mb-8">
                  <div className="relative w-48 h-48 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full opacity-10 animate-pulse" />
                    <Image
                      src={data.ceo.image}
                      alt={data.ceo.name}
                      width={192}
                      height={192}
                      className="rounded-full w-full h-full object-cover border-4 border-orange-500/20"
                    />
                  </div>
                  <h2 className="text-3xl font-bold mb-2">{data.ceo.name}</h2>
                  <p className="text-xl text-orange-500 font-semibold mb-4">{data.ceo.role}</p>
                </div>

                <Card className="overflow-hidden bg-gradient-to-br from-orange-500/5 to-orange-600/5 border-orange-500/20">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {data.ceo.details.map((detail, index) => {
                        const Icon = icons[detail.icon as keyof typeof icons]
                        return (
                          <div key={index} className="flex items-center gap-3 text-muted-foreground">
                            <Icon className="h-5 w-5 text-orange-500" />
                            <span>{detail.text}</span>
                          </div>
                        )
                      })}
                    </div>

                    <div className="mt-6 p-4 bg-orange-500/5 rounded-lg border border-orange-500/10">
                      <p className="text-sm text-muted-foreground italic">
                        {data.ceo.quote}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Appointment Form Section */}
            <div>
              <Card className="border-orange-500/20">
                <CardContent className="p-6">
                  <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold mb-4">{data.form.title}</h1>
                    <p className="text-lg text-muted-foreground">
                      {data.form.subtitle}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <Label>{data.form.fields.date.label}</Label>
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          className="rounded-md border mt-2"
                          disabled={(date) => {
                            const today = new Date()
                            today.setHours(0, 0, 0, 0)
                            return (
                              date < today ||
                              date.getDay() === 0 ||
                              date.getDay() === 6
                            )
                          }}
                        />
                      </div>
                      <div>
                        <Label>{data.form.fields.time.label}</Label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
                          {data.timeSlots.map((slot) => (
                            <Button
                              key={slot}
                              type="button"
                              variant={timeSlot === slot ? "default" : "outline"}
                              className={`w-full ${timeSlot === slot ? 'bg-orange-500 hover:bg-orange-600' : 'hover:border-orange-500 hover:text-orange-500'}`}
                              onClick={() => setTimeSlot(slot)}
                            >
                              {slot}
                            </Button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="name">{data.form.fields.name.label}</Label>
                        <Input
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required={data.form.fields.name.required}
                          className="mt-1"
                          placeholder={data.form.fields.name.placeholder}
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">{data.form.fields.email.label}</Label>
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required={data.form.fields.email.required}
                          className="mt-1"
                          placeholder={data.form.fields.email.placeholder}
                        />
                      </div>
                      <div>
                        <Label htmlFor="company">{data.form.fields.company.label}</Label>
                        <Input
                          id="company"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          required={data.form.fields.company.required}
                          className="mt-1"
                          placeholder={data.form.fields.company.placeholder}
                        />
                      </div>
                      <div>
                        <Label htmlFor="topic">{data.form.fields.topic.label}</Label>
                        <Input
                          id="topic"
                          value={topic}
                          onChange={(e) => setTopic(e.target.value)}
                          required={data.form.fields.topic.required}
                          className="mt-1"
                          placeholder={data.form.fields.topic.placeholder}
                        />
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full h-12 text-lg bg-orange-500 hover:bg-orange-600"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? data.form.button.loadingText : data.form.button.text}
                    </Button>

                    <p className="text-sm text-center text-muted-foreground mt-4">
                      {data.form.confirmation}
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}