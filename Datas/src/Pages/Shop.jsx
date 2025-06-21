import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import bluejeansImg from '../assets/bluejeans.jfif'
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
import bag1Img from '../assets/bag1.jpg'
import hat3Img from '../assets/hat3.jpg'
import scarf2Img from '../assets/scarf2.jpg'
import jewellery1Img from '../assets/jewellery1.jpg'
import sunglasses1Img from '../assets/sunglasses1.jpg'

const placeholderImg = "https://via.placeholder.com/300x300?text=No+Image"

const categories = [
  'All', 'Shorts', 'Jeans', 'T-Shirts', 'Shirts', 'Dresses', 'Shoes', 'Heels', 'Accessories', 'Activewear', 'Outerwear', 'Sleepwear', 'Socks',  'Bags', 'Hats', 'Scarves','Jewelry','Sunglasses'
]

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL']
const discounts = ['None', '25% Off', '50% Off', '75% Off']
const colours = [
  'Red', 'Blue', 'Green', 'Yellow', 'Black', 'White', 'Pink', 'Purple', 'Orange', 'Brown', 'Grey', 'Beige', 'Maroon', 'Navy', 'Olive', 'Teal', 'Cyan', 'Magenta', 'Gold', 'Silver'
]

const products = [
  { id: 1, name: 'Blue Jeans', category: 'Jeans', price: 25, image: bluejeansImg, description: 'Classic blue jeans, perfect for any occasion.', colour: 'Blue', size: 'M', discount: 'None' },
  { id: 2, name: 'Jeans 2', category: 'Jeans', price: 20, image: jeans2Img, description: 'Trendy jeans.', colour: 'Blue', size: 'L', discount: 'None' },
  { id: 3, name: 'White T-Shirt', category: 'T-Shirts', price: 10, image: whiteteeImg, description: 'Comfy white t-shirt.', colour: 'White', size: 'L', discount: '25% Off' },
  { id: 4, name: 'Graphic Tee', category: 'T-Shirts', price: 13, image: graphicteeImg, description: 'Trendy graphic tee.', colour: 'White', size: 'M', discount: 'None' },
  { id: 5, name: 'Tshirt 1', category: 'T-Shirts', price: 15, image: tshirt1Img, description: 'Trendy t-shirt.', colour: 'White', size: 'M', discount: 'None' },
  { id: 6, name: 'Black Shorts', category: 'Shorts', price: 12, image: blackshortsImg, description: 'Cool black shorts.', colour: 'Black', size: 'M', discount: 'None' },
  { id: 7, name: 'Denim Shorts', category: 'Shorts', price: 14, image: denimshortsImg, description: 'Casual denim shorts.', colour: 'Blue', size: 'S', discount: '50% Off' },
  { id: 8, name: 'Shorts 1', category: 'Shorts', price: 15, image: shorts1Img, description: 'Trendy shorts.', colour: 'Blue', size: 'M', discount: 'None' },
  { id: 9, name: 'Summer Dress', category: 'Dresses', price: 20, image: summerdressImg, description: 'Light and breezy summer dress.', colour: 'Yellow', size: 'S', discount: '50% Off' },
  { id: 10, name: 'Maxi Dress', category: 'Dresses', price: 28, image: maxidressImg, description: 'Elegant maxi dress.', colour: 'Red', size: 'L', discount: '75% Off' },
  { id: 11, name: 'Dress 1', category: 'Dresses', price: 22, image: dress1Img, description: 'Stylish dress.', colour: 'Pink', size: 'M', discount: 'None' },
  { id: 12, name: 'Formal Shirt', category: 'Shirts', price: 15, image: formalshirtImg, description: 'Smart formal shirt.', colour: 'White', size: 'XL', discount: 'None' },
  { id: 13, name: 'Oxford Shirt', category: 'Shirts', price: 17, image: oxfordshirtImg, description: 'Classic blue oxford shirt.', colour: 'Blue', size: 'XL', discount: 'None' },
  { id: 14, name: 'Shirt 1', category: 'Shirts', price: 15, image: shirt1Img, description: 'Trendy brown shirt.', colour: 'Brown', size: 'M', discount: 'None' },
  { id: 15, name: 'Sneakers', category: 'Shoes', price: 18, image: sneakersImg, description: 'Trendy white sneakers.', colour: 'White', size: 'L', discount: '25% Off' },
  { id: 16, name: 'Canvas Shoes', category: 'Shoes', price: 16, image: canvasshoesImg, description: 'Comfortable white canvas shoes.', colour: 'White', size: 'M', discount: 'None' },
  { id: 17, name: 'Shoe 1', category: 'Shoes', price: 20, image: shoe1Img, description: 'Stylish black shoe.', colour: 'Black', size: 'M', discount: 'None' },
  { id: 18, name: 'Red Heels', category: 'Heels', price: 22, image: redheelsImg, description: 'Stylish red heels.', colour: 'Red', size: 'M', discount: 'None' },
  { id: 19, name: 'Block Heels', category: 'Heels', price: 24, image: blockheelsImg, description: 'Block beige heels.', colour: 'Beige', size: 'S', discount: '25% Off' },
  { id: 20, name: 'Heels 1', category: 'Heels', price: 25, image: heels1Img, description: 'Trendy blue heels.', colour: 'Blue', size: 'M', discount: 'None' },
  { id: 21, name: 'Accessories 1', category: 'Accessories', price: 8, image: accessories1Img, description: 'Chic gold accessory.', colour: 'Gold', size: 'M', discount: 'None' },
  { id: 22, name: 'Activewear 1', category: 'Activewear', price: 18, image: activewear1Img, description: 'Comfortable grey activewear.', colour: 'Grey', size: 'L', discount: 'None' },
  { id: 23, name: 'Outwear 1', category: 'Outerwear', price: 30, image: outwear1Img, description: 'Warm brown outerwear.', colour: 'Brown', size: 'XL', discount: 'None' },
  { id: 24, name: 'Sleepwear 1', category: 'Sleepwear', price: 12, image: sleepwear1Img, description: 'Cozy pink sleepwear.', colour: 'Pink', size: 'M', discount: 'None' },
  { id: 25, name: 'Socks 1', category: 'Socks', price: 5, image: socks1Img, description: 'Comfy white socks.', colour: 'White', size: 'M', discount: 'None' },
  { id: 26, name: 'Bag 1', category: 'Bags', price: 20, image: bag1Img, description: 'Trendy brown bag.', colour: 'Brown', size: 'M', discount: 'None' },
  { id: 27, name: 'Hat 3', category: 'Hats', price: 10, image: hat3Img, description: 'Stylish beige hat.', colour: 'Beige', size: 'M', discount: 'None' },
  { id: 28, name: 'Scarf 2', category: 'Scarves', price: 8, image: scarf2Img, description: 'Warm grey scarf.', colour: 'Grey', size: 'M', discount: 'None' },
  { id: 29, name: 'Jewellery 1', category: 'Jewelry', price: 15, image: jewellery1Img, description: 'Elegant silver jewelry.', colour: 'Silver', size: 'M', discount: 'None' },
  { id: 30, name: 'Sunglasses 1', category: 'Sunglasses', price: 18, image: sunglasses1Img, description: 'Trendy black sunglasses.', colour: 'Black', size: 'M', discount: 'None' },
  { id: 31, name: 'Heels 2', category: 'Heels', price: 26, image: heels2Img, description: 'Elegant blue heels.', colour: 'Blue', size: 'M', discount: 'None' },
  { id: 32, name: 'Heels 3', category: 'Heels', price: 27, image: heels3Img, description: 'Classic black heels.', colour: 'Black', size: 'L', discount: '25% Off' },
  { id: 33, name: 'Heels 4', category: 'Heels', price: 28, image: heels4Img, description: 'Stylish beige heels.', colour: 'Beige', size: 'S', discount: 'None' },
  { id: 34, name: 'Heels 5', category: 'Heels', price: 29, image: heels5Img, description: 'Trendy beige heels.', colour: 'Beige', size: 'M', discount: '50% Off' },
  { id: 35, name: 'Heels 6', category: 'Heels', price: 30, image: heels6Img, description: 'Modern beige heels.', colour: 'Beige', size: 'L', discount: 'None' },
  { id: 36, name: 'Heels 7', category: 'Heels', price: 31, image: heels7Img, description: 'Chic beige heels.', colour: 'Beige', size: 'M', discount: 'None' },
  { id: 37, name: 'Heels 8', category: 'Heels', price: 32, image: heels8Img, description: 'Sophisticated beige heels.', colour: 'Beige', size: 'S', discount: 'None' },
  { id: 38, name: 'Heels 9', category: 'Heels', price: 33, image: heels9Img, description: 'Elegant beige heels.', colour: 'Beige', size: 'M', discount: '75% Off' },
  { id: 39, name: 'Heels 10', category: 'Heels', price: 34, image: heels10Img, description: 'Trendy beige heels.', colour: 'Beige', size: 'L', discount: 'None' },
  { id: 40, name: 'Heels 11', category: 'Heels', price: 35, image: heels11Img, description: 'Classic beige heels.', colour: 'Beige', size: 'M', discount: 'None' },
  { id: 41, name: 'Heels 12', category: 'Heels', price: 36, image: heels12Img, description: 'Modern beige heels.', colour: 'Beige', size: 'S', discount: 'None' },
  { id: 42, name: 'Heels 13', category: 'Heels', price: 37, image: heels13Img, description: 'Chic beige heels.', colour: 'Beige', size: 'M', discount: 'None' },
  { id: 43, name: 'Heels 14', category: 'Heels', price: 38, image: heels14Img, description: 'Sophisticated beige heels.', colour: 'Beige', size: 'L', discount: 'None' },
  { id: 44, name: 'Jeans 3', category: 'Jeans', price: 22, image: jeans3Img, description: 'Slim fit jeans.', colour: 'Blue', size: 'M', discount: 'None' },
  { id: 45, name: 'Jeans 4', category: 'Jeans', price: 23, image: jeans4Img, description: 'Classic black jeans.', colour: 'Black', size: 'L', discount: '25% Off' },
  { id: 46, name: 'Jeans 5', category: 'Jeans', price: 24, image: jeans5Img, description: 'Trendy ripped jeans.', colour: 'Blue', size: 'S', discount: 'None' },
  { id: 47, name: 'Jeans 6', category: 'Jeans', price: 25, image: jeans6Img, description: 'Modern white jeans.', colour: 'White', size: 'M', discount: 'None' },
  { id: 48, name: 'Jeans 7', category: 'Jeans', price: 26, image: jeans7Img, description: 'Chic grey jeans.', colour: 'Grey', size: 'L', discount: 'None' },
  { id: 49, name: 'Jeans 8', category: 'Jeans', price: 27, image: jeans8Img, description: 'Sophisticated blue jeans.', colour: 'Blue', size: 'M', discount: 'None' },
  { id: 50, name: 'Jeans 9', category: 'Jeans', price: 28, image: jeans9Img, description: 'Elegant blue jeans.', colour: 'Blue', size: 'S', discount: 'None' },
  { id: 51, name: 'Jeans 10', category: 'Jeans', price: 29, image: jeans10Img, description: 'Trendy blue jeans.', colour: 'Blue', size: 'M', discount: '50% Off' },
  { id: 52, name: 'Jeans 11', category: 'Jeans', price: 30, image: jeans11Img, description: 'Classic blue jeans.', colour: 'Blue', size: 'L', discount: 'None' },
  { id: 53, name: 'Jeans 12', category: 'Jeans', price: 31, image: jeans12Img, description: 'Modern blue jeans.', colour: 'Blue', size: 'M', discount: 'None' },
  { id: 54, name: 'Jeans 13', category: 'Jeans', price: 32, image: jeans13Img, description: 'Chic blue jeans.', colour: 'Blue', size: 'S', discount: 'None' },
  { id: 55, name: 'Jeans 14', category: 'Jeans', price: 33, image: jeans14Img, description: 'Sophisticated blue jeans.', colour: 'Blue', size: 'M', discount: 'None' },
  { id: 56, name: 'Jeans 15', category: 'Jeans', price: 34, image: jeans15Img, description: 'Elegant blue jeans.', colour: 'Blue', size: 'L', discount: 'None' },
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

  let filteredProducts = products
    .filter(p => selectedCategory === 'All' || p.category === selectedCategory)
    .filter(p => selectedDiscount === 'None' || p.discount === selectedDiscount)
    .filter(p => selectedSize === 'All' || p.size === selectedSize)
    .filter(p => selectedColour === 'All' || p.colour === selectedColour)

  return (
    <div className="w-full flex-1 bg-gray-50 py-12 flex flex-col gap-8 px-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Shop All Products</h2>
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        <button
          className="bg-pink-200 text-[#8d6748] px-4 py-2 rounded font-semibold hover:bg-pink-300 transition"
          onClick={() => navigate('/collections')}
        >
          View Collections
        </button>
        {/* Category Dropdown */}
        <div className="relative">
          <button
            className="px-4 py-2 bg-pink-200 rounded font-medium text-[#8d6748] flex items-center gap-2"
            onClick={() => setShowCategory((v) => !v)}
            type="button"
          >
            Category: {selectedCategory}
            <span className="ml-2">&#9662;</span>
          </button>
          {showCategory && (
            <div className="absolute left-0 mt-2 w-48 bg-white border border-pink-200 rounded shadow z-10 max-h-64 overflow-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`block w-full text-left px-4 py-2 hover:bg-pink-100 ${
                    selectedCategory === cat ? 'bg-pink-100' : ''
                  }`}
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
        {/* Discount Dropdown */}
        <div className="relative">
          <button
            className="px-4 py-2 bg-pink-200 rounded font-medium text-[#8d6748] flex items-center gap-2"
            onClick={() => setShowDiscount((v) => !v)}
            type="button"
          >
            Discount: {selectedDiscount}
            <span className="ml-2">&#9662;</span>
          </button>
          {showDiscount && (
            <div className="absolute left-0 mt-2 w-40 bg-white border border-pink-200 rounded shadow z-10">
              {discounts.map((discount) => (
                <button
                  key={discount}
                  className={`block w-full text-left px-4 py-2 hover:bg-pink-100 ${
                    selectedDiscount === discount ? 'bg-pink-100' : ''
                  }`}
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
        {/* Size Dropdown */}
        <div className="relative">
          <button
            className="px-4 py-2 bg-pink-200 rounded font-medium text-[#8d6748] flex items-center gap-2"
            onClick={() => setShowSize((v) => !v)}
            type="button"
          >
            Size: {selectedSize}
            <span className="ml-2">&#9662;</span>
          </button>
          {showSize && (
            <div className="absolute left-0 mt-2 w-40 bg-white border border-pink-200 rounded shadow z-10 max-h-48 overflow-auto">
              <button
                className={`block w-full text-left px-4 py-2 hover:bg-pink-100 ${
                  selectedSize === 'All' ? 'bg-pink-100' : ''
                }`}
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
                  className={`block w-full text-left px-4 py-2 hover:bg-pink-100 ${
                    selectedSize === size ? 'bg-pink-100' : ''
                  }`}
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
        {/* Colour Dropdown */}
        <div className="relative">
          <button
            className="px-4 py-2 bg-pink-200 rounded font-medium text-[#8d6748] flex items-center gap-2"
            onClick={() => setShowColour((v) => !v)}
            type="button"
          >
            Colour: {selectedColour}
            <span className="ml-2">&#9662;</span>
          </button>
          {showColour && (
            <div className="absolute left-0 mt-2 w-40 bg-white border border-pink-200 rounded shadow z-10 max-h-48 overflow-auto">
              <button
                className={`block w-full text-left px-4 py-2 hover:bg-pink-100 ${
                  selectedColour === 'All' ? 'bg-pink-100' : ''
                }`}
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
                  className={`block w-full text-left px-4 py-2 hover:bg-pink-100 ${
                    selectedColour === colour ? 'bg-pink-100' : ''
                  }`}
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
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center">
              <img
                src={getImage(product.image)}
                alt={product.name}
                className="w-40 h-40 object-cover mb-2 rounded"
                onError={e => { e.target.onerror = null; e.target.src = placeholderImg }}
              />
              <h3 className="text-lg font-semibold mb-1 text-center">{product.name}</h3>
              <p className="text-gray-600 mb-2">₹{product.price}</p>
              <button
                className="bg-pink-200 text-[#8d6748] px-4 py-1 rounded font-semibold hover:bg-pink-300 transition"
                onClick={() => setSelectedProduct(product)}
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
        <div className="fixed inset-0 bg-white bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
              onClick={() => setSelectedProduct(null)}
            >
              &times;
            </button>
            <img
              src={getImage(selectedProduct.image)}
              alt={selectedProduct.name}
              className="w-64 h-64 object-cover rounded mb-4 mx-auto"
              onError={e => { e.target.onerror = null; e.target.src = placeholderImg }}
            />
            <h3 className="text-2xl font-bold mb-2 text-center">{selectedProduct.name}</h3>
            <p className="text-gray-600 mb-2 text-center">₹{selectedProduct.price}</p>
            <p className="text-gray-700 mb-2 text-center">{selectedProduct.description}</p>
            <p className="text-gray-700 mb-2 text-center">Colour: {selectedProduct.colour}</p>
            <p className="text-gray-700 mb-2 text-center">Size: {selectedProduct.size}</p>
            <p className="text-gray-700 mb-2 text-center">Discount: {selectedProduct.discount}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Shop;