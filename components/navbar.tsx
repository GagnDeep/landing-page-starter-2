"use client"

import * as React from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { HugeiconsIcon } from "@hugeicons/react"
import { Moon02Icon, Sun01Icon } from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button"
import { landingPageContent } from "@/content"

export function Navbar() {
  const { setTheme, theme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link
          href="/"
          className="font-heading text-xl font-bold tracking-tight"
        >
          {landingPageContent.nav.brand}
        </Link>
        <nav className="hidden gap-6 md:flex">
          {landingPageContent.nav.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <HugeiconsIcon
              icon={Sun01Icon}
              className="size-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
            />
            <HugeiconsIcon
              icon={Moon02Icon}
              className="absolute size-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
            />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
