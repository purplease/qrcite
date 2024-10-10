import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Features from "./Features";
import HowItWorks from "./HowItWorks";
import KeyBenefits from "./KeyBenefits";
import ConsumerBenefits from "./ConsumerBenefits";
import Testimonials from "./Testimonials";
import FAQ from "./FAQSection";
import Footer from "./Footer";

const SmartQRCodePage: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <KeyBenefits />
      <ConsumerBenefits />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default SmartQRCodePage;
