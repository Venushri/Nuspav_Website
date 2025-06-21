import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import ProductList from './Pages/ProductList'
import ProductDetail from './Pages/ProductDetail'
import Cart from './Pages/Cart'
import Checkout from './Pages/CheckOut'
import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SignupPage'
import Profile from './Pages/Profile'
import Shop from './Pages/Shop'
import Collections from './Pages/Collections'
import { CartProvider } from './Context/CartContext' 
import ComingSoon from './Pages/ComingSoon';
import Wishlist from './Pages/Wishlist';
import Contact from './Pages/Contact';
import { AuthProvider } from './Context/AuthContext';


import './App.css'

function App() {
  return (
      <AuthProvider>
      <CartProvider>
        <Header />
       
          <div className="pt-18 px-2"> 
          <Routes>
            <Route path="/coming-soon" element={<ComingSoon />} />
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Footer />
      </CartProvider>
    </AuthProvider>
  );
}

export default App
