import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => (
  <footer className="w-full bg-gray-800 text-white pt-8 pb-4 px-4 mt-8">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row flex-wrap gap-8 justify-between">
      
      {/* Brand Section */}
      <div className="flex flex-col items-start md:w-1/3">
        <div className="flex items-center gap-2 mb-2">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
          <span className="text-xl font-bold">NUSPAV</span>
        </div>
        <p className="text-gray-400 text-sm max-w-xs text-left">
          Your one-stop shop for the latest trends in fashion and accessories.
        </p>
      </div>

      {/* Quick Links */}
      <div className="flex flex-col items-start md:w-1/5">
        <h4 className="font-semibold mb-2">Quick Links</h4>
        <ul className="space-y-1 text-gray-300 text-sm">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/shop" className="hover:underline">Shop</Link></li>
          <li><Link to="/collections" className="hover:underline">Collections</Link></li>
          <li><Link to="/about" className="hover:underline">About</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col items-start md:w-1/4">
        <h4 className="font-semibold mb-2">Contact</h4>
        <ul className="text-gray-300 text-sm space-y-1">
          <li>Email: <a href="mailto:support@nuspav.com" className="hover:underline">support@nuspav.com</a></li>
          <li>Phone: <a href="tel:+1234567890" className="hover:underline">+1 234 567 890</a></li>
          <li>123 Fashion Ave, New York, NY</li>
        </ul>
      </div>

      {/* Social Links */}
      <div className="flex flex-col items-start md:w-1/5">
        <h4 className="font-semibold mb-2">Follow Us</h4>
        <div className="flex gap-4 text-xl">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-400"><i className="bi bi-facebook"></i></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-300"><i className="bi bi-twitter"></i></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-400"><i className="bi bi-instagram"></i></a>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-xs">
      &copy; {new Date().getFullYear()} NUSPAV. All rights reserved.
    </div>
  </footer>
);

export default Footer;