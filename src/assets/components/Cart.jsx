
import React from "react";


function Cart({ cartItems, onClose, removeFromCart }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-xl relative">
        <h2 className="text-xl font-bold mb-4">Cart Items</h2>
        {cartItems.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          <ul className="space-y-4 max-h-80 overflow-y-auto">
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p>${item.price}</p>
                </div>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <button
          className="absolute top-2 right-2 text-gray-600 text-xl"
          onClick={onClose}
        >
          &times;
        </button>
      </div>
    </div>
  );
}

export default Cart;