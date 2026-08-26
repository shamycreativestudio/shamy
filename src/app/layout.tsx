import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Onest } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileTabBar from "@/components/MobileTabBar";
import { TranslationProvider } from "@/components/TranslationProvider";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";
import type { LangKey } from "@/data/translations";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://shamy.vercel.app";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
};

const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-onest",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Shamy Creative Studio — Branding · Diseño Editorial · UX/UI",
    template: "%s · Shamy Creative Studio",
  },
  description:
    "Boutique creative studio especializado en estrategia de marca, diseño editorial, diseño de interfaces y motion graphics.",
  keywords: [
    "branding",
    "diseño editorial",
    "UX/UI",
    "motion graphics",
    "identidad visual",
    "creative studio",
  ],
  authors: [{ name: "Shamy Creative Studio" }],
  openGraph: {
    type: "website",
    siteName: "Shamy Creative Studio",
    locale: "es_ES",
    alternateLocale: "en_US",
    url: SITE_URL,
    title: "Shamy Creative Studio — Branding · Diseño Editorial · UX/UI",
    description:
      "Branding estratégico, diseño editorial e interfaces con propósito.",
    images: [
      {
        url: "/assets/img/shamy-logotipo.svg",
        width: 512,
        height: 512,
        alt: "Shamy Creative Studio",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Shamy Creative Studio",
    description: "Branding estratégico, diseño editorial e interfaces con propósito.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const langCookie = cookieStore.get("shamy_lang")?.value;
  const lang: LangKey = langCookie === "en" ? "en" : "es";
  const theme = cookieStore.get("shamy_theme")?.value === "dark" ? "dark" : "light";

  return (
    <html lang={lang} className={`h-full antialiased ${onest.variable}`} suppressHydrationWarning>
      <head>
        <Script src="/displacement-utils.js" strategy="afterInteractive" />
        <Script src="/glass-element.js" strategy="afterInteractive" />
      </head>
      <body className={theme === "dark" ? "dark-mode" : undefined} suppressHydrationWarning>
        <TranslationProvider initialLang={lang}>
          <Navbar initialTheme={theme} />
          <PageTransition>{children}</PageTransition>
          <Footer />
          <MobileTabBar />
          <CustomCursor />
        </TranslationProvider>
      </body>
    </html>
  );
}
