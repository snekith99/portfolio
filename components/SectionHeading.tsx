import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (

    <h2 className="grid grid-cols-1 col-span-7 place-self-center text-4xl lg:text-6xl font-bold capitalize mt-10 mb-4 text-center sm:text-left text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-600">
      {children}
    </h2>
  );
}