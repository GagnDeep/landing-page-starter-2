import { BLOG_POSTS } from "@/lib/blog-data"

export async function GET() {
  const baseUrl = "https://bro.tax"

  const rssItems = BLOG_POSTS.map(
    (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid>${baseUrl}/blog/${post.slug}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${new Date(post.publishedDate).toUTCString()}</pubDate>
    </item>
  `
  ).join("")

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>bro.tax Articles & 1099 Guides</title>
    <link>${baseUrl}</link>
    <description>Zero-BS tax intelligence and calculation guides for freelancers, creators, and gig workers.</description>
    <language>en-us</language>
    ${rssItems}
  </channel>
</rss>`

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  })
}
