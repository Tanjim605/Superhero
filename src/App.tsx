import { useContext, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeContext } from "./context/index.js";
import "./style/index.css";

import ErrorPage from "./pages/ErrorPage.js";
import HomePage from "./pages/HomePage.jsx";
import SuperheroDetails from "./pages/SuperheroDetails.jsx";

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

  const [darkMode, setDarkMode] = useState<boolean>(true); // Default to dark mode
  const [perPage, setPerPage] = useState<number>(5); // Number of items per page
  const [page, setPage] = useState<number>(1); // Current page number
  const [sortOrder, setSortOrder] = useState<string>("asc"); // 'asc' or 'desc'
  const [searchQuery, setSearchQuery] = useState<string>(""); // search query is pulled to root level to stay in back switch


  // const {darkMode, setDarkMode} = useContext(ThemeContext)

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
        searchQuery,
        setSearchQuery
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
