import type { JSX } from "react";
import { Link, useRouteError } from "react-router-dom";

type CustomErrorType = {
  statusText: string;
  message: string;
};

export default function ErrorPage(): JSX.Element {
  // const error = useRouteError() as CustomErrorType;
  try {
    throw new Error
  } catch (err) {
    console.error(err); // Log the error for debugging
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      {/* <h1 className="text-4xl text-red-500 font-bold mb-4">Something went wrong</h1> */}
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        {/* <i>{error.statusText || error.message}</i> */}
      </p>
      {/* You can add a link to the homepage or other recovery options */}
      <Link to="/" className="text-3xl font-semibold text-blue-500  mt-4">
        Go back to Homepage
      </Link>
    </div>
  );
}
