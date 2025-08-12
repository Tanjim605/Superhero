export default function HomeLoadingCard() {
  return (
    <div className="w-60 h-96 bg-gray-500 mb-4 rounded">
      <div className="animate-pulse flex flex-col space-y-4">
        <div className="m-4 flex flex-col gap-4">
          <div className="h-48 bg-gray-300 rounded"></div>
          <div className="h-6 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  );
}
