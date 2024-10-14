import resolveURL from "@/utils/image";
import React from "react";

interface Feature {
  imageSrc: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    imageSrc: resolveURL(
      "/images/feature1.svg"
    ),
    title: "Real-Time Product Insights",
    description:
      "Track product journeys and performance like never before, from factory to customer feedback.",
  },
  {
    imageSrc: resolveURL(
      "/images/feature2.svg"
    ),
    title: "Personalized Customer Experiences",
    description:
      "Create personalized customer journeys through the QR code experience. Making each product interaction unique and engaging.",
  },
  {
    imageSrc: resolveURL(
      "/images/feature3.svg"
    ),
    title: "Increased Consumer Trust",
    description:
      "Boost customer confidence with transparent product information and authentication at the point of sale.",
  },
  {
    imageSrc: resolveURL(
      "/images/feature4.svg"
    ),
    title: "Multi-Actor Collaboration",
    description:
      "Integrate data from various actors (vendors, sellers, distributors) into one cohesive customer experience.",
  },
  {
    imageSrc: resolveURL(
      "/images/feature5.svg"
    ),
    title: "Customer-Centric Engagement",
    description:
      "Directly interact with your customer base through reviews, support requests, and loyalty programs.",
  },
  {
    imageSrc: resolveURL(
      "/images/feature6.svg"
    ),
    title: "Enhanced Visibility & Traceability",
    description:
      "Smart QR codes provide real-time tracking for complete product visibility.",
  },
];

interface FeatureCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <article className="flex flex-col grow items-start p-6 w-full bg-slate-50 rounded-[39px] shadow-[0px_0px_10px_rgba(0,123,255,0.25)]">
      <img
        loading="lazy"
        src={imageSrc}
        alt=""
        className="object-contain w-[100px] h-[100px]"
      />
      <h2 className="mt-10 text-3xl font-bold text-black">{title}</h2>
      <p className="mt-7 text-2xl text-black">{description}</p>
    </article>
  );
};

const FeatureGrid: React.FC = () => {
  return (
    <section className="box-border flex flex-col shrink-0 mt-16 max-md:mt-10">
      <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
        {features.map((feature, index) => (
          <div key={index} className="flex">
            <FeatureCard {...feature} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureGrid;
