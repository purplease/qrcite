import resolveURL from "@/utils/image";
import React from "react";
import { siFacebook, siInstagram, siX } from "simple-icons";

const logoURL = resolveURL(
  "/images/b097beff868f34343c28746aae32055666ad66c2d352d9521769619843890027.svg"
);

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col px-4 sm:px-8 md:px-16 lg:px-20 pt-16 sm:pt-20 md:pt-24 pb-6 mt-16 w-full bg-blue-950">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="flex flex-col">
            <div className="flex flex-col text-white">
              <img
                loading="lazy"
                src={logoURL}
                alt="Company logo"
                className="object-contain w-36 sm:w-44 max-w-full aspect-[4.41]"
              />
              <div className="flex flex-col items-start mt-8">
                <h3 className="text-xl sm:text-2xl font-semibold">Call</h3>
                <p className="mt-2 text-gray-300">90203 94857</p>
                <p className="mt-1 text-gray-300">75849 30201</p>
                <h3 className="mt-6 text-xl sm:text-2xl font-semibold">
                  Mail:
                </h3>
                <p className="mt-2 text-gray-300">Contact@brand.com</p>
              </div>
            </div>
          </div>
          <nav className="flex flex-col">
            <div className="flex flex-col items-start text-xl sm:text-2xl font-semibold text-white">
              <a
                href="#features"
                className="hover:text-sky-400 transition-colors"
              >
                Features
              </a>
              <a
                href="#testimonials"
                className="mt-4 hover:text-sky-400 transition-colors"
              >
                Testimonials
              </a>
              <a
                href="#about"
                className="mt-4 hover:text-sky-400 transition-colors"
              >
                About us
              </a>
              <a
                href="#contact"
                className="mt-4 hover:text-sky-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </nav>
          <div className="flex flex-col lg:col-span-2">
            <div className="flex flex-col w-full text-xl sm:text-2xl">
              <h3 className="font-semibold text-white">Join for Free</h3>
              <form className="flex flex-col sm:flex-row gap-3 mt-4">
                <label htmlFor="email" className="sr-only">
                  Enter your mail id
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your mail id"
                  className="px-4 py-3 text-black bg-white rounded-lg w-full sm:w-2/3"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 font-bold text-white bg-sky-400 rounded-lg hover:bg-sky-500 transition-colors w-full sm:w-auto"
                >
                  Signup
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-6 justify-between items-center mt-16 text-lg sm:text-xl font-semibold text-white border-t border-gray-700 pt-6">
        <div className="flex gap-6">
          <a
            href="#"
            aria-label="X (Twitter)"
            className="w-6 h-6 text-white hover:text-sky-400 transition-colors"
            dangerouslySetInnerHTML={{
              __html: siX.svg.replace(
                "<svg",
                '<svg width="100%" height="100%" fill="currentColor"'
              ),
            }}
          />
          <a
            href="#"
            aria-label="Facebook"
            className="w-6 h-6 text-white hover:text-sky-400 transition-colors"
            dangerouslySetInnerHTML={{
              __html: siFacebook.svg.replace(
                "<svg",
                '<svg width="100%" height="100%" fill="currentColor"'
              ),
            }}
          />
          <a
            href="#"
            aria-label="Instagram"
            className="w-6 h-6 text-white hover:text-sky-400 transition-colors"
            dangerouslySetInnerHTML={{
              __html: siInstagram.svg.replace(
                "<svg",
                '<svg width="100%" height="100%" fill="currentColor"'
              ),
            }}
          />
        </div>
        <div className="flex gap-6 text-sm sm:text-base">
          <a href="/terms" className="hover:text-sky-400 transition-colors">
            Terms and conditions
          </a>
          <a href="/privacy" className="hover:text-sky-400 transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
