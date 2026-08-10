import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const fontHeading = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-heading",
})

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = JetBrains_Mono({
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
      className={cn(
        "font-sans antialiased",
        fontHeading.variable,
        fontSans.variable,
        fontMono.variable
      )}
    >
      <body>
        <ThemeProvider defaultTheme="dark" enableSystem={false}>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-background focus:p-4 focus:text-foreground"
          >
            Skip to main content
          </a>
          <div id="main-content">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
