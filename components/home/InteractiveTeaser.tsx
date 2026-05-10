import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { homeContent } from "@/content/home";

export function InteractiveTeaser() {
  return (
    <section className="py-24 bg-primary/5 text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          {homeContent.interactiveTeaser.heading}
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          {homeContent.interactiveTeaser.subheading}
        </p>
        <Button asChild size="lg" className="rounded-full px-8">
          <Link href="/pricing">{homeContent.interactiveTeaser.cta}</Link>
        </Button>
      </div>
    </section>
  );
}
