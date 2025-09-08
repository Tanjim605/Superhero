type HeroImageProps = {
  imageUrl?: string;
  altText?: string;
};

export default function HeroImage({ imageUrl, altText }: HeroImageProps) {
  return (
    <img
      src={imageUrl}
      alt={altText || "Hero Image"}
      className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto object-contain rounded-lg shadow-lg mb-6"
    />
  );
}
