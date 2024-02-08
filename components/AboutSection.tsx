"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function AboutSection() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 text-center leading-8 sm:mb-1 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-9 mt-6 text-[#ADB7BE] text-base sm:text-lg lg:text-xl">
        As an enthusiastic software engineering student who is consistently up to date with new technology, I am deeply immersed in the fascinating and 
        innovative world of code. My dedication to tackling complex projects, and expanding my knowledge in topics such as {" "}
        <span className="font-bold"> Algorithms, Data Structures, Object-Oriented Programming, Databases, Data Analytics and Mathematics </span> 
        is endless.
      </p>

      <p className="mb-9 text-[#ADB7BE] text-base sm:text-lg lg:text-xl"> 
        I have been able to learn a variety of programming languages during my coursework and 
        internships such as {" "}
        <span className="font-bold">Python, Java, JavaScript, R, SQL, C, HTML, CSS and MATLAB. </span>
        I have also had the opportunity to work with and develop applications with front-end frameworks such as
        <span className="font-bold"> React.js and Next.js. </span>
        Alongside these skills, I have used software development tools such as
        <span className="font-bold"> Git, Maven, Selenium, Postman, Stibo Systems and Figma. </span>
      </p>

      <p className="mb-9 text-[#ADB7BE] text-base sm:text-lg lg:text-xl">
        During my coursework, I have looked to acquire hands-on experience as a software engineer. 
        I undertook my first internship at <span className="font-bold"> The Coles Group as a Software Test Engineer </span> 
        which consisted of scripting automated test cases. During this internship, I participated in a volunteering role at
        <span className="font-bold"> 180 Degrees Consulting - Monash University as a Tech Project Consultant </span>
        which primarily consisted of front-end development. 
        I ventured into Consulting after these roles, at 
        <span className="font-bold"> Deloitte as an Oracle Vacationer, </span> 
        where I had the chance to work with Oracle&apos;s Cloud Applications.
        Currently, I am working at <span className="font-bold"> Infosys as a Software Test Engineer, </span> where I have created robust
        testing frameworks. 
      </p>

      <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl">
        As a fourth and final year software engineering student, I am looking to continuously learn the latest technology, and continue 
        expanding my network with talented professionals. I have a strong passion for 
        <span className="font-bold"> software development, machine learning and artifical intelligence. </span>
        Feel free to contact me if you&apos;re interested in my experiences, collaborations or job opportuniities.
        You can find my contact information in the &quot;Contact&quot; section of this portfolio.
      </p>
    </motion.section>
  );
}