"use client";

import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import React from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      style={{ width: "100%", minHeight: "100%" }}
    >
      {children}
    </motion.div>
  );
}

