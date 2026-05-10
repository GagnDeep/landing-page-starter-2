import { pricingContent } from "@/content/pricing";
import { images } from "@/lib/images";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight01Icon, CheckmarkCircle01Icon, Add01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { CTAGlow } from "@/components/visuals/CTAGlow";
import { DotMatrixGrid } from "@/components/visuals/DotMatrixGrid";
import { SectionDivider } from "@/components/visuals/SectionDivider";

export const metadata = {
  title: pricingContent.meta.title,
  description: pricingContent.meta.description,
};

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* 1. Hero */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <AnimatedGradientMesh className="absolute inset-0 opacity-30 pointer-events-none z-0" />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
            {pricingContent.hero.headline}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto">
            {pricingContent.hero.subheadline}
          </p>
        </div>
      </section>

      {/* 2. Philosophy */}
      <section className="py-16 px-6 bg-background relative z-10 border-b border-border">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-xl font-heading leading-relaxed text-foreground/80">
            {pricingContent.philosophy.body}
          </p>
        </div>
      </section>

      {/* 3, 4, 5. Tiers */}
      <section className="py-32 px-6 bg-background relative">
        <DotMatrixGrid className="absolute inset-0 opacity-20 pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingContent.tiers.map((tier) => {
              const isPopular = tier.id === "signature";
              return (
                <div
                  key={tier.id}
                  className={`relative flex flex-col rounded-3xl p-10 transition-all duration-300 border ${
                    isPopular
                      ? 'bg-primary text-primary-foreground border-primary shadow-2xl lg:-translate-y-4'
                      : 'bg-card text-card-foreground border-border/50 hover:border-primary/50 hover:shadow-xl'
                  }`}
                >
                  {isPopular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                      Most Popular
                    </div>
                  )}

                  <div className="mb-8 border-b border-current/10 pb-8">
                    <h2 className="font-heading text-3xl font-bold mb-4">{tier.name}</h2>
                    <p className={`text-sm leading-relaxed ${isPopular ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                      {tier.description}
                    </p>
                  </div>

                  <ul className="space-y-5 mb-10 flex-1">
                    {tier.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <HugeiconsIcon
                          icon={CheckmarkCircle01Icon}
                          strokeWidth={2}
                          className={`w-5 h-5 shrink-0 mt-0.5 ${isPopular ? 'text-accent' : 'text-primary'}`}
                        />
                        <span className="text-sm font-medium leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/contact?package=${tier.id}`}
                    className={`w-full py-4 rounded-full text-center text-sm font-bold transition-all ${
                      isPopular
                        ? 'bg-background text-foreground hover:bg-background/90'
                        : 'bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground'
                    }`}
                  >
                    Inquire Now
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider width="300px" />

      {/* 6. Enhancements */}
      <section className="py-32 px-6 bg-secondary/10">
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">{pricingContent.enhancements.title}</h2>
            <p className="text-xl text-muted-foreground mb-10">{pricingContent.enhancements.description}</p>
            <ul className="space-y-6">
               {pricingContent.enhancements.items.map((item, idx) => (
                 <li key={idx} className="flex items-center gap-4 bg-background p-6 rounded-2xl shadow-sm border border-border/50">
                   <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                     <HugeiconsIcon icon={Add01Icon} strokeWidth={2} className="w-5 h-5" />
                   </div>
                   <span className="font-heading text-lg font-semibold">{item}</span>
                 </li>
               ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <Image src={images.food.plated} alt="Enhancements" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* 7. FAQ (Pricing Specific) */}
      <section className="py-24 px-6 bg-background border-t border-border">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-heading text-4xl font-bold mb-12 text-center">{pricingContent.faq.title}</h2>
          <div className="space-y-6">
            {pricingContent.faq.items.map((item, idx) => (
              <div key={idx} className="bg-secondary/10 p-8 rounded-2xl border border-border/50">
                <h3 className="font-bold text-lg mb-3">{item.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA */}
      <section className="py-32 bg-foreground text-background relative overflow-hidden text-center px-6">
        <AnimatedGradientMesh className="absolute inset-0 opacity-20 pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-10 text-background">
            {pricingContent.cta.headline}
          </h2>
          <CTAGlow>
            <Link
              href="/contact"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-full text-base font-medium hover:bg-primary/90 transition-all inline-flex items-center gap-2"
            >
              {pricingContent.cta.button}
              <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="w-5 h-5" />
            </Link>
          </CTAGlow>
        </div>
      </section>
    </div>
  );
}
