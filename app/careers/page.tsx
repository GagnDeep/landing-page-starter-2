import { careersContent } from "@/content/careers";
import { IMAGES } from "@/lib/images";
import { RevealText } from "@/components/visuals/RevealText";
import { FadeIn } from "@/components/visuals/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/visuals/StaggerGroup";
import { ScaleImage } from "@/components/visuals/ScaleImage";
import { FloatingBlobs } from "@/components/visuals/FloatingBlobs";
import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: careersContent.seo.title,
  description: careersContent.seo.description,
};

export default function CareersPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden pt-20">
      {/* Hero */}
      <section className="py-24 md:py-32 bg-background relative overflow-hidden">
        <FloatingBlobs />
        <div className="container mx-auto px-6 text-center relative z-10">
          <RevealText as="h1" className="text-5xl md:text-7xl font-heading font-medium text-foreground mb-6">
            {careersContent.hero.headline}
          </RevealText>
          <RevealText as="p" delay={0.2} className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-16">
            {careersContent.hero.subheadline}
          </RevealText>

          <ScaleImage delay={0.4} className="aspect-video md:aspect-[21/9] relative max-w-5xl mx-auto shadow-2xl">
             <Image src={IMAGES.teamAction.src} alt={IMAGES.teamAction.alt} fill className="object-cover" priority />
          </ScaleImage>
        </div>
      </section>

      {/* Culture Statement */}
      <section className="py-24 bg-muted border-y border-border">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <RevealText as="h2" className="text-3xl md:text-4xl font-heading text-foreground mb-8">
            {careersContent.culture.headline}
          </RevealText>
          <FadeIn delay={0.2}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {careersContent.culture.body}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {careersContent.benefits.map((benefit, index) => (
              <StaggerItem key={index} className="flex flex-col text-center items-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-heading text-foreground mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <RevealText as="h2" className="text-4xl font-heading text-foreground mb-12 border-b border-border pb-4">
            Open Positions
          </RevealText>
          <div className="space-y-6">
            {careersContent.openPositions.map((position, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="flex flex-col md:flex-row md:items-center justify-between p-8 bg-card border border-border hover:border-primary transition-colors group">
                  <div className="mb-6 md:mb-0">
                    <h3 className="text-2xl font-heading text-foreground mb-2 group-hover:text-primary transition-colors">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="uppercase tracking-widest">{position.department}</span>
                      <span>•</span>
                      <span>{position.location}</span>
                      <span>•</span>
                      <span>{position.type}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="rounded-none hover:bg-primary hover:text-primary-foreground border-border group-hover:border-primary shrink-0">
                    View Role
                  </Button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-primary/5 relative overflow-hidden border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <RevealText as="h2" className="text-4xl font-heading text-foreground mb-6">
            {careersContent.ctaSection.headline}
          </RevealText>
          <RevealText as="p" delay={0.2} className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            {careersContent.ctaSection.body}
          </RevealText>
          <FadeIn delay={0.4}>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-10 py-8 text-xl tracking-wide" asChild>
              <a href={careersContent.ctaSection.cta.href}>
                {careersContent.ctaSection.cta.label}
              </a>
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}