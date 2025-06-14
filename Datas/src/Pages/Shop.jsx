import React, { useState } from 'react'
import ProductCard from '../Components/ProductCard'

const categories = [
  'All', 'Shorts', 'Jeans', 'T-Shirts', 'Shirts', 'Dresses', 'Shoes', 'Heels'
]

const products = [
  { id: 1, name: 'Blue Jeans', category: 'Jeans', price: 25, image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80' },
  { id: 2, name: 'White T-Shirt', category: 'T-Shirts', price: 10, image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80' },
  { id: 3, name: 'Summer Dress', category: 'Dresses', price: 20, image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80' },
  { id: 4, name: 'Black Shorts', category: 'Shorts', price: 12, image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80' },
  { id: 5, name: 'Formal Shirt', category: 'Shirts', price: 15, image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80' },
  { id: 6, name: 'Sneakers', category: 'Shoes', price: 18, image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80' },
  { id: 7, name: 'Red Heels', category: 'Heels', price: 22, image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80' },
  { id: 8, name: 'Denim Shorts', category: 'Shorts', price: 14, image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80' },
  { id: 9, name: 'Graphic Tee', category: 'T-Shirts', price: 13, image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80' },
  { id: 10, name: 'Maxi Dress', category: 'Dresses', price: 28, image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80' },
  { id: 11, name: 'Oxford Shirt', category: 'Shirts', price: 17, image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80' },
  { id: 12, name: 'Canvas Shoes', category: 'Shoes', price: 16, image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80' },
  { id: 13, name: 'Block Heels', category: 'Heels', price: 24, image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80' },
]

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory)

  return (
    <div className="w-full flex-1 bg-gray-50 py-12">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Shop All Products</h2>
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            className={`px-4 py-1 rounded-full border ${selectedCategory === cat ? 'bg-black text-white' : 'bg-white text-black'} hover:bg-gray-200 transition`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">No products found in this category.</div>
        )}
      </div>
    </div>
  )
}

export default Shop

