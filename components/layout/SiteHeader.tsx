"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MenuIcon, XIcon, MoonIcon, SunIcon, CarFrontIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { homeContent } from "@/content/home"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const { logoText, links, cta } = homeContent.mainNavigation

  // Close mobile menu on route change
  React.useEffect(() => {
    queueMicrotask(() => setIsMobileMenuOpen(false))
  }, [pathname])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm group"
        >
          <div className="bg-primary text-primary-foreground p-1.5 rounded-md group-hover:bg-accent transition-colors">
            <CarFrontIcon className="w-6 h-6" />
          </div>
          <span className="font-heading font-bold text-xl tracking-tight text-foreground hidden sm:inline-block">
            {logoText}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm",
                pathname === link.href ? "text-accent" : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full w-9 h-9"
            aria-label="Toggle theme"
          >
            <SunIcon className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <Button asChild className="hidden md:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href={cta.href}>{cta.label}</Link>
          </Button>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <XIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <nav className="flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-3 rounded-md text-base font-medium transition-colors",
                    pathname === link.href
                      ? "bg-accent/10 text-accent"
                      : "text-foreground hover:bg-muted"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mt-2">
              <Link href={cta.href}>{cta.label}</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
