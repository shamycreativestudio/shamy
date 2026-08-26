import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData, getServiceBySlug } from "@/data/servicesData";
import ServiceDetail from "./ServiceDetail";

export function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.title.es,
    description: service.tagline.es,
    openGraph: {
      title: `${service.title.es} · Shamy Creative Studio`,
      description: service.tagline.es,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    notFound();
  }
  return <ServiceDetail slug={slug} />;
}
