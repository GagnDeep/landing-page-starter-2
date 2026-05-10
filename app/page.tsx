import Image from "next/image";
import Link from "next/link";
import { homeContent } from "@/content/home";
import { siteImages } from "@/lib/images";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { LogoMarquee } from "@/components/visuals/LogoMarquee";
import { AnimatedDrivingLine } from "@/components/visuals/AnimatedDrivingLine";
import { FloatingBlobs } from "@/components/visuals/FloatingBlobs";
import { CodeWindowTyping } from "@/components/visuals/CodeWindowTyping";
import { CTAGlow } from "@/components/visuals/CTAGlow";
import { RevealText } from "@/components/visuals/RevealText";
import { DotMatrixGrid } from "@/components/visuals/DotMatrixGrid";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Leaf02Icon,
  Settings01Icon,
  Shield01Icon,
  CheckmarkBadge01Icon,
  StarIcon,
  ArrowRight01Icon,
  Location01Icon
} from "@hugeicons/core-free-icons";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata = {
  title: "Armaan Driving School | Govt. Registered in Sector 47, Chandigarh",
  openGraph: {
    title: "Armaan Driving School | Govt. Registered in Sector 47, Chandigarh",
    description: "Build confidence behind the wheel with Chandigarh's premier, government-registered driving school. Specializing in calm, methodical instruction for beginners.",
  },
};

