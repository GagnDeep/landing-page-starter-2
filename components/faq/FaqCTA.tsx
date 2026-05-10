import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { faqContent } from "@/content/faq";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";

export function FaqCTA() {
  return (
    <section className="relative py-32 border-t border-border overflow-hidden text-center">
      <AnimatedGradientMesh className="absolute inset-0 z-0 opacity-50" intensity="low" />
      <div className="container relative z-10 mx-auto px-4">
        <h2 className="text-4xl font-heading font-bold mb-4 text-foreground">{faqContent.cta.heading}</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">{faqContent.cta.text}</p>
        <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground h-14 px-10 text-lg">
          <Link href="/contact">{faqContent.cta.button}</Link>
        </Button>
      </div>
    </section>
  );
}
