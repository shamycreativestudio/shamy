"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { 
  Compass, 
  Sparkle, 
  BookOpen, 
  Desktop, 
  PlayCircle,
  ArrowRight
} from "@phosphor-icons/react";
import { useTranslation } from "@/components/TranslationProvider";

export default function ServicesPage() {
  const { t } = useTranslation();

  const services = [
    {
      id: "s1",
      slug: "estrategia-de-marca",
      title: t("services.s1.title"),
      desc: t("services.s1.desc"),
      icon: Compass,
      spanClass: "span-2",
    },
    {
      id: "s2",
      slug: "identidad-visual",
      title: t("services.s2.title"),
      desc: t("services.s2.desc"),
      icon: Sparkle,
      spanClass: "span-1",
    },
    {
      id: "s3",
      slug: "diseno-editorial",
      title: t("services.s3.title"),
      desc: t("services.s3.desc"),
      icon: BookOpen,
      spanClass: "span-1",
    },
    {
      id: "s4",
      slug: "diseno-de-interfaces",
      title: t("services.s4.title"),
      desc: t("services.s4.desc"),
      icon: Desktop,
      spanClass: "span-2",
    },
    {
      id: "s5",
      slug: "motion-graphics",
      title: t("services.s5.title"),
      desc: t("services.s5.desc"),
      icon: PlayCircle,
      spanClass: "span-3",
    },
  ];

  const processSteps = [
    { num: "01", title: t("services.process.step1"), desc: t("services.process.step1.desc") },
    { num: "02", title: t("services.process.step2"), desc: t("services.process.step2.desc") },
    { num: "03", title: t("services.process.step3"), desc: t("services.process.step3.desc") },
    { num: "04", title: t("services.process.step4"), desc: t("services.process.step4.desc") },
  ];

  return (
    <main id="page-content">
      {/* 1. Services Hero & Bento Grid */}
      <section className="hero-asymmetric" style={{ paddingBottom: "3rem" }}>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <motion.h1 
            className="hero-headline"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {t("services.title")}
          </motion.h1>
          <motion.p 
            className="hero-desc"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            {t("services.subtitle")}
          </motion.p>

          {/* Interactive Bento Services Grid */}
          <div className="service-bento-grid">
            {services.map((srv, idx) => {
              const IconComponent = srv.icon;
              return (
                <motion.div 
                  key={srv.id}
                  className={`bento-card ${srv.spanClass}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link 
                    href={`/services/${srv.slug}`} 
                    style={{ 
                      textDecoration: "none", 
                      color: "inherit", 
                      display: "flex", 
                      flexDirection: "column", 
                      justifyContent: "space-between",
                      height: "100%",
                      position: "relative",
                      zIndex: 1
                    }}
                  >
                    <div className="bento-bg-accent" aria-hidden="true" />
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                        <div className="bento-icon-wrapper" style={{ margin: 0 }}>
                          <IconComponent size={28} weight="regular" />
                        </div>
                        <span style={{ fontSize: "0.85rem", color: "var(--muted)", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "4px" }}>
                          <span>Ver detalle</span>
                          <ArrowRight size={14} weight="bold" />
                        </span>
                      </div>
                      <h2 className="bento-card-title">{srv.title}</h2>
                    </div>
                    <p className="bento-card-desc" style={{ marginTop: "1rem" }}>{srv.desc}</p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Creative Process Timeline */}
      <section className="process-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">{t("services.process.title")}</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: "50ch" }}>
              {t("services.process.subtitle")}
            </p>
          </div>

          <div className="process-grid">
            {processSteps.map((step, idx) => (
              <motion.div 
                key={step.num}
                className="process-step"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="process-step-header">
                  <div className="process-step-num">{step.num}</div>
                  <h3 className="process-step-title">{step.title}</h3>
                </div>
                <p className="process-step-desc">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA Final (Organic Floating Style) */}
      <section className="container py-20 text-center">
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
