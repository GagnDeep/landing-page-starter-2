import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { homeContent } from "@/content/home";

export function Footer() {
  const { footer, navigation } = homeContent;

  const socialIconMap: Record<string, string> = {
    Instagram: "IG",
    Facebook: "FB",
    LinkedIn: "IN",
  };

  return (
    <footer className="bg-muted text-muted-foreground pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand & Address */}
          <div className="md:col-span-1 space-y-6">
            <Link href="/" className="inline-block">
              <span className="font-heading text-2xl font-semibold text-primary">
                {navigation.logoText}
              </span>
            </Link>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">{footer.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href={`tel:${footer.phone.replace(/\s+/g, '')}`} className="text-sm hover:text-primary transition-colors">
                  {footer.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href={`mailto:${footer.email}`} className="text-sm hover:text-primary transition-colors">
                  {footer.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="font-heading text-lg text-foreground mb-6">Explore</h3>
            <ul className="space-y-4">
              {navigation.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Help */}
          <div className="md:col-span-1">
            <h3 className="font-heading text-lg text-foreground mb-6">Information</h3>
            <ul className="space-y-4">
              {footer.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-1">
            <h3 className="font-heading text-lg text-foreground mb-6">Connect</h3>
            <div className="flex gap-4">
              {footer.socials.map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="p-2 w-10 h-10 flex items-center justify-center rounded-full bg-background border border-border text-foreground font-semibold hover:border-primary hover:text-primary transition-colors"
                >
                  <span className="text-xs">{socialIconMap[social] || social}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
