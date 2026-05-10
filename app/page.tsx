import { homeContent } from "@/content/home";
import { images } from "@/lib/images";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { AnimatedHeroIllustration } from "@/components/visuals/AnimatedHeroIllustration";
import { LogoMarquee } from "@/components/visuals/LogoMarquee";
import { SteeringWheelIcon, Clock24Icon, ShieldCheckIcon, MapPinIcon } from "@/components/visuals/MicroIconSet";
import { CTAGlow } from "@/components/visuals/CTAGlow";
import { AnimatedStatCounter } from "@/components/visuals/AnimatedStatCounter";
import { CodeWindowTyping } from "@/components/visuals/CodeWindowTyping";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-background pt-16 pb-24 md:pt-24 md:pb-32">
        <AnimatedGradientMesh />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <h1 className="font-heading text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                {homeContent.hero.heading}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
                {homeContent.hero.subheading}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAGlow>
                  <Button size="lg" className="w-full sm:w-auto text-base h-12 px-8" asChild>
                    <Link href="/contact">
                      {homeContent.hero.primaryCta} <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CTAGlow>
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-12 px-8" asChild>
                  <Link href="/pricing">{homeContent.hero.secondaryCta}</Link>
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:block h-[400px]">
              <AnimatedHeroIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST / RATING STRIP */}
      <section className="border-y border-border bg-muted/30 py-6">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center gap-6 justify-center">
            <div className="flex items-center gap-2 font-semibold text-accent-foreground whitespace-nowrap bg-accent/10 px-4 py-2 rounded-full">
              <span className="text-accent">★</span> {homeContent.trustStrip.rating}
            </div>
            <div className="w-px h-6 bg-border hidden md:block" />
            <LogoMarquee
              logos={["Govt. Registered", "Dual-Controlled Fleet", "Patient Instructors", "Doorstep Pickup", "Zero Hidden Fees"]}
              className="max-w-3xl"
            />
          </div>
        </div>
      </section>

      {/* 3. VALUE PROPOSITION */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="font-heading text-4xl font-bold text-foreground mb-6">
            {homeContent.valueProposition.heading}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {homeContent.valueProposition.body}
          </p>
        </div>
      </section>

      {/* 4. FEATURES GRID */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              {homeContent.featuresGrid.heading}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {homeContent.featuresGrid.features.map((feature, idx) => {
              const icons = [ShieldCheckIcon, Clock24Icon, SteeringWheelIcon, MapPinIcon];
              const IconComponent = icons[idx % icons.length];
              return (
                <Card key={idx} className="border-none shadow-md bg-card">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                      <IconComponent />
                    </div>
                    <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-muted-foreground leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. INSTRUCTOR SPOTLIGHT & LIVE FEEDBACK */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={images.instructor.jeetPortrait.src}
                alt={images.instructor.jeetPortrait.alt}
                fill
                className="object-cover"
                sizes="(max-w-768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="font-heading text-2xl font-bold">{homeContent.instructorSpotlight.heading.replace("Meet ", "")}</h3>
                <p className="text-white/80">{homeContent.instructorSpotlight.role}</p>
              </div>
            </div>
            <div>
              <h2 className="font-heading text-4xl font-bold text-foreground mb-6">
                {homeContent.instructorSpotlight.heading}
              </h2>
              <p className="text-xl italic font-heading text-muted-foreground mb-8 border-l-4 border-primary pl-6 py-2">
                {homeContent.instructorSpotlight.quote}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                {homeContent.instructorSpotlight.bio}
              </p>
              <div className="mt-8">
                <CodeWindowTyping />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS TIMELINE */}
      <section className="py-20 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
            {homeContent.howItWorks.heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden md:block absolute top-6 left-[16.66%] right-[16.66%] h-0.5 bg-border -z-10" />

            {homeContent.howItWorks.steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mb-6 shadow-lg shadow-primary/20">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. STATS & FLEET TEASER */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-12">
              <div className="grid grid-cols-2 gap-8">
                {homeContent.statsCounter.stats.map((stat, idx) => {
                  const numValue = parseInt(stat.value.replace(/[^0-9]/g, ''));
                  const suffix = stat.value.replace(/[0-9]/g, '');
                  return (
                    <div key={idx} className="space-y-2">
                      <div className="text-4xl font-bold text-primary flex">
                        <AnimatedStatCounter value={numValue} suffix={suffix} duration={2} />
                      </div>
                      <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                    </div>
                  );
                })}
              </div>
              <div>
                <h3 className="font-heading text-3xl font-bold mb-4">{homeContent.fleetShowcase.heading}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{homeContent.fleetShowcase.description}</p>
                <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4" /> {homeContent.fleetShowcase.badge}
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={images.fleet.sedan.src}
                alt={images.fleet.sedan.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. PRICING TEASER */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              {homeContent.pricingTeaser.heading}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homeContent.pricingTeaser.packages.map((pkg, idx) => (
              <Card key={idx} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <CardDescription className="text-primary font-medium mt-1">{pkg.duration}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground mb-6">{pkg.description}</p>
                  <Button variant={idx === 1 ? "default" : "outline"} className="w-full mt-auto" asChild>
                    <Link href="/pricing">{pkg.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
            {homeContent.testimonials.heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {homeContent.testimonials.reviews.map((review, idx) => (
              <div key={idx} className="bg-muted/30 p-8 rounded-2xl relative">
                <span className="absolute top-6 left-6 text-6xl text-primary/20 font-serif">&quot;</span>
                <p className="text-lg text-foreground mb-6 relative z-10 pt-4 leading-relaxed">
                  {review.quote}
                </p>
                <div className="flex items-center justify-between">
                  <p className="font-bold">{review.author}</p>
                  <span className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {review.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQ SECTION */}
      <section className="py-24 bg-muted/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              {homeContent.faqTeaser.heading}
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {homeContent.faqTeaser.questions.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-10 text-center">
            <Button variant="link" asChild>
              <Link href="/faq">{homeContent.faqTeaser.cta} <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 11. BOTTOM CTA & NEWSLETTER */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[length:24px_24px]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center relative z-10">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            {homeContent.bottomCta.heading}
          </h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            {homeContent.bottomCta.subheading}
          </p>
          <Button size="lg" variant="secondary" className="h-14 px-10 text-lg shadow-xl" asChild>
            <Link href="/contact">{homeContent.bottomCta.ctaLabel}</Link>
          </Button>

          <div className="mt-20 pt-12 border-t border-primary-foreground/20 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
            <div>
              <h3 className="font-bold text-xl mb-2">{homeContent.newsletter.heading}</h3>
              <p className="opacity-80 text-sm">Join our newsletter for weekly tips.</p>
            </div>
            <form className="flex w-full md:w-auto max-w-sm gap-2" action="/contact">
              <Input
                type="email"
                placeholder={homeContent.newsletter.placeholder}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button variant="secondary" type="submit">
                {homeContent.newsletter.ctaLabel}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
