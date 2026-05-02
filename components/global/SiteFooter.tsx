"use client";

import React from "react";
import Link from "next/link";
import { globalContent } from "@/content/global";

import { ArrowRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background dark:bg-card pt-24 pb-12 mt-auto border-t border-border">
      <div className="container mx-auto px-6">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">

          {/* Brand & Mantra */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <Link href="/" className="font-heading text-3xl tracking-widest text-background">
              YAVA<br/><span className="text-xs tracking-[0.2em] font-sans text-background/60 uppercase">Designs</span>
            </Link>
            <p className="text-background/70 font-light text-sm max-w-sm leading-relaxed">
              {globalContent.footer.brandMantra}
            </p>
          </div>

          {/* Links Columns */}
          {globalContent.footer.links.map((group) => (
            <div key={group.category} className="flex flex-col gap-6">
              <h4 className="font-heading text-lg text-accent tracking-wide">{group.category}</h4>
              <nav className="flex flex-col gap-4">
                {group.items.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-sm text-background/70 hover:text-background hover:translate-x-1 transition-all duration-300 w-fit"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}

          {/* Contact & Newsletter */}
          <div className="flex flex-col gap-6">
            <h4 className="font-heading text-lg text-accent tracking-wide">The Atelier</h4>
            <div className="flex flex-col gap-2 text-sm text-background/70 font-light">
              <p>{globalContent.footer.contactInfo.address}</p>
              <p>{globalContent.footer.contactInfo.email}</p>
              <p>{globalContent.footer.contactInfo.phone}</p>
            </div>

            <div className="mt-4">
              <p className="text-xs text-background/50 mb-3 uppercase tracking-wider">Join the Inner Circle</p>
              <div className="flex relative border-b border-background/20 focus-within:border-accent transition-colors">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-transparent py-2 text-sm text-background outline-none w-full placeholder:text-background/30"
                />
                <button className="text-accent hover:text-background transition-colors absolute right-0 top-1/2 -translate-y-1/2" aria-label="Subscribe">
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-6">
            {globalContent.footer.legal.map((item) => (
              <Link key={item.label} href={item.href} className="text-xs text-background/50 hover:text-background transition-colors">
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex gap-6">
            {globalContent.footer.social.map((item) => (
              <a
                key={item.platform}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="text-xs tracking-wider uppercase text-background/50 hover:text-background transition-colors"
              >
                {item.platform}
              </a>
            ))}
          </div>

          <p className="text-xs text-background/30">
            &copy; {new Date().getFullYear()} YAVA DESIGNS. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
