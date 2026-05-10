import React from "react";
import Link from "next/link";
import { pricingContent } from "@/content/pricing";
import { Button } from "@/components/ui/button";
import { CodeWindowTyping } from "@/components/visuals/CodeWindowTyping";

export function LogisticsAndPolicies() {
  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          <div>
            <div className="mb-12">
              <h3 className="text-2xl font-heading font-bold mb-4">{pricingContent.logistics.heading}</h3>
              <p className="text-muted/80">{pricingContent.logistics.text}</p>
            </div>
            <div className="mb-12">
              <h3 className="text-2xl font-heading font-bold mb-4">{pricingContent.bulkDiscounts.heading}</h3>
              <p className="text-muted/80 mb-4">{pricingContent.bulkDiscounts.text}</p>
              <Button asChild variant="outline" className="border-background text-background hover:bg-background hover:text-foreground">
                <Link href="/contact">{pricingContent.bulkDiscounts.cta}</Link>
              </Button>
            </div>
          </div>

          <div>
            <CodeWindowTyping
              lines={[
                "--- SYSTEM POLICIES ---",
                `[1] ${pricingContent.paymentMethods.heading}:`,
                ...pricingContent.paymentMethods.methods.map(m => `    - ${m}`),
                "",
                `[2] ${pricingContent.cancellationPolicy.heading}:`,
                `    ${pricingContent.cancellationPolicy.text}`
              ]}
              className="bg-black/90 border-white/20 text-accent h-full"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
