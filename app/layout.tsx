import { Inter, Merriweather } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontHeading = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-heading",
})

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Armaan Driving School",
    default: "Armaan Driving School | Govt. Registered in Sector 47, Chandigarh",
  },
  description: "Build confidence behind the wheel with Chandigarh's premier, government-registered driving school. Specializing in calm, methodical instruction for beginners.",
  metadataBase: new URL("https://armaandriving.com"),
  openGraph: {
    title: "Armaan Driving School | Sector 47, Chandigarh",
    description: "Build confidence behind the wheel with Chandigarh's premier, government-registered driving school.",
    url: "https://armaandriving.com",
    siteName: "Armaan Driving School",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Armaan Driving School | Sector 47, Chandigarh",
    description: "Build confidence behind the wheel with Chandigarh's premier driving school.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontHeading.variable, fontSans.variable, "font-sans")}
    >
      <body className="flex flex-col min-h-screen relative">
        <ThemeProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        {/* LocalBusiness Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Armaan Driving School",
              "image": "https://armaandriving.com/logo.png",
              "url": "https://armaandriving.com",
              "telephone": "+919876543210",
              "priceRange": "₹₹",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Sector 47",
                "addressLocality": "Chandigarh",
                "postalCode": "160047",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 30.7100,
                "longitude": 76.7600
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
                  ],
                  "opens": "07:00",
                  "closes": "19:00"
                }
              ]
            })
          }}
        />
      </body>
    </html>
  )
}
