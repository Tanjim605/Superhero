export default function HeroImage({ imageData, altText }) {
  return (
    <img
      src={imageData.url}
      alt={altText || "Hero Image"}
      className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto object-contain rounded-lg shadow-lg mb-6"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src =
          "https://placehold.co/400x400/CCCCCC/666666?text=No+Image"; // Placeholder on error
      }}
    />
  );
}
