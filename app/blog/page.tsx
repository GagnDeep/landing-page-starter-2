import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogContent } from "@/content/blog";
import { IMAGES } from "@/lib/images";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedGradientMesh } from "@/components/visuals";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: blogContent.meta.title,
  description: blogContent.meta.description,
};

export default function BlogPage() {
  const { hero, categories, newsletter, posts } = blogContent;

  const featuredPost = posts.find(p => p.isFeatured) || posts[0];
  const regularPosts = posts.filter(p => !p.isFeatured);

  return (
    <div className="flex flex-col w-full overflow-hidden">

      {/* 1. Hero */}
      <section className="relative min-h-[40vh] flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden bg-muted/50 border-b border-border text-center">
        <AnimatedGradientMesh className="opacity-20" />
        <div className="container px-4 md:px-6 relative z-10 space-y-6">
          <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight text-foreground drop-shadow-sm max-w-4xl mx-auto">
            {hero.headline}
          </h1>

          {/* 3. Categories Filter */}
          <div className="flex flex-wrap justify-center gap-3 pt-8 max-w-3xl mx-auto">
            <span className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium cursor-pointer">All</span>
            {categories.map((cat, i) => (
              <span key={i} className="px-5 py-2 rounded-full bg-background border border-border hover:border-primary text-foreground text-sm font-medium transition-colors cursor-pointer">
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Featured Article */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <Link href={`/blog/${featuredPost.slug}`} className="group block">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-card rounded-3xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300">
              <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[500px] overflow-hidden">
                <Image
                  src={IMAGES.blog.placeholder.url}
                  alt={IMAGES.blog.placeholder.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="p-8 lg:p-16 space-y-6">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold uppercase tracking-wider">Featured</span>
                <h2 className="text-3xl lg:text-4xl font-heading font-semibold group-hover:text-primary transition-colors">{featuredPost.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between pt-4">
                  <span className="text-muted-foreground font-medium">{featuredPost.date}</span>
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* 4. Post Grid */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, i) => {
              const image = IMAGES.blog[post.imageKey as keyof typeof IMAGES.blog] || IMAGES.blog.placeholder;
              return (
                <Link key={i} href={`/blog/${post.slug}`} className="group block h-full">
                  <Card className="bg-card border-border shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col overflow-hidden">
                    <div className="relative w-full aspect-video overflow-hidden border-b border-border">
                      <Image
                        src={image.url}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <CardContent className="p-8 flex flex-col flex-1">
                      <span className="text-sm text-primary font-medium mb-3">{post.date}</span>
                      <h3 className="text-2xl font-heading font-medium mb-4 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                      <p className="text-muted-foreground mb-6 line-clamp-3 flex-1">{post.excerpt}</p>
                      <div className="flex items-center text-foreground font-medium group-hover:text-primary transition-colors mt-auto">
                        {blogContent.newsletter.button.split(" ")[0] || "Read"} <ArrowUpRight className="ml-1 w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          {/* 6. Pagination/Load More */}
          <div className="flex justify-center pt-16">
            <Button variant="outline" size="lg" className="rounded-full px-12 h-14 font-semibold text-lg border-primary text-primary hover:bg-primary/5">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* 5. Newsletter Subscribe */}
      <section className="py-24 bg-primary text-primary-foreground border-y border-border relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-4 text-center lg:text-left">
            <h2 className="text-4xl font-heading font-semibold">{newsletter.heading}</h2>
            <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto lg:mx-0">
              Get the latest culinary insights, wedding trends, and exclusive tasting invites delivered straight to your inbox.
            </p>
          </div>
          <div className="flex-1 w-full max-w-md">
            <form className="flex flex-col sm:flex-row gap-4 w-full">
              <Input
                type="email"
                placeholder={newsletter.placeholder}
                className="bg-primary-foreground text-foreground border-none rounded-full h-14 px-6 text-lg placeholder:text-muted-foreground w-full"
                required
              />
              <Button type="submit" variant="secondary" className="rounded-full h-14 px-8 font-semibold shadow-glow shrink-0">
                {newsletter.button}
              </Button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}
