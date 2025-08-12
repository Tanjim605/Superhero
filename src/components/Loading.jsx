import HomeLoadingCard from "./HomeLoadingCard";

export default function Loading() {
  return (
    <>
      {/* <div className="flex justify-center items-center h-screen">
        Loading...
      </div> */}
      <div className=" flex gap-5 justify-center rounded p-4 bg-white dark:bg-slate-800">
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
