import type { JSX } from "react";

export default function ComicAndAlignment({
  biography,
}: Hero): JSX.Element {
  return (
    <div className="flex items-center space-x-2 mb-4">
      <span
        className={`px-3 py-1 ${
          biography?.alignment === "good" ? "bg-green-500" : "bg-red-500"
        } text-white text-xs font-bold rounded-full`}
      >
        {biography?.alignment.toUpperCase()}
      </span>
      <span className="px-3 py-1 bg-gray-700 text-white text-xs font-bold rounded-full">
        {biography?.publisher}
      </span>{" "}
      {/* Placeholder for COMICS */}
    </div>
  );
}
