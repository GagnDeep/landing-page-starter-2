import { aboutContent } from "@/content/about";
import { IMAGES } from "@/lib/images";
import { RevealText } from "@/components/visuals/RevealText";
import { FadeIn } from "@/components/visuals/FadeIn";
import { ParallaxImage } from "@/components/visuals/ParallaxImage";
import { StaggerContainer, StaggerItem } from "@/components/visuals/StaggerGroup";
import { ScaleImage } from "@/components/visuals/ScaleImage";
import { FloatingBlobs } from "@/components/visuals/FloatingBlobs";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: aboutContent.seo.title,
  description: aboutContent.seo.description,
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden pt-20">
      {/* 2. Hero Section */}
      <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden bg-background">
        <ParallaxImage imageKey="teamAction" priority className="absolute inset-0 opacity-40 dark:opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

        <div className="container relative z-10 mx-auto px-6 text-center flex flex-col items-center mt-12">
          <RevealText as="h1" duration={1.2} className="text-5xl md:text-7xl font-heading font-medium text-foreground max-w-4xl leading-tight mb-6">
            {aboutContent.hero.headline}
          </RevealText>
          <RevealText as="p" delay={0.4} className="text-lg md:text-2xl text-muted-foreground max-w-2xl">
            {aboutContent.hero.subheadline}
          </RevealText>
        </div>
      </section>

      {/* 3. Founder's Welcome */}
      <section className="py-24 md:py-32 bg-background relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScaleImage className="aspect-[3/4] relative shadow-2xl rounded-sm">
              <Image src={IMAGES.teamFounder.src} alt={IMAGES.teamFounder.alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
            </ScaleImage>
            <RevealText>
              <h2 className="text-4xl md:text-5xl font-heading text-foreground mb-8">
                {aboutContent.founder.headline}
              </h2>
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6 mb-10">
                <p>{aboutContent.founder.body}</p>
              </div>
              <div className="border-l-2 border-primary pl-6">
                <p className="text-2xl font-heading text-foreground">{aboutContent.founder.name}</p>
                <p className="text-sm uppercase tracking-widest text-muted-foreground">{aboutContent.founder.role}</p>
              </div>
            </RevealText>
          </div>
        </div>
      </section>

      {/* 5. Core Values Grid */}
      <section className="py-24 bg-muted relative overflow-hidden">
        <FloatingBlobs />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <RevealText as="h2" className="text-4xl font-heading text-center text-foreground mb-16">
            {aboutContent.coreValues.headline}
          </RevealText>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {aboutContent.coreValues.values.map((value, index) => (
              <StaggerItem key={index} className="flex flex-col bg-background p-10 shadow-sm border border-border">
                <h3 className="text-2xl font-heading text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 9. Catering Heritage */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <RevealText className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-heading text-foreground mb-6">
                {aboutContent.heritage.headline}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {aboutContent.heritage.body}
              </p>
            </RevealText>
            <div className="order-1 lg:order-2">
              <ScaleImage className="aspect-video md:aspect-[4/3] relative">
                <Image src={IMAGES.culinaryThali.src} alt={IMAGES.culinaryThali.alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
              </ScaleImage>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Our Promise / 4.9 Standard */}
      <section className="py-32 bg-foreground text-background text-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 max-w-3xl">
          <FadeIn>
            <Award className="w-16 h-16 mx-auto text-primary mb-8" />
          </FadeIn>
          <RevealText as="h2" className="text-5xl md:text-7xl font-heading text-primary mb-8">
            {aboutContent.promise.headline}
          </RevealText>
          <RevealText as="p" delay={0.2} className="text-xl md:text-2xl font-light text-background/80 leading-relaxed">
            {aboutContent.promise.body}
          </RevealText>
        </div>
      </section>

      {/* 15. CTA */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <RevealText as="h2" className="text-4xl md:text-5xl font-heading text-foreground mb-10">
            {aboutContent.ctaSection.headline}
          </RevealText>
          <FadeIn delay={0.2}>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-10 py-8 text-xl tracking-wide group" asChild>
              <Link href={aboutContent.ctaSection.cta.href}>
                {aboutContent.ctaSection.cta.label}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}