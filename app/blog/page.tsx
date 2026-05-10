import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { seo, hero, categories, articles, newsletter } from "@/content/blog";
import { generalStrings, blogTeaserImages } from "@/content/home"; // Reusing some general strings
import { images } from "@/lib/images";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { DotMatrixPattern } from "@/components/visuals/DotMatrixPattern";
import { HugeiconsIcon } from "@hugeicons/react";
import { Calendar01Icon, Time01Icon } from "@hugeicons/core-free-icons";

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
};

export default function BlogPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">

      {/* 1. Hero Section */}
      <section className="relative min-h-[40vh] flex items-center pt-24 pb-16 overflow-hidden bg-primary/5">
        <AnimatedGradientMesh speed={30} className="absolute inset-0 opacity-20" />
        <DotMatrixPattern opacity={0.1} />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground tracking-tight">
            {hero.title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {hero.subtitle}
          </p>
        </div>
      </section>

      {/* 2. Categories Filter */}
      <section className="bg-background border-y border-border/50 sticky top-16 z-30 shadow-sm">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-4 no-scrollbar">
             {categories.map((category, idx) => (
                <button
                  key={category.id}
                  className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-medium transition-colors border ${idx === 0 ? 'bg-primary text-primary-foreground border-primary' : 'bg-transparent text-muted-foreground border-border hover:border-primary/50 hover:text-foreground'}`}
                >
                  {category.label}
                </button>
             ))}
          </div>
        </div>
      </section>

      {/* 3. Articles Grid */}
      <section className="py-24 bg-muted/10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
             {articles.map((article) => {
                // Map to real images from registry
                let imgSrc: string = images.hero.about.src;
                const imgAlt = article.imageAlt || blogTeaserImages.fallbackAltText;

                if (article.id === "understanding-neuroplasticity") {
                   imgSrc = images.blog.neuroplasticity.src;
                } else if (article.id === "post-tkr-rehab") {
                   imgSrc = images.blog.orthoRehab.src;
                } else if (article.id === "ergonomics-wfh") {
                   imgSrc = images.blog.wellness.src;
                }

                return (
                  <Card key={article.id} className="bg-background overflow-hidden border-border/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group flex flex-col h-full">
                     <div className="h-56 relative bg-muted overflow-hidden">
                        <Image
                          src={imgSrc}
                          alt={imgAlt}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                     </div>
                     <CardHeader className="pt-6">
                        <div className="flex items-center justify-between mb-3 text-muted-foreground text-xs font-medium">
                           <span className="text-primary tracking-wider uppercase">{article.category}</span>
                           <div className="flex items-center gap-3">
                              <span className="flex items-center gap-1.5"><HugeiconsIcon icon={Calendar01Icon} className="w-3.5 h-3.5" />{article.date}</span>
                              <span className="flex items-center gap-1.5"><HugeiconsIcon icon={Time01Icon} className="w-3.5 h-3.5" />{article.readTime}</span>
                           </div>
                        </div>
                        <CardTitle className="font-heading text-2xl leading-tight group-hover:text-primary transition-colors">
                           <Link href={`/blog/${article.id}`} className="focus:outline-none focus-visible:underline">
                              {article.title}
                           </Link>
                        </CardTitle>
                     </CardHeader>
                     <CardContent className="flex-1 flex flex-col justify-between">
                        <p className="text-muted-foreground leading-relaxed mb-6">{article.excerpt}</p>
                        <Button variant="link" className="p-0 h-auto self-start font-bold text-primary group-hover:underline" asChild>
                           <Link href={`/blog/${article.id}`}>{generalStrings.readArticleText}</Link>
                        </Button>
                     </CardContent>
                  </Card>
                );
             })}
          </div>
        </div>
      </section>

      {/* 4. Newsletter Signup */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
         <DotMatrixPattern opacity={0.2} />
         <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-4">{newsletter.title}</h2>
            <p className="text-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto">{newsletter.description}</p>

            {/* Form logic out of scope, purely structural */}
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" action="/" method="GET">
               <Input
                 type="email"
                 placeholder={newsletter.inputPlaceholder}
                 className="h-12 bg-primary-foreground text-primary rounded-full px-6 placeholder:text-muted-foreground/60 border-0 focus-visible:ring-2 focus-visible:ring-primary-foreground"
                 required
               />
               <Button type="submit" variant="secondary" className="h-12 rounded-full px-8 font-bold shrink-0">
                  {newsletter.buttonText}
               </Button>
            </form>
         </div>
      </section>

    </div>
  );
}
