import Image from "next/image";
import Link from "next/link";
import {
  AnimatedGradientMesh,
  LogoMarquee,
  AnimatedHeroIllustration,
  AvatarStack,
  MicroIconSet,
  DotMatrixGrid
} from "@/components/visuals";
import { homeContent } from "@/content/home";
import { siteImages } from "@/lib/images";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon, PlayCircleIcon } from "@hugeicons/core-free-icons";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20">
        <AnimatedGradientMesh className="absolute inset-0 z-0 opacity-80" />
        <div className="absolute inset-0 z-0 bg-background/50 dark:bg-background/80" />

        <div className="container relative z-10 px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-8 max-w-xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-medium tracking-tight leading-tight text-foreground">
              {homeContent.hero.headline}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-sans leading-relaxed">
              {homeContent.hero.subheadline}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="rounded-none px-8 font-sans">
                <Link href="/services">{homeContent.hero.cta}</Link>
              </Button>
            </div>
          </div>
          <div className="hidden lg:flex justify-center">
            <AnimatedHeroIllustration className="w-full max-w-lg opacity-80" />
          </div>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <section className="py-12 border-y border-border bg-muted/30">
        <div className="container px-4 md:px-6">
          <p className="text-center text-sm font-sans font-medium text-muted-foreground mb-6 uppercase tracking-widest">
            {homeContent.trustBar.text}
          </p>
          <LogoMarquee logos={homeContent.trustBar.logos} speed={30} />
        </div>
      </section>

      {/* 3. Introduction */}
      <section className="py-24 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0 rounded-sm overflow-hidden shadow-2xl">
              <Image
                src={siteImages.home.introPortrait.url}
                alt={siteImages.home.introPortrait.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-8">
              <blockquote className="text-3xl md:text-4xl font-heading text-primary leading-snug">
                {homeContent.introduction.pullQuote}
              </blockquote>
              <p className="text-lg text-muted-foreground font-sans leading-relaxed">
                {homeContent.introduction.body}
              </p>
              <div className="pt-4 font-heading text-xl italic text-foreground">
                — {homeContent.introduction.signature}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5,6,7. Services Spotlight */}
      <section className="py-24 bg-card relative">
        <DotMatrixGrid opacity={0.05} />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col gap-24">

            {/* Photography */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 flex flex-col gap-6">
                <MicroIconSet activeIcon="photo" className="mb-4" />
                <h2 className="text-4xl font-heading text-foreground">{homeContent.services.photography.title}</h2>
                <p className="text-lg text-muted-foreground font-sans">{homeContent.services.photography.description}</p>
                <Button variant="outline" asChild className="w-fit mt-4 rounded-none">
                  <Link href="/services">{homeContent.services.photography.cta}</Link>
                </Button>
              </div>
              <div className="order-1 lg:order-2 relative aspect-[4/3] w-full overflow-hidden group">
                <Image
                  src={siteImages.home.servicePhoto.url}
                  alt={siteImages.home.servicePhoto.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Films */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[16/9] w-full overflow-hidden group">
                <Image
                  src={siteImages.home.serviceVideo.url}
                  alt={siteImages.home.serviceVideo.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  <HugeiconsIcon icon={PlayCircleIcon} strokeWidth={1 as any} className="size-20 text-white/90" />
                </div>
              </div>
              <div className="flex flex-col gap-6 lg:pl-12">
                <MicroIconSet activeIcon="video" className="mb-4" />
                <h2 className="text-4xl font-heading text-foreground">{homeContent.services.films.title}</h2>
                <p className="text-lg text-muted-foreground font-sans">{homeContent.services.films.description}</p>
                <Button variant="outline" asChild className="w-fit mt-4 rounded-none">
                  <Link href="/services#films">{homeContent.services.films.cta}</Link>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. Testimonial Featured */}
      <section className="py-32 bg-primary/5 dark:bg-card border-y border-border">
        <div className="container px-4 md:px-6 text-center max-w-4xl mx-auto">
          <AvatarStack images={[siteImages.home.caseStudyOne, siteImages.home.caseStudyTwo]} className="justify-center mb-10" />
          <blockquote className="text-2xl md:text-4xl font-heading leading-tight text-foreground mb-8">
            {homeContent.testimonials.featured.quote}
          </blockquote>
          <cite className="font-sans text-muted-foreground not-italic uppercase tracking-wider text-sm font-semibold">
            {homeContent.testimonials.featured.author}
          </cite>
        </div>
      </section>

      {/* 9, 13. Featured Case Studies */}
      <section className="py-24 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading text-foreground mb-4">Featured Stories</h2>
            <p className="text-muted-foreground font-sans max-w-2xl mx-auto">Explore the celebrations we&apos;ve had the honor of documenting.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Case Study 1 */}
            <div className="group flex flex-col gap-6 cursor-pointer">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={siteImages.home.caseStudyOne.url}
                  alt={siteImages.home.caseStudyOne.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div>
                <h3 className="text-2xl font-heading text-foreground mb-2">{homeContent.caseStudies.one.title}</h3>
                <p className="text-muted-foreground font-sans mb-4 line-clamp-2">{homeContent.caseStudies.one.description}</p>
                <span className="font-sans font-medium text-primary flex items-center gap-2 group-hover:gap-3 transition-all">
                  {homeContent.caseStudies.one.cta}
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  <HugeiconsIcon icon={ArrowRight02Icon} strokeWidth={2 as any} className="size-4" />
                </span>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="group flex flex-col gap-6 cursor-pointer md:mt-24">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={siteImages.home.caseStudyTwo.url}
                  alt={siteImages.home.caseStudyTwo.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div>
                <h3 className="text-2xl font-heading text-foreground mb-2">{homeContent.caseStudies.two.title}</h3>
                <p className="text-muted-foreground font-sans mb-4 line-clamp-2">{homeContent.caseStudies.two.description}</p>
                <span className="font-sans font-medium text-primary flex items-center gap-2 group-hover:gap-3 transition-all">
                  {homeContent.caseStudies.two.cta}
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  <HugeiconsIcon icon={ArrowRight02Icon} strokeWidth={2 as any} className="size-4" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10, 11. Meet Sanjay & Approach */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5 relative">
              <div className="sticky top-32">
                <div className="relative aspect-[3/4] w-full rounded-sm overflow-hidden">
                  <Image
                    src={siteImages.home.founderPortrait.url}
                    alt={siteImages.home.founderPortrait.alt}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-center">
              <h2 className="text-4xl font-heading text-foreground mb-6">{homeContent.teamTeaser.title}</h2>
              <p className="text-lg text-muted-foreground font-sans leading-relaxed mb-8">
                {homeContent.teamTeaser.bio}
              </p>
              <Button variant="outline" asChild className="w-fit rounded-none mb-16">
                <Link href="/about">{homeContent.teamTeaser.cta}</Link>
              </Button>

              <h3 className="text-2xl font-heading text-foreground mb-8 border-b border-border pb-4">{homeContent.approach.title}</h3>
              <div className="flex flex-col gap-8">
                {homeContent.approach.items.map((item, idx) => (
                  <div key={idx}>
                    <h4 className="font-sans font-semibold text-lg text-foreground mb-2">{item.title}</h4>
                    <p className="text-muted-foreground font-sans leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 16. FAQ Snippets */}
      <section className="py-24 border-t border-border">
        <div className="container px-4 md:px-6 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">{homeContent.faqTeaser.title}</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {homeContent.faqTeaser.questions.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="font-sans font-medium text-lg text-left hover:text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-sans leading-relaxed text-base">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-10 text-center">
            <Button variant="link" asChild className="text-primary font-sans text-base">
              <Link href="/faq">{homeContent.faqTeaser.cta}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 19. CTA Pre-Footer */}
      <section className="py-32 bg-foreground text-background relative overflow-hidden">
        <AnimatedGradientMesh className="absolute inset-0 opacity-20 mix-blend-screen" fallbackColor="bg-transparent" />
        <div className="container px-4 md:px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-heading font-medium mb-6">
            {homeContent.ctaPreFooter.headline}
          </h2>
          <p className="text-lg md:text-xl text-background/70 font-sans max-w-2xl mx-auto mb-10">
            {homeContent.ctaPreFooter.subheadline}
          </p>
          <Button size="lg" asChild className="bg-background text-foreground hover:bg-background/90 rounded-none px-10 text-lg">
            <Link href="/contact">{homeContent.ctaPreFooter.button}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
