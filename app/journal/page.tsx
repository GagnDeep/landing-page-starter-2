import Image from "next/image";
import { blogContent } from "@/content/blog";
import { siteImages } from "@/lib/images";
import { Button } from "@/components/ui/button";
import {
  AnimatedGradientMesh,
  DotMatrixGrid
} from "@/components/visuals";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";

export const metadata = {
  title: blogContent.meta.title,
  description: blogContent.meta.description,
};

export default function JournalPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative py-24 flex flex-col items-center justify-center border-b border-border text-center overflow-hidden bg-muted/20">
        <AnimatedGradientMesh className="absolute inset-0 z-0 opacity-30 mix-blend-multiply dark:mix-blend-screen" />
        <div className="container relative z-10 px-4 md:px-6">
          <h1 className="text-5xl md:text-7xl font-heading font-medium tracking-tight text-foreground mb-4">
            {blogContent.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-sans max-w-2xl mx-auto">
            {blogContent.hero.subtitle}
          </p>
        </div>
      </section>

      {/* 2. Categories Filter */}
      <section className="py-6 border-b border-border bg-card sticky top-[88px] z-30">
        <div className="container px-4 md:px-6 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 md:gap-4 md:justify-center min-w-max">
            {blogContent.categories.map((category, idx) => (
              <button
                key={idx}
                className={`px-4 py-2 rounded-full font-sans text-sm whitespace-nowrap transition-colors ${
                  idx === 0
                    ? "bg-foreground text-background"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Post */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="group flex flex-col lg:flex-row gap-12 lg:gap-16 items-center cursor-pointer">
            <div className="w-full lg:w-7/12 relative aspect-[16/10] overflow-hidden rounded-sm shadow-xl">
              <Image
                src={siteImages.blog.featuredPost.url}
                alt={siteImages.blog.featuredPost.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="w-full lg:w-5/12 flex flex-col items-start gap-6">
              <div className="flex flex-wrap items-center gap-3 font-sans text-sm text-muted-foreground uppercase tracking-wider">
                <span className="text-primary font-medium">{blogContent.featuredPost.category}</span>
                <span className="w-1 h-1 rounded-full bg-border" />
                <span>{blogContent.featuredPost.date}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-heading text-foreground leading-tight group-hover:text-primary transition-colors">
                {blogContent.featuredPost.title}
              </h2>
              <p className="text-lg text-muted-foreground font-sans leading-relaxed">
                {blogContent.featuredPost.excerpt}
              </p>
              <span className="font-sans font-medium text-foreground flex items-center gap-2 mt-2 group-hover:gap-3 transition-all">
                {blogContent.featuredPost.cta}
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                <HugeiconsIcon icon={ArrowRight02Icon} strokeWidth={2 as any} className="size-4 text-primary" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Latest Stories (Grid) */}
      <section className="py-16 md:py-24 bg-muted/30 border-y border-border relative">
        <DotMatrixGrid opacity={0.1} spacing={30} />
        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-heading text-foreground">{blogContent.postsGrid.title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {blogContent.postsGrid.posts.map((post, idx) => {
              // Re-using home case study images dynamically for mock layout
              const imgAsset = idx % 2 === 0 ? siteImages.home.caseStudyOne : siteImages.home.caseStudyTwo;
              return (
                <div key={idx} className="group flex flex-col gap-6 cursor-pointer">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
                    <Image
                      src={imgAsset.url}
                      alt={`Article cover ${idx}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-wrap items-center gap-2 font-sans text-xs text-muted-foreground uppercase tracking-wider">
                      <span className="text-primary font-medium">{post.category}</span>
                      <span className="w-1 h-1 rounded-full bg-border" />
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-2xl font-heading text-foreground leading-snug group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground font-sans line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-20 text-center">
            <Button variant="outline" className="rounded-none px-8">
              {blogContent.postsGrid.loadMoreCta}
            </Button>
          </div>
        </div>
      </section>

      {/* 5. Newsletter Signup */}
      <section className="py-24 bg-card text-center">
        <div className="container px-4 md:px-6 max-w-2xl mx-auto">
          <h2 className="text-3xl font-heading text-foreground mb-4">{blogContent.newsletter.title}</h2>
          <p className="text-muted-foreground font-sans mb-8">
            {blogContent.newsletter.description}
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" action="">
            <input
              type="email"
              placeholder={blogContent.newsletter.placeholder}
              className="flex-1 px-4 py-3 bg-background border border-border rounded-none focus:outline-none focus:border-primary font-sans text-sm"
              required
            />
            <Button type="submit" className="rounded-none px-8 font-sans">
              {blogContent.newsletter.button}
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
