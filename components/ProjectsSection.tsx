"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { TypeAnimation } from "react-type-animation";

export default function ProjectsSection() {
  const { ref } = useSectionInView("Projects");

  return (
    <motion.section
      ref={ref}
      className="mb-28 text-center leading-8 sm:mb-1 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="projects"
    >
      <SectionHeading>Projects</SectionHeading>
      <div className="text-2xl sm:text-5xl text-center justify-center place-self-center">
      <TypeAnimation
        sequence={["COMING SOON...", 5000, "", 1000]}
        wrapper="span"
        speed={10}
        repeat={Infinity}
        style={{ color: "white" }}
      />
      </div>
    </motion.section>
  );
}