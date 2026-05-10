import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { homeContent } from "@/content/home";

export function BlogTeaser() {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            {homeContent.blogTeaser.heading}
          </h2>
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/blog">{homeContent.blogTeaser.cta}</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {homeContent.blogTeaser.articles.map((article, idx) => (
            <div key={idx} className="p-6 bg-card rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow">
              <p className="text-sm text-muted-foreground mb-2">{article.date}</p>
              <h3 className="text-xl font-bold text-foreground">{article.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
