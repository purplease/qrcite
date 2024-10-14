import resolveURL from "@/utils/image";
import React from "react";

const benefits: BenefitProps[] = [
  {
    title: "Complete Product Visibility",
    description:
      "Gain unmatched visibility into your product's lifecycle. From manufacturing to final sale, track every stage and actor involved. QR codes link real-time data from vendors, distributors, and sellers, so you stay informed.",
    image: resolveURL(
      "/images/benifits1.png"
    ),
    imagePosition: "left",
  },
  {
    title: "Enhanced Customer Interaction",
    description:
      "Turn each product label into a gateway for customer interaction. Customers can scan to see product information, submit feedback, leave reviews, and even interact with your support team directly. Build lasting customer relationships through seamless communication.",
    image: resolveURL(
      "/images/benifits2.png"
    ),
    imagePosition: "right",
  },
  {
    title: "Real-Time Insights and Performance Monitoring",
    description:
      "Monitor key performance indicators (KPIs) like customer feedback, reviews, and product ratings. Access real-time statistics, see product performance on a map, and visualize your customer base in detail—all in one place.",
    image: resolveURL(
      "/images/benifits3.png"
    ),
    imagePosition: "left",
  },
  {
    title: "Strengthened Brand Trust and Support Services",
    description:
      "Your unique QR code not only authenticates products but also connects customers to your support services. Reduce counterfeit risks and enhance post-sale support while building brand loyalty through transparency.",
    image: resolveURL(
      "/images/benifits4.png"
    ),
    imagePosition: "right",
  },
];

interface BenefitProps {
  title: string;
  description: string;
  image: string;
  imagePosition: "left" | "right";
}

const Benefit: React.FC<BenefitProps> = ({
  title,
  description,
  image,
  imagePosition,
}) => (
  <div className="mt-8 w-full max-w-[1225px] sm:mt-12 md:mt-16 lg:mt-20">
    <div
      className={`flex flex-col ${
        imagePosition === "right" ? "sm:flex-row-reverse" : "sm:flex-row"
      } gap-5 sm:gap-8 md:gap-12`}
    >
      <div className="w-full sm:w-1/2">
        <img
          loading="lazy"
          src={image}
          alt={title}
          className="object-cover w-full h-auto rounded-3xl aspect-[1.41]"
        />
      </div>
      <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
        <div className="flex flex-col justify-center h-full">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black">
            {title}
          </h3>
          <p className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-black">
            {description}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const KeyBenefits: React.FC = () => {
  return (
    <section className="flex flex-col px-4 sm:px-8 md:px-12 lg:px-20 py-8 sm:py-12 md:py-16 lg:py-20 w-full">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black">
        Key Benefits
      </h2>
      <h3 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-700">
        For Product Companies
      </h3>
      {benefits.map((benefit, index) => (
        <Benefit key={index} {...benefit} />
      ))}
    </section>
  );
};

export default KeyBenefits;
