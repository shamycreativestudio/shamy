"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { 
  ArrowRight, 
  Target, 
  Eye, 
  Crown
} from "@phosphor-icons/react";
import { useTranslation } from "@/components/TranslationProvider";

export default function AboutPage() {
  const { t } = useTranslation();

  const values = [
    {
      icon: Eye,
      title: t("about.values.v1.title"),
      desc: t("about.values.v1.desc"),
      highlight: "01 / Precisión",
    },
    {
      icon: Target,
      title: t("about.values.v2.title"),
      desc: t("about.values.v2.desc"),
      highlight: "02 / Estrategia",
    },
    {
      icon: Crown,
      title: t("about.values.v3.title"),
      desc: t("about.values.v3.desc"),
      highlight: "03 / Impacto",
    },
  ];

  return (
    <main id="page-content">
      {/* 1. Asymmetric About Hero: Left Content & Right Bleed PNG */}
      <section className="about-hero-clean">
        <div className="hero-ambient-orb" aria-hidden="true" />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="about-clean-grid">
            {/* Left Column: Title, Subtitle, Story, Stats */}
            <div className="about-clean-text">
              <motion.h1 
                className="hero-headline"
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{ marginBottom: "1rem" }}
              >
                {t("about.title")}
              </motion.h1>

              <motion.p 
                className="about-lead-clean"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                {t("about.subtitle")}
              </motion.p>

              <motion.p 
                className="about-desc-clean"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
              >
                {t("about.desc")}
              </motion.p>

              {/* Stats Block */}
              <motion.div 
                className="about-stats-clean"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="stat-clean-item">
                  <span className="stat-clean-num">5+</span>
                  <span className="stat-clean-label">{t("about.stat1")}</span>
                </div>
                <div className="stat-clean-item">
                  <span className="stat-clean-num">50+</span>
                  <span className="stat-clean-label">{t("about.stat2")}</span>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Founder Cutout PNG aligned to bottom */}
            <motion.div
              className="about-clean-media"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="about-png-glow" aria-hidden="true" />
              <div className="about-png-container">
                <Image
                  src="/assets/img/shamy-founder.png"
                  alt="Samuel Woodcock - Shamy Creative Studio"
                  width={520}
                  height={620}
                  priority
                  className="about-png-img"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Studio Values & Philosophy: 3 Cards */}
      <section className="about-values-clean">
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: "2.5rem" }}>
            <h2 className="text-3xl font-bold mb-2">{t("about.philosophy.title")}</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: "45ch" }}>
              {t("about.philosophy.subtitle")}
            </p>
          </div>

          <div className="about-values-grid-clean">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={idx}
                  className="about-value-card-clean"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="value-clean-top">
                    <div className="value-clean-icon">
                      <Icon size={22} weight="duotone" />
                    </div>
                    <span className="value-clean-tag">{v.highlight}</span>
                  </div>
                  <h3 className="value-clean-title">{v.title}</h3>
                  <p className="value-clean-desc">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. CTA & Direct Contact */}
      <section id="contact" className="container text-center" style={{ paddingTop: "3rem", paddingBottom: "4rem" }}>
        <div className="cta-section">
          <div className="cta-content">
            <h2 className="text-3xl font-bold mb-6">{t("cta.title")}</h2>
            <div style={{ display: "inline-flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
              <Link href="/brief" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                <span>{t("cta.button")}</span>
                <ArrowRight size={18} weight="bold" />
              </Link>
            </div>
            <p className="mt-8 text-muted" style={{ fontSize: "0.9rem" }}>{t("cta.email")}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

