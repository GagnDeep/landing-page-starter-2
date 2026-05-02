import Link from "next/link";
import { pricingContent } from "@/content/pricing";
import { ElegantReveal } from "@/components/visuals/ElegantReveal";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { CTAGlow } from "@/components/visuals/CTAGlow";

export const metadata = {
  title: pricingContent.seo.title,
  description: pricingContent.seo.description,
};

export default function PricingPage() {
  return (
    <div className="flex flex-col overflow-hidden">
      {/* 1. Hero Header */}
      <section className="relative flex min-h-[50vh] items-center justify-center py-20 text-center">
        <AnimatedGradientMesh />
        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <ElegantReveal>
            <h1 className="mb-6 font-serif text-5xl font-bold leading-tight tracking-tight md:text-6xl max-w-4xl mx-auto">
              {pricingContent.hero.headline}
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              {pricingContent.hero.subheadline}
            </p>
          </ElegantReveal>
        </div>
      </section>

      {/* 2. Pricing Philosophy */}
      <section className="bg-card py-24 border-y border-border">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <ElegantReveal>
            <h2 className="mb-6 font-serif text-3xl font-bold md:text-4xl">
              {pricingContent.philosophy.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {pricingContent.philosophy.body}
            </p>
          </ElegantReveal>
        </div>
      </section>

      {/* 3. Core Service Tiers/Categories */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <ElegantReveal>
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl font-bold md:text-4xl mb-4">
                {pricingContent.coreTiers.title}
              </h2>
              <p className="text-muted-foreground">
                {pricingContent.coreTiers.note}
              </p>
            </div>
          </ElegantReveal>
          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {pricingContent.coreTiers.categories.map((category, index) => (
              <ElegantReveal key={index}>
                <div className={`flex h-full flex-col rounded-xl border p-8 shadow-sm transition-transform hover:-translate-y-1 ${index === 1 ? 'border-primary ring-1 ring-primary bg-primary/5' : 'border-border bg-card'}`}>
                  <h3 className="mb-4 font-serif text-2xl font-bold">{category.name}</h3>
                  <div className="mb-6 flex items-baseline gap-2">
                    <span className="text-sm font-medium text-muted-foreground">Starting from</span>
                    <span className="text-4xl font-bold text-foreground">{category.startingPrice}</span>
                  </div>
                  <p className="text-muted-foreground mb-8 flex-1">
                    {category.description}
                  </p>
                  <Link
                    href="/contact"
                    className={`inline-flex h-12 w-full items-center justify-center rounded-md px-6 font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring ${index === 1 ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-background border border-input text-foreground hover:bg-accent hover:text-accent-foreground'}`}
                  >
                    Request Quote
                  </Link>
                </div>
              </ElegantReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Bespoke/Custom Design Add-ons */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <ElegantReveal>
            <h2 className="mb-12 text-center font-serif text-3xl font-bold md:text-4xl">
              {pricingContent.addons.title}
            </h2>
          </ElegantReveal>
          <div className="rounded-lg border border-border bg-card shadow-sm overflow-hidden">
            {pricingContent.addons.items.map((item, index) => (
              <ElegantReveal key={index}>
                <div className={`flex flex-col sm:flex-row sm:items-center justify-between p-6 ${index !== pricingContent.addons.items.length - 1 ? 'border-b border-border' : ''}`}>
                  <div className="font-serif text-lg font-bold mb-2 sm:mb-0">{item.name}</div>
                  <div className="text-muted-foreground sm:text-right">{item.description}</div>
                </div>
              </ElegantReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. The Value Proposition */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <ElegantReveal>
            <h2 className="mb-6 font-serif text-3xl font-bold md:text-4xl">
              {pricingContent.valueProp.title}
            </h2>
            <p className="text-xl leading-relaxed opacity-90">
              {pricingContent.valueProp.body}
            </p>
          </ElegantReveal>
        </div>
      </section>

      {/* 6. FAQ (Pricing Specific) */}
      <section className="bg-card py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <ElegantReveal>
            <h2 className="mb-12 text-center font-serif text-3xl font-bold md:text-4xl">
              {pricingContent.faq.title}
            </h2>
          </ElegantReveal>
          <div className="space-y-6">
            {pricingContent.faq.questions.map((faq, index) => (
              <ElegantReveal key={index}>
                <div className="rounded-lg border border-border bg-background p-6 shadow-sm">
                  <h3 className="mb-3 font-serif text-xl font-bold">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              </ElegantReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Call to Action */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4">
          <ElegantReveal>
            <h2 className="mb-8 font-serif text-3xl font-bold md:text-4xl">
              {pricingContent.cta.headline}
            </h2>
            <CTAGlow>
              <Link
                href="/contact"
                className="inline-flex h-14 items-center justify-center rounded-md bg-primary px-10 text-lg font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                {pricingContent.cta.buttonText}
              </Link>
            </CTAGlow>
          </ElegantReveal>
        </div>
      </section>
    </div>
  );
}
