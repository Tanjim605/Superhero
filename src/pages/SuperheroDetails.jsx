import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSuperheroDetails } from "../apis/api"; // Our API function
import ErrorMessage from "../components/ErrorMessage";
import Appearance from "../components/heroDetails/Appearance";
import Biography from "../components/heroDetails/Biography";
import ComicAndAlignment from "../components/heroDetails/ComicAndAlignment";
import Connections from "../components/heroDetails/Connections";
import CreatedAndUpdated from "../components/heroDetails/CreatedAndUpdated";
import HeroImage from "../components/heroDetails/HeroImage";
import Name from "../components/heroDetails/Name";
import PowerStatsBarChart from "../components/heroDetails/PowerStatsBarChart";
import Work from "../components/heroDetails/Work";
import Loading from "../components/Loading";

function SuperheroDetails() {
  let { heroId } = useParams(); // Get the hero ID from the URL parameters

  const [hero, setHero] = useState(null);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return <Loading />; // Add spinner here
  }

  if (!hero) {
    <ErrorMessage>Hero not found!</ErrorMessage>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Main card container */}
      <div className="bg-white rounded-lg shadow-2xl overflow-hidden max-w-4xl w-full flex flex-col lg:flex-row font-inter">
        {/* Left Section: Image and Name */}
        <div className="lg:w-1/2 bg-gray-200 p-6 flex flex-col items-center justify-start relative">
          {/* Main Hero Image */}
          <HeroImage imageData={hero.image} altText={hero.name} />
          {/* Name and Full Name */}
          <Name name={hero.name} fullName={hero.biography["full-name"]} />
          {/* Appearance Section */}
          <Appearance appearance={hero.appearance} />
        </div>

        {/* Right Section: Details */}
        <div className="lg:w-1/2 p-6 bg-white text-gray-800">
          {/* Comic and Alignment Badges */}
          <ComicAndAlignment biography={hero.biography} />
          {/* Power Stats Section */}
          <PowerStatsBarChart powerStats={hero.powerstats} />
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
  );
}

export default SuperheroDetails;
