"use client";

import Link from "next/link";
import { homeContent } from "@/content/home";
import { AnimatedLine, FadeInUp } from "./visuals";

export function Footer() {
  const { header, footerUpper, footerLower } = homeContent;

  return (
    <footer className="bg-muted text-foreground pt-24 pb-8 overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <FadeInUp className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="md:col-span-1 space-y-6">
            <h3 className="font-heading text-3xl">{header.logoText}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              {footerUpper.brandDescription}
            </p>
          </div>

          {/* Explore Links */}
          <div className="space-y-6">
            <h4 className="font-heading text-xl">{footerUpper.links.explore[0]?.label ? "Explore" : ""}</h4>
            <ul className="space-y-4">
              {footerUpper.links.explore.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Links */}
          <div className="space-y-6">
            <h4 className="font-heading text-xl">{footerUpper.links.connect[0]?.label ? "Connect" : ""}</h4>
            <ul className="space-y-4">
              {footerUpper.links.connect.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="space-y-6">
            <h4 className="font-heading text-xl">Inquiries</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <a href={`mailto:${footerUpper.contact.email}`} className="hover:text-primary transition-colors">
                  {footerUpper.contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${footerUpper.contact.phone}`} className="hover:text-primary transition-colors">
                  {footerUpper.contact.phone}
                </a>
              </li>
            </ul>
          </div>
        </FadeInUp>

        <AnimatedLine className="mb-8" />

        {/* Lower Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-xs text-muted-foreground">
          <p>{footerLower.copyright}</p>
          <div className="flex space-x-6">
            {footerLower.legalLinks.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-foreground transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
