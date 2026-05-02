import { pricingContent } from "@/content/pricing";
import { IMAGE_REGISTRY } from "@/lib/images";
import {
  AnimatedGradientMesh,
  FadeInScroll,
  CTAGlow,
  KenBurnsImage,
} from "@/components/visuals";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: pricingContent.meta.title,
  description: pricingContent.meta.description,
};

function PricingList({ title, items, note }: { title: string; items: { name: string; price: string }[]; note?: string }) {
  return (
    <FadeInScroll className="w-full">
      <div className="mb-8">
        <h3 className="text-3xl font-heading text-primary mb-2">{title}</h3>
        {note && <p className="text-sm text-muted-foreground italic mb-6">{note}</p>}
      </div>
      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-baseline group border-b border-border/20 pb-4">
            <span className="text-lg text-foreground group-hover:text-primary transition-colors">{item.name}</span>
            <span className="text-sm uppercase tracking-widest text-muted-foreground">{item.price}</span>
          </div>
        ))}
      </div>
    </FadeInScroll>
  );
}

export default function PricingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start overflow-hidden">
      {/* 1. Hero */}
      <section className="relative w-full pt-48 pb-32 flex flex-col items-center justify-center overflow-hidden bg-background">
        <div className="z-20 text-center px-4 max-w-4xl mx-auto">
          <FadeInScroll>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading text-primary mb-6 tracking-tight">
              {pricingContent.hero.heading}
            </h1>
          </FadeInScroll>
          <FadeInScroll delay={0.2}>
            <p className="text-xl md:text-2xl text-foreground/80 font-light tracking-wide">
              {pricingContent.hero.subheading}
            </p>
          </FadeInScroll>
        </div>
      </section>

      {/* 2. Philosophy */}
      <section className="w-full py-24 bg-muted/30">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <FadeInScroll>
            <p className="text-2xl md:text-4xl font-heading text-foreground leading-relaxed">
              {pricingContent.philosophy.text}
            </p>
          </FadeInScroll>
        </div>
      </section>

      {/* Structure & Fees */}
      <section className="w-full py-32">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-32">
            <FadeInScroll>
              <h3 className="text-2xl font-heading text-primary mb-4">{pricingContent.baseServicesConcept.heading}</h3>
              <p className="text-muted-foreground leading-relaxed">{pricingContent.baseServicesConcept.description}</p>
            </FadeInScroll>
            <FadeInScroll delay={0.2}>
              <h3 className="text-2xl font-heading text-primary mb-4">{pricingContent.convenienceFeeStructure.heading}</h3>
              <p className="text-muted-foreground leading-relaxed">{pricingContent.convenienceFeeStructure.description}</p>
            </FadeInScroll>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-32">
            {/* Hair */}
            <PricingList title={pricingContent.haircutPricing.heading} items={pricingContent.haircutPricing.items} />
            <PricingList title={pricingContent.colorPricing.heading} items={pricingContent.colorPricing.items} note={pricingContent.colorPricing.note} />

            {/* Break Image */}
            <div className="md:col-span-2 aspect-[21/9] w-full relative overflow-hidden my-16">
              <KenBurnsImage src={IMAGE_REGISTRY.hairColor.src} alt={IMAGE_REGISTRY.hairColor.alt} />
            </div>

            {/* Other Services */}
            <PricingList title={pricingContent.treatmentPricing.heading} items={pricingContent.treatmentPricing.items} />
            <PricingList title={pricingContent.nailPricing.heading} items={pricingContent.nailPricing.items} />
            <PricingList title={pricingContent.skincarePricing.heading} items={pricingContent.skincarePricing.items} />
          </div>
        </div>
      </section>

      {/* Memberships */}
      <section className="w-full py-32 bg-secondary/10">
        <div className="container mx-auto px-6 max-w-6xl">
          <FadeInScroll className="mb-16 text-center">
            <h2 className="text-5xl font-heading text-primary">{pricingContent.memberships.tier1.name.split(" ")[0] || "Memberships"}</h2>
          </FadeInScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeInScroll>
              <div className="p-12 border border-border bg-background flex flex-col h-full">
                <h3 className="text-3xl font-heading mb-2">{pricingContent.memberships.tier1.name}</h3>
                <p className="text-xl text-muted-foreground mb-8">{pricingContent.memberships.tier1.price}</p>
                <ul className="space-y-4 mb-12 flex-1">
                  {pricingContent.memberships.tier1.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-primary mt-1">✦</span>
                      <span className="text-foreground/80">{b}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="text-sm uppercase tracking-widest text-primary hover:text-foreground transition-colors border-b border-primary pb-1 self-start">
                  {pricingContent.memberships.tier1.cta}
                </Link>
              </div>
            </FadeInScroll>
            <FadeInScroll delay={0.2}>
              <div className="p-12 bg-foreground text-background flex flex-col h-full">
                <h3 className="text-3xl font-heading mb-2">{pricingContent.memberships.tier2.name}</h3>
                <p className="text-xl text-primary mb-8">{pricingContent.memberships.tier2.price}</p>
                <ul className="space-y-4 mb-12 flex-1">
                  {pricingContent.memberships.tier2.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-primary mt-1">✦</span>
                      <span className="text-background/80">{b}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="text-sm uppercase tracking-widest text-background hover:text-primary transition-colors border-b border-background pb-1 self-start">
                  {pricingContent.memberships.tier2.cta}
                </Link>
              </div>
            </FadeInScroll>
          </div>
        </div>
      </section>

      {/* Policies & Payment */}
      <section className="w-full py-24 border-y border-border/40">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <FadeInScroll>
              <h3 className="text-xl font-heading mb-4">{pricingContent.policies.cancellation.heading}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{pricingContent.policies.cancellation.text}</p>
            </FadeInScroll>
            <FadeInScroll delay={0.2}>
              <h3 className="text-xl font-heading mb-4">{pricingContent.policies.paymentMethods.heading}</h3>
              <div className="flex gap-6 text-muted-foreground">
                {pricingContent.policies.paymentMethods.methods.map((m, i) => (
                  <span key={i} className="text-sm font-medium">{m}</span>
                ))}
              </div>
            </FadeInScroll>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full py-40 relative overflow-hidden">
        <AnimatedGradientMesh className="absolute inset-0 z-0 opacity-30" />
        <div className="container mx-auto px-6 text-center relative z-10 flex flex-col items-center">
          <FadeInScroll>
            <h2 className="text-4xl md:text-6xl font-heading text-primary mb-8 max-w-2xl mx-auto leading-tight">
              {pricingContent.cta.heading}
            </h2>
            <Link href="/booking">
              <CTAGlow>{pricingContent.cta.buttonText}</CTAGlow>
            </Link>
          </FadeInScroll>
          <FadeInScroll delay={0.3} className="mt-16">
            <p className="text-muted-foreground mb-4">{pricingContent.customQuote.heading}</p>
            <Link href="/contact" className="text-sm uppercase tracking-widest text-primary border-b border-primary hover:text-foreground transition-colors pb-1">
              {pricingContent.customQuote.cta}
            </Link>
          </FadeInScroll>
        </div>
      </section>

    </main>
  );
}
