import React from "react";
import Image from "next/image";
import { blogContent } from "@/content/blog";
import { SITE_IMAGES } from "@/lib/images";
import { FloatingBlobs } from "@/components/visuals/FloatingBlobs";

export function BlogHero() {
  const post = blogContent.hero.featuredPost;

  return (
    <section className="relative pt-24 pb-16 bg-background overflow-hidden border-b border-border/50">
      <FloatingBlobs className="opacity-30" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 tracking-tight text-foreground">
            {blogContent.hero.heading}
          </h1>
          <p className="text-xl text-muted-foreground">{blogContent.hero.subheading}</p>
        </div>

        <div className="relative w-full aspect-[21/9] md:aspect-[21/7] rounded-3xl overflow-hidden shadow-xl group cursor-pointer border border-border/50">
          <Image
            src={SITE_IMAGES.blogCakeCare.url}
            alt={SITE_IMAGES.blogCakeCare.alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full max-w-4xl text-white">
            <div className="flex items-center gap-4 text-sm font-medium mb-4 text-white/80">
              <span className="bg-primary/90 px-3 py-1 rounded-full">{post.category}</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 leading-tight">{post.title}</h2>
            <p className="text-lg text-white/80 line-clamp-2 md:line-clamp-none max-w-2xl">{post.excerpt}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
