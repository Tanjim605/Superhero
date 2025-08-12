import { ChartBar, Hexagon } from "lucide-react"; // Importing the ChartBar icon
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchSuperheroDetails } from "../apis/api"; // Our API function
import HeroDetailsLoader from "../components/DetailPageLoader";
import ErrorMessage from "../components/ErrorMessage";
import Header from "../components/Header";
import Appearance from "../components/heroDetails/Appearance";
import Biography from "../components/heroDetails/Biography";
import ComicAndAlignment from "../components/heroDetails/ComicAndAlignment";
import Connections from "../components/heroDetails/Connections";
import CreatedAndUpdated from "../components/heroDetails/CreatedAndUpdated";
import HeroImage from "../components/heroDetails/HeroImage";
import Name from "../components/heroDetails/Name";
import PowerStatsBarChart from "../components/heroDetails/PowerStatsBarChart";
import PowerStatsRadarChart from "../components/heroDetails/PowerStatsRadarChart";
import Work from "../components/heroDetails/Work";

function SuperheroDetails() {
  let { heroId } = useParams(); // Get the hero ID from the URL parameters

  const [hero, setHero] = useState(null);
  const [loading, setLoading] = useState(true);
  const [chartType, setChartType] = useState("radar"); // State to toggle between bar and radar chart

  useEffect(() => {
    const loadDetails = async () => {
      try {
        const data = await fetchSuperheroDetails(heroId); // Fetch by ID
        setHero(data);
      } catch (error) {
        console.error("Error fetching details:", error);
      } finally {
        setLoading(false);
      }
    };
    loadDetails();
  }, [heroId]);

  // Scroll to top when the component mounts
  // This ensures that when navigating to the details page, the view starts at the top
  // without this the page loads at the bottom if the user was scrolled down on the homepage
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return <HeroDetailsLoader />; // Add spinner here
  }

  if (!hero) {
    <ErrorMessage>Hero not found!</ErrorMessage>;
  }

  return (
    <div className="relative container mx-auto p-4">
      <Header />

      {/* Back Button */}
      <Link to="/" className=" ">
        <div className="h-12 w-22 ml-4 lg:ml-10 hover:scale-110 transition-all bg-blue-950 rounded-xl shadow-lg mb-4 flex items-center justify-center text-white font-semibold">
          &larr; Back
        </div>
      </Link>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6 md:p-8 dark:bg-slate-900 rounded-lg shadow-lg">
        {/* Main card container */}

        {/* Hero Details Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl w-full flex flex-col lg:flex-row font-inter">
          {/* Left Section: Image, Name and Appearance */}
          <div className="lg:w-1/2 bg-gray-200 dark:bg-slate-900 text-gray-900 dark:text-amber-50 p-6 flex flex-col items-center justify-start relative">
            {/* Main Hero Image */}
            <HeroImage imageData={hero.image} altText={hero.name} />
            {/* Name and Full Name */}
            <Name name={hero.name} fullName={hero.biography["full-name"]} />
            {/* Appearance Section */}
            <Appearance appearance={hero.appearance} />
          </div>

          {/* Right Section: Details */}
          <div className="lg:w-1/2 p-6 bg-white text-gray-800 dark:bg-slate-800 dark:text-gray-300">
            {/* Comic and Alignment Badges */}
            <ComicAndAlignment biography={hero.biography} />

            {/* Toggle Button for Chart Type */}
            <div className="mb-4">
              <button
                onClick={() =>
                  setChartType(chartType === "bar" ? "radar" : "bar")
                }
              >
                {chartType === "bar" ? (
                  <div className="flex items-center gap-2">
                    <Hexagon />
                    <ChartBar className="bg-blue-400 rounded hover:bg-blue-500 h-8 w-8 p-1 transition-colors" />
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Hexagon className="bg-blue-400 rounded hover:bg-blue-500 h-8 w-8 p-1 transition-colors" />
                    <ChartBar />
                  </div>
                )}
              </button>
            </div>
            {/* Power Stats Section based on chart type */}
            {chartType === "bar" ? (
              <PowerStatsBarChart powerStats={hero.powerstats} />
            ) : (
              <PowerStatsRadarChart powerStats={hero.powerstats} />
            )}

            {/* Biography Section */}
            <Biography biography={hero.biography} />

            {/* Work Section */}
            <Work work={hero.work} />

            {/* Connections Section */}
            <Connections connections={hero.connections} />

            {/* Created/Updated Dates */}
            <CreatedAndUpdated created={hero.created} updated={hero.updated} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuperheroDetails;
