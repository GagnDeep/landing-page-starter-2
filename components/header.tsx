import Link from "next/link"
import { siteConfig } from "@/lib/site"

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          href="/"
          className="font-heading text-2xl font-semibold tracking-tight text-primary"
        >
          {siteConfig.name}
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/about"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  )
}
