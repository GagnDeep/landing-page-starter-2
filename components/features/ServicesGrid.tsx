import React from "react";
import { featuresContent } from "@/content/features";
import { DotMatrixGrid } from "@/components/visuals/DotMatrixGrid";
import { MicroIconSet } from "@/components/visuals/MicroIconSet";

export function ServicesGrid() {
  const icons: ("cake" | "clock" | "gift" | "star")[] = ["cake", "clock", "gift", "star"];

  return (
    <section className="py-24 relative bg-background">
      <DotMatrixGrid className="opacity-40" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {featuresContent.services.map((service, idx) => (
            <div key={idx} className="bg-secondary/10 border border-border/50 p-10 rounded-3xl hover:bg-secondary/20 transition-colors">
              <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                <MicroIconSet name={icons[idx]} className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
