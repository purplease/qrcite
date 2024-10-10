import React, { useState } from "react";
import FAQItem, { FAQData } from "./FAQItem";
import { MoveRight } from "lucide-react";

const faqData: FAQData[] = [
  {
    question: "How do smart QR codes improve product visibility?",
    answer:
      "Smart QR codes enhance product visibility by providing real-time tracking throughout the supply chain. They offer full traceability, allowing companies to monitor product movement from manufacturing to sale, through vendors and distributors. This transparency helps in inventory management and reduces the risk of product loss or theft.",
  },
  {
    question: "How does this technology enhance customer engagement?",
    answer:
      "Smart QR codes boost customer engagement by offering interactive experiences. Customers can scan the code to access product information, authenticity verification, user manuals, promotional offers, and even provide feedback. This direct interaction creates a stronger connection between the brand and the consumer, leading to increased loyalty and satisfaction.",
  },
  {
    question: "Can smart QR codes help prevent counterfeiting?",
    answer:
      "Yes, smart QR codes are an effective tool in combating counterfeiting. Each code is unique and can be verified in real-time, making it extremely difficult to replicate. When a customer scans the code, they can instantly confirm the product's authenticity, thereby protecting both the brand and the consumer from counterfeit goods.",
  },
  {
    question: "How do smart QR codes strengthen brand trust?",
    answer:
      "Smart QR codes strengthen brand trust by providing transparency and authenticity. They allow brands to share detailed product information, including origin, materials used, and manufacturing processes. This openness builds consumer confidence. Additionally, by enabling direct feedback and communication, brands can quickly address customer concerns, further enhancing trust.",
  },
  {
    question: "What industries can benefit from smart QR codes?",
    answer:
      "Smart QR codes have applications across numerous industries. They're particularly valuable in retail, food and beverage, pharmaceuticals, luxury goods, and automotive sectors. However, any industry that values supply chain transparency, product authenticity, and enhanced customer engagement can benefit from this technology.",
  },
  {
    question: "How do smart QR codes support sustainability efforts?",
    answer:
      "Smart QR codes support sustainability by reducing the need for printed materials and enabling digital product information. They can provide details about a product's environmental impact, recycling instructions, and the company's sustainability initiatives. This technology also optimizes supply chains, potentially reducing waste and improving overall efficiency.",
  },
  {
    question: "Are smart QR codes different from regular QR codes?",
    answer:
      "Yes, smart QR codes are more advanced than regular QR codes. While regular QR codes typically link to static information, smart QR codes can be updated in real-time and provide dynamic, interactive content. They can also collect data on scans, offering valuable insights to businesses about product engagement and customer behavior.",
  },
  {
    question: "How can I implement smart QR codes for my business?",
    answer:
      "To implement smart QR codes, start by identifying your specific needs and goals. Then, partner with a reputable smart QR code solution provider who can offer a platform tailored to your requirements. They will guide you through the process of generating, managing, and analyzing your smart QR codes. It's important to integrate this technology with your existing systems for maximum efficiency.",
  },
];

const FAQSection: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-20 py-12 w-full bg-gray-50">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center mb-4">
        Frequently Asked Questions
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-gray-700 text-center mb-12">
        Unveiling the Power of Smart QR Codes
      </p>
      <div className="w-full max-w-4xl">
        {faqData.slice(0, showMore ? faqData.length : 6).map((item, index) => (
          <FAQItem key={index} {...item} />
        ))}
      </div>
      {!showMore && faqData.length > 6 && (
        <button
          onClick={() => setShowMore(true)}
          className="mt-8 flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300 font-semibold"
        >
          <span className="mr-2">Show More</span>
          <MoveRight size={20} />
        </button>
      )}
    </section>
  );
};

export default FAQSection;
