"use client"

import { useState } from "react"
import Link from "next/link"
import { siteConfig } from "@/lib/site"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Building03Icon,
  Briefcase01Icon,
  PackageIcon,
  Menu01Icon,
  Cancel01Icon,
} from "@hugeicons/core-free-icons"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background transition-colors">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-md font-heading text-2xl font-semibold tracking-tight text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          <HugeiconsIcon icon={Building03Icon} className="size-6" />
          <span className="hidden sm:inline">{siteConfig.name}</span>
          <span className="sm:hidden">The Desk</span>
        </Link>

        <nav
          className="hidden items-center gap-6 font-mono text-sm md:flex"
          aria-label="Main Navigation"
        >
          <Link
            href="/vendors"
            className="flex min-h-[44px] min-w-[44px] items-center justify-center gap-1.5 rounded-md text-muted-foreground transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            <HugeiconsIcon icon={PackageIcon} className="size-4" />
            Vendors
          </Link>
          <Link
            href="/jobs"
            className="flex min-h-[44px] min-w-[44px] items-center justify-center gap-1.5 rounded-md text-muted-foreground transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            <HugeiconsIcon icon={Briefcase01Icon} className="size-4" />
            Jobs
          </Link>
          <Link
            href="/about"
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            About
          </Link>
        </nav>

        <button
          className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <HugeiconsIcon icon={Cancel01Icon} className="size-6" />
          ) : (
            <HugeiconsIcon icon={Menu01Icon} className="size-6" />
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute left-0 w-full space-y-4 border-t border-border bg-background px-4 py-4 font-mono shadow-lg md:hidden">
          <Link
            href="/vendors"
            className="flex items-center gap-2 rounded-md p-3 text-foreground transition-colors hover:bg-muted/50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <HugeiconsIcon
              icon={PackageIcon}
              className="size-5 text-muted-foreground"
            />
            Vendors Directory
          </Link>
          <Link
            href="/jobs"
            className="flex items-center gap-2 rounded-md p-3 text-foreground transition-colors hover:bg-muted/50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <HugeiconsIcon
              icon={Briefcase01Icon}
              className="size-5 text-muted-foreground"
            />
            Jobs Board
          </Link>
          <Link
            href="/about"
            className="flex items-center gap-2 rounded-md p-3 text-foreground transition-colors hover:bg-muted/50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About The Desk
          </Link>
        </div>
      )}
    </header>
  )
}
