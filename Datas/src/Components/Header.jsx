import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import ProfileDropdown from './ProfileDropdown';

const categories = [
  'All', 'Shorts', 'Jeans', 'T-Shirts', 'Shirts', 'Dresses', 'Shoes', 'Heels',
  'Accessories', 'Activewear', 'Outerwear', 'Sleepwear', 'Socks', 'Bags', 'Hats',
  'Scarves', 'Jewelry', 'Sunglasses', 'Spring Collection', 'Summer Collection',
  'Autumn Collection', 'Winter Collection'
];

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    const filtered = categories.filter((cat) =>
      cat.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(value ? filtered : []);
  };

  const handleSelectCategory = (cat) => {
    const encoded = cat.replace(/\s/g, '');
    navigate(`/shop?cat=${encodeURIComponent(encoded)}`);
    setSearchTerm('');
    setSuggestions([]);
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 shadow-md shadow-gray-700/30 py-3 px-6" style={{ backgroundColor: "#7B007B" }}>
      <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-6">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white tracking-wide flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
          <span>NUSPAV</span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-8 text-white font-medium text-sm">
          <Link to="/" className="hover:text-black transition">Home</Link>
          <Link to="/shop" className="hover:text-black transition">Shop</Link>
          <Link to="/collections" className="hover:text-black transition">Collections</Link>
          <Link to="/contact" className="hover:text-black transition">Contact</Link>
          <Link to="/wishlist" className="hover:text-black transition">Wishlist</Link>
        </nav>

        {/* Search + Profile + Cart */}
        <div className="relative flex items-center gap-4 text-white">
          {/* Search Input */}
          <div className="relative w-56 md:w-64">
            <div className="flex items-center bg-white border border-gray-300 rounded-full px-3 py-1.5 shadow-sm focus-within:ring-2 focus-within:ring-purple-300">
              <i className="bi bi-search text-gray-500 mr-2"></i>
              <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Search categories..."
                className="w-full bg-transparent text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
              />
            </div>

            {/* Dropdown Suggestions */}
            {suggestions.length > 0 && (
              <ul className="absolute top-full mt-1 w-full bg-white border border-gray-300 rounded shadow-md z-50 text-gray-800 max-h-60 overflow-y-auto">
                {suggestions.map((cat) => (
                  <li
                    key={cat}
                    className="px-4 py-2 hover:bg-purple-100 cursor-pointer text-sm"
                    onClick={() => handleSelectCategory(cat)}
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Profile Dropdown */}
          <ProfileDropdown />

          {/* Cart Icon */}
          <Link to="/cart" className="hover:text-black">
            <i className="bi bi-cart3 text-xl"></i>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
