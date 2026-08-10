"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import { HugeiconsIcon } from "@hugeicons/react"
import { Menu01Icon, Cancel01Icon } from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <Link
          href="/"
          className="rounded-sm font-heading font-bold text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          onClick={closeMenu}
        >
          Institute of Humanoids
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link
            href="/matrix/"
            className="rounded-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            Matrix
          </Link>
          <Link
            href="/platforms/"
            className="rounded-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            Platforms
          </Link>
          <Link
            href="/components/"
            className="rounded-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            Components
          </Link>
          <Link
            href="/suppliers/"
            className="rounded-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            Suppliers
          </Link>
          <Link
            href="/jobs/"
            className="rounded-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            Jobs
          </Link>
          <ThemeToggle />
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            <HugeiconsIcon
              icon={isOpen ? Cancel01Icon : Menu01Icon}
              className="size-5"
            />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-14 z-40 flex flex-col gap-4 overflow-y-auto border-t border-border bg-background p-4 md:hidden">
          <nav className="flex flex-col gap-4 text-base font-medium">
            <Link
              href="/matrix/"
              className="-mx-2 rounded-md p-2 transition-colors hover:bg-muted/50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              onClick={closeMenu}
            >
              Matrix
            </Link>
            <Link
              href="/platforms/"
              className="-mx-2 rounded-md p-2 transition-colors hover:bg-muted/50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              onClick={closeMenu}
            >
              Platforms
            </Link>
            <Link
              href="/components/"
              className="-mx-2 rounded-md p-2 transition-colors hover:bg-muted/50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              onClick={closeMenu}
            >
              Components
            </Link>
            <Link
              href="/suppliers/"
              className="-mx-2 rounded-md p-2 transition-colors hover:bg-muted/50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              onClick={closeMenu}
            >
              Suppliers
            </Link>
            <Link
              href="/jobs/"
              className="-mx-2 rounded-md p-2 transition-colors hover:bg-muted/50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              onClick={closeMenu}
            >
              Jobs
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
