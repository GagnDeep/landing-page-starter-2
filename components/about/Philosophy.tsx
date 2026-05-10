import React from "react";
import { aboutContent } from "@/content/about";
import { DotMatrixGrid } from "@/components/visuals/DotMatrixGrid";
import { MicroIconSet } from "@/components/visuals/MicroIconSet";

export function Philosophy() {
  const icons: ("star" | "clock" | "heart")[] = ["star", "clock", "heart"];

  return (
    <section className="py-24 bg-secondary/10 relative border-y border-border/50">
      <DotMatrixGrid className="opacity-30" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-16">
          {aboutContent.philosophy.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutContent.philosophy.items.map((item, idx) => (
            <div key={idx} className="bg-background p-10 rounded-3xl shadow-sm border border-border">
              <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                <MicroIconSet name={icons[idx]} className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
