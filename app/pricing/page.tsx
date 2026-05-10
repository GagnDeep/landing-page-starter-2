import { pricingContent } from "@/content/pricing";
import { RevealText } from "@/components/visuals/RevealText";
import { FadeIn } from "@/components/visuals/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/visuals/StaggerGroup";
import { DotMatrixGrid } from "@/components/visuals/DotMatrixGrid";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: pricingContent.seo.title,
  description: pricingContent.seo.description,
};

export default function PricingPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden pt-20">
      {/* Hero & Philosophy */}
      <section className="py-24 md:py-32 bg-background relative overflow-hidden">
        <DotMatrixGrid className="opacity-40" />
        <div className="container mx-auto px-6 text-center relative z-10 max-w-4xl">
          <RevealText as="h1" className="text-5xl md:text-7xl font-heading font-medium text-foreground mb-6">
            {pricingContent.hero.headline}
          </RevealText>
          <RevealText as="p" delay={0.2} className="text-xl md:text-2xl text-muted-foreground mb-16">
            {pricingContent.hero.subheadline}
          </RevealText>

          <div className="bg-muted p-10 md:p-16 border border-border mt-12">
            <RevealText as="h2" delay={0.3} className="text-2xl font-heading text-foreground mb-4">
              {pricingContent.philosophy.headline}
            </RevealText>
            <RevealText as="p" delay={0.4} className="text-lg text-muted-foreground leading-relaxed">
              {pricingContent.philosophy.body}
            </RevealText>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-6 md:px-12">
          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingContent.tiers.map((tier, index) => (
              <StaggerItem
                key={tier.name}
                className={`flex flex-col border border-border p-8 md:p-10 ${index === 0 ? 'bg-foreground text-background shadow-xl scale-105 z-10' : 'bg-card text-card-foreground'}`}
              >
                <h3 className={`text-3xl font-heading mb-4 ${index === 0 ? 'text-primary' : 'text-foreground'}`}>
                  {tier.name}
                </h3>
                <p className={`text-sm mb-8 flex-1 leading-relaxed ${index === 0 ? 'text-background/80' : 'text-muted-foreground'}`}>
                  {tier.description}
                </p>

                <ul className="space-y-4 mb-10">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className={`h-5 w-5 mr-3 shrink-0 ${index === 0 ? 'text-primary' : 'text-muted-foreground'}`} />
                      <span className={`text-sm ${index === 0 ? 'text-background' : 'text-foreground'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  variant={index === 0 ? "default" : "outline"}
                  className={`w-full rounded-none py-6 text-base tracking-wide ${index === 0 ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'border-border text-foreground hover:bg-muted'}`}
                >
                  <Link href={tier.cta.href}>
                    {tier.cta.label}
                  </Link>
                </Button>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* The Consultation Process */}
      <section className="py-24 md:py-32 bg-muted relative">
        <div className="container mx-auto px-6 md:px-12">
          <RevealText as="h2" className="text-4xl font-heading text-center text-foreground mb-16">
            {pricingContent.process.headline}
          </RevealText>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-6 left-[15%] right-[15%] h-px bg-border" />
            {pricingContent.process.steps.map((step, index) => (
              <RevealText key={index} delay={index * 0.2} className="relative text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-6 relative z-10 shadow-lg">
                  <div className="w-4 h-4 rounded-full bg-background" />
                </div>
                <h3 className="text-xl font-heading mb-4 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed max-w-xs">{step.description}</p>
              </RevealText>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <RevealText as="h2" className="text-4xl md:text-5xl font-heading text-foreground mb-10">
            {pricingContent.ctaSection.headline}
          </RevealText>
          <FadeIn delay={0.2}>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-10 py-8 text-xl tracking-wide group" asChild>
              <Link href={pricingContent.ctaSection.cta.href}>
                {pricingContent.ctaSection.cta.label}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}