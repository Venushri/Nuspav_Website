import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => (
  <div className="border rounded-lg shadow p-4 flex flex-col items-center">
    <img
      src={product.image}
      alt={product.name}
      className="w-32 h-32 object-cover mb-2"
    />
    <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
    <p className="text-gray-600 mb-2">${product.price}</p>
    <Link
      to={`/products/${product.id}`}
      className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
    >
      View Details
    </Link>
  </div>
)

export default ProductCard