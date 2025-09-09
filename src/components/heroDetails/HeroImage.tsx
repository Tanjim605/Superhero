interface HeroImageProps {
  image?: {url:string};
  altText?: string;
};

export default function HeroImage({ image, altText }: HeroImageProps) {
  return (
    <img
      src={image?.url}
      alt={altText || "Hero Image"}
      className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto object-contain rounded-lg shadow-lg mb-6"
    />
  );
}
