"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { motion } from "motion/react";
import { 
  Compass, 
  Sparkle, 
  BookOpen, 
  Desktop, 
  PlayCircle,
  ArrowRight,
  CheckCircle,
  ArrowUpRight
} from "@phosphor-icons/react";
import { useTranslation } from "@/components/TranslationProvider";
import { servicesData, getServiceBySlug } from "@/data/servicesData";
import { projects } from "@/data/projects";

const iconMap = {
  Compass: Compass,
  Sparkle: Sparkle,
  BookOpen: BookOpen,
  Desktop: Desktop,
  PlayCircle: PlayCircle,
};

export default function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;
  const service = getServiceBySlug(slug);
  const { lang, t } = useTranslation();

  if (!service) {
    notFound();
  }

  const currentLang = (lang === "en" ? "en" : "es") as "es" | "en";
  const IconComponent = iconMap[service.iconName] || Compass;

  const badge = service.badge[currentLang];
  const title = service.title[currentLang];
  const tagline = service.tagline[currentLang];
  const overview = service.overview[currentLang];
  const deliverables = service.deliverables[currentLang];
  const benefits = service.benefits[currentLang];
  const faqs = service.faq[currentLang];

  const featuredProjects = projects.filter((p) =>
    service.featuredProjectIds.includes(Number(p.id))
  );

  return (
    <main id="page-content" className="service-detail-main">
      {/* 1. HERO SECTION */}
      <section className="service-hero">
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="service-hero-badge">
              <IconComponent size={16} weight="bold" />
              <span>{badge}</span>
            </div>

            <h1 className="service-hero-title">{title}</h1>
            <p className="service-hero-tagline">{tagline}</p>

            <div className="hero-cta-pill-group">
              <Link href="/brief" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                <span>{currentLang === "es" ? "Iniciar este servicio" : "Start this service"}</span>
                <ArrowRight size={18} weight="bold" />
              </Link>
              {featuredProjects.length > 0 && (
                <a href="#proyectos" className="btn-secondary">
                  {currentLang === "es" ? "Ver proyectos destacados" : "View featured work"}
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. OVERVIEW & STRATEGIC VISION */}
      <section className="container" style={{ paddingTop: "1rem", paddingBottom: "2.5rem" }}>
        <div className="service-overview-grid">
          <div>
            <span style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1.5px", color: "var(--muted)", fontWeight: 600, display: "block", marginBottom: "0.75rem" }}>
              {currentLang === "es" ? "Visión & Enfoque" : "Vision & Approach"}
            </span>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.3rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1.25rem" }}>
              {currentLang === "es" ? "Diseño con propósito para marcas que lideran" : "Purposeful design for industry leaders"}
            </h2>
            <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.65, marginBottom: "1.25rem" }}>
              {overview.p1}
            </p>
            <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.65 }}>
              {overview.p2}
            </p>
          </div>

          <div style={{
            background: "var(--panel)",
            border: "1px solid var(--border)",
            borderRadius: "20px",
            padding: "2rem",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: "0 10px 30px rgba(0,0,0,0.03)"
          }}>
            <div style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: "rgba(var(--text-rgb), 0.06)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1.5rem",
              color: "var(--text)"
            }}>
              <IconComponent size={24} weight="duotone" />
            </div>
            <blockquote style={{ fontSize: "1.1rem", fontWeight: 600, lineHeight: 1.5, color: "var(--text)", fontStyle: "italic" }}>
              &ldquo;{overview.quote}&rdquo;
            </blockquote>
            <div style={{ marginTop: "1.5rem", fontSize: "0.8rem", color: "var(--muted)", fontWeight: 500 }}>
              Shamy® Creative Studio
            </div>
          </div>
        </div>
      </section>

      {/* 3. DELIVERABLES GRID */}
      <section className="container" style={{ paddingTop: "1.5rem", paddingBottom: "3rem" }}>
        <div style={{ marginBottom: "2rem" }}>
          <span style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1.5px", color: "var(--muted)", fontWeight: 600, display: "block", marginBottom: "0.5rem" }}>
            {currentLang === "es" ? "Alcance & Entregables" : "Scope & Deliverables"}
          </span>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 800 }}>
            {currentLang === "es" ? "Lo que entregamos" : "What we deliver"}
          </h2>
        </div>

        <div className="deliverables-grid">
          {deliverables.map((deliv, idx) => (
            <div key={idx} className="deliverable-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <CheckCircle size={22} weight="fill" style={{ color: "var(--text)", flexShrink: 0 }} />
                {deliv.badge && (
                  <span style={{ fontSize: "0.75rem", padding: "0.2rem 0.65rem", borderRadius: "50px", background: "rgba(var(--text-rgb), 0.06)", color: "var(--text)", fontWeight: 600 }}>
                    {deliv.badge}
                  </span>
                )}
              </div>
              <h3 className="deliverable-card-title">{deliv.title}</h3>
              <p className="deliverable-card-desc">{deliv.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FEATURED PROJECTS SHOWCASE */}
      {featuredProjects.length > 0 && (
        <section id="proyectos" className="container" style={{ paddingTop: "1.5rem", paddingBottom: "3rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <span style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1.5px", color: "var(--muted)", fontWeight: 600, display: "block", marginBottom: "0.4rem" }}>
                {currentLang === "es" ? "Casos de Estudio" : "Case Studies"}
              </span>
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 800 }}>
                {currentLang === "es" ? "Proyectos relacionados" : "Featured related work"}
              </h2>
            </div>
            <Link 
              href="/projects" 
              style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--text)", textDecoration: "none", fontWeight: 600, fontSize: "0.9rem" }}
            >
              <span>{currentLang === "es" ? "Ver todo el portafolio" : "Explore full portfolio"}</span>
              <ArrowUpRight size={16} weight="bold" />
            </Link>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "1.5rem"
          }}>
            {featuredProjects.map((proj) => (
              <Link
                key={proj.id}
                href={`/projects/${proj.id}`}
                className="project-card-v2"
              >
                <div className="card-v2-media">
                  <Image
                    src={`/${proj.coverImage}`}
                    alt={t(proj.titleKey)}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="card-v2-img"
                  />
                  <div className="card-v2-overlay">
                    <h3 className="card-v2-title">{t(proj.titleKey)}</h3>
                    <span className="card-v2-category">{proj.category} · {proj.year}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* 5. STRATEGIC FAQ */}
      <section className="container" style={{ paddingTop: "1.5rem", paddingBottom: "3rem" }}>
        <div style={{ marginBottom: "2rem" }}>
          <span style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1.5px", color: "var(--muted)", fontWeight: 600, display: "block", marginBottom: "0.4rem" }}>
            {currentLang === "es" ? "Preguntas Frecuentes" : "Frequently Asked Questions"}
          </span>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 800 }}>
            {currentLang === "es" ? "Dudas comunes resueltas" : "Common questions resolved"}
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "1.25rem" }}>
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              style={{
                background: "var(--panel)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                padding: "1.5rem",
              }}
            >
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "0.5rem", color: "var(--text)", lineHeight: 1.3 }}>
                {faq.question}
              </h3>
              <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. ORGANIC FLOATING CTA */}
      <section className="container text-center" style={{ paddingTop: "2rem", paddingBottom: "4rem" }}>
        <div className="cta-section">
          <div className="cta-content">
            <span style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1.5px", color: "var(--muted)", fontWeight: 600, display: "block", marginBottom: "0.75rem" }}>
              {currentLang === "es" ? "Comienza hoy" : "Get started today"}
            </span>
            <h2 className="cta-title">
              {currentLang === "es" ? "¿Listo para dar el siguiente paso?" : "Ready to take the next step?"}
            </h2>
            <Link href="/brief" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <span>{currentLang === "es" ? "Iniciar brief interactivo" : "Start interactive brief"}</span>
              <ArrowRight size={18} weight="bold" />
            </Link>
            <p className="mt-8 text-muted">{t("cta.email")}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
