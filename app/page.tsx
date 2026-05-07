import { homeContent } from "@/content/home";
import { images } from "@/lib/images";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  AnimatedText,
  ParallaxImage,
  HoverImageScale,
  MagneticButton,
  RevealCover,
} from "@/components/visuals";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const {
    nav,
    hero,
    urgencyBanner,
    intro,
    bestsellersCakes,
    categorySplit,
    featureMidnight,
    qualityDetail,
    testimonials,
    process,
    customOrders,
    collectionWeddings,
    collectionBirthdays,
    giftingGuide,
    ingredients,
    deliveryZones,
    newsletter,
    socialGrid,
    finalCTA,
    footer,
  } = homeContent;

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* 1. Top Navigation Bar (HomeNav) */}
      <header className="fixed top-0 w-full z-50 transition-colors duration-300 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-heading text-2xl font-bold tracking-tight text-primary">
            {nav.logo}
          </div>
          <nav className="hidden md:flex gap-8">
            {nav.links.map((link) => (
              <Link key={link} href="#" className="text-sm font-medium hover:text-primary transition-colors">
                {link}
              </Link>
            ))}
          </nav>
          <MagneticButton>
            <Button className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90">
              {nav.cta}
            </Button>
          </MagneticButton>
        </div>
      </header>

      {/* 2. Hero Section (HomeHero) */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <ParallaxImage
            src={images.hero.bestsellerCake}
            alt="The Midnight Bakery Hero"
            className="w-full h-full"
            imageClassName="brightness-50" // Darken image slightly for text contrast
            priority
            offset={100}
          />
        </div>
        <div className="container relative z-10 px-6 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <RevealCover duration={1.2} coverColor="bg-primary">
              <AnimatedText
                as="h1"
                text={hero.headline}
                className="text-6xl md:text-8xl font-heading text-white leading-tight mb-6"
                staggerDelay={0.08}
              />
            </RevealCover>
            <FadeIn delay={0.6} direction="up">
              <p className="text-xl md:text-2xl text-white/90 mb-10 font-sans font-light max-w-2xl leading-relaxed">
                {hero.subheadline}
              </p>
            </FadeIn>
            <StaggerContainer delayChildren={0.8} staggerChildren={0.2} className="flex flex-wrap gap-4">
              <StaggerItem direction="up">
                <MagneticButton intensity={0.3}>
                  <Button size="lg" className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-lg">
                    {hero.ctaPrimary}
                  </Button>
                </MagneticButton>
              </StaggerItem>
              <StaggerItem direction="up">
                <Button size="lg" variant="outline" className="rounded-none border-white text-white hover:bg-white hover:text-black h-14 px-8 text-lg bg-transparent">
                  {hero.ctaSecondary}
                </Button>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* 3. Urgency & Trust Banner (HomeUrgencyBanner) */}
      <div className="bg-primary text-primary-foreground py-4 overflow-hidden flex whitespace-nowrap">
        <div className="animate-marquee inline-block">
          <span className="text-sm tracking-widest uppercase font-medium mx-4">
            {urgencyBanner.text}
          </span>
          <span className="text-sm tracking-widest uppercase font-medium mx-4">
            {urgencyBanner.text}
          </span>
          <span className="text-sm tracking-widest uppercase font-medium mx-4">
            {urgencyBanner.text}
          </span>
        </div>
      </div>

      {/* 4. Introduction (HomeIntro) */}
      <section className="py-32 md:py-48 bg-background">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <FadeIn direction="up">
            <h2 className="font-heading text-primary text-lg tracking-widest uppercase mb-8">
              {intro.heading}
            </h2>
          </FadeIn>
          <FadeIn delay={0.2} direction="up">
            <p className="font-heading text-3xl md:text-5xl leading-tight text-foreground">
              {intro.body}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 5. Bestsellers Showcase (HomeBestsellersCakes) */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 max-w-7xl">
          <FadeIn direction="up">
            <div className="flex justify-between items-end mb-16">
              <h2 className="font-heading text-5xl md:text-7xl">{bestsellersCakes.heading}</h2>
              <Button variant="link" className="hidden md:flex text-primary hover:text-primary/80 group">
                {bestsellersCakes.cta} <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-8 group cursor-pointer">
              <HoverImageScale className="h-[60vh] md:h-[80vh] w-full relative mb-6">
                <Image src={images.products.vanillaBean} alt={bestsellersCakes.featured.name} fill className="object-cover" />
              </HoverImageScale>
              <FadeIn direction="up">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-heading text-3xl mb-2">{bestsellersCakes.featured.name}</h3>
                    <p className="text-muted-foreground text-lg max-w-md">{bestsellersCakes.featured.description}</p>
                  </div>
                  <span className="font-sans text-xl font-medium">{bestsellersCakes.featured.price}</span>
                </div>
              </FadeIn>
            </div>

            <div className="md:col-span-4 flex flex-col gap-12 justify-end">
              {bestsellersCakes.items.map((item, i) => (
                <FadeIn key={item.name} delay={i * 0.2} direction="up" className="group cursor-pointer">
                  <HoverImageScale className="h-64 w-full relative mb-6">
                    <Image src={i === 0 ? images.products.espressoTiramisu : images.products.macarons} alt={item.name} fill className="object-cover" />
                  </HoverImageScale>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-heading text-xl mb-2">{item.name}</h3>
                      <p className="text-muted-foreground text-sm max-w-[250px]">{item.description}</p>
                    </div>
                    <span className="font-sans text-lg font-medium">{item.price}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Category Split (HomeCategorySplit) */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[70vh]">
        <div className="relative group overflow-hidden cursor-pointer h-[50vh] md:h-auto">
          <Image src={images.categories.flowers} alt={categorySplit.flowers.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <FadeIn>
              <h2 className="font-heading text-4xl md:text-6xl text-white mb-4">{categorySplit.flowers.title}</h2>
              <p className="text-white/90 text-lg mb-8">{categorySplit.flowers.subtitle}</p>
              <Button variant="outline" className="rounded-none border-white text-white hover:bg-white hover:text-black bg-transparent">
                {categorySplit.flowers.cta}
              </Button>
            </FadeIn>
          </div>
        </div>
        <div className="relative group overflow-hidden cursor-pointer h-[50vh] md:h-auto">
          <Image src={images.categories.gifts} alt={categorySplit.gifts.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <FadeIn delay={0.2}>
              <h2 className="font-heading text-4xl md:text-6xl text-white mb-4">{categorySplit.gifts.title}</h2>
              <p className="text-white/90 text-lg mb-8">{categorySplit.gifts.subtitle}</p>
              <Button variant="outline" className="rounded-none border-white text-white hover:bg-white hover:text-black bg-transparent">
                {categorySplit.gifts.cta}
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 7. The Midnight Magic (HomeFeatureMidnight) */}
      <section className="py-24 md:py-48 bg-zinc-950 text-white overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <RevealCover coverColor="bg-primary">
                <h2 className="font-heading text-6xl md:text-8xl mb-8 leading-none">{featureMidnight.heading}</h2>
              </RevealCover>
              <FadeIn delay={0.4} direction="up">
                <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-10 max-w-lg">
                  {featureMidnight.body}
                </p>
                <MagneticButton>
                  <Button className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-lg">
                    {featureMidnight.cta}
                  </Button>
                </MagneticButton>
              </FadeIn>
            </div>
            <FadeIn direction="left" distance={100} duration={1}>
              <div className="relative h-[60vh] md:h-[80vh] w-full">
                <Image src={images.features.midnightKitchen} alt="Midnight Kitchen" fill className="object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 to-transparent" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 8. Artisanal Quality Detail (HomeQualityDetail) */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative h-[60vh]">
               <ParallaxImage
                  src={images.features.ingredients}
                  alt="Quality Ingredients"
                  className="w-full h-full"
                  offset={50}
               />
            </div>
            <div className="order-1 md:order-2">
              <FadeIn direction="up">
                <h2 className="font-heading text-4xl md:text-6xl mb-8">{qualityDetail.heading}</h2>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                  {qualityDetail.body}
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Customer Stories (HomeTestimonials) */}
      <section className="py-24 bg-card border-y border-border/50">
        <div className="container mx-auto px-6">
          <div className="flex overflow-x-auto gap-8 pb-8 snap-x">
            {testimonials.items.map((testimonial, i) => (
              <div key={i} className="min-w-[300px] md:min-w-[400px] snap-center">
                <FadeIn delay={i * 0.2}>
                  <p className="font-heading text-2xl md:text-3xl italic mb-6">"{testimonial.quote}"</p>
                  <p className="text-muted-foreground">— {testimonial.author}</p>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. The Process (HomeProcess) */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <FadeIn direction="up">
            <h2 className="font-heading text-4xl md:text-5xl mb-16">{process.heading}</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {process.steps.map((step, i) => (
              <StaggerItem key={step.title} direction="up" className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border border-primary/20 flex items-center justify-center mb-6 font-heading text-2xl text-primary">
                  {i + 1}
                </div>
                <h3 className="font-heading text-2xl mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 11. Custom Orders (HomeCustomOrders) */}
      <section className="relative py-32 md:py-48 flex items-center justify-center overflow-hidden">
        <Image src={images.about.craftsmanship} alt="Custom Orders" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <FadeIn>
            <h2 className="font-heading text-5xl md:text-7xl mb-6">{customOrders.heading}</h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-10 font-light">{customOrders.body}</p>
            <Button size="lg" className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-lg">
              {customOrders.cta}
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* 12. Featured Collection: Weddings (HomeCollectionWeddings) */}
      <section className="py-24 md:py-32 bg-muted">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <FadeIn direction="up">
                <h2 className="font-heading text-5xl md:text-6xl mb-6 text-foreground">{collectionWeddings.heading}</h2>
                <p className="text-lg text-muted-foreground mb-10 max-w-md">{collectionWeddings.subheading}</p>
                <Button variant="outline" className="rounded-none border-foreground text-foreground hover:bg-foreground hover:text-background h-14 px-8 text-lg">
                  {collectionWeddings.cta}
                </Button>
              </FadeIn>
            </div>
            <div className="order-1 md:order-2 h-[50vh] md:h-[70vh] relative">
              <Image src={images.hero.weddingCake} alt="Wedding Collection" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 13. Featured Collection: Birthdays (HomeCollectionBirthdays) */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <FadeIn>
            <h2 className="font-heading text-5xl md:text-6xl mb-6">{collectionBirthdays.heading}</h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">{collectionBirthdays.subheading}</p>
            <Button variant="outline" className="rounded-none border-foreground text-foreground hover:bg-foreground hover:text-background h-14 px-8 text-lg">
              {collectionBirthdays.cta}
            </Button>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            <Image src={images.products.vanillaBean} alt="Birthday" width={400} height={400} className="object-cover w-full h-64 md:h-80" />
            <Image src={images.products.pistachioRose} alt="Birthday" width={400} height={400} className="object-cover w-full h-64 md:h-80" />
            <Image src={images.products.macarons} alt="Birthday" width={400} height={400} className="object-cover w-full h-64 md:h-80" />
            <Image src={images.products.espressoTiramisu} alt="Birthday" width={400} height={400} className="object-cover w-full h-64 md:h-80" />
          </div>
        </div>
      </section>

      {/* 14. Gifting Guide (HomeGiftingGuide) */}
      <section className="py-24 md:py-32 bg-card">
        <div className="container mx-auto px-6 max-w-7xl">
          <FadeIn direction="up">
            <h2 className="font-heading text-4xl md:text-6xl mb-16 text-center">{giftingGuide.heading}</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {giftingGuide.guides.map((guide, i) => (
              <FadeIn key={guide.title} delay={i * 0.2} direction="up" className="border-t border-border pt-8">
                <h3 className="font-heading text-3xl mb-4">{guide.title}</h3>
                <p className="text-muted-foreground">{guide.description}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 15. Ingredients Philosophy (HomeIngredients) */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <FadeIn>
            <h2 className="font-heading text-4xl md:text-5xl mb-8">{ingredients.heading}</h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">{ingredients.body}</p>
          </FadeIn>
        </div>
      </section>

      {/* 16. Delivery Zones (HomeDeliveryZones) */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <FadeIn>
            <h2 className="font-heading text-3xl mb-4">{deliveryZones.heading}</h2>
            <p className="text-muted-foreground mb-8">{deliveryZones.body}</p>
            <Button variant="link" className="text-primary hover:text-primary/80">
              {deliveryZones.cta} <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="ml-2 w-4 h-4" />
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* 17. Newsletter (HomeNewsletter) */}
      <section className="py-24 bg-card border-y border-border/50">
        <div className="container mx-auto px-6 max-w-xl text-center">
          <FadeIn>
            <h2 className="font-heading text-4xl mb-4">{newsletter.heading}</h2>
            <p className="text-muted-foreground mb-8">{newsletter.body}</p>
            <form className="flex w-full border-b border-foreground pb-2">
              <input
                type="email"
                placeholder={newsletter.placeholder}
                className="w-full bg-transparent outline-none placeholder:text-muted-foreground"
                required
              />
              <button type="submit" className="font-medium uppercase tracking-widest text-sm hover:text-primary transition-colors">
                {newsletter.cta}
              </button>
            </form>
          </FadeIn>
        </div>
      </section>

      {/* 18. Social Grid (HomeSocialGrid) */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl text-center mb-12">
          <FadeIn>
            <h2 className="font-heading text-3xl mb-2">{socialGrid.heading}</h2>
            <p className="text-muted-foreground">{socialGrid.handle}</p>
          </FadeIn>
        </div>
        <div className="flex w-full overflow-x-auto snap-x">
           <Image src={images.blog.trends} alt="Social" width={300} height={300} className="object-cover w-64 h-64 md:w-80 md:h-80 snap-center shrink-0" />
           <Image src={images.about.founders} alt="Social" width={300} height={300} className="object-cover w-64 h-64 md:w-80 md:h-80 snap-center shrink-0" />
           <Image src={images.categories.gifts} alt="Social" width={300} height={300} className="object-cover w-64 h-64 md:w-80 md:h-80 snap-center shrink-0" />
           <Image src={images.features.delivery} alt="Social" width={300} height={300} className="object-cover w-64 h-64 md:w-80 md:h-80 snap-center shrink-0" />
           <Image src={images.blog.weddings} alt="Social" width={300} height={300} className="object-cover w-64 h-64 md:w-80 md:h-80 snap-center shrink-0" />
        </div>
      </section>

      {/* 19. Final CTA (HomeFinalCTA) */}
      <section className="py-32 md:py-48 bg-primary text-primary-foreground text-center relative overflow-hidden">
        {/* Decorative background circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-foreground/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <FadeIn direction="up">
            <h2 className="font-heading text-6xl md:text-8xl mb-12 max-w-4xl mx-auto leading-tight">
              {finalCTA.heading}
            </h2>
            <MagneticButton intensity={0.4}>
              <Button size="lg" className="rounded-none bg-background text-foreground hover:bg-background/90 h-16 px-12 text-xl font-medium">
                {finalCTA.cta}
              </Button>
            </MagneticButton>
          </FadeIn>
        </div>
      </section>

      {/* 20. Footer (HomeFooter) */}
      <footer className="bg-zinc-950 text-zinc-400 py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-4">
              <h3 className="font-heading text-3xl text-white mb-4">{footer.brand}</h3>
              <p className="text-lg">{footer.tagline}</p>
            </div>
            <div className="md:col-span-2 md:col-start-7">
              <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Shop</h4>
              <ul className="space-y-4">
                {footer.links.shop.map(link => <li key={link}><Link href="#" className="hover:text-white transition-colors">{link}</Link></li>)}
              </ul>
            </div>
            <div className="md:col-span-2">
              <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">About</h4>
              <ul className="space-y-4">
                {footer.links.about.map(link => <li key={link}><Link href="#" className="hover:text-white transition-colors">{link}</Link></li>)}
              </ul>
            </div>
            <div className="md:col-span-2">
              <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Support</h4>
              <ul className="space-y-4">
                {footer.links.support.map(link => <li key={link}><Link href="#" className="hover:text-white transition-colors">{link}</Link></li>)}
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">{footer.copyright}</p>
            <div className="flex gap-6 text-sm">
              {footer.links.legal.map(link => <Link key={link} href="#" className="hover:text-white transition-colors">{link}</Link>)}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
