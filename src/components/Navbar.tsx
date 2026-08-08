"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [lang, setLang] = useState("ES");

  useEffect(() => {
    // Initialize from localStorage
    const savedTheme = localStorage.getItem("shamy_theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    
    setIsDark(initialDark);
    if (initialDark) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }

    const savedLang = localStorage.getItem("shamy_lang") || "ES";
    setLang(savedLang);
    // Translation logic will go here
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    localStorage.setItem("shamy_theme", newDark ? "dark" : "light");
    if (newDark) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  const toggleLang = () => {
    const newLang = lang === "ES" ? "EN" : "ES";
    setLang(newLang);
    localStorage.setItem("shamy_lang", newLang);
    // Translation logic to apply languages
  };

  return (
    <nav className="navbar-capsules">
      <div className="nav-capsule logo-capsule">
        <Link href="/" className="nav-logo-link">
          <Image 
            src="/assets/img/shamy-logotipo.svg" 
            alt="Shamy Creative Studio" 
            width={120}
            height={40}
            className="nav-logo" 
          />
        </Link>
      </div>

      <div className="nav-capsule links-capsule">
        <div className="nav-links">
          <Link href="/projects" data-i18n="nav.work">Portafolio</Link>
          <Link href="/#services" data-i18n="nav.services">Servicios</Link>
          <Link href="/about" data-i18n="nav.about">Nosotros</Link>
          <Link href="/about#contact" data-i18n="nav.contact">Contacto</Link>
        </div>
      </div>

      <div className="nav-capsule controls-capsule">
        <div className="nav-controls" id="navControls">
          <button 
            type="button" 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            <span className="theme-toggle-icon">
              {isDark ? (
                // Sun Icon (when dark)
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              ) : (
                // Moon Icon (when light)
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              )}
            </span>
          </button>
          
          <div className="lang-toggle-wrapper">
            <button 
              type="button" 
              className="lang-toggle" 
              onClick={toggleLang}
            >
              <span className={`lang-option ${lang === "ES" ? "active" : ""}`}>ES</span>
              <span className="lang-divider">/</span>
              <span className={`lang-option ${lang === "EN" ? "active" : ""}`}>EN</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
