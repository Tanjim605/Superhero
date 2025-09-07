import type { JSX } from "react";

export default function HomeLoadingCard(): JSX.Element {
  return (
    <div className="relative w-[364px] flex flex-wrap bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-amber-400 hover:shadow-md transition-all duration-300 hover:scale-105">
      {/* Card Background and Image Placeholder */}
      <div className="relative w-full h-80 sm:h-96 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
        <div className="w-full h-full bg-gray-300 dark:bg-gray-700 animate-pulse rounded"></div>
      </div>

      {/* Naming Section with Blur Placeholder */}
      <div className="absolute bottom-5 left-5 right-5 h-22 rounded-3xl border-1 border-lime-300 bg-opacity-30 backdrop-filter backdrop-blur-lg flex items-end p-4 transition-all duration-300 ease-out">
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col">
            {/* Publisher Placeholder */}
            <div className="h-4 min-w-24 bg-gray-300 dark:bg-gray-600 animate-pulse rounded"></div>
            {/* Name Placeholder */}
            <div className="h-6 min-w-40 mt-1 bg-gray-300 dark:bg-gray-600 animate-pulse rounded"></div>
          </div>

          {/* Navigation Button Placeholder */}
          <button className="w-12 h-12 bg-lime-500 rounded-full flex items-center justify-center shadow-lg">
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
  );
}
