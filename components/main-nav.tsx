"use client"

import * as React from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Shield } from "lucide-react"
import { SolutionsNav } from "./navigation/solutions-nav"
import { ProductsNav } from "./navigation/products-nav"

export function MainNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-90">
            <Shield className="h-8 w-8 text-orange-500" />
            <span className="font-bold text-xl">Tonmoy I&V</span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              <SolutionsNav />
              <ProductsNav />
              <NavigationMenuItem>
                <Link href="/resources" legacyBehavior passHref>
                  <NavigationMenuLink className="h-9 px-4 text-sm font-medium hover:text-orange-500 transition-colors">
                    Resources
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/partners" legacyBehavior passHref>
                  <NavigationMenuLink className="h-9 px-4 text-sm font-medium hover:text-orange-500 transition-colors">
                    Partners
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/login">
            <Button variant="ghost" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Log in
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="cloudflare-button text-sm font-medium px-6">
              Sign up
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}