import { homeContent } from "@/content/home";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { CTAGlow } from "@/components/visuals";

export function FinalCta() {
  const { finalCta, newsletter } = homeContent;

  return (
    <section className="py-24 bg-muted/20 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center bg-card rounded-[3rem] p-8 md:p-16 shadow-xl border border-border/50">

          <div className="flex flex-col items-start max-w-xl">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
              {finalCta.headline}
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed font-medium">
              {finalCta.subheadline}
            </p>
            <CTAGlow glowOpacity={0.6}>
              <Button size="lg" asChild className="rounded-full px-10 py-6 text-xl font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl border border-primary/50 transition-transform hover:-translate-y-1">
                <Link href="/contact">{finalCta.cta}</Link>
              </Button>
            </CTAGlow>
          </div>

          <div className="bg-muted/30 rounded-[2rem] p-8 md:p-10 border border-border">
            <h3 className="font-heading text-2xl font-bold mb-4">{newsletter.headline}</h3>
            <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
              {newsletter.description}
            </p>
            <form className="flex flex-col sm:flex-row gap-4" action="/">
              <Input
                type="email"
                placeholder={newsletter.placeholder}
                className="rounded-full bg-background border-border h-12 px-6"
                required
              />
              <Button type="submit" className="rounded-full h-12 px-8 font-bold shrink-0 hover:bg-primary/90">
                {newsletter.cta}
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
