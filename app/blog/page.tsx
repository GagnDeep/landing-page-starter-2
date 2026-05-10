import { blogContent } from "@/content/blog";
import { IMAGES } from "@/lib/images";
import { RevealText } from "@/components/visuals/RevealText";
import { FadeIn } from "@/components/visuals/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/visuals/StaggerGroup";
import { ScaleImage } from "@/components/visuals/ScaleImage";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: blogContent.seo.title,
  description: blogContent.seo.description,
};

export default function BlogPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden pt-20">
      {/* Hero */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container mx-auto px-6 text-center">
          <RevealText as="h1" className="text-5xl md:text-7xl font-heading font-medium text-foreground mb-6">
            {blogContent.hero.headline}
          </RevealText>
          <RevealText as="p" delay={0.2} className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            {blogContent.hero.subheadline}
          </RevealText>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <Link href={blogContent.featuredArticle.href} className="group block">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScaleImage className="aspect-[4/3] relative rounded-none">
                <Image src={IMAGES.blogPost1.src} alt={IMAGES.blogPost1.alt} fill className="object-cover" />
              </ScaleImage>
              <div className="flex flex-col justify-center">
                <FadeIn>
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="text-xs uppercase tracking-widest text-primary font-semibold">
                      {blogContent.featuredArticle.category}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span className="text-xs text-muted-foreground uppercase tracking-widest">
                      {blogContent.featuredArticle.date}
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-heading text-foreground mb-6 group-hover:text-primary transition-colors">
                    {blogContent.featuredArticle.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {blogContent.featuredArticle.excerpt}
                  </p>
                  <span className="inline-flex items-center text-foreground font-medium group-hover:text-primary transition-colors">
                    Read Article <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </FadeIn>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Categories Filter (Visual only) */}
      <section className="py-8 bg-muted border-y border-border">
        <div className="container mx-auto px-6">
          <div className="flex overflow-x-auto pb-4 md:pb-0 hide-scrollbar space-x-8 md:justify-center">
            <span className="text-sm uppercase tracking-widest text-foreground font-semibold whitespace-nowrap cursor-pointer">
              All Posts
            </span>
            {blogContent.categories.map((category, index) => (
              <span key={index} className="text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground font-semibold whitespace-nowrap cursor-pointer transition-colors">
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogContent.recentPosts.map((post, index) => (
              <StaggerItem key={index}>
                <Link href={post.href} className="group block h-full flex flex-col">
                  <div className="overflow-hidden mb-6">
                    <div className="aspect-[4/3] relative transform group-hover:scale-105 transition-transform duration-700">
                       <Image
                         src={index === 0 ? IMAGES.blogPost2.src : index === 1 ? IMAGES.realCouple.src : IMAGES.culinaryThali.src}
                         alt={post.title}
                         fill
                         className="object-cover"
                       />
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-xs uppercase tracking-widest text-primary font-semibold">
                      {post.category}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span className="text-xs text-muted-foreground uppercase tracking-widest">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-2xl font-heading text-foreground mb-4 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-primary/5 relative overflow-hidden border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <RevealText as="h2" className="text-4xl md:text-5xl font-heading text-foreground mb-10">
            {blogContent.ctaSection.headline}
          </RevealText>
          <FadeIn delay={0.2}>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-10 py-8 text-xl tracking-wide group" asChild>
              <Link href={blogContent.ctaSection.cta.href}>
                {blogContent.ctaSection.cta.label}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}