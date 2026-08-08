import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const fontSans = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontHeading = Space_Grotesk({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-heading",
})

const fontMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
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
        "font-sans text-[17px] leading-[1.65] antialiased",
        fontSans.variable,
        fontHeading.variable,
        fontMono.variable
      )}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
