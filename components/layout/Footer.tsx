import React from "react";
import Link from "next/link";
import { homeContent } from "@/content/home";
import { navigationContent } from "@/content/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import { InstagramIcon, Facebook02Icon, TwitterIcon } from "@hugeicons/core-free-icons";

export function Footer() {
  const { footer } = homeContent;

  return (
    <footer className="bg-muted border-t border-border/50 py-12 md:py-16 mt-auto">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand & Mission */}
          <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
            <span className="font-display font-bold text-2xl text-foreground">
              {footer.brandName}<span className="text-primary">.</span>
            </span>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              {homeContent.metadata.description}
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <HugeiconsIcon icon={InstagramIcon} className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <HugeiconsIcon icon={Facebook02Icon} className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <HugeiconsIcon icon={TwitterIcon} className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 flex flex-col gap-4">
            <h3 className="font-heading font-semibold text-foreground">{footer.quickLinksText}</h3>
            <ul className="flex flex-col gap-2">
              {navigationContent.footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1 flex flex-col gap-4">
            <h3 className="font-heading font-semibold text-foreground">{footer.legalText}</h3>
            <ul className="flex flex-col gap-2">
              {navigationContent.footerLinks.legalLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="col-span-1 flex flex-col gap-4">
            <h3 className="font-heading font-semibold text-foreground">{footer.contactText}</h3>
            <p className="text-muted-foreground text-sm flex flex-col gap-1">
              <span>{footer.location}</span>
              <a href="mailto:hello@cakedelights.in" className="hover:text-primary transition-colors mt-2">hello@cakedelights.in</a>
              <a href="tel:+919876543210" className="hover:text-primary transition-colors">+91 98765 43210</a>
            </p>
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {footer.copyright}
          </p>
          <p className="text-xs text-muted-foreground/60 text-center md:text-right max-w-sm">
            All imagery provided by Unsplash. This is a conceptual project.
          </p>
        </div>
      </div>
    </footer>
  );
}
