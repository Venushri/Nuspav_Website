import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import emptyWishlistImg from "../assets/wish_Img.png";

const Wishlist = () => {
  const navigate = useNavigate();
  const wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
  const isLoggedIn = !!localStorage.getItem('user');

  const removeFromWishlist = (id) => {
    const updated = wishlistItems.filter(item => item.id !== id);
    localStorage.setItem('wishlist', JSON.stringify(updated));
    window.location.reload();
  };

  // Empty state
  if (wishlistItems.length === 0) {
    return (
      <div className="w-full flex-1 bg-gray-50 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Your Wishlist</h2>
        <div className="flex justify-center mb-4">
          <img 
            src={emptyWishlistImg} 
            alt="Empty Wishlist" 
            className="w-60 h-60 object-contain opacity-80"
          />
        </div>
        <p className="text-gray-600 mb-4">Your wishlist is empty.</p>
        <Link
          to="/"
          className="inline-block px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
        >
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full flex-1 bg-gray-50 py-12 px-4 md:px-8">
      <h2 className="text-3xl font-bold mb-6">Your Wishlist</h2>

      <div className="space-y-6">
        {wishlistItems.map(item => (
          <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-lg shadow">
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-20 h-20 object-cover rounded" 
              />
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 w-full sm:w-auto mt-4 sm:mt-0 justify-end">
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="text-red-500 hover:underline text-sm whitespace-nowrap"
              >
                Remove
              </button>
              <button
                onClick={() => !isLoggedIn ? navigate('/login') : null /* Add purchase logic */}
                className="px-4 py-2 bg-black text-black rounded font-semibold hover:bg-gray-800 transition whitespace-nowrap"
              >
                {isLoggedIn ? 'Buy Now' : 'Login to Purchase'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;