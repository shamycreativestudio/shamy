"use client";

import { use } from "react";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "@phosphor-icons/react";
import { useTranslation } from "@/components/TranslationProvider";

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { lang, t } = useTranslation();
  const { slug } = use(params);
  
  const currentIndex = projects.findIndex(p => 
    p.id.toString() === slug || 
    p.titleKey.split(".")[2]?.toLowerCase() === slug.toLowerCase()
  );

  if (currentIndex === -1) {
    notFound();
  }

  const project = projects[currentIndex];
  const title = t(project.titleKey);

  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1];
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0];

  return (
    <main id="page-content">
      {/* 1. Cinematic Project Cover Hero */}
      <header className="project-detail-hero" style={{ position: "relative", minHeight: "65vh", display: "flex", alignItems: "flex-end", overflow: "hidden", padding: "6rem 0 3rem 0" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image 
            src={`/${project.coverImage}`}
            alt={title}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 60%, var(--bg) 100%)" }} />
        </div>

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link 
              href="/projects" 
              style={{ 
                display: "inline-flex", 
                alignItems: "center", 
                gap: "8px", 
                color: "rgba(255, 255, 255, 0.8)", 
                textDecoration: "none", 
                fontSize: "0.85rem", 
                fontWeight: 500,
                marginBottom: "1.5rem",
                background: "rgba(0, 0, 0, 0.4)",
                backdropFilter: "blur(8px)",
                padding: "6px 14px",
                borderRadius: "50px",
                border: "1px solid rgba(255, 255, 255, 0.2)"
              }}
            >
              <ArrowLeft size={14} weight="bold" />
              <span>{t("nav.work")}</span>
            </Link>

            <div>
              <span style={{ 
                display: "inline-block",
                textTransform: "capitalize", 
                fontSize: "0.85rem", 
                color: "rgba(255, 255, 255, 0.75)", 
                letterSpacing: "1px",
                marginBottom: "0.5rem"
              }}>
                {project.category} · {project.year}
              </span>
              <h1 style={{ 
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)", 
                fontWeight: 900, 
                color: "#ffffff",
                letterSpacing: "-0.03em",
                lineHeight: 1
              }}>
                {title}
              </h1>
            </div>
          </motion.div>
        </div>
      </header>

      {/* 2. Project Case Details Section */}
      <section className="container" style={{ padding: "4rem 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", marginBottom: "4rem" }}>
          <div>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem", fontWeight: 700 }}>
              {t("modal.challenge") || "El Desafío"}
            </h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: "1.05rem" }}>
              {t(project.challengeKey || project.descKey)}
            </p>

            {project.solutionKey && (
              <div style={{ marginTop: "2.5rem" }}>
                <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem", fontWeight: 700 }}>
                  {t("modal.solution") || "La Solución"}
                </h2>
                <p style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: "1.05rem" }}>
                  {t(project.solutionKey)}
                </p>
              </div>
            )}
          </div>

          <div>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem", fontWeight: 700 }}>
              {t("modal.deliverables") || "Entregables"}
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "2.5rem" }}>
              {project.deliverables?.map(d => (
                <span 
                  key={d} 
                  style={{
                    padding: "6px 16px",
                    borderRadius: "50px",
                    background: "var(--panel)",
                    border: "1px solid var(--border)",
                    color: "var(--text)",
                    fontSize: "0.85rem",
                    fontWeight: 500
                  }}
                >
                  {d}
                </span>
              ))}
            </div>
            
            {project.colors && project.colors.length > 0 && (
              <div>
                <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem", fontWeight: 700 }}>
                  {t("modal.palette") || "Paleta de Color"}
                </h2>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  {project.colors.map(c => (
                    <div 
                      key={c} 
                      style={{ 
                        width: "44px", 
                        height: "44px", 
                        borderRadius: "50%", 
                        backgroundColor: c, 
                        border: "2px solid var(--border)",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                      }} 
                      title={c} 
                    />
                  ))}
                </div>
              </div>
            )}

            {project.url && (
              <div style={{ marginTop: "2.5rem" }}>
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary"
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
                >
                  <span>{t("modal.visit") || "Visitar proyecto"}</span>
                  <ArrowUpRight size={18} weight="bold" />
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. Full-Width Gallery Images / Video Showcase */}
      <section style={{ paddingBottom: "6rem" }}>
        {project.gallery.map((mediaSrc, idx) => {
          const isVideo = mediaSrc.endsWith(".mp4") || mediaSrc.endsWith(".webm");
          return (
            <div key={idx} style={{ width: "100%", marginBottom: "8px", overflow: "hidden" }}>
              {isVideo ? (
                <video 
                  src={`/${mediaSrc}`}
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              ) : (
                <div style={{ position: "relative", width: "100%", minHeight: "400px" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={`/${mediaSrc}`}
                    alt={`${title} - elemento ${idx + 1}`}
                    loading="lazy"
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* 4. Previous / Next Project Navigation Bar */}
      <section className="container py-20">
        <div style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center", 
          flexWrap: "wrap", 
          gap: "2rem",
          padding: "2.5rem 2rem",
          background: "var(--panel)",
          borderRadius: "24px",
          border: "1px solid var(--border)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.03)"
        }}>
          <Link 
            href={`/projects/${prevProject.id}`}
            style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "14px", 
              textDecoration: "none", 
              color: "var(--text)" 
            }}
          >
            <div style={{
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              background: "rgba(var(--text-rgb), 0.06)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <ArrowLeft size={20} weight="bold" />
            </div>
            <div>
              <span style={{ fontSize: "0.75rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "1px", display: "block" }}>
                {lang === "en" ? "Previous" : "Anterior"}
              </span>
              <span style={{ fontWeight: 700, fontSize: "1.1rem" }}>
                {t(prevProject.titleKey)}
              </span>
            </div>
          </Link>

          <Link 
            href={`/projects/${nextProject.id}`}
            style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "14px", 
              textDecoration: "none", 
              color: "var(--text)",
              textAlign: "right" 
            }}
          >
            <div>
              <span style={{ fontSize: "0.75rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "1px", display: "block" }}>
                {lang === "en" ? "Next" : "Siguiente"}
              </span>
              <span style={{ fontWeight: 700, fontSize: "1.1rem" }}>
                {t(nextProject.titleKey)}
              </span>
            </div>
            <div style={{
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              background: "rgba(var(--text-rgb), 0.06)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <ArrowRight size={20} weight="bold" />
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
