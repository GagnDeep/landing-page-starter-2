import React from 'react';
import Link from 'next/link';
import { getAllCredits } from '@/lib/images';
import { globalContent } from '@/content/global';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const credits = getAllCredits();
  const { navLinks, contactEmail, contactPhone } = globalContent;

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">

          {/* Brand Col */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <h3 className="font-heading text-3xl font-semibold text-foreground">
              Blinking Eye Events
            </h3>
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
              Crafting elegance and curating memories. Full-service boutique event and wedding planning based in Chandigarh, bringing your most precious celebrations to life with warmth and precision.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <span className="sr-only">Instagram</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <div className="space-y-6">
            <h4 className="font-heading text-lg font-medium text-foreground">Explore</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal / Contact */}
          <div className="space-y-6">
            <h4 className="font-heading text-lg font-medium text-foreground">Connect</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>{contactEmail}</li>
              <li>{contactPhone}</li>
              <li className="pt-4"><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom (Credits & Copyright) */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-muted-foreground/60">
          <p>© {currentYear} Blinking Eye Events. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <span>Photography via Unsplash:</span>
            {credits.map((credit, idx) => (
              <a
                key={credit.url}
                href={`${credit.url}?utm_source=blinkingeyeevents&utm_medium=referral`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-muted-foreground transition-colors"
              >
                {credit.name}{idx < credits.length - 1 ? ',' : ''}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
