import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import SuperheroDetails from "./pages/SuperheroDetails";
import ErrorPage from "./pages/ErrorPage";

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
    errorElement: <ErrorPage/>
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
