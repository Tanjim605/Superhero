import {
  Eye,
  Mars,
  Palette,
  PersonStanding,
  RulerDimensionLine,
  Venus,
  Weight,
} from "lucide-react";

import type { JSX } from "react";

export default function Appearance({ appearance }: Hero): JSX.Element {
  return (
    <div className="w-full bg-white dark:bg-slate-800 rounded-lg p-4 shadow-md border border-gray-200 dark:border-gray-700 text-nowrap">
      <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-amber-100 border-b pb-2">
        APPEARANCE
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm ">
        <div className="flex items-center space-x-2">
          <i className="fas fa-venus-mars "></i>
          {appearance?.gender === "male" ? <Mars /> : <Venus />}{" "}
          <span>Gender:</span>
          <span className="font-medium">{appearance?.gender}</span>
        </div>
        <div className="flex items-center space-x-2">
          <i className="fas fa-running text-gray-500"></i>
          <PersonStanding /> <span>Race:</span>
          <span className="font-medium">{appearance?.race}</span>
        </div>
        <div className="flex items-center space-x-2">
          <i className="fas fa-ruler-vertical text-gray-500"></i>
          <RulerDimensionLine style={{ transform: "rotate(90deg)" }} />{" "}
          <span>Height:</span>
          <span className="font-medium">
            {/* height in feet and inch / cm  */}
            {appearance?.height[0]} / {appearance?.height[1]}{" "}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <i className="fas fa-weight-hanging text-gray-500"></i>
          <Weight /> <span>Weight:</span>
          <span className="font-medium">
            {/* weight in lbs / kg */}
            {appearance?.weight[0]} / {appearance?.weight[1]}{" "}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <i className="fas fa-eye text-gray-500"></i>
          <Eye /> <span>Eye Color:</span>
          <span className="font-medium">{appearance?.["eye-color"]}</span>
        </div>
        <div className="flex items-center space-x-2">
          <i className="fas fa-brush text-gray-500"></i>
          <Palette /> <span>Hair Color:</span>
          <span className="font-medium">{appearance?.["hair-color"]}</span>
        </div>
      </div>
    </div>
  );
}
