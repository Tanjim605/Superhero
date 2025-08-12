import { Moon, Sun } from "lucide-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context"; // Importing the ThemeContext for dark mode

// Header component for the application
// It provides a link to the home page with a title

export default function Header() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  // Toggle dark mode state
  // When darkMode is true, it shows the Moon icon, otherwise it shows the Sun icon
  // Clicking the button toggles the dark mode state

  return (
    <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 dark:text-slate-300">
      <Link to={`/`}>
        {" "}
        <h1 className="text-3xl font-bold mb-4 flex gap-2 items-center">
          <img
            src="../../public/assets/super_favicon.png"
            alt=""
            className="w-12"
          />{" "}
          SuperHero <span className="text-red-400"> Database</span>
        </h1>{" "}
      </Link>

      {/* dark mode toggle button */}
      <button
        onClick={() => setDarkMode((darkMode) => !darkMode)}
        className="flex justify-center ml-4 w-12 p-2 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
        aria-label="Toggle theme"
      >
        {darkMode ? (
          <Moon className="h-6 w-6" />
        ) : (
          <Sun fill="Yellow" className="h-6 w-6" />
        )}
      </button>
    </div>
  );
}
