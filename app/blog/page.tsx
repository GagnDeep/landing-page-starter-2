import { blogContent } from "@/content/blog";
import { IMAGES } from "@/lib/images";
import Image from "next/image";
import Link from "next/link";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";

export const metadata = blogContent.meta;

export default function BlogPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative min-h-[40vh] flex flex-col items-center justify-center overflow-hidden py-24 bg-background border-b border-border text-center">
        <AnimatedGradientMesh className="opacity-20" />
        <div className="container mx-auto px-6 relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-heading text-foreground mb-6">{blogContent.hero.title}</h1>
          <p className="text-xl text-muted-foreground font-serif">{blogContent.hero.subtitle}</p>
        </div>

        {/* Category Navigation */}
        <div className="container mx-auto px-6 mt-12 relative z-10">
           <ul className="flex flex-wrap justify-center gap-6">
             {blogContent.categories.map((cat, idx) => (
                <li key={idx}>
                   <Link href="#" className={`text-sm tracking-wide ${idx === 0 ? 'text-primary font-medium border-b border-primary pb-1' : 'text-muted-foreground hover:text-foreground'}`}>
                      {cat}
                   </Link>
                </li>
             ))}
           </ul>
        </div>
      </section>

      <div className="container mx-auto px-6 py-24">

        {/* Featured Article */}
        <section className="mb-24">
           <Link href="#" className="group block">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-border">
                  <Image src={IMAGES.blogLapel} alt={blogContent.placeholders.featuredArticle.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
               </div>
               <div className="space-y-4">
                  <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-widest text-primary mb-2">
                     <span>{blogContent.placeholders.featuredArticle.category}</span>
                     <span className="w-1 h-1 rounded-full bg-border"></span>
                     <span className="text-muted-foreground">{blogContent.placeholders.featuredArticle.date}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-heading group-hover:text-primary transition-colors">{blogContent.placeholders.featuredArticle.title}</h2>
                  <p className="text-lg text-muted-foreground font-serif leading-relaxed">{blogContent.placeholders.featuredArticle.excerpt}</p>
               </div>
             </div>
           </Link>
        </section>

        {/* Article Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
           {blogContent.placeholders.recentArticles.map((article, idx) => (
              <Link href="#" key={idx} className="group block">
                 <div className="space-y-6">
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-border">
                      <Image
                        src={idx === 0 ? IMAGES.blogLinen : IMAGES.blogButtonhole}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="space-y-3">
                       <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-widest text-primary">
                          <span>{article.category}</span>
                          <span className="w-1 h-1 rounded-full bg-border"></span>
                          <span className="text-muted-foreground">{article.date}</span>
                       </div>
                       <h3 className="text-2xl font-heading group-hover:text-primary transition-colors">{article.title}</h3>
                       <p className="text-muted-foreground font-serif line-clamp-2">{article.excerpt}</p>
                    </div>
                 </div>
              </Link>
           ))}
        </section>

        {/* Newsletter Inline */}
        <section className="bg-secondary/5 border border-border/50 rounded-lg p-12 text-center max-w-3xl mx-auto">
           <h3 className="text-2xl font-heading text-primary mb-4">{blogContent.newsletter.heading}</h3>
           <p className="text-muted-foreground mb-8">{blogContent.newsletter.description}</p>
           <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                 type="email"
                 placeholder={blogContent.newsletter.placeholder}
                 className="flex-grow px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50"
                 required
              />
              <button type="submit" className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-primary/90 transition-colors">
                 {blogContent.newsletter.button}
              </button>
           </form>
        </section>

      </div>
    </div>
  );
}
