import React from 'react';
import Link from 'next/link';
import { visitUs } from '@/content/home';

export function VisitUs() {
  return (
    <section className="w-full py-24 bg-background border-y border-border">
      <div className="container mx-auto px-4 md:px-8 text-center max-w-2xl">
        {/* Home-15-VisitUsBlock */}
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8">
          {visitUs.heading}
        </h2>

        <div className="space-y-6 mb-10 text-muted-foreground text-lg">
          <p className="font-medium text-foreground">{visitUs.address}</p>
          <p>{visitUs.hours}</p>
        </div>

        <Link
          href={visitUs.cta.href}
          className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-border text-foreground font-semibold tracking-wide hover:border-primary hover:text-primary transition-all duration-300"
        >
          {visitUs.cta.label}
        </Link>
      </div>
    </section>
  );
}
