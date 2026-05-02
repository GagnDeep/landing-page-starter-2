import React from "react";
import Link from "next/link";
import { pricingContent } from "@/content/pricing";
import { globalContent } from "@/content/global";
import { DotMatrixGrid } from "@/components/visuals/DotMatrixGrid";
import { CTAGlow } from "@/components/visuals/CTAGlow";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";

export const metadata = {
  title: pricingContent.meta.title,
  description: pricingContent.meta.description,
};

export default function PricingPage() {
  return (
    <div className="pb-24">
      {/* 1. Hero Header */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-border/50">
        <AnimatedGradientMesh intensity="light" />
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            {pricingContent.hero.headline}
          </h1>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            {pricingContent.hero.subheadline}
          </p>
        </div>
      </section>

      {/* 2. Pricing Philosophy */}
      <section className="py-24 bg-background">
        <div className="container px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl font-bold mb-6">{pricingContent.philosophy.headline}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {pricingContent.philosophy.content}
          </p>
        </div>
      </section>

      {/* 3. Starting Prices (Grid) */}
      <section className="py-24 bg-muted/20 relative overflow-hidden">
        <DotMatrixGrid spacing={40} className="opacity-30" />
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-16">{pricingContent.basePrices.headline}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingContent.basePrices.items.map((item, idx) => (
              <div key={idx} className="bg-background border border-border/60 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center justify-center min-h-[200px]">
                <h3 className="font-heading text-2xl font-bold mb-4">{item.service}</h3>
                <p className="text-primary font-semibold text-lg">{item.price}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-12 max-w-xl mx-auto">
            * {pricingContent.basePrices.note}
          </p>
        </div>
      </section>

      {/* 4. What Determines the Price */}
      <section className="py-24">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold mb-12">{pricingContent.factors.headline}</h2>
          <ul className="space-y-4 inline-block text-left">
            {pricingContent.factors.items.map((factor, idx) => (
              <li key={idx} className="flex items-center space-x-3 text-lg text-muted-foreground">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{factor}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Wedding Packages */}
      <section className="py-24 bg-secondary text-secondary-foreground">
        <div className="container px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">{pricingContent.packages.headline}</h2>
          <p className="text-lg opacity-90 mb-12">
            {pricingContent.packages.description}
          </p>
          <a href={globalContent.navigation.cta.href} target="_blank" rel="noopener noreferrer" className="inline-block border-2 border-secondary-foreground px-8 py-3 rounded-md hover:bg-secondary-foreground hover:text-secondary transition-colors font-semibold">
            {pricingContent.packages.button}
          </a>
        </div>
      </section>

      {/* 6. FAQ Snippet & 7. CTA */}
      <section className="py-24 bg-foreground text-background text-center relative overflow-hidden">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
          <div className="mb-16 pb-16 border-b border-background/20">
             <h2 className="font-heading text-2xl font-bold mb-4">{pricingContent.faqSnippet.headline}</h2>
             <p className="text-muted/80">{pricingContent.faqSnippet.content}</p>
          </div>
          <h2 className="font-heading text-4xl font-bold mb-10">{pricingContent.cta.headline}</h2>
          <a href={globalContent.navigation.cta.href} target="_blank" rel="noopener noreferrer">
            <CTAGlow className="bg-background text-foreground hover:bg-muted ring-0">{pricingContent.cta.button}</CTAGlow>
          </a>
        </div>
      </section>
    </div>
  );
}
