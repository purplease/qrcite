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
    <section className="z-10 self-stretch mt-8 w-full px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {cardData.map((data, index) => (
          <AnalyseCard
            key={data.title}
            title={data.title}
            description={data.description}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

interface AnalyseCardProps {
  title: string;
  description: string;
  index: number;
}

const AnalyseCard = ({ title, description, index }: AnalyseCardProps) => {
  const bgColors = ['bg-blue-100', 'bg-green-100', 'bg-yellow-100', 'bg-purple-100'];
  const textColors = ['text-blue-600', 'text-green-600', 'text-yellow-600', 'text-purple-600'];

  return (
    <div className={`flex flex-col p-6 ${bgColors[index % 4]} rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105`}>
      <h3 className={`text-2xl font-bold mb-4 ${textColors[index % 4]}`}>{title}</h3>
      <p className="text-base text-gray-700 flex-grow">{description}</p>
      <div className={`mt-4 w-12 h-1 ${textColors[index % 4]} bg-current`}></div>
    </div>
  );
};
