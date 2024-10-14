import resolveURL from "@/utils/image";
import React from "react";

const sideImages = [
  {
    src: resolveURL(
      "/images/discovery2.png"
    ),
    alt: "Offer image 1",
  },
  {
    src: resolveURL(
      "/images/discovery3.png"
    ),
    alt: "Offer image 2",
  },
];

const imageURL = resolveURL(
  "/images/discovery1.png"
);

const OfferDiscovery: React.FC = () => {
  return (
    <section className="mt-8 md:mt-12 lg:mt-16 px-4 md:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        <div className="lg:w-1/3 order-2 lg:order-1">
          <img
            loading="lazy"
            src={imageURL}
            alt="Main offer image"
            className="hidden lg:block w-full h-auto max-h-[300px] md:max-h-none object-cover rounded-2xl transition-transform"
          />
        </div>
        <div className="lg:w-1/3 order-3 lg:order-2">
          <article className="bg-white rounded-2xl shadow-lg p-6 md:p-8 lg:p-10 h-full flex flex-col justify-center transition-shadow">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
              Discover Offers, Loyalty Programs & More
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600">
              Unlock exclusive deals, loyalty programs, and special offers. Scan
              the QR code to see product expiration dates, certifications, and
              promotions designed to enhance your shopping experience.
            </p>
          </article>
        </div>
        <div className="lg:w-1/3 grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-6 order-1 lg:order-3">
          {sideImages.map((image, index) => (
            <img
              loading="lazy"
              key={index}
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-cover rounded-2xl transition-transform"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferDiscovery;
