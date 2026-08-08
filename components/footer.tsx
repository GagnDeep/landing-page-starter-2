import Link from "next/link"
import { site } from "@/lib/site"
import { NewsletterForm } from "@/components/newsletter-form"

export function Footer() {
  return (
    <footer className="border-t-4 border-primary bg-muted">
      <div className="container mx-auto flex flex-col gap-12 px-4 py-16 md:flex-row md:justify-between md:px-6">
        <div className="max-w-sm flex-1 space-y-6">
          <p className="font-heading text-2xl font-black tracking-tight text-foreground">
            {site.name}
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            An independent guide to federal contracting for small businesses. We
            simplify the path to winning government contracts.
          </p>
          <nav className="flex gap-6 pt-2">
            <Link
              href="/about/"
              className="text-sm font-bold tracking-wider text-muted-foreground uppercase transition-colors hover:text-primary"
            >
              About
            </Link>
            <Link
              href="/guides/"
              className="text-sm font-bold tracking-wider text-muted-foreground uppercase transition-colors hover:text-primary"
            >
              Guides
            </Link>
          </nav>
        </div>

        <div className="w-full max-w-md space-y-5 border border-border bg-background p-8 shadow-sm">
          <h3 className="font-heading text-xl font-bold tracking-tight">
            Stay Updated
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Get the latest updates on contracting thresholds and regulatory news
            straight to your inbox.
          </p>
          <NewsletterForm />
        </div>
      </div>
      <div className="container mx-auto border-t border-border/50 px-6 py-8 text-center text-sm text-muted-foreground md:text-left">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <span>
            © {new Date().getFullYear()} {site.name}. Not affiliated with the US
            government.
          </span>
          <span className="font-mono text-xs text-foreground opacity-50">
            v1.0.0 — BROADSHEET EDITION
          </span>
        </div>
      </div>
    </footer>
  )
}
