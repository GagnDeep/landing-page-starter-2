import * as React from "react"
import Link from "next/link"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-heading text-xl font-bold tracking-tight"
        >
          Institute of RIA
        </Link>
        <nav className="hidden gap-6 md:flex">
          <Link
            href="#programs"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Programs
          </Link>
          <Link
            href="#faculty"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Faculty
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
