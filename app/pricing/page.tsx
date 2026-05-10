import type { Metadata } from "next";
import { pricingContent } from "@/content/pricing";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { CTAGlowButton } from "@/components/visuals/CTAGlowButton";
import { HugeiconsIcon } from "@hugeicons/react";
import { Tick02Icon, PlusSignIcon } from "@hugeicons/core-free-icons";
import { QuoteForm } from "@/components/visuals/QuoteForm";

export const metadata: Metadata = {
  title: pricingContent.metadata.title,
  description: pricingContent.metadata.description,
};

export default function PricingPage() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-background">
        <AnimatedGradientMesh variant="subtle" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6 drop-shadow-sm max-w-4xl mx-auto">
            {pricingContent.hero.headline}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            {pricingContent.hero.subheadline}
          </p>
        </div>
      </section>

      {/* 2. Base Pricing Tiers */}
      <section className="py-24 bg-card relative z-10 border-y border-border/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-display font-bold text-foreground mb-4">
              {pricingContent.basePricing.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {pricingContent.basePricing.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingContent.basePricing.tiers.map((tier, index) => (
              <div
                key={tier.name}
                className={`bg-background border rounded-3xl p-8 shadow-sm flex flex-col gap-6 relative overflow-hidden ${
                  index === 1 ? 'border-primary shadow-xl shadow-primary/10 scale-105 z-10' : 'border-border/50'
                }`}
              >
                {index === 1 && (
                  <div className="absolute top-0 inset-x-0 h-2 bg-primary" />
                )}
                <div>
                  <h3 className="font-heading font-bold text-2xl text-foreground">{tier.name}</h3>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-5xl font-display font-bold text-foreground">{tier.price}</span>
                  </div>
                </div>
                <p className="text-muted-foreground flex-1">
                  {tier.details}
                </p>
                <div className="pt-6 border-t border-border/50">
                  <div className="flex items-center gap-3">
                    <HugeiconsIcon icon={Tick02Icon} className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-foreground">100% Eggless Option</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Customization Add-ons */}
      <section className="py-24 bg-background relative z-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                {pricingContent.addOns.title}
              </h2>
              <p className="text-lg text-muted-foreground">
                {pricingContent.addOns.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pricingContent.addOns.items.map((item) => (
                <div key={item.name} className="flex items-center justify-between p-6 rounded-2xl bg-muted/50 border border-border/50 hover:border-primary/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <HugeiconsIcon icon={PlusSignIcon} className="w-5 h-5 text-accent" />
                    <span className="font-heading font-medium text-foreground">{item.name}</span>
                  </div>
                  <span className="font-mono text-muted-foreground text-sm">{item.startingPrice}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Request a Quote Form */}
      <section className="py-24 bg-primary relative z-10 border-t border-primary/20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto bg-background rounded-[3rem] p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-display font-bold text-foreground mb-4">
                {pricingContent.quoteForm.title}
              </h2>
              <p className="text-lg text-muted-foreground">
                {pricingContent.quoteForm.description}
              </p>
            </div>

            <QuoteForm ctaLabel={pricingContent.quoteForm.cta} />
          </div>
        </div>
      </section>
    </>
  );
}
