import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeContext } from "./context";
import "./index.css";

import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import SuperheroDetails from "./pages/SuperheroDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/details/:heroId",
    element: <SuperheroDetails />,
    errorElement: <ErrorPage />,
  },
]);

export default function App() {
  // Those states are used to manage the theme, pagination, and sorting
  // they are in the root so that they doesn't get reset on navigation


  const [darkMode, setDarkMode] = useState(true); // Default to dark mode
  const [perPage, setPerPage] = useState(5);  // Number of items per page
  const [page, setPage] = useState(1); // Current page number
  const [sortOrder, setSortOrder] = useState("asc"); // 'asc' or 'desc'

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        setDarkMode,
        perPage,
        setPerPage,
        sortOrder,
        setSortOrder,
        page,
        setPage,
      }}
    >
      <div
        className={`${
          darkMode ? "dark" : ""
        } font-sans bg-white dark:bg-slate-900 transition-colors duration-300`}
      >
        <RouterProvider router={router} />
      </div>
    </ThemeContext.Provider>
  );
}
