import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

// Configure primary font (Headings) - Playfair Display
const fontHeading = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "700"],
  display: "swap",
});

// Configure secondary font (Body/UI) - Lato
const fontSans = Lato({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Purba Fashion Makers",
  description: "Bespoke tailoring destination in Patiala.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased selection:bg-primary selection:text-primary-foreground",
        fontHeading.variable,
        fontSans.variable
      )}
    >
      <body className="min-h-screen flex flex-col font-sans">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
