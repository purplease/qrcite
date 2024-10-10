import React from "react";
import FeatureGrid from "./FeatureGrid";

const Features: React.FC = () => {
  return (
    <section className="flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-20 py-10 w-full">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center">
        Features
      </h2>
      <p className="mt-2 text-lg sm:text-xl md:text-2xl text-black text-center max-w-3xl">
        Engage Customers Like Never Before!
      </p>
      <div className="w-full mt-8">
        <FeatureGrid />
      </div>
    </section>
  );
};

export default Features;
