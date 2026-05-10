import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { blogContent } from "@/content/blog";
import { SITE_IMAGES } from "@/lib/images";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { NewsletterForm } from "@/components/visuals/NewsletterForm";
import { HugeiconsIcon } from "@hugeicons/react";
import { TimeQuarterPassIcon, ArrowRight01Icon } from "@hugeicons/core-free-icons";

export const metadata: Metadata = {
  title: blogContent.metadata.title,
  description: blogContent.metadata.description,
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-24 overflow-hidden bg-background">
        <AnimatedGradientMesh variant="subtle" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6 drop-shadow-sm max-w-4xl mx-auto">
            {blogContent.hero.headline}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            {blogContent.hero.subheadline}
          </p>
        </div>
      </section>

      {/* Main Blog Area */}
      <section className="py-12 bg-card relative z-10 border-t border-border/50">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">

          {/* 2. Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            {blogContent.categories.map((category, idx) => (
              <button
                key={idx}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  idx === 0
                    ? "bg-foreground text-background"
                    : "bg-background border border-border/50 text-muted-foreground hover:border-foreground/30 hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* 1. Featured Post */}
          <Link href="#" className="group block mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center bg-background rounded-[2.5rem] p-4 lg:p-8 border border-border/50 shadow-sm transition-shadow hover:shadow-lg">
              <div className="relative aspect-video lg:aspect-square rounded-[2rem] overflow-hidden">
                <Image
                  src={SITE_IMAGES.blog.post1}
                  alt={blogContent.featuredPost.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-6 left-6 bg-primary text-primary-foreground text-sm font-bold px-4 py-2 rounded-full">
                  {blogContent.featuredPost.category}
                </div>
              </div>
              <div className="flex flex-col gap-6 px-4 pb-8 lg:pb-0 lg:pr-8">
                <div className="flex items-center gap-4 text-sm font-medium text-muted-foreground">
                  <span>{blogContent.featuredPost.date}</span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span className="flex items-center gap-1">
                    <HugeiconsIcon icon={TimeQuarterPassIcon} className="w-4 h-4" />
                    {blogContent.featuredPost.readTime}
                  </span>
                </div>
                <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                  {blogContent.featuredPost.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {blogContent.featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-2 text-primary font-semibold mt-4">
                  {blogContent.ui.readFullArticle} <HugeiconsIcon icon={ArrowRight01Icon} className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </Link>

          {/* 3. Article Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {blogContent.articleGrid.map((post, idx) => {
              // Cycle through images safely
              const imageUrls = [SITE_IMAGES.blog.post2, SITE_IMAGES.blog.post3, SITE_IMAGES.blog.post1];
              const src = imageUrls[idx % imageUrls.length];

              return (
                <Link href="#" key={post.id} className="group flex flex-col gap-6">
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border/50">
                    <Image
                      src={src}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-background/90 backdrop-blur text-foreground text-xs font-bold px-3 py-1.5 rounded-full">
                      {post.category}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 px-2">
                    <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-border" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Newsletter Signup */}
      <section className="py-24 bg-primary/5 relative z-10 border-t border-border/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto bg-card rounded-[3rem] p-8 md:p-16 border border-primary/20 shadow-xl flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 flex flex-col gap-4 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                {blogContent.newsletter.title}
              </h2>
              <p className="text-lg text-muted-foreground">
                {blogContent.newsletter.description}
              </p>
            </div>
            <div className="w-full md:w-auto flex-shrink-0">
              <NewsletterForm
                placeholder={blogContent.newsletter.placeholder}
                ctaLabel={blogContent.newsletter.cta}
                className="w-full md:w-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
