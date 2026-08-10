"use client"

import { siteConfig } from "@/lib/site"
import Link from "next/link"

export function Header() {
  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/states", label: "States" },
    { href: "/software", label: "Software" },
    { href: "/templates", label: "Templates" },
    { href: "/pricing-calculator", label: "Pricing" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex flex-wrap items-center justify-between px-4 py-3 md:h-16 md:px-8 md:py-0">
        <Link
          href="/"
          className="flex min-h-[44px] items-center space-x-2 rounded-sm p-1 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background"
        >
          <span className="line-clamp-1 font-heading text-lg font-bold break-words sm:inline-block">
            {siteConfig.name}
          </span>
        </Link>

        {/* Navigation - Always visible but wraps and adjusts styling for mobile */}
        <nav className="mt-2 flex w-full flex-wrap items-center gap-x-4 gap-y-2 border-t border-border/50 pt-2 pb-1 text-sm font-medium md:mt-0 md:w-auto md:border-none md:pt-0 md:pb-0">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex min-h-[44px] items-center justify-center rounded-md bg-muted/30 p-2 text-foreground/80 transition-colors outline-none hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 md:bg-transparent"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
