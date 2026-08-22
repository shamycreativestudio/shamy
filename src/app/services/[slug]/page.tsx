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
  const processSteps = service.process[currentLang];
  const benefits = service.benefits[currentLang];
  const faqs = service.faq[currentLang];

  const featuredProjects = projects.filter((p) =>
    service.featuredProjectIds.includes(Number(p.id))
  );

  return (
    <main id="page-content" className="service-detail-main">
      {/* 1. HERO SECTION */}
      <section className="service-hero">
        <div className="hero-ambient-orb" aria-hidden="true" />
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
              <a href="#proyectos" className="btn-secondary">
                {currentLang === "es" ? "Ver proyectos destacados" : "View featured work"}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. OVERVIEW & STRATEGIC VISION */}
      <section className="container">
        <div className="service-overview-grid">
          <div>
            <span style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1.5px", color: "var(--muted)", fontWeight: 600, display: "block", marginBottom: "1rem" }}>
              {currentLang === "es" ? "Visión & Enfoque" : "Vision & Approach"}
            </span>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "1.5rem" }}>
              {currentLang === "es" ? "Diseño con propósito para marcas que lideran" : "Purposeful design for industry leaders"}
            </h2>
            <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
              {overview.p1}
            </p>
            <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.7 }}>
              {overview.p2}
            </p>
          </div>

          <div style={{
            background: "var(--panel)",
            border: "1px solid var(--border)",
            borderRadius: "24px",
            padding: "2.5rem",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: "0 10px 30px rgba(0,0,0,0.04)"
          }}>
            <div style={{
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              background: "rgba(var(--text-rgb), 0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "2rem",
              color: "var(--text)"
            }}>
              <IconComponent size={28} weight="duotone" />
            </div>
            <blockquote style={{ fontSize: "1.2rem", fontWeight: 600, lineHeight: 1.5, color: "var(--text)", fontStyle: "italic" }}>
              &ldquo;{overview.quote}&rdquo;
            </blockquote>
            <div style={{ marginTop: "2rem", fontSize: "0.85rem", color: "var(--muted)", fontWeight: 500 }}>
              Shamy® Creative Studio Manifesto
            </div>
          </div>
        </div>
      </section>

      {/* 3. DELIVERABLES GRID */}
      <section className="container">
        <div className="text-center" style={{ maxWidth: "600px", margin: "0 auto 3rem auto" }}>
          <span style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1.5px", color: "var(--muted)", fontWeight: 600, display: "block", marginBottom: "0.75rem" }}>
            {currentLang === "es" ? "Alcance & Entregables" : "Scope & Deliverables"}
          </span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800 }}>
            {currentLang === "es" ? "Lo que entregamos" : "What we deliver"}
          </h2>
        </div>

        <div className="deliverables-grid">
          {deliverables.map((deliv, idx) => (
            <div key={idx} className="deliverable-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                <div className="deliverable-card-icon">
                  <CheckCircle size={22} weight="fill" />
                </div>
                {deliv.badge && (
                  <span style={{ fontSize: "0.75rem", padding: "0.25rem 0.75rem", borderRadius: "50px", background: "rgba(var(--text-rgb), 0.06)", color: "var(--text)", fontWeight: 600 }}>
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

      {/* 4. METHODOLOGY & 4-STEP PROCESS */}
      <section className="container py-20">
        <div className="text-center" style={{ maxWidth: "600px", margin: "0 auto 3rem auto" }}>
          <span style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1.5px", color: "var(--muted)", fontWeight: 600, display: "block", marginBottom: "0.75rem" }}>
            {currentLang === "es" ? "Metodología" : "Methodology"}
          </span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800 }}>
            {currentLang === "es" ? "Cómo trabajamos" : "How we work"}
          </h2>
        </div>

        <div className="process-steps-container">
          {processSteps.map((step, idx) => (
            <div key={idx} className="process-step-item">
              <div className="process-step-num">{step.step}</div>
              <h3 className="process-step-title">{step.title}</h3>
              <p className="process-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. STRATEGIC BENEFITS */}
      <section className="container">
        <div style={{
          background: "var(--panel)",
          border: "1px solid var(--border)",
          borderRadius: "24px",
          padding: "3.5rem 2.5rem",
          boxShadow: "0 10px 40px rgba(0,0,0,0.03)"
        }}>
          <div className="text-center" style={{ maxWidth: "600px", margin: "0 auto 3rem auto" }}>
            <span style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1.5px", color: "var(--muted)", fontWeight: 600, display: "block", marginBottom: "0.75rem" }}>
              {currentLang === "es" ? "Impacto en Negocio" : "Business Impact"}
            </span>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 800 }}>
              {currentLang === "es" ? "¿Por qué invertir en este servicio?" : "Why invest in this service?"}
            </h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2.5rem"
          }}>
            {benefits.map((ben, idx) => (
              <div key={idx}>
                <div style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--text)" }}>
                  {ben.title}
                </div>
                <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                  {ben.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FEATURED PROJECTS SHOWCASE */}
      {featuredProjects.length > 0 && (
        <section id="proyectos" className="container py-20">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <span style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1.5px", color: "var(--muted)", fontWeight: 600, display: "block", marginBottom: "0.5rem" }}>
                {currentLang === "es" ? "Casos de Estudio" : "Case Studies"}
              </span>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800 }}>
                {currentLang === "es" ? "Proyectos relacionados" : "Featured related work"}
              </h2>
            </div>
            <Link 
              href="/projects" 
              style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--text)", textDecoration: "none", fontWeight: 600 }}
            >
              <span>{currentLang === "es" ? "Ver todo el portafolio" : "Explore full portfolio"}</span>
              <ArrowUpRight size={18} weight="bold" />
            </Link>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "2rem"
          }}>
            {featuredProjects.map((proj) => (
              <Link
                key={proj.id}
                href={`/projects/${proj.id}`}
                className="project-card-v2"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="card-v2-image-wrap" style={{ aspectRatio: "4/3", borderRadius: "16px", overflow: "hidden", position: "relative" }}>
                  <Image
                    src={`/${proj.coverImage}`}
                    alt={t(proj.titleKey)}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="card-v2-img"
                    style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                  />
                  <div className="card-v2-overlay" style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: "1.5rem"
                  }}>
                    <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1px" }}>
                      {proj.category} · {proj.year}
                    </span>
                    <h3 style={{ color: "#ffffff", fontSize: "1.3rem", fontWeight: 700, marginTop: "0.25rem" }}>
                      {t(proj.titleKey)}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* 7. STRATEGIC FAQ */}
      <section className="container">
        <div className="text-center" style={{ maxWidth: "600px", margin: "0 auto 3rem auto" }}>
          <span style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1.5px", color: "var(--muted)", fontWeight: 600, display: "block", marginBottom: "0.75rem" }}>
            {currentLang === "es" ? "Preguntas Frecuentes" : "Frequently Asked Questions"}
          </span>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 800 }}>
            {currentLang === "es" ? "Dudas comunes resueltas" : "Common questions resolved"}
          </h2>
        </div>

        <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              style={{
                background: "var(--panel)",
                border: "1px solid var(--border)",
                borderRadius: "20px",
                padding: "2rem",
                transition: "border-color 0.3s ease"
              }}
            >
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--text)" }}>
                {faq.question}
              </h3>
              <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. ORGANIC FLOATING CTA */}
      <section className="container py-20 text-center">
        <div className="cta-section">
          <div className="cta-content">
            <span style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1.5px", color: "var(--muted)", fontWeight: 600, display: "block", marginBottom: "1rem" }}>
              {currentLang === "es" ? "Comienza hoy" : "Get started today"}
            </span>
            <h2 className="text-3xl font-bold mb-8" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
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
