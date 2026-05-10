import Image from "next/image";
import Link from "next/link";
import { featuresContent } from "@/content/features";
import { siteImages } from "@/lib/images";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AnimatedHeroIllustration,
  DotMatrixGrid,
  MicroIconSet
} from "@/components/visuals";
import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkBadge01Icon } from "@hugeicons/core-free-icons";

export const metadata = {
  title: featuresContent.meta.title,
  description: featuresContent.meta.description,
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center pt-20 border-b border-border bg-card">
        <DotMatrixGrid opacity={0.15} spacing={40} />
        <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
          <AnimatedHeroIllustration className="w-48 h-48 md:w-64 md:h-64 mb-8 opacity-90" />
          <h1 className="text-5xl md:text-7xl font-heading font-medium tracking-tight text-foreground mb-6 max-w-4xl">
            {featuresContent.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-sans max-w-2xl">
            {featuresContent.hero.subtitle}
          </p>
        </div>
      </section>

      {/* 2. Service Overview */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 md:px-6 text-center max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl font-sans text-foreground leading-relaxed font-light">
            {featuresContent.overview.description}
          </p>
        </div>
      </section>

      {/* 3,4,5. Services Detailed Breakdown */}
      <section className="py-24 md:py-32">
        <div className="container px-4 md:px-6 flex flex-col gap-32">
          {featuresContent.services.map((service, idx) => {
            const isEven = idx % 2 === 1;
            const activeIcon = service.id === "wedding-photography"
              ? "photo"
              : service.id === "cinematic-films"
                ? "video"
                : "album";

            // Map specific layout images to the services.
            const imageAsset = service.id === "wedding-photography"
              ? siteImages.home.servicePhoto
              : service.id === "cinematic-films"
                ? siteImages.home.serviceVideo
                : siteImages.features.hero; // fallback/pre-wedding

            return (
              <div key={service.id} id={service.id} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className={`flex flex-col gap-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <MicroIconSet activeIcon={activeIcon as "photo" | "video" | "travel" | "album"} className="mb-2" />
                  <h2 className="text-4xl font-heading text-foreground">{service.title}</h2>
                  <p className="text-lg text-muted-foreground font-sans leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="flex flex-col gap-3 mt-4">
                    {service.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-3 font-sans text-foreground">
                        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                        <HugeiconsIcon icon={CheckmarkBadge01Icon} strokeWidth={1.5 as any} className="size-5 text-primary" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`relative aspect-[4/3] w-full rounded-sm overflow-hidden shadow-xl ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <Image
                    src={imageAsset.url}
                    alt={imageAsset.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. The NRI Experience */}
      <section className="py-24 bg-primary/5 dark:bg-card border-y border-border relative overflow-hidden">
        <div className="container relative z-10 px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <MicroIconSet activeIcon="travel" className="justify-center mb-6" />
            <h2 className="text-4xl font-heading text-foreground mb-6">
              {featuresContent.nriExperience.title}
            </h2>
            <p className="text-lg text-muted-foreground font-sans">
              {featuresContent.nriExperience.description}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuresContent.nriExperience.features.map((feature, idx) => (
              <div key={idx} className="bg-background p-8 rounded-sm shadow-sm border border-border flex flex-col gap-4 text-center items-center">
                <h3 className="font-heading text-xl text-foreground">{feature.title}</h3>
                <p className="font-sans text-muted-foreground text-sm leading-relaxed">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. The Deliverables */}
      <section className="py-24 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 sticky top-32">
              <h2 className="text-4xl font-heading text-foreground mb-6">
                {featuresContent.deliverables.title}
              </h2>
              <p className="text-lg text-muted-foreground font-sans leading-relaxed">
                {featuresContent.deliverables.description}
              </p>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-12">
              {featuresContent.deliverables.items.map((item, idx) => (
                <div key={idx} className="border-b border-border pb-8 last:border-0 last:pb-0">
                  <h3 className="font-heading text-2xl text-foreground mb-4">{item.name}</h3>
                  <p className="font-sans text-muted-foreground text-lg">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ Teaser */}
      <section className="py-24 border-t border-border bg-muted/20">
        <div className="container px-4 md:px-6 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
              {featuresContent.faqTeaser.title}
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full bg-background rounded-sm shadow-sm border border-border px-6 py-2">
            {featuresContent.faqTeaser.questions.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-border">
                <AccordionTrigger className="font-sans font-medium text-lg text-left hover:text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-sans leading-relaxed text-base">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 9. Call to Action */}
      <section className="py-32 bg-foreground text-background text-center relative overflow-hidden">
        <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center gap-8">
          <h2 className="text-4xl md:text-5xl font-heading font-medium">
            {featuresContent.cta.headline}
          </h2>
          <Button size="lg" asChild className="bg-background text-foreground hover:bg-background/90 rounded-none px-10 text-lg">
            <Link href="/contact">{featuresContent.cta.button}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
