"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { EnvelopeSimple, ArrowLeft } from "@phosphor-icons/react";
import { useTranslation } from "@/components/TranslationProvider";

export default function BriefPage() {
  const { t } = useTranslation();

  return (
    <main id="page-content">
      <section className="hero-asymmetric" style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
        <div className="container" style={{ position: "relative", zIndex: 1, maxWidth: "680px" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div style={{ display: "inline-flex", padding: "8px 18px", borderRadius: "50px", background: "var(--panel)", border: "1px solid var(--border)", marginBottom: "1.5rem", fontSize: "0.85rem", color: "var(--muted)" }}>
              Brief Interactivo · En Construcción
            </div>

            <h1 className="hero-headline" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: "1.5rem" }}>
              {t("brief.title") || "Estamos trabajando en ello"}
            </h1>

            <p className="hero-desc" style={{ maxWidth: "50ch", margin: "0 auto 2.5rem auto", fontSize: "1.1rem" }}>
              {t("brief.subtitle") || "Pronto podrás enviarnos los detalles de tu proyecto a través de nuestro brief interactivo."}
            </p>

            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a 
                href="mailto:shamy.creativestudio@gmail.com" 
                className="btn-primary"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
              >
                <EnvelopeSimple size={18} weight="bold" />
                <span>{t("brief.cta") || "Escríbenos directamente"}</span>
              </a>

              <Link 
                href="/" 
                className="btn-secondary"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
              >
                <ArrowLeft size={18} weight="bold" />
                <span>{t("nav.home") || "Volver al inicio"}</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
