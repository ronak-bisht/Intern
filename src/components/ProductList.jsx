import React, { useEffect } from "react";
import Category from "./Category";
import SearchBar from "./Search";
import ProductCard from "./Card";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../Actions/productAction";
import Pagination from "./Pagination";
import NoItemsFound from "./NoItemsFound";
import Loader from "./Loader";

const ProductList = () => {
  const { loading, product, productCount } = useSelector(
    (state) => state.products
  ); // getting product data from store
  const [currentPage, setCurrentPage] = useState(1);

  const [searchParams] = useSearchParams(); // Get search params
  const category = searchParams.get("category"); //Getting a specific parameter from search
  const search = searchParams.get("search");

  const dispatch = useDispatch();

  useEffect(() => {
    //getting data using dispatch and sending parameters to filter the data
    dispatch(getProduct(search, category, currentPage));
  }, [search, category, currentPage]);

  return (
    <div>
      
      {/* Product search and category */}
      <div className="bg-[#180D49] py-[2rem]">
        <SearchBar setCurrentPage={setCurrentPage} /> {/*search bar */}
        <Category setCurrentPage={setCurrentPage} /> {/*category list */}
      </div>


      {loading ? (
        <Loader />
      ) : (
        product &&
        (product.length < 1 ? (
          <NoItemsFound />
        ) : (
          <div className="py-[2rem]">
            {/* Product List */}
            <div className="my-[1rem]">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {product.map((product, i) => (
                    <ProductCard key={i} product={product} />
                  ))}
                </div>
              </div>
            </div>

            {/* Pagination buttons */}
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={Math.ceil(productCount / 15)}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;
