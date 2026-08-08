import { MetadataRoute } from "next"
import { SITE } from "@/lib/site"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about/",
    "/disclosures/",
    "/editorial-policy/",
    "/methodology/",
    "/leaderboard/",
    "/data/",
    "/reviews/danelfin/",
    "/reviews/tickeron/",
    "/reviews/trade-ideas-holly-ai/",
    "/reviews/trendspider/",
    "/reviews/composer/",
    "/reviews/magnifi/",
    "/reviews/seeking-alpha-quant-ratings/",
    "/reviews/stockstory/",
    "/reviews/finchat/",
    "/vs/trendspider-vs-trade-ideas/",
    "/vs/danelfin-vs-tickeron/",
    "/guides/is-ai-good-at-picking-stocks/",
    "/guides/can-ai-predict-the-stock-market/",
    "/guides/ai-investing-scams-red-flags/",
  ]

  return routes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }))
}
