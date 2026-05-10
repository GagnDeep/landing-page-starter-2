import Image from "next/image";
import Link from "next/link";
import { blogContent } from "@/content/blog";
import { siteImages } from "@/lib/images";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { DotMatrixGrid } from "@/components/visuals/DotMatrixGrid";
import { RevealText } from "@/components/visuals/RevealText";
import { CTAGlow } from "@/components/visuals/CTAGlow";
import { FloatingBlobs } from "@/components/visuals/FloatingBlobs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, Calendar01Icon, UserIcon, Mail01Icon } from "@hugeicons/core-free-icons";

export const metadata = {
  title: blogContent.metadata.title,
  description: blogContent.metadata.description,
};

export default function BlogIndexPage() {
  const {
    hero,
    categories,
    newsletter,
    featuredCategory,
    promoBanner,
    mockPosts,
    finalCta
  } = blogContent;

  const images = siteImages.blog;

  // Assuming the first post in mockPosts is the "Featured Post" for layout purposes
  const featuredPost = mockPosts[0];
  const remainingPosts = mockPosts.slice(1);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 bg-primary text-primary-foreground">
        <AnimatedGradientMesh className="opacity-50 mix-blend-screen" />
        <DotMatrixGrid />
        <div className="container relative z-10 px-4 md:px-6 mx-auto flex flex-col items-center text-center">
          <RevealText as="h1" className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight max-w-4xl mx-auto">
            {hero.headline}
          </RevealText>
          <RevealText as="p" className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            {hero.subheadline}
          </RevealText>
        </div>
      </section>

      {/* Categories & Search */}
      <section className="py-6 border-b border-border bg-background sticky top-16 z-40">
        <div className="container px-4 md:px-6 mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <nav className="flex items-center gap-2 overflow-x-auto w-full pb-2 md:pb-0 scrollbar-hide">
            {categories.map((category, i) => (
              <Link
                key={category.slug}
                href={`#`}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  i === 0
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                }`}
              >
                {category.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <Link href={`/blog/${featuredPost.slug}`} className="group grid lg:grid-cols-2 gap-8 lg:gap-16 items-center bg-card rounded-3xl p-6 md:p-8 lg:p-12 border border-border shadow-sm hover:shadow-md transition-all">
            <div className="relative aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden">
              <Image
                src={images.mockPost1.src}
                alt={images.mockPost1.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute top-4 left-4 bg-background/90 backdrop-blur text-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                {blogContent.postLayoutStrings.featuredLabel}
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-sm text-muted-foreground font-medium">
                <span className="text-primary">{featuredPost.category}</span>
                <span>•</span>
                <span className="flex items-center gap-1.5"><HugeiconsIcon icon={Calendar01Icon} size={16} /> {featuredPost.date}</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold group-hover:text-primary transition-colors">
                {featuredPost.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed line-clamp-3">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                    <HugeiconsIcon icon={UserIcon} size={16} />
                  </div>
                  {featuredPost.author}
                </div>
                <span className="text-primary font-medium flex items-center group-hover:underline">
                  {blogContent.postLayoutStrings.readArticleBtn} <HugeiconsIcon icon={ArrowRight01Icon} className="ml-1" size={16} />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Category Highlight & Newsletter */}
      <section className="py-24 bg-muted/20 border-y border-border">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-16">
              <div>
                <RevealText as="h3" className="font-heading text-2xl font-bold mb-4">{featuredCategory.beginnerGuides.headline}</RevealText>
                <p className="text-muted-foreground mb-8">{featuredCategory.beginnerGuides.description}</p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Reuse remaining posts for layout visualization */}
                  {remainingPosts.map((post, i) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col space-y-4">
                      <div className="relative aspect-[3/2] rounded-xl overflow-hidden border border-border">
                        <Image
                          src={i === 0 ? images.mockPost2.src : images.mockPost3.src}
                          alt={i === 0 ? images.mockPost2.alt : images.mockPost3.alt}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
                        <span className="text-primary">{post.category}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>
                      <h4 className="font-heading text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">{post.title}</h4>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-primary text-primary-foreground p-8 rounded-3xl relative overflow-hidden h-fit sticky top-32">
              <DotMatrixGrid />
              <div className="relative z-10 space-y-6">
                <div className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center mb-6">
                  <HugeiconsIcon icon={Mail01Icon} size={24} />
                </div>
                <h3 className="font-heading text-2xl font-bold">{newsletter.headline}</h3>
                <p className="text-primary-foreground/80">{newsletter.subheadline}</p>
                <form className="space-y-3 pt-4" action="#">
                  <Input
                    type="email"
                    placeholder={newsletter.placeholder}
                    className="h-12 bg-background border-none text-foreground placeholder:text-muted-foreground"
                  />
                  <Button type="button" className="w-full h-12 bg-accent text-accent-foreground font-bold hover:bg-accent/90">
                    {newsletter.buttonLabel}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="bg-accent/10 border border-accent/20 rounded-3xl p-8 md:p-16 text-center space-y-6 max-w-4xl mx-auto">
            <RevealText as="h2" className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              {promoBanner.headline}
            </RevealText>
            <p className="text-lg text-muted-foreground">
              {promoBanner.subheadline}
            </p>
            <div className="pt-4">
               <CTAGlow>
                <Link
                  href={promoBanner.cta.href}
                  className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                >
                  {promoBanner.cta.label}
                </Link>
              </CTAGlow>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden text-center">
        <FloatingBlobs />
        <div className="container relative z-10 px-4 md:px-6 mx-auto max-w-3xl space-y-8">
          <RevealText as="h2" className="font-heading text-4xl md:text-5xl font-bold">
            {finalCta.headline}
          </RevealText>
          <div className="pt-8">
            <CTAGlow>
              <Link
                href={finalCta.primaryCta.href}
                className="inline-flex h-14 items-center justify-center rounded-md bg-accent px-10 text-base font-bold text-accent-foreground shadow-lg transition-transform hover:scale-105"
              >
                {finalCta.primaryCta.label}
              </Link>
            </CTAGlow>
          </div>
        </div>
      </section>
    </div>
  );
}
