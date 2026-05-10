import React from "react";
import { homeContent } from "@/content/home";
import { MicroIconSet } from "@/components/visuals/MicroIconSet";

export function ValueProp() {
  const icons: ("clock" | "star" | "map")[] = ["clock", "star", "map"];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            {homeContent.valueProp.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {homeContent.valueProp.items.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center p-8 rounded-2xl bg-secondary/20 hover:bg-secondary/40 transition-colors border border-border/50">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <MicroIconSet name={icons[index]} className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
