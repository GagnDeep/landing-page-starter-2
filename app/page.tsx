import Image from "next/image";
import Link from "next/link";
import { homeContent } from "@/content/home";
import { IMAGES } from "@/lib/images";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";

// Visuals
import {
  AnimatedGradientMesh,
  LogoMarquee,
  AnimatedHeroIllustration,
  DotMatrixGrid,
  FloatingBlobs
} from "@/components/visuals";

// Icons
import { Star, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  const {
    hero, trustBar, ethos, services, galleryIntro, liveCooking,
    menuHighlights, howItWorks, testimonials, caseStudy, chefs,
    quality, pricingTeaser, venues, faqTeaser, blogTeaser,
    newsletter, preFooterCta
  } = homeContent;

  return (
    <div className="flex flex-col w-full overflow-hidden">

      {/* 2. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-16 overflow-hidden">
        <AnimatedGradientMesh className="opacity-40" />
        <div className="container px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight text-foreground drop-shadow-sm">
              {hero.headline}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0 leading-relaxed">
              {hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
              <Button size="lg" className="w-full sm:w-auto shadow-glow rounded-full px-8 text-base h-14">
                {hero.primaryCta}
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-8 text-base h-14 border-primary text-primary hover:bg-primary/5">
                {hero.secondaryCta}
              </Button>
            </div>
          </div>
          <div className="flex-1 w-full max-w-lg relative">
            <AnimatedHeroIllustration />
          </div>
        </div>
      </section>

      {/* 3. Trust Bar */}
      <section className="bg-muted/50 border-y border-border py-8">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="flex text-primary">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
            </div>
            <span className="text-sm font-medium ml-2">{trustBar.ratingText}</span>
          </div>
          <span className="text-sm font-medium text-muted-foreground hidden md:block">|</span>
          <span className="text-sm font-medium text-muted-foreground">{trustBar.experienceText}</span>
          <div className="w-full md:w-auto max-w-sm overflow-hidden flex-shrink-0">
             <LogoMarquee logos={trustBar.partnerLogosAlt} speed={40} className="py-2" />
          </div>
        </div>
      </section>

      {/* 4. Brand Ethos */}
      <section className="py-24 relative">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 relative w-full aspect-square max-w-md mx-auto md:mx-0 rounded-arch overflow-hidden border border-border/50 shadow-xl">
            <Image
              src={IMAGES.home.ethos.url}
              alt={IMAGES.home.ethos.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-heading font-semibold text-primary">{ethos.heading}</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              {ethos.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Signature Services */}
      <section className="py-24 bg-card relative overflow-hidden">
        <DotMatrixGrid className="absolute inset-0 opacity-30 pointer-events-none" rows={12} cols={20} />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-semibold mb-4">{services.heading}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.items.map((item, i) => (
              <Card key={i} className="group hover:shadow-glow transition-all duration-300 border-border bg-background">
                <CardHeader>
                  <CardTitle className="font-heading text-xl text-primary">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Royal Spread Showcase */}
      <section className="py-24">
        <div className="container px-4 md:px-6 text-center mb-12">
          <h2 className="text-4xl font-heading font-semibold mb-4">{galleryIntro.heading}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{galleryIntro.subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 w-full max-w-7xl mx-auto">
          {IMAGES.home.gallery.map((img, i) => (
            <div key={i} className="relative aspect-[4/5] rounded-xl overflow-hidden group">
              <Image
                src={img.url}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-foreground font-medium">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Live Cooking Spotlight */}
      <section className="py-32 bg-[#1A1A1A] text-white relative overflow-hidden">
        <FloatingBlobs className="absolute inset-0 opacity-20 pointer-events-none" />
        <div className="container px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-[#D4AF37]">{liveCooking.heading}</h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
              {liveCooking.description}
            </p>
          </div>
          <div className="flex-1 relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
            <Image
              src={IMAGES.home.liveStall.url}
              alt={IMAGES.home.liveStall.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* 8. Menu Highlights */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6">
          <h2 className="text-4xl font-heading font-semibold text-center mb-16">{menuHighlights.heading}</h2>
          <Tabs defaultValue={menuHighlights.categories[0].name} className="w-full max-w-4xl mx-auto">
            <TabsList className="w-full flex flex-wrap justify-center bg-transparent border-b border-border rounded-none h-auto pb-4 gap-8">
              {menuHighlights.categories.map((cat) => (
                <TabsTrigger
                  key={cat.name}
                  value={cat.name}
                  className="font-heading text-lg data-[state=active]:text-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 border-primary rounded-none px-0"
                >
                  {cat.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {menuHighlights.categories.map((cat) => (
              <TabsContent key={cat.name} value={cat.name} className="pt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  {cat.items.map((item, i) => (
                    <div key={i} className="group cursor-default">
                      <div className="flex justify-between items-baseline mb-2 border-b border-border/40 pb-2 group-hover:border-primary/40 transition-colors">
                        <h4 className="font-heading text-xl font-medium text-foreground">{item.name}</h4>
                      </div>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* 9. How It Works */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="container px-4 md:px-6">
          <h2 className="text-4xl font-heading font-semibold text-center mb-16">{howItWorks.heading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-border -z-10" />
            {howItWorks.steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-4">
                <div className="w-24 h-24 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-lg">
                  <span className="font-heading text-3xl font-bold text-primary">{i + 1}</span>
                </div>
                <h3 className="font-heading text-xl font-medium">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Testimonials */}
      <section className="py-24">
        <div className="container px-4 md:px-6 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-heading font-semibold text-primary mb-16">{testimonials.heading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {testimonials.reviews.map((review, i) => (
              <Card key={i} className="bg-card border-none shadow-md">
                <CardContent className="pt-8">
                  <div className="flex text-primary mb-4">
                    {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                  </div>
                  <p className="text-lg italic text-foreground mb-6">&quot;{review.quote}&quot;</p>
                  <div>
                    <p className="font-semibold">{review.author}</p>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Case Study */}
      <section className="py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh]">
          <div className="relative w-full h-[400px] lg:h-auto">
             <Image
                src={IMAGES.home.caseStudy.url}
                alt={IMAGES.home.caseStudy.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
          </div>
          <div className="bg-primary text-primary-foreground p-12 lg:p-24 flex flex-col justify-center space-y-8">
            <h2 className="text-sm tracking-widest uppercase font-semibold text-primary-foreground/70">{caseStudy.heading}</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold">{caseStudy.eventTitle}</h3>
            <p className="text-lg text-primary-foreground/90 leading-relaxed max-w-lg">
              {caseStudy.story}
            </p>
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-primary-foreground/20">
              {caseStudy.stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-heading font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-primary-foreground/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 12. Chefs */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6">
          <h2 className="text-4xl font-heading font-semibold text-center mb-16">{chefs.heading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {chefs.profiles.map((profile, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-4">
                <div className="w-48 h-48 rounded-full overflow-hidden relative border-4 border-muted">
                  <Image
                    src={IMAGES.about.founder.url}
                    alt={profile.name}
                    fill
                    className="object-cover"
                    sizes="192px"
                  />
                </div>
                <h3 className="text-2xl font-heading font-medium">{profile.name}</h3>
                <p className="text-primary font-medium">{profile.role}</p>
                <p className="text-muted-foreground max-w-sm">{profile.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Quality */}
      <section className="py-24 bg-muted/50 border-y border-border">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-heading font-semibold text-center mb-12">{quality.heading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quality.features.map((feature, i) => (
              <div key={i} className="bg-background p-8 rounded-2xl shadow-sm border border-border text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. Pricing Teaser */}
      <section className="py-24">
        <div className="container px-4 md:px-6 text-center max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl font-heading font-semibold">{pricingTeaser.heading}</h2>
          <p className="text-xl text-muted-foreground">{pricingTeaser.description}</p>
          <div className="flex flex-wrap justify-center gap-4 py-8">
            {pricingTeaser.tiers.map((tier, i) => (
              <span key={i} className="px-6 py-3 rounded-full bg-secondary/10 text-primary font-medium text-lg border border-primary/20">
                {tier}
              </span>
            ))}
          </div>
          <Button variant="outline" size="lg" className="rounded-full px-8 border-primary text-primary hover:bg-primary/5">
            {pricingTeaser.cta} <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* 15. Venues */}
      <section className="py-16 bg-card border-y border-border overflow-hidden">
        <div className="container px-4 md:px-6 text-center mb-8">
          <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground">{venues.heading}</p>
        </div>
        <LogoMarquee logos={venues.logosAlt} speed={50} className="py-4" />
      </section>

      {/* 16. FAQ */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-semibold text-center mb-12">{faqTeaser.heading}</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqTeaser.questions.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-medium text-lg">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="text-center mt-8">
             <Link href="/faq" className="text-primary font-medium hover:underline flex items-center justify-center gap-1">
                View all FAQs <ArrowRight className="w-4 h-4" />
             </Link>
          </div>
        </div>
      </section>

      {/* 17. Blog Teaser */}
      <section className="py-24 bg-muted/30 border-t border-border">
        <div className="container px-4 md:px-6">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-heading font-semibold">{blogTeaser.heading}</h2>
            <Link href="/blog" className="hidden md:flex text-primary font-medium hover:underline items-center gap-1">
              Read Journal <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogTeaser.posts.map((post, i) => (
              <Link key={i} href="/blog" className="group block">
                <Card className="bg-background border-none shadow-sm transition-all duration-300 group-hover:shadow-md h-full">
                  <CardContent className="p-8 space-y-4">
                    <p className="text-sm text-primary font-medium">{post.date}</p>
                    <h3 className="text-2xl font-heading font-medium group-hover:text-primary transition-colors">{post.title}</h3>
                    <p className="text-muted-foreground">{post.excerpt}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
             <Link href="/blog" className="text-primary font-medium hover:underline inline-flex items-center gap-1">
              Read Journal <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 18. Newsletter */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 text-center max-w-2xl mx-auto space-y-8">
          <h2 className="text-4xl font-heading font-semibold">{newsletter.heading}</h2>
          <p className="text-lg text-primary-foreground/80">{newsletter.description}</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto pt-4" action="/">
            <Input
              type="email"
              placeholder={newsletter.placeholder}
              className="bg-primary-foreground text-foreground border-none rounded-full h-12 px-6 placeholder:text-muted-foreground"
              required
            />
            <Button type="submit" variant="secondary" className="rounded-full h-12 px-8 font-semibold shadow-glow shrink-0">
              {newsletter.button}
            </Button>
          </form>
        </div>
      </section>

      {/* 19. Pre-Footer CTA */}
      <section className="py-32 bg-[#1A1A1A] text-white relative overflow-hidden flex items-center justify-center text-center">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)]" />
        <div className="container px-4 md:px-6 relative z-10 space-y-10">
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-[#D4AF37] max-w-3xl mx-auto leading-tight">
            {preFooterCta.heading}
          </h2>
          <Button size="lg" className="rounded-full shadow-glow text-lg h-16 px-12 bg-[#D4AF37] text-black hover:bg-[#b5952f]">
            {preFooterCta.button}
          </Button>
        </div>
      </section>

    </div>
  );
}
