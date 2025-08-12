export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const getPageNumbers = () => {
    const pages = [];
    const delta = 1; // Show 1 page on each side of current page

    // Always add first page
    pages.push(1);

    // Add ellipsis if gap after first page
    if (currentPage - delta > 2) {
      pages.push("...");
    }

    // Add pages around current page
    const start = Math.max(2, currentPage - delta);
    const end = Math.min(totalPages - 1, currentPage + delta);
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    // Add ellipsis if gap before last page
    if (currentPage + delta < totalPages - 1) {
      pages.push("...");
    }

    // Always add last page
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const handlePageChange = (page) => {
    if (
      page !== "..." &&
      page >= 1 &&
      page <= totalPages &&
      page !== currentPage
    ) {
      onPageChange(page);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-center gap-2 py-4">
      {/* Previous Button */}
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="text-gray-900 dark:text-lime-100 px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Previous
      </button>

      {/* Page Numbers */}
      {getPageNumbers().map((page, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(page)}
          className={`px-3 py-1 rounded-full ${
            page === currentPage
              ? "bg-lime-600 text-white"
              : "bg-gray-200 text-gray-900  dark:text-lime-100 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
          } ${
            page === "..."
              ? "cursor-not-allowed bg-transparent dark:bg-transparent dark:hover:bg-transparent"
              : ""
          }`}
          disabled={page === "..."}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="text-gray-900 dark:text-lime-100 px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
}
