import { blogContent } from "@/content/blog"
import { IMAGES } from "@/lib/images"
import Image from "next/image"
import Link from "next/link"
import { AnimatedGradientMesh } from "@/components/visuals/animated-gradient-mesh"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const metadata = {
  title: blogContent.meta.title,
  description: blogContent.meta.description,
}

export default function BlogIndexPage() {
  const { journalHero, categoryNavigation, articleGrid, newsletterSignupInline } = blogContent

  return (
    <>
      {/* 1: journal-hero */}
      <section className="relative min-h-[50svh] flex flex-col items-center justify-center overflow-hidden bg-background px-6 pt-32 pb-16 border-b border-border/50 text-center">
         <AnimatedGradientMesh opacity={0.2} />
         <div className="relative z-10 container mx-auto max-w-3xl">
           <h1 className="font-heading text-5xl md:text-7xl font-medium tracking-tight mb-6 text-foreground">
             {journalHero.heading}
           </h1>
           <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide leading-relaxed">
             {journalHero.subheading}
           </p>
         </div>
      </section>

      {/* 2: category-navigation */}
      <section className="border-b border-border/50 bg-muted/10 sticky top-[72px] z-40 backdrop-blur-md">
        <div className="container mx-auto max-w-7xl overflow-x-auto no-scrollbar">
          <nav className="flex items-center gap-8 py-4 px-6 min-w-max">
            {categoryNavigation.categories.map((cat, i) => (
              <button
                key={i}
                className={`text-xs tracking-widest uppercase font-medium transition-colors hover:text-primary ${i === 0 ? "text-primary" : "text-muted-foreground"}`}
              >
                {cat}
              </button>
            ))}
          </nav>
        </div>
      </section>

      <section className="py-24 px-6 bg-background">
        <div className="container mx-auto max-w-7xl">
           {/* 3: article-grid */}
           <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-32">
              {articleGrid.articles.map((article, i) => {
                 // First article is featured (full width or spans more columns)
                 const isFeatured = i === 0;
                 const colSpan = isFeatured ? "md:col-span-12" : "md:col-span-6 lg:col-span-4";
                 const aspect = isFeatured ? "aspect-[2/1] md:aspect-[21/9]" : "aspect-[4/3]";
                 const imgSrc = i === 0 ? IMAGES.journalArticle1.src : i === 1 ? IMAGES.journalArticle2.src : i === 2 ? IMAGES.journalArticle3.src : IMAGES.destUdaipur.src;

                 return (
                    <article key={article.id} className={`${colSpan} group cursor-pointer`}>
                      <Link href={`/blog/${article.id}`} className="block h-full flex flex-col">
                        <div className={`relative ${aspect} overflow-hidden mb-6 bg-muted`}>
                           <Image src={imgSrc} alt={article.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" sizes={isFeatured ? "100vw" : "(max-width: 1024px) 50vw, 33vw"} />
                        </div>
                        <div className="flex flex-col flex-1">
                           <div className="flex items-center gap-4 mb-3">
                             <span className="text-xs tracking-widest uppercase text-primary">{article.category}</span>
                             <span className="text-xs tracking-widest uppercase text-muted-foreground opacity-50">{article.date}</span>
                           </div>
                           <h2 className={`font-heading ${isFeatured ? "text-4xl md:text-5xl" : "text-2xl"} mb-4 group-hover:text-primary transition-colors leading-tight`}>
                             {article.title}
                           </h2>
                           <p className={`text-muted-foreground font-light leading-relaxed ${isFeatured ? "text-lg max-w-3xl" : "text-base"}`}>
                             {article.excerpt}
                           </p>
                        </div>
                      </Link>
                    </article>
                 )
              })}
           </div>

           {/* 4: newsletter-signup-inline */}
           <div className="bg-card border border-border p-12 md:p-24 text-center max-w-4xl mx-auto flex flex-col items-center">
              <h3 className="font-heading text-3xl mb-4">{newsletterSignupInline.heading}</h3>
              <p className="text-muted-foreground font-light mb-8 max-w-md">{newsletterSignupInline.description}</p>
              <form className="flex w-full max-w-md gap-2" action="javascript:void(0)">
                 <Input type="email" placeholder="Enter your email address" className="rounded-none bg-background border-border focus-visible:ring-primary h-12" required />
                 <Button type="submit" className="rounded-none h-12 px-8 uppercase tracking-widest text-xs">{newsletterSignupInline.ctaLabel}</Button>
              </form>
           </div>
        </div>
      </section>
    </>
  )
}
