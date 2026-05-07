import React from "react";
import { homeContent } from "@/content/home";
import { FadeUpStagger, LuxuryDivider } from "@/components/visuals";

export function BrandStatement() {
  return (
    <section className="py-grand bg-background text-foreground px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <FadeUpStagger>
          <LuxuryDivider width="icon" className="mb-12" />
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl leading-relaxed tracking-wide text-primary-foreground">
            &ldquo;{homeContent.brandStatement.statement}&rdquo;
          </h2>
          <LuxuryDivider width="icon" className="mt-12" />
        </FadeUpStagger>
      </div>
    </section>
  );
}
