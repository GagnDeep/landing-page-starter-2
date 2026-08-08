import Link from "next/link"
import { site } from "@/lib/site"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center px-4 sm:px-6 lg:px-8">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-heading text-lg font-bold tracking-wider uppercase">
              {site.name}
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/suppliers"
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Suppliers
            </Link>
            <Link
              href="/jobs"
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Jobs
            </Link>
            <Link
              href="/about"
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
