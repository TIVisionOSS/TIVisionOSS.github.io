"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Calendar, User, Tag } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    title: "Introducing Our New Cloud Security Features",
    excerpt: "Learn about the latest security enhancements to our cloud infrastructure platform, designed to protect your applications from emerging threats.",
    author: "Sarah Chen",
    role: "Security Engineer",
    date: "March 15, 2024",
    category: "Security",
    readTime: "5 min read"
  },
  {
    title: "Best Practices for DDoS Protection",
    excerpt: "A comprehensive guide to implementing effective DDoS protection strategies using our advanced mitigation tools.",
    author: "Michael Rodriguez",
    role: "Solutions Architect",
    date: "March 12, 2024",
    category: "Infrastructure",
    readTime: "8 min read"
  },
  {
    title: "Optimizing Database Performance at Scale",
    excerpt: "Discover proven techniques for optimizing database performance and maintaining reliability as your applications grow.",
    author: "Emily Watson",
    role: "Database Engineer",
    date: "March 10, 2024",
    category: "Performance",
    readTime: "6 min read"
  },
  {
    title: "The Future of Edge Computing",
    excerpt: "Explore how edge computing is transforming application delivery and learn how to leverage our global edge network.",
    author: "David Chen",
    role: "Product Manager",
    date: "March 8, 2024",
    category: "Innovation",
    readTime: "7 min read"
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Blog & Insights</h1>
            <p className="text-xl text-muted-foreground">
              Latest updates, best practices, and insights from our team of experts.
            </p>
          </div>

          <div className="grid gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-2xl font-semibold mb-3 hover:text-orange-600 transition-colors">
                    <Link href="#">{post.title}</Link>
                  </h2>
                  
                  <p className="text-muted-foreground mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="font-medium">{post.author}</p>
                        <p className="text-sm text-muted-foreground">{post.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      {post.date}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button className="cloudflare-button">
              Load More Articles
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
