import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileDropdown = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    const handleEscape = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open]);

  const handleLinkClick = (to) => {
    setOpen(false);
    navigate(to);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <i
        className="bi bi-person-circle text-2xl text-white hover:text-blue-500 cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label="Profile menu"
        tabIndex={0}
        onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setOpen(prev => !prev); }}
        style={{ outline: 'none' }}
      ></i>

      {open && (
        <div className="absolute right-0 mt-3 w-64 bg-white shadow-2xl rounded-md border z-50">
          {/* Top Section */}
          <div className="px-4 py-3 border-b">
            <p className="text-sm font-semibold">Welcome</p>
            <p className="text-xs text-gray-500 mb-2">To access account and manage orders</p>
            <button
              className="w-full text-pink-600 border border-pink-600 text-sm px-3 py-1 rounded font-medium hover:bg-pink-50"
              onClick={() => { setOpen(false); navigate('/login'); }}
            >
              Login / Signup
            </button>
          </div>

          {/* Links Section */}
          <ul className="text-sm py-2">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleLinkClick('/coming-soon')}>My Profile</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleLinkClick('/coming-soon')}>Orders</li>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleLinkClick('/wishlist')}
            >
              Wishlist
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleLinkClick('/coming-soon')}>Gift Cards</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleLinkClick('/coming-soon')}>Coupons</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleLinkClick('/coming-soon')}>Saved Addresses</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between items-center" onClick={() => handleLinkClick('/coming-soon')}>
              NUSPAV Insider <span className="text-xs bg-pink-100 text-pink-600 px-2 py-0.5 rounded">NEW</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
