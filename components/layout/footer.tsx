import Link from "next/link"
import { content } from "@/content"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/20 py-12">
      <div className="container px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="font-heading text-2xl font-bold tracking-tight">
            {content.global.brand}
          </Link>
          <p className="mt-4 text-muted-foreground text-sm max-w-sm">
            {content.footer.tagline}
          </p>
        </div>
        <div>
          <h3 className="font-heading font-medium mb-4">Links</h3>
          <ul className="space-y-3">
            {content.navigation.links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-heading font-medium mb-4">Social</h3>
          <ul className="space-y-3">
            {content.footer.socials.map((social) => (
              <li key={social.label}>
                <Link
                  href={social.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {social.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container px-4 md:px-8 mt-12 pt-8 border-t border-border/40 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground">
          {content.footer.copyright}
        </p>
      </div>
    </footer>
  )
}
