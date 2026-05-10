import { Geist_Mono, DM_Sans, Oswald } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { TopBar } from "@/components/layout/TopBar"
import { SiteHeader } from "@/components/layout/SiteHeader"
import { SiteFooter } from "@/components/layout/SiteFooter"

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-heading',
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased scroll-smooth", fontMono.variable, dmSans.variable, oswald.variable, "font-sans")}
    >
      <body className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary flex flex-col">
        <ThemeProvider>
          <TopBar />
          <SiteHeader />
          <main className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}
