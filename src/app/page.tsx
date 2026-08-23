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
import ProjectFilmstrip from "@/components/ProjectFilmstrip";

export default function Home() {
  const { t } = useTranslation();

  const servicesList = [
    { title: t("services.s1.title"), slug: "estrategia-de-marca", icon: Compass },
    { title: t("services.s2.title"), slug: "identidad-visual", icon: Sparkle },
    { title: t("services.s3.title"), slug: "diseno-editorial", icon: BookOpen },
    { title: t("services.s4.title"), slug: "diseno-de-interfaces", icon: Desktop },
    { title: t("services.s5.title"), slug: "motion-graphics", icon: PlayCircle },
  ];

  return (
    <main id="page-content">
      {/* 1. Asymmetric Fluid Hero */}
      <section className="hero-asymmetric">
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="hero-grid-layout">
            <div className="hero-text-block">
              <motion.h1 
                className="hero-headline"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                dangerouslySetInnerHTML={{ __html: t("hero.title") }}
              />
              
              <motion.p 
                className="hero-desc"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                {t("hero.subtitle")}
              </motion.p>
              
              <motion.div 
                className="hero-cta-pill-group"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link href="/projects" className="btn-primary">
                  {t("hero.cta")}
                </Link>
                <Link href="/brief" className="btn-secondary">
                  {t("cta.button")}
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Marquee Strip */}
      <section className="marquee-section" aria-label="Especialidades del estudio">
        <div className="marquee-track">
          <div className="marquee-content">{t("marquee.text")}</div>
          <div className="marquee-content" aria-hidden="true">{t("marquee.text")}</div>
          <div className="marquee-content" aria-hidden="true">{t("marquee.text")}</div>
        </div>
      </section>

      {/* 3. Infinite Project Filmstrip (Flagship Visual Component) */}
      <ProjectFilmstrip />

      {/* 4. Services Strip Preview */}
      <section className="container py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t("services.title")}</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "75ch" }}>
            {t("services.strip.subtitle")}
          </p>
        </div>

        <div className="services-strip-container">
          {servicesList.map((srv, idx) => {
            const IconComponent = srv.icon;
            return (
              <Link 
                key={idx} 
                href={`/services/${srv.slug}`} 
                className="service-chip"
              >
                <span className="service-chip-icon">
                  <IconComponent size={20} weight="regular" />
                </span>
                <span>{srv.title}</span>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/services" 
            className="btn-pill-glow"
          >
            <span>{t("services.explore")}</span>
            <ArrowRight size={16} weight="bold" className="arrow-right" />
          </Link>
        </div>
      </section>

      {/* 5. CTA Final (Organic Floating Style) */}
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
