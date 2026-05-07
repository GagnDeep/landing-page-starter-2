"use client"

import { homeContent } from "@/content/home"
import { IMAGES } from "@/lib/images"
import { SubtleScaleImage, CardHoverEffect } from "@/components/visuals"
import Link from "next/link"

export function BlogTeaser() {
  const { blogTeaser } = homeContent

  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <h2 className="text-3xl md:text-5xl font-heading text-foreground">
            {blogTeaser.heading}
          </h2>
          <Link href="/blog" className="text-primary hover:text-primary/80 font-medium underline-offset-4 hover:underline transition-all">
            View All Posts
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogTeaser.posts.map((post, idx) => (
            <CardHoverEffect key={idx}>
              <Link href="/blog" className="group block bg-background border border-border rounded-xl overflow-hidden shadow-sm h-full flex flex-col">
                <div className="aspect-[16/9] relative overflow-hidden">
                  <SubtleScaleImage
                    src={IMAGES.blog.posts[idx]}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-sm text-muted-foreground mb-3">{post.date}</span>
                  <h3 className="text-2xl font-heading text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                </div>
              </Link>
            </CardHoverEffect>
          ))}
        </div>

      </div>
    </section>
  )
}
