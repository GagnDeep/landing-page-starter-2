"use client";

import React from "react";
import { CTAGlowButton } from "./CTAGlowButton";

export function QuoteForm({ ctaLabel }: { ctaLabel: string }) {
  return (
    <form className="flex flex-col gap-6" action="/" method="GET" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
          <input type="text" id="name" className="px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your full name" required />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone</label>
          <input type="tel" id="phone" className="px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your phone number" required />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="details" className="text-sm font-medium text-foreground">Theme & Details</label>
        <textarea id="details" rows={4} className="px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none" placeholder="Tell us about the celebration and your cake ideas..." required></textarea>
      </div>
      <CTAGlowButton as="button" type="submit" className="w-full mt-4 flex justify-center py-4">
        {ctaLabel}
      </CTAGlowButton>
    </form>
  );
}
