import resolveURL from "@/utils/image";
import React from "react";

const columnImages = [
  resolveURL("/images/feedback1.png"),
  resolveURL("/images/feedback2.png"),
];

const imageURL = resolveURL("/images/feedback3.png");

const FeedbackSection: React.FC = () => {
  return (
    <section className="mt-8 lg:mt-16 px-4 md:px-8 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <div className="md:col-span-1 lg:col-span-1 space-y-6">
          {columnImages.map((src, index) => (
            <img
              key={index}
              loading="lazy"
              src={src}
              alt={`Feedback image ${index + 1}`}
              className="w-full h-auto object-cover rounded-2xl transition-transform"
            />
          ))}
        </div>
        <div className="md:col-span-1 lg:col-span-1 flex justify-center items-center">
          <img
            loading="lazy"
            src={imageURL}
            alt="Feedback main image"
            className="w-full max-w-sm h-auto object-cover rounded-2xl transition-transform"
          />
        </div>
        <div className="md:col-span-2 lg:col-span-1">
          <article className="bg-white rounded-2xl shadow-lg p-8 h-full flex flex-col justify-center transition-shadow hover:shadow-xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Share Feedback and Ratings
            </h2>
            <p className="text-lg text-gray-600">
              Easily share your feedback or rate the product with just a scan.
              Your voice helps improve product quality and customer experience,
              giving you direct communication with the brand.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
