import { blogContent } from "@/content/blog";
import { images } from "@/lib/images";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { SectionDivider } from "@/components/visuals/SectionDivider";

export const metadata = {
  title: `Blog Post | ${blogContent.meta.title}`,
  description: blogContent.meta.description,
};

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;

  // For Phase 6, we're using a static template that maps the ID to a post
  // In a real app, this would fetch from an API or CMS
  const post = blogContent.posts.find(p => p.id === resolvedParams.id) || blogContent.posts[0];
  const postImages = [images.gallery.g2, images.gallery.g4, images.gallery.g3];
  const imageIndex = (parseInt(post.id) || 1) % postImages.length;
  const imageSrc = postImages[imageIndex];

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-background">
      {/* 1. Article Header */}
      <section className="relative pt-16 pb-24 px-6 overflow-hidden bg-background">
        <AnimatedGradientMesh className="absolute inset-0 opacity-10 pointer-events-none" />
        <div className="container mx-auto max-w-3xl relative z-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-primary font-medium hover:underline mb-10 transition-colors">
             <HugeiconsIcon icon={ArrowLeft01Icon} strokeWidth={2} className="w-4 h-4" />
             {blogContent.labels.backToJournal}
          </Link>
          <div className="flex items-center gap-4 mb-6 text-sm font-semibold uppercase tracking-wider">
            <span className="text-primary">{post.category}</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">{post.date}</span>
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-8 leading-tight">
            {post.title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* 2. Hero Image */}
      <section className="px-6 relative z-20 -mt-12">
         <div className="container mx-auto max-w-5xl">
            <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl">
               <Image src={imageSrc} alt={post.title} fill className="object-cover" priority />
            </div>
         </div>
      </section>

      {/* 3. Article Body (Static Placeholder content formatted beautifully) */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-3xl prose prose-lg prose-headings:font-heading prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-xl">
           <p className="lead text-xl text-foreground font-medium mb-10">
             {blogContent.articleContent.lead}
           </p>

           <h2 className="text-3xl mt-12 mb-6">{blogContent.articleContent.section1.title}</h2>
           <p className="text-muted-foreground mb-6">
             {blogContent.articleContent.section1.p1}
           </p>
           <p className="text-muted-foreground mb-10">
             {blogContent.articleContent.section1.p2}
           </p>

           <blockquote className="border-l-4 border-primary pl-6 my-10 italic text-xl font-heading text-foreground">
             &quot;{blogContent.articleContent.section1.quote}&quot;
           </blockquote>

           <h2 className="text-3xl mt-12 mb-6">{blogContent.articleContent.section2.title}</h2>
           <p className="text-muted-foreground mb-6">
             {blogContent.articleContent.section2.p1}
           </p>
        </div>
      </section>

      <SectionDivider width="200px" />

      {/* 4. Related Posts */}
      <section className="py-24 bg-secondary/10 px-6">
         <div className="container mx-auto max-w-5xl">
           <h2 className="font-heading text-3xl font-bold mb-12">{blogContent.labels.moreFromJournal}</h2>
           <div className="grid md:grid-cols-2 gap-8">
              {blogContent.posts.filter(p => p.id !== post.id).slice(0, 2).map((relatedPost, idx) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`} className="group flex gap-6 items-center bg-background p-6 rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-all">
                  <div className="w-24 h-24 rounded-lg bg-muted relative overflow-hidden shrink-0">
                     <Image src={postImages[(idx + 1) % postImages.length]} alt={relatedPost.title} fill sizes="96px" className="object-cover" />
                  </div>
                  <div>
                    <p className="text-xs text-primary font-semibold mb-2">{relatedPost.category}</p>
                    <h4 className="font-bold group-hover:text-primary transition-colors text-lg">{relatedPost.title}</h4>
                  </div>
                </Link>
              ))}
           </div>
         </div>
      </section>
    </div>
  );
}

export function generateStaticParams() {
  return blogContent.posts.map((post) => ({
    id: post.id,
  }));
}
