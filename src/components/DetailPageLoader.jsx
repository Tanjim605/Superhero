import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function HeroDetailsLoader() {
  return (
    <div className="relative container mx-auto p-4">
      <Header />

      {/* Back Button */}
      <Link to="/" className=" ">
        <div className="absolute left-10 top-32 h-12 w-22 hover:scale-110 transition-all  bg-blue-950 dark:bg-orange-600 rounded-xl shadow-lg mb-4 flex items-center justify-center text-white font-semibold">
          &larr; Back
        </div>
      </Link>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6 md:p-8 dark:bg-slate-900 rounded-lg shadow-lg">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl w-full flex flex-col lg:flex-row font-inter">
          {/* Left Section: Image, Name and Appearance Placeholders */}
          <div className="lg:w-1/2 bg-gray-200 dark:bg-slate-900 p-6 flex flex-col items-center justify-start relative">
            {/* Main Hero Image Placeholder */}
            <div className="w-full h-64 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-lg"></div>

            {/* Name and Full Name Placeholders */}
            <div className="mt-6 w-3/4 h-8 bg-gray-300 dark:bg-gray-700 animate-pulse rounded"></div>
            <div className="mt-2 w-1/2 h-4 bg-gray-300 dark:bg-gray-700 animate-pulse rounded"></div>

            {/* Appearance Section Placeholders */}
            <div className="mt-8 w-full space-y-3">
              {
                <div className="h-4 bg-gray-300 dark:bg-gray-700 animate-pulse rounded w-full"></div>
              }
            </div>
          </div>

          {/* Right Section: Details Placeholders */}
          <div className="lg:w-1/2 p-6 bg-white dark:bg-slate-800">
            {/* Comic and Alignment Badges Placeholders */}
            <div className="flex flex-wrap gap-2 mb-6">
              <div className="h-6 w-32 bg-gray-200 dark:bg-gray-600 animate-pulse rounded-full"></div>
              <div className="h-6 w-24 bg-gray-200 dark:bg-gray-600 animate-pulse rounded-full"></div>
            </div>

            {/* Toggle Button for Chart Type Placeholder */}
            <div className="mb-6 flex items-center gap-2">
              <div className="h-8 w-8 bg-gray-200 dark:bg-gray-600 animate-pulse rounded"></div>
              <div className="h-8 w-8 bg-gray-200 dark:bg-gray-600 animate-pulse rounded"></div>
            </div>

            {/* Power Stats Chart Placeholder */}
            <div className="h-32 bg-gray-200 dark:bg-gray-600 animate-pulse rounded-lg mb-6"></div>

            {/* Biography Section Placeholder */}
            <div className="mb-6">
              <div className="h-6 w-40 bg-gray-200 dark:bg-gray-600 animate-pulse rounded mb-4"></div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 dark:bg-gray-600 animate-pulse rounded w-full"></div>
              </div>
            </div>

            {/* Work Section Placeholder */}
            <div className="mb-6">
              <div className="h-6 w-32 bg-gray-200 dark:bg-gray-600 animate-pulse rounded mb-4"></div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 dark:bg-gray-600 animate-pulse rounded w-3/4"></div>
              </div>
            </div>

            {/* Connections Section Placeholder */}
            <div className="mb-6">
              <div className="h-6 w-40 bg-gray-200 dark:bg-gray-600 animate-pulse rounded mb-4"></div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 dark:bg-gray-600 animate-pulse rounded w-full"></div>
              </div>
            </div>

            {/* Created/Updated Dates Placeholder */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="h-4 w-48 bg-gray-200 dark:bg-gray-600 animate-pulse rounded"></div>
              <div className="h-4 w-48 bg-gray-200 dark:bg-gray-600 animate-pulse rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
