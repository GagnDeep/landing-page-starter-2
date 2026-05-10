import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogContent } from "@/content/blog";
import { siteImages } from "@/lib/images";
import { DotMatrixGrid } from "@/components/visuals/DotMatrixGrid";
import { CTAGlow } from "@/components/visuals/CTAGlow";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon, Calendar01Icon, UserIcon } from "@hugeicons/core-free-icons";

// Mocking static params for the dynamic route based on content/blog.ts
export function generateStaticParams() {
  return blogContent.mockPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogContent.mockPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const { postLayoutStrings } = blogContent;

  // Select an image based on the post index just for demo purposes in this phase
  const postIndex = blogContent.mockPosts.findIndex((p) => p.slug === resolvedParams.slug);
  const heroImage = postIndex === 0
    ? siteImages.blog.mockPost1
    : postIndex === 1
      ? siteImages.blog.mockPost2
      : siteImages.blog.mockPost3;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Article Header & Back Link */}
      <section className="pt-24 pb-12 container px-4 md:px-6 mx-auto max-w-4xl">
        <Link href="/blog" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-colors">
          <HugeiconsIcon icon={ArrowLeft01Icon} className="mr-2" size={16} />
          {postLayoutStrings.backToBlog}
        </Link>

        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-muted-foreground">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">{post.category}</span>
            <span className="flex items-center gap-1.5"><HugeiconsIcon icon={Calendar01Icon} size={16} /> {post.date}</span>
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 pt-6 border-t border-border mt-8">
            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
              <HugeiconsIcon icon={UserIcon} size={20} />
            </div>
            <div>
              <div className="text-sm font-medium text-foreground">{post.author}</div>
              <div className="text-xs text-muted-foreground">{post.authorRole}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="container px-4 md:px-6 mx-auto max-w-5xl mb-16">
        <div className="relative aspect-video rounded-3xl overflow-hidden border border-border shadow-md">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Article Body (Simulated Rich Text) */}
      <article className="container px-4 md:px-6 mx-auto max-w-3xl pb-24">
        {/* We use @tailwindcss/typography (prose) for styling the content */}
        <div
          className="prose prose-lg dark:prose-invert prose-headings:font-heading prose-a:text-primary hover:prose-a:text-primary/80 max-w-none"
          dangerouslySetInnerHTML={{ __html: post.bodyHtml }}
        />

        {/* Inline CTA */}
        <div className="my-16 bg-primary/5 border border-primary/10 rounded-2xl p-8 text-center relative overflow-hidden">
          <DotMatrixGrid />
          <div className="relative z-10 space-y-4">
            <h3 className="font-heading text-2xl font-bold text-foreground">{postLayoutStrings.inlineCta.headline}</h3>
            <p className="text-muted-foreground">{postLayoutStrings.inlineCta.body}</p>
            <div className="pt-2">
              <CTAGlow>
                <Link href={postLayoutStrings.inlineCta.btnHref} className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                  {postLayoutStrings.inlineCta.btnLabel}
                </Link>
              </CTAGlow>
            </div>
          </div>
        </div>

        {/* Share & Bio */}
        <div className="border-t border-border pt-8 mt-16 flex flex-col md:flex-row gap-8 justify-between items-start md:items-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground shrink-0">
              <HugeiconsIcon icon={UserIcon} size={24} />
            </div>
            <div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider font-bold mb-1">{postLayoutStrings.authorBioPrefix}</div>
              <div className="font-medium text-foreground">{post.author}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-muted-foreground">{postLayoutStrings.shareThis}</span>
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <span className="text-xs font-bold">X</span>
              </button>
              <button className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <span className="text-xs font-bold">in</span>
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
