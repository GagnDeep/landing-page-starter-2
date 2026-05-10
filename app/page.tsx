import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  hero,
  trustIndicators,
  welcomeStatement,
  coreSpecializations,
  clinicEnvironment,
  nriFocus,
  doctorProfile,
  patientSuccess,
  deepDiveParalysis,
  deepDiveOrthopedic,
  differentiators,
  processSteps,
  technologyHighlight,
  insurancePayment,
  blogTeaser,
  homeFaq,
  finalCtaBlock,
  mapSection,
  globalFooter,
  blogTeaserImages,
  generalStrings
} from "@/content/home";
import { categories as faqCategories } from "@/content/faq";
import { articles as recentArticles } from "@/content/blog";
import { images } from "@/lib/images";

// Visual Components
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { LogoMarquee } from "@/components/visuals/LogoMarquee";
import { HeroIllustration } from "@/components/visuals/HeroIllustration";
import { DotMatrixPattern } from "@/components/visuals/DotMatrixPattern";
import { FloatingBlobs } from "@/components/visuals/FloatingBlobs";
import { MicroIconSet } from "@/components/visuals/MicroIconSet";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">

      {/* 2. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-16 pb-32 overflow-hidden bg-muted/10">
        <AnimatedGradientMesh speed={20} className="absolute inset-0 opacity-60" />
        <DotMatrixPattern opacity={0.3} />

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-tight tracking-tight">
                {hero.headline}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                {hero.subheadline}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" asChild className="rounded-full h-14 px-8 text-base shadow-lg shadow-primary/20">
                  <Link href={hero.primaryCta.href}>{hero.primaryCta.label}</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="rounded-full h-14 px-8 text-base bg-background/50 backdrop-blur">
                  <Link href={hero.secondaryCta.href}>{hero.secondaryCta.label}</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:flex justify-center items-center">
              <HeroIllustration activeState="processing" className="scale-125" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Trust Indicators */}
      <LogoMarquee items={trustIndicators.stats.map(s => `${s.value} ${s.label}`)} speed={30} />

      {/* 4. Introduction / Welcome */}
      <section className="py-24 md:py-32 relative">
        <div className="container mx-auto max-w-4xl px-4 text-center space-y-8">
          <p className="text-2xl md:text-3xl font-heading text-foreground leading-relaxed font-medium">
            &quot;{welcomeStatement.quote}&quot;
          </p>
          <div className="space-y-1">
            <p className="text-lg font-bold text-primary">{welcomeStatement.author}</p>
            <p className="text-sm text-muted-foreground uppercase tracking-widest">{welcomeStatement.role}</p>
          </div>
        </div>
      </section>

      {/* 5. Core Specializations */}
      <section className="py-24 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">{coreSpecializations.header.title}</h2>
            <p className="text-muted-foreground text-lg">{coreSpecializations.header.description}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {coreSpecializations.items.map((item, idx) => (
              <Card key={item.id} className="bg-background/60 backdrop-blur-sm border-border/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group">
                <CardHeader>
                  <MicroIconSet
                    icon={idx === 0 ? "brain" : idx === 1 ? "activity" : "shield"}
                    className="w-14 h-14 mb-4 group-hover:bg-primary/20 transition-colors"
                  />
                  <CardTitle className="font-heading text-2xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Clinic Environment */}
      <section className="py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={images.clinic.interior.src}
                alt={images.clinic.interior.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl" />
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-heading font-bold">{clinicEnvironment.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{clinicEnvironment.description}</p>
              <Button size="lg" asChild className="rounded-full">
                <Link href={clinicEnvironment.cta.href}>{clinicEnvironment.cta.label}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. NRI Focus (Dark Mode Block) */}
      <section className="py-24 md:py-32 bg-slate-950 text-slate-50 relative overflow-hidden">
        <FloatingBlobs color="rgba(56, 189, 248, 0.15)" count={2} />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 max-w-xl">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">{nriFocus.title}</h2>
              <p className="text-lg text-slate-300 leading-relaxed">{nriFocus.description}</p>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 p-8 md:p-10 rounded-3xl shadow-2xl">
              <p className="text-xl italic text-slate-200 leading-relaxed mb-6">&quot;{nriFocus.testimonial}&quot;</p>
              <p className="font-bold text-sky-400">{nriFocus.testimonialAuthor}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Doctor Profile Snippet */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row">
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl md:text-4xl font-heading font-bold">{doctorProfile.title}</h2>
                <p className="text-primary font-medium tracking-wide uppercase text-sm">{doctorProfile.credentials}</p>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">{doctorProfile.description}</p>
              <Button variant="outline" size="lg" asChild className="rounded-full">
                <Link href={doctorProfile.cta.href}>{doctorProfile.cta.label}</Link>
              </Button>
            </div>
            <div className="relative h-[400px] w-full max-w-md mx-auto lg:ml-auto rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
              <Image
                src={images.team.drKhanPlaceholder.src}
                alt={images.team.drKhanPlaceholder.alt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 10. Deep Dive: Paralysis */}
      <section className="py-24 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] rounded-3xl overflow-hidden shadow-lg">
               <Image
                  src={images.services.paralysis.src}
                  alt={images.services.paralysis.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="text-3xl md:text-4xl font-heading font-bold">{deepDiveParalysis.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{deepDiveParalysis.description}</p>
              <ul className="space-y-4">
                {deepDiveParalysis.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Deep Dive: Orthopedic (Alternating layout) */}
      <section className="py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-heading font-bold">{deepDiveOrthopedic.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{deepDiveOrthopedic.description}</p>
              <ul className="space-y-4">
                {deepDiveOrthopedic.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-lg">
               <Image
                  src={images.blog.orthoRehab.src}
                  alt={images.blog.orthoRehab.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
            </div>
          </div>
        </div>
      </section>

      {/* 12. Differentiators Grid */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16">{differentiators.title}</h2>
          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {differentiators.items.map((item, idx) => (
              <div key={idx} className="bg-background p-8 rounded-2xl shadow-sm border border-border/50">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Patient Success Stories */}
      <section className="py-24 bg-primary/5 border-y border-border/50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16">{patientSuccess.title}</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {patientSuccess.testimonials.map((testimonial, idx) => (
              <Card key={idx} className="bg-background shadow-md">
                  <CardContent className="p-8 flex flex-col justify-between h-full">
                    <p className="text-lg italic text-muted-foreground mb-6">&quot;{testimonial.quote}&quot;</p>
                    <div className="mt-auto">
                    <p className="font-bold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-primary">{testimonial.condition}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* 13. Technology & Equipment Highlight */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16">{technologyHighlight.title}</h2>
          <LogoMarquee items={technologyHighlight.items} speed={50} className="bg-transparent border-none py-0" />
        </div>
      </section>

      {/* 14. Process Steps */}
      <section className="py-24 md:py-32 bg-muted/10 border-y border-border/50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16">{processSteps.title}</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.steps.map((step, idx) => (
              <div key={idx} className="space-y-4 relative">
                <div className="text-lg font-bold text-primary">{step.title}</div>
                <p className="text-muted-foreground">{step.description}</p>
                {idx < processSteps.steps.length - 1 && (
                  <div className="hidden md:block absolute top-3 right-0 w-full h-[1px] bg-border -z-10 translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 15. Insurance & Payment */}
      <section className="py-24">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">{insurancePayment.title}</h2>
          <p className="text-lg text-muted-foreground mb-12">{insurancePayment.description}</p>
          <div className="flex flex-wrap justify-center gap-4">
            {insurancePayment.accepted.map((item, idx) => (
              <div key={idx} className="px-6 py-3 rounded-full bg-muted text-sm font-medium border border-border/50">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 16. Recent Articles / Blog Teaser */}
      <section className="py-24 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">{blogTeaser.title}</h2>
             <p className="text-muted-foreground">{blogTeaser.description}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
             {recentArticles.slice(0, 3).map((article, idx) => (
                <Card key={idx} className="bg-background overflow-hidden border-border/50 hover:shadow-lg transition-shadow">
                   <div className="h-48 relative bg-muted">
                      {/* Fallback image block, real implementation in Blog Phase */}
                      <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">{blogTeaserImages.fallbackAltText}</div>
                   </div>
                   <CardHeader>
                      <div className="text-xs font-bold text-primary mb-2 uppercase tracking-wider">{article.category}</div>
                      <CardTitle className="font-heading text-xl leading-tight">{article.title}</CardTitle>
                   </CardHeader>
                   <CardContent>
                      <p className="text-muted-foreground line-clamp-3 mb-4">{article.excerpt}</p>
                      <Button variant="link" className="p-0 h-auto" asChild>
                         <Link href={`/blog/${article.id}`}>{generalStrings.readArticleText}</Link>
                      </Button>
                   </CardContent>
                </Card>
             ))}
          </div>
        </div>
      </section>

      {/* 17. FAQ Accordion */}
      <section className="py-24">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">{homeFaq.title}</h2>
            <p className="text-muted-foreground">{homeFaq.description}</p>
          </div>
          <Accordion type="single" collapsible className="w-full bg-background rounded-2xl border border-border/50 px-6 shadow-sm">
            {faqCategories[0].items.slice(0, 4).map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-b-border/50 last:border-0">
                <AccordionTrigger className="text-left font-medium text-lg hover:text-primary py-6">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="text-center mt-8">
             <Button variant="link" asChild className="text-primary">
                <Link href="/faq">{homeFaq.ctaText}</Link>
             </Button>
          </div>
        </div>
      </section>

      {/* 18. Final CTA */}
      <section className="py-32 relative overflow-hidden bg-primary text-primary-foreground">
        <DotMatrixPattern opacity={0.2} />
        <div className="container mx-auto max-w-4xl px-4 text-center relative z-10 space-y-8">
          <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight">{finalCtaBlock.title}</h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            {finalCtaBlock.description}
          </p>
          <div className="pt-8">
             <Button size="lg" variant="secondary" asChild className="rounded-full h-14 px-10 text-lg shadow-2xl">
               <Link href="/contact">{finalCtaBlock.buttonLabel}</Link>
             </Button>
          </div>
          <p className="text-primary-foreground/60 mt-8 text-sm">{finalCtaBlock.contactPrefix} {globalFooter.phone}</p>
        </div>
      </section>

      {/* 19. Location & Map */}
      <section className="py-24 border-t border-border/50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16">{mapSection.title}</h2>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="bg-muted/50 rounded-3xl p-8 border border-border/50 space-y-8">
                <div>
                   <h3 className="font-bold text-lg mb-2">{mapSection.addressTitle}</h3>
                   <p className="text-muted-foreground">{globalFooter.address}</p>
                </div>
                <div>
                   <h3 className="font-bold text-lg mb-2">{mapSection.directionsTitle}</h3>
                   <p className="text-muted-foreground">{mapSection.directionsText}</p>
                </div>
                <div className="pt-4 border-t border-border/50">
                   <h3 className="font-bold text-lg mb-2">{mapSection.hoursTitle}</h3>
                   <div className="text-muted-foreground">
                      <p>{generalStrings.hoursMondayToSaturday}</p>
                      <p>{generalStrings.hoursSunday}</p>
                   </div>
                </div>
             </div>
             <div className="relative h-[400px] bg-muted rounded-3xl overflow-hidden border border-border/50 flex items-center justify-center">
                <p className="text-muted-foreground font-medium">{mapSection.mapFallbackText}</p>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
}
