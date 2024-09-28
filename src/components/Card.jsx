import React from 'react';

const ProductCard = ({product}) => {
  return (
    <div className="max-w-sm bg-gray-900 text-white p-4 rounded-lg shadow-md">
      {/* Image */}
      <div className="rounded-lg overflow-hidden mb-4">
        <img
          src={product.images[0]}
          alt="Product"
          className="w-full h-64 object-cover"
        />
      </div>

      {/* Product Information */}
      <div className="text-center">
        <h2 className="text-lg font-semibold">{product.title}</h2>
        <p className="text-blue-400 text-sm">₹{product.price}</p>
        <p className="text-gray-400 text-xs mt-1">{product.description}</p>
        <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
