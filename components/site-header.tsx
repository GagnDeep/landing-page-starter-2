"use client"

import * as React from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { HugeiconsIcon } from "@hugeicons/react"
import { Moon02Icon, Sun03Icon } from "@hugeicons/core-free-icons"

import { Button } from "@/components/ui/button"

export function SiteHeader() {
  const { setTheme, resolvedTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center px-4 lg:px-8">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-sans font-bold">
              The Restaurant Stack Guide
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="#guide"
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Guide
            </Link>
            <Link
              href="#features"
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Features
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              className="h-8 w-8 px-0"
            >
              <HugeiconsIcon
                icon={Sun03Icon}
                className="hidden h-4 w-4 dark:block"
              />
              <HugeiconsIcon
                icon={Moon02Icon}
                className="block h-4 w-4 dark:hidden"
              />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
