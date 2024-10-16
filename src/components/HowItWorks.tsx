import React from "react";
import { ScanEngageSection } from "./ScanEngageSection";

const HowItWorks: React.FC = () => {
  return (
    <section className="flex flex-col items-start px-20 mt-10 w-full bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <h2 className="mt-20 text-6xl font-bold text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        How It Works
      </h2>
      <p className="mt-2 text-2xl text-black max-md:max-w-full">
        Your Journey Begins with a Simple Scan
      </p>
      <ScanEngageSection />
    </section>
  );
};

export default HowItWorks;
