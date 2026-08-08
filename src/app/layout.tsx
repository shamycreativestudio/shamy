import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Shamy Creative Studio",
  description: "Branding · Diseño Editorial · UX/UI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${onest.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
