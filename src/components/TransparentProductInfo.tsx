import resolveURL from "@/utils/image";
import React from "react";

const sideImages = [
  {
    src: resolveURL(
      "/images/productInfo2.png"
    ),
    alt: "Product information display",
  },
  {
    src: resolveURL(
      "/images/productInfo3.png"
    ),
    alt: "QR code scanning demonstration",
  },
];

const imageURL = resolveURL(
  "/images/productInfo1.png"
);

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
    <div className="flex flex-col w-full h-full">
      <article className="flex flex-col grow px-6 py-8 w-full items-center justify-center  text-black bg-white rounded-[30px] shadow-[0px_1px_8px_rgba(0,0,0,0.15)] md:px-8 md:py-10 lg:px-10 lg:py-12">
        <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-base md:text-lg lg:text-xl md:mt-6 lg:mt-8">
          {description}
        </p>
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
      className={`object-cover w-full h-full rounded-[30px] ${className}`}
    />
  );
};

const LeftImage: React.FC = () => {
  return (
    <div className="aspect-square w-full h-full">
      <ImageCard src={imageURL} alt="Transparent product information concept" />
    </div>
  );
};

const SideImages: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-1 h-full">
      {sideImages.map((image, index) => (
        <div key={index} className="aspect-square">
          <ImageCard src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
  );
};

const TransparentProductInfo: React.FC = () => {
  return (
    <section className="mt-8 lg:mt-16 px-4 md:px-8 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <div className="md:col-span-1 lg:col-span-1">
          <LeftImage />
        </div>
        <div className="md:col-span-1 lg:col-span-1">
          <InfoCard
            title="Transparent Product Information"
            description="Get access to detailed product information right at your fingertips. Scan the QR code to see data provided by manufacturers, vendors, distributors, and sellers. Ensure the product you're buying meets your expectations."
          />
        </div>
        <div className="md:col-span-2 lg:col-span-1">
          <SideImages />
        </div>
      </div>
    </section>
  );
};

export default TransparentProductInfo;
