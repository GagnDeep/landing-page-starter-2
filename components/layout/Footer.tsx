import React from "react";
import Link from "next/link";
import { globalContent } from "@/content/global";

export function Footer() {
  const { footer, navigation } = globalContent;

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">

          {/* Brand & Address */}
          <div className="space-y-8 xl:col-span-1">
            <span className="font-heading text-2xl font-bold tracking-tight text-foreground">
              {globalContent.brand.name}
            </span>
            <p className="text-sm text-muted-foreground max-w-xs">
              {footer.address}
            </p>
            <div className="flex space-x-6">
              {footer.socialLinks.map((item) => (
                <a key={item.name} href={item.href} className="text-muted-foreground hover:text-foreground transition-colors">
                  <span className="sr-only">{item.name}</span>
                  {/* Generic icon placeholder for social */}
                  <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center text-[10px] font-bold">
                    {item.name[0]}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Navigation</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.links.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Contact</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <a href={`tel:${footer.phone.replace(/[^0-9+]/g, '')}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {footer.phone}
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${footer.email}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {footer.email}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Legal</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {footer.legalLinks.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-base text-muted-foreground xl:text-center">
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
