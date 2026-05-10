import { Geist_Mono } from "next/font/google"
import { Playfair_Display, Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading-var",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
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
      className={cn("antialiased", fontMono.variable, inter.variable, playfair.variable)}
    >
      <body className="min-h-screen flex flex-col bg-background font-sans text-foreground selection:bg-primary/20 selection:text-primary">
        <ThemeProvider>
          <Header />
          <main className="flex-1 flex flex-col pt-24">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
