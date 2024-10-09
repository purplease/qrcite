/**
 * This code was generated by Builder.io.
 */
import React from "react";

const cardData = [
  {
    title: "Scan",
    description:
      "Each product label has a unique QR code. Customers simply scan it with their smartphone.",
  },
  {
    title: "Explore",
    description:
      "Gain access to information from different stakeholders, including manufacturers, vendors and distributors.",
  },
  {
    title: "Engage",
    description:
      "Customers can leave feedback, check product authenticity, and explore offers.",
  },
  {
    title: "Analyse",
    description:
      "Product companies get real time data on customer engagement, feedback and product performance",
  },
];

export const ScanEngageSection: React.FC = () => {
  return (
    <section className="z-10 self-stretch mt-0 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        {cardData.map((data) => (
          <AnalyseCard
            key={data.title}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>
    </section>
  );
};

interface AnalyseCardProps {
  title: string;
  description: string;
}

const AnalyseCard = ({ title, description }: AnalyseCardProps) => {
  return (
    <div className="flex flex-col p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-base text-gray-600">{description}</p>
    </div>
  );
};
