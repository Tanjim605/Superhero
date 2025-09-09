import type { JSX } from "react";
import { Link } from "react-router-dom";
import type { HeroProps } from "../types/hero.types.js";

// HeroCard component to display individual superhero cards on the homepage
export default function HeroCard({
  id,
  image,
  name,
  biography,
}: HeroProps): JSX.Element {
  return (
    <Link to={`/details/${id}`}>
      <div className="relative w-full flex bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-lime-300 hover:shadow-md transition-all duration-300 hover:scale-105">
        {/* Card Background and Image */}
        <div className="relative w-full h-80 sm:h-96 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
          <img
            src={image?.url}
            alt={name}
            className="w-full object-cover rounded"
          />
        </div>

        {/* Naming Section with blur */}
        <div className="absolute bottom-5 left-5 right-5 h-22 rounded-3xl border-1 border-lime-300  bg-opacity-30 backdrop-filter backdrop-blur-lg  flex items-end p-4 transition-all duration-300 ease-out">
          {" "}
          {/* Added transition for smooth animation */}
          <div className="flex justify-between items-center text-white w-full">
            <div className="flex flex-col">
              <span className="text tracking-wide">
                {biography && biography["publisher"]}
              </span>
              <span className="text-2xl font-bold mt-1">{name}</span>
            </div>

            {/* Navigation Button */}
            <button className="w-12 h-12 bg-lime-500 rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-opacity-75">
              {/* Arrow icon using inline SVG for simplicity */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
