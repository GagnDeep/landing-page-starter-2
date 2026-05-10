import { homeContent } from "@/content/home"
import { IMAGES } from "@/lib/images"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedHeroIllustration } from "@/components/visuals/animated-hero-illustration"
import { LogoMarquee } from "@/components/visuals/logo-marquee"
import { AnimatedGradientMesh } from "@/components/visuals/animated-gradient-mesh"
import { DotMatrixGrid } from "@/components/visuals/dot-matrix-grid"
import { FloatingBlobs } from "@/components/visuals/floating-blobs"
import { MicroIconSet } from "@/components/visuals/micro-icon-set"
import { HowItWorksDiagram } from "@/components/visuals/how-it-works-diagram"
import { CodeWindowTyping } from "@/components/visuals/code-window-typing"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  const {
    heroCinematic,
    brandEthosIntro,
    featuredDestinationsGrid,
    servicePillarsOverview,
    trustBarPublications,
    founderNoteSplit,
    portfolioHighlightCarousel,
    theProcessSteps,
    testimonialQuoteHero,
    videoMoodReel,
    statsAndScale,
    nriFocusSection,
    curatedVenuesSpotlight,
    aestheticGalleryMasonry,
    faqPreviewAccordion,
    recentJournalEntries,
    instagramFeedGrid,
    ctaGrandFinale,
  } = homeContent

  return (
    <>
      {/* 2: hero-cinematic */}
      <section className="relative min-h-svh flex items-center justify-center overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.heroMain.src}
            alt={IMAGES.heroMain.alt}
            fill
            className="object-cover opacity-60 dark:opacity-30 motion-safe:animate-[zoom_20s_linear_infinite_alternate]"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
        </div>

        <div className="container relative z-10 mx-auto px-6 max-w-5xl flex flex-col items-center text-center pt-32 pb-24">
          <AnimatedHeroIllustration className="absolute -z-10 w-[800px] h-[800px] opacity-20" />
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6 text-foreground drop-shadow-md">
            {heroCinematic.heading}
          </h1>
          <p className="text-lg md:text-xl text-foreground/90 max-w-2xl mb-12 font-sans font-light tracking-wide">
            {heroCinematic.subheading}
          </p>
          <Button asChild size="lg" className="rounded-none px-12 py-6 text-sm tracking-widest uppercase">
            <Link href={heroCinematic.ctaPrimary.href}>
              {heroCinematic.ctaPrimary.label}
            </Link>
          </Button>
        </div>
      </section>

      {/* 3: brand-ethos-intro */}
      <section className="py-32 px-6 bg-background relative overflow-hidden">
        <FloatingBlobs className="opacity-40" />
        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <p className="font-sans text-xl md:text-3xl leading-relaxed text-muted-foreground font-light">
            <span className="font-heading text-6xl md:text-8xl float-left mr-4 mt-2 text-primary leading-none">
              {brandEthosIntro.dropCapLetter}
            </span>
            {brandEthosIntro.paragraph}
          </p>
        </div>
      </section>

      {/* 6: trust-bar-publications */}
      <LogoMarquee logos={trustBarPublications.logos} speed="slow" />

      {/* 4: featured-destinations-grid */}
      <section className="py-24 px-6 bg-muted/20">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
              {featuredDestinationsGrid.eyebrow}
            </h2>
            <div className="h-[1px] flex-1 bg-border/50 ml-8" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4 group relative h-[500px] overflow-hidden">
              <Image src={IMAGES.destGoa.src} alt={IMAGES.destGoa.alt} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="font-heading text-2xl text-white mb-2">{featuredDestinationsGrid.destinations[0].name}</h3>
                <p className="text-white/80 text-sm tracking-wide">{featuredDestinationsGrid.destinations[0].description}</p>
              </div>
            </div>
            <div className="md:col-span-5 group relative h-[500px] overflow-hidden md:mt-16">
              <Image src={IMAGES.destUdaipur.src} alt={IMAGES.destUdaipur.alt} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 40vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="font-heading text-2xl text-white mb-2">{featuredDestinationsGrid.destinations[1].name}</h3>
                <p className="text-white/80 text-sm tracking-wide">{featuredDestinationsGrid.destinations[1].description}</p>
              </div>
            </div>
            <div className="md:col-span-3 group relative h-[500px] overflow-hidden md:-mt-8">
              <Image src={IMAGES.destLakeComo.src} alt={IMAGES.destLakeComo.alt} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 25vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="font-heading text-2xl text-white mb-2">{featuredDestinationsGrid.destinations[2].name}</h3>
                <p className="text-white/80 text-sm tracking-wide">{featuredDestinationsGrid.destinations[2].description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5: service-pillars-overview */}
      <section className="py-32 px-6 bg-background relative">
        <DotMatrixGrid className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none" rows={15} cols={20} spacing={30} />
        <div className="container mx-auto max-w-7xl relative z-10">
          <MicroIconSet className="mb-12 justify-center lg:justify-start" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {servicePillarsOverview.pillars.map((pillar, index) => (
              <div key={index} className="space-y-4 group">
                <div className="h-[1px] w-12 bg-primary transition-all duration-500 group-hover:w-full" />
                <h3 className="font-heading text-2xl">{pillar.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7: founder-note-split */}
      <section className="bg-card">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
          <div className="relative h-[500px] lg:h-auto">
             <Image src={IMAGES.founderPortrait.src} alt={IMAGES.founderPortrait.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
          <div className="flex flex-col justify-center p-12 md:p-24 lg:p-32 space-y-8 bg-card text-card-foreground">
             <h2 className="font-heading text-4xl md:text-5xl tracking-tight">{founderNoteSplit.heading}</h2>
             <p className="text-lg text-muted-foreground leading-relaxed font-light">{founderNoteSplit.body}</p>
             <div>
               <p className="font-heading text-2xl italic">{founderNoteSplit.signature}</p>
               <p className="text-sm tracking-widest uppercase text-muted-foreground mt-2">{founderNoteSplit.role}</p>
             </div>
          </div>
        </div>
      </section>

      {/* 8: portfolio highlight carousel */}
      <section className="py-24 px-0 bg-background overflow-hidden">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 md:-ml-8">
             {portfolioHighlightCarousel.images.map((img, index) => (
                <CarouselItem key={index} className="pl-4 md:pl-8 basis-4/5 md:basis-1/2 lg:basis-1/3">
                  <div className="relative aspect-[4/5] group overflow-hidden">
                    <Image src={index === 0 ? IMAGES.destGoa.src : index === 1 ? IMAGES.destUdaipur.src : IMAGES.destLakeComo.src} alt={img.caption} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" sizes="(max-width: 768px) 80vw, 33vw" />
                    <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <p className="text-white font-sans tracking-wide text-sm">{img.caption}</p>
                    </div>
                  </div>
                </CarouselItem>
             ))}
          </CarouselContent>
          <div className="container mx-auto max-w-7xl mt-8 flex justify-end gap-4 px-6 relative">
            <CarouselPrevious className="relative inset-auto translate-y-0 h-12 w-12 rounded-none border-border hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="relative inset-auto translate-y-0 h-12 w-12 rounded-none border-border hover:bg-primary hover:text-primary-foreground" />
          </div>
        </Carousel>
      </section>

      {/* 9: the-process-steps */}
      <section className="py-32 px-6 bg-background overflow-hidden">
        <div className="container mx-auto max-w-7xl">
           <div className="mb-24 text-center">
             <h2 className="font-heading text-4xl md:text-5xl mb-6">{theProcessSteps.heading}</h2>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
             <div>
                <HowItWorksDiagram className="w-full h-80" />
             </div>
             <div className="space-y-12">
               {theProcessSteps.steps.map((step, index) => (
                 <div key={index} className="relative pl-12">
                   <span className="absolute left-0 top-0 font-mono text-sm text-primary opacity-50">{step.stepNumber}</span>
                   <h3 className="font-heading text-2xl mb-2">{step.title}</h3>
                   <p className="text-muted-foreground font-light">{step.description}</p>
                 </div>
               ))}
             </div>
           </div>
        </div>
      </section>

      {/* 11: video-mood-reel */}
      <section className="relative h-[70vh] bg-muted/20 flex items-center justify-center overflow-hidden">
        <Image src={IMAGES.moodReelFallback.src} alt={videoMoodReel.altText} fill className="object-cover opacity-80 mix-blend-overlay" />
        <Button variant="outline" size="icon" className="w-24 h-24 rounded-full bg-background/20 backdrop-blur-md border-white/20 text-white hover:bg-background/40 hover:scale-110 transition-all duration-500 z-10">
           {/* Fallback play triangle if hugeicons isn't imported here */}
           <svg className="w-8 h-8 ml-2" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
        </Button>
      </section>

      {/* 10: testimonial-quote-hero */}
      <section className="py-32 px-6 bg-primary text-primary-foreground relative overflow-hidden text-center">
        <AnimatedGradientMesh className="opacity-20" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <p className="font-heading text-3xl md:text-5xl leading-tight md:leading-tight tracking-tight mb-12">
            &ldquo;{testimonialQuoteHero.quote}&rdquo;
          </p>
          <div className="space-y-2">
            <p className="font-medium tracking-widest uppercase text-sm">{testimonialQuoteHero.author}</p>
            <p className="opacity-70 text-sm">{testimonialQuoteHero.location}</p>
          </div>
        </div>
      </section>

      {/* 13: nri-focus-section & 12: stats */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
           <div className="space-y-8">
             <h2 className="font-heading text-4xl md:text-5xl">{nriFocusSection.heading}</h2>
             <p className="text-lg text-muted-foreground leading-relaxed font-light">{nriFocusSection.body}</p>

             <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
                {statsAndScale.stats.map((stat, i) => (
                  <div key={i}>
                    <p className="font-heading text-3xl md:text-4xl text-foreground mb-1">{stat.value}</p>
                    <p className="text-xs tracking-widest uppercase text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
             </div>
           </div>

           <div className="relative">
              <CodeWindowTyping
                lines={[
                  "INITIALIZING GLOBAL ITINERARY...",
                  "COORDINATING ARRIVALS: 150 GUESTS",
                  "SYNCING VENDOR SCHEDULES: IST / CET / EST",
                  "SECURING CUSTOMS CLEARANCE FOR DECOR",
                  "OPTIMIZING TRANSFER ROUTES",
                  "ALL SYSTEMS NOMINAL. READY FOR EXECUTION."
                ]}
              />
           </div>
        </div>
      </section>

      {/* 14: curated-venues-spotlight */}
      <section className="py-24 px-6 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {curatedVenuesSpotlight.venues.map((venue, i) => (
              <Card key={i} className="border-none bg-muted/20 rounded-none overflow-hidden group">
                 <div className="relative h-64 overflow-hidden">
                    <Image src={i === 0 ? IMAGES.destGoa.src : i === 1 ? IMAGES.destUdaipur.src : IMAGES.destLakeComo.src} alt={venue.name} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                 </div>
                 <CardContent className="p-8">
                    <p className="text-xs tracking-widest uppercase text-primary mb-2">{venue.style}</p>
                    <h3 className="font-heading text-2xl mb-1">{venue.name}</h3>
                    <p className="text-muted-foreground text-sm">{venue.location}</p>
                 </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 15: aesthetic-gallery-masonry */}
      <section className="py-24 px-2 md:px-6 bg-card overflow-hidden">
        <div className="container mx-auto max-w-7xl">
           <div className="mb-12 flex items-center justify-between px-4">
             <h2 className="font-heading text-3xl">{aestheticGalleryMasonry.heading}</h2>
             <Button variant="outline" asChild className="rounded-none hidden md:flex">
               <Link href={aestheticGalleryMasonry.ctaHref}>{aestheticGalleryMasonry.ctaLabel}</Link>
             </Button>
           </div>

           <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
             <div className="relative aspect-[3/4] group overflow-hidden">
               <Image src={IMAGES.detailTableSetting.src} alt={IMAGES.detailTableSetting.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 50vw, 33vw" />
             </div>
             <div className="relative aspect-[3/4] group overflow-hidden mt-8 md:mt-16">
               <Image src={IMAGES.detailFlorals.src} alt={IMAGES.detailFlorals.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 50vw, 33vw" />
             </div>
             <div className="relative aspect-[3/4] group overflow-hidden hidden md:block">
               <Image src={IMAGES.detailLighting.src} alt={IMAGES.detailLighting.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="33vw" />
             </div>
           </div>
        </div>
      </section>

      {/* 16: faq-preview-accordion */}
      <section className="py-24 px-6 bg-background border-t border-border/50">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl mb-4">{faqPreviewAccordion.heading}</h2>
            <p className="text-muted-foreground">{faqPreviewAccordion.subheading}</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqPreviewAccordion.faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                <AccordionTrigger className="text-left font-medium text-lg hover:text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-12 text-center">
            <Button variant="link" asChild className="text-primary hover:text-primary/80 tracking-widest uppercase text-xs">
              <Link href={faqPreviewAccordion.ctaHref}>{faqPreviewAccordion.ctaLabel}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 17: recent-journal-entries */}
      <section className="py-24 px-6 bg-muted/20">
        <div className="container mx-auto max-w-7xl">
           <h2 className="font-heading text-3xl mb-12">{recentJournalEntries.heading}</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             {recentJournalEntries.articles.map((article, i) => (
               <Link href={`/blog/${i}`} key={i} className="group block">
                 <div className="relative aspect-[16/9] mb-6 overflow-hidden">
                   <Image src={i === 0 ? IMAGES.journalArticle1.src : IMAGES.journalArticle2.src} alt={article.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
                 </div>
                 <p className="text-xs tracking-widest uppercase text-muted-foreground mb-3">{article.date}</p>
                 <h3 className="font-heading text-2xl group-hover:text-primary transition-colors">{article.title}</h3>
               </Link>
             ))}
           </div>
        </div>
      </section>

      {/* 18: instagram-feed-grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto max-w-7xl text-center mb-8">
           <a href={`https://instagram.com/${instagramFeedGrid.handle.replace('@','')}`} target="_blank" rel="noopener noreferrer" className="text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors">
             {instagramFeedGrid.handle}
           </a>
        </div>
        <div className="flex w-full overflow-hidden h-48 md:h-64">
           {/* Placeholder blocks since we can't embed real IG easily without tokens, using generic images to simulate the grid */}
           {[IMAGES.destGoa, IMAGES.detailTableSetting, IMAGES.destLakeComo, IMAGES.detailFlorals, IMAGES.destUdaipur].map((img, i) => (
              <div key={i} className="relative h-full w-1/3 md:w-1/5 shrink-0 hover:opacity-80 transition-opacity">
                <Image src={img.src} alt="Instagram feed placeholder" fill className="object-cover" sizes="20vw" />
              </div>
           ))}
        </div>
      </section>

      {/* 19: cta-grand-finale */}
      <section className="py-32 px-6 bg-background relative text-center">
         <AnimatedGradientMesh opacity={0.3} className="rotate-180" />
         <div className="container mx-auto max-w-2xl relative z-10">
           <h2 className="font-heading text-5xl md:text-6xl mb-6">{ctaGrandFinale.heading}</h2>
           <p className="text-lg text-muted-foreground mb-12 font-light">{ctaGrandFinale.subheading}</p>
           <Button asChild size="lg" className="rounded-none px-12 py-6 text-sm tracking-widest uppercase">
             <Link href={ctaGrandFinale.cta.href}>
               {ctaGrandFinale.cta.label}
             </Link>
           </Button>
         </div>
      </section>
    </>
  )
}
