import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-3 w-full text-base sm:text-lg text-black bg-white">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0966a5f887208c29e823ac43e5866f183930c752d33ccadb01a1695786cdf358?placeholderIfAbsent=true&apiKey=99fc076702324161981b628a0ba62440"
        alt="Company logo"
        className="object-contain w-32 sm:w-36 max-w-full aspect-[4.41]"
      />
      <button
        className="sm:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <nav className={`${isMenuOpen ? 'flex' : 'hidden'} sm:flex flex-col sm:flex-row w-full sm:w-auto gap-4 sm:gap-6 items-center mt-4 sm:mt-0`}>
        <a
          href="#home"
          className="font-bold text-sky-400"
        >
          Home
        </a>
        <a href="#features">
          Features
        </a>
        <a
          href="#testimonials"
        >
          Testimonials
        </a>
        <a href="#about">
          About Us
        </a>
        <button className="px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base font-bold text-white bg-sky-400 rounded-lg">
          Sign up
        </button>
      </nav>
    </header>
  );
};

export default Header;
