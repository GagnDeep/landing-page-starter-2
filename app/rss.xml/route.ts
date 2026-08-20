import { siteConfig } from "@/lib/site-config"
import { DEDUCTIONS_DATA } from "@/lib/deductions-data"

export async function GET() {
  const itemsXml = Object.values(DEDUCTIONS_DATA)
    .map((guide) => {
      const url = `${siteConfig.domain}/deductions/${guide.slug}`
      return `
    <item>
      <title><![CDATA[${guide.title}]]></title>
      <link>${url}</link>
      <guid>${url}</guid>
      <description><![CDATA[${guide.heroDescription}]]></description>
      <pubDate>${new Date().toUTCString()}</pubDate>
    </item>`
    })
    .join("")

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${siteConfig.name} — 1099 Tax Write-Off Guides</title>
    <link>${siteConfig.domain}</link>
    <description>${siteConfig.description}</description>
    <language>en-us</language>
    <atom:link href="${siteConfig.domain}/rss.xml" rel="self" type="application/rss+xml"/>
    ${itemsXml}
  </channel>
</rss>`

  return new Response(rssXml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  })
}
