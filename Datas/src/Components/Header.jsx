import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
    <Link to="/" className="text-xl font-bold">E-Commerce</Link>
    <nav className="flex gap-4">
      <Link to="/products" className="hover:underline">Products</Link>
      <Link to="/cart" className="hover:underline">Cart</Link>
      <Link to="/profile" className="hover:underline">Profile</Link>
      <Link to="/login" className="hover:underline">Login</Link>
    </nav>
  </header>
)

export default Header