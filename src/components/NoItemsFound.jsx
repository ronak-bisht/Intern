import React from 'react';

const NoItemsFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] bg-gray-100 rounded-lg p-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16 text-gray-500"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M9 2a7 7 0 100 14A7 7 0 009 2zM8 7a1 1 0 112 0v3a1 1 0 11-2 0V7zm0 6a1 1 0 112 0 1 1 0 11-2 0z"
          clipRule="evenodd"
        />
      </svg>
      <p className="mt-4 text-lg text-gray-600">No items found</p>
    </div>
  );
};

export default NoItemsFound;
