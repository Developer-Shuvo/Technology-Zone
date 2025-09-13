import React, { useEffect, useState } from "react";

const AddToCartDetailsPage = () => {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  if (cart.length === 0) {
    return (
      <div className="flex items-center justify-center h-[80vh]">
        <h2 className="text-gray-500 text-xl font-semibold">
          🛒 Your cart is empty
        </h2>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">Your Shopping Cart</h1>

      <div className="grid gap-6">
        {cart.map((product) => (
          <div
            key={product.id}
            className="flex items-center bg-white shadow-md rounded-2xl p-4 border hover:shadow-lg transition"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.title}
              className="w-28 h-28 object-cover rounded-xl border"
            />

            {/* Product Info */}
            <div className="flex-1 ml-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {product.title}
              </h2>
              <p className="text-sm text-gray-500">{product.categories}</p>

              {/* Rating */}
              <div className="flex items-center mt-1">
                <span className="text-yellow-500 mr-1">⭐</span>
                <span className="text-sm text-gray-600">{product.rating}</span>
              </div>

              {/* Prices */}
              <div className="mt-2">
                <span className="text-xl font-bold text-green-600">
                  ${product.price}
                </span>
                <span className="ml-2 text-sm text-gray-400 line-through">
                  ${product.oldPrice}
                </span>
              </div>
            </div>

            {/* Remove Button */}
            <button
              onClick={() => removeFromCart(product.id)}
              className="ml-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Cart Total */}
      <div className="mt-8 bg-gray-100 p-6 rounded-xl shadow-inner">
        <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
        <p className="text-lg">
          Total Items: <span className="font-semibold">{cart.length}</span>
        </p>
        <p className="text-lg">
          Total Price:{" "}
          <span className="font-semibold text-green-600">
            ${cart.reduce((sum, item) => sum + item.price, 0)}
          </span>
        </p>
        <button className="mt-4 w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default AddToCartDetailsPage;
