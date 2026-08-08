import Link from "next/link"
import { site } from "@/lib/site"

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background transition-colors duration-300">
      <div className="container mx-auto flex h-20 items-center px-4 md:px-6">
        <Link
          href="/"
          className="font-heading text-2xl font-black tracking-tight text-primary transition-colors hover:text-primary/80"
        >
          {site.name}
        </Link>
        <nav className="ml-auto flex items-center gap-6 sm:gap-8">
          <Link
            href="/guides/"
            className="text-sm font-semibold tracking-widest text-muted-foreground uppercase transition-colors hover:text-foreground"
          >
            Guides
          </Link>
          <Link
            href="/about/"
            className="text-sm font-semibold tracking-widest text-muted-foreground uppercase transition-colors hover:text-foreground"
          >
            About
          </Link>
        </nav>
      </div>
      <div className="border-t border-border bg-muted px-4 py-2 text-center text-xs font-medium tracking-wide text-muted-foreground uppercase">
        Disclosure: This is an independent guide to federal contracting for
        small businesses, not a US government website.
      </div>
    </header>
  )
}
