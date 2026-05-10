import type { Metadata } from "next";
import { pricingContent } from "@/content/pricing";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AnimatedGradientMesh, FloatingBlobs } from "@/components/visuals";
import { CheckCircle2, Plus } from "lucide-react";

export const metadata: Metadata = {
  title: pricingContent.meta.title,
  description: pricingContent.meta.description,
};

export default function PricingPage() {
  const {
    hero, philosophy, tiers, addons,
    included, faq, cta
  } = pricingContent;

  return (
    <div className="flex flex-col w-full overflow-hidden">

      {/* 1. Hero */}
      <section className="relative min-h-[40vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-muted/50 border-b border-border">
        <AnimatedGradientMesh className="opacity-20" />
        <div className="container px-4 md:px-6 relative z-10 text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight text-foreground drop-shadow-sm max-w-4xl mx-auto">
            {hero.headline}
          </h1>
        </div>
      </section>

      {/* 2. Pricing Philosophy */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6 text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-heading font-semibold text-primary">{philosophy.heading}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {philosophy.description}
          </p>
        </div>
      </section>

      {/* 3, 4, 5. Tiers */}
      <section className="py-12 bg-background relative z-10">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {tiers.map((tier, i) => {
              const isPopular = i === 1; // Highlight the middle tier
              return (
                <Card
                  key={i}
                  className={`relative flex flex-col h-full ${
                    isPopular
                      ? "border-primary shadow-lg scale-100 lg:scale-105 z-10 bg-card"
                      : "border-border shadow-sm bg-muted/30"
                  }`}
                >
                  {isPopular && (
                    <div className="absolute top-0 inset-x-0 -translate-y-1/2 flex justify-center">
                      <span className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader className="text-center pt-10 pb-8 space-y-4">
                    <CardTitle className="text-3xl font-heading text-foreground">{tier.name}</CardTitle>
                    <CardDescription className="text-base text-muted-foreground h-16 flex items-center justify-center">
                      {tier.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="bg-background/50 rounded-xl p-6 mb-6">
                      <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Ideal For</p>
                      <p className="font-medium text-foreground">{tier.idealFor}</p>
                    </div>
                    <ul className="space-y-4">
                      {tier.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="pt-6 pb-10">
                    <Button
                      variant={isPopular ? "default" : "outline"}
                      className={`w-full rounded-full h-12 text-base ${isPopular ? "shadow-glow" : ""}`}
                    >
                      {cta.button}
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Add-ons & 7. Included (Split section) */}
      <section className="py-24 bg-card border-y border-border relative overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

            <div className="space-y-8">
              <h2 className="text-3xl font-heading font-semibold">{addons.heading}</h2>
              <div className="space-y-6">
                {addons.items.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-primary shrink-0">
                      <Plus className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-foreground mb-2">{item.name}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8 bg-muted/50 p-8 md:p-12 rounded-3xl border border-border">
              <h2 className="text-3xl font-heading font-semibold text-primary">{included.heading}</h2>
              <ul className="space-y-5">
                {included.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-lg text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto space-y-12">
          <h2 className="text-3xl font-heading font-semibold text-center">{faq.heading}</h2>
          <Accordion type="single" collapsible className="w-full">
            {faq.questions.map((question, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-medium text-lg">{question.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {question.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="py-32 bg-[#1A1A1A] text-white text-center relative overflow-hidden flex items-center justify-center">
        <FloatingBlobs className="absolute inset-0 opacity-20 pointer-events-none" />
        <div className="container px-4 md:px-6 space-y-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold max-w-2xl mx-auto text-[#D4AF37]">
            {cta.heading}
          </h2>
          <Button size="lg" className="rounded-full shadow-glow text-lg h-16 px-12 bg-[#D4AF37] text-black hover:bg-[#b5952f]">
            {cta.button}
          </Button>
        </div>
      </section>

    </div>
  );
}
