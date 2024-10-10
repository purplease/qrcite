import resolveURL from "@/utils/image";
import React from "react";

const testimonials: TestimonialProps[] = [
  {
    image: resolveURL(
      "/images/ca8d22e00600504af0e57f8ff407b4a53796874e001e164f8be4666959dc4943.png"
    ),
    name: "Emily Johnson",
    content:
      "Since implementing QRCite's QR code solution, we've seen a huge improvement in customer engagement. The real-time feedback and product verification features have greatly increased trust in our brand.",
  },
  {
    image: resolveURL(
      "/images/49feea45f96f6fa796df8c48c2c346fe06af21ef30e28e0e10ffd80ab063b937.png"
    ),
    name: "David Lee",
    content:
      "QRCite gave us the tools we needed to optimize our product tracking process. The smart QR codes provided us with instant data and insights, helping us streamline operations and boost customer satisfaction.",
  },
];

interface TestimonialProps {
  image: string;
  name: string;
  content: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ image, name, content }) => (
  <div className="flex flex-col w-full lg:w-1/2 p-4">
    <div className="flex flex-col h-full bg-white rounded-3xl shadow-lg transition-all duration-300 hover:shadow-xl p-6">
      <img
        loading="lazy"
        src={image}
        alt={`${name}'s profile`}
        className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
      />
      <h3 className="text-2xl font-semibold text-gray-800 text-center mb-3">
        {name}
      </h3>
      <p className="text-lg text-gray-600 flex-grow">{content}</p>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl font-semibold text-gray-800 mb-2">
          Testimonials
        </h3>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-12">
          What Our Clients Say
        </h2>
        <div className="flex flex-col lg:flex-row gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
