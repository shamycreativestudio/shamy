"use client";

import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";
import React from "react";

const pageVariants = {
  initial: {
    opacity: 0,
    filter: "blur(12px)",
    transform: "scale(0.99)",
  },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
    transform: "scale(1)",
  },
  exit: {
    opacity: 0,
    filter: "blur(12px)",
    transform: "scale(0.99)",
  },
};

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: 0.4,
          ease: [0.16, 1, 0.3, 1], // Expo-out for smooth kinetic arrival
        }}
        style={{ width: "100%", minHeight: "100%" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
