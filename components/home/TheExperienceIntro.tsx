import React from "react";
import { homeContent } from "@/content/home";
import { FadeUpStagger } from "@/components/visuals";

export function TheExperienceIntro() {
  const { kicker, headline, paragraph } = homeContent.theExperienceIntro;

  return (
    <section className="pt-grand pb-macro px-6 bg-background text-center">
      <div className="container mx-auto max-w-3xl">
        <FadeUpStagger>
          <span className="text-primary text-xs tracking-widest uppercase font-semibold block mb-4">
            {kicker}
          </span>
          <h2 className="font-heading text-4xl md:text-5xl mb-8 text-foreground">
            {headline}
          </h2>
          <p className="font-sans text-lg text-muted-foreground leading-relaxed">
            {paragraph}
          </p>
        </FadeUpStagger>
      </div>
    </section>
  );
}
