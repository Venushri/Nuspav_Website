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
  const [menuOpen, setMenuOpen] = useState(false);
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
    <header className="w-full fixed top-0 left-0 z-50 shadow-md shadow-gray-700/30 py-3 px-6 bg-[#7B007B]">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4 flex-wrap">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white tracking-wide flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
          <span>NUSPAV</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-white font-medium text-sm">
          <Link to="/" className="hover:text-black transition">Home</Link>
          <Link to="/shop" className="hover:text-black transition">Shop</Link>
          <Link to="/collections" className="hover:text-black transition">Collections</Link>
          <Link to="/contact" className="hover:text-black transition">Contact</Link>
          <Link to="/wishlist" className="hover:text-black transition">Wishlist</Link>
        </nav>

        {/* Menu button for mobile - moved to extreme right */}
        <div className="md:hidden ml-auto">
          <button
            className="text-black text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className="bi bi-list"></i>
          </button>
        </div>


        {/* Search + Icons */}
        <div className="flex items-center gap-4 text-white relative">
          {/* Search (desktop only) */}
          <div className="hidden md:block relative w-56 md:w-64">
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

          {/* Profile + Cart (always visible) */}
          <ProfileDropdown />
          <Link to="/cart" className="hover:text-black">
            <i className="bi bi-cart3 text-xl"></i>
          </Link>
        </div>
      </div>

      {/* Mobile menu links */}
      {menuOpen && (
        <div className="md:hidden mt-3 bg-black text-white px-6 py-4 rounded-md shadow-md space-y-2">
          <Link to="/" className="block hover:bg-purple-700 px-2 py-1 rounded" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/shop" className="block hover:bg-purple-700 px-2 py-1 rounded" onClick={() => setMenuOpen(false)}>Shop</Link>
          <Link to="/collections" className="block hover:bg-purple-700 px-2 py-1 rounded" onClick={() => setMenuOpen(false)}>Collections</Link>
          <Link to="/contact" className="block hover:bg-purple-700 px-2 py-1 rounded" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link to="/wishlist" className="block hover:bg-purple-700 px-2 py-1 rounded" onClick={() => setMenuOpen(false)}>Wishlist</Link>

          {/* Divider */}
          <hr className="my-3 border-gray-700" />

        </div>
      )}
    </header>
  );
};

export default Header;
