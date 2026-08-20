import { Figtree, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { JsonLd } from "@/components/json-ld"
import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"

const fontSans = Figtree({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "bro.tax — Tax Filing & Estimator for Freelancers & Creators",
    template: "%s | bro.tax",
  },
  description: siteConfig.description,
  keywords: [
    "1099 tax calculator",
    "freelance tax calculator",
    "self employment tax rate 2025",
    "schedule c deductions list",
    "flat rate cpa filing",
    "uber driver tax write offs",
    "onlyfans tax calculator",
  ],
  authors: [{ name: "bro.tax Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.domain,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.domain}/images/hero-freelancer.webp`,
        width: 1200,
        height: 800,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.domain}/images/hero-freelancer.webp`],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "font-sans antialiased",
        fontSans.variable,
        fontMono.variable
      )}
    >
      <body className="flex min-h-screen flex-col bg-background text-foreground">
        <ThemeProvider>
          <JsonLd />
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}
