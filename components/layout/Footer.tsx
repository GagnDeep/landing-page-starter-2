import React from "react";
import Link from "next/link";
import { contactDetails } from "@/content/contact";
import { globalNavLinks, footerContent } from "@/content/home";

export function Footer() {
  return (
    <footer className="w-full bg-muted/30 pt-16 mt-auto">
      {/* Home-19-GlobalFooterMain */}
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-border">

        {/* Brand Summary */}
        <div className="md:col-span-1">
          <h2 className="font-heading text-2xl font-bold mb-4">VERMA'S</h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-xs">
            {footerContent.brandDescription}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-heading text-lg mb-4 text-foreground">{footerContent.exploreHeading}</h3>
          <ul className="space-y-3">
            {globalNavLinks.slice(0, 4).map(link => (
              <li key={link.href}><Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{link.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="font-heading text-lg mb-4 text-foreground">{footerContent.supportHeading}</h3>
          <ul className="space-y-3">
            {footerContent.supportLinks.map(link => (
              <li key={link.href}><Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{link.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-heading text-lg mb-4 text-foreground">{footerContent.visitHeading}</h3>
          <address className="not-italic text-sm text-muted-foreground space-y-1 mb-4">
            {contactDetails.address.lines.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </address>
          <p className="text-sm text-muted-foreground">
            <a href={`mailto:${contactDetails.contact.email}`} className="hover:text-primary">{contactDetails.contact.email}</a>
          </p>
        </div>
      </div>

      {/* Home-20-GlobalFooterLegal */}
      <div className="container mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Verma's Bakery & Sweets. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link href="/terms" className="text-xs text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
          <Link href="/privacy" className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
