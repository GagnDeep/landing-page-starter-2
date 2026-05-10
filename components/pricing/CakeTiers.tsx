import React from "react";
import { pricingContent } from "@/content/pricing";

export function CakeTiers() {
  return (
    <section className="py-24 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-heading font-bold mb-4">{pricingContent.cakeTiers.heading}</h2>
          <p className="text-muted-foreground">{pricingContent.cakeTiers.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingContent.cakeTiers.tiers.map((tier, idx) => (
            <div key={idx} className={`p-8 rounded-3xl border bg-card flex flex-col ${idx === 1 ? 'border-primary shadow-md ring-1 ring-primary/20 scale-105' : 'border-border shadow-sm'}`}>
              <h3 className="text-2xl font-bold mb-2 text-foreground">{tier.name}</h3>
              <p className="text-muted-foreground mb-8 flex-1">{tier.description}</p>
              <div className="text-xl font-heading font-bold text-primary p-4 bg-primary/5 rounded-xl text-center">
                {tier.priceText}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
