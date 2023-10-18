"use client";

import React, { useState } from "react";
import MainNav from "@/nav/MainNav";
import MobileNav from "@/nav/MobileNav";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const variants = {
  visible: { y: 0 },
  hidden: { y: "-100%" },
};

const transition = {
  duration: 0.35,
  ease: "easeInOut",
};

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) return setHidden(true);
    return setHidden(false);
  });

  return (
    <motion.header
      className="sticky top-0 w-full"
      variants={variants}
      animate={hidden ? "hidden" : "visible"}
      transition={transition}
    >
      <MainNav />
      <MobileNav />
    </motion.header>
  );
}
