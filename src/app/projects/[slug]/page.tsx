import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, findProjectBySlug } from "@/data/projects";
import { translations } from "@/data/translations";
import ProjectDetail from "./ProjectDetail";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id.toString() }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = findProjectBySlug(slug);
  if (!project) return {};

  const title = translations.es[project.titleKey] ?? project.titleKey;
  const description = translations.es[project.descKey] ?? "";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: `/${project.coverImage}` }],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = findProjectBySlug(slug);
  if (!project) {
    notFound();
  }
  return <ProjectDetail slug={slug} />;
}
