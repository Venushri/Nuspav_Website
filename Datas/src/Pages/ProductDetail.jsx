import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const { id } = useParams()
  return (
    <div className="w-full flex-1 bg-gray-50">
      <h2 className="text-2xl font-bold mb-4">Product Detail</h2>
      <p>Details for product ID: {id}</p>
    </div>
  )
}

export default ProductDetail