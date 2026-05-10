import { Metadata } from "next";
import { pricingContent } from "@/content/pricing";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { CTAGlow } from "@/components/visuals/CTAGlow";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: pricingContent.metadata.title,
  description: pricingContent.metadata.description,
};

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 3. Hero Section */}
      <section className="relative overflow-hidden bg-primary pt-24 pb-16 md:pt-32 md:pb-24 text-primary-foreground">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/10" />
        </div>
        <div className="container relative z-10 px-4 md:px-6 text-center max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
            {pricingContent.hero.heading}
          </h1>
          <p className="text-lg md:text-xl font-sans text-primary-foreground/90 max-w-2xl mx-auto">
            {pricingContent.hero.subheading}
          </p>
        </div>
      </section>

      {/* 5-8. Packages */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingContent.packages.map((pkg, index) => (
              <Card
                key={index}
                className={`flex flex-col relative overflow-hidden transition-all duration-300 hover:shadow-lg ${
                  pkg.isPopular
                    ? "border-primary shadow-md md:-translate-y-4"
                    : "border-border shadow-sm"
                }`}
              >
                {pkg.isPopular && (
                  <div className="absolute top-0 inset-x-0 bg-primary text-primary-foreground text-center text-xs font-bold font-sans py-1.5 uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <CardHeader className={pkg.isPopular ? "pt-10" : ""}>
                  <CardTitle className="font-serif text-2xl">{pkg.name}</CardTitle>
                  <CardDescription className="text-primary font-bold mt-2">
                    {pkg.duration}
                  </CardDescription>
                  <div className="mt-4 flex items-baseline text-4xl font-extrabold text-foreground font-sans">
                    {pkg.price}
                  </div>
                  <p className="text-muted-foreground text-sm mt-4 font-sans leading-relaxed min-h-[60px]">
                    {pkg.description}
                  </p>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3 font-sans text-sm">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full h-12 text-base font-bold rounded-full"
                    variant={pkg.isPopular ? "default" : "outline"}
                    asChild
                  >
                    <Link href="/contact">
                      {pkg.ctaLabel}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Included in Every Package */}
      <section className="py-16 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
             <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">
                {pricingContent.inclusions.heading}
             </h2>
             <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                {pricingContent.inclusions.items.map((item, idx) => (
                   <div key={idx} className="flex flex-col items-center p-6 bg-background rounded-xl border border-border shadow-sm">
                      <CheckCircle2 className="w-8 h-8 text-primary mb-4" />
                      <p className="font-sans font-medium text-foreground text-sm">{item}</p>
                   </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* 9. Add-on Services & 16. Payment Methods */}
      <section className="py-16 md:py-24 bg-background">
         <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto items-start">
               {/* Add-ons */}
               <div>
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
                    {pricingContent.addOns.heading}
                  </h2>
                  <div className="space-y-4">
                     {pricingContent.addOns.services.map((service, idx) => (
                        <div key={idx} className="flex items-center justify-between p-4 border border-border rounded-xl bg-card">
                           <span className="font-sans font-medium text-foreground">{service.name}</span>
                           <span className="font-sans font-bold text-primary">{service.price}</span>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Payment Methods */}
               <div>
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
                    {pricingContent.paymentMethods.heading}
                  </h2>
                  <div className="space-y-4">
                     {pricingContent.paymentMethods.methods.map((method, idx) => (
                        <div key={idx} className="flex items-center gap-4 p-4 border border-border rounded-xl bg-secondary/50">
                           <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                              <CheckCircle2 className="w-5 h-5" />
                           </div>
                           <span className="font-sans font-medium text-foreground">{method}</span>
                        </div>
                     ))}
                  </div>

                  {/* 15. Guarantee */}
                  <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-xl relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full -z-10"></div>
                     <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                        {pricingContent.guarantee.heading}
                     </h3>
                     <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                        {pricingContent.guarantee.description}
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 11. FAQ */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              {pricingContent.faq.heading}
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {pricingContent.faq.questions.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="font-sans text-left font-medium text-lg hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-sans text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 17. Need Help Choosing? CTA */}
      <section className="py-24 relative overflow-hidden bg-background border-t border-border">
        <div className="container px-4 md:px-6 relative z-10 text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4 max-w-2xl mx-auto">
            {pricingContent.contactTeaser.heading}
          </h2>
          <p className="text-muted-foreground font-sans text-lg mb-8 max-w-xl mx-auto">
             {pricingContent.contactTeaser.description}
          </p>
          <CTAGlow>
            <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full">
              <Link href="/contact">
                {pricingContent.contactTeaser.ctaLabel}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </CTAGlow>
        </div>
      </section>
    </div>
  );
}