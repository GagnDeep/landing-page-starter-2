"use client";

import React from "react";
import Link from "next/link";
import { homeContent } from "@/content/home";
import { LuxuryDivider } from "@/components/visuals";

export function GlobalFooter() {
  const { brandName, address, email, phone, links, newsletter, copyright } = homeContent.globalFooter;

  return (
    <footer className="bg-secondary text-secondary-foreground pt-24 pb-12 mt-auto">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          <div className="flex flex-col gap-6">
            <h3 className="font-heading text-2xl tracking-widest uppercase">{brandName}</h3>
            <div className="text-sm space-y-2 opacity-80">
              <p>{address}</p>
              <p><a href={`mailto:${email}`} className="hover:text-primary transition-colors">{email}</a></p>
              <p><a href={`tel:${phone.replace(/\s+/g, '')}`} className="hover:text-primary transition-colors">{phone}</a></p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="font-heading text-lg tracking-widest uppercase">Explore</h3>
            <ul className="flex flex-col gap-4 text-sm opacity-80">
              {links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-primary transition-colors uppercase tracking-wider">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="font-heading text-lg tracking-widest uppercase">{newsletter.headline}</h3>
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder={newsletter.placeholder}
                className="bg-transparent border-b border-secondary-foreground/30 py-2 focus:outline-none focus:border-primary transition-colors text-sm"
              />
              <button
                type="submit"
                className="self-start uppercase text-xs tracking-widest hover:text-primary transition-colors"
              >
                {newsletter.buttonText}
              </button>
            </form>
          </div>
        </div>

        <LuxuryDivider width="full" className="mb-8 opacity-30" />

        <div className="text-center text-xs opacity-60 tracking-wider">
          <p>{copyright}</p>
        </div>
      </div>
    </footer>
  );
}
