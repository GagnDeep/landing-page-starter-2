import { homeContent } from "@/content/home";
import { IMAGES } from "@/lib/images";
import { RevealText } from "@/components/visuals/RevealText";
import { FadeIn } from "@/components/visuals/FadeIn";
import { ParallaxImage } from "@/components/visuals/ParallaxImage";
import { StaggerContainer, StaggerItem } from "@/components/visuals/StaggerGroup";
import { ElegantTyping } from "@/components/visuals/ElegantTyping";
import { LogoMarquee } from "@/components/visuals/LogoMarquee";
import { FloatingBlobs } from "@/components/visuals/FloatingBlobs";
import { ScaleImage } from "@/components/visuals/ScaleImage";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Globe, ShieldCheck, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: homeContent.seo.title,
  description: homeContent.seo.description,
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 2. Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-background">
        <ParallaxImage imageKey="heroMain" priority className="absolute inset-0 opacity-40 dark:opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

        <div className="container relative z-10 mx-auto px-6 text-center flex flex-col items-center">
          <RevealText as="h1" duration={1.2} className="text-5xl md:text-7xl lg:text-8xl font-heading font-medium text-foreground max-w-5xl leading-tight mb-6">
            {homeContent.hero.headline}
          </RevealText>
          <RevealText as="p" delay={0.4} className="text-lg md:text-2xl text-muted-foreground max-w-2xl mb-10">
            <ElegantTyping text={homeContent.hero.subheadline} delay={0.6} />
          </RevealText>
          <FadeIn delay={1.2}>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 py-6 text-lg tracking-wide group" asChild>
              <Link href={homeContent.hero.cta.href}>
                {homeContent.hero.cta.label}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* 3. Introduction / "The Art of Celebration" */}
      <section className="py-24 md:py-32 bg-background relative">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
          <RevealText as="h2" className="text-3xl md:text-5xl font-heading text-primary mb-8">
            {homeContent.introduction.headline}
          </RevealText>
          <RevealText as="p" delay={0.2} className="text-xl md:text-2xl text-foreground leading-relaxed font-light">
            {homeContent.introduction.body}
          </RevealText>
        </div>
      </section>

      {/* 4. Trust & Venue Partners Bar */}
      <section className="py-12 bg-muted/30 border-y border-border overflow-hidden">
        <div className="container mx-auto px-6 mb-8 text-center">
          <p className="text-sm tracking-widest uppercase text-muted-foreground font-semibold">Trusted by Premier Venues Worldwide</p>
        </div>
        <LogoMarquee
          items={[
            <span key="1" className="text-2xl font-heading text-muted-foreground mx-8">The Oberoi Udaivilas</span>,
            <span key="2" className="text-2xl font-heading text-muted-foreground mx-8">Taj Lake Palace</span>,
            <span key="3" className="text-2xl font-heading text-muted-foreground mx-8">Rambagh Palace</span>,
            <span key="4" className="text-2xl font-heading text-muted-foreground mx-8">JW Marriott</span>,
            <span key="5" className="text-2xl font-heading text-muted-foreground mx-8">The Leela Palace</span>,
          ]}
        />
      </section>

      {/* 5. Core Services Overview */}
      <section className="py-24 md:py-32 bg-background relative">
        <FloatingBlobs />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="mb-16 md:mb-24 text-center">
            <RevealText as="h2" className="text-4xl md:text-5xl font-heading text-foreground">
              {homeContent.servicesOverview.headline}
            </RevealText>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {homeContent.servicesOverview.services.map((service, index) => (
              <StaggerItem key={index} className="flex flex-col group">
                <div className="h-px w-12 bg-primary mb-6 transition-all duration-500 group-hover:w-full" />
                <h3 className="text-2xl font-heading text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed flex-1 mb-6">{service.description}</p>
                <Link href={service.href} className="text-primary font-medium flex items-center hover:underline">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 6. Feature Highlight: The NRI Experience */}
      <section className="py-24 bg-muted relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <RevealText className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-heading text-foreground mb-6">
                {homeContent.nriExperience.headline}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {homeContent.nriExperience.body}
              </p>
              <Button variant="outline" size="lg" className="border-primary text-foreground hover:bg-primary hover:text-primary-foreground rounded-none" asChild>
                <Link href={homeContent.nriExperience.cta.href}>
                  {homeContent.nriExperience.cta.label}
                </Link>
              </Button>
            </RevealText>
            <div className="order-1 lg:order-2">
              <ScaleImage className="aspect-[4/5] md:aspect-square relative shadow-2xl">
                <Image src={IMAGES.blogPost2.src} alt={IMAGES.blogPost2.alt} fill className="object-cover" />
              </ScaleImage>
            </div>
          </div>
        </div>
      </section>

      {/* 7 & 10. Decor Showcase & Culinary (Combined Gallery Teaser) */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ScaleImage delay={0.1} className="aspect-square relative col-span-1 md:col-span-2 lg:col-span-2">
              <Image src={IMAGES.decorStage.src} alt={IMAGES.decorStage.alt} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/20 flex items-end p-8">
                <h3 className="text-white text-3xl font-heading">Thematic Decor Design</h3>
              </div>
            </ScaleImage>
            <ScaleImage delay={0.2} className="aspect-square relative col-span-1">
              <Image src={IMAGES.decorFloral.src} alt={IMAGES.decorFloral.alt} fill className="object-cover" />
            </ScaleImage>
            <ScaleImage delay={0.3} className="aspect-square relative col-span-1">
              <Image src={IMAGES.culinaryThali.src} alt={IMAGES.culinaryThali.alt} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/20 flex items-end p-8">
                <h3 className="text-white text-2xl font-heading">Royal Culinary Affairs</h3>
              </div>
            </ScaleImage>
            <ScaleImage delay={0.4} className="aspect-square relative col-span-1 md:col-span-2 lg:col-span-2">
              <Image src={IMAGES.culinaryStall.src} alt={IMAGES.culinaryStall.alt} fill className="object-cover" />
            </ScaleImage>
          </div>
        </div>
      </section>

      {/* 8. The Signature Approach */}
      <section className="py-24 md:py-32 bg-foreground text-background">
        <div className="container mx-auto px-6 md:px-12">
          <RevealText as="h2" className="text-4xl md:text-5xl font-heading text-center mb-16 text-background">
            {homeContent.signatureApproach.headline}
          </RevealText>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-background/20" />
            {homeContent.signatureApproach.steps.map((step, index) => (
              <RevealText key={index} delay={index * 0.2} className="relative text-center flex flex-col items-center">
                <div className="w-24 h-24 rounded-full border border-primary flex items-center justify-center bg-foreground mb-8 relative z-10">
                  <span className="text-2xl font-heading text-primary">0{index + 1}</span>
                </div>
                <h3 className="text-2xl font-heading mb-4 text-background">{step.title}</h3>
                <p className="text-background/70 leading-relaxed max-w-sm">{step.description}</p>
              </RevealText>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Testimonial */}
      <section className="py-32 bg-primary/10 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 text-[300px] font-heading text-primary/10 leading-none select-none">&quot;</div>
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl relative z-10">
          <RevealText as="p" className="text-2xl md:text-4xl font-heading text-foreground leading-snug mb-10">
            &quot;{homeContent.testimonial.quote}&quot;
          </RevealText>
          <FadeIn delay={0.4}>
            <p className="text-lg font-semibold text-foreground uppercase tracking-wider">{homeContent.testimonial.author}</p>
            <p className="text-muted-foreground">{homeContent.testimonial.event}</p>
          </FadeIn>
        </div>
      </section>

      {/* 14. Quick Facts */}
      <section className="py-20 bg-background border-b border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <FadeIn delay={0.1} className="flex flex-col items-center">
              <Star className="h-8 w-8 text-primary mb-4" />
              <h4 className="text-4xl font-heading font-semibold text-foreground mb-2">4.9★</h4>
              <p className="text-sm text-muted-foreground uppercase tracking-widest">Client Rating</p>
            </FadeIn>
            <FadeIn delay={0.2} className="flex flex-col items-center">
              <Globe className="h-8 w-8 text-primary mb-4" />
              <h4 className="text-4xl font-heading font-semibold text-foreground mb-2">15+</h4>
              <p className="text-sm text-muted-foreground uppercase tracking-widest">Global Locations</p>
            </FadeIn>
            <FadeIn delay={0.3} className="flex flex-col items-center">
              <ShieldCheck className="h-8 w-8 text-primary mb-4" />
              <h4 className="text-4xl font-heading font-semibold text-foreground mb-2">100%</h4>
              <p className="text-sm text-muted-foreground uppercase tracking-widest">Discretion</p>
            </FadeIn>
            <FadeIn delay={0.4} className="flex flex-col items-center">
              <MapPin className="h-8 w-8 text-primary mb-4" />
              <h4 className="text-4xl font-heading font-semibold text-foreground mb-2">24/7</h4>
              <p className="text-sm text-muted-foreground uppercase tracking-widest">NRI Support</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 18. Call to Action */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <RevealText as="h2" className="text-5xl md:text-6xl font-heading text-foreground mb-6">
            {homeContent.ctaSection.headline}
          </RevealText>
          <RevealText as="p" delay={0.2} className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            {homeContent.ctaSection.body}
          </RevealText>
          <FadeIn delay={0.4}>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-10 py-8 text-xl tracking-wide" asChild>
              <Link href={homeContent.ctaSection.cta.href}>
                {homeContent.ctaSection.cta.label}
              </Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
