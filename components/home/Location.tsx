import React from "react";
import Link from "next/link";
import { homeContent } from "@/content/home";

export function Location() {
  const content = homeContent.location;

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
          {content.headline}
        </h2>
        <p className="text-xl text-muted-foreground mb-10 font-heading font-light">
          {content.address}
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center border-b-2 border-accent text-foreground font-bold tracking-widest uppercase text-sm pb-1 hover:text-accent transition-colors"
        >
          {content.cta}
        </Link>
      </div>
    </section>
  );
}
