"use client";

import * as React from "react";
import Link from "next/link";
import { homeContent } from "@/content/home";
import { SectionDivider, AnimatedSVGIllustration } from "@/components/visuals";
import { HugeiconsIcon } from "@hugeicons/react";
import { InstagramIcon, Facebook01Icon, Call02Icon, Mail01Icon, Location01Icon } from "@hugeicons/core-free-icons";

export function Footer() {
  const { footer } = homeContent;

  return (
    <footer className="relative bg-background pt-20 pb-10 border-t border-border/40 overflow-hidden">
      {/* Decorative Top Divider */}
      <div className="absolute top-0 left-0 w-full -translate-y-[98%] opacity-20 pointer-events-none">
        <SectionDivider fillColor="var(--primary)" />
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Brand & Identity (Col 1-4) */}
          <div className="md:col-span-12 lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3 mb-6 group" aria-label="Home">
               <AnimatedSVGIllustration className="w-10 h-10 text-primary" strokeWidth={2} />
               <span className="font-heading font-bold text-2xl tracking-tight group-hover:text-primary transition-colors">
                 Harbhajan&apos;s
               </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-sm">
              Bringing the warmth of our family kitchen to your majestic events. Generous portions, pure vegetarian delicacies, and impeccable service.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300" aria-label="Instagram">
                <HugeiconsIcon icon={InstagramIcon} size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="p-2 rounded-full bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300" aria-label="Facebook">
                <HugeiconsIcon icon={Facebook01Icon} size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Quick Links (Col 5-7) */}
          <div className="md:col-span-4 lg:col-span-3 lg:col-start-6">
            <h3 className="font-heading font-semibold text-lg mb-6">Navigation</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              {footer.preFooterLinks.navigation.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-primary transition-colors hover:underline underline-offset-4">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (Col 8-12) */}
          <div className="md:col-span-8 lg:col-span-4">
            <h3 className="font-heading font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <HugeiconsIcon icon={Location01Icon} size={20} className="text-primary shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="leading-relaxed">{footer.contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <HugeiconsIcon icon={Call02Icon} size={20} className="text-primary shrink-0" strokeWidth={1.5} />
                <span>{footer.contactInfo.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <HugeiconsIcon icon={Mail01Icon} size={20} className="text-primary shrink-0" strokeWidth={1.5} />
                <span>{footer.contactInfo.email}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Legal */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            {footer.copyright}
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            {footer.preFooterLinks.legal.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
