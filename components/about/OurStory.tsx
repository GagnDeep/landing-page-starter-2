import React from "react";
import { aboutContent } from "@/content/about";
import { FadeUpStagger, LuxuryDivider } from "@/components/visuals";

export function OurStory() {
  const { headline, paragraphs, pullQuote } = aboutContent.ourStory;

  return (
    <section className="py-grand bg-background px-6">
      <div className="container mx-auto max-w-prose">
        <FadeUpStagger>
          <h2 className="font-heading text-4xl text-center mb-12 text-primary">{headline}</h2>

          <div className="space-y-8 font-sans text-lg leading-relaxed text-muted-foreground">
            <p>{paragraphs[0]}</p>

            <LuxuryDivider width="icon" className="my-12 opacity-50" />

            <blockquote className="font-heading text-2xl md:text-3xl text-foreground text-center italic py-4 border-y border-border/30 my-12 leading-relaxed">
              &ldquo;{pullQuote}&rdquo;
            </blockquote>

            <p>{paragraphs[1]}</p>
            <p>{paragraphs[2]}</p>
          </div>
        </FadeUpStagger>
      </div>
    </section>
  );
}
