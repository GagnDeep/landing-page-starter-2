import React from "react";
import { homeContent } from "@/content/home";
import { FadeUpStagger } from "@/components/visuals";

export function PartnerVenues() {
  const { headline, partnersAlt } = homeContent.partnerVenues;

  return (
    <section className="py-macro bg-background px-6 border-t border-border/50">
      <div className="container mx-auto text-center">
        <FadeUpStagger>
          <h2 className="font-heading text-xl md:text-2xl mb-12 opacity-80">{headline}</h2>
          <div className="flex flex-wrap justify-center gap-12 lg:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {partnersAlt.map((partner, idx) => (
              <div key={idx} className="font-sans font-semibold tracking-widest uppercase text-sm">
                {partner}
              </div>
            ))}
          </div>
        </FadeUpStagger>
      </div>
    </section>
  );
}
