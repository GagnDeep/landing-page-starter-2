import { NextResponse } from "next/server"
import { BLOG_POSTS_DATA } from "@/lib/clinical-data"

const BASE_URL = "https://doctorameena.com"

export async function GET() {
  const itemsXml = BLOG_POSTS_DATA.map(
    (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${BASE_URL}/blog/${post.slug}</link>
      <guid>${BASE_URL}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.publishedDate).toUTCString()}</pubDate>
      <description><![CDATA[${post.summary}]]></description>
      <author><![CDATA[${post.author.name}, ${post.author.credentials}]]></author>
    </item>`
  ).join("")

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Dr. Ameena Patel, MD, FACP | Integrative Internal Medicine Blog</title>
    <link>${BASE_URL}</link>
    <description>Peer-reviewed medical articles and evidence-based patient health insights by Dr. Ameena Patel.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    ${itemsXml}
  </channel>
</rss>`

  return new NextResponse(rssXml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  })
}
