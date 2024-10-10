import React from "react";

interface Feature {
  imageSrc: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/207ea22f8983f89dfa91271d92e80a0b7e5684a0a0a6edafbe88630b90baa370?placeholderIfAbsent=true&apiKey=99fc076702324161981b628a0ba62440",
    title: "Real-Time Product Insights",
    description:
      "Track product journeys and performance like never before, from factory to customer feedback.",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/642609a2880094a0a86c03feb3315ec06c29223382b2f1f9a02b410cbcf175e8?placeholderIfAbsent=true&apiKey=99fc076702324161981b628a0ba62440",
    title: "Personalized Customer Experiences",
    description:
      "Create personalized customer journeys through the QR code experience. Making each product interaction unique and engaging.",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/cc6c84efe675f8c646920e71b42762df0e865ae02d928781930d9f2956dd6e0e?placeholderIfAbsent=true&apiKey=99fc076702324161981b628a0ba62440",
    title: "Increased Consumer Trust",
    description:
      "Boost customer confidence with transparent product information and authentication at the point of sale.",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/fca246c61a2a0fb3d31f4b19fa9085c582fd6e2401d8c1fd9e2db0f367b4a120?placeholderIfAbsent=true&apiKey=99fc076702324161981b628a0ba62440",
    title: "Multi-Actor Collaboration",
    description:
      "Integrate data from various actors (vendors, sellers, distributors) into one cohesive customer experience.",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/74ccf29bc7e49a57ceef2154e9e37d5b4a1e0bcc20cc9838829557f454bd55bd?placeholderIfAbsent=true&apiKey=99fc076702324161981b628a0ba62440",
    title: "Customer-Centric Engagement",
    description:
      "Directly interact with your customer base through reviews, support requests, and loyalty programs.",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ccd32a9a3cc6c8c10829723770654ac504010b07083d2a6a6743284bb5305af9?placeholderIfAbsent=true&apiKey=99fc076702324161981b628a0ba62440",
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
