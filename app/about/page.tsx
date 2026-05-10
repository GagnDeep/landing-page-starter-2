import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { seo, hero, founderStory, clinicalPhilosophy, facilityTour, team, finalCta } from "@/content/about";
import { images } from "@/lib/images";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { DotMatrixPattern } from "@/components/visuals/DotMatrixPattern";

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">

      {/* 1. Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-24 pb-20 overflow-hidden bg-muted/20">
        <AnimatedGradientMesh speed={25} className="absolute inset-0 opacity-40" />
        <DotMatrixPattern opacity={0.2} />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground tracking-tight mb-6">
            {hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {hero.subtitle}
          </p>
        </div>
      </section>

      {/* 2. The Founder's Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={images.team.drKhanPlaceholder.src}
                alt={images.team.drKhanPlaceholder.alt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">{founderStory.title}</h2>
                <div className="pt-2">
                  <p className="text-xl font-bold text-primary">{founderStory.name}</p>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest font-medium">{founderStory.role}</p>
                </div>
              </div>
              <div className="prose prose-slate prose-lg text-muted-foreground leading-relaxed">
                <p>{founderStory.biography}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Clinical Philosophy */}
      <section className="py-24 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">{clinicalPhilosophy.title}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {clinicalPhilosophy.description}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {clinicalPhilosophy.pillars.map((pillar, idx) => (
              <Card key={idx} className="bg-background border-border/50 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-8 space-y-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-bold font-heading">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The Facility / Clinic Tour */}
      <section className="py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">{facilityTour.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{facilityTour.description}</p>
            </div>
            <div className="order-1 lg:order-2 relative h-[450px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src={images.hero.primary.src}
                alt={images.hero.primary.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Our Team */}
      <section className="py-24 bg-primary/5 border-y border-border/50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">{team.title}</h2>
            <p className="text-lg text-muted-foreground">{team.description}</p>
          </div>
          {/* Placeholder for team grid as per layout docs */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 opacity-60">
             {[1, 2, 3].map((i) => (
                <div key={i} className="bg-background rounded-2xl overflow-hidden border border-border/50">
                   <div className="h-64 bg-muted w-full relative">
                      <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/50">Clinical Staff</div>
                   </div>
                   <div className="p-6 text-left">
                      <div className="h-4 w-3/4 bg-muted rounded mb-2"></div>
                      <div className="h-3 w-1/2 bg-muted/50 rounded"></div>
                   </div>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* 6. Final CTA */}
      <section className="py-32 relative overflow-hidden bg-primary text-primary-foreground">
        <DotMatrixPattern opacity={0.2} />
        <div className="container mx-auto max-w-4xl px-4 text-center relative z-10 space-y-8">
          <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight">{finalCta.title}</h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            {finalCta.description}
          </p>
          <div className="pt-8">
             <Button size="lg" variant="secondary" asChild className="rounded-full h-14 px-10 text-lg shadow-2xl">
               <Link href={finalCta.cta.href}>{finalCta.cta.label}</Link>
             </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
