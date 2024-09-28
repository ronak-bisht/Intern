import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";

const Category = ({ setCurrentPage }) => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const [activeTab, setActiveTab] = useState(category || "All");
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getCategory = async () => {
        // fetching all categories for user to navigate
      const { data } = await axios(
        "https://dummyjson.com/products/category-list"
      );
      setCategories((pre) => {
        return ["All", ...data];
      });
    };
    getCategory();
  }, []);



  const handleSelect = (tab) => {
    // highlight the selected category
    setActiveTab(tab); 
    setCurrentPage(1);
    navigate(`?category=${tab}`);
  };


  return (
    <div className="flex justify-center mt-8">
      <div className="bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 p-1 rounded-full">
        <div className="flex flex-wrap justify-center space-x-4 bg-gray-900 rounded-full p-2">
            {/* //rendering categories data */}
          {categories.slice(0, 5).map((tab, i) => (
            <button
              key={i}
              onClick={() => handleSelect(tab)}
              className={`px-4 py-2 rounded-full font-semibold ${
                activeTab === tab
                  ? "bg-white text-black"
                  : "text-gray-400 hover:text-white"
              } transition duration-300`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
