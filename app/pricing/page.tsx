import Link from "next/link";
import { pricingContent } from "@/content/pricing";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { DotMatrixGrid } from "@/components/visuals/DotMatrixGrid";
import { RevealText } from "@/components/visuals/RevealText";
import { CTAGlow } from "@/components/visuals/CTAGlow";
import { FloatingBlobs } from "@/components/visuals/FloatingBlobs";
import { CodeWindowTyping } from "@/components/visuals/CodeWindowTyping";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkBadge01Icon, ArrowRight01Icon, CreditCardIcon, Wallet01Icon, SmartPhone01Icon } from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";

export const metadata = {
  title: pricingContent.metadata.title,
  description: pricingContent.metadata.description,
  openGraph: {
    title: pricingContent.metadata.title,
    description: pricingContent.metadata.description,
  }
};

export default function PricingPage() {
  const {
    hero,
    philosophy,
    tiers,
    customPackages,
    inclusions,
    addons,
    paymentMethods,
    policies,
    corporate,
    testimonial,
    faqSnippet,
    process,
    finalCta
  } = pricingContent;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32 md:pt-32 md:pb-40 lg:pt-40 lg:pb-48 bg-primary text-primary-foreground">
        <AnimatedGradientMesh className="opacity-50 mix-blend-screen" />
        <DotMatrixGrid />
        <div className="container relative z-10 px-4 md:px-6 mx-auto flex flex-col items-center text-center">
          <RevealText as="h1" className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight max-w-4xl mx-auto">
            {hero.headline}
          </RevealText>
          <RevealText as="p" className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            {hero.subheadline}
          </RevealText>
        </div>
      </section>

      {/* Pricing Philosophy & Tiers */}
      <section className="py-24 bg-background relative -mt-10">
        <div className="container px-4 md:px-6 mx-auto">

          <div className="max-w-3xl mx-auto text-center mb-16">
            <RevealText as="h2" className="font-heading text-3xl font-bold mb-6">
              {philosophy.headline}
            </RevealText>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {philosophy.body}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={cn(
                  "relative flex flex-col p-8 rounded-3xl border shadow-sm transition-transform hover:-translate-y-1",
                  tier.isPopular ? "border-primary bg-primary/5 shadow-md" : "border-border bg-card"
                )}
              >
                {tier.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="font-heading text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-bold text-primary">{tier.price}</span>
                    <span className="text-muted-foreground font-medium">/ {tier.duration}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{tier.description}</p>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <HugeiconsIcon icon={CheckmarkBadge01Icon} size={20} className="text-accent shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8 border-t border-border">
                  <Link
                    href={`/contact?package=${tier.id}`}
                    className={cn(
                      "flex w-full items-center justify-center h-12 rounded-lg font-medium transition-colors",
                      tier.isPopular
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-muted text-foreground hover:bg-muted/80 border border-border"
                    )}
                  >
                    {tier.ctaLabel}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Packages & Inclusions */}
      <section className="py-24 bg-muted/20 border-y border-border">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8 bg-card p-8 md:p-12 rounded-3xl border border-border">
              <RevealText as="h2" className="font-heading text-3xl font-bold">
                {inclusions.headline}
              </RevealText>
              <ul className="space-y-4">
                {inclusions.list.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-12 flex flex-col justify-center">
              <div className="space-y-6">
                <RevealText as="h2" className="font-heading text-3xl font-bold">
                  {customPackages.headline}
                </RevealText>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {customPackages.body}
                </p>
                <Link href={customPackages.cta.href} className="inline-flex items-center text-primary font-medium hover:underline">
                  {customPackages.cta.label} <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-4" />
                </Link>
              </div>

              <div className="space-y-6">
                <RevealText as="h2" className="font-heading text-2xl font-bold">
                  {addons.headline}
                </RevealText>
                <div className="space-y-4">
                  {addons.items.map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-3 border-b border-border last:border-0">
                      <span className="text-muted-foreground">{item.name}</span>
                      <span className="font-semibold text-foreground">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6 mx-auto text-center">
           <RevealText as="h2" className="font-heading text-3xl md:text-4xl font-bold mb-16">
              {process.headline}
            </RevealText>
            <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto relative">
              <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-border z-0" />
              {process.steps.map((step, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center bg-background">
                  <div className="w-24 h-24 rounded-full bg-muted/50 border-8 border-background flex items-center justify-center mb-6 shadow-sm">
                    <span className="font-heading text-3xl font-bold text-primary">{step.step}</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* Payment, Policies, Corporate */}
      <section className="py-24 bg-muted/20 border-y border-border">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-6 bg-card p-8 rounded-2xl border border-border shadow-sm">
              <RevealText as="h3" className="font-heading text-xl font-bold">
                {paymentMethods.headline}
              </RevealText>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {paymentMethods.methods.map((method, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <HugeiconsIcon icon={i === 0 ? SmartPhone01Icon : i === 1 ? CreditCardIcon : Wallet01Icon} size={16} />
                    {method}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6 bg-card p-8 rounded-2xl border border-border shadow-sm">
              <RevealText as="h3" className="font-heading text-xl font-bold">
                {policies.headline}
              </RevealText>
              <ul className="space-y-3 text-sm text-muted-foreground list-disc list-inside">
                {policies.points.map((point, i) => (
                  <li key={i} className="leading-snug">{point}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-6 bg-primary/5 p-8 rounded-2xl border border-primary/10 flex flex-col">
              <RevealText as="h3" className="font-heading text-xl font-bold text-primary">
                {corporate.headline}
              </RevealText>
              <p className="text-sm text-muted-foreground flex-grow leading-relaxed">
                {corporate.body}
              </p>
              <Link href={corporate.cta.href} className="inline-flex items-center text-primary font-medium hover:underline text-sm mt-4">
                {corporate.cta.label} &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial & FAQ */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <CodeWindowTyping
                codeString={`"${testimonial.quote}"\n\n— ${testimonial.author}, ${testimonial.role}`}
                className="bg-muted/10"
              />
            </div>

            <div className="space-y-8">
              <RevealText as="h2" className="font-heading text-3xl font-bold">
                {faqSnippet.headline}
              </RevealText>
              <Accordion type="single" collapsible className="w-full">
                {faqSnippet.questions.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left font-semibold">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <Link
                href={faqSnippet.cta.href}
                className="inline-flex items-center text-primary font-medium hover:underline"
              >
                {faqSnippet.cta.label}
                <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden text-center">
        <FloatingBlobs />
        <div className="container relative z-10 px-4 md:px-6 mx-auto max-w-3xl space-y-8">
          <RevealText as="h2" className="font-heading text-4xl md:text-5xl font-bold">
            {finalCta.headline}
          </RevealText>
          <p className="text-xl text-primary-foreground/90">
            {finalCta.subheadline}
          </p>
          <div className="pt-8">
            <CTAGlow>
              <Link
                href={finalCta.primaryCta.href}
                className="inline-flex h-14 items-center justify-center rounded-md bg-accent px-10 text-base font-bold text-accent-foreground shadow-lg transition-transform hover:scale-105"
              >
                {finalCta.primaryCta.label}
              </Link>
            </CTAGlow>
          </div>
        </div>
      </section>

    </div>
  );
}
