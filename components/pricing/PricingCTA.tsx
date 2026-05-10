import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { pricingContent } from "@/content/pricing";
import { CTAGlow } from "@/components/visuals/CTAGlow";

export function PricingCTA() {
  return (
    <section className="py-32 bg-background text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-heading font-bold mb-8 text-foreground">{pricingContent.cta.heading}</h2>
        <CTAGlow>
          <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground h-14 px-10 text-lg">
            <Link href="/contact">{pricingContent.cta.text}</Link>
          </Button>
        </CTAGlow>
      </div>
    </section>
  );
}
