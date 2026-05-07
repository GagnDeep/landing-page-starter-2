import { blogContent } from "@/content/blog";
import { images } from "@/lib/images";
import Link from "next/link";
import {
  FadeIn,
  StaggerReveal,
  StaggerItem,
  ParallaxImage,
  AnimatedText,
  HoverScale,
  ScrollReveal,
} from "@/components/visuals";
import Image from "next/image";

export default function BlogPage() {
  const articleImages = [
    images.blogArticle1,
    images.blogArticle2,
    images.blogArticle3,
    images.blogArticle4,
  ];

  return (
    <main className="min-h-screen w-full bg-background pt-24 pb-32">
      {/* 1. Journal Hero */}
      <section className="px-6 md:px-12 max-w-[1600px] mx-auto mb-24">
        <FadeIn className="relative h-[60vh] md:h-[70vh] w-full flex items-end pb-12 px-6 md:px-12">
          <ParallaxImage image={images.blogHero} className="absolute inset-0" priority offset={30} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="relative z-10 max-w-4xl">
            <AnimatedText
              el="h1"
              text={blogContent.hero.headline}
              className="text-5xl md:text-7xl lg:text-8xl font-heading text-white mb-6 leading-tight"
            />
            <FadeIn delay={0.4}>
              <p className="text-lg md:text-xl text-white/80 font-light tracking-wide max-w-2xl">
                {blogContent.hero.subheadline}
              </p>
            </FadeIn>
          </div>
        </FadeIn>
      </section>

      {/* 2. Category Navigation */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <ScrollReveal>
          <div className="flex flex-wrap gap-8 border-b border-border pb-6">
            {blogContent.categories.labels.map((label, i) => (
              <button
                key={label}
                className={`text-sm tracking-widest uppercase transition-colors ${
                  i === 0 ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* 3. Article Grid & 5. Featured Wedding Teaser */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-8 lg:gap-x-12">

          {/* Post 1 (Large, spans 8 cols) */}
          <Link href={`/blog/${blogContent.articleGrid.posts[0].id}`} className="md:col-span-8 group cursor-pointer block">
            <HoverScale>
              <div className="relative aspect-[4/3] w-full mb-6">
                <Image src={articleImages[0].url} alt={articleImages[0].alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 66vw" />
              </div>
            </HoverScale>
            <FadeIn direction="up">
              <div className="flex items-center gap-4 text-xs tracking-widest uppercase text-muted-foreground mb-4">
                <span>{blogContent.articleGrid.posts[0].category}</span>
                <span>•</span>
                <span>{blogContent.articleGrid.posts[0].date}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4 group-hover:opacity-70 transition-opacity">
                {blogContent.articleGrid.posts[0].title}
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                {blogContent.articleGrid.posts[0].excerpt}
              </p>
            </FadeIn>
          </Link>

          {/* Post 2 (Small, spans 4 cols) */}
          <Link href={`/blog/${blogContent.articleGrid.posts[1].id}`} className="md:col-span-4 group cursor-pointer block md:mt-24">
            <HoverScale>
              <div className="relative aspect-[3/4] w-full mb-6">
                <Image src={articleImages[1].url} alt={articleImages[1].alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
            </HoverScale>
            <FadeIn direction="up" delay={0.2}>
              <div className="flex items-center gap-4 text-xs tracking-widest uppercase text-muted-foreground mb-4">
                <span>{blogContent.articleGrid.posts[1].category}</span>
              </div>
              <h2 className="text-2xl font-heading text-foreground mb-4 group-hover:opacity-70 transition-opacity">
                {blogContent.articleGrid.posts[1].title}
              </h2>
            </FadeIn>
          </Link>

          {/* 5. Featured Wedding Teaser (Full width break) */}
          <div className="md:col-span-12 my-16 py-24 px-8 md:px-16 bg-secondary text-secondary-foreground text-center flex flex-col items-center justify-center">
            <FadeIn>
              <span className="text-xs tracking-widest uppercase opacity-60 mb-6 block">{blogContent.featuredTeaser.tag}</span>
              <h2 className="text-4xl md:text-6xl font-heading mb-6">{blogContent.featuredTeaser.title}</h2>
              <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto mb-10 leading-relaxed">
                {blogContent.featuredTeaser.description}
              </p>
              <Link href="/blog/featured" className="inline-block border-b border-secondary-foreground pb-1 hover:opacity-60 transition-opacity uppercase tracking-widest text-sm">
                {blogContent.featuredTeaser.ctaLabel}
              </Link>
            </FadeIn>
          </div>

          {/* Post 3 (Small, spans 5 cols) */}
          <Link href={`/blog/${blogContent.articleGrid.posts[2].id}`} className="md:col-span-5 group cursor-pointer block">
            <HoverScale>
              <div className="relative aspect-square w-full mb-6">
                <Image src={articleImages[2].url} alt={articleImages[2].alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 40vw" />
              </div>
            </HoverScale>
            <FadeIn direction="up">
              <div className="flex items-center gap-4 text-xs tracking-widest uppercase text-muted-foreground mb-4">
                <span>{blogContent.articleGrid.posts[2].category}</span>
              </div>
              <h2 className="text-2xl font-heading text-foreground mb-4 group-hover:opacity-70 transition-opacity">
                {blogContent.articleGrid.posts[2].title}
              </h2>
            </FadeIn>
          </Link>

          {/* Post 4 (Medium, spans 7 cols) */}
          <Link href={`/blog/${blogContent.articleGrid.posts[3].id}`} className="md:col-span-7 group cursor-pointer block md:mt-[-100px]">
            <HoverScale>
              <div className="relative aspect-[4/3] w-full mb-6">
                <Image src={articleImages[3].url} alt={articleImages[3].alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 60vw" />
              </div>
            </HoverScale>
            <FadeIn direction="up" delay={0.2}>
              <div className="flex items-center gap-4 text-xs tracking-widest uppercase text-muted-foreground mb-4">
                <span>{blogContent.articleGrid.posts[3].category}</span>
                <span>•</span>
                <span>{blogContent.articleGrid.posts[3].date}</span>
              </div>
              <h2 className="text-3xl font-heading text-foreground mb-4 group-hover:opacity-70 transition-opacity">
                {blogContent.articleGrid.posts[3].title}
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-xl">
                {blogContent.articleGrid.posts[3].excerpt}
              </p>
            </FadeIn>
          </Link>
        </div>

        {/* 6. Pagination */}
        <div className="mt-32 text-center">
          <FadeIn>
            <button className="px-8 py-4 border border-border text-foreground hover:bg-foreground hover:text-background transition-colors uppercase tracking-widest text-sm">
              {blogContent.pagination.loadMoreLabel}
            </button>
          </FadeIn>
        </div>
      </section>

      {/* 4. Newsletter Signup */}
      <section className="py-32 px-6 bg-foreground text-background text-center">
        <FadeIn className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading mb-6">{blogContent.newsletter.heading}</h2>
          <p className="text-lg opacity-80 mb-12">{blogContent.newsletter.description}</p>
          <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder={blogContent.newsletter.inputPlaceholder}
              className="flex-1 bg-transparent border-b border-background/30 pb-2 text-background placeholder:text-background/50 focus:outline-none focus:border-background transition-colors"
            />
            <button
              type="button"
              className="uppercase tracking-widest text-sm font-medium border-b border-background pb-2 hover:opacity-70 transition-opacity whitespace-nowrap"
            >
              {blogContent.newsletter.buttonLabel}
            </button>
          </form>
        </FadeIn>
      </section>
    </main>
  );
}
