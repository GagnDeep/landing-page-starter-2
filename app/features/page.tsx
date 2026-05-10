import Image from "next/image";
import type { Metadata } from "next";
import { featuresContent } from "@/content/features";
import { IMAGES } from "@/lib/images";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedGradientMesh, FloatingBlobs, DotMatrixGrid } from "@/components/visuals";
import { CheckCircle2, Flame, UtensilsCrossed, GlassWater } from "lucide-react";

export const metadata: Metadata = {
  title: featuresContent.meta.title,
  description: featuresContent.meta.description,
};

export default function FeaturesPage() {
  const {
    hero, wedding, corporate, liveStalls,
    intimate, customDesign, equipment, cta
  } = featuresContent;

  return (
    <div className="flex flex-col w-full overflow-hidden">

      {/* 1. Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-muted/50 border-b border-border">
        <AnimatedGradientMesh className="opacity-30" />
        <div className="container px-4 md:px-6 relative z-10 text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight text-foreground drop-shadow-sm max-w-4xl mx-auto">
            {hero.headline}
          </h1>
        </div>
      </section>

      {/* 2. Wedding Catering */}
      <section className="py-24 relative overflow-hidden">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl font-heading font-semibold text-primary">{wedding.heading}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {wedding.description}
            </p>
            <ul className="space-y-4">
              {wedding.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-lg text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 w-full relative">
            <div className="aspect-[4/5] rounded-arch overflow-hidden border border-border/50 shadow-xl relative z-10">
              <Image
                src={IMAGES.services.wedding.url}
                alt={IMAGES.services.wedding.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </section>

      {/* 3. Corporate Events */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-heading font-semibold">{corporate.heading}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {corporate.description}
            </p>
          </div>
          <div className="flex-1 w-full aspect-video rounded-2xl overflow-hidden relative shadow-md">
            <Image
              src={IMAGES.services.corporate.url}
              alt={IMAGES.services.corporate.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* 4. Live Interactive Stalls */}
      <section className="py-32 bg-[#1A1A1A] text-white relative overflow-hidden">
        <FloatingBlobs className="absolute inset-0 opacity-20 pointer-events-none" />
        <div className="container px-4 md:px-6 relative z-10 text-center max-w-4xl mx-auto space-y-12">
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] mb-4">
            <Flame className="w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-[#D4AF37]">{liveStalls.heading}</h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            {liveStalls.description}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
            {liveStalls.popularStalls.map((stall, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-center text-center">
                <span className="font-medium text-sm md:text-base">{stall}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. & 6. Intimate Gatherings & Custom Design (Split Grid) */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-muted/30 border-border h-full hover:shadow-md transition-shadow">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <GlassWater className="w-6 h-6" />
                </div>
                <CardTitle className="text-3xl font-heading">{intimate.heading}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">{intimate.description}</p>
              </CardContent>
            </Card>

            <Card className="bg-muted/30 border-border h-full hover:shadow-md transition-shadow">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <UtensilsCrossed className="w-6 h-6" />
                </div>
                <CardTitle className="text-3xl font-heading">{customDesign.heading}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">{customDesign.description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 7. Equipment & Setup */}
      <section className="py-24 bg-card border-y border-border relative overflow-hidden">
        <DotMatrixGrid className="absolute inset-0 opacity-20 pointer-events-none" rows={8} cols={12} />
        <div className="container px-4 md:px-6 relative z-10 text-center max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl font-heading font-semibold">{equipment.heading}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{equipment.description}</p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            {equipment.items.map((item, i) => (
              <span key={i} className="px-6 py-3 rounded-full bg-background border border-border text-foreground shadow-sm">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA */}
      <section className="py-32 bg-background text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="container px-4 md:px-6 space-y-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            {cta.heading}
          </h2>
          <Button size="lg" className="rounded-full shadow-glow text-lg h-16 px-12">
            {cta.button}
          </Button>
        </div>
      </section>

    </div>
  );
}
