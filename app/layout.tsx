import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Configure body font (Inter)
const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Configure heading font (Playfair Display)
const fontHeading = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata = {
  title: "Royal Flower Decoration | Premier Anand Karaj Decor in Patiala",
  description: "Specializing in exquisite Anand Karaj and premium wedding floral designs in Patiala.",
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
      className={cn("antialiased scroll-smooth", fontSans.variable, fontHeading.variable)}
    >
      <body className="min-h-screen flex flex-col font-sans">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          {/* Main content wrapper with flex-grow to push footer down */}
          <main className="flex-1 pt-[88px] relative overflow-hidden">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
