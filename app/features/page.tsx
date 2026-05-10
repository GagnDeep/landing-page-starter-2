import Image from "next/image";
import Link from "next/link";
import { featuresContent } from "@/content/features";
import { siteImages } from "@/lib/images";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { DotMatrixGrid } from "@/components/visuals/DotMatrixGrid";
import { RevealText } from "@/components/visuals/RevealText";
import { CTAGlow } from "@/components/visuals/CTAGlow";
import { AnimatedDrivingLine } from "@/components/visuals/AnimatedDrivingLine";
import { FloatingBlobs } from "@/components/visuals/FloatingBlobs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkBadge01Icon, ArrowRight01Icon, MultiplicationSignIcon } from "@hugeicons/core-free-icons";

export const metadata = {
  title: featuresContent.metadata.title,
  description: featuresContent.metadata.description,
  openGraph: {
    title: featuresContent.metadata.title,
    description: featuresContent.metadata.description,
  }
};

export default function FeaturesPage() {
  const {
    hero,
    curriculumIntro,
    deepDives,
    curriculumPhases,
    noYellGuarantee,
    flexibility,
    progressTracking,
    comparison,
    faqSnippet,
    finalCta
  } = featuresContent;

  const images = siteImages.features;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32 md:pt-32 md:pb-40 lg:pt-40 lg:pb-48">
        <AnimatedGradientMesh />
        <DotMatrixGrid />
        <div className="container relative z-10 px-4 md:px-6 mx-auto flex flex-col items-center text-center">
          <RevealText as="h1" className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight max-w-4xl mx-auto">
            {hero.headline}
          </RevealText>
          <RevealText as="p" className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {hero.subheadline}
          </RevealText>
        </div>
      </section>

      {/* Curriculum Intro & Dual Control Deep Dive */}
      <section className="py-24 bg-background border-y border-border">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-24">
            <RevealText as="h2" className="font-heading text-3xl md:text-4xl font-bold mb-6">
              {curriculumIntro.headline}
            </RevealText>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {curriculumIntro.body}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <RevealText as="h2" className="font-heading text-3xl font-bold text-primary">
                {deepDives.dualControl.headline}
              </RevealText>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {deepDives.dualControl.body}
              </p>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={images.dualControl.src}
                alt={images.dualControl.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pedagogy & Anxiety Management */}
      <section className="py-24 bg-muted/20 relative overflow-hidden">
        <AnimatedDrivingLine />
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 lg:order-1 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
               <Image
                src={images.pedagogy.src}
                alt={images.pedagogy.alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <RevealText as="h2" className="font-heading text-3xl font-bold">
                {deepDives.pedagogy.headline}
              </RevealText>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {deepDives.pedagogy.body}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 bg-card p-8 md:p-12 rounded-3xl border border-border shadow-sm">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4">
                <HugeiconsIcon icon={CheckmarkBadge01Icon} size={24} />
              </div>
              <h3 className="font-heading text-2xl font-bold">{deepDives.anxiety.headline}</h3>
              <p className="text-muted-foreground">{deepDives.anxiety.body}</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <HugeiconsIcon icon={CheckmarkBadge01Icon} size={24} />
              </div>
              <h3 className="font-heading text-2xl font-bold">{deepDives.defensiveDriving.headline}</h3>
              <p className="text-muted-foreground">{deepDives.defensiveDriving.body}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Phases */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <RevealText as="h2" className="font-heading text-3xl md:text-4xl font-bold">
              {curriculumPhases.headline}
            </RevealText>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {curriculumPhases.phases.map((phase, i) => (
              <div key={i} className="bg-background/10 backdrop-blur-sm p-8 rounded-2xl border border-primary-foreground/20 relative">
                <div className="text-accent text-5xl font-heading font-bold opacity-50 absolute top-4 right-6">
                  {i + 1}
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4 relative z-10">{phase.title}</h3>
                <p className="text-primary-foreground/80 relative z-10">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mock Tests, No Yell, Flexibility, Tracking */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div className="space-y-4">
                <RevealText as="h2" className="font-heading text-2xl font-bold">
                  {deepDives.mockTests.headline}
                </RevealText>
                <p className="text-muted-foreground">{deepDives.mockTests.body}</p>
              </div>
              <div className="space-y-4">
                <RevealText as="h2" className="font-heading text-2xl font-bold">
                  {progressTracking.headline}
                </RevealText>
                <p className="text-muted-foreground">{progressTracking.body}</p>
              </div>
            </div>
            <div className="space-y-12">
              <div className="space-y-4">
                <RevealText as="h2" className="font-heading text-2xl font-bold text-accent">
                  {noYellGuarantee.headline}
                </RevealText>
                <p className="text-muted-foreground">{noYellGuarantee.body}</p>
              </div>
              <div className="space-y-4">
                <RevealText as="h2" className="font-heading text-2xl font-bold">
                  {flexibility.headline}
                </RevealText>
                <p className="text-muted-foreground">{flexibility.body}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 bg-muted/20 border-y border-border">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <RevealText as="h2" className="font-heading text-3xl md:text-4xl font-bold">
              {comparison.headline}
            </RevealText>
          </div>
          <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
            <div className="grid grid-cols-3 bg-muted/50 p-6 border-b border-border font-bold">
              <div>Feature</div>
              <div className="text-center text-primary">Armaan</div>
              <div className="text-center text-muted-foreground">Standard Schools</div>
            </div>
            {comparison.features.map((feature, i) => (
              <div key={i} className="grid grid-cols-3 p-6 border-b border-border last:border-0 items-center hover:bg-muted/10 transition-colors">
                <div className="font-medium text-sm md:text-base">{feature.name}</div>
                <div className="flex justify-center text-primary">
                  {feature.armaan === true ? <HugeiconsIcon icon={CheckmarkBadge01Icon} /> : feature.armaan}
                </div>
                <div className="flex justify-center text-muted-foreground text-sm">
                  {feature.standard === false ? <HugeiconsIcon icon={MultiplicationSignIcon} /> : feature.standard}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Snippet */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6 mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <RevealText as="h2" className="font-heading text-3xl font-bold">
              {faqSnippet.headline}
            </RevealText>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqSnippet.questions.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left font-semibold text-lg">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-8 text-center">
            <Link
              href={faqSnippet.cta.href}
              className="inline-flex items-center text-primary font-medium hover:underline"
            >
              {faqSnippet.cta.label}
              <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden text-center">
        <FloatingBlobs />
        <div className="container relative z-10 px-4 md:px-6 mx-auto max-w-3xl space-y-8">
          <RevealText as="h2" className="font-heading text-4xl md:text-5xl font-bold">
            {finalCta.headline}
          </RevealText>
          <p className="text-xl text-primary-foreground/90">
            {finalCta.subheadline}
          </p>
          <div className="pt-8">
            <CTAGlow>
              <Link
                href={finalCta.primaryCta.href}
                className="inline-flex h-14 items-center justify-center rounded-md bg-accent px-10 text-base font-bold text-accent-foreground shadow-lg transition-transform hover:scale-105"
              >
                {finalCta.primaryCta.label}
              </Link>
            </CTAGlow>
          </div>
        </div>
      </section>

    </div>
  );
}
