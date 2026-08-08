import Link from "next/link"
import { site } from "@/lib/site"

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container mx-auto flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="font-heading text-lg font-bold">
          {site.name}
        </Link>
        <nav className="ml-auto flex items-center gap-4 sm:gap-6">
          <Link
            href="/about"
            className="text-sm font-medium underline-offset-4 hover:underline"
          >
            About
          </Link>
        </nav>
      </div>
      <div className="text-destructive-foreground bg-destructive px-4 py-2 text-center text-xs font-medium">
        Disclosure: This is an independent guide to federal contracting for
        small businesses, not a US government website.
      </div>
    </header>
  )
}
