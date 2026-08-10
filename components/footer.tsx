import { siteConfig } from "@/lib/site"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="mt-auto border-t bg-card py-8 md:py-12">
      <div className="container flex flex-col items-center justify-between gap-6 px-4 md:flex-row md:px-8">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built for operators. &copy; {new Date().getFullYear()}{" "}
          {siteConfig.name}.
        </p>
        <nav className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <Link
            href="/about"
            className="flex min-h-[44px] items-center rounded-sm p-2 transition-colors outline-none hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            About
          </Link>
          <Link
            href="/states"
            className="flex min-h-[44px] items-center rounded-sm p-2 transition-colors outline-none hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            State Laws
          </Link>
        </nav>
      </div>
    </footer>
  )
}
