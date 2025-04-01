import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, FileText, Video, Users } from "lucide-react"
import { constructMetadata } from "@/lib/metadata"

export const metadata = constructMetadata({
  title: "Resources",
  description: "Access documentation, tutorials, and resources to help you make the most of our enterprise security and infrastructure solutions.",
  openGraph: {
    title: "Resources & Documentation | Tonmoy I&V",
    description: "Access documentation, tutorials, and resources for our enterprise security and infrastructure solutions.",
  }
})

export default function Resources() {
  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Resources & Documentation
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Everything you need to get started and make the most of our services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardContent className="pt-6">
                <BookOpen className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Documentation</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive guides and API documentation for all our services.
                </p>
                <Link href="/resources/documentation">
                  <Button variant="outline" className="w-full">View docs</Button>
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Video className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Video Tutorials</h3>
                <p className="text-muted-foreground mb-4">
                  Learn through our video tutorials and webinars.
                </p>
                <Link href="/resources/tutorials">
                  <Button variant="outline" className="w-full">Watch tutorials</Button>
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <FileText className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Blog</h3>
                <p className="text-muted-foreground mb-4">
                  Latest updates, best practices, and industry insights.
                </p>
                <Link href="/resources/blog">
                  <Button variant="outline" className="w-full">Read blog</Button>
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Users className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p className="text-muted-foreground mb-4">
                  Join our community of developers and security professionals.
                </p>
                <Link href="/resources/community">
                  <Button variant="outline" className="w-full">Join community</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}