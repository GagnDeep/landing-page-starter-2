import { blogContent } from "@/content/blog";
import { images } from "@/lib/images";
import { FadeIn, RevealCover, StaggerContainer, StaggerItem, HoverImageScale, ParallaxImage, MagneticButton } from "@/components/visuals";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";

export default function BlogPage() {
  const { hero, latest, categories, featuredCat, newsletter } = blogContent;

  return (
    <main className="flex-1 bg-background text-foreground overflow-hidden pt-20">
      {/* 1. Hero */}
      <section className="relative min-h-[70vh] flex items-center bg-zinc-950 text-white">
        <div className="absolute inset-0 z-0 opacity-50">
          <ParallaxImage src={images.blog.trends} alt="Journal Hero" offset={80} className="w-full h-full" priority />
        </div>
        <div className="container relative z-10 px-6 max-w-5xl mx-auto">
          <RevealCover duration={1} coverColor="bg-primary">
            <h1 className="text-6xl md:text-8xl font-heading mb-6 leading-tight">{hero.headline}</h1>
          </RevealCover>
          <FadeIn delay={0.4}>
            <p className="text-xl md:text-3xl text-zinc-300 font-light max-w-2xl leading-relaxed">{hero.subheadline}</p>
          </FadeIn>
        </div>
      </section>

      {/* 3. Category Filter */}
      <section className="sticky top-16 z-40 bg-background/90 backdrop-blur-md border-b border-border py-4">
        <div className="container mx-auto px-6 overflow-x-auto">
          <ul className="flex items-center gap-8 min-w-max">
            {categories.links.map((link, i) => (
              <li key={i}>
                <a href="#" className={`text-sm tracking-widest uppercase font-medium hover:text-primary transition-colors ${i === 0 ? 'text-primary' : 'text-muted-foreground'}`}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 2. Latest Articles */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <FadeIn direction="up">
            <h2 className="font-heading text-4xl mb-12">{latest.heading}</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[1, 2, 3].map((_, i) => (
              <StaggerItem key={i} direction="up" className="group cursor-pointer">
                <HoverImageScale className="h-[40vh] w-full mb-6 relative">
                  <Image src={i === 0 ? images.blog.trends : i === 1 ? images.features.ingredients : images.about.craftsmanship} alt="Article" fill className="object-cover" />
                </HoverImageScale>
                <span className="text-primary text-sm font-medium uppercase tracking-widest mb-3 block">Behind the Scenes</span>
                <h3 className="font-heading text-2xl mb-4 group-hover:text-primary transition-colors line-clamp-2">
                  The Art of the Midnight Truffle and Perfecting the Ganache
                </h3>
                <p className="text-muted-foreground line-clamp-3 mb-6">
                  Discover how our pastry chefs achieve the perfect glossy finish on our signature dark chocolate truffle cakes at 3 AM.
                </p>
                <span className="flex items-center text-sm font-medium hover:text-primary transition-colors">
                  {latest.cta} <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 4. Featured Category (Asymmetric) */}
      <section className="py-24 bg-card border-y border-border/50">
        <div className="container mx-auto px-6 max-w-7xl">
          <FadeIn direction="up">
            <div className="flex justify-between items-end mb-12">
              <h2 className="font-heading text-4xl md:text-5xl">{featuredCat.heading}</h2>
              <Button variant="link" className="hidden md:flex text-primary hover:text-primary/80 group">
                {featuredCat.cta} <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Large Featured */}
            <div className="md:col-span-8 group cursor-pointer">
              <HoverImageScale className="h-[50vh] md:h-[70vh] w-full mb-6 relative">
                <Image src={images.blog.weddings} alt="Wedding Article" fill className="object-cover" />
              </HoverImageScale>
              <FadeIn direction="up">
                <span className="text-primary text-sm font-medium uppercase tracking-widest mb-3 block">Trends</span>
                <h3 className="font-heading text-4xl mb-4 group-hover:text-primary transition-colors">
                  Minimalist Wedding Tiers: The 2026 Shift
                </h3>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Couples are moving away from heavy fondant and embracing exposed sponges, delicate florals, and sharp, clean lines.
                </p>
              </FadeIn>
            </div>
            {/* Stacked Small */}
            <div className="md:col-span-4 flex flex-col gap-12 justify-center">
              {[1, 2].map((_, i) => (
                <FadeIn key={i} delay={i * 0.2} direction="up" className="group cursor-pointer">
                  <HoverImageScale className="h-[25vh] w-full mb-4 relative">
                    <Image src={images.hero.weddingCake} alt="Wedding Secondary" fill className="object-cover" />
                  </HoverImageScale>
                  <span className="text-primary text-xs font-medium uppercase tracking-widest mb-2 block">Guide</span>
                  <h3 className="font-heading text-xl mb-2 group-hover:text-primary transition-colors">
                    Tasting Etiquette: What to Expect
                  </h3>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Newsletter Signup */}
      <section className="py-32 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <FadeIn direction="up">
            <h2 className="font-heading text-5xl mb-4">{newsletter.heading}</h2>
            <p className="text-lg text-primary-foreground/90 mb-10">{newsletter.body}</p>
            <form className="flex w-full border-b border-primary-foreground pb-2 group">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent outline-none placeholder:text-primary-foreground/60 text-lg"
                required
              />
              <button type="submit" className="font-medium uppercase tracking-widest text-sm transition-opacity opacity-80 hover:opacity-100">
                {newsletter.cta}
              </button>
            </form>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
