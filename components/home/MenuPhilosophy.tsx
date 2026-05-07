import React from "react";
import { homeContent } from "@/content/home";
import { FadeUpStagger } from "@/components/visuals";

export function MenuPhilosophy() {
  const { headline, description } = homeContent.menuPhilosophy;

  return (
    <section className="py-grand bg-background text-foreground px-6 text-center border-t border-border/50">
      <div className="container mx-auto max-w-3xl">
        <FadeUpStagger>
          <h2 className="font-heading text-4xl md:text-5xl mb-8">{headline}</h2>
          <p className="font-sans text-lg text-muted-foreground leading-relaxed">{description}</p>
        </FadeUpStagger>
      </div>
    </section>
  );
}
