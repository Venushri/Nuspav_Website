import React from 'react'
import ProductCard from '../Components/ProductCard'

// Example product data
const products = [
  { id: 1, name: 'Product 1', price: 29.99, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', price: 49.99, image: 'https://via.placeholder.com/150' },
]

const ProductList = () => (
  <div className="w-full flex-1 bg-gray-50">
    <h2 className="text-2xl font-bold mb-4">All Products</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
)

export default ProductList