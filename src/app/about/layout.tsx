import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre el estudio",
  description:
    "Conoce la historia, filosofía y valores detrás de Shamy Creative Studio.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
