import React from "react";
import { pricingContent } from "@/content/pricing";

export function StandardMenu() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl font-heading font-bold mb-10 text-foreground">{pricingContent.standardMenu.heading}</h2>
            <div className="space-y-4">
              {pricingContent.standardMenu.items.map((item, i) => (
                <div key={i} className="flex justify-between items-center p-4 rounded-xl border border-border/50 hover:bg-secondary/20 transition-colors">
                  <span className="font-bold text-foreground">{item.name}</span>
                  <span className="text-muted-foreground font-mono">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-heading font-bold mb-10 text-foreground">{pricingContent.hampers.heading}</h2>
            <div className="space-y-4">
              {pricingContent.hampers.items.map((item, i) => (
                <div key={i} className="flex justify-between items-center p-4 rounded-xl border border-border/50 hover:bg-secondary/20 transition-colors">
                  <span className="font-bold text-foreground">{item.name}</span>
                  <span className="text-muted-foreground font-mono">{item.priceText}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
