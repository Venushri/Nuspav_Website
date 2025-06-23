import React from 'react'
import ProductCard from '../Components/ProductCard'

const products = [
  { id: 1, name: 'Blue Jeans', category: 'jeans', price: 25, image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80' },
  { id: 2, name: 'White T-Shirt', category: 'tshirts', price: 10, image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80' },
  { id: 3, name: 'Summer Dress', category: 'dresses', price: 20, image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80' },
  { id: 4, name: 'Black Shorts', category: 'shorts', price: 12, image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80' },
  { id: 5, name: 'Formal Shirt', category: 'shirts', price: 15, image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80' },
  { id: 6, name: 'Sneakers', category: 'shoes', price: 18, image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80' },
  { id: 7, name: 'Red Heels', category: 'heels', price: 22, image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80' },
]

const ProductList = () => (
  <div className="w-full flex-1 bg-gray-50 py-12">
    <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">All Products</h2>
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
)

export default ProductList