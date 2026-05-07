import React from "react";
import { homeContent } from "@/content/home";
import { FadeUpStagger } from "@/components/visuals";

export function StatisticsGrid() {
  return (
    <section className="py-macro bg-secondary text-secondary-foreground border-y border-border/50">
      <div className="container mx-auto px-6">
        <FadeUpStagger className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-border/50">
          {homeContent.statisticsGrid.stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center pt-8 md:pt-0 first:pt-0">
              <span className="font-heading text-5xl md:text-6xl text-primary mb-2">
                {stat.number}
              </span>
              <span className="font-sans text-sm tracking-widest uppercase opacity-80">
                {stat.label}
              </span>
            </div>
          ))}
        </FadeUpStagger>
      </div>
    </section>
  );
}
