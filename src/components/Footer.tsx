"use client";

import { useTranslation } from "./TranslationProvider";

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <p className="footer-brand" style={{ fontWeight: 600, letterSpacing: "0.5px" }}>
          Shamy® Creative Studio &mdash; {currentYear}
        </p>
        <p className="footer-rights" style={{ color: "var(--muted)", fontSize: "0.85rem" }}>
          {t("footer.rights") || "Todos los derechos reservados."}
        </p>
      </div>
    </footer>
  );
}
