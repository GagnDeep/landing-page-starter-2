import Link from "next/link";
import { homeContent } from "@/content/home";
import { Facebook, Instagram } from "lucide-react";

export function Footer() {
  const { preFooter, globalNav } = homeContent;

  return (
    <footer className="border-t border-border bg-card pb-8 pt-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:gap-8">
          {/* Brand & Social */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block font-serif text-2xl font-bold tracking-tight text-primary">
              Stitching Solutions
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Premium women&apos;s tailoring in Patiala. Precise, alteration-free, and always on time.
            </p>
            <div className="mt-6 flex space-x-4 text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="mb-4 font-serif text-lg font-bold text-foreground">Quick Links</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {globalNav.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="mb-4 font-serif text-lg font-bold text-foreground">{preFooter.contactTitle}</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href={`tel:${preFooter.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-primary transition-colors">
                  {preFooter.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${preFooter.email}`} className="hover:text-primary transition-colors">
                  {preFooter.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Hours */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="mb-4 font-serif text-lg font-bold text-foreground">{preFooter.locationTitle}</h3>
            <p className="text-sm text-muted-foreground">{preFooter.address}</p>

            <h3 className="mb-2 mt-6 font-serif text-lg font-bold text-foreground">{preFooter.hoursTitle}</h3>
            <p className="text-sm text-muted-foreground whitespace-pre-line">{preFooter.hours}</p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Stitching Solutions. All rights reserved.
          </p>
          <div className="mt-4 flex space-x-4 sm:mt-0 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
