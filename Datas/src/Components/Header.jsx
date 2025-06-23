import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import Input from './Input'
import ProfileDropdown from './ProfileDropdown'

const Header = () => {
  
  return (
   
<header
  className="w-full fixed top-0 left-0 z-50 shadow-md shadow-gray-700/30 py-2 px-6 mb-4"
  style={{ backgroundColor: "#7B007B" }}
>

      <div className="w-full flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-gray-800 tracking-wide flex items-center gap-2 pl-2">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
          <span>NUSPAV</span>
        </Link>
        <nav className="hidden md:flex gap-10 text-gray-700 font-medium text-sm">
          <Link to="/" className="hover:text-black transition">Home</Link>
          <Link to="/shop" className="hover:text-black transition">Shop</Link>
          <Link to="/collections" className="hover:text-black transition">Collections</Link>
          <Link to="/contact" className="hover:text-black transition">Contact</Link>
          <Link to="/wishlist" className="hover:text-black transition">Wishlist</Link>
        </nav>
        <div className="flex gap-4 items-center text-gray-700 pr-2">
          <Input />
          <ProfileDropdown />
          <Link to="/cart" className="hover:text-black">
            <i className="bi bi-cart3 text-xl"></i>
          </Link>
       
        </div>
      </div>
    </header>
  )
}

export default Header
