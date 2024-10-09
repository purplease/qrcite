/**
 * This code was generated by Builder.io.
 */
import React from "react";
import TransparentProductInfo from "./TransparentProductInfo";
import { ProductAuthenticity } from "./ProductAuthenticity";
import FeedbackSection from "./FeedbackSection/FeedbackSection";
import OfferDiscovery from "./OfferDiscovery/OfferDiscovery";

const ConsumerBenefits: React.FC = () => {
  return (
    <section className="flex flex-col px-20 mt-20 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <h2 className="self-start text-6xl font-bold text-neutral-700 max-md:max-w-full max-md:text-4xl">
        For Consumers
      </h2>
      <TransparentProductInfo />
      <ProductAuthenticity />
      <FeedbackSection />
      <OfferDiscovery />
    </section>
  );
};

export default ConsumerBenefits;
