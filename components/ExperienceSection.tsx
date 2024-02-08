"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function ExperienceSection() {
  const { ref } = useSectionInView("Experience");

  return (
    <motion.section
      ref={ref}
      className="mb-28 text-center leading-8 sm:mb-40 scroll-mt-28 bg-gra"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="experience"
    >
      <SectionHeading>Experience</SectionHeading>
    </motion.section>
  );
}