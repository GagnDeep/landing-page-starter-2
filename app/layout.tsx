import { Figtree, Geist_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar, Footer } from "@/components/layout-shell"
import { cn } from "@/lib/utils"

const fontSans = Figtree({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "bro.tax",
    url: "https://bro.tax",
    logo: "https://bro.tax/public/images/og-default.png",
    description:
      "Plain-English tax estimates and deduction intelligence for US freelancers, creators, gig workers, and crypto traders.",
    priceRange: "$0 - $149",
    areaServed: "US",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  }

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "flex min-h-screen flex-col font-sans antialiased",
        fontSans.variable,
        fontMono.variable
      )}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-1 flex-col bg-background text-foreground">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
