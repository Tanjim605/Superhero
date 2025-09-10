import type { JSX } from "react";

interface PowerStatsArrayType {
  [key: string]: number | null;
}

export default function PowerStatsBarChart({ powerstats }: Hero) {
  const colorClasses = [
    "bg-red-500",
    "bg-blue-500",
    "bg-yellow-500",
    "bg-green-500",
    "bg-orange-500",
    "bg-indigo-500",
  ];
  const powerStatsArray = powerstats && Object.entries(powerstats);
  console.log(powerStatsArray);

  return (
    <>
      <h2 className="text-2xl font-bold mb-4 border-b pb-2 text-gray-900 dark:text-amber-100">
        POWER STATS
      </h2>
      <div className="space-y-3 mb-6 h-48">
        {powerStatsArray?.map(
          (
            [key, value]: [string, number | "null"],
            index: number
          ): JSX.Element => (
            <div key={key} className="flex items-center text-sm">
              {/* Display each power stat with a label and a bar */}
              <span className="w-24 font-semibold capitalize">{key}:</span>
              <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 ml-2 mr-2">
                <div
                  className={`${colorClasses[index]} h-2.5 rounded-full`} // color classes for different stats
                  style={{ width: `${value != "null" ? value : 0}%` }} // Dynamic width based on stat value
                ></div>
              </div>
              <span className="font-bold">{value}</span>
            </div>
          )
        )}
      </div>{" "}
    </>
  );
}
