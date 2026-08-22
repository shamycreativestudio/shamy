"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react";
import { useTranslation } from "@/components/TranslationProvider";

export default function AboutPage() {
  const { t } = useTranslation();

  const values = [
    {
      title: t("about.values.v1.title"),
      desc: t("about.values.v1.desc"),
      fullWidth: false,
    },
    {
      title: t("about.values.v2.title"),
      desc: t("about.values.v2.desc"),
      fullWidth: false,
    },
    {
      title: t("about.values.v3.title"),
      desc: t("about.values.v3.desc"),
      fullWidth: true,
    },
  ];

  return (
    <main id="page-content">
      {/* 1. Asymmetric About Hero with Founder Photo */}
      <section className="hero-asymmetric" style={{ minHeight: "75vh", paddingTop: "8rem", paddingBottom: "3rem" }}>
        <div className="hero-ambient-orb" aria-hidden="true" />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="about-hero-grid">
            {/* Left Column: Text & Stats */}
            <div>
              <motion.h1 
                className="hero-headline"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                {t("about.title")}
              </motion.h1>

              <motion.p 
                className="hero-desc"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                style={{ maxWidth: "50ch", fontSize: "1.15rem", lineHeight: "1.8" }}
              >
                {t("about.desc")}
              </motion.p>

              {/* Studio Stats */}
              <motion.div 
                className="about-stats" 
                style={{ display: "flex", gap: "3rem", marginTop: "2rem" }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              >
                <div>
                  <span style={{ fontSize: "2.8rem", fontWeight: 900, display: "block", lineHeight: 1 }}>5+</span>
                  <span style={{ color: "var(--muted)", fontSize: "0.9rem", letterSpacing: "0.5px" }}>{t("about.stat1")}</span>
                </div>
                <div>
                  <span style={{ fontSize: "2.8rem", fontWeight: 900, display: "block", lineHeight: 1 }}>50+</span>
                  <span style={{ color: "var(--muted)", fontSize: "0.9rem", letterSpacing: "0.5px" }}>{t("about.stat2")}</span>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Founder Studio Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="about-photo-card">
                <div className="about-photo-glow" aria-hidden="true" />
                <Image
                  src="/assets/img/shamy-founder.png"
                  alt="Fundador - Shamy Creative Studio"
                  width={600}
                  height={600}
                  priority
                  className="about-photo-img"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Studio Values & Philosophy */}
      <section className="container py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t("about.philosophy.title")}</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "45ch" }}>
            {t("about.philosophy.subtitle")}
          </p>
        </div>

        <div className="values-grid">
          {values.map((v, idx) => (
            <motion.div
              key={idx}
              className={`value-card ${v.fullWidth ? "full-width" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="value-card-title">{v.title}</h3>
              <p className="value-card-desc">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. CTA & Direct Contact (Organic Floating Style) */}
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
