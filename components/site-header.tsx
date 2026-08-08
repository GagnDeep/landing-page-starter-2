import Link from "next/link"

import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-heading text-lg font-bold">
              The Caterer&apos;s Business Toolkit
            </span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <Link
              href="#"
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Product
            </Link>
            <Link
              href="#"
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Docs
            </Link>
            <Link
              href="#"
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Blog
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end gap-4">
          <nav className="flex items-center gap-2">
            <Button variant="ghost" asChild className="hidden md:inline-flex">
              <Link href="#">Sign in</Link>
            </Button>
            <Button asChild>
              <Link href="#">Get started</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
