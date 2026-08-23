"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react";
import { projects } from "@/data/projects";
import { useTranslation } from "@/components/TranslationProvider";

export default function ProjectsPage() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("all");

  const filterTabs = [
    { key: "all", label: t("filter.all") },
    { key: "branding", label: t("filter.branding") },
    { key: "coding", label: t("filter.coding") },
    { key: "animating", label: t("filter.animating") },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <main id="page-content">
      {/* 1. Minimal Portfolio Hero */}
      <section className="hero-asymmetric" style={{ paddingBottom: "1.5rem" }}>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <motion.h1 
            className="hero-headline"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {t("portfolio.title") || t("nav.work")}
          </motion.h1>
          <motion.p 
            className="hero-desc"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            {t("portfolio.subtitle") || t("hero.subtitle")}
          </motion.p>
        </div>
      </section>

      {/* 2. Filter Pills */}
      <section className="container" style={{ paddingTop: "0" }}>
        <div className="filters" style={{ justifyContent: "flex-start", marginBottom: "2.5rem", gap: "8px" }}>
          {filterTabs.map((tab) => {
            const isActive = filter === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                className="filter-pill-wrapper"
                onClick={() => setFilter(tab.key)}
                style={{
                  position: "relative",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: "8px 0",
                  width: "115px",
                  minWidth: "115px",
                  borderRadius: "50px",
                  fontSize: "0.85rem",
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? "var(--bg)" : "var(--text)",
                  transition: "color 0.25s ease",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="portfolio-filter-pill"
                    className="filter-active-pill"
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "50px",
                      background: "var(--text)",
                      zIndex: 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
                <span style={{ position: "relative", zIndex: 1 }}>
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* 3. Projects Grid v2 with 4:3 Ratio and Integrated Glass Overlay */}
        <motion.div 
          className="portfolio-grid-v2"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, filter: "blur(6px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.95, filter: "blur(6px)" }}
                  transition={{ duration: 0.4, delay: idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link 
                    href={`/projects/${project.id}`} 
                    className="project-card-v2"
                  >
                    <div className="card-v2-media">
                      <Image
                        src={`/${project.coverImage}`}
                        alt={t(project.titleKey)}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="card-v2-img"
                      />
                      <div className="card-v2-overlay">
                        <h2 className="card-v2-title">{t(project.titleKey)}</h2>
                        <span className="card-v2-category">{project.category} · {project.year}</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))
            ) : (
              <p className="no-results" style={{ gridColumn: "1 / -1", textAlign: "center", padding: "4rem 0" }}>
                {t("portfolio.noResults")}
              </p>
            )}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* 4. CTA Final */}
      <section id="contact" className="container py-20 text-center">
        <div className="cta-section">
          <div className="cta-content">
            <h2 className="text-3xl font-bold mb-8">{t("cta.title")}</h2>
            <Link href="/brief" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <span>{t("cta.button")}</span>
              <ArrowRight size={18} weight="bold" />
            </Link>
            <p className="mt-8 text-muted">{t("cta.email")}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
