"use client";

import React from "react";
import { motion } from "framer-motion";

import { useSectionInView } from "~/hooks";
import SectionHeading from "./section-heading";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am always fueled by my curiosity of how things work, even when I was a
        just kid. I can still remember disassembling a brand new toy to find out
        how each moving part works and then putting it back together.
      </p>

      <p className="mb-3">
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. And turning
        someone else wireframe design into all full functioning and intereactive
        UI. My core stack is{" "}
        <span className="font-medium">React, Next.js, tRPC, and Drizzle</span>.
        I am also familiar with Flutter and C#. I am always looking to learn new
        technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a web
        developer.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        watching movies, and playing games. I also enjoy{" "}
        <span className="font-medium">making things myself</span>. I own a 3D
        printer where I print out my own designs that I have created in{" "}
        <span className="font-medium">CAD software</span>. I&apos;m also
        learning how to make games.
      </p>
    </motion.section>
  );
}
