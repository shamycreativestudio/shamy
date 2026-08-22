"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { House, Compass, Images, User } from "@phosphor-icons/react";
import { useTranslation } from "./TranslationProvider";
import LiquidGlass from "./LiquidGlass";

export default function MobileTabBar() {
  const pathname = usePathname();
  const { t } = useTranslation();

  const tabs = [
    { href: "/", label: t("nav.home") || "Inicio", icon: House },
    { href: "/services", label: t("nav.services") || "Servicios", icon: Compass },
    { href: "/projects", label: t("nav.work") || "Portafolio", icon: Images },
    { href: "/about", label: t("nav.about") || "Nosotros", icon: User },
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
    <nav className="mobile-tabbar" aria-label="Navegación móvil">
      <LiquidGlass
        radius={50}
        depth={6}
        blur={1}
        strength={50}
        backgroundColor="var(--nav-glass-bg)"
        chromaticAberration={2}
      />
      <div className="mobile-tabbar-inner">
        {tabs.map((tab) => {
          const isActive = activeHref === tab.href;
          const IconComponent = tab.icon;

          return (
            <Link 
              key={tab.href}
              href={tab.href} 
              className={`tab-item ${isActive ? "active" : ""}`}
            >
              {isActive && (
                <motion.div
                  layoutId="mobile-tab-active-pill"
                  className="mobile-tabbar-pill"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                    mass: 0.8,
                  }}
                >
                  <LiquidGlass
                    radius={24}
                    depth={3}
                    blur={1}
                    strength={40}
                    backgroundColor="var(--active-pill-glass-bg)"
                    chromaticAberration={0}
                  />
                </motion.div>
              )}
              <span className="tab-item-content">
                <IconComponent size={20} weight={isActive ? "fill" : "regular"} />
                <span>{tab.label}</span>
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
