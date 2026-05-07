import Image from "next/image";
import Link from "next/link";
import { homeContent } from "@/content/home";
import { images } from "@/lib/images";
import { Button } from "@/components/ui/button";
import { GlobalHeader } from "@/components/layout/GlobalHeader";
import { GlobalFooter } from "@/components/layout/GlobalFooter";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  ParallaxImage,
  RevealText,
  HoverScaleCard,
  MagneticButton,
} from "@/components/visuals";
import { ChefHat, Globe, Sparkles } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";

export default function HomePage() {
  const c = homeContent;
  const dishImages = [images.signatures.murgMakhani, images.signatures.risotto, images.signatures.paneer, images.signatures.scallops];

  return (
    <>
      <GlobalHeader />

      <main className="min-h-screen">
        {/* 2. Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <ParallaxImage
              src={images.hero.home}
              alt="Luxury table setting"
              priority
              imageClassName="brightness-50"
            />
          </div>
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
            <FadeIn delay={0.2} direction="down">
              <p className="text-sm tracking-[0.3em] text-white/80 uppercase mb-8 font-medium">
                {c.hero.subtitle}
              </p>
            </FadeIn>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-white font-medium leading-tight mb-10 text-balance">
              <RevealText text={c.hero.title} delay={0.4} />
            </h1>
            <FadeIn delay={0.8} direction="up" className="flex flex-col sm:flex-row items-center gap-6">
              <MagneticButton
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-medium tracking-wide transition-colors"
              >
                {c.hero.primaryCta}
              </MagneticButton>
              <Link
                href="/process"
                className="text-white hover:text-primary transition-colors uppercase tracking-widest text-sm underline-offset-8 hover:underline"
              >
                {c.hero.secondaryCta}
              </Link>
            </FadeIn>
          </div>
        </section>

        {/* 3. Introduction / Philosophy Statement */}
        <section className="py-32 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
              <div className="lg:col-span-5">
                <FadeIn direction="right">
                  <h2 className="font-heading text-4xl lg:text-5xl leading-snug font-medium text-foreground text-balance">
                    "{c.introduction.quote}"
                  </h2>
                </FadeIn>
              </div>
              <div className="lg:col-span-7 lg:col-start-7 flex flex-col items-start">
                <FadeIn delay={0.2} direction="left">
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {c.introduction.body}
                  </p>
                  <p className="font-heading text-2xl italic text-foreground">
                    — {c.introduction.signature}
                  </p>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* 4. The Sangam Experience (Features Grid) */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-6">
            <FadeIn direction="up" className="text-center mb-16">
              <span className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-4 block">
                {c.features.accentText}
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-medium">
                {c.features.title}
              </h2>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {c.features.items.map((item, i) => (
                <StaggerItem key={i}>
                  <div className="bg-background border border-border p-10 h-full flex flex-col items-start hover:border-primary/50 transition-colors duration-500">
                    <div className="mb-6 p-4 rounded-full bg-secondary text-primary">
                      {i === 0 && <ChefHat className="w-8 h-8" strokeWidth={1.5} />}
                      {i === 1 && <Globe className="w-8 h-8" strokeWidth={1.5} />}
                      {i === 2 && <Sparkles className="w-8 h-8" strokeWidth={1.5} />}
                    </div>
                    <h3 className="font-heading text-2xl mb-4 font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* 5. Featured Cuisines (Split View) */}
        <section className="bg-background">
          {/* Block A */}
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
            <div className="relative h-[50vh] lg:h-auto overflow-hidden">
              <ParallaxImage src={images.cuisine.punjabi} alt="Punjabi Heritage" />
            </div>
            <div className="flex items-center justify-center p-12 lg:p-24 bg-background">
              <FadeIn direction="left" className="max-w-xl">
                <h2 className="font-heading text-4xl lg:text-5xl mb-6 font-medium">
                  {c.featuredCuisines.blockA.title}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                  {c.featuredCuisines.blockA.description}
                </p>
                <Button variant="outline" size="lg" className="rounded-none border-foreground hover:bg-foreground hover:text-background transition-all">
                  {c.featuredCuisines.blockA.cta}
                </Button>
              </FadeIn>
            </div>
          </div>
          {/* Block B */}
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
            <div className="flex items-center justify-center p-12 lg:p-24 bg-secondary/50 order-2 lg:order-1">
              <FadeIn direction="right" className="max-w-xl">
                <h2 className="font-heading text-4xl lg:text-5xl mb-6 font-medium">
                  {c.featuredCuisines.blockB.title}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                  {c.featuredCuisines.blockB.description}
                </p>
                <Button variant="outline" size="lg" className="rounded-none border-foreground hover:bg-foreground hover:text-background transition-all">
                  {c.featuredCuisines.blockB.cta}
                </Button>
              </FadeIn>
            </div>
            <div className="relative h-[50vh] lg:h-auto overflow-hidden order-1 lg:order-2">
              <ParallaxImage src={images.cuisine.international} alt="International Flair" />
            </div>
          </div>
        </section>

        {/* 6. Signature Dishes Carousel */}
        <section className="py-24 bg-background overflow-hidden">
          <div className="container mx-auto px-6 mb-12">
            <FadeIn direction="up">
              <h2 className="font-heading text-4xl md:text-5xl font-medium">
                {c.signatureDishes.title}
              </h2>
            </FadeIn>
          </div>
          <div className="px-6 md:pl-16 pb-12 overflow-x-auto hide-scrollbar flex space-x-8 snap-x">
            {c.signatureDishes.items.map((dish, i) => {
              return (
                <div key={i} className="min-w-[80vw] md:min-w-[400px] snap-center flex-shrink-0 group cursor-pointer">
                  <HoverScaleCard>
                    <div className="relative w-full aspect-[4/5] mb-6 overflow-hidden">
                      <Image
                        src={dishImages[i]}
                        alt={dish.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </HoverScaleCard>
                  <h3 className="font-heading text-2xl mb-2 font-medium group-hover:text-primary transition-colors">{dish.name}</h3>
                  <p className="text-muted-foreground">{dish.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 7. Destination Weddings Focus */}
        <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 mix-blend-overlay">
            <Image src={images.gallery[2]} alt="Background texture" fill className="object-cover" />
          </div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <FadeIn direction="up" className="max-w-3xl mx-auto">
              <h2 className="font-heading text-4xl md:text-6xl font-medium mb-8 leading-tight">
                {c.destinationWeddings.title}
              </h2>
              <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-12">
                {c.destinationWeddings.description}
              </p>
              <Button variant="secondary" size="lg" className="rounded-none bg-background text-foreground hover:bg-background/90 text-lg px-8 py-6">
                {c.destinationWeddings.cta}
              </Button>
            </FadeIn>
          </div>
        </section>

        {/* 8. Testimonial */}
        <section className="py-32 bg-background flex items-center justify-center min-h-[60vh]">
          <div className="container mx-auto px-6 text-center max-w-5xl">
            <FadeIn direction="up">
              <p className="font-heading text-3xl md:text-5xl leading-snug font-medium mb-10 text-balance text-foreground/90">
                "{c.testimonial.quote}"
              </p>
              <div className="flex flex-col items-center">
                <span className="font-bold tracking-widest uppercase text-sm mb-2">{c.testimonial.author}</span>
                <span className="text-muted-foreground italic font-heading text-lg">{c.testimonial.location}</span>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 9. Visual Gallery Grid */}
        <section className="pb-32 bg-background">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
            <div className="col-span-2 md:col-span-2 row-span-2 relative h-[50vh] md:h-[80vh] overflow-hidden">
               <Image src={images.gallery[0]} alt="Gallery" fill className="object-cover hover:scale-105 transition-transform duration-1000" />
            </div>
            <div className="col-span-1 row-span-1 relative h-[25vh] md:h-[40vh] overflow-hidden">
               <Image src={images.gallery[1]} alt="Gallery" fill className="object-cover hover:scale-105 transition-transform duration-1000" />
            </div>
            <div className="col-span-1 row-span-2 relative h-[50vh] md:h-[80vh] overflow-hidden">
               <Image src={images.gallery[4]} alt="Gallery" fill className="object-cover hover:scale-105 transition-transform duration-1000" />
            </div>
            <div className="col-span-1 row-span-1 relative h-[25vh] md:h-[40vh] overflow-hidden">
               <Image src={images.gallery[5]} alt="Gallery" fill className="object-cover hover:scale-105 transition-transform duration-1000" />
            </div>
          </div>
        </section>

        {/* 10. The Process (Steps) */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-6">
            <FadeIn direction="up" className="mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-medium text-center">
                {c.process.title}
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {c.process.steps.map((step, i) => (
                <FadeIn key={i} delay={i * 0.15} direction="up" className="relative group">
                  <div className="absolute -top-10 -left-4 text-8xl font-heading font-bold text-foreground/5 transition-colors group-hover:text-primary/10 select-none z-0">
                    {step.number}
                  </div>
                  <div className="relative z-10 pt-8 border-t-2 border-border group-hover:border-primary transition-colors">
                    <h3 className="font-heading text-2xl font-medium mb-4">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* 11. Press & Recognition (Logos) */}
        <section className="py-16 border-y border-border bg-background overflow-hidden flex flex-col items-center">
            <span className="text-xs uppercase tracking-widest text-muted-foreground mb-8">{c.press.title}</span>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {c.press.logos.map((logo, i) => (
                <div key={i} className="font-heading text-2xl font-bold tracking-tight text-foreground/80">{logo}</div>
              ))}
            </div>
        </section>

        {/* 12. Lead Chef / Founder Profile */}
        <section className="py-32 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-4 lg:col-start-2 relative h-[60vh]">
                <HoverScaleCard className="h-full w-full">
                  <Image src={images.team.headChef} alt="Lead Chef" fill className="object-cover" />
                </HoverScaleCard>
              </div>
              <div className="lg:col-span-6 lg:col-start-7">
                <FadeIn direction="right">
                  <p className="text-lg leading-relaxed text-muted-foreground mb-10">
                    {c.founderProfile.biography}
                  </p>
                  <blockquote className="font-heading text-3xl font-medium text-foreground italic border-l-4 border-primary pl-6 py-2">
                    {c.founderProfile.quote}
                  </blockquote>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* 13. Sustainability & Sourcing */}
        <section className="relative min-h-[70vh] flex items-center">
          <div className="absolute inset-0">
            <Image src={images.gallery[6]} alt="Sourcing" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="container mx-auto px-6 relative z-10 flex justify-end">
            <FadeIn direction="left" className="bg-background p-12 md:p-16 max-w-lg shadow-2xl">
              <h2 className="font-heading text-4xl mb-6 font-medium text-foreground">{c.sustainability.title}</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {c.sustainability.description}
              </p>
            </FadeIn>
          </div>
        </section>

        {/* 14. Event Types List */}
        <section className="py-32 bg-background">
          <div className="container mx-auto px-6">
            <div className="flex flex-col gap-0 border-t border-border">
              {c.eventTypes.map((event, i) => (
                <Link href="/features" key={i}>
                  <div className="group border-b border-border py-12 flex flex-col md:flex-row md:items-center justify-between hover:bg-secondary/20 transition-colors cursor-pointer px-4">
                    <h3 className="font-heading text-4xl md:text-5xl font-medium group-hover:text-primary transition-colors">{event.title}</h3>
                    <p className="text-muted-foreground md:max-w-sm text-lg mt-4 md:mt-0">{event.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 15. FAQ Teaser */}
        <section className="py-24 bg-secondary/40">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="flex flex-col items-start justify-center">
                <h2 className="font-heading text-5xl font-medium mb-6">{c.faqTeaser.title}</h2>
                <Button variant="default" size="lg" className="rounded-none px-8">
                  {c.faqTeaser.cta}
                </Button>
              </div>
              <div>
                <Accordion type="single" collapsible className="w-full">
                  {c.faqTeaser.items.map((item, i) => (
                    <AccordionItem key={i} value={`item-${i}`} className="border-border">
                      <AccordionTrigger className="text-left font-medium text-lg hover:text-primary hover:no-underline py-6">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* 16. Recent Journal/Blog Entries */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-border pb-8">
              <FadeIn direction="right">
                <h2 className="font-heading text-4xl md:text-5xl font-medium">{c.recentJournal.title}</h2>
              </FadeIn>
              <FadeIn direction="left" delay={0.2}>
                <Link href="/blog" className="text-sm font-bold uppercase tracking-widest text-primary hover:text-foreground transition-colors mt-6 md:mt-0 inline-block">
                  {c.recentJournal.viewAllCta}
                </Link>
              </FadeIn>
            </div>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {c.recentJournal.articles.map((article, i) => (
                <StaggerItem key={i}>
                  <Link href={article.href} className="group block">
                    <HoverScaleCard>
                      <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden bg-secondary">
                        <Image
                          src={images.gallery[i + 3]} // Using some fallback images from gallery
                          alt={article.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                        />
                      </div>
                    </HoverScaleCard>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">{article.date}</p>
                    <h3 className="font-heading text-2xl font-medium mb-4 group-hover:text-primary transition-colors">{article.title}</h3>
                    <span className="text-sm font-medium text-foreground underline-offset-4 group-hover:underline">
                      {article.readMoreCta}
                    </span>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* 17. Newsletter Sign Up */}
        <section className="py-32 bg-secondary/20 text-center">
          <div className="container mx-auto px-6 max-w-2xl">
            <FadeIn direction="up">
              <h2 className="font-heading text-4xl font-medium mb-4">{c.newsletter.title}</h2>
              <p className="text-muted-foreground mb-10 text-lg">{c.newsletter.description}</p>
              <form className="flex w-full items-center" action="/">
                <Input
                  type="email"
                  placeholder={c.newsletter.placeholder}
                  className="rounded-none h-14 bg-transparent border-foreground/20 focus-visible:ring-0 focus-visible:border-primary text-base"
                />
                <Button type="button" className="rounded-none h-14 px-8 text-base bg-foreground hover:bg-foreground/90 text-background">
                  {c.newsletter.buttonText}
                </Button>
              </form>
            </FadeIn>
          </div>
        </section>

        {/* 18. Instagram Feed / Social */}
        <section className="bg-background overflow-hidden relative">
          <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
             <div className="bg-background/90 backdrop-blur-md px-8 py-4 border border-border shadow-2xl pointer-events-auto hover:scale-105 transition-transform duration-500 cursor-pointer">
                <p className="font-heading text-2xl font-medium tracking-wide">
                  {c.instagramFeed.handle}
                </p>
             </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 w-full">
            {[images.gallery[0], images.gallery[2], images.cuisine.desserts, images.gallery[5]].map((src, i) => (
               <div key={i} className="relative aspect-square w-full opacity-60 hover:opacity-100 transition-opacity duration-500">
                  <Image src={src} alt="Instagram feed item" fill className="object-cover" />
               </div>
            ))}
          </div>
        </section>

        {/* 19. Final CTA */}
        <section className="py-40 bg-primary flex flex-col items-center justify-center text-center text-primary-foreground">
          <div className="container mx-auto px-6">
            <FadeIn direction="up">
              <h2 className="font-heading text-5xl md:text-7xl font-medium mb-6 max-w-4xl mx-auto leading-tight">
                {c.finalCta.title}
              </h2>
              <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-2xl mx-auto font-heading italic">
                {c.finalCta.subtitle}
              </p>
              <MagneticButton className="bg-background text-foreground hover:bg-background/90 px-10 py-5 text-xl font-medium tracking-wide">
                {c.finalCta.cta}
              </MagneticButton>
            </FadeIn>
          </div>
        </section>

      </main>

      <GlobalFooter />
    </>
  );
}
