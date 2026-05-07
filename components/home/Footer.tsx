"use client"

import { homeContent } from "@/content/home"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { StarIcon } from "@hugeicons/core-free-icons"

export function Footer() {
  const { footer } = homeContent

  return (
    <footer className="bg-background pt-20 pb-10 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand & Social Proof */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-heading text-primary mb-6">Harbhajan&apos;s</h3>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <HugeiconsIcon key={i} icon={StarIcon} className="size-4 fill-current" strokeWidth={1} />
                ))}
              </div>
            </div>
            <p className="text-sm font-medium text-muted-foreground">
              {footer.socialProof}
            </p>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-1">
            <h4 className="font-heading text-lg text-foreground mb-6">Explore</h4>
            <ul className="flex flex-col gap-3">
              {footer.links.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="font-heading text-lg text-foreground mb-6">Contact</h4>
            <address className="not-italic flex flex-col gap-3 text-muted-foreground">
              <p>{footer.address}</p>
              <p>
                <a href={`tel:${footer.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-primary transition-colors">
                  {footer.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${footer.email}`} className="hover:text-primary transition-colors">
                  {footer.email}
                </a>
              </p>
            </address>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>{footer.copyright}</p>
          <div className="flex gap-6">
            {footer.legal.map((link, idx) => (
              <Link key={idx} href={link.href} className="hover:text-foreground transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
