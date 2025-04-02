"use client"

import * as React from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Shield, Menu, X } from "lucide-react"
import { SolutionsNav } from "./navigation/solutions-nav"
import { ProductsNav } from "./navigation/products-nav"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function MainNav() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <nav className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link 
            href="/" 
            className="flex items-center gap-2 transition-all duration-300 hover:scale-105"
          >
            <Shield className="h-8 w-8 text-orange-500" />
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-xl font-bold text-transparent">
              Tonmoy I&V
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                <SolutionsNav />
                <ProductsNav />
                <NavigationMenuItem>
                  <Link href="/pricing" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-orange-50 hover:text-orange-600 focus:bg-orange-50 focus:text-orange-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      Pricing
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/case-studies" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-orange-50 hover:text-orange-600 focus:bg-orange-50 focus:text-orange-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      Case Studies
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/resources" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-orange-50 hover:text-orange-600 focus:bg-orange-50 focus:text-orange-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      Resources
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/partners" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-orange-50 hover:text-orange-600 focus:bg-orange-50 focus:text-orange-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      Partners
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/support" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-orange-50 hover:text-orange-600 focus:bg-orange-50 focus:text-orange-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      Support
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <Link href="/login">
            <Button 
              variant="ghost" 
              className="relative text-sm font-medium transition-colors hover:bg-orange-50 hover:text-orange-600 focus:bg-orange-50 focus:text-orange-600"
            >
              Log in
            </Button>
          </Link>
          <Link href="/signup">
            <Button 
              className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
            >
              Sign up
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-orange-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="h-6 w-6 text-orange-500" />
          ) : (
            <Menu className="h-6 w-6 text-orange-500" />
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-x-0 top-[64px] p-4 bg-background border-b md:hidden",
            "transition-all duration-300 ease-in-out",
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
          )}
        >
          <div className="space-y-4">
            <Link 
              href="/solutions"
              className="block px-4 py-2 text-sm font-medium rounded-md hover:bg-orange-50 hover:text-orange-600"
            >
              Solutions
            </Link>
            <Link 
              href="/products"
              className="block px-4 py-2 text-sm font-medium rounded-md hover:bg-orange-50 hover:text-orange-600"
            >
              Products
            </Link>
            <Link 
              href="/pricing"
              className="block px-4 py-2 text-sm font-medium rounded-md hover:bg-orange-50 hover:text-orange-600"
            >
              Pricing
            </Link>
            <Link 
              href="/case-studies"
              className="block px-4 py-2 text-sm font-medium rounded-md hover:bg-orange-50 hover:text-orange-600"
            >
              Case Studies
            </Link>
            <Link 
              href="/resources"
              className="block px-4 py-2 text-sm font-medium rounded-md hover:bg-orange-50 hover:text-orange-600"
            >
              Resources
            </Link>
            <Link 
              href="/partners"
              className="block px-4 py-2 text-sm font-medium rounded-md hover:bg-orange-50 hover:text-orange-600"
            >
              Partners
            </Link>
            <Link 
              href="/support"
              className="block px-4 py-2 text-sm font-medium rounded-md hover:bg-orange-50 hover:text-orange-600"
            >
              Support
            </Link>
            <div className="pt-4 border-t">
              <Link href="/login">
                <Button 
                  variant="ghost"
                  className="w-full mb-2 justify-center"
                >
                  Log in
                </Button>
              </Link>
              <Link href="/signup">
                <Button 
                  className="w-full justify-center cloudflare-button"
                >
                  Sign up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </motion.header>
  )
}