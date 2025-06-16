import React from 'react';
import { useCart } from '../Context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="w-full flex-1 bg-gray-50 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        <p className="text-gray-600">Your cart is empty.</p>
        <Link
          to="/shop"
          className="inline-block mt-4 px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
        >
          Go to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full flex-1 bg-gray-50 py-12 px-4 md:px-8">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

      <div className="space-y-6">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="bg-gray-200 px-2 rounded hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="bg-gray-200 px-2 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-xl font-bold text-gray-800">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:underline text-sm"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-right">
        <p className="text-xl font-bold mb-4">Total: ${totalPrice.toFixed(2)}</p>
        <Link
          to="/checkout"
          className="inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
