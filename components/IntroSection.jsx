"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSectionInView } from "@/lib/hooks";

const IntroSection = () => {
  const { ref } = useSectionInView("Home");

  return (
    <section className="justify-center items-center">
      <div className="grid grid-cols-1">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="col-span-7 place-self-center text-center mb-28 text-center sm:mb-0 scroll-mt-[50rem]"
          id="home"
          ref={ref}
        >
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-600">
              Hello, I am
              <br />
            </span>
            <TypeAnimation
              sequence={["Snekith Karthikeyan", 10000, "", 1000]}
              wrapper="span"
              speed={10}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mt-5 lg:text-xl">
            I am a student at Monash University studying a Bachelor of Software
            Engineering (Honours). I have a strong passion for software
            development, machine learning and artificial intelligence.
          </p>
          <br />
          <div className="sm:px-2">
            <Link
              href="/SnekithKarthikeyan.pdf"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-green-500 hover:bg-slate-200 text-black"
            >
              Download CV
            </Link>
            <Link
              href="/#contact"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 to-green-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Contact Me
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
