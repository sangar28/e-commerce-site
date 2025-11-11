import { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";

const Pagination = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("Pagination must be used within a FilterProvider");
  }
  const { currentPage, itemsPerPage, setCurrentPage } = context;

  const totalProducts = 100;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  const getPaginationButtons = () => {
    const buttons: number[] = [];

    let startPage = currentPage - 1;
    let endPage = currentPage + 1;

    // If start is below 1, shift the window right
    if (startPage < 1) {
      // how much start is below 1
      const diff = 1 - startPage;
      endPage += diff;
      startPage = 1;
    }

    // If end is beyond totalPages, shift the window left
    if (endPage > totalPages) {
      const diff = endPage - totalPages;
      startPage -= diff;
      endPage = totalPages;
    }

    // Ensure start doesn't go below 1 after shifting
    startPage = Math.max(1, startPage);

    for (let page = startPage; page <= endPage; page++) {
      buttons.push(page);
    }
    return buttons;
  };


  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mt-5  ml-40">
      {/* previous button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="border px-4 py-2 mx-2 rounded-full border-gray-300 shadow-lg font-semibold"
      >
        Previous
      </button>
      {/* 1,2,3,4,5,6... */}

      <div className="flex flex-wrap justify-center">
        {getPaginationButtons().map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`border border-gray-200 px-4 py-2 mx-1 rounded-full shadow-xl ${
              page === currentPage ? "bg-black text-white" : ""
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      {/* next button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="border px-4 py-2 mx-2 rounded-full  border-gray-300 shadow-lg"
      >
        Next
      </button>
    </div>
  );
};
export default Pagination;
