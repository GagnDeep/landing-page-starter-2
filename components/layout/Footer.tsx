"use client";

import React from "react";
import Link from "next/link";
import { homeContent } from "@/content/home";
import { contactContent } from "@/content/contact";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="font-heading text-2xl tracking-wide font-bold text-primary mb-4 block">
              SARDAAR G.
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              {homeContent.brandEssence.body.split('.')[0]}.
            </p>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="font-heading text-lg text-foreground mb-4">Atelier</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">Our Heritage</Link></li>
              <li><Link href="/features" className="text-sm text-muted-foreground hover:text-primary transition-colors">Bespoke Services</Link></li>
              <li><Link href="/pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">Investment</Link></li>
              <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">The Journal</Link></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="font-heading text-lg text-foreground mb-4">Support</h4>
            <ul className="space-y-3">
              <li><Link href="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/careers" className="text-sm text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-heading text-lg text-foreground mb-4">Visit Us</h4>
            <address className="not-italic text-sm text-muted-foreground space-y-2">
              <p>{contactContent.info.address.value}</p>
              <p><a href={`tel:${contactContent.info.phone.value}`} className="hover:text-primary transition-colors">{contactContent.info.phone.value}</a></p>
              <p><a href={`mailto:${contactContent.info.email.value}`} className="hover:text-primary transition-colors">{contactContent.info.email.value}</a></p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} Sardaar G. Tailors. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
