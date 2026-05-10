import Link from "next/link";
import { pricingContent } from "@/content/pricing";
import { Button } from "@/components/ui/button";
import {
  AnimatedGradientMesh,
  DotMatrixGrid
} from "@/components/visuals";
import { HugeiconsIcon } from "@hugeicons/react";
import { TickDouble01Icon, ArrowRight02Icon } from "@hugeicons/core-free-icons";

export const metadata = {
  title: pricingContent.meta.title,
  description: pricingContent.meta.description,
};

export default function PricingPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative py-24 md:py-32 flex flex-col items-center justify-center border-b border-border text-center overflow-hidden">
        <AnimatedGradientMesh className="absolute inset-0 z-0 opacity-20" fallbackColor="bg-muted/10" />
        <div className="container relative z-10 px-4 md:px-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-medium tracking-tight text-foreground mb-6">
            {pricingContent.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-sans font-light uppercase tracking-widest">
            {pricingContent.hero.subtitle}
          </p>
        </div>
      </section>

      {/* 2. Pricing Philosophy */}
      <section className="py-24 bg-card">
        <div className="container px-4 md:px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-heading text-foreground mb-8">
            {pricingContent.philosophy.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-sans leading-relaxed">
            {pricingContent.philosophy.description}
          </p>
        </div>
      </section>

      {/* 3. Base Collections (Grid) */}
      <section className="py-24 md:py-32 bg-muted/30 relative">
        <DotMatrixGrid opacity={0.1} spacing={30} />
        <div className="container relative z-10 px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading text-foreground mb-4">
              {pricingContent.collections.title}
            </h2>
            <p className="text-muted-foreground font-sans">
              {pricingContent.collections.note}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingContent.collections.tiers.map((tier, idx) => (
              <div key={idx} className="bg-background border border-border rounded-sm shadow-sm p-8 flex flex-col hover:border-primary/50 transition-colors relative group">
                {/* Subtle top highlight for the middle/popular tier */}
                {idx === 1 && <div className="absolute top-0 inset-x-0 h-1 bg-primary rounded-t-sm" />}

                <h3 className="font-heading text-2xl text-foreground mb-2">{tier.name}</h3>
                <p className="font-sans font-semibold text-primary mb-6">{tier.startingPrice}</p>
                <p className="font-sans text-muted-foreground text-sm leading-relaxed mb-8 border-b border-border pb-8 min-h-[5rem]">
                  {tier.description}
                </p>
                <ul className="flex flex-col gap-4 mb-8 flex-1">
                  {tier.inclusions.map((inclusion, incIdx) => (
                    <li key={incIdx} className="flex items-start gap-3 text-sm font-sans text-foreground">
                      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                      <HugeiconsIcon icon={TickDouble01Icon} strokeWidth={1.5 as any} className="size-5 text-primary shrink-0" />
                      <span className="leading-tight">{inclusion}</span>
                    </li>
                  ))}
                </ul>
                <Button variant={idx === 1 ? "default" : "outline"} asChild className="w-full rounded-none">
                  <Link href="/contact">Inquire</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 & 5. What's Included & A La Carte */}
      <section className="py-24 border-y border-border">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Always Included */}
            <div className="flex flex-col gap-8">
              <h2 className="text-3xl font-heading text-foreground border-b border-border pb-4">
                {pricingContent.alwaysIncluded.title}
              </h2>
              <ul className="flex flex-col gap-8">
                {pricingContent.alwaysIncluded.items.map((item, idx) => (
                  <li key={idx} className="flex flex-col gap-2">
                    <h4 className="font-sans font-semibold text-foreground tracking-wide text-lg">{item.title}</h4>
                    <p className="font-sans text-muted-foreground">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* A La Carte */}
            <div className="flex flex-col gap-8">
              <h2 className="text-3xl font-heading text-foreground border-b border-border pb-4">
                {pricingContent.aLaCarte.title}
              </h2>
              <ul className="flex flex-col gap-8">
                {pricingContent.aLaCarte.items.map((item, idx) => (
                  <li key={idx} className="flex flex-col gap-2">
                    <h4 className="font-sans font-semibold text-foreground tracking-wide text-lg">{item.name}</h4>
                    <p className="font-sans text-muted-foreground">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 6. The Heirloom Albums */}
      <section className="py-24 md:py-32 bg-primary/5 dark:bg-card">
        <div className="container px-4 md:px-6 text-center max-w-3xl">
          <h2 className="text-4xl font-heading text-foreground mb-6">
            {pricingContent.albums.title}
          </h2>
          <p className="text-lg text-muted-foreground font-sans leading-relaxed mb-10">
            {pricingContent.albums.description}
          </p>
          <Button variant="outline" asChild className="rounded-none px-8">
            <Link href="/contact" className="flex items-center gap-2">
              {pricingContent.albums.cta}
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              <HugeiconsIcon icon={ArrowRight02Icon} strokeWidth={1.5 as any} className="size-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* 7. The Booking Process */}
      <section className="py-24 border-t border-border">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading text-foreground">
              {pricingContent.bookingProcess.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingContent.bookingProcess.steps.map((step) => (
              <div key={step.step} className="flex flex-col text-center items-center gap-4 px-6">
                <div className="w-12 h-12 rounded-full border border-primary flex items-center justify-center font-heading text-xl text-primary mb-2">
                  {step.step}
                </div>
                <h3 className="font-sans font-semibold text-xl text-foreground">{step.title}</h3>
                <p className="font-sans text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA */}
      <section className="py-32 bg-foreground text-background text-center relative overflow-hidden">
        <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center gap-8">
          <h2 className="text-4xl md:text-5xl font-heading font-medium">
            {pricingContent.cta.headline}
          </h2>
          <Button size="lg" asChild className="bg-background text-foreground hover:bg-background/90 rounded-none px-10 text-lg">
            <Link href="/contact">{pricingContent.cta.button}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
