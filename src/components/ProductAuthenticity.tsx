/**
 * This code was generated by Builder.io.
 */
import React from "react";
import ImageCard from "./ImageCard";
import InfoCard from "./InfoCard";

interface ProductAuthenticityProps {}

export const ProductAuthenticity: React.FC<ProductAuthenticityProps> = () => {
  const images = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b38ae1407af3301919de9db2386bb8cf74cf93a29ee6f645c20857ca1e503b7e?placeholderIfAbsent=true&apiKey=99fc076702324161981b628a0ba62440",
      alt: "Product verification image 1",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/da1d050324c6b7b2f4ad13df2c2b704d0f5f7b7c5bf80e8a8cfca7441c60bde4?placeholderIfAbsent=true&apiKey=99fc076702324161981b628a0ba62440",
      alt: "Product verification image 2",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5e8e8f99438724d884a8424f23496d02d06fbb5828c48ffbe5a8bf8c34e88167?placeholderIfAbsent=true&apiKey=99fc076702324161981b628a0ba62440",
      alt: "Product verification image 3",
    },
  ];

  return (
    <section className="mt-6 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <InfoCard
          title="Verify Product Authenticity"
          description="Don't risk buying counterfeit goods. Our QR codes allow you to verify the authenticity of a product instantly. Trust that the product you purchase is genuine, certified, and comes with verified brand credentials."
        />
        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow max-md:mt-6">
            <ImageCard src={images[0].src} alt={images[0].alt} />
            <ImageCard
              src={images[1].src}
              alt={images[1].alt}
              className="mt-5"
            />
          </div>
        </div>
        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <ImageCard
            src={images[2].src}
            alt={images[2].alt}
            className="grow shrink-0 max-w-full aspect-[0.68] w-[302px] max-md:mt-6"
          />
        </div>
      </div>
    </section>
  );
};
