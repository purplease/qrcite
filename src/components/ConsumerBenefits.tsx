import React from "react";
import TransparentProductInfo from "./TransparentProductInfo";
import { ProductAuthenticity } from "./ProductAuthenticity";
import FeedbackSection from "./FeedbackSection";
import OfferDiscovery from "./OfferDiscovery";

const ConsumerBenefits: React.FC = () => {
  return (
    <section className="flex flex-col px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 lg:py-20 w-full bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-700 mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center sm:text-left">
          For Consumers
        </h2>
        <div className="space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-20">
          <TransparentProductInfo />
          <ProductAuthenticity />
          <FeedbackSection />
          <OfferDiscovery />
        </div>
      </div>
    </section>
  );
};

export default ConsumerBenefits;
