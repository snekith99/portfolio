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
      className="mb-28 text-center leading-8 sm:mb-1 scroll-mt-28 relative"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="experience"
    >
      <SectionHeading>Experience</SectionHeading>
      <div className="px-1 py-1 mt-10 w-full bg-gradient-to-br from-blue-500 to-green-500 hover:bg-slate-800 text-white lg:w-full" style={{ width: '85vw' }}>
        <span className="block bg-[#121212] hover:bg-slate-800 px-5 py-2">
          <div className="flex justify-between">
            <p className="text-left font-bold">Infosys</p>
            <div className="text-right font-bold">Feb 2024 - Current</div>
          </div>
          <div className="flex justify-between">
            <p className="text-left italic">Software Test Engineer</p>
            <div className="text-right italic">Melbourne, VIC</div>
          </div>
          <br/>
          <p className= "text-left text-[#ADB7BE]">
          • Designed and implemented a robust Java-based test automation framework to facilitate parallel execution of web applications and API requests, enhancing overall testing speed and effectiveness.
          </p>
          <br/>
          <p className= "text-left text-[#ADB7BE]">
          • Optimised automated test scripts using OOP principles such as inheritance and abstraction to leverage existing classes and methods, to ensure new test cases can be added efficiently.
          </p>
          <br/>
        </span>
      </div>
      <div className="px-1 py-1 mt-10 w-full bg-gradient-to-br from-blue-500 to-green-500 hover:bg-slate-800 text-white lg:w-full" style={{ width: '85vw' }}>
        <span className="block bg-[#121212] hover:bg-slate-800 px-5 py-2">
          <div className="flex justify-between">
            <p className="text-left font-bold">Deloitte</p>
            <div className="text-right font-bold">Jan 2024 - Feb 2024</div>
          </div>
          <div className="flex justify-between">
            <p className="text-left italic">Oracle Vacationer</p>
            <div className="text-right italic">Melbourne, VIC</div>
          </div>
          <br/>
          <p className= "text-left text-[#ADB7BE]">
          • Developed, optimised, and executed SQL queries and PL/SQL scripts to enhance database performance and ensuring efficient data retrieval.          </p>
          <br/>
          <p className= "text-left text-[#ADB7BE]">
          • Acquired comprehensive knowledge in Oracle Cloud Infrastructure (OCI) by applying Oracle Cloud services for quality-driven and cloud-based solutions.          </p>
          <br/>
        </span>
      </div>
      <div className="px-1 py-1 mt-10 w-full bg-gradient-to-br from-blue-500 to-green-500 hover:bg-slate-800 text-white lg:w-full" style={{ width: '85vw' }}>
        <span className="block bg-[#121212] hover:bg-slate-800 px-5 py-2">
          <div className="flex justify-between">
            <p className="text-left font-bold">Coles Group</p>
            <div className="text-right font-bold">Jul 2023 - Dec 2023</div>
          </div>
          <div className="flex justify-between">
            <p className="text-left italic">Software Test Engineer</p>
            <div className="text-right italic">Melbourne, VIC</div>
          </div>
          <br/>
          <p className= "text-left text-[#ADB7BE]">
          • Developed and consistently updated automated test scripts using Java to ensure thorough test coverage for increased efficiency and extensibility within the framework.
          </p>
          <br/>
          <p className= "text-left text-[#ADB7BE]">
          • Employed Selenium for web application automation, addressing UI interactions, and performing data validation. Additionally, conducted API testing and validation using Postman to guarantee the integrity of backend services.          </p>
          <br/>
        </span>
      </div>
      <div className="px-1 py-1 mt-10 w-full bg-gradient-to-br from-blue-500 to-green-500 hover:bg-slate-800 text-white lg:w-full" style={{ width: '85vw' }}>
        <span className="block bg-[#121212] hover:bg-slate-800  px-5 py-2">
          <div className="flex justify-between">
            <p className="text-left font-bold">180 Degrees Consulting - Monash University</p>
            <div className="text-right font-bold">Jul 2023 - Dec 2023</div>
          </div>
          <div className="flex justify-between">
            <p className="text-left italic">Tech Project Consultant</p>
            <div className="text-right italic">Melbourne, VIC</div>
          </div>
          <br/>
          <p className= "text-left text-[#ADB7BE]">
          • Created visually appealing and user-friendly interfaces using Figma, skilfully designing wireframes, mock-ups, and prototypes in alignment with client requirements.          </p>
          <br/>
          <p className= "text-left text-[#ADB7BE]">
          • Utilised technologies and frameworks such as JavaScript, React.js, and CSS to develop responsive, dynamic, and interactive web pages for front-end development.          </p>
          <br/>
        </span>
      </div>
    </motion.section>
  );
  
}