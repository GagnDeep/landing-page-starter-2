import { blogContent } from "@/content/blog";
import { IMAGES } from "@/lib/images";
import { FadeIn } from "@/components/visuals/FadeIn";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// In a real app, this would fetch from a CMS.
// For now, we mock the content based on the slug.
export function generateStaticParams() {
  const featuredSlug = blogContent.featuredArticle.href.split('/').pop() || "";
  const recentSlugs = blogContent.recentPosts.map(post => post.href.split('/').pop() || "");

  return [
    { slug: featuredSlug },
    ...recentSlugs.map(slug => ({ slug }))
  ].filter(param => param.slug !== "");
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Find the post data (mock lookup)
  const isFeatured = blogContent.featuredArticle.href.includes(slug);
  const recentPost = blogContent.recentPosts.find(p => p.href.includes(slug));

  if (!isFeatured && !recentPost) {
    notFound();
  }

  const post = isFeatured ? blogContent.featuredArticle : recentPost!;
  const imageSrc = isFeatured ? IMAGES.blogPost1.src : IMAGES.blogPost2.src;

  return (
    <div className="flex flex-col w-full overflow-hidden pt-24 pb-32 bg-background">
      <article className="container mx-auto px-6 md:px-12 max-w-4xl">
        <Link href="/blog" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-12 group">
          <ArrowLeft className="mr-2 h-4 w-4 transform group-hover:-translate-x-1 transition-transform" />
          Back to Journal
        </Link>

        <FadeIn>
          <header className="mb-12 text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <span className="text-sm uppercase tracking-widest text-primary font-semibold">
                {post.category}
              </span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span className="text-sm text-muted-foreground uppercase tracking-widest">
                {post.date}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading text-foreground mb-8 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {post.excerpt}
            </p>
          </header>
        </FadeIn>

        <FadeIn delay={0.2} className="relative aspect-[21/9] w-full mb-16 shadow-xl">
          <Image src={imageSrc} alt={post.title} fill className="object-cover" priority />
        </FadeIn>

        <div className="prose prose-lg dark:prose-invert prose-headings:font-heading prose-headings:font-medium prose-p:text-muted-foreground prose-p:leading-relaxed max-w-3xl mx-auto">
          <p>
            This is a simulated blog post body for <strong>{post.title}</strong>. In a fully integrated phase, this content would be pulled directly from a headless CMS or local Markdown files. For now, it serves to demonstrate the exact typographic hierarchy required by the design system.
          </p>
          <h2>The Philosophy Behind the Details</h2>
          <p>
            At Guide Events, we approach every celebration not just as planners, but as artisans. The architecture of a truly luxurious event relies heavily on the unseen details. When executing a destination wedding, the logistics must be invisible to the guests, allowing them to remain completely immersed in the experience.
          </p>
          <blockquote>
            "True luxury is the absence of friction. It is the ability to be a guest at your own celebration."
          </blockquote>
          <h3>Navigating Cross-Border Planning</h3>
          <p>
            For our NRI clientele, the challenge is often distance. We bridge this gap utilizing sophisticated digital portals that provide 24/7 access to design iterations, vendor contracts, and real-time budget tracking. This ensures absolute transparency and control.
          </p>
          <ul>
            <li>Comprehensive timeline creation from 12 months out.</li>
            <li>Direct negotiations with premier global vendors.</li>
            <li>Customized, culturally authentic guest experiences.</li>
          </ul>
          <p>
            Our commitment remains unwavering: to translate intricate visions into breathtaking, stress-free realities.
          </p>
        </div>
      </article>
    </div>
  );
}