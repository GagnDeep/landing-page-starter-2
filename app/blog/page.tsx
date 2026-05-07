import { blogContent } from "@/content/blog";
import { images } from "@/lib/images";
import { GlobalHeader } from "@/components/layout/GlobalHeader";
import { GlobalFooter } from "@/components/layout/GlobalFooter";
import { FadeIn, RevealText, HoverScaleCard, StaggerContainer, StaggerItem, MagneticButton } from "@/components/visuals";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: blogContent.meta.title,
  description: blogContent.meta.description,
};

export default function BlogPage() {
  const c = blogContent;

  return (
    <>
      <GlobalHeader />

      <main className="min-h-screen pt-32 pb-24 bg-background">
        {/* 1. Header */}
        <section className="py-16 text-center border-b border-border">
          <div className="container mx-auto px-6 max-w-3xl">
            <FadeIn direction="up">
              <h1 className="font-heading text-5xl md:text-6xl font-medium mb-6 leading-tight">
                <RevealText text={c.hero.title} />
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed italic font-heading">
                {c.hero.subtitle}
              </p>
            </FadeIn>
          </div>
        </section>

        {/* 2. Featured Article */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <FadeIn direction="up" className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <Link href="#" className="relative h-[50vh] lg:h-[70vh] w-full block group overflow-hidden bg-secondary">
                 <Image src={images.hero.blog} alt={c.featuredArticle.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </Link>
              <div className="flex flex-col items-start justify-center">
                <div className="flex items-center gap-4 text-xs tracking-widest uppercase text-muted-foreground mb-6 font-semibold">
                  <span>{c.featuredArticle.date}</span>
                  <span className="w-1 h-1 rounded-full bg-primary" />
                  <span>{c.featuredArticle.readTime}</span>
                </div>
                <h2 className="font-heading text-4xl md:text-5xl font-medium mb-6 hover:text-primary transition-colors cursor-pointer">
                  <Link href="#">{c.featuredArticle.title}</Link>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                  {c.featuredArticle.excerpt}
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium">By {c.featuredArticle.author}</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 3. Grid & Sidebar */}
        <section className="py-24 bg-secondary/10 border-t border-border">
          <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-16">

            <div className="flex-1">
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                {c.recentArticles.map((article, i) => (
                  <StaggerItem key={i}>
                    <Link href="#" className="group block">
                      <HoverScaleCard>
                        <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden bg-muted">
                          <Image
                            src={images.gallery[i % images.gallery.length]}
                            alt={article.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                      </HoverScaleCard>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-semibold">{article.date}</p>
                      <h3 className="font-heading text-2xl font-medium mb-4 group-hover:text-primary transition-colors">{article.title}</h3>
                      <p className="text-muted-foreground line-clamp-3 mb-4">{article.excerpt}</p>
                      <span className="text-sm font-medium text-foreground underline-offset-4 group-hover:underline">
                        Read Article
                      </span>
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            <aside className="w-full lg:w-80 flex-shrink-0 space-y-16">
              <FadeIn direction="up" delay={0.2}>
                <h3 className="font-heading text-2xl font-medium mb-6 border-b border-border pb-4">{c.sidebar.categoriesTitle}</h3>
                <ul className="space-y-4">
                  {c.sidebar.categories.map((cat, i) => (
                    <li key={i}>
                      <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-lg">
                        {cat}
                      </Link>
                    </li>
                  ))}
                </ul>
              </FadeIn>

              <FadeIn direction="up" delay={0.3} className="bg-background border border-border p-8 text-center">
                <h3 className="font-heading text-2xl font-medium mb-4">{c.sidebar.newsletterTitle}</h3>
                <p className="text-muted-foreground mb-8">{c.sidebar.newsletterDescription}</p>
                <form action="/" className="flex flex-col gap-4">
                  <Input type="email" placeholder="Email Address" className="rounded-none h-12 bg-transparent text-center focus-visible:ring-0 focus-visible:border-primary" />
                  <MagneticButton type="button" className="w-full py-3 bg-foreground text-background text-sm uppercase tracking-widest font-bold hover:bg-foreground/90">
                    Subscribe
                  </MagneticButton>
                </form>
              </FadeIn>
            </aside>

          </div>
        </section>
      </main>

      <GlobalFooter />
    </>
  );
}
