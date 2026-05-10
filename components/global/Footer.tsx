import React from "react";
import Link from "next/link";
import { globalContent } from "@/content/global";
import { homeContent } from "@/content/home";
import { SITE_IMAGES } from "@/lib/images";

export function Footer() {
  const currentYear = new Date().getFullYear();

  // Extract unique photographer credits to satisfy Unsplash requirements
  const credits = Object.values(SITE_IMAGES).reduce((acc, image) => {
    if (!acc.some((c) => c.name === image.credit.name)) {
      acc.push(image.credit);
    }
    return acc;
  }, [] as { name: string; link: string }[]);

  return (
    <footer className="w-full bg-secondary/30 border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">

          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-heading font-bold text-primary">
                {globalContent.brandName.split(" ")[0]}
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-xs">
              {homeContent.metadata.description}
            </p>
            <div className="text-sm font-medium text-foreground">
              <p>{globalContent.address}</p>
              <p className="mt-2 text-accent-foreground">{globalContent.hours}</p>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-foreground">Shop & Services</h3>
            <ul className="space-y-3">
              {globalContent.footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-foreground">Support</h3>
            <ul className="space-y-3">
              {globalContent.footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Credits */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-foreground">Legal</h3>
            <ul className="space-y-3 mb-8">
              {globalContent.footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {currentYear} {globalContent.brandName}. All rights reserved.
          </p>

          <div className="text-xs text-muted-foreground/60 text-center md:text-right max-w-lg">
            Photography by{" "}
            {credits.map((credit, i) => (
              <span key={credit.name}>
                <a href={credit.link} target="_blank" rel="noopener noreferrer" className="hover:text-muted-foreground underline underline-offset-2">
                  {credit.name}
                </a>
                {i < credits.length - 1 ? ", " : ""}
              </span>
            ))}
            {" "}via Unsplash.
          </div>
        </div>
      </div>
    </footer>
  );
}
