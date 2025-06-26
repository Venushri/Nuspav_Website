import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { CiHeart, CiShoppingCart } from 'react-icons/ci'
import bluejeansImg from '../assets/bluejeans.jfif'
import { useProductActions } from '../Context/ProductActionsContext';
import jeans2Img from '../assets/jeans2.jfif'
import jeans3Img from '../assets/jeans3.jfif'
import jeans4Img from '../assets/jeans4.jfif'
import jeans5Img from '../assets/jeans5.jfif'
import jeans6Img from '../assets/jeans6.jfif'
import jeans7Img from '../assets/jeans7.jfif'
import jeans8Img from '../assets/jeans8.jfif'
import jeans9Img from '../assets/jeans9.jfif'
import jeans10Img from '../assets/jeans10.jfif'
import jeans11Img from '../assets/jeans11.jfif'
import jeans12Img from '../assets/jeans12.jfif'
import jeans13Img from '../assets/jeans13.jfif'
import jeans14Img from '../assets/jeans14.jfif'
import jeans15Img from '../assets/jeans15.jfif'
import whiteteeImg from '../assets/whitetee.jfif'
import graphicteeImg from '../assets/graphictee.jfif'
import tshirt1Img from '../assets/tshirt1.jpg'
import blackshortsImg from '../assets/blackshorts.jfif'
import denimshortsImg from '../assets/denimshorts.jfif'
import shorts1Img from '../assets/shorts1.jpg'
import summerdressImg from '../assets/summerdress.jfif'
import maxidressImg from '../assets/maxidress.jfif'
import dress1Img from '../assets/dress1.jpg'
import formalshirtImg from '../assets/formalshirt.jfif'
import oxfordshirtImg from '../assets/oxfordshirt.jfif'
import shirt1Img from '../assets/shirt1.jpg'
import sneakersImg from '../assets/sneakers.jfif'
import canvasshoesImg from '../assets/canvasshoes.jfif'
import shoe1Img from '../assets/shoe1.jpg'
import redheelsImg from '../assets/redheels.jfif'
import blockheelsImg from '../assets/blockheels.jfif'
import heels1Img from '../assets/heels1.jfif'
import heels2Img from '../assets/heels2.jfif'
import heels3Img from '../assets/heels3.jfif'
import heels4Img from '../assets/heels4.jfif'
import heels5Img from '../assets/heels5.jfif'
import heels6Img from '../assets/heels6.jfif'
import heels7Img from '../assets/heels7.jfif'
import heels8Img from '../assets/heels8.jfif'
import heels9Img from '../assets/heels9.jfif'
import heels10Img from '../assets/heels10.jfif'
import heels11Img from '../assets/heels11.jfif'
import heels12Img from '../assets/heels12.jfif'
import heels13Img from '../assets/heels13.jfif'
import heels14Img from '../assets/heels14.jfif'
import accessories1Img from '../assets/accessories1.jpg'
import activewear1Img from '../assets/activewear1.jpg'
import outwear1Img from '../assets/outwear1.jpg'
import sleepwear1Img from '../assets/sleepwear1.jpg'
import socks1Img from '../assets/socks1.jpg'
import socks2Img from '../assets/socks2.jpg'
import socks3Img from '../assets/socks3.jpg'
import bag1Img from '../assets/bag1.jpg'
import bag2Img from '../assets/bag2.jpg'
import bag3Img from '../assets/bag3.jpg'
import hat1Img from '../assets/hat1.jpg'
import hat2Img from '../assets/hat2.jpg'
import hat3Img from '../assets/hat3.jpg'
import scarf2Img from '../assets/scarf2.jpg'
import jewellery1Img from '../assets/jewellery1.jpg'
import jewellery2Img from '../assets/jewellery2.jpg'
import sunglasses1Img from '../assets/sunglasses1.jpg'
import sunglasses2Img from '../assets/sunglasses2.jpg'
import sunglasses3Img from '../assets/sunglasses3.jpg'
import { useCart } from '../Context/CartContext'; // Make sure this import is present

const placeholderImg = "https://via.placeholder.com/300x300?text=No+Image"

