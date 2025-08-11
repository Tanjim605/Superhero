import { Link } from "react-router-dom";

// Header component for the application
// It provides a link to the home page with a title

export default function Header() {
  return (
    <Link to={`/`}>
      {" "}
      <h1 className="text-3xl font-bold mb-4">Superhero Database</h1>{" "}
    </Link>
  );
}
