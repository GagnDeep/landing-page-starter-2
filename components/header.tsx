import { siteConfig } from "@/lib/site"
import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center px-4 md:px-8">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-heading font-bold sm:inline-block">
              {siteConfig.name}
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/about"
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              About
            </Link>
            <Link
              href="/states"
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              States
            </Link>
            <Link
              href="/software"
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Software
            </Link>
            <Link
              href="/templates"
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Templates
            </Link>
            <Link
              href="/pricing-calculator"
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Pricing
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