const categories = [
  'All',
  'Shorts',
  'Jeans',
  'T-Shirts',
  'Shirts',
  'Dresses',
  'Shoes',
  'Heels',
  'Accessories',
  'Activewear',
  'Outerwear',
  'Sleepwear',
  'Socks',
  'Bags',
  'Hats',
  'Scarves',
  'Jewelry',
  'Sunglasses',
  'Spring Collection',
  'Summer Collection',
  'Autumn Collection',
  'Winter Collection',
]

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL']
const discounts = ['None', '25% Off', '50% Off', '75% Off']
const colours = [
  'Red', 'Blue', 'Green', 'Yellow', 'Black', 'White', 'Pink', 'Purple', 'Orange', 'Brown', 'Grey', 'Beige', 'Maroon', 'Navy', 'Olive', 'Teal', 'Cyan', 'Magenta', 'Gold', 'Silver'
]

const products = [
  { id: 1, name: 'Blue Jeans', category: 'Jeans', price: 4.20, image: bluejeansImg, description: 'Classic blue jeans, perfect for any occasion.', colour: 'Blue', size: 'M', discount: 'None' },
  { id: 2, name: 'Jeans 2', category: 'Jeans', price: 2.10, image: jeans2Img, description: 'Trendy blue jeans.', colour: 'Blue', size: 'L', discount: 'None' },
  { id: 3, name: 'White T-Shirt', category: 'T-Shirts', price: 2.05, image: whiteteeImg, description: 'Comfy white t-shirt.', colour: 'White', size: 'L', discount: '25% Off' },
  { id: 4, name: 'Graphic Tee', category: 'T-Shirts', price: 3.15, image: graphicteeImg, description: 'Trendy beige t-shirt.', colour: 'Beige', size: 'M', discount: 'None' },
  { id: 5, name: 'Tshirt 1', category: 'T-Shirts', price: 2.30, image: tshirt1Img, description: 'Trendy brown t-shirt.', colour: 'Brown', size: 'M', discount: 'None' },
  { id: 6, name: 'Black Shorts', category: 'Shorts', price: 3.25, image: blackshortsImg, description: 'Cool black shorts.', colour: 'Black', size: 'M', discount: 'None' },
  { id: 7, name: 'Denim Shorts', category: 'Shorts', price: 2.40, image: denimshortsImg, description: 'Casual blue denim shorts.', colour: 'Blue', size: 'S', discount: '50% Off' },
  { id: 8, name: 'Shorts 1', category: 'Shorts', price: 2.50, image: shorts1Img, description: 'Trendy blue shorts.', colour: 'Blue', size: 'M', discount: 'None' },
  { id: 9, name: 'Summer Dress', category: 'Dresses', price: 3.60, image: summerdressImg, description: 'Light and breezy white summer dress.', colour: 'White', size: 'S', discount: '50% Off' },
  { id: 10, name: 'Maxi Dress', category: 'Dresses', price: 4.80, image: maxidressImg, description: 'Elegant teal maxi dress.', colour: 'Teal', size: 'L', discount: '75% Off' },
  { id: 11, name: 'Dress 1', category: 'Dresses', price: 2.70, image: dress1Img, description: 'Stylish white dress.', colour: 'White', size: 'M', discount: 'None' },
  { id: 12, name: 'Formal Shirt', category: 'Shirts', price: 2.50, image: formalshirtImg, description: 'Smart blue formal shirt.', colour: 'Blue', size: 'XL', discount: 'None' },
  { id: 13, name: 'Oxford Shirt', category: 'Shirts', price: 2.70, image: oxfordshirtImg, description: 'Classic pink oxford shirt.', colour: 'Pink', size: 'XL', discount: 'None' },
  { id: 14, name: 'Shirt 1', category: 'Shirts', price: 3.60, image: shirt1Img, description: 'Trendy blue shirt.', colour: 'Blue', size: 'M', discount: 'None' },
  { id: 15, name: 'Sneakers', category: 'Shoes', price: 2.80, image: sneakersImg, description: 'Trendy white sneakers.', colour: 'White', size: 'L', discount: '25% Off' },
  { id: 16, name: 'Canvas Shoes', category: 'Shoes', price: 2.60, image: canvasshoesImg, description: 'Comfortable black canvas shoes.', colour: 'Black', size: 'M', discount: 'None' },
  { id: 17, name: 'Shoe 1', category: 'Shoes', price: 3.10, image: shoe1Img, description: 'Stylish silver shoe.', colour: 'Silver', size: 'M', discount: 'None' },
  { id: 18, name: 'Red Heels', category: 'Heels', price: 3.20, image: redheelsImg, description: 'Stylish red heels.', colour: 'Red', size: 'M', discount: 'None' },
  { id: 19, name: 'Block Heels', category: 'Heels', price: 3.40, image: blockheelsImg, description: 'Block golden heels.', colour: 'Golden', size: 'S', discount: '25% Off' },
  { id: 20, name: 'Heels 1', category: 'Heels', price: 3.50, image: heels1Img, description: 'Trendy black heels.', colour: 'Black', size: 'M', discount: 'None' },
  { id: 21, name: 'Accessories 1', category: 'Accessories', price: 0.90, image: accessories1Img, description: 'Chic gold accessory.', colour: 'Gold', size: 'M', discount: 'None' },
  { id: 22, name: 'Activewear 1', category: 'Activewear', price: 3.20, image: activewear1Img, description: 'Comfortable brown activewear.', colour: 'Brown', size: 'L', discount: 'None' },
  { id: 23, name: 'Outwear 1', category: 'Outerwear', price: 3.50, image: outwear1Img, description: 'Warm grey outerwear.', colour: 'Grey', size: 'XL', discount: 'None' },
  { id: 24, name: 'Sleepwear 1', category: 'Sleepwear', price: 1.50, image: sleepwear1Img, description: 'Cozy white sleepwear.', colour: 'White', size: 'M', discount: 'None' },
  { id: 25, name: 'Socks 1', category: 'Socks', price: 0.70, image: socks1Img, description: 'Comfy white socks.', colour: 'White', size: 'M', discount: 'None' },
  { id: 26, name: 'Bag 1', category: 'Bags', price: 2.50, image: bag1Img, description: 'Trendy magenta bag.', colour: 'Magenta', size: 'M', discount: 'None' },
  { id: 27, name: 'Hat 3', category: 'Hats', price: 1.20, image: hat3Img, description: 'Stylish beige hat.', colour: 'Beige', size: 'M', discount: 'None' },
  { id: 28, name: 'Scarf 2', category: 'Scarves', price: 1.20, image: scarf2Img, description: 'Warm pink scarf.', colour: 'Pink', size: 'M', discount: 'None' },
  { id: 29, name: 'Jewellery 1', category: 'Jewelry', price: 1.80, image: jewellery1Img, description: 'Elegant golden jewelry.', colour: 'Golden', size: 'M', discount: 'None' },
  { id: 30, name: 'Sunglasses 1', category: 'Sunglasses', price: 2.20, image: sunglasses1Img, description: 'Trendy black sunglasses.', colour: 'Black', size: 'M', discount: 'None' },
  { id: 31, name: 'Heels 2', category: 'Heels', price: 3.60, image: heels2Img, description: 'Elegant beige heels.', colour: 'Beige', size: 'M', discount: 'None' },
  { id: 32, name: 'Heels 3', category: 'Heels', price: 3.70, image: heels3Img, description: 'Classic white heels.', colour: 'White', size: 'L', discount: '25% Off' },
  { id: 33, name: 'Heels 4', category: 'Heels', price: 3.80, image: heels4Img, description: 'Stylish brown heels.', colour: 'Brown', size: 'S', discount: 'None' },
  { id: 34, name: 'Heels 5', category: 'Heels', price: 3.90, image: heels5Img, description: 'Trendy pink heels.', colour: 'Pink', size: 'M', discount: '50% Off' },
  { id: 35, name: 'Heels 6', category: 'Heels', price: 4.00, image: heels6Img, description: 'Modern yellow heels.', colour: 'Yellow', size: 'L', discount: 'None' },
  { id: 36, name: 'Heels 7', category: 'Heels', price: 4.10, image: heels7Img, description: 'Chic beige heels.', colour: 'Beige', size: 'M', discount: 'None' },
  { id: 37, name: 'Heels 8', category: 'Heels', price: 4.20, image: heels8Img, description: 'Sophisticated beige heels.', colour: 'Beige', size: 'S', discount: 'None' },
  { id: 38, name: 'Heels 9', category: 'Heels', price: 4.30, image: heels9Img, description: 'Elegant white heels.', colour: 'White', size: 'M', discount: '75% Off' },
  { id: 39, name: 'Heels 10', category: 'Heels', price: 4.40, image: heels10Img, description: 'Trendy white heels.', colour: 'White', size: 'L', discount: 'None' },
  { id: 40, name: 'Heels 11', category: 'Heels', price: 4.50, image: heels11Img, description: 'Classic silver heels.', colour: 'Silver', size: 'M', discount: 'None' },
  { id: 41, name: 'Heels 12', category: 'Heels', price: 4.60, image: heels12Img, description: 'Modern red heels.', colour: 'Red', size: 'S', discount: 'None' },
  { id: 42, name: 'Heels 13', category: 'Heels', price: 4.70, image: heels13Img, description: 'Chic black heels.', colour: 'Black', size: 'M', discount: 'None' },
  { id: 43, name: 'Heels 14', category: 'Heels', price: 4.80, image: heels14Img, description: 'Sophisticated pink heels.', colour: 'Pink', size: 'L', discount: 'None' },
  { id: 44, name: 'Jeans 3', category: 'Jeans', price: 2.40, image: jeans3Img, description: 'Slim fit blue jeans.', colour: 'Blue', size: 'M', discount: 'None' },
  { id: 45, name: 'Jeans 4', category: 'Jeans', price: 2.50, image: jeans4Img, description: 'Classic blue jeans.', colour: 'Blue', size: 'L', discount: '25% Off' },
  { id: 46, name: 'Jeans 5', category: 'Jeans', price: 2.60, image: jeans5Img, description: 'Trendy ripped blue jeans.', colour: 'Blue', size: 'S', discount: 'None' },
  { id: 47, name: 'Jeans 6', category: 'Jeans', price: 2.70, image: jeans6Img, description: 'Modern black jeans.', colour: 'Black', size: 'M', discount: 'None' },
  { id: 48, name: 'Jeans 7', category: 'Jeans', price: 2.80, image: jeans7Img, description: 'Chic blue jeans.', colour: 'Blue', size: 'L', discount: 'None' },
  { id: 49, name: 'Jeans 8', category: 'Jeans', price: 2.90, image: jeans8Img, description: 'Sophisticated blue jeans.', colour: 'Blue', size: 'M', discount: 'None' },
  { id: 50, name: 'Jeans 9', category: 'Jeans', price: 3.00, image: jeans9Img, description: 'Elegant black jeans.', colour: 'Black', size: 'S', discount: 'None' },
  { id: 51, name: 'Jeans 10', category: 'Jeans', price: 3.10, image: jeans10Img, description: 'Trendy blue jeans.', colour: 'Blue', size: 'M', discount: '50% Off' },
  { id: 52, name: 'Jeans 11', category: 'Jeans', price: 3.20, image: jeans11Img, description: 'Classic blue jeans.', colour: 'Blue', size: 'L', discount: 'None' },
  { id: 53, name: 'Jeans 12', category: 'Jeans', price: 3.30, image: jeans12Img, description: 'Modern black jeans.', colour: 'Black', size: 'M', discount: 'None' },
  { id: 54, name: 'Jeans 13', category: 'Jeans', price: 3.40, image: jeans13Img, description: 'Chic blue jeans.', colour: 'Blue', size: 'S', discount: 'None' },
  { id: 55, name: 'Jeans 14', category: 'Jeans', price: 3.50, image: jeans14Img, description: 'Sophisticated blue jeans.', colour: 'Blue', size: 'M', discount: 'None' },
  { id: 56, name: 'Jeans 15', category: 'Jeans', price: 3.60, image: jeans15Img, description: 'Elegant blue jeans.', colour: 'Blue', size: 'L', discount: 'None' },
  { id: 57, name: 'Socks 2', category: 'Socks', price: 0.75, image: socks2Img, description: 'Soft brown socks for everyday comfort.', colour: 'Brown', size: 'M', discount: 'None' },
  { id: 58, name: 'Socks 3', category: 'Socks', price: 0.80, image: socks3Img, description: 'Warm brown socks for chilly days.', colour: 'Brown', size: 'L', discount: 'None' },
  { id: 59, name: 'Bag 2', category: 'Bags', price: 2.60, image: bag2Img, description: 'Elegant beige bag for a classic look.', colour: 'Beige', size: 'L', discount: 'None' },
  { id: 60, name: 'Bag 3', category: 'Bags', price: 2.70, image: bag3Img, description: 'Classic white bag for versatile style.', colour: 'White', size: 'M', discount: 'None' },
  { id: 61, name: 'Hat 1', category: 'Hats', price: 1.10, image: hat1Img, description: 'Trendy brown hat for a fashionable touch.', colour: 'Brown', size: 'M', discount: 'None' },
  { id: 62, name: 'Hat 2', category: 'Hats', price: 1.15, image: hat2Img, description: 'Cool white hat for sunny days.', colour: 'White', size: 'L', discount: 'None' },
  { id: 63, name: 'Hat 3', category: 'Hats', price: 1.20, image: hat3Img, description: 'Stylish beige hat for any outfit.', colour: 'Beige', size: 'M', discount: 'None' },
  { id: 64, name: 'Jewellery 2', category: 'Jewelry', price: 1.85, image: jewellery2Img, description: 'Modern golden jewelry for a chic look.', colour: 'Golden', size: 'M', discount: 'None' },
  { id: 65, name: 'Sunglasses 2', category: 'Sunglasses', price: 2.25, image: sunglasses2Img, description: 'Classic black sunglasses for a bold statement.', colour: 'Black', size: 'M', discount: 'None' },
  { id: 66, name: 'Sunglasses 3', category: 'Sunglasses', price: 2.30, image: sunglasses3Img, description: 'Trendy black sunglasses for modern style.', colour: 'Black', size: 'L', discount: 'None' },
]

