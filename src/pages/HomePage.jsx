import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchSuperheroesByApi } from "../apis/api"; // Our API function
import prepareAllFetchingUrl from "../utils/prepareAllFetchingUrl";

const HomePage = () => {
  const [superheroes, setSuperheroes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
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

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  if (error)
    return <div className="text-center mt-8 text-red-500">Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Superhero Database</h1>

      <div className="flex flex-col md:flex-row justify-between mb-4 space-y-4 md:space-y-0">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="p-2 border rounded shadow-sm w-full md:w-1/3"
        />
        <button
          onClick={handleSortChange}
          className="bg-blue-500 text-white p-2 rounded shadow-sm hover:bg-blue-600"
        >
          Sort by Name ({sortOrder === "asc" ? "A-Z" : "Z-A"})
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {superheroes.map((hero) => (
          <div key={hero.id} className="border rounded p-4 shadow-md bg-white">
            <h2 className="text-xl font-semibold">{hero.name}</h2>
            <p className="text-gray-600">Publisher: {hero.publisher}</p>
            <Link
              to={`/details/${hero.id}`}
              className="text-blue-500 hover:underline mt-2 block"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-4 space-x-2">
        <button
          onClick={() => setPage((page) => Math.max(1, page - 1))}
          disabled={page === 1}
          className="bg-gray-200 p-2 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => setPage((page) => Math.min(totalPages, page + 1))}
          disabled={page === totalPages}
          className="bg-gray-200 p-2 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HomePage;
