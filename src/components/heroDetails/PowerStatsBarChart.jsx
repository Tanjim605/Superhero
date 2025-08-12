export default function PowerStatsBarChart({ powerStats }) {
  const colorClasses = [
    "bg-red-500",
    "bg-blue-500",
    "bg-yellow-500",
    "bg-green-500",
    "bg-orange-500",
    "bg-indigo-500",
  ];
  return (
    <>
      <h2 className="text-2xl font-bold mb-4 border-b pb-2 text-gray-900">
        POWER STATS
      </h2>
      <div className="space-y-3 mb-6 h-48">
        {Object.entries(powerStats).map(([key, value], index) => (
          <div key={key} className="flex items-center text-sm">
            {/* Display each power stat with a label and a bar */}
            <span className="w-24 font-semibold capitalize">{key}:</span>
            <div className="flex-1 bg-gray-200 rounded-full h-2.5 ml-2 mr-2">
              <div
                className={`${colorClasses[index]} h-2.5 rounded-full`} // color classes for different stats
                style={{ width: `${value != "null" ? value : 0}%` }} // Dynamic width based on stat value
              ></div>
            </div>
            <span className="font-bold">{value}</span>
          </div>
        ))}
      </div>{" "}
    </>
  );
}
