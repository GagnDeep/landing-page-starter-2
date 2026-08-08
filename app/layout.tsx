import { Libre_Franklin, JetBrains_Mono } from "next/font/google"
import { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const fontSans = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
})

const fontHeading = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["600"],
})

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://aiandinvesting.com"),
  title: {
    template: "%s | AI and Investing",
    default: "AI and Investing",
  },
  description: "Independent lab tracking AI stock-picking tools claims.",
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
        fontHeading.variable,
        fontMono.variable
      )}
    >
      <body className="flex min-h-screen flex-col text-[17px] leading-[1.7]">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
