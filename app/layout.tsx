import { Inter, Playfair_Display } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const fontHeading = Playfair_Display({ subsets: ["latin"], variable: "--font-heading" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontSans.variable, fontHeading.variable, "font-sans")}
    >
      <body className="flex min-h-screen flex-col bg-background text-foreground">
        <ThemeProvider>
          <AnnouncementBar />
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
