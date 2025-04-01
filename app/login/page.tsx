"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Shield } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import data from "@/data/login.json"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Handle login logic here
      toast({
        title: "Success",
        description: "You have been successfully logged in.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Invalid email or password. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-orange-500 hover:opacity-90">
            <Shield className="h-8 w-8" />
            <span className="text-2xl font-bold">{data.hero.logo.text}</span>
          </Link>
          <h2 className="mt-6 text-3xl font-bold tracking-tight">
            {data.hero.title}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {data.hero.subtitle.text}{" "}
            <Link href={data.hero.subtitle.link.href} className="font-medium text-orange-500 hover:text-orange-600">
              {data.hero.subtitle.link.text}
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <Label htmlFor="email">{data.form.fields.email.label}</Label>
              <Input
                id="email"
                name="email"
                type={data.form.fields.email.type}
                autoComplete={data.form.fields.email.autoComplete}
                required={data.form.fields.email.required}
                placeholder={data.form.fields.email.placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="password">{data.form.fields.password.label}</Label>
              <Input
                id="password"
                name="password"
                type={data.form.fields.password.type}
                autoComplete={data.form.fields.password.autoComplete}
                required={data.form.fields.password.required}
                placeholder={data.form.fields.password.placeholder}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link href={data.form.forgotPassword.href} className="font-medium text-orange-500 hover:text-orange-600">
                {data.form.forgotPassword.text}
              </Link>
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full cloudflare-button"
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : data.form.button.text}
          </Button>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-background px-2 text-muted-foreground">
                {data.socialLogin.divider.text}
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {data.socialLogin.providers.map((provider, index) => (
              <Button key={index} variant={provider.variant as "outline"} className="w-full">
                {provider.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}