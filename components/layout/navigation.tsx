import Link from "next/link"

import { Button } from "@/components/ui/button"
import { content } from "@/content"

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        <Link href="/" className="font-heading text-xl font-bold tracking-tight">
          {content.global.brand}
        </Link>
        <nav className="hidden md:flex gap-6">
          {content.navigation.links.map((link) => (
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
          <Button asChild className="hidden md:inline-flex">
            <Link href={content.navigation.cta.href}>{content.navigation.cta.label}</Link>
          </Button>
          {/* Mobile menu could go here later if needed */}
        </div>
      </div>
    </header>
  )
}
