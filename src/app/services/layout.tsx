import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Estrategia de marca, identidad visual, diseño editorial, diseño de interfaces y motion graphics.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
