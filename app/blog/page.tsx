import { Metadata } from "next"
import { blogContent } from "@/content/blog"
import { siteImages } from "@/lib/images"
import { RevealText } from "@/components/visuals/reveal-text"

import { SlideUp } from "@/components/visuals/slide-up"
import { ParallaxImage } from "@/components/visuals/parallax-image"
import { StaggerContainer, StaggerItem } from "@/components/visuals/stagger-container"
import Link from "next/link"

export const metadata: Metadata = {
  title: blogContent.seo.title,
  description: blogContent.seo.description,
}

export default function BlogPage() {
  return (
    <div className="bg-background pt-24 pb-32 min-h-screen">

      {/* 1. Hero: Featured Post */}
      <section className="px-6 md:px-12 py-12">
        <div className="relative h-[70svh] w-full flex items-end justify-start rounded-sm overflow-hidden p-8 md:p-16">
            <div className="absolute inset-0 z-0">
                <ParallaxImage
                    src={siteImages.blog.hero}
                    alt="Featured Culinary Article"
                    containerClassName="w-full h-full"
                />
                {/* Gradient overlay for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            </div>

            <div className="relative z-10 w-full max-w-3xl text-white">
                <SlideUp>
                    <span className="font-sans text-xs tracking-widest uppercase text-accent font-semibold mb-4 block">
                        {blogContent.featuredArticle.category}
                    </span>
                    <RevealText
                        as="h1"
                        text={blogContent.featuredArticle.title}
                        className="font-heading text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight"
                    />
                    <div className="flex items-center gap-4 text-sm font-sans tracking-widest uppercase text-white/60">
                        <span>{blogContent.featuredArticle.date}</span>
                        <span className="w-1 h-1 rounded-full bg-accent" />
                        <Link href="#" className="text-white hover:text-accent transition-colors">{blogContent.featuredArticle.readText}</Link>
                    </div>
                </SlideUp>
            </div>
        </div>
      </section>

      {/* 2. Category Filter (Sticky) */}
      <div className="sticky top-24 z-40 bg-background/90 backdrop-blur-md border-y border-border py-4 px-6 md:px-12 overflow-x-auto no-scrollbar">
          <ul className="flex items-center gap-8 min-w-max mx-auto max-w-7xl">
              {blogContent.categories.map((cat, idx) => (
                  <li key={idx}>
                      <button className={`font-sans text-xs tracking-widest uppercase transition-colors whitespace-nowrap ${idx === 0 ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-foreground'}`}>
                          {cat}
                      </button>
                  </li>
              ))}
          </ul>
      </div>

      {/* 3. Featured Articles Grid */}
      <section className="py-24 px-6 md:px-12">
        <div className="mx-auto max-w-7xl">
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {blogContent.gridArticles.map((article, idx) => (
                    <StaggerItem key={idx} className="group cursor-pointer flex flex-col h-full">
                        <div className="relative aspect-[4/3] w-full overflow-hidden mb-6 rounded-sm bg-muted">
                             <ParallaxImage
                                src={siteImages.blog.thumbnails[idx % siteImages.blog.thumbnails.length]}
                                alt={article.title}
                                containerClassName="w-full h-full"
                                className="transition-transform duration-1000 group-hover:scale-105"
                            />
                        </div>
                        <div className="flex flex-col flex-grow">
                             <span className="font-sans text-[10px] tracking-widest uppercase text-primary mb-3 block">
                                {article.category}
                            </span>
                            <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-4 group-hover:text-primary transition-colors">
                                {article.title}
                            </h2>
                            <span className="font-sans text-xs tracking-widest uppercase text-muted-foreground mt-auto block">
                                {article.date}
                            </span>
                        </div>
                    </StaggerItem>
                ))}
            </StaggerContainer>
        </div>
      </section>

      {/* 5. Newsletter Sign-up */}
      <section className="py-32 bg-muted mt-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
            <SlideUp>
                <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
                    {blogContent.newsletter.heading}
                </h2>
                <p className="font-sans text-muted-foreground text-lg mb-12">
                    {blogContent.newsletter.description}
                </p>
                <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" action="#">
                    <input
                        type="email"
                        placeholder={blogContent.newsletter.inputPlaceholder}
                        className="flex-grow bg-background border border-border px-6 py-4 font-sans text-sm focus:outline-none focus:border-primary transition-colors"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-primary text-primary-foreground px-8 py-4 font-sans text-xs tracking-widest uppercase hover:bg-primary/90 transition-colors whitespace-nowrap"
                    >
                        {blogContent.newsletter.buttonText}
                    </button>
                </form>
            </SlideUp>
        </div>
      </section>

    </div>
  )
}