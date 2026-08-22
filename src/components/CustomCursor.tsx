"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import LiquidGlass from "./LiquidGlass";

type CursorMode = "default" | "subtle" | "crystal";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<CursorMode>("default");
  const pathname = usePathname();

  // Reset cursor on route navigation
  useEffect(() => {
    const cursor = cursorRef.current;
    if (cursor) {
      cursor.className = "custom-cursor";
      setMode("default");
    }
  }, [pathname]);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor || window.matchMedia("(pointer: coarse)").matches) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = window.innerWidth / 2;
    let cursorY = window.innerHeight / 2;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      if (target.closest(".project-card, .project-card-v2")) {
        cursor.className = "custom-cursor active-crystal";
        setMode("crystal");
      } else if (target.closest("a, button, .nav-capsule, .ui-toggle, .filter-btn, .filter-pill-wrapper")) {
        cursor.className = "custom-cursor active-subtle";
        setMode("subtle");
      } else {
        cursor.className = "custom-cursor";
        setMode("default");
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      if (target.closest(".project-card, .project-card-v2")) {
        cursor.classList.remove("active-crystal");
        setMode((prev) => (prev === "crystal" ? "default" : prev));
      } else if (target.closest("a, button, .nav-capsule, .ui-toggle, .filter-btn, .filter-pill-wrapper")) {
        cursor.classList.remove("active-subtle");
        setMode((prev) => (prev === "subtle" ? "default" : prev));
      }
    };

    const onPointerUp = () => {
      // Re-evaluate or reset on click
      setTimeout(() => {
        const el = document.elementFromPoint(mouseX, mouseY);
        if (!el || !el.closest(".project-card, .project-card-v2, a, button, .nav-capsule, .ui-toggle, .filter-btn, .filter-pill-wrapper")) {
          cursor.className = "custom-cursor";
          setMode("default");
        }
      }, 50);
    };

    const onMouseLeave = () => {
      cursor.className = "custom-cursor";
      setMode("default");
    };

    window.addEventListener("mouseover", onMouseOver, { passive: true });
    window.addEventListener("mouseout", onMouseOut, { passive: true });
    window.addEventListener("pointerup", onPointerUp, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);

    let animFrame: number;
    const animate = () => {
      // Calculate velocity
      const dx = mouseX - cursorX;
      const dy = mouseY - cursorY;
      
      // Update cursor position with lerp
      cursorX += dx * 0.4;
      cursorY += dy * 0.4;
      
      // We translate first, then center
      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
      
      animFrame = requestAnimationFrame(animate);
    };

    animFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mouseout", onMouseOut);
      window.removeEventListener("pointerup", onPointerUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  // Dynamic props for LiquidGlass based on cursor size
  // Default is arbitrary since it's hidden, but we keep it sane
  const glassProps = {
    crystal: { size: 70, depth: 5, blur: 1, strength: 40, chromaticAberration: 2 },
    subtle:  { size: 36, depth: 3, blur: 0.5, strength: 15, chromaticAberration: 1 },
    default: { size: 24, depth: 3, blur: 0.5, strength: 15, chromaticAberration: 1 },
  }[mode];

  return (
    <div ref={cursorRef} className="custom-cursor">
      <LiquidGlass
        width={glassProps.size}
        height={glassProps.size}
        radius={100} // Circle
        depth={glassProps.depth}
        blur={glassProps.blur}
        strength={glassProps.strength}
        backgroundColor="rgba(255,255,255,0.03)"
        chromaticAberration={glassProps.chromaticAberration}
        fallbackMode="blur"
      />
    </div>
  );
}

