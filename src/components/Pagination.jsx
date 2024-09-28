import React from "react";

const Pagination = ({ setCurrentPage, totalPages, currentPage }) => {
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // this function will return all the pagination tabs as per totalPages
  const renderPagination = () => {
    const paginationItems = [];
    //loop will run totalPages time
    for (let i = 1; i <= totalPages; i++) {
      paginationItems.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`pagination-item w-[40px] h-[40px] rounded-full px-3 py-2 mx-1 ${
            currentPage === i //check and highlight the current page
              ? "bg-[#3d6497] text-white"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          {i}
        </button>
      );
    }

    return paginationItems;
  };

  return (
    <div className="flex flex-wrap justify-center items-center mt-4">

      {/*previous page button */}
      <button
        className={`pagination-arrow w-[40px] h-[40px] flex justify-center items-center px-4 py-2 mr-2 rounded-full ${
          currentPage === 1
            ? "bg-gray-200 text-gray-600 cursor-not-allowed"
            : "bg-grey-200 text-gray-600"
        }`}
        onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </div>
      </button>

      {/* rendering pagination buttons */}
      {renderPagination()}

      {/*next page button */}
      <button
        className={`pagination-arrow flex justify-center items-center w-[40px] h-[40px] px-4 py-2 ml-2 rounded-full ${
          currentPage === totalPages
            ? "bg-gray-200 text-gray-600 cursor-not-allowed"
            : "bg-gray-200 text-gray-600"
        }`}
        onClick={() =>
          currentPage < totalPages && handlePageChange(currentPage + 1)
        }
        disabled={currentPage === totalPages}
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default Pagination;
