import HomeLoadingCard from "./HomeLoadingCard";

export default function Loading() {
  return (
    <>
      {/* <div className="flex justify-center items-center h-screen">
        Loading...
      </div> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
        <HomeLoadingCard />
        <HomeLoadingCard />
        <HomeLoadingCard />
        <HomeLoadingCard />
        <HomeLoadingCard />

        <h2 className="text-xl font-semibold">{}</h2>
        {/* <p className="text-gray-600">Publisher: {}</p> */}
      </div>
    </>
  );
}
