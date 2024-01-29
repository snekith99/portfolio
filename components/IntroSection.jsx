"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const IntroSection = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="grid grid-cols-1">
        <div className="col-span-7 text-center">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-600">
              Hello, I am
            </span>
            <br />
            <TypeAnimation
              sequence={["Snekith Karthikeyan", 1000, "", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-lg lg:text-xl">
            I am a student at Monash University studying a Bachelor of Software
            Engineering (Honours). I have a strong passion for software
            development, machine learning and artificial intelligence.
          </p>
        </div>
      </div>
      <div className="col-span-5"></div>
    </section>
  );
};

export default IntroSection;
