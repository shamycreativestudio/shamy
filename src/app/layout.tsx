import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileTabBar from "@/components/MobileTabBar";
import { TranslationProvider } from "@/components/TranslationProvider";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Shamy Creative Studio",
  description: "Branding · Diseño Editorial · UX/UI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Onest:wght@400;600;700;900&display=swap" rel="stylesheet" />
        <Script src="/displacement-utils.js" strategy="beforeInteractive" />
        <Script src="/glass-element.js" strategy="beforeInteractive" />
      </head>
      <body suppressHydrationWarning>
        <TranslationProvider>
          <Navbar />
          <PageTransition>
            {children}
          </PageTransition>
          <Footer />
          <MobileTabBar />
          <CustomCursor />
        </TranslationProvider>
      </body>
    </html>
  );
}
