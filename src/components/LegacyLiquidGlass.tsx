"use client";

import { useEffect, useRef, useState, useCallback, type ReactNode } from "react";

interface LiquidGlassProps {
  /** Fixed width in px. Ignored when autoSize is true. */
  width?: number;
  /** Fixed height in px. Ignored when autoSize is true. */
  height?: number;
  /** Border radius in px */
  radius?: number;
  /** Distortion depth/intensity */
  depth?: number;
  /** Blur intensity */
  blur?: number;
  /** Displacement map scale */
  strength?: number;
  /** Background color (rgba string) */
  backgroundColor?: string;
  /** Chromatic aberration intensity */
  chromaticAberration?: number;
  /** Auto-size mode: element adapts to content */
  autoSize?: boolean;
  /** Debug mode: shows displacement map instead of effect */
  debug?: boolean;
  /** CSS class for the host wrapper */
  className?: string;
  /** Inline styles for the host wrapper */
  style?: React.CSSProperties;
  /** Content rendered inside the glass via <slot> */
  children?: ReactNode;
}

/**
 * React wrapper for the <glass-element> Web Component.
 *
 * Creates the Web Component imperatively on the client AFTER
 * displacement-utils.js and glass-element.js have been loaded,
 * avoiding SSR hydration mismatches that break the component.
 *
 * When used without children (overlay mode), it measures its parent
 * container and passes exact pixel dimensions to the Web Component.
 */
export default function LiquidGlass({
  width,
  height,
  radius = 50,
  depth = 10,
  blur = 2,
  strength = 100,
  backgroundColor = "rgba(255,255,255,0.4)",
  chromaticAberration = 0,
  autoSize = false,
  debug = false,
  className,
  style,
  children,
}: LiquidGlassProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const glassRef = useRef<HTMLElement | null>(null);
  const [ready, setReady] = useState(false);

  // Poll until the Web Component class is registered
  useEffect(() => {
    if (customElements.get("glass-element")) {
      setReady(true);
      return;
    }

    const interval = setInterval(() => {
      if (customElements.get("glass-element")) {
        setReady(true);
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Create or update the glass-element
  const updateGlass = useCallback(() => {
    const container = containerRef.current;
    if (!container || !ready) return;

    // Determine dimensions
    let w = width;
    let h = height;

    // In overlay mode (no children), measure the parent container
    if (!children && (!w || !h)) {
      const parent = container.parentElement;
      if (parent) {
        const rect = parent.getBoundingClientRect();
        w = w || Math.round(rect.width);
        h = h || Math.round(rect.height);
      }
    }

    // Bail if dimensions are still 0 (parent not laid out yet)
    if (!children && (!w || !h || w <= 0 || h <= 0)) {
      requestAnimationFrame(updateGlass);
      return;
    }

    // Reuse existing element or create a new one
    let el = glassRef.current;
    let isNew = false;
    if (!el) {
      el = document.createElement("glass-element");
      isNew = true;
    }

    if (autoSize) {
      el.setAttribute("auto-size", "");
    } else {
      el.removeAttribute("auto-size");
      el.setAttribute("width", String(w));
      el.setAttribute("height", String(h));
    }

    if (!children) {
      el.setAttribute("overlay", "");
    } else {
      el.removeAttribute("overlay");
    }

    el.setAttribute("radius", String(radius));
    el.setAttribute("depth", String(depth));
    el.setAttribute("blur", String(blur));
    el.setAttribute("strength", String(strength));
    el.setAttribute("background-color", backgroundColor);
    el.setAttribute("chromatic-aberration", String(chromaticAberration));

    if (debug) {
      el.setAttribute("debug", "true");
    } else {
      el.removeAttribute("debug");
    }

    // In overlay mode, make it fill the container
    if (isNew && !children) {
      el.style.display = "block";
      el.style.position = "absolute";
      el.style.inset = "0";
      el.style.width = "100%";
      el.style.height = "100%";
      el.style.pointerEvents = "none";
    }

    if (isNew) {
      glassRef.current = el;
      container.prepend(el);
    }
  }, [ready, width, height, radius, depth, blur, strength, backgroundColor, chromaticAberration, autoSize, debug, children]);

  // Mount + resize handling
  useEffect(() => {
    if (!ready) return;

    updateGlass();

    // In overlay mode, listen for parent resizes to update dimensions ONLY if explicit dimensions aren't provided
    if (!children && (!width || !height) && containerRef.current?.parentElement) {
      const parent = containerRef.current.parentElement;
      const resizeObserver = new ResizeObserver(() => {
        updateGlass();
      });
      resizeObserver.observe(parent);
      return () => {
        resizeObserver.disconnect();
        if (glassRef.current) {
          glassRef.current.remove();
          glassRef.current = null;
        }
      };
    }

    return () => {
      if (glassRef.current) {
        glassRef.current.remove();
        glassRef.current = null;
      }
    };
  }, [ready, updateGlass, children]);

  // --- Overlay mode (no children): absolutely positioned inside parent ---
  if (!children) {
    return (
      <div
        ref={containerRef}
        className={className ? `${className} liquid-glass-wrapper` : "liquid-glass-wrapper"}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          overflow: "hidden",
          borderRadius: "inherit",
          ...style,
        }}
      />
    );
  }

  // --- Content mode (with children): inline wrapper ---
  return (
    <div
      ref={containerRef}
      className={className ? `${className} liquid-glass-wrapper` : "liquid-glass-wrapper"}
      style={{
        display: "inline-block",
        position: "relative",
        ...style,
      }}
    />
  );
}
