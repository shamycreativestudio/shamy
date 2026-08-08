"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable custom cursor for pointer devices
    if (window.matchMedia("(pointer: coarse)").matches) return;
    
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animateCursor = () => {
      // Fast tracking for minimal lag
      cursorX += (mouseX - cursorX) * 0.6;
      cursorY += (mouseY - cursorY) * 0.6;
      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
      animationFrameId = requestAnimationFrame(animateCursor);
    };

    document.addEventListener("mousemove", handleMouseMove);
    animationFrameId = requestAnimationFrame(animateCursor);

    // Hover effects logic
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(".project-card")) {
        cursor.classList.add("active-crystal");
      } else if (target.closest("a") || target.closest("button") || target.closest(".nav-capsule") || target.closest("input") || target.closest("textarea")) {
        cursor.classList.add("active-subtle");
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(".project-card")) {
        cursor.classList.remove("active-crystal");
      } else if (target.closest("a") || target.closest("button") || target.closest(".nav-capsule") || target.closest("input") || target.closest("textarea")) {
        cursor.classList.remove("active-subtle");
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="custom-cursor" ref={cursorRef} id="customCursor">
      <span className="cursor-text"></span>
    </div>
  );
}
