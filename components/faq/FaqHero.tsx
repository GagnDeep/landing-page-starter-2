import React from "react";
import { faqContent } from "@/content/faq";
import { DotMatrixGrid } from "@/components/visuals/DotMatrixGrid";

export function FaqHero() {
  return (
    <section className="relative py-24 bg-secondary/10 overflow-hidden border-b border-border/50">
      <DotMatrixGrid className="opacity-40" />
      <div className="container relative z-10 mx-auto px-4 text-center max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-foreground">
          {faqContent.hero.heading}
        </h1>
        <p className="text-xl text-muted-foreground mb-10">
          {faqContent.hero.subheading}
        </p>
        <div className="relative max-w-xl mx-auto">
          <input
            type="text"
            placeholder={faqContent.hero.searchPlaceholder}
            className="w-full h-14 pl-6 pr-12 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
          />
        </div>
      </div>
    </section>
  );
}
