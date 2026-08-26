import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { servicesData } from "@/data/servicesData";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://shamy-creative-studio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/services", "/projects", "/about", "/brief"].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${SITE_URL}/projects/${p.id}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  const serviceRoutes = servicesData.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes];
}
