"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { useTranslation } from "./TranslationProvider";
import LiquidGlass from "./LiquidGlass";

export default function Navbar() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<string>("light");
  const { lang, toggleLang, t } = useTranslation();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("shamy_theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    
    setTheme(initialDark ? "dark" : "light");
    if (initialDark) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("shamy_theme", newTheme);
    if (newTheme === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  const handleNavClick = (href: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const isDark = theme === "dark";

  const navItems = [
    { href: "/", label: t("nav.home") || "Inicio" },
    { href: "/services", label: t("nav.services") || "Servicios" },
    { href: "/projects", label: t("nav.work") || "Portafolio" },
    { href: "/about", label: t("nav.about") || "Nosotros" },
  ];

  const getActiveHref = () => {
    if (pathname === "/") return "/";
    if (pathname.startsWith("/services")) return "/services";
    if (pathname.startsWith("/projects")) return "/projects";
    if (pathname.startsWith("/about")) return "/about";
    return "";
  };

  const activeHref = getActiveHref();

  return (
    <nav ref={navRef} className="navbar-capsules" aria-label="Navegación Principal">
      {/* 1. LOGO CAPSULE */}
      <div className="nav-capsule logo-capsule">
        <LiquidGlass
          radius={50}
          depth={6}
          blur={1}
          strength={50}
          backgroundColor="var(--nav-glass-bg)"
          chromaticAberration={2}
        />
        <Link 
          href="/" 
          className="nav-logo-link" 
          onClick={(e) => handleNavClick("/", e)}
          aria-label="Shamy Creative Studio"
          style={{ position: "relative", zIndex: 1 }}
        >
          <Image 
            src={isDark ? "/assets/img/shamy-logotipo-white.svg" : "/assets/img/shamy-logotipo.svg"} 
            alt="Shamy Creative Studio" 
            width={110}
            height={36}
            priority
            className="nav-logo" 
          />
        </Link>
      </div>

      {/* 2. LINKS CAPSULE WITH SLIDING SPRING PILL */}
      <div className="nav-capsule links-capsule">
        <LiquidGlass
          radius={50}
          depth={6}
          blur={1}
          strength={50}
          backgroundColor="var(--nav-glass-bg)"
          chromaticAberration={2}
        />
        <div className="nav-links" style={{ position: "relative", zIndex: 1 }}>
          {navItems.map((item) => {
            const isActive = activeHref === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(item.href, e)}
                className={`nav-link-item ${isActive ? "active" : ""}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-active-pill"
                    className="nav-active-pill"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                      mass: 0.8,
                    }}
                  >
                    <LiquidGlass
                      radius={18}
                      depth={3}
                      blur={1}
                      strength={32}
                      backgroundColor="var(--active-pill-glass-bg)"
                      chromaticAberration={0}
                    />
                  </motion.div>
                )}
                <span className="nav-link-label">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* 3. CONTROLS CAPSULE */}
      <div className="nav-capsule controls-capsule">
        <LiquidGlass
          radius={50}
          depth={6}
          blur={1}
          strength={50}
          backgroundColor="var(--nav-glass-bg)"
          chromaticAberration={2}
        />
        <div className="nav-controls" id="navControls" style={{ position: "relative", zIndex: 1 }}>
          <button 
            type="button" 
            className="theme-toggle ui-toggle" 
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            {isDark ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            )}
          </button>
          <button 
            type="button" 
            className="lang-toggle ui-toggle" 
            onClick={toggleLang}
            aria-label="Toggle Language"
            style={{ fontSize: "0.8rem", fontWeight: 600 }}
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
        </div>
      </div>
    </nav>
  );
}
