import React from "react";
import { faqContent } from "@/content/faq";
import { FadeUpStagger } from "@/components/visuals";

export function FAQHero() {
  const { headline, subheadline } = faqContent.faqHero;

  return (
    <section className="pt-40 pb-24 px-6 text-center bg-background border-b border-border/50">
      <div className="container mx-auto max-w-3xl">
        <FadeUpStagger>
          <h1 className="font-heading text-5xl md:text-6xl text-foreground mb-6">
            {headline}
          </h1>
          <p className="font-sans text-xl text-muted-foreground font-light">
            {subheadline}
          </p>
        </FadeUpStagger>
      </div>
    </section>
  );
}
