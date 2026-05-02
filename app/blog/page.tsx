import { blogContent } from "@/content/blog";
import { IMAGE_REGISTRY } from "@/lib/images";
import {
  FadeInScroll,
  CTAGlow,
  KenBurnsImage,
  AnimatedGradientMesh
} from "@/components/visuals";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: blogContent.meta.title,
  description: blogContent.meta.description,
};

function ArticleCard({ tag, title, image, className }: { tag: string; title: string; image: string; className?: string }) {
  return (
    <FadeInScroll className={`group cursor-pointer ${className}`}>
      <div className="w-full aspect-[4/3] overflow-hidden mb-6 relative bg-muted">
        <KenBurnsImage src={image} alt={title} />
      </div>
      <p className="text-xs uppercase tracking-widest text-primary mb-3">{tag}</p>
      <h3 className="text-2xl font-heading text-foreground group-hover:text-primary transition-colors leading-tight">
        {title}
      </h3>
    </FadeInScroll>
  );
}

export default function BlogPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start overflow-hidden bg-background">

      {/* 1. Hero & Navigation */}
      <section className="w-full pt-32 pb-12 border-b border-border/40">
        <div className="container mx-auto px-6 text-center">
          <FadeInScroll>
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-heading text-foreground tracking-tighter mb-16 uppercase">
              {blogContent.hero.heading}
            </h1>
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
              {blogContent.categories.navigation.map((cat, i) => (
                <a key={i} href="#" className="text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
                  {cat}
                </a>
              ))}
            </div>
          </FadeInScroll>
        </div>
      </section>

      {/* 17. Search the Journal */}
      <section className="w-full py-8 border-b border-border/40 bg-muted/10">
        <div className="container mx-auto px-6 max-w-xl">
          <FadeInScroll>
            <div className="relative">
              <input
                type="text"
                placeholder={blogContent.search.placeholder}
                className="w-full bg-transparent border-b border-border py-4 outline-none focus:border-primary transition-colors text-foreground text-center text-lg"
              />
            </div>
          </FadeInScroll>
        </div>
      </section>

      {/* 2. Featured Article */}
      <section className="w-full py-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <FadeInScroll>
            <div className="group cursor-pointer block w-full">
              <div className="w-full aspect-[21/9] md:aspect-[3/1] overflow-hidden mb-8 relative bg-muted">
                <KenBurnsImage src={IMAGE_REGISTRY.blog1.src} alt={blogContent.featuredArticle.title} priority />
              </div>
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-sm uppercase tracking-widest text-primary mb-4">{blogContent.featuredArticle.tag}</p>
                <h2 className="text-4xl md:text-6xl font-heading text-foreground group-hover:text-primary transition-colors leading-tight mb-6">
                  {blogContent.featuredArticle.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  {blogContent.featuredArticle.excerpt}
                </p>
              </div>
            </div>
          </FadeInScroll>
        </div>
      </section>

      {/* 4. Article Grid Row 1 (2-col asymmetric) */}
      <section className="w-full pb-24">
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-12">
          <ArticleCard
            tag={blogContent.articles[0].tag}
            title={blogContent.articles[0].title}
            image={IMAGE_REGISTRY.blog2.src}
            className="md:col-span-7"
          />
          <ArticleCard
            tag={blogContent.articles[1].tag}
            title={blogContent.articles[1].title}
            image={IMAGE_REGISTRY.blog3.src}
            className="md:col-span-5"
          />
        </div>
      </section>

      {/* 6. Newsletter Interstitial */}
      <section className="w-full py-32 bg-foreground text-background text-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 max-w-2xl">
          <FadeInScroll>
            <h2 className="text-4xl font-heading mb-6">{blogContent.newsletterInterstitial.heading}</h2>
            <p className="text-background/70 mb-12">{blogContent.newsletterInterstitial.description}</p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center" action={async () => { "use server" }}>
              <input
                type="email"
                placeholder={blogContent.newsletterInterstitial.placeholder}
                className="bg-transparent border-b border-background/30 py-3 px-4 text-background placeholder:text-background/50 outline-none focus:border-background transition-colors min-w-[250px]"
              />
              <button type="submit" className="text-xs uppercase tracking-widest font-medium border border-background py-3 px-8 hover:bg-background hover:text-foreground transition-colors">
                {blogContent.newsletterInterstitial.buttonText}
              </button>
            </form>
          </FadeInScroll>
        </div>
      </section>

      {/* 5. Article Grid Row 2 (3-col) */}
      <section className="w-full py-32">
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8">
          <ArticleCard tag={blogContent.articles[2].tag} title={blogContent.articles[2].title} image={IMAGE_REGISTRY.products.src} />
          <ArticleCard tag={blogContent.articles[3].tag} title={blogContent.articles[3].title} image={IMAGE_REGISTRY.hairCut.src} />
          <ArticleCard tag={blogContent.articles[4].tag} title={blogContent.articles[4].title} image={IMAGE_REGISTRY.hairColor.src} />
        </div>
      </section>

      {/* 9. Visual Break: Pull Quote */}
      <section className="w-full py-40 bg-secondary/10">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <FadeInScroll>
            <p className="text-3xl md:text-5xl font-heading text-primary leading-relaxed mb-12">
              {blogContent.pullQuote.text}
            </p>
            <p className="text-sm uppercase tracking-widest text-muted-foreground">
              — {blogContent.pullQuote.author}
            </p>
          </FadeInScroll>
        </div>
      </section>

      {/* 11 & 14. Trending & Layout */}
      <section className="w-full py-32">
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <ArticleCard tag={blogContent.articles[5].tag} title={blogContent.articles[5].title} image={IMAGE_REGISTRY.mobileSetup.src} />
          </div>
          <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-border/40 pt-16 lg:pt-0 lg:pl-12">
            <FadeInScroll>
              <h3 className="text-sm uppercase tracking-widest text-primary mb-8">{blogContent.trendingSidebar.heading}</h3>
              <ul className="space-y-8">
                {blogContent.trendingSidebar.items.map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-lg font-heading text-foreground hover:text-primary transition-colors block leading-snug">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </FadeInScroll>
          </div>
        </div>
      </section>

      {/* 19. CTA */}
      <section className="w-full py-40 border-t border-border/40 relative overflow-hidden">
        <AnimatedGradientMesh className="absolute inset-0 z-0 opacity-20" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <FadeInScroll>
            <h2 className="text-4xl md:text-6xl font-heading text-primary mb-12 max-w-2xl mx-auto leading-tight">
              {blogContent.cta.heading}
            </h2>
            <Link href="/booking">
              <CTAGlow>{blogContent.cta.buttonText}</CTAGlow>
            </Link>
          </FadeInScroll>
        </div>
      </section>

    </main>
  );
}