const getImage = (img) => img || placeholderImg

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [selectedDiscount, setSelectedDiscount] = useState('None')
  const [selectedSize, setSelectedSize] = useState('All')
  const [selectedColour, setSelectedColour] = useState('All')
  const [showCategory, setShowCategory] = useState(false)
  const [showDiscount, setShowDiscount] = useState(false)
  const [showSize, setShowSize] = useState(false)
  const [showColour, setShowColour] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const { wishlist, cart, handleWishlist, handleAddToCart } = useProductActions();
  const { addToCart } = useCart(); // Use the context

  const isLoggedIn = !!localStorage.getItem('user'); // Or use your auth context

  // Handle query param for category selection
useEffect(() => {
  const params = new URLSearchParams(location.search);
  const cat = params.get('cat');

  const matched = categories.find(
    (c) => c.replace(/\s/g, '').toLowerCase() === (cat || '').toLowerCase()
  );

  if (matched) {
    setSelectedCategory(matched);
  } else {
    setSelectedCategory('All');
  }
}, [location.search]);


// Map seasonal collections to their categories
  let filteredProducts = products
  if (selectedCategory === 'Summer Collection') {
    filteredProducts = products.filter(p => ['Dresses', 'Shorts', 'T-Shirts'].includes(p.category))
  } else if (selectedCategory === 'Winter Collection') {
    filteredProducts = products.filter(p => ['Socks', 'Outerwear', 'Boots', 'Shoes'].includes(p.category))
  } else if (selectedCategory === 'Autumn Collection') {
    filteredProducts = products.filter(p => ['Outerwear', 'Sunglasses', 'Boots'].includes(p.category))
  } else if (selectedCategory === 'Spring Collection') {
    filteredProducts = products.filter(p => ['Dresses', 'Accessories', 'Bags'].includes(p.category))
  } else {
    filteredProducts = products.filter(p => selectedCategory === 'All' || p.category === selectedCategory)
  }
  filteredProducts = filteredProducts
    .filter(p => selectedDiscount === 'None' || p.discount === selectedDiscount)
    .filter(p => selectedSize === 'All' || p.size === selectedSize)
    .filter(p => selectedColour === 'All' || p.colour === selectedColour)

  return (
    <div className="w-full flex-1 bg-gray-50 py-12 flex flex-col gap-8 px-8">
      <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: '#5C4032' }}>Shop All Products</h2>
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        <button
          className="px-4 py-2 rounded font-semibold transition"
          style={{ backgroundColor: '#FFDFEF', color: '#000' }}
          onClick={() => navigate('/collections')}
        >
          View Collections
        </button>
        <div className="relative">
          <button
            className="px-4 py-2 rounded font-medium flex items-center gap-2 transition"
            style={{ backgroundColor: '#FFDFEF', color: '#000' }}
            onClick={() => setShowCategory((v) => !v)}
            type="button"
          >
            Category: {selectedCategory}
            <span className="ml-2">&#9662;</span>
          </button>
          {showCategory && (
            <div className="absolute left-0 mt-2 w-48 border rounded shadow z-10 max-h-64 overflow-auto"
              style={{ backgroundColor: '#bbf7d0', borderColor: '#bbf7d0' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`block w-full text-left px-4 py-2 hover:bg-white ${selectedCategory === cat ? 'bg-green-100 text-black font-bold' : ''}`}
                  style={{ color: '#000', backgroundColor: '#bbf7d0' }}
                  onClick={() => {
                    setSelectedCategory(cat)
                    setShowCategory(false)
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="relative">
          <button
            className="px-4 py-2 rounded font-medium flex items-center gap-2 transition"
            style={{ backgroundColor: '#FFDFEF', color: '#000' }}
            onClick={() => setShowDiscount((v) => !v)}
            type="button"
          >
            Discount: {selectedDiscount}
            <span className="ml-2">&#9662;</span>
          </button>
          {showDiscount && (
            <div className="absolute left-0 mt-2 w-40 border rounded shadow z-10"
              style={{ backgroundColor: '#bbf7d0', borderColor: '#bbf7d0' }}>
              <button
                className={`block w-full text-left px-4 py-2 hover:bg-green-100 ${selectedDiscount === 'None' ? 'bg-green-100 text-black font-bold' : ''}`}
                style={{ color: '#000', backgroundColor: '#bbf7d0' }}
                onClick={() => {
                  setSelectedDiscount('None')
                  setShowDiscount(false)
                }}
              >
                All
              </button>
              {discounts.filter(d => d !== 'None').map((discount) => (
                <button
                  key={discount}
                  className={`block w-full text-left px-4 py-2 hover:bg-green-100 ${selectedDiscount === discount ? 'bg-green-100 text-black font-bold' : ''}`}
                  style={{ color: '#000', backgroundColor: '#bbf7d0' }}
                  onClick={() => {
                    setSelectedDiscount(discount)
                    setShowDiscount(false)
                  }}
                >
                  {discount}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="relative">
          <button
            className="px-4 py-2 rounded font-medium flex items-center gap-2 transition"
            style={{ backgroundColor: '#FFDFEF', color: '#000' }}
            onClick={() => setShowSize((v) => !v)}
            type="button"
          >
            Size: {selectedSize}
            <span className="ml-2">&#9662;</span>
          </button>
          {showSize && (
            <div className="absolute left-0 mt-2 w-40 border rounded shadow z-10 max-h-48 overflow-auto"
              style={{ backgroundColor: '#bbf7d0', borderColor: '#bbf7d0' }}>
              <button
                className={`block w-full text-left px-4 py-2 hover:bg-green-100 ${selectedSize === 'All' ? 'bg-green-100 text-black font-bold' : ''}`}
                style={{ color: '#000', backgroundColor: '#bbf7d0' }}
                onClick={() => {
                  setSelectedSize('All')
                  setShowSize(false)
                }}
              >
                All
              </button>
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`block w-full text-left px-4 py-2 hover:bg-green-100 ${selectedSize === size ? 'bg-green-100 text-black font-bold' : ''}`}
                  style={{ color: '#000', backgroundColor: '#bbf7d0' }}
                  onClick={() => {
                    setSelectedSize(size)
                    setShowSize(false)
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="relative">
          <button
            className="px-4 py-2 rounded font-medium flex items-center gap-2 transition"
            style={{ backgroundColor: '#FFDFEF', color: '#000' }}
            onClick={() => setShowColour((v) => !v)}
            type="button"
          >
            Colour: {selectedColour}
            <span className="ml-2">&#9662;</span>
          </button>
          {showColour && (
            <div className="absolute left-0 mt-2 w-40 border rounded shadow z-10 max-h-48 overflow-auto"
              style={{ backgroundColor: '#bbf7d0', borderColor: '#bbf7d0' }}>
              <button
                className={`block w-full text-left px-4 py-2 hover:bg-green-100 ${selectedColour === 'All' ? 'bg-green-100 text-black font-bold' : ''}`}
                style={{ color: '#000', backgroundColor: '#bbf7d0' }}
                onClick={() => {
                  setSelectedColour('All')
                  setShowColour(false)
                }}
              >
                All
              </button>
              {colours.map((colour) => (
                <button
                  key={colour}
                  className={`block w-full text-left px-4 py-2 hover:bg-green-100 ${selectedColour === colour ? 'bg-green-100 text-black font-bold' : ''}`}
                  style={{ color: '#000', backgroundColor: '#bbf7d0' }}
                  onClick={() => {
                    setSelectedColour(colour)
                    setShowColour(false)
                  }}
                >
                  {colour}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      {selectedColour !== 'All' && (
        <div className="mb-4 text-center text-[#8d6748] font-semibold">
          Showing products in <span className="capitalize">{selectedColour}</span>
        </div>
      )}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-2">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 flex flex-col items-center">
              <img
                src={getImage(product.image)}
                alt={product.name}
                className="w-52 h-52 object-cover mb-2 rounded"
                onError={e => { e.target.onerror = null; e.target.src = placeholderImg }}
              />
              <h3 className="text-lg font-semibold mb-1 text-center">{product.name}</h3>
              <p className="text-gray-600 mb-2">₹{product.price}</p>
              <div className="flex gap-4 mb-2 bg-purple-100 rounded-lg p-2">
                <button
                  title="Add to Wishlist"
                  type="button"
                  onClick={() => {
                    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
                    const exists = wishlist.some(item => item.id === product.id);
                    if (!exists) {
                      wishlist.push(product);
                      localStorage.setItem('wishlist', JSON.stringify(wishlist));
                    }
                    navigate('/wishlist'); // Redirect to wishlist page
                  }}
                  className="bg-white text-black p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition text-xl"
                  style={{ color: '#000', backgroundColor: '#fff', borderColor: '#e5e7eb' }}
                >
                  <CiHeart />
                </button>
                <button
                  title="Add to Cart"
                  type="button"
                  onClick={() => {
                    addToCart(product); // Use context function
                    navigate('/cart');
                  }}
                  className="bg-white text-black p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition text-xl"
                  style={{ color: '#000', backgroundColor: '#fff', borderColor: '#e5e7eb' }}
                >
                  <CiShoppingCart />
                </button>
              </div>
              <button
                className="bg-black text-white px-4 py-1 rounded font-semibold border border-black hover:bg-gray-800 transition"
                style={{ backgroundColor: '#000', color: '#fff', borderColor: '#000' }}
                onClick={() => setSelectedProduct(product)}
                type="button"
              >
                View
              </button>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">No products found in this category.</div>
        )}
      </div>
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50">
          <div
            className="shadow-2xl p-6 sm:p-8 max-w-xs w-full relative border-2 flex flex-col items-center rounded-xl"
            style={{
              background: 'linear-gradient(135deg, #fff 80%, #ffe9eb 100%)',
              borderColor: '#fbcfe8',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)'
            }}
          >
            <button
              className="absolute top-2 right-2 text-purple-700 border border-purple-200 bg-purple-100 hover:bg-purple-200 px-2 py-1 rounded-full text-2xl font-bold transition"
              style={{ backgroundColor: '#ede9fe', color: '#7c3aed', borderColor: '#ddd6fe' }}
              onClick={() => setSelectedProduct(null)}
            >
              &times;
            </button>
            <img
              src={getImage(selectedProduct.image)}
              alt={selectedProduct.name}
              className="w-40 h-52 sm:w-48 sm:h-60 object-contain mb-4 mx-auto"
              onError={e => { e.target.onerror = null; e.target.src = placeholderImg }}
            />
            <h3 className="text-2xl font-bold mb-2 text-center text-black">{selectedProduct.name}</h3>
            <p className="mb-2 text-center text-black">₹{selectedProduct.price}</p>
            <div className="flex gap-4 mb-2 justify-center bg-purple-100 rounded-lg p-2">
              <button
                title="Add to Wishlist"
                type="button"
                onClick={() => {
                  const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
                  const exists = wishlist.some(item => item.id === selectedProduct.id);
                  if (!exists) {
                    wishlist.push(selectedProduct);
                    localStorage.setItem('wishlist', JSON.stringify(wishlist));
                  }
                  navigate('/wishlist'); // Direct to wishlist page
                }}
                className="bg-white text-black p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition text-xl"
                style={{ color: '#000', backgroundColor: '#fff', borderColor: '#e5e7eb' }}
              >
                <CiHeart />
              </button>
              <button
                title="Add to Cart"
                type="button"
                onClick={() => {
                  addToCart(selectedProduct);
                  navigate('/cart'); // Direct to cart page
                }}
                className="bg-white text-black p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition text-xl"
                style={{ color: '#000', backgroundColor: '#fff', borderColor: '#e5e7eb' }}
              >
                <CiShoppingCart />
              </button>
            </div>
            <p className="mb-2 text-center text-black">{selectedProduct.description}</p>
            <p className="mb-2 text-center text-black">Colour: {selectedProduct.colour}</p>
            <p className="mb-2 text-center text-black">Size: {selectedProduct.size}</p>
            <p className="mb-2 text-center text-black">Discount: {selectedProduct.discount}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Shop;