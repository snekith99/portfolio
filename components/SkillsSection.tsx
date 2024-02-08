"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function SkillsSection() {
  const { ref } = useSectionInView("Skills");

  return (
    <motion.section
      ref={ref}
      className="mb-28 text-center leading-8 sm:mb-40 scroll-mt-28 bg-gra"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="skills"
    >
      <SectionHeading>Skills</SectionHeading>
    </motion.section>
  );
}