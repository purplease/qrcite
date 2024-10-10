import React, { useState, useEffect } from "react";
import { MoveRight, ChevronLeft, ChevronRight } from "lucide-react";

const carouselData = [
  {
    title: "Revolutionize Your Product Journey with Smart QR Codes",
    description:
      "Empower your business with traceability, customer insights, and real-time product data – all in one smart solution.",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ac8e07f3cc6b91791e7f5dfadcf0c4c841bf8d0dcbcf77ac6ff21dc1b743d945?placeholderIfAbsent=true&apiKey=99fc076702324161981b628a0ba62440",
  },
  {
    title: "Ready to Boost Your Product's Traceability",
    description: "Empower your products with our smart QR code solutions",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b79b79b25d9c6886d301a8a126cf433d6c69ad2643dcf33cbc5d25ca65016a98?placeholderIfAbsent=true&apiKey=99fc076702324161981b628a0ba62440",
  },
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselData.length) % carouselData.length
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide();
    }

    if (touchStart - touchEnd < -75) {
      prevSlide();
    }
  };

  return (
    <section className="relative w-full overflow-hidden h-[calc(100vh-64px)]">
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {carouselData.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center px-12 sm:px-8 md:px-16 lg:px-28 text-white">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 max-w-3xl">
                  {slide.title}
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 md:mb-8 max-w-2xl">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
                  <button className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-sky-400 rounded-xl text-sm sm:text-base md:text-lg font-semibold w-full sm:w-auto">
                    Schedule a Demo
                  </button>
                  <a
                    href="#download"
                    className="flex items-center justify-center sm:justify-start text-sm sm:text-base md:text-lg w-full sm:w-auto py-2 sm:py-0"
                  >
                    Download now
                    <MoveRight size={20} className="ml-1 sm:ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-1 sm:p-2 rounded-full z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} className="text-black" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-1 sm:p-2 rounded-full z-10"
        aria-label="Next slide"
      >
        <ChevronRight size={24} className="text-black" />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselData.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
