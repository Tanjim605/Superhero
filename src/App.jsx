import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import SuperheroDetails from "./pages/SuperheroDetails";

import { useState } from "react";
import { ThemeContext } from "./context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    // children: [
    //   {
    //     path: "/details/:heroId",
    //     element: <SuperheroDetails />,
    //   },
    // ],
    errorElement: <ErrorPage />,
  },
  {
    path: "/details/:heroId",
    element: <SuperheroDetails />,
    errorElement: <ErrorPage />,
  },
]);

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
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
