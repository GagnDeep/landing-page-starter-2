import React from "react";
import Link from "next/link";
import { faqContent } from "@/content/faq";
import { FadeUpStagger, LuxuryDivider } from "@/components/visuals";

export function StillNeedHelp() {
  const { headline, description, cta, ctaHref } = faqContent.stillNeedHelp;

  return (
    <section className="py-24 px-6 bg-background text-center border-t border-border/50">
      <div className="container mx-auto max-w-2xl">
        <FadeUpStagger>
          <LuxuryDivider width="icon" className="mb-8" />
          <h2 className="font-heading text-3xl mb-4">{headline}</h2>
          <p className="font-sans text-muted-foreground mb-8">{description}</p>
          <Link href={ctaHref} className="font-sans text-sm tracking-widest uppercase text-primary hover:text-primary/80 transition-colors inline-block border-b border-primary pb-1">
            {cta}
          </Link>
        </FadeUpStagger>
      </div>
    </section>
  );
}
