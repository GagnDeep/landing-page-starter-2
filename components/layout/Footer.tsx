"use client";

import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { InstagramIcon, PinterestIcon, Facebook01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { AnimatedFloralSVG } from "@/components/visuals/AnimatedFloralSVG";
import { homeContent } from "@/content/home";

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-20 pb-10 border-t border-border/10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Brand Col */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center transition-transform group-hover:scale-105">
                 <AnimatedFloralSVG className="w-6 h-6 stroke-primary-foreground" duration={4} />
              </div>
              <span className="font-heading font-semibold text-2xl tracking-wide">
                {homeContent.global.brandName}
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
              Patiala&apos;s premier specialists in Anand Karaj and luxury wedding decor. We weave tradition and modern artistry into breathtaking floral experiences.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Instagram">
                <HugeiconsIcon icon={InstagramIcon} className="w-5 h-5 text-current fill-current" strokeWidth={1.5} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Pinterest">
                <HugeiconsIcon icon={PinterestIcon} className="w-5 h-5 text-current fill-current" strokeWidth={1.5} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Facebook">
                <HugeiconsIcon icon={Facebook01Icon} className="w-5 h-5 text-current fill-current" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-medium text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4 text-muted-foreground text-sm">
              <li><Link href="/about" className="hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link href="/features" className="hover:text-primary transition-colors">Bespoke Services</Link></li>
              <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing & Packages</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">The Artisan&apos;s Journal</Link></li>
              <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-medium text-lg mb-6">Contact Studio</h3>
            <ul className="space-y-4 text-muted-foreground text-sm">
              <li>
                {homeContent.global.location.split(', ').map((line, i) => (
                  <span key={i}>{line}{i === 0 ? <br/> : ''}</span>
                ))}
              </li>
              <li>
                <a href={`tel:${homeContent.global.contactPhone.replace(/\s+/g, '')}`} className="hover:text-primary transition-colors">
                  {homeContent.global.contactPhone}
                </a>
              </li>
              <li>
                <a href="mailto:hello@royalflowerdecoration.com" className="hover:text-primary transition-colors">
                  hello@royalflowerdecoration.com
                </a>
              </li>
              <li className="pt-2 text-xs opacity-70">Mon - Sun: {homeContent.global.businessHours}</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-heading font-medium text-lg mb-6">Inspiration to your Inbox</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Join our newsletter for floral trends, real weddings, and exclusive decor guides.
            </p>
            <form className="relative" action="/" method="POST" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-5 pr-12 text-sm text-background focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground"
                required
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 w-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors"
                aria-label="Subscribe"
              >
                <HugeiconsIcon icon={ArrowRight01Icon} className="w-5 h-5 text-primary-foreground" strokeWidth={2} />
              </button>
            </form>
          </div>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {homeContent.global.brandName}. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
