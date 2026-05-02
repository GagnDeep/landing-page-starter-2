import React from "react";
import { homeContent } from "@/content/home";
import { AnimatedSVGIllustration } from "@/components/visuals";

export function BrandEssence() {
  const content = homeContent.brandEssence;

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
        <div className="w-24 h-24 mx-auto mb-8 text-primary">
            <AnimatedSVGIllustration />
        </div>
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 text-foreground">
          {content.headline}
        </h2>
        <p className="text-xl md:text-3xl text-muted-foreground font-heading leading-relaxed md:leading-loose font-light">
          "{content.body}"
        </p>
      </div>
    </section>
  );
}
