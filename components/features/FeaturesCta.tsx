import { featuresContent } from "@/content/features";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CTAGlow } from "@/components/visuals";

export function FeaturesCta() {
  const { testimonial, nextStepCta } = featuresContent;

  return (
    <section className="py-24 bg-primary text-primary-foreground text-center px-4">
      <div className="container mx-auto max-w-4xl">
        <blockquote className="font-heading text-2xl md:text-4xl italic leading-relaxed text-white mb-8">
          &quot;{testimonial.quote}&quot;
        </blockquote>
        <p className="text-xl font-bold tracking-widest uppercase text-white/80 mb-20">
          — {testimonial.author}
        </p>

        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-10">
          {nextStepCta.headline}
        </h2>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <CTAGlow glowColor="var(--background)" glowOpacity={0.3}>
            <Button size="lg" asChild className="rounded-full px-8 bg-background text-foreground hover:bg-background/90 text-lg font-bold">
              <Link href="/pricing">{nextStepCta.ctaPricing}</Link>
            </Button>
          </CTAGlow>
          <Button size="lg" variant="outline" asChild className="rounded-full px-8 text-lg font-bold bg-transparent border-white text-white hover:bg-white/10">
            <Link href="/contact">{nextStepCta.ctaContact}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
