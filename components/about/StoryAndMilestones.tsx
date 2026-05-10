import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { aboutContent } from "@/content/about";
import { FloatingBlobs } from "@/components/visuals/FloatingBlobs";

export function StoryAndMilestones() {
  return (
    <section className="py-24 bg-foreground text-background relative overflow-hidden">
      <FloatingBlobs className="opacity-10 mix-blend-screen" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
          <div>
            <h2 className="text-3xl font-heading font-bold mb-6 text-background">{aboutContent.customerStories.heading}</h2>
            <blockquote className="text-2xl font-heading italic text-muted/90 mb-6 leading-relaxed">
              "{aboutContent.customerStories.story}"
            </blockquote>
            <p className="font-bold text-accent">— {aboutContent.customerStories.author}</p>
          </div>

          <div className="bg-black/40 p-10 rounded-3xl border border-white/10 backdrop-blur-sm">
            <h3 className="text-2xl font-heading font-bold mb-8 text-background">{aboutContent.milestones.heading}</h3>
            <div className="space-y-8">
              {aboutContent.milestones.stats.map((stat, i) => (
                <div key={i} className="flex justify-between items-end border-b border-white/10 pb-4">
                  <span className="text-muted/80 text-lg">{stat.label}</span>
                  <span className="text-3xl font-bold font-heading text-accent">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-heading font-bold mb-8">{aboutContent.careersTeaser.heading}</h2>
          <Button asChild size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/careers">{aboutContent.careersTeaser.cta}</Link>
          </Button>
        </div>

      </div>
    </section>
  );
}
