import { ArrowDownAZ, ArrowDownZA } from "lucide-react"; // Importing the ArrowDownAZ icon
import { useContext, useEffect, useState, type ChangeEvent } from "react";
import { fetchSuperheroesByApi } from "../apis/api.js"; // Our API function
import ErrorMessage from "../components/ErrorMessage.js";
import Header from "../components/Header.js";
import HeroCard from "../components/HeroCard.js";
import Loading from "../components/Loading.js";
import Pagination from "../components/Pagination.js";
import { ThemeContext } from "../context/index.js"; // Importing the ThemeContext
import type { HeroProps } from "../types/hero.types.js";
import prepareAllFetchingUrl from "../utils/prepareAllFetchingUrl.js"; // Utility function to prepare the fetching URL

type ContextProps = {
  perPage: number;
  setPerPage: React.Dispatch<React.SetStateAction<number>>;
  sortOrder: string;
  setSortOrder: React.Dispatch<React.SetStateAction<string>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

export default function HomePage() {
  // State variables to manage superheroes data, loading state, error state, and pagination
  const [superheroes, setSuperheroes] = useState<HeroProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | string>(null);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Using ThemeContext to access the theme, pagination, and sorting states
  const { perPage, setPerPage, sortOrder, setSortOrder, page, setPage } =
    useContext(ThemeContext) as ContextProps;

  useEffect(() => {
    const fetchSuperheroes = async () => {
      setLoading(true);

      let baseUrl: string =
        "https://superhero-api.innovixmatrixsystem.com/api/collections/superheros/records";

      const fetchingUrl: string = prepareAllFetchingUrl(
        baseUrl,
        page,
        perPage,
        searchQuery,
        sortOrder
      );

      try {
        const data = await fetchSuperheroesByApi(fetchingUrl);

        setSuperheroes(data.items);
        setTotalPages(data.totalPages);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          console.log("Unknown Error type: ", err);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchSuperheroes();
  }, [page, perPage, searchQuery, sortOrder]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setPage(1); // Reset to first page on new search
  };

  // Function to handle sorting order change between ascending and descending by name
  const handleSortChange = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  // If there's an error, display the error message
  if (error) {
    <ErrorMessage> Error: {error}</ErrorMessage>;
  }

  return (
    <div className="container mx-auto p-4 dark:bg-slate-900 min-h-screen">
      <Header />
      <div className="flex flex-col md:flex-row justify-between mb-4 space-y-4 md:space-y-0 dark:text-slate-300">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="p-2 border rounded shadow-sm w-full md:w-1/3 dark:bg-slate-800 dark:text-slate-300"
        />
        <div className="flex items-center space-x-2">
          {/* Per Page Selection */}
          <label className="text-sm">Show:</label>
          <select
            value={perPage}
            // e.target.value string return kore oitake number e convert korte hoilo state type er shate milate
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setPerPage(Number(e.target.value))}
            className="p-2 w-24 border rounded shadow-sm dark:bg-slate-800 dark:text-slate-300"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
            <option value={25}>25</option>
          </select>

          {/* Sort Button */}
          <button
            onClick={handleSortChange}
            className="flex bg-slate-500 text-white p-2 rounded shadow-sm border-1 dark:border-slate-100 dark:bg-slate-800 dark:text-slate-300 transition-colors"
          >
            Sort by
            {sortOrder === "asc" ? <ArrowDownAZ /> : <ArrowDownZA />}
          </button>
        </div>
      </div>

      {/* Displaying loading state while data is fetching from api */}
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
            {superheroes.map(
              (hero) =>
                hero.biography && (
                  <HeroCard
                    key={hero.id}
                    id={hero.id ?? ""}
                    image={hero.image ?? { url: "" }}
                    name={hero.name ?? ""}
                    biography={hero.biography}
                  />
                )
            )}
          </div>

          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </>
      )}
    </div>
  );
}
