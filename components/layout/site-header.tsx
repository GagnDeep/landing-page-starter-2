"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { homeContent } from "@/content/home"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { Moon02Icon, Sun03Icon } from "@hugeicons/core-free-icons"

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const { setTheme, theme } = useTheme()
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500 ease-in-out border-b border-transparent",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border/50 py-4 shadow-sm"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-heading text-2xl tracking-widest text-foreground group-hover:text-primary transition-colors">
            {homeContent.siteFooter.brandName.toUpperCase()}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {homeContent.siteHeader.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium tracking-wide uppercase transition-colors hover:text-primary",
                pathname === link.href ? "text-primary" : "text-foreground/80"
              )}
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
            className="rounded-full hover:bg-muted"
            aria-label="Toggle theme"
          >
            <HugeiconsIcon icon={Sun03Icon} className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <HugeiconsIcon icon={Moon02Icon} className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          <Button asChild variant="default" className="hidden sm:inline-flex rounded-none px-8 font-sans uppercase tracking-widest text-xs">
            <Link href={homeContent.heroCinematic.ctaPrimary.href}>
              {homeContent.heroCinematic.ctaPrimary.label}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
