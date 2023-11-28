"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Section({ children }: { children: React.ReactNode }) {
  return (
    <motion.section
      className={
        "mx-auto flex h-screen w-screen flex-col items-center justify-center p-8"
      }
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
}
