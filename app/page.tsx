import { homeContent } from "@/content/home";
import { siteImages } from "@/lib/images";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { AnimatedHeroIllustration } from "@/components/visuals/AnimatedHeroIllustration";

export const metadata = {
  title: homeContent.seo.title,
  description: homeContent.seo.description,
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">

      {/* SECTION 2: Hero Section */}
      <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image / Mesh */}
        <div className="absolute inset-0 z-0">
          <Image
            src={siteImages.heroAtmosphere.src}
            alt={siteImages.heroAtmosphere.alt}
            fill
            className="object-cover opacity-80 dark:opacity-40"
            priority
          />
          <AnimatedGradientMesh intensity="subtle" className="z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-20" />
        </div>

        {/* Content */}
        <div className="container relative z-30 px-6 text-center flex flex-col items-center mt-16">
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 max-w-4xl tracking-tight leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000">
            {homeContent.hero.headline}
          </h1>
          <p className="font-sans text-lg md:text-xl text-foreground/80 max-w-2xl mb-10 font-light animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            {homeContent.hero.subtitle}
          </p>
          <Link
            href="/#collection"
            className="group relative inline-flex items-center justify-center px-8 py-4 font-sans text-sm tracking-widest uppercase overflow-hidden border border-foreground/20 bg-background/50 backdrop-blur-sm text-foreground hover:bg-foreground hover:text-background transition-colors duration-500 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              {homeContent.hero.cta}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </section>

      {/* SECTION 3: Brand Mantra */}
      <section className="py-24 md:py-32 px-6 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl leading-relaxed text-primary/90">
            {homeContent.brandMantra}
          </h2>
        </div>
      </section>

      {/* SECTION 4 & 5: Featured Collection Intro & Look 1 */}
      <section id="collection" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">

          <div className="max-w-2xl mb-20">
            <h3 className="font-heading text-sm tracking-[0.2em] uppercase text-accent mb-4">
              {homeContent.featuredCollectionIntro.heading}
            </h3>
            <p className="text-xl md:text-2xl text-foreground/80 font-light leading-relaxed">
              {homeContent.featuredCollectionIntro.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            {/* Look 1 Image */}
            <div className="lg:col-span-7 relative aspect-[3/4] overflow-hidden rounded-md shadow-editorial-lg group">
              <Image
                src={siteImages.featuredLook1.src}
                alt={siteImages.featuredLook1.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out-silk"
              />
            </div>

            {/* Look 1 Content */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <h4 className="font-heading text-3xl md:text-4xl">{homeContent.featuredLook1.title}</h4>
              <p className="text-foreground/70 font-light leading-relaxed">
                {homeContent.featuredLook1.description}
              </p>
              <Link
                href="/features"
                className="inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase text-primary hover:text-foreground transition-colors mt-4 w-fit border-b border-primary/30 pb-1 hover:border-foreground"
              >
                {homeContent.featuredLook1.cta}
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 6: Featured Look 2 (Reversed Asymmetry) */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            {/* Look 2 Content (Left on Desktop) */}
            <div className="lg:col-span-5 flex flex-col gap-6 order-2 lg:order-1">
              <h4 className="font-heading text-3xl md:text-4xl">{homeContent.featuredLook2.title}</h4>
              <p className="text-foreground/70 font-light leading-relaxed">
                {homeContent.featuredLook2.description}
              </p>
              <Link
                href="/features"
                className="inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase text-primary hover:text-foreground transition-colors mt-4 w-fit border-b border-primary/30 pb-1 hover:border-foreground"
              >
                {homeContent.featuredLook2.cta}
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Look 2 Image (Right on Desktop) */}
            <div className="lg:col-span-7 relative aspect-[3/4] overflow-hidden rounded-md shadow-editorial-lg group order-1 lg:order-2">
              <Image
                src={siteImages.featuredLook2.src}
                alt={siteImages.featuredLook2.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out-silk"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Featured Look 3 (Cinematic Break) */}
      <section className="py-24 w-full">
        <div className="relative w-full h-[60vh] min-h-[500px]">
          <Image
            src={siteImages.featuredLook3.src}
            alt={siteImages.featuredLook3.alt}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <div className="text-center text-white max-w-3xl">
              <h4 className="font-heading text-4xl md:text-6xl mb-6">{homeContent.featuredLook3.title}</h4>
              <p className="text-lg md:text-xl font-light text-white/90">
                {homeContent.featuredLook3.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: Art of Craftsmanship Divider */}
      <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <AnimatedHeroIllustration className="w-full h-full scale-150 opacity-20 text-primary-foreground" />
        </div>
        <div className="container relative z-10 mx-auto px-6 text-center">
          <h2 className="font-heading text-4xl md:text-6xl text-primary-foreground">
            {homeContent.craftsmanshipDivider.title}
          </h2>
        </div>
      </section>

      {/* SECTION 9 & 10: Craftsmanship Details */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

            {/* Detail 1 */}
            <div className="flex flex-col gap-8">
              <div className="relative aspect-square overflow-hidden rounded-md shadow-editorial-md group">
                <Image
                  src={siteImages.craftsmanshipFabric.src}
                  alt={siteImages.craftsmanshipFabric.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
              </div>
              <div>
                <h4 className="font-heading text-2xl mb-4">{homeContent.craftsmanshipDetail1.heading}</h4>
                <p className="text-foreground/70 font-light leading-relaxed">
                  {homeContent.craftsmanshipDetail1.description}
                </p>
              </div>
            </div>

            {/* Detail 2 */}
            <div className="flex flex-col gap-8 md:mt-24">
              <div className="relative aspect-square overflow-hidden rounded-md shadow-editorial-md group">
                <Image
                  src={siteImages.craftsmanshipEmbroidery.src}
                  alt={siteImages.craftsmanshipEmbroidery.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
              </div>
              <div>
                <h4 className="font-heading text-2xl mb-4">{homeContent.craftsmanshipDetail2.heading}</h4>
                <p className="text-foreground/70 font-light leading-relaxed">
                  {homeContent.craftsmanshipDetail2.description}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 11: Testimonial */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6 text-center max-w-4xl flex flex-col items-center">
          <div className="w-12 h-[1px] bg-accent mb-12" />
          <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl italic text-foreground/90 leading-relaxed mb-8">
            {homeContent.testimonial.quote}
          </h3>
          <p className="font-sans text-sm tracking-widest uppercase text-foreground/60">
            — {homeContent.testimonial.author}
          </p>
        </div>
      </section>

      {/* SECTION 12, 13, 14: Bespoke Process Steps */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <h3 className="font-heading text-4xl mb-16 text-center">{homeContent.faqTeaser?.heading || "The Bespoke Process"}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

            {[
              homeContent.bespokeProcessStep1,
              homeContent.bespokeProcessStep2,
              homeContent.bespokeProcessStep3
            ].map((step, index) => (
              <div key={index} className="flex flex-col border-t border-border pt-8 relative group">
                <span className="font-sans text-accent font-light text-xl mb-4 group-hover:translate-x-2 transition-transform">
                  {step.stepNumber}
                </span>
                <h4 className="font-heading text-2xl mb-4">{step.title}</h4>
                <p className="text-foreground/70 font-light text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* SECTION 15: Atelier Peek (Parallax Window) */}
      <section className="h-[40vh] min-h-[400px] w-full relative overflow-hidden bg-foreground">
        <Image
          src={siteImages.atelierParallax.src}
          alt={siteImages.atelierParallax.alt}
          fill
          className="object-cover opacity-60 mix-blend-overlay"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-background font-light tracking-widest uppercase text-sm md:text-base">
            {homeContent.atelierPeek.caption}
          </p>
        </div>
      </section>

      {/* SECTION 16: Journal Teaser */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16 border-b border-border pb-6">
            <h3 className="font-heading text-3xl md:text-4xl">{homeContent.journalTeaser.heading}</h3>
            <Link href="/blog" className="text-sm font-medium tracking-wider uppercase hover:text-primary transition-colors hidden md:block">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homeContent.journalTeaser.articles.map((article, idx) => (
              <Link href="/blog" key={idx} className="group flex flex-col gap-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded shadow-editorial-sm">
                  {/* Using blogHero for all as placeholders for the actual article images */}
                  <Image
                    src={siteImages.blogHero.src}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h4 className="font-heading text-xl md:text-2xl mt-4 group-hover:text-primary transition-colors">
                  {article.title}
                </h4>
                <p className="text-sm text-foreground/50 uppercase tracking-widest flex items-center gap-2">
                  {article.cta} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </p>
              </Link>
            ))}
          </div>
          <Link href="/blog" className="text-sm font-medium tracking-wider uppercase hover:text-primary transition-colors mt-12 block md:hidden text-center border-b border-foreground pb-1 w-fit mx-auto">
            View All Articles
          </Link>
        </div>
      </section>

      {/* SECTION 17: Global Shipping / Service Assurance */}
      <section className="py-24 bg-muted/20 border-y border-border">
        <div className="container mx-auto px-6 text-center max-w-2xl flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center shadow-editorial-sm mb-8 text-accent">
            {/* Minimalist Globe / Package Icon SVG */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-6 h-6">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </div>
          <h3 className="font-heading text-3xl mb-4">{homeContent.globalShipping.heading}</h3>
          <p className="text-foreground/70 font-light leading-relaxed">
            {homeContent.globalShipping.description}
          </p>
        </div>
      </section>

      {/* SECTION 18: Newsletter Signup */}
      <section className="py-24 bg-primary text-primary-foreground text-center px-6">
        <div className="container mx-auto max-w-lg flex flex-col items-center gap-6">
          <h3 className="font-heading text-3xl md:text-4xl">{homeContent.newsletter.heading}</h3>
          <p className="text-primary-foreground/80 font-light mb-4">
            {homeContent.newsletter.description}
          </p>
          <form className="w-full flex border-b border-primary-foreground/30 focus-within:border-accent transition-colors pb-2" action="">
            <input
              type="email"
              placeholder={homeContent.newsletter.placeholder}
              className="bg-transparent flex-1 text-primary-foreground outline-none placeholder:text-primary-foreground/50 font-light"
              required
            />
            <button type="submit" className="text-sm tracking-widest uppercase text-accent hover:text-primary-foreground transition-colors">
              {homeContent.newsletter.cta}
            </button>
          </form>
        </div>
      </section>

      {/* SECTION 19: Instagram / Social Grid */}
      <section className="py-0 bg-background">
        <div className="w-full grid grid-cols-2 md:grid-cols-4 aspect-[2/1] md:aspect-[4/1]">
          {[siteImages.socialGrid1, siteImages.socialGrid2, siteImages.socialGrid3, siteImages.socialGrid4].map((img, idx) => (
            <a href="https://instagram.com/yavadesigns" target="_blank" rel="noreferrer" key={idx} className="relative w-full h-full group overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000 grayscale-[0.2] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-white font-sans text-sm tracking-widest uppercase">Instagram</span>
              </div>
            </a>
          ))}
        </div>
      </section>

    </div>
  );
}
