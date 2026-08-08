import Link from "next/link"
import { site } from "@/lib/site"

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 sm:px-6 md:h-24 md:flex-row lg:px-8">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="/about"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            About
          </Link>
        </div>
      </div>
    </footer>
  )
}
