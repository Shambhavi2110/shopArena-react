
import React from "react";

const ProductsCards = ({ product, del }) => {
  return (
    <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

      {/* Product Image */}
      <div className="relative bg-slate-50 h-64 flex items-center justify-center p-6">

        <img
          className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300"
          src={product.image}
          alt={product.title}
        />

        <span className="absolute top-4 left-4 bg-white text-slate-600 text-xs font-semibold px-3 py-1 rounded-full shadow-sm capitalize">
          {product.category}
        </span>

      </div>

      {/* Product Details */}
      <div className="p-5 flex flex-col">

        <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">
          Product #{product.id}
        </p>

        <h2 className="font-semibold text-slate-800 mt-2 text-base leading-6 min-h-12">
          {product.title.substring(0, 55)}
          {product.title.length > 55 ? "..." : ""}
        </h2>

        <p className="text-sm text-slate-500 mt-2">
          {product.description.substring(0, 75)}...
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-4">
          <span className="text-yellow-500">★</span>
          <span className="text-sm font-semibold text-slate-700">
            {product.rating.rate}
          </span>
          <span className="text-xs text-slate-400">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Price and Button */}
        <div className="flex justify-between items-center mt-5 pt-4 border-t border-slate-100">

          <div>
            <p className="text-xs text-slate-400">Price</p>
            <h3 className="text-xl font-bold text-slate-900">
              ${product.price}
            </h3>
          </div>

          <button
            onClick={() => del(product.id)}
            className="bg-red-50 text-red-600 hover:bg-red-600 hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
          >
            Delete
          </button>

        </div>

      </div>
    </div>
  );
};

export default ProductsCards;
