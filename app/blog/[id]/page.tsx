import { blogContent } from "@/content/blog";
import { images } from "@/lib/images";
import {
  FadeIn,
  ParallaxImage,
  AnimatedText,
} from "@/components/visuals";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

// Next.js dynamic routing implementation
export default function BlogDetailPage({ params }: { params: { id: string } }) {
  // Find the post from our dummy content
  const post = blogContent.articleGrid.posts.find((p) => p.id === params.id);

  // If no post matches the ID, show a 404
  if (!post) {
    notFound();
  }

  // Fallback to hero image if we don't map perfectly in this demo
  const coverImage = images.blogHero;

  return (
    <main className="min-h-screen w-full bg-background pt-24 pb-32">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <FadeIn>
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest text-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{blogContent.detail.backLabel}</span>
          </Link>
        </FadeIn>
      </div>

      {/* Hero Header */}
      <header className="max-w-4xl mx-auto px-6 mb-16 text-center">
        <FadeIn>
          <div className="flex items-center justify-center gap-4 text-xs tracking-widest uppercase text-muted-foreground mb-6">
            <span>{post.category}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </FadeIn>
        <AnimatedText
          el="h1"
          text={post.title}
          className="text-4xl md:text-5xl lg:text-6xl font-heading text-foreground mb-8 leading-tight"
        />
        <FadeIn delay={0.3}>
          <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
            {post.excerpt}
          </p>
        </FadeIn>
      </header>

      {/* Cover Image */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 mb-24">
        <FadeIn direction="up">
          <div className="relative h-[60vh] md:h-[70vh] w-full">
            <ParallaxImage image={coverImage} className="absolute inset-0" priority offset={20} />
          </div>
        </FadeIn>
      </section>

      {/* Article Body (Simulated for this implementation phase) */}
      <article className="max-w-3xl mx-auto px-6">
        <div className="prose prose-lg dark:prose-invert prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground prose-p:font-light prose-p:leading-relaxed prose-a:text-foreground max-w-none">
          <FadeIn direction="up" delay={0.1}>
            <p className="first-letter:text-7xl first-letter:font-heading first-letter:mr-3 first-letter:float-left first-letter:text-foreground">
              {blogContent.detail.simulatedBody[0]}
            </p>
            <p>
              {blogContent.detail.simulatedBody[1]}
            </p>
            <h2>The Architecture of Atmosphere</h2>
            <p>
              {blogContent.detail.simulatedBody[2]}
            </p>
            <blockquote>
              "A wedding is not a production. It is a profoundly intimate narrative, expressed through the medium of hospitality."
            </blockquote>
            <p>
              {blogContent.detail.simulatedBody[3]}
            </p>
            <p>
              {blogContent.detail.simulatedBody[4]}
            </p>
          </FadeIn>
        </div>
      </article>

      {/* Author/Share Footer */}
      <footer className="max-w-3xl mx-auto px-6 mt-20 pt-10 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
        <FadeIn>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center font-heading text-lg text-foreground">
              {blogContent.detail.author.initials}
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">{blogContent.detail.author.name}</p>
              <p className="text-xs text-muted-foreground tracking-widest uppercase">{blogContent.detail.author.title}</p>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <button className="px-6 py-3 border border-border text-xs tracking-widest uppercase text-foreground hover:bg-foreground hover:text-background transition-colors">
            {blogContent.detail.shareLabel}
          </button>
        </FadeIn>
      </footer>
    </main>
  );
}
