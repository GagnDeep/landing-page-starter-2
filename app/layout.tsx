import { Playfair_Display, Manrope } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const fontHeading = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
})

const fontSans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
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
        fontSans.variable,
        fontHeading.variable
      )}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
