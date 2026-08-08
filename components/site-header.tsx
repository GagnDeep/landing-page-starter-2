import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 max-w-6xl items-center px-4 md:px-6">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-primary">AI Wire Harness</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="#features"
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              How it Works
            </Link>
            <Link
              href="#pricing"
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Pricing
            </Link>
          </nav>
        </div>
        <div className="ml-auto flex items-center space-x-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/login">Log in</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/get-started">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
