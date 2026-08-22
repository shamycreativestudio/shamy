"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { 
  ArrowRight, 
  Sparkle, 
  Target, 
  Eye, 
  PenNib, 
  Code, 
  FilmReel, 
  CheckCircle,
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

  const disciplines = [
    { name: "Brand Strategy", icon: Target },
    { name: "Visual Identity", icon: Sparkle },
    { name: "Editorial Design", icon: PenNib },
    { name: "UX/UI & Web", icon: Code },
    { name: "Motion 2D", icon: FilmReel },
  ];

  const pillars = [
    { title: "Rigor Tipográfico", desc: "Composición armónica y jerarquías visuales sólidas." },
    { title: "Enfoque Boutique", desc: "Atención personalizada y dedicación absoluta a cada proyecto." },
    { title: "Cultura de Detalle", desc: "Micro-interacciones y acabados que elevan la percepción de marca." },
  ];

  return (
    <main id="page-content">
      {/* 1. Enhanced Asymmetric About Hero */}
      <section className="about-hero-section">
        <div className="hero-ambient-orb" aria-hidden="true" />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="about-hero-grid">
            {/* Left Column: Story, Subtitle, Stats & Disciplines */}
            <div className="about-hero-text">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="about-pill-badge"
              >
                <Sparkle size={14} weight="fill" />
                <span>Boutique Creative Studio · 2026</span>
              </motion.div>

              <motion.h1 
                className="hero-headline about-headline"
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                {t("about.title")}
              </motion.h1>

              <motion.p 
                className="about-lead"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
              >
                {t("about.subtitle")}
              </motion.p>

              <motion.p 
                className="about-description"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                {t("about.desc")}
              </motion.p>

              {/* Studio Stats Grid */}
              <motion.div 
                className="about-stats-grid"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="about-stat-item">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">{t("about.stat1")}</span>
                </div>
                <div className="about-stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">{t("about.stat2")}</span>
                </div>
                <div className="about-stat-item">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Dedicación & Craft</span>
                </div>
              </motion.div>

              {/* Discipline Tags */}
              <motion.div 
                className="about-disciplines"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
              >
                {disciplines.map((d, i) => {
                  const Icon = d.icon;
                  return (
                    <span key={i} className="discipline-tag">
                      <Icon size={14} weight="bold" />
                      <span>{d.name}</span>
                    </span>
                  );
                })}
              </motion.div>
            </div>

            {/* Right Column: Founder Studio Photo with Glass Card Frame */}
            <motion.div
              className="about-hero-media"
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="about-photo-wrapper">
                <div className="about-photo-glow" aria-hidden="true" />
                <div className="about-photo-frame">
                  <Image
                    src="/assets/img/shamy-founder.png"
                    alt="Samuel Woodcock - Fundador de Shamy Creative Studio"
                    width={560}
                    height={560}
                    priority
                    className="about-photo-img"
                  />
                  {/* Floating Founder Badge */}
                  <div className="about-founder-badge">
                    <div className="founder-info">
                      <span className="founder-name">Samuel Woodcock</span>
                      <span className="founder-title">Founder & Lead Designer</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Studio Values & Philosophy */}
      <section className="about-values-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">{t("about.philosophy.title")}</h2>
            <p className="section-subtitle">
              {t("about.philosophy.subtitle")}
            </p>
          </div>

          <div className="about-values-grid">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={idx}
                  className="about-value-card"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="value-card-top">
                    <div className="value-icon-box">
                      <Icon size={24} weight="duotone" />
                    </div>
                    <span className="value-tag">{v.highlight}</span>
                  </div>
                  <h3 className="value-title">{v.title}</h3>
                  <p className="value-description">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Studio DNA / Method Pillars */}
      <section className="about-pillars-section">
        <div className="container">
          <div className="pillars-grid">
            {pillars.map((p, idx) => (
              <motion.div
                key={idx}
                className="pillar-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <CheckCircle size={22} weight="fill" className="pillar-icon" />
                <div>
                  <h4 className="pillar-title">{p.title}</h4>
                  <p className="pillar-desc">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA & Direct Contact */}
      <section id="contact" className="container py-20 text-center">
        <div className="cta-section">
          <div className="cta-content">
            <h2 className="text-3xl font-bold mb-6">{t("cta.title")}</h2>
            <p className="text-muted mx-auto mb-8" style={{ maxWidth: "45ch", fontSize: "1.05rem" }}>
              ¿Tienes una visión en mente? Hablemos de cómo podemos llevar tu marca al siguiente nivel.
            </p>
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

