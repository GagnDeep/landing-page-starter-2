import Image from "next/image"
import Link from "next/link"
import { homeContent } from "@/content/home"
import { Images } from "@/lib/images"

// Shadcn UI
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"


// Visual Components
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh"
import { LogoMarquee } from "@/components/visuals/LogoMarquee"
import { CTAGlow } from "@/components/visuals/CTAGlow"
import { MicroIconSet } from "@/components/visuals/MicroIconSet"
import { CodeWindowTyping } from "@/components/visuals/CodeWindowTyping"
import { AnimatedDrivingPath } from "@/components/visuals/AnimatedDrivingPath"
import { SectionDivider } from "@/components/visuals/SectionDivider"

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">

      {/* 3. Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center pt-16 pb-32 overflow-hidden border-b border-border">
        <AnimatedGradientMesh />
        <div className="absolute inset-0 z-0 opacity-20 dark:opacity-30 mix-blend-overlay pointer-events-none">
          <Image
            src={Images.heroBackground.src}
            alt={Images.heroBackground.alt}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-sm font-medium text-accent backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-accent mr-2 animate-pulse"></span>
            Accepting new students
          </div>
          <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-foreground drop-shadow-sm">
            {homeContent.heroSection.headline}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl text-balance">
            {homeContent.heroSection.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <CTAGlow>
              <Button size="lg" className="w-full sm:w-auto text-base h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold" asChild>
                <Link href={homeContent.heroSection.primaryCta.href}>{homeContent.heroSection.primaryCta.label}</Link>
              </Button>
            </CTAGlow>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-14 px-8 font-semibold bg-background/50 backdrop-blur-sm" asChild>
              <Link href={homeContent.heroSection.secondaryCta.href}>{homeContent.heroSection.secondaryCta.label}</Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 w-full translate-y-1/2">
           <AnimatedDrivingPath />
        </div>
      </section>

      {/* 4. Trust Banner */}
      <section className="relative z-20 -mt-8">
        <LogoMarquee items={homeContent.trustBanner.badges} />
      </section>

      {/* 5. Intro Section */}
      <section className="py-24 px-4 container mx-auto text-center max-w-3xl">
        <MicroIconSet icon="car" size="lg" className="mx-auto mb-6" />
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">{homeContent.introSection.title}</h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          {homeContent.introSection.description}
        </p>
      </section>

      {/* 6. Service Highlights */}
      <section className="py-24 px-4 bg-muted/30 border-y border-border">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">{homeContent.serviceHighlights.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homeContent.serviceHighlights.services.map((service, index) => (
              <Card key={index} className="bg-card border-border shadow-sm hover:shadow-md transition-shadow group">
                <CardHeader>
                  <MicroIconSet icon={index === 0 ? "wheel" : index === 1 ? "car" : "road"} size="md" className="mb-4" />
                  <CardTitle className="font-heading text-xl group-hover:text-accent transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 7 & 8. Feature Split: Real Traffic & Safety */}
      <section className="py-24 px-4 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
              Real Experience
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">{homeContent.featureRealTraffic.title}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {homeContent.featureRealTraffic.description}
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-center gap-3">
                <MicroIconSet icon="road" size="sm" />
                <span className="font-medium text-foreground">Highway Merging & Speed Management</span>
              </li>
              <li className="flex items-center gap-3">
                <MicroIconSet icon="traffic" size="sm" />
                <span className="font-medium text-foreground">Roundabouts & Heavy City Intersections</span>
              </li>
            </ul>
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg border border-border">
            <Image
              src={Images.cityTraffic.src}
              alt={Images.cityTraffic.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-24 px-4 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row-reverse">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              Zero Compromise
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">{homeContent.featureSafetyFirst.title}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {homeContent.featureSafetyFirst.description}
            </p>
          </div>
          <div className="relative aspect-square md:aspect-video rounded-xl overflow-hidden shadow-lg border border-border">
            <Image
              src={Images.automaticCar.src}
              alt={Images.automaticCar.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* 9 & 10. Instructor Profile & Testimonial */}
      <section className="py-24 px-4 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
          <Image src={Images.instructorPortrait.src} alt="Background" fill className="object-cover blur-sm" />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-background">{homeContent.instructorProfile.name}</h2>
              <p className="text-xl text-accent font-medium">{homeContent.instructorProfile.role}</p>
              <p className="text-lg text-primary-foreground/80 leading-relaxed max-w-lg">
                {homeContent.instructorProfile.bio}
              </p>
            </div>
            <div className="w-full">
              <CodeWindowTyping
                text={homeContent.videoTestimonial.quote}
                author={homeContent.videoTestimonial.author}
                className="bg-background/95 backdrop-blur-sm border-none shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 11. Process Steps */}
      <section className="py-24 px-4 container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">{homeContent.processSteps.title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto relative">
          <div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-0.5 bg-border -z-10"></div>
          {homeContent.processSteps.steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-4 bg-background z-10 px-4">
              <div className="w-24 h-24 rounded-full bg-accent/10 border-2 border-accent text-accent flex items-center justify-center font-heading text-3xl font-bold shadow-sm">
                {step.step}
              </div>
              <h3 className="font-heading text-xl font-bold mt-4">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 12. Pricing Teaser */}
      <section className="py-24 px-4 bg-muted/30 border-y border-border">
        <div className="container mx-auto max-w-5xl text-center space-y-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">{homeContent.pricingTeaser.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {homeContent.pricingTeaser.packages.map((pkg, idx) => (
              <Card key={idx} className={`relative overflow-hidden ${idx === 0 ? 'border-accent shadow-md' : 'border-border'}`}>
                {idx === 0 && (
                  <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-4 py-1 text-xs font-bold rounded-bl-lg">
                    {pkg.highlight}
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">{pkg.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold font-heading mb-6">{pkg.price}</div>
                  <Button variant={idx === 0 ? "default" : "outline"} className={idx === 0 ? "w-full bg-primary hover:bg-primary/90" : "w-full"} asChild>
                    <Link href="/pricing">Select Package</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button variant="link" className="text-accent text-lg" asChild>
             <Link href={homeContent.pricingTeaser.cta.href}>{homeContent.pricingTeaser.cta.label} &rarr;</Link>
          </Button>
        </div>
      </section>

      {/* 16. Location Map */}
      <section className="py-24 px-4 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">{homeContent.locationMap.title}</h2>
            <p className="text-lg text-muted-foreground flex items-center gap-3">
              <MicroIconSet icon="traffic" size="sm" className="bg-transparent text-accent p-0" />
              {homeContent.locationMap.address}
            </p>
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <Link href="/contact">Get Directions</Link>
            </Button>
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-sm border border-border bg-muted flex items-center justify-center">
            <Image src={Images.officeFront.src} alt={Images.officeFront.alt} fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* 17. FAQ Accordion */}
      <section className="py-24 px-4 bg-muted/30 border-y border-border">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">{homeContent.faqAccordion.title}</h2>
          </div>
          <Accordion type="single" collapsible className="w-full bg-card rounded-lg border border-border px-6">
            {homeContent.faqAccordion.questions.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="font-heading text-lg font-medium text-left hover:text-accent transition-colors">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 19. PreFooter CTA */}
      <section className="py-32 px-4 container mx-auto text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-primary/5 rounded-3xl -m-4 md:-m-8"></div>
        <div className="relative z-10 max-w-2xl mx-auto space-y-8">
          <h2 className="font-heading text-4xl md:text-5xl font-bold">{homeContent.preFooterCta.title}</h2>
          <p className="text-xl text-muted-foreground">
            {homeContent.preFooterCta.description}
          </p>
          <CTAGlow>
            <Button size="lg" className="h-14 px-10 text-lg bg-accent hover:bg-accent/90 text-accent-foreground font-bold" asChild>
              <Link href={homeContent.preFooterCta.cta.href}>{homeContent.preFooterCta.cta.label}</Link>
            </Button>
          </CTAGlow>
        </div>
      </section>

    </div>
  )
}