export default function Home() {
  const {
    hero,
    trustBar,
    valueProposition,
    coreMethodology,
    beginnerFocus,
    services,
    fleet,
    instructorHighlight,
    pricingTeaser,
    testimonials,
    location,
    safetyGuarantee,
    faqTeaser,
    finalCta
  } = homeContent;

  const { home: images } = siteImages;

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32 md:pt-32 md:pb-40 lg:pt-40 lg:pb-48">
        <AnimatedGradientMesh />
        <DotMatrixGrid />
        <div className="container relative z-10 px-4 md:px-6 mx-auto flex flex-col items-center text-center">
          <RevealText as="h1" className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-foreground max-w-4xl mx-auto">
            {hero.headline}
          </RevealText>
          <RevealText as="p" className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {hero.subheadline}
          </RevealText>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <CTAGlow>
              <Link
                href={hero.primaryCta.href}
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                {hero.primaryCta.label}
              </Link>
            </CTAGlow>
            <Link
              href={hero.secondaryCta.href}
              className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {hero.secondaryCta.label}
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <LogoMarquee items={trustBar.certifications} />

      {/* 3. Value Proposition Intro */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6 mx-auto text-center max-w-3xl">
          <RevealText as="h2" className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            {valueProposition.headline}
          </RevealText>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {valueProposition.body}
          </p>
        </div>
      </section>

      {/* 4. Core Methodology Spotlight */}
      <section className="py-24 bg-muted/30 border-y border-border relative overflow-hidden">
        <AnimatedDrivingLine />
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-12">
            {coreMethodology.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <HugeiconsIcon
                    icon={
                      item.icon === 'leaf' ? Leaf02Icon :
                      item.icon === 'trending-up' ? Settings01Icon :
                      Shield01Icon
                    }
                    size={32}
                  />
                </div>
                <h3 className="font-heading text-xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Beginner Focus Feature */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[3/2] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={images.beginnerFocus.src}
                alt={images.beginnerFocus.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-6">
              <RevealText as="h2" className="font-heading text-3xl md:text-4xl font-bold">
                {beginnerFocus.headline}
              </RevealText>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {beginnerFocus.body}
              </p>
              <Link
                href={beginnerFocus.cta.href}
                className="inline-flex items-center text-primary font-semibold hover:underline"
              >
                {beginnerFocus.cta.label}
                <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Service Overview */}
      <section className="py-24 bg-muted/20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {Object.values(services).map((service, i) => (
              <div key={i} className="bg-card p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                <h3 className="font-heading text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-8 flex-grow">{service.description}</p>
                <Link href={service.link} className="inline-flex items-center text-primary font-medium mt-auto">
                  Learn more <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. The Fleet Section */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <RevealText as="h2" className="font-heading text-3xl md:text-4xl font-bold">
                {fleet.headline}
              </RevealText>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {fleet.description}
              </p>
            </div>
            <div className="order-1 lg:order-2 relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={images.fleetPreview.src}
                alt={images.fleetPreview.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. Pricing Teaser & Instructor Profile */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="container px-4 md:px-6 mx-auto relative z-10 grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <RevealText as="h2" className="font-heading text-3xl md:text-4xl font-bold">
              {pricingTeaser.headline}
            </RevealText>
            <div className="space-y-4">
              {pricingTeaser.packages.map((pkg, i) => (
                <div key={i} className="flex items-center justify-between p-6 bg-background/10 rounded-lg backdrop-blur-sm border border-primary-foreground/20">
                  <div>
                    <h4 className="font-bold text-lg">{pkg.name}</h4>
                    <span className="text-sm text-primary-foreground/80">{pkg.highlight}</span>
                  </div>
                  <span className="text-2xl font-bold">{pkg.price}</span>
                </div>
              ))}
            </div>
            <Link
              href={pricingTeaser.cta.href}
              className="inline-flex h-12 items-center justify-center rounded-md bg-background px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-background/90"
            >
              {pricingTeaser.cta.label}
            </Link>
          </div>

          <div className="space-y-6 flex flex-col justify-center">
            <RevealText as="h2" className="font-heading text-3xl md:text-4xl font-bold">
              {instructorHighlight.headline}
            </RevealText>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              {instructorHighlight.description}
            </p>
            <Link
              href={instructorHighlight.cta.href}
              className="inline-flex items-center font-medium hover:underline"
            >
              {instructorHighlight.cta.label}
              <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Testimonial Carousel (Using CodeWindow for structural visual) */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <RevealText as="h2" className="font-heading text-3xl md:text-4xl font-bold">
              {testimonials.headline}
            </RevealText>
            <div className="flex justify-center items-center mt-4 gap-2 text-accent">
              {[...Array(5)].map((_, i) => (
                <HugeiconsIcon key={i} icon={StarIcon} fill="currentColor" size={24} />
              ))}
              <span className="text-foreground ml-2 font-bold">{trustBar.rating}</span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.reviews.map((review, i) => (
               <CodeWindowTyping
                key={i}
                codeString={`"${review.quote}"\n\n— ${review.author}`}
                className="h-full bg-muted/10 border-border"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 10. Location & Area Covered + Safety First Guarantee */}
      <section className="py-24 bg-muted/20 border-y border-border">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent mb-6">
                <HugeiconsIcon icon={Location01Icon} size={24} />
              </div>
              <h2 className="font-heading text-3xl font-bold">{location.headline}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{location.description}</p>
            </div>
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-6">
                <HugeiconsIcon icon={CheckmarkBadge01Icon} size={24} />
              </div>
              <h2 className="font-heading text-3xl font-bold">{safetyGuarantee.headline}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{safetyGuarantee.body}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQ Teaser */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6 mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <RevealText as="h2" className="font-heading text-3xl md:text-4xl font-bold">
              {faqTeaser.headline}
            </RevealText>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqTeaser.questions.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-semibold text-lg">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-8 text-center">
            <Link
              href={faqTeaser.cta.href}
              className="inline-flex items-center text-primary font-medium hover:underline"
            >
              {faqTeaser.cta.label}
              <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 12. Final CTA */}
      <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden text-center">
        <FloatingBlobs />
        <div className="container relative z-10 px-4 md:px-6 mx-auto max-w-4xl">
          <RevealText as="h2" className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {finalCta.headline}
          </RevealText>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12">
            {finalCta.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <CTAGlow>
              <Link
                href={finalCta.primaryCta.href}
                className="inline-flex h-14 items-center justify-center rounded-md bg-accent px-10 text-base font-bold text-accent-foreground shadow-lg transition-transform hover:scale-105"
              >
                {finalCta.primaryCta.label}
              </Link>
            </CTAGlow>
            <Link
              href={finalCta.secondaryCta.href}
              className="inline-flex h-14 items-center justify-center rounded-md border-2 border-primary-foreground/30 bg-transparent px-10 text-base font-bold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              {finalCta.secondaryCta.label}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
