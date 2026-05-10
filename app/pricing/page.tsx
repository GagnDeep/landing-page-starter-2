import { pricingContent } from "@/content/pricing"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedGradientMesh } from "@/components/visuals/animated-gradient-mesh"
import { DotMatrixGrid } from "@/components/visuals/dot-matrix-grid"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { HugeiconsIcon } from "@hugeicons/react"
import { CheckmarkBadge01Icon } from "@hugeicons/core-free-icons"

export const metadata = {
  title: pricingContent.meta.title,
  description: pricingContent.meta.description,
}

export default function PricingPage() {
  const {
    investmentHero,
    investmentPhilosophy,
    theFrameworkTiers,
    whatIsIncludedList,
    transparencyCommitment,
    investmentFaq,
    consultationCta,
  } = pricingContent

  return (
    <>
      {/* 1: investment-hero */}
      <section className="relative min-h-[60svh] flex flex-col items-center justify-center overflow-hidden bg-background px-6 border-b border-border/50">
        <DotMatrixGrid className="absolute inset-0 opacity-20 pointer-events-none mix-blend-multiply dark:mix-blend-screen" rows={30} cols={30} spacing={40} />
        <div className="container relative z-10 mx-auto max-w-4xl text-center mt-24">
          <h1 className="font-heading text-5xl md:text-7xl font-medium tracking-tight mb-8 text-foreground drop-shadow-sm">
            {investmentHero.heading}
          </h1>
          <p className="text-xl text-muted-foreground font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
            {investmentHero.subheading}
          </p>
        </div>
      </section>

      {/* 2: investment-philosophy */}
      <section className="py-24 px-6 bg-muted/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-sm tracking-widest uppercase text-muted-foreground mb-8">{investmentPhilosophy.heading}</h2>
          <p className="text-2xl md:text-3xl font-heading text-foreground leading-relaxed">
            {investmentPhilosophy.body}
          </p>
        </div>
      </section>

      {/* 3: the-framework-tiers */}
      <section className="py-32 px-6 bg-background relative overflow-hidden">
         <AnimatedGradientMesh opacity={0.15} />
         <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-20">
               <h2 className="font-heading text-4xl md:text-5xl mb-6">{theFrameworkTiers.heading}</h2>
               <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">{theFrameworkTiers.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
               {theFrameworkTiers.tiers.map((tier, i) => (
                  <Card key={i} className="border-border/50 bg-card/80 backdrop-blur-sm rounded-none hover:border-primary/50 transition-colors">
                     <CardContent className="p-12 flex flex-col h-full">
                        <div className="mb-8">
                           <h3 className="font-heading text-3xl mb-4 text-foreground">{tier.name}</h3>
                           <p className="text-muted-foreground font-light leading-relaxed h-24">{tier.description}</p>
                        </div>
                        <div className="mt-auto pt-8 border-t border-border/50">
                           <p className="text-sm font-medium tracking-widest uppercase text-primary">
                              {tier.startingLabel}
                           </p>
                        </div>
                     </CardContent>
                  </Card>
               ))}
            </div>
         </div>
      </section>

      {/* 4: what-is-included-list & 5: transparency-commitment */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-24">

           <div className="space-y-12">
              <div>
                 <h2 className="font-heading text-3xl mb-4">{whatIsIncludedList.heading}</h2>
                 <p className="text-muted-foreground font-light mb-8">{whatIsIncludedList.description}</p>
              </div>
              <ul className="space-y-6">
                 {whatIsIncludedList.inclusions.map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                       <HugeiconsIcon icon={CheckmarkBadge01Icon} className="w-6 h-6 text-primary shrink-0" />
                       <span className="text-foreground text-lg font-light">{item}</span>
                    </li>
                 ))}
              </ul>
           </div>

           <div className="bg-card p-12 md:p-16 border border-border shadow-sm flex flex-col justify-center">
              <h2 className="font-heading text-3xl mb-8 text-primary">{transparencyCommitment.heading}</h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                 {transparencyCommitment.body}
              </p>
           </div>

        </div>
      </section>

      {/* 6: investment-faq */}
      <section className="py-32 px-6 bg-background">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl mb-4">{investmentFaq.heading}</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {investmentFaq.faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                <AccordionTrigger className="text-left font-medium text-lg hover:text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base pt-2 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 7: consultation-cta */}
      <section className="py-32 px-6 bg-card text-center border-t border-border/50 relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-primary)_0%,_transparent_100%)] opacity-5" />
         <div className="container mx-auto max-w-2xl relative z-10">
           <h2 className="font-heading text-4xl md:text-5xl mb-6">{consultationCta.heading}</h2>
           <p className="text-lg text-muted-foreground mb-12 font-light">{consultationCta.subheading}</p>
           <Button asChild size="lg" className="rounded-none px-12 py-6 text-sm tracking-widest uppercase">
             <Link href={consultationCta.cta.href}>
               {consultationCta.cta.label}
             </Link>
           </Button>
         </div>
      </section>
    </>
  )
}
