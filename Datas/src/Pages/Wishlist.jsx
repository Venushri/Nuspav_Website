import React from 'react';
import { useNavigate } from 'react-router-dom';
import emptyWishlistImg from "../assets/wish_Img.png";

const Wishlist = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-8 bg-gray-50">
      <div className="text-center max-w-xl mx-auto bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">PLEASE LOG IN</h2>
        <p className="text-gray-500 mb-6">Login to view items in your wishlist.</p>
        
        <img
          src={emptyWishlistImg}
          alt="Empty Wishlist"
          className="w-60 h-60 object-contain mx-auto mb-6 opacity-80"
        />

        <button
          onClick={() => navigate('/login')}
          className="border border-pink-600 text-pink-600 font-semibold px-6 py-2 rounded hover:bg-pink-50 transition"
        >
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default Wishlist;

