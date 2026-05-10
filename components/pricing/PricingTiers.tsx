import { pricingContent } from "@/content/pricing";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkBadge01Icon } from "@hugeicons/core-free-icons";
import Link from "next/link";
import { CTAGlow } from "@/components/visuals";

export function PricingTiers() {
  const { packages } = pricingContent;

  return (
    <section className="py-24 bg-muted/20 border-y border-border/50">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          {packages.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.tiers.map((tier, idx) => (
            <Card key={idx} className={`relative flex flex-col h-full overflow-hidden border ${tier.isRecommended ? 'border-primary shadow-xl shadow-primary/10' : 'border-border shadow-sm'} rounded-[2rem]`}>
              {tier.isRecommended && (
                <div className="absolute top-0 inset-x-0 h-2 bg-primary" />
              )}
              <CardHeader className="p-8 pb-4">
                <div className="flex justify-between items-center mb-2">
                  <CardTitle className="font-heading text-3xl font-bold">{tier.name}</CardTitle>
                  {tier.badge && (
                     <Badge className="bg-primary text-primary-foreground hover:bg-primary font-semibold">{tier.badge}</Badge>
                  )}
                </div>
                <CardDescription className="text-base text-muted-foreground">{tier.idealFor}</CardDescription>
              </CardHeader>
              <CardContent className="p-8 pt-4 flex-1 flex flex-col">
                <div className="mb-8 p-4 bg-muted/50 rounded-xl text-center font-medium text-primary">
                  {tier.priceText}
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {tier.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <HugeiconsIcon icon={CheckmarkBadge01Icon} size={20} className="text-primary shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-8 pt-0">
                {tier.isRecommended ? (
                  <CTAGlow className="w-full" glowOpacity={0.4}>
                    <Button asChild className="w-full rounded-full h-12 text-lg font-bold">
                       <Link href="/contact">Request Quote</Link>
                    </Button>
                  </CTAGlow>
                ) : (
                  <Button asChild variant="outline" className="w-full rounded-full h-12 text-lg font-bold border-primary text-primary hover:bg-primary/10">
                     <Link href="/contact">Request Quote</Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
