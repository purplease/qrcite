import resolveURL from "@/utils/image";
import React from "react";

const images = [
  {
    src: resolveURL(
      "/images/Authenticity1.png"
    ),
    alt: "Product verification image 1",
  },
  {
    src: resolveURL(
      "/images/Authenticity2.png"
    ),
    alt: "Product verification image 2",
  },
  {
    src: resolveURL(
      "/images/Authenticity3.png"
    ),
    alt: "Product verification image 3",
  },
];

interface InfoCardProps {
  title: string;
  description: string;
  className?: string;
}

interface ImageCardProps {
  src: string;
  alt: string;
  className?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col w-full lg:w-[51%]">
      <article className="flex flex-col grow px-6 py-12 lg:px-8 lg:py-24 w-full text-black bg-white rounded-[30px] shadow-[0px_1px_8px_rgba(0,0,0,0.15)]">
        <h2 className="text-3xl lg:text-4xl font-semibold">{title}</h2>
        <p className="mt-4 lg:mt-9 text-lg lg:text-2xl">{description}</p>
      </article>
    </div>
  );
};

const ImageCard: React.FC<ImageCardProps> = ({ src, alt, className = "" }) => {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className={`object-cover w-full rounded-[30px] ${className}`}
    />
  );
};

export const ProductAuthenticity: React.FC = () => {
  return (
    <section className="mt-6 px-4 lg:px-0">
      <div className="flex flex-col lg:flex-row gap-5 lg:items-center">
        <InfoCard
          title="Verify Product Authenticity"
          description="Don't risk buying counterfeit goods. Our QR codes allow you to verify the authenticity of a product instantly. Trust that the product you purchase is genuine, certified, and comes with verified brand credentials."
        />
        <div className="flex flex-row lg:flex-col w-full lg:w-3/12 gap-5">
          <div className="w-1/2 lg:w-full">
            <ImageCard
              src={images[0].src}
              alt={images[0].alt}
              className="aspect-square lg:aspect-[1.42]"
            />
          </div>
          <div className="w-1/2 lg:w-full">
            <ImageCard
              src={images[1].src}
              alt={images[1].alt}
              className="aspect-square lg:aspect-[1.42]"
            />
          </div>
        </div>
        <div className="flex flex-col w-full lg:w-3/12">
          <ImageCard
            src={images[2].src}
            alt={images[2].alt}
            className="aspect-square w-1/2 mx-auto lg:aspect-[0.68] lg:w-[302px]"
          />
        </div>
      </div>
    </section>
  );
};
