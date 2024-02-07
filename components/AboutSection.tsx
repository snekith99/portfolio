"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-6">
        As an enthusiastic software engineering student who is consistently up to date with new technology, I am deeply immersed in the fascinating and 
        innovative world of code. My dedication to tackling complex projects, and expanding my knowledge in topics such as {" "}
        <span className="font-bold"> Algorithms, Data Structures, Object-Oriented Programming, Databases, Data Analytics and Mathematics </span> 
        is endless.
      </p>

      <p className="mb-6"> 
        I have been able to learn a variety of programming languages during my coursework and 
        internships such as {" "}
        <span className="font-bold">Python, Java, JavaScript, R, SQL, C, HTML, CSS and MATLAB. </span>
        I have also had the opportunity to work with and develop applications with front-end frameworks such as
        <span className="font-bold"> React.js and Next.js. </span>
        Alongside these skills, I have worked with software development tools such as
        <span className="font-bold"> Git, Maven, Selenium, Postman, Stibo Systems and Figma. </span>
      </p>

      <p className="mb-6">
        Alongside my coursework, I have looked to acquire hands-on experience for software engineering. 
        I undertook a 6 month internship at 
        <span className="font-bold"> 180 Degrees Consulting - Monash as a Tech Project Consultant </span>
        which primarily consisted of front-end development. During this role, I also did a 6 month internship with
        <span className="font-bold"> The Coles Group as an Associate Quality Engineer </span> 
        which consisted of scripting automated test cases. I ventured into Consulting after these internships, as an 
        <span className="font-bold"> Oracle Vacationer at Deloitte, </span> where I had the chance to work with Oracle's Cloud Applications.
        Currently, I am working as a <span className="font-bold"> Technical Test Consultant at Infosys, </span> where I have created robust
        testing frameworks. 
      </p>

      <p className="mb-6">
        As a fourth and final year software engineering student, I am looking to continuously learn the latest technology, and continue 
        expanding my network with talented professionals. I have a strong passion for software development, machine learning
        and artifical intelligence. Feel free to contact me if you're interested in my experiences, collaborations or job opportuniities.
        You can find my contact information in the "Contact" section of this portfolio.
      </p>
    </motion.section>
  );
}