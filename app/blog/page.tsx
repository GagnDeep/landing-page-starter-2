import { blogContent } from "@/content/blog";
import { images } from "@/lib/images";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight01Icon, ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { DotMatrixGrid } from "@/components/visuals/DotMatrixGrid";
import { CTAGlow } from "@/components/visuals/CTAGlow";
import { SectionDivider } from "@/components/visuals/SectionDivider";
import { Input } from "@/components/ui/input";

export const metadata = {
  title: blogContent.meta.title,
  description: blogContent.meta.description,
};

export default function BlogPage() {
  // Mapping placeholder images for the posts since they aren't explicitly defined in content
  const postImages = [
    images.gallery.g2,
    images.gallery.g4,
    images.gallery.g3,
  ];

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-background">
      {/* 1. Hero */}
      <section className="relative py-24 px-6 overflow-hidden bg-secondary/10 border-b border-border">
        <DotMatrixGrid className="absolute inset-0 opacity-20 pointer-events-none" />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
            {blogContent.hero.headline}
          </h1>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            {blogContent.hero.subheadline}
          </p>
        </div>
      </section>

      {/* 3. Category Filter */}
      <section className="py-8 px-6 border-b border-border sticky top-[88px] bg-background/80 backdrop-blur-md z-40">
        <div className="container mx-auto flex gap-6 overflow-x-auto hide-scrollbar snap-x">
          {blogContent.categories.map((cat, idx) => (
            <button
              key={idx}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors snap-center ${
                idx === 0
                  ? 'bg-foreground text-background'
                  : 'bg-secondary/50 text-foreground hover:bg-secondary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <div className="container mx-auto px-6 py-16 lg:py-24">
        {/* 2. Featured Post */}
        <div className="mb-24">
          {/* Default to the first post ID for the featured post href as a fallback */}
          <Link href={`/blog/${blogContent.posts[0]?.id || "1"}`} className="group grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] lg:aspect-[16/10] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src={images.gallery.g1}
                alt={blogContent.featured.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
            <div className="flex flex-col items-start max-w-xl">
              <div className="flex items-center gap-4 mb-6 text-sm font-semibold uppercase tracking-wider">
                <span className="text-primary">{blogContent.featured.category}</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">{blogContent.featured.date}</span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-foreground group-hover:text-primary transition-colors leading-tight">
                {blogContent.featured.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {blogContent.featured.excerpt}
              </p>
              <div className="text-primary font-medium flex items-center gap-2">
                {blogContent.labels.readArticle}
                <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        </div>

        <SectionDivider width="200px" />

        {/* 4. Post Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mt-24">
          {blogContent.posts.map((post, idx) => (
            <Link key={post.id} href={`/blog/${post.id}`} className="group flex flex-col">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 shadow-sm">
                <Image
                  src={postImages[idx % postImages.length]}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-3 mb-4 text-xs font-semibold uppercase tracking-wider">
                <span className="text-primary">{post.category}</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">{post.date}</span>
              </div>
              <h3 className="font-heading text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-2 flex-1">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>

        {/* 5. Pagination/Load More */}
        <div className="mt-20 flex justify-center">
           <button className="px-8 py-3 rounded-full border border-border bg-background text-foreground font-medium hover:bg-secondary/50 transition-colors inline-flex items-center gap-2">
             {blogContent.labels.loadMore}
           </button>
        </div>
      </div>

      {/* 6. Newsletter Signup */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden text-center px-6">
        <AnimatedGradientMesh className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay" />
        <div className="container mx-auto relative z-10 max-w-2xl">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            {blogContent.newsletter.headline}
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10">
            {blogContent.newsletter.subheadline}
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" action="/">
            <Input
              type="email"
              placeholder={blogContent.newsletter.placeholder}
              className="w-full h-14 rounded-full border-none bg-background/10 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:ring-background focus-visible:ring-2 px-6 text-base"
            />
            <CTAGlow>
              <button
                type="submit"
                className="w-full sm:w-auto h-14 px-8 bg-background text-foreground rounded-full text-base font-bold hover:bg-background/90 transition-all shrink-0 inline-flex justify-center items-center gap-2"
              >
                {blogContent.newsletter.button}
                <HugeiconsIcon icon={ArrowRight02Icon} strokeWidth={2} className="w-5 h-5" />
              </button>
            </CTAGlow>
          </form>
        </div>
      </section>
    </div>
  );
}
