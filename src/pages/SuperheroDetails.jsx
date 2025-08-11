import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSuperheroDetails } from "../apis/api"; // Our API function

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
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    ); // Add spinner here
  }

  if (!hero) {
    return <div className="text-center text-red-500">Hero not found!</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4 md:p-8">
      {/* Hero Section */}
      <div className="relative bg-blue-600 text-white rounded-lg overflow-hidden mb-8">
        <img
          src={hero.image.url}
          alt={hero.name}
          className="w-full h-64 object-cover opacity-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl font-bold">{hero.name}</h1>
          <span
            className={`mt-2 px-4 py-1 rounded-full ${
              hero.biography.alignment === "good"
                ? "bg-green-500"
                : "bg-red-500"
            }`}
          >
            {hero.biography.alignment.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: Appearance and Powerstats */}
        <div>
          {/* Appearance Card */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-semibold mb-4">Appearance</h2>
            <ul className="space-y-2">
              <li>
                <strong>Gender:</strong> {hero.appearance.gender}
              </li>
              <li>
                <strong>Race:</strong> {hero.appearance.race}
              </li>
              <li>
                <strong>Height:</strong> {hero.appearance.height.join(" / ")}
              </li>
              <li>
                <strong>Weight:</strong> {hero.appearance.weight.join(" / ")}
              </li>
              <li>
                <strong>Eye Color:</strong> {hero.appearance["eye-color"]}
              </li>
              <li>
                <strong>Hair Color:</strong> {hero.appearance["hair-color"]}
              </li>
            </ul>
          </div>

          {/* Powerstats Card */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Powerstats</h2>
            <div className="space-y-4">
              {Object.entries(hero.powerstats).map(([stat, value]) => (
                <div key={stat}>
                  <div className="flex justify-between mb-1">
                    <span className="capitalize">{stat}</span>
                    <span>{value}</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Biography, Connections, Work */}
        <div>
          {/* Biography Card */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-semibold mb-4">Biography</h2>
            <ul className="space-y-2">
              <li>
                <strong>Full Name:</strong> {hero.biography["full-name"]}
              </li>
              <li>
                <strong>Alter Egos:</strong> {hero.biography["alter-egos"]}
              </li>
              <li>
                <strong>Aliases:</strong> {hero.biography.aliases.join(", ")}
              </li>
              <li>
                <strong>Place of Birth:</strong>{" "}
                {hero.biography["place-of-birth"]}
              </li>
              <li>
                <strong>First Appearance:</strong>{" "}
                {hero.biography["first-appearance"]}
              </li>
              <li>
                <strong>Publisher:</strong> {hero.biography.publisher}
              </li>
            </ul>
          </div>

          {/* Connections Card */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-semibold mb-4">Connections</h2>
            <p>
              <strong>Group Affiliation:</strong>{" "}
              {hero.connections["group-affiliation"]}
            </p>
            <p>
              <strong>Relatives:</strong> {hero.connections.relatives}
            </p>
          </div>

          {/* Work Card */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Work</h2>
            <p>
              <strong>Occupation:</strong> {hero.work.occupation}
            </p>
            <p>
              <strong>Base:</strong> {hero.work.base}
            </p>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="mt-8 text-center">
        <button
          onClick={() => window.history.back()} // Or use navigate if React Router
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Back to List
        </button>
      </div>
    </div>
  );
}

export default SuperheroDetails;
