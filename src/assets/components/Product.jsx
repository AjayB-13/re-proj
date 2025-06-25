
import React from "react";

function Product({ product, addToCart }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col justify-between">
      <img src={product.image} alt={product.title} className="h-40 object-contain mx-auto" />
      <h2 className="text-md font-semibold mt-2">{product.title}</h2>
      <p className="text-lg font-bold">${product.price}</p>
      <button
        className="mt-2 bg-blue-600 text-white px-3 py-1 rounded"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Product;