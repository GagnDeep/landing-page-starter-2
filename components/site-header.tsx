import Link from "next/link"

import { siteContent } from "@/content"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 max-w-7xl items-center px-4 md:px-8">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-heading font-bold sm:inline-block">
              {siteContent.brand}
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="#product"
              className="text-foreground/60 transition-colors hover:text-foreground"
            >
              Product
            </Link>
            <Link
              href="#pricing"
              className="text-foreground/60 transition-colors hover:text-foreground"
            >
              Pricing
            </Link>
            <Link
              href="#docs"
              className="text-foreground/60 transition-colors hover:text-foreground"
            >
              Docs
            </Link>
            <Link
              href="#blog"
              className="text-foreground/60 transition-colors hover:text-foreground"
            >
              Blog
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Link
              href="#signin"
              className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
            >
              Sign in
            </Link>
            <Button size="sm" asChild>
              <Link href="#get-started">Get started</Link>
            </Button>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
