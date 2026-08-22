"use client";

import React, { useEffect, useState } from "react";
import LegacyLiquidGlass from "./LegacyLiquidGlass";

interface LiquidGlassProps {
  width?: string | number;
  height?: string | number;
  radius?: number | string;
  depth?: number;
  blur?: number;
  strength?: number;
  chromaticAberration?: number;
  backgroundColor?: string;
  children?: React.ReactNode;
  fallbackMode?: "blur" | "overlay"; // How to behave in Mozilla/Safari
}

export default function UnifiedLiquidGlass(props: LiquidGlassProps) {
  const [isChromium, setIsChromium] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const ua = navigator.userAgent.toLowerCase();
    const isChrome = ua.includes('chrome') || ua.includes('chromium');
    const isEdge = ua.includes('edg/');
    const isSafari = ua.includes('safari') && !ua.includes('chrome') && !ua.includes('chromium');
    const isFirefox = ua.includes('firefox');
    
    // We only use the new alternative on Safari and Firefox
    if (isSafari || isFirefox) {
      setIsChromium(false);
    }
  }, []);

  if (!mounted) {
    // Avoid hydration mismatch by rendering nothing or a placeholder
    return null;
  }

  if (isChromium) {
    // @ts-ignore (ignoring props type mismatch with Legacy)
    return <LegacyLiquidGlass {...props} />;
  }

  // Fallback for Mozilla/Safari
  
  if (props.fallbackMode === "blur") {
    // Simple blur for cursor
    const fallbackBlur = Math.max((props.blur || 1) * 8, 4);
    return (
      <div
        className="liquid-glass-wrapper"
        style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        borderRadius: props.radius || 0,
        backgroundColor: props.backgroundColor,
        backdropFilter: `blur(${fallbackBlur}px)`,
        WebkitBackdropFilter: `blur(${fallbackBlur}px)`
      }} />
    );
  }

  // Overlay mode for Navbar capsules — frosted glass fallback for Firefox/Safari
  const navBlur = Math.max((props.blur || 1) * 8, 8);
  return (
    <div
      className="liquid-glass-wrapper"
      style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        borderRadius: props.radius || 50,
        backgroundColor: props.backgroundColor,
        boxShadow: "1px 1px 1px 0px rgba(255,255,255, 0.60) inset, -1px -1px 1px 0px rgba(255,255,255, 0.60) inset, 0px 0px 16px 0px rgba(0,0,0, 0.04)",
        backdropFilter: `blur(${navBlur}px) brightness(1.1) saturate(1.5)`,
        WebkitBackdropFilter: `blur(${navBlur}px) brightness(1.1) saturate(1.5)`,
        pointerEvents: "none"
    }} />
  );
}
