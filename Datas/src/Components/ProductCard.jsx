import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => (
  <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center">
    <img
      src={product.image}
      alt={product.name}
      className="w-40 h-40 object-cover mb-2 rounded"
    />
    <h3 className="text-lg font-semibold mb-1 text-center">{product.name}</h3>
    <p className="text-gray-600 mb-2">${product.price}</p>
    <Link
      to={`/products/${product.id}`}
      className="bg-black text-white px-4 py-1 rounded hover:bg-gray-800 transition"
    >
      View
    </Link>
  </div>
)

export default ProductCard