import { ArrowDownAZ, ArrowDownZA } from "lucide-react"; // Importing the ArrowDownAZ icon
import { useEffect, useState } from "react";
import { fetchSuperheroesByApi } from "../apis/api"; // Our API function
import ErrorMessage from "../components/ErrorMessage";
import Header from "../components/Header";
import HeroCard from "../components/HeroCard";
import Loading from "../components/Loading";
import prepareAllFetchingUrl from "../utils/prepareAllFetchingUrl";

const HomePage = () => {
  const [superheroes, setSuperheroes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(15);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // 'asc' or 'desc'

  useEffect(() => {
    const fetchSuperheroes = async () => {
      setLoading(true);

      let baseUrl =
        "https://superhero-api.innovixmatrixsystem.com/api/collections/superheros/records";

      const fetchingUrl = prepareAllFetchingUrl(
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
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchSuperheroes();
  }, [page, perPage, searchQuery, sortOrder]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setPage(1); // Reset to first page on new search
  };

  const handleSortChange = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

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
        <button
          onClick={handleSortChange}
          className="flex bg-slate-500 text-white p-2 rounded shadow-sm border-2 dark:border-slate-100 dark:bg-slate-800 dark:text-slate-300 transition-colors"
        >
          Sort by
          {sortOrder === "asc" ? <ArrowDownAZ /> : <ArrowDownZA />}
        </button>
      </div>

      {/* Displaying loading state while data is fetching from api */}
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
            {superheroes.map((hero) => (
              <HeroCard key={hero.id} hero={hero} />
            ))}
          </div>

          <div className="flex justify-center items-center mt-4 space-x-2 dark:text-slate-300">
            <button
              onClick={() => setPage((page) => Math.max(1, page - 1))}
              disabled={page === 1}
              className="bg-gray-200 dark:bg-gray-800 p-2 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span>
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => setPage((page) => Math.min(totalPages, page + 1))}
              disabled={page === totalPages}
              className="bg-gray-200 dark:bg-gray-800 p-2 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
