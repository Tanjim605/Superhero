import { Link } from "react-router-dom";
// HeroCard component to display individual superhero cards on the homepage

export default function HeroCard({ hero }) {
  return (
    <Link to={`/details/${hero.id}`}>
      <div className=" border rounded p-4 shadow-md bg-white dark:bg-slate-800 hover:shadow-lg transition-shadow">
        {/* Displaying superhero image, name, and publisher */}
        <img
          src={hero.image.url}
          alt={hero.name}
          className="w-full object-cover mb-4 rounded"
        />
        <h2 className="text-xl font-semibold dark:text-gray-300">{hero.name}</h2>
        <p className="text-gray-600 dark:text-gray-300">Publisher: {hero.biography.publisher}</p>
      </div>
    </Link>
  );
}
