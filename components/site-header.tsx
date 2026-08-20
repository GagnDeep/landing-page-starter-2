"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Menu01Icon,
  Sun01Icon,
  Moon01Icon,
  Calendar01Icon,
  HospitalIcon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const NAV_ITEMS = [
  { href: "/conditions", label: "Conditions" },
  { href: "/treatments", label: "Treatments" },
  { href: "/symptoms", label: "Symptoms" },
  { href: "/about", label: "About Dr. Ameena" },
  { href: "/press", label: "Press & Media" },
  { href: "/blog", label: "Medical Blog" },
  { href: "/location", label: "Location" },
  { href: "/contact", label: "Contact" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0)
    return () => clearTimeout(timer)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/95 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo & Clinical Title */}
        <Link
          href="/"
          className="group flex items-center gap-3 transition-opacity hover:opacity-90"
        >
          <div className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-xs">
            <HugeiconsIcon icon={HospitalIcon} className="size-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold tracking-tight text-foreground sm:text-xl">
              Dr. Ameena Patel, MD, FACP
            </span>
            <span className="text-xs font-medium text-muted-foreground">
              Integrative Internal Medicine & Women&apos;s Health
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-1 xl:flex">
          {NAV_ITEMS.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href))
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-foreground",
                  isActive
                    ? "bg-secondary font-semibold text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Action Controls & Booking Button */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          {mounted && (
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle dark mode theme"
              className="size-10 rounded-lg border-border bg-background"
            >
              <HugeiconsIcon
                icon={theme === "dark" ? Sun01Icon : Moon01Icon}
                className="size-5 text-foreground transition-transform hover:scale-105"
              />
            </Button>
          )}

          {/* Consultation CTA */}
          <Button
            asChild
            className="hidden rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-accent-foreground shadow-xs transition-transform hover:scale-[1.02] sm:inline-flex"
          >
            <Link href="/booking" className="flex items-center gap-2">
              <HugeiconsIcon icon={Calendar01Icon} className="size-4" />
              <span>Book Consult</span>
            </Link>
          </Button>

          {/* Mobile Sheet Drawer Trigger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="size-10 rounded-lg border-border xl:hidden"
                aria-label="Open navigation menu"
              >
                <HugeiconsIcon
                  icon={Menu01Icon}
                  className="size-5 text-foreground"
                />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="flex flex-col justify-between p-6 sm:max-w-xs"
            >
              <SheetHeader className="text-left">
                <SheetTitle className="font-serif text-lg font-bold text-foreground">
                  Dr. Ameena Patel, MD
                </SheetTitle>
                <p className="text-xs text-muted-foreground">
                  Integrative Internal Medicine & Women&apos;s Health
                </p>
              </SheetHeader>

              {/* Navigation List */}
              <div className="my-6 flex flex-col gap-2">
                {NAV_ITEMS.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                        isActive
                          ? "bg-primary font-semibold text-primary-foreground"
                          : "bg-secondary/50 text-foreground hover:bg-secondary"
                      )}
                    >
                      <span>{item.label}</span>
                      <HugeiconsIcon
                        icon={ArrowRight01Icon}
                        className="size-4"
                      />
                    </Link>
                  )
                })}
              </div>

              {/* Drawer Booking CTA */}
              <div className="space-y-3 border-t border-border pt-4">
                <Button
                  asChild
                  className="w-full rounded-lg bg-accent py-3 font-medium text-accent-foreground"
                  onClick={() => setOpen(false)}
                >
                  <Link
                    href="/booking"
                    className="flex items-center justify-center gap-2"
                  >
                    <HugeiconsIcon icon={Calendar01Icon} className="size-4" />
                    <span>Book 60-Min Consultation</span>
                  </Link>
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  Chicago Clinic &amp; Telehealth Consultation
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
