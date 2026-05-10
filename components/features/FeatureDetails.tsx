import React from "react";
import Image from "next/image";
import { featuresContent } from "@/content/features";
import { SITE_IMAGES } from "@/lib/images";

export function FeatureDetails() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Dietary */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-sm">
            <Image src={SITE_IMAGES.dryFruits.url} alt={SITE_IMAGES.dryFruits.alt} fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-heading font-bold mb-6 text-foreground">{featuresContent.dietaryOptions.heading}</h2>
            <p className="text-muted-foreground mb-8 text-lg">{featuresContent.dietaryOptions.description}</p>
            <div className="space-y-6">
              {featuresContent.dietaryOptions.items.map((item, i) => (
                <div key={i}>
                  <h4 className="font-bold text-foreground">{item.label}</h4>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Packaging & Network */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-secondary/20 p-10 rounded-3xl border border-border/50">
            <h3 className="text-2xl font-heading font-bold mb-4">{featuresContent.packaging.heading}</h3>
            <p className="text-muted-foreground">{featuresContent.packaging.description}</p>
          </div>
          <div className="bg-primary/5 p-10 rounded-3xl border border-border/50">
            <h3 className="text-2xl font-heading font-bold mb-4">{featuresContent.deliveryNetwork.heading}</h3>
            <p className="text-muted-foreground mb-4">{featuresContent.deliveryNetwork.description}</p>
            <div className="flex flex-wrap gap-2">
              {featuresContent.deliveryNetwork.locations.map((loc, i) => (
                <span key={i} className="px-3 py-1 bg-background rounded-full text-xs font-medium border border-border shadow-sm">
                  {loc}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
