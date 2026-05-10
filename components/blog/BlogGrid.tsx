import React from "react";
import { blogContent } from "@/content/blog";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function BlogGrid() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Categories Filter */}
        <div className="flex flex-wrap gap-3 mb-16 border-b border-border/50 pb-8">
          {blogContent.categories.map((cat, i) => (
            <button
              key={i}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-colors ${i === 0 ? 'bg-foreground text-background border-foreground' : 'bg-secondary/10 border-border hover:bg-secondary/30 text-foreground'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Main Grid */}
          <div className="lg:col-span-8">
            <h2 className="text-3xl font-heading font-bold mb-10 text-foreground">{blogContent.latestPosts.heading}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogContent.latestPosts.posts.map((post, idx) => (
                <article key={idx} className="group cursor-pointer flex flex-col h-full bg-card border border-border/50 rounded-3xl p-8 hover:border-primary/50 transition-colors shadow-sm hover:shadow-md">
                  <div className="flex items-center gap-3 text-xs font-semibold text-muted-foreground mb-4 uppercase tracking-wider">
                    <span className="text-primary">{post.category}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-8 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm font-medium text-foreground mt-auto">
                    <span>{post.date}</span>
                    <ArrowRight className="w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary transition-colors group-hover:translate-x-1" />
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-16 text-center border-t border-border/50 pt-16">
              <Button variant="outline" size="lg" className="rounded-full px-8 border-border text-foreground hover:bg-secondary/20">
                {blogContent.pagination.loadMore}
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-12">

              {/* Trending */}
              <div className="bg-secondary/20 p-8 rounded-3xl border border-border/50">
                <h3 className="font-heading font-bold text-xl mb-6 text-foreground">{blogContent.trending.heading}</h3>
                <ul className="space-y-6">
                  {blogContent.trending.posts.map((post, i) => (
                    <li key={i} className="group cursor-pointer">
                      <div className="flex gap-4 items-start">
                        <span className="text-2xl font-heading font-bold text-muted-foreground/40 group-hover:text-primary transition-colors">0{i+1}</span>
                        <h4 className="font-bold text-foreground leading-snug group-hover:text-primary transition-colors">{post}</h4>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter Inline */}
              <div className="bg-primary p-8 rounded-3xl text-primary-foreground">
                <h3 className="font-heading font-bold text-xl mb-3">{blogContent.newsletter.heading}</h3>
                <p className="text-primary-foreground/80 text-sm mb-6">{blogContent.newsletter.description}</p>
                <div className="flex flex-col gap-3">
                  <input type="email" placeholder={blogContent.newsletter.placeholder} className="h-10 px-4 rounded-lg bg-background text-foreground border-none text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
                  <Button variant="secondary" className="w-full font-bold">
                    {blogContent.newsletter.cta}
                  </Button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
