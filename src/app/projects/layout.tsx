import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portafolio",
  description:
    "Proyectos de branding, diseño editorial, interfaces y animación de Shamy Creative Studio.",
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
