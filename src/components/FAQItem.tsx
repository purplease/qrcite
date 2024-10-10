import { Plus } from "lucide-react";
import { Minus } from "lucide-react";
import React from "react";

export interface FAQData {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQData> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`flex flex-col w-full text-base sm:text-lg md:text-xl text-gray-800 mt-4 ${
        isOpen ? "bg-blue-50" : "bg-white"
      } rounded-lg sm:rounded-xl md:rounded-2xl shadow-md transition-all duration-300 ease-in-out`}
    >
      <button
        className={`flex items-center justify-between w-full p-4 sm:p-5 md:p-6 font-medium focus:outline-none ${
          isOpen ? "text-blue-600" : "text-gray-800"
        }`}
        onClick={toggleOpen}
      >
        <span className="text-left pr-4">{question}</span>
        {isOpen ? (
          <Minus className="flex-shrink-0 w-6 h-6 text-blue-600" />
        ) : (
          <Plus className="flex-shrink-0 w-6 h-6 text-gray-600" />
        )}
      </button>
      {isOpen && (
        <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6">
          <div className="h-px bg-gray-200 w-full mb-4" />
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;
