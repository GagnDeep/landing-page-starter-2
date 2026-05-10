import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { seo, hero, tiers, packages, nriCare, faq } from "@/content/pricing";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { DotMatrixPattern } from "@/components/visuals/DotMatrixPattern";

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
};

export default function PricingPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">

      {/* 1. Hero Section */}
      <section className="relative min-h-[40vh] flex items-center pt-24 pb-20 overflow-hidden bg-primary/5 border-b border-border/50">
        <AnimatedGradientMesh speed={20} className="absolute inset-0 opacity-30" />
        <DotMatrixPattern opacity={0.15} />
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground tracking-tight">
            {hero.title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {hero.subtitle}
          </p>
        </div>
      </section>

      {/* 2. Initial Consultation Tier */}
      <section className="py-24 bg-background">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">{tiers.title}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {tiers.items.map((tier, idx) => (
              <Card key={idx} className="bg-background border-border/50 shadow-md flex flex-col hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">{tier.name}</CardTitle>
                  <div className="text-4xl font-bold text-primary mt-4 mb-2">{tier.price}</div>
                  <CardDescription className="text-base text-muted-foreground">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm font-medium text-foreground">
                         <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                         <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full" variant={idx === 0 ? "default" : "outline"}>
                    <Link href="/contact">Book Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Session Packages */}
      <section className="py-24 bg-muted/20 border-y border-border/50">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">{packages.title}</h2>
            <p className="text-lg text-muted-foreground">{packages.description}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {packages.items.map((pkg, idx) => (
              <Card key={idx} className="bg-background border-border/50 shadow-sm flex flex-col">
                <CardHeader className="bg-primary/5 border-b border-border/50">
                  <CardTitle className="font-heading text-xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-foreground mt-2">{pkg.price}</div>
                  <CardDescription className="mt-2 text-muted-foreground">{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-6 flex-1">
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                         <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                         <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full" variant="secondary">
                    <Link href="/contact">Inquire Package</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. NRI Care Packages */}
      <section className="py-24 bg-slate-950 text-slate-50 relative overflow-hidden">
        <DotMatrixPattern opacity={0.1} />
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 p-8 md:p-12 rounded-3xl shadow-2xl flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-sm font-bold tracking-widest uppercase">
                Premium Concierge
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">{nriCare.title}</h2>
              <p className="text-lg text-slate-300 leading-relaxed font-medium">{nriCare.description}</p>
              <p className="text-slate-400 leading-relaxed">{nriCare.details}</p>
            </div>
            <div className="shrink-0">
               <Button size="lg" asChild className="rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold px-8">
                 <Link href={nriCare.cta.href}>{nriCare.cta.label}</Link>
               </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 5 & 6. Insurance & FAQ on Billing */}
      <section className="py-24 bg-background">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">{faq.title}</h2>
            <p className="text-muted-foreground">Clear answers regarding payment, insurance, and billing policies.</p>
          </div>
          <Accordion type="single" collapsible className="w-full bg-background rounded-2xl border border-border/50 px-6 shadow-sm">
            {faq.questions.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-b-border/50 last:border-0">
                <AccordionTrigger className="text-left font-medium text-lg hover:text-primary py-6">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

    </div>
  );
}
