import React from "react";
import { aboutContent } from "@/content/about";
import { FadeUpStagger } from "@/components/visuals";

export function PhilosophyStatement() {
  const { statement } = aboutContent.philosophyStatement;

  return (
    <section className="py-grand bg-accent text-accent-foreground px-6 text-center border-t border-border/50">
      <div className="container mx-auto max-w-4xl">
        <FadeUpStagger>
          <p className="font-heading text-3xl md:text-5xl leading-tight">
            &ldquo;{statement}&rdquo;
          </p>
        </FadeUpStagger>
      </div>
    </section>
  );
}
