import { featuresContent } from "@/content/features";
import { IMAGES } from "@/lib/images";
import { RevealText } from "@/components/visuals/RevealText";
import { FadeIn } from "@/components/visuals/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/visuals/StaggerGroup";
import { ScaleImage } from "@/components/visuals/ScaleImage";
import { FloatingBlobs } from "@/components/visuals/FloatingBlobs";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: featuresContent.seo.title,
  description: featuresContent.seo.description,
};

export default function FeaturesPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden pt-20">
      {/* 2. Hero */}
      <section className="py-24 md:py-32 bg-background relative overflow-hidden">
        <FloatingBlobs />
        <div className="container mx-auto px-6 text-center relative z-10">
          <RevealText as="h1" className="text-5xl md:text-7xl font-heading font-medium text-foreground mb-6">
            {featuresContent.hero.headline}
          </RevealText>
          <RevealText as="p" delay={0.2} className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            {featuresContent.hero.subheadline}
          </RevealText>
        </div>
      </section>

      {/* Services List (3, 4, 5, 6) */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6 md:px-12 space-y-32">
          {featuresContent.services.map((service, index) => {
            const isEven = index % 2 === 0;
            // Map specific images based on service ID for variety
            let imageAsset = IMAGES.heroSecondary;
            if (service.id === "decor") imageAsset = IMAGES.decorStage;
            if (service.id === "culinary") imageAsset = IMAGES.culinaryStall;
            if (service.id === "logistics") imageAsset = IMAGES.locationUdaipur;

            return (
              <div key={service.id} id={service.id} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className={`order-2 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <RevealText>
                    <div className="w-12 h-px bg-primary mb-6" />
                    <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-6">
                      {service.headline}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                      {service.body}
                    </p>

                    {service.highlights && (
                      <StaggerContainer className="space-y-4">
                        {service.highlights.map((highlight, i) => (
                          <StaggerItem key={i} className="flex items-start">
                            <Check className="h-6 w-6 text-primary mr-3 shrink-0" />
                            <span className="text-foreground">{highlight}</span>
                          </StaggerItem>
                        ))}
                      </StaggerContainer>
                    )}
                  </RevealText>
                </div>
                <div className={`order-1 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <ScaleImage className="aspect-square relative rounded-none shadow-lg">
                    <Image src={imageAsset.src} alt={imageAsset.alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
                  </ScaleImage>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 8. The Tech Advantage (NRI) */}
      <section className="py-24 mt-24 bg-foreground text-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <RevealText as="h2" className="text-4xl font-heading text-primary mb-8">
              {featuresContent.nriAdvantage.headline}
            </RevealText>
            <RevealText as="p" delay={0.2} className="text-xl text-background/80 leading-relaxed">
              {featuresContent.nriAdvantage.body}
            </RevealText>
          </div>
        </div>
      </section>

      {/* 15. CTA */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <RevealText as="h2" className="text-4xl md:text-5xl font-heading text-foreground mb-10">
            {featuresContent.ctaSection.headline}
          </RevealText>
          <FadeIn delay={0.2}>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-10 py-8 text-xl tracking-wide group" asChild>
              <Link href={featuresContent.ctaSection.cta.href}>
                {featuresContent.ctaSection.cta.label}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}