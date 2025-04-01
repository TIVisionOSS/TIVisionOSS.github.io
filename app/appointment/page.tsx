"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Shield, Calendar as CalendarIcon, Clock, MapPin, Globe, Mail } from "lucide-react"
import emailjs from '@emailjs/browser'

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM",
  "02:00 PM", "03:00 PM", "04:00 PM"
]

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
                    <img
                      src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80"
                      alt="Eshan Roy"
                      className="rounded-full w-full h-full object-cover border-4 border-orange-500/20"
                    />
                  </div>
                  <h2 className="text-3xl font-bold mb-2">Eshan Roy</h2>
                  <p className="text-xl text-orange-500 font-semibold mb-4">CEO, Tonmoy Infrastructure & Vision</p>
                </div>

                <Card className="overflow-hidden bg-gradient-to-br from-orange-500/5 to-orange-600/5 border-orange-500/20">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Globe className="h-5 w-5 text-orange-500" />
                        <span>15+ years of industry experience</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Shield className="h-5 w-5 text-orange-500" />
                        <span>Expert in infrastructure security & scaling</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Mail className="h-5 w-5 text-orange-500" />
                        <span>eshan.roy@tonmoyiv.com</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <MapPin className="h-5 w-5 text-orange-500" />
                        <span>San Francisco, CA</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Clock className="h-5 w-5 text-orange-500" />
                        <span>Available Mon-Fri, 9 AM - 5 PM PST</span>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-orange-500/5 rounded-lg border border-orange-500/10">
                      <p className="text-sm text-muted-foreground italic">
                        "I'm looking forward to discussing how we can help secure and scale your infrastructure. Book a meeting to explore solutions tailored to your needs."
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
                    <h1 className="text-3xl font-bold mb-4">Schedule a Meeting</h1>
                    <p className="text-lg text-muted-foreground">
                      Book a one-on-one consultation to discuss your infrastructure needs
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <Label>Select Date</Label>
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
                        <Label>Select Time (PST)</Label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
                          {timeSlots.map((slot) => (
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
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          className="mt-1"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="mt-1"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          required
                          className="mt-1"
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="topic">Meeting Topic</Label>
                        <Input
                          id="topic"
                          value={topic}
                          onChange={(e) => setTopic(e.target.value)}
                          required
                          className="mt-1"
                          placeholder="Brief description of what you'd like to discuss"
                        />
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full h-12 text-lg bg-orange-500 hover:bg-orange-600"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending request..." : "Request Appointment"}
                    </Button>

                    <p className="text-sm text-center text-muted-foreground mt-4">
                      You'll receive a confirmation email once your appointment is scheduled
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