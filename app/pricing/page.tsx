import { pricingContent } from "@/content/pricing";
import {
  FadeIn,
  StaggerReveal,
  StaggerItem,
  AnimatedText,
  ScrollReveal,
} from "@/components/visuals";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PricingPage() {
  return (
    <main className="min-h-screen w-full bg-background pt-32 pb-32">
      {/* 1. Investment Hero */}
      <section className="px-6 md:px-12 max-w-4xl mx-auto text-center min-h-[50vh] flex flex-col justify-center items-center">
        <AnimatedText
          el="h1"
          text={pricingContent.hero.headline}
          className="text-5xl md:text-7xl font-heading text-foreground mb-6"
        />
        <FadeIn delay={0.4}>
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
            {pricingContent.hero.subheadline}
          </p>
        </FadeIn>
      </section>

      {/* 2. The Value of Expertise */}
      <section className="py-24 px-6 md:px-12 max-w-3xl mx-auto text-center border-t border-border">
        <ScrollReveal>
          <h2 className="text-sm tracking-widest uppercase text-muted-foreground mb-8">
            {pricingContent.valueProposition.heading}
          </h2>
          <p className="text-xl md:text-3xl font-heading leading-relaxed text-foreground">
            {pricingContent.valueProposition.body}
          </p>
        </ScrollReveal>
      </section>

      {/* 3 & 4. Tiers */}
      <section className="py-32 px-6 md:px-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
        {/* Tier 1 */}
        <FadeIn direction="up" className="bg-secondary p-8 lg:p-16 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-heading mb-2 text-secondary-foreground">{pricingContent.tier1.heading}</h3>
            <p className="text-sm tracking-widest uppercase text-muted-foreground mb-8">{pricingContent.tier1.subheading}</p>
            <p className="text-4xl md:text-5xl font-heading mb-8 text-secondary-foreground">{pricingContent.tier1.priceIndicator}</p>
            <p className="text-muted-foreground leading-relaxed mb-10">{pricingContent.tier1.description}</p>
            <ul className="space-y-4 mb-12">
              {pricingContent.tier1.features.map((feature, i) => (
                <li key={i} className="flex items-start text-secondary-foreground/80">
                  <span className="mr-3 text-primary text-lg leading-none">•</span>
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        {/* Tier 2 */}
        <FadeIn direction="up" delay={0.2} className="bg-foreground text-background p-8 lg:p-16 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-heading mb-2">{pricingContent.tier2.heading}</h3>
            <p className="text-sm tracking-widest uppercase text-background/60 mb-8">{pricingContent.tier2.subheading}</p>
            <p className="text-4xl md:text-5xl font-heading mb-8">{pricingContent.tier2.priceIndicator}</p>
            <p className="text-background/80 leading-relaxed mb-10">{pricingContent.tier2.description}</p>
            <ul className="space-y-4 mb-12">
              {pricingContent.tier2.features.map((feature, i) => (
                <li key={i} className="flex items-start text-background/90">
                  <span className="mr-3 text-background/40 text-lg leading-none">•</span>
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </section>

      {/* 5. Custom Requirements */}
      <section className="py-24 px-6 md:px-12 bg-muted/20">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading mb-4 text-foreground">{pricingContent.customRequirements.heading}</h2>
              <p className="text-muted-foreground">{pricingContent.customRequirements.description}</p>
            </div>
          </FadeIn>
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingContent.customRequirements.items.map((item, i) => (
              <StaggerItem key={i} className="border-t border-border pt-6">
                <h4 className="text-lg font-heading mb-2 text-foreground">{item.name}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* 6. What Determines Cost? */}
      <section className="py-32 px-6 md:px-12 max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-heading mb-6 text-foreground">{pricingContent.costVariables.heading}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{pricingContent.costVariables.description}</p>
          </div>
        </ScrollReveal>
        <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {pricingContent.costVariables.variables.map((variable, i) => (
            <StaggerItem key={i} className="px-6 border-x border-border/50 first:border-l-0 last:border-r-0">
              <h3 className="text-xl tracking-widest uppercase mb-4 text-foreground">{variable.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{variable.description}</p>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </section>

      {/* 7. Payment Structure */}
      <section className="py-24 px-6 md:px-12 max-w-3xl mx-auto border-t border-border">
        <FadeIn>
          <h2 className="text-2xl font-heading mb-8 text-foreground">{pricingContent.paymentStructure.heading}</h2>
          <ul className="space-y-6">
            {pricingContent.paymentStructure.terms.map((term, i) => (
              <li key={i} className="flex items-start text-muted-foreground">
                <span className="mr-4 text-primary text-xl leading-none font-light">—</span>
                <span className="leading-relaxed">{term}</span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </section>

      {/* 8. Final CTA */}
      <section className="py-40 px-6 bg-secondary text-center">
        <FadeIn className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-heading mb-6 text-secondary-foreground">{pricingContent.finalCta.heading}</h2>
          <p className="text-xl text-muted-foreground mb-12">{pricingContent.finalCta.subheading}</p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 text-secondary-foreground border-b border-secondary-foreground pb-1 hover:opacity-70 transition-all uppercase tracking-widest text-sm"
          >
            <span>{pricingContent.finalCta.ctaLabel}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </section>
    </main>
  );
}
