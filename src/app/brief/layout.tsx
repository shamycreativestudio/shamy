import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brief Interactivo",
  description:
    "Cuéntanos los detalles de tu proyecto a través de nuestro brief interactivo.",
};

export default function BriefLayout({ children }: { children: React.ReactNode }) {
  return children;
}
