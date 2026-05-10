import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogContent } from "@/content/blog";
import { IMAGES } from "@/lib/images";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { AnimatedGradientMesh } from "@/components/visuals";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogContent.posts.find(p => p.slug === slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | Bawa Caterers Journal`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogContent.posts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  const image = IMAGES.blog[post.imageKey as keyof typeof IMAGES.blog] || IMAGES.blog.placeholder;

  return (
    <article className="flex flex-col w-full overflow-hidden bg-background">

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-muted/30 border-b border-border text-center px-4 md:px-6">
        <AnimatedGradientMesh className="opacity-20" />
        <div className="container relative z-10 max-w-4xl mx-auto space-y-6">
          <div className="flex justify-center mb-8">
            <Button asChild variant="ghost" className="rounded-full text-muted-foreground hover:text-foreground">
              <Link href="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Journal
              </Link>
            </Button>
          </div>
          <span className="text-primary font-medium tracking-widest uppercase text-sm">{post.date}</span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground leading-tight">
            {post.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto italic">
            By {post.author}
          </p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-xl border border-border">
            <Image
              src={image.url}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
            />
          </div>
        </div>
      </section>

      {/* Content Body */}
      <section className="py-12 pb-32">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto">
          <div className="prose prose-lg dark:prose-invert prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary hover:prose-a:text-primary/80 leading-relaxed">
            {post.content.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

    </article>
  );
}
