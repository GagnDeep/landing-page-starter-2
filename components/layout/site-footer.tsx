import * as React from "react"
import Link from "next/link"
import { homeContent } from "@/content/home"

export function SiteFooter() {
  const { brandName, address, email, phone, links, copyright } = homeContent.siteFooter

  return (
    <footer className="bg-muted/30 border-t border-border pt-24 pb-12 mt-auto">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24 mb-24">
          <div className="md:col-span-2 space-y-8">
            <Link href="/" className="inline-block">
              <span className="font-heading text-3xl tracking-widest text-foreground">
                {brandName.toUpperCase()}
              </span>
            </Link>
            <div className="space-y-4 text-muted-foreground">
              <p className="whitespace-pre-line leading-relaxed">{address}</p>
              <p>
                <a href={`mailto:${email}`} className="hover:text-primary transition-colors">
                  {email}
                </a>
              </p>
              <p>
                <a href={`tel:${phone.replace(/\s+/g, '')}`} className="hover:text-primary transition-colors">
                  {phone}
                </a>
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-heading text-lg tracking-wider uppercase text-foreground">Explore</h4>
            <nav className="flex flex-col gap-4">
              {links.explore.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-6">
            <h4 className="font-heading text-lg tracking-wider uppercase text-foreground">Legal</h4>
            <nav className="flex flex-col gap-4">
              {links.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>{copyright}</p>
          <p className="tracking-widest uppercase text-xs">{homeContent.siteFooter.curatedBy}</p>
        </div>
      </div>
    </footer>
  )
}
