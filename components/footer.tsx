import Link from "next/link"
import { site } from "@/lib/site"

export function Footer() {
  return (
    <footer className="border-t bg-muted">
      <div className="container mx-auto flex flex-col gap-4 px-4 py-10 md:flex-row md:items-center md:gap-8 md:px-6">
        <div className="flex-1">
          <p className="font-heading font-bold">{site.name}</p>
          <p className="mt-2 text-sm text-muted-foreground">
            An independent guide to federal contracting for small businesses.
          </p>
        </div>
        <nav className="flex gap-4 sm:gap-6">
          <Link
            href="/about"
            className="text-sm font-medium underline-offset-4 hover:underline"
          >
            About
          </Link>
        </nav>
      </div>
      <div className="border-t py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {site.name}. Not affiliated with the US
        government.
      </div>
    </footer>
  )
}
