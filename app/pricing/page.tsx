import Link from "next/link"
import { Metadata } from "next"
import { pricingContent } from "@/content/pricing"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh"
import { CTAGlow } from "@/components/visuals/CTAGlow"
import { CheckIcon } from "lucide-react"

export const metadata: Metadata = {
  title: pricingContent.meta.title,
  description: pricingContent.meta.description,
}

export default function PricingPage() {
  const content = pricingContent

  return (
    <div className="flex flex-col w-full overflow-hidden">

      {/* PageHeader */}
      <section className="relative w-full py-24 md:py-32 overflow-hidden border-b border-border bg-muted/30">
        <AnimatedGradientMesh />
        <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center max-w-3xl mx-auto space-y-6">
          <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-foreground drop-shadow-sm">
            {content.pageHeader.title}
          </h1>
          <p className="text-xl text-muted-foreground text-balance">
            {content.pageHeader.subtitle}
          </p>
        </div>
      </section>

      {/* Main Pricing Tiers */}
      <section className="py-24 px-4 container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">{content.pricingIntro.title}</h2>
          <p className="text-lg text-muted-foreground">{content.pricingIntro.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Tier 1 */}
          <Card className="border-border bg-card flex flex-col">
            <CardHeader className="text-center pb-8 border-b border-border/50">
              <CardTitle className="font-heading text-2xl mb-4">{content.tier1Basic.name}</CardTitle>
              <div className="text-4xl font-bold font-heading">{content.tier1Basic.price}</div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col pt-8">
              <ul className="space-y-4 flex-1 mb-8">
                {content.tier1Basic.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full" asChild>
                <Link href={content.tier1Basic.cta.href}>{content.tier1Basic.cta.label}</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Tier 2 (Highlighted) */}
          <Card className="border-accent shadow-xl bg-card flex flex-col relative scale-100 md:scale-105 z-10">
            <div className="absolute top-0 inset-x-0 h-1 bg-accent"></div>
            <div className="absolute top-4 right-4 bg-accent/10 text-accent px-3 py-1 text-xs font-bold rounded-full">
              {content.tier2Popular.highlight}
            </div>
            <CardHeader className="text-center pb-8 border-b border-border/50 pt-8">
              <CardTitle className="font-heading text-2xl mb-4">{content.tier2Popular.name}</CardTitle>
              <div className="text-5xl font-bold font-heading text-accent">{content.tier2Popular.price}</div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col pt-8">
              <ul className="space-y-4 flex-1 mb-8">
                {content.tier2Popular.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <CTAGlow>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold" size="lg" asChild>
                  <Link href={content.tier2Popular.cta.href}>{content.tier2Popular.cta.label}</Link>
                </Button>
              </CTAGlow>
            </CardContent>
          </Card>

          {/* Tier 3 */}
          <Card className="border-border bg-card flex flex-col">
            <CardHeader className="text-center pb-8 border-b border-border/50">
              <CardTitle className="font-heading text-2xl mb-4">{content.tier3Comprehensive.name}</CardTitle>
              <div className="text-4xl font-bold font-heading">{content.tier3Comprehensive.price}</div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col pt-8">
              <ul className="space-y-4 flex-1 mb-8">
                {content.tier3Comprehensive.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full" asChild>
                <Link href={content.tier3Comprehensive.cta.href}>{content.tier3Comprehensive.cta.label}</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Alternative Options (Hourly, Refresher, Add-ons) */}
      <section className="py-24 px-4 bg-muted/30 border-y border-border">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            <div className="space-y-8">
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="font-heading text-xl">{content.hourlyRates.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-between items-center">
                  <p className="text-muted-foreground text-sm max-w-[200px]">{content.hourlyRates.description}</p>
                  <div className="text-2xl font-bold font-heading text-primary">{content.hourlyRates.price}</div>
                </CardContent>
              </Card>

              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="font-heading text-xl">{content.refresherRates.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-between items-center">
                  <p className="text-muted-foreground text-sm max-w-[200px]">{content.refresherRates.description}</p>
                  <div className="text-2xl font-bold font-heading text-primary">{content.refresherRates.price}</div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <h3 className="font-heading text-2xl font-bold pl-4">{content.addOnServices.title}</h3>
              <div className="bg-background rounded-xl border border-border p-6 space-y-4">
                {content.addOnServices.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-border/50 pb-4 last:border-0 last:pb-0">
                    <span className="font-medium text-foreground">{item.name}</span>
                    <span className="text-accent font-bold">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Logistics & Payment */}
      <section className="py-24 px-4 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
             <h3 className="font-heading text-xl font-bold">{content.paymentMethods.title}</h3>
             <ul className="space-y-2 text-muted-foreground">
               {content.paymentMethods.methods.map((m, i) => <li key={i}>• {m}</li>)}
             </ul>
          </div>
          <div className="space-y-4">
             <h3 className="font-heading text-xl font-bold">{content.installmentOptions.title}</h3>
             <p className="text-muted-foreground leading-relaxed">{content.installmentOptions.description}</p>
          </div>
          <div className="space-y-4">
             <h3 className="font-heading text-xl font-bold">{content.refundPolicySnippet.title}</h3>
             <p className="text-muted-foreground leading-relaxed">{content.refundPolicySnippet.description}</p>
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="py-24 px-4 bg-muted/30 border-y border-border">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">{content.faqPricing.title}</h2>
          </div>
          <Accordion type="single" collapsible className="w-full bg-card rounded-lg border border-border px-6">
            {content.faqPricing.questions.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="font-heading text-lg font-medium text-left hover:text-accent transition-colors">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* PreFooter CTA */}
      <section className="py-32 px-4 container mx-auto text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-primary/5 rounded-3xl -m-4 md:-m-8"></div>
        <div className="relative z-10 max-w-2xl mx-auto space-y-8">
          <h2 className="font-heading text-4xl md:text-5xl font-bold">{content.preFooterCta.title}</h2>
          <p className="text-xl text-muted-foreground">
            {content.preFooterCta.description}
          </p>
          <CTAGlow>
            <Button size="lg" className="h-14 px-10 text-lg bg-accent hover:bg-accent/90 text-accent-foreground font-bold" asChild>
              <Link href={content.preFooterCta.cta.href}>{content.preFooterCta.cta.label}</Link>
            </Button>
          </CTAGlow>
        </div>
      </section>

    </div>
  )
}
