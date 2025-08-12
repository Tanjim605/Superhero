export default function Appearance({ appearance }) {
  return (
    <div className="w-full bg-white rounded-lg p-4 shadow-md border border-gray-200">
      <h2 className="text-xl font-bold mb-3 text-gray-800 border-b pb-2">
        APPEARANCE
      </h2>
      <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-700">
        <div className="flex items-center space-x-2">
          <i className="fas fa-venus-mars text-gray-500"></i>
          <span>Gender:</span>
          <span className="font-medium">{appearance.gender}</span>
        </div>
        <div className="flex items-center space-x-2">
          <i className="fas fa-running text-gray-500"></i>
          <span>Race:</span>
          <span className="font-medium">{appearance.race}</span>
        </div>
        <div className="flex items-center space-x-2">
          <i className="fas fa-ruler-vertical text-gray-500"></i>
          <span>Height:</span>
          <span className="font-medium">
            {/* height in feet and inch / cm  */}
            {appearance.height[0]} / {appearance.height[1]}{" "}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <i className="fas fa-weight-hanging text-gray-500"></i>
          <span>Weight:</span>
          <span className="font-medium">
                {/* weight in lbs / kg */}
            {appearance.weight[0]} / {appearance.weight[1]}{" "}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <i className="fas fa-eye text-gray-500"></i>
          <span>Eye Color:</span>
          <span className="font-medium">{appearance["eye-color"]}</span>
        </div>
        <div className="flex items-center space-x-2">
          <i className="fas fa-brush text-gray-500"></i>
          <span>Hair Color:</span>
          <span className="font-medium">{appearance["hair-color"]}</span>
        </div>
      </div>
    </div>
  );
}
