import React from 'react'
import { useParams, Link } from 'react-router-dom'

const products = [
  { id: 1, name: 'Blue Jeans', category: 'jeans', price: 25, image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80', description: 'Classic blue jeans, perfect for any occasion.' },
  { id: 2, name: 'White T-Shirt', category: 'tshirts', price: 10, image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80', description: 'Comfy white t-shirt, a wardrobe essential.' },
  { id: 3, name: 'Summer Dress', category: 'dresses', price: 20, image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', description: 'Light and breezy summer dress.' },
  { id: 4, name: 'Black Shorts', category: 'shorts', price: 12, image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80', description: 'Cool black shorts for casual days.' },
  { id: 5, name: 'Formal Shirt', category: 'shirts', price: 15, image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', description: 'Smart formal shirt for work or events.' },
  { id: 6, name: 'Sneakers', category: 'shoes', price: 18, image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80', description: 'Trendy sneakers for everyday wear.' },
  { id: 7, name: 'Red Heels', category: 'heels', price: 22, image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', description: 'Stylish red heels to elevate your look.' },
]

const ProductDetail = () => {
  const { id } = useParams()
  const product = products.find(p => p.id === Number(id))

  if (!product) {
    return (
      <div className="w-full flex-1 flex items-center justify-center">
        <p className="text-xl text-gray-700">Product not found.</p>
      </div>
    )
  }

  return (
    <div className="w-full flex-1 bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-8 flex flex-col md:flex-row gap-8">
        <img src={product.image} alt={product.name} className="w-64 h-64 object-cover rounded" />
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-xl font-semibold mb-6">${product.price}</p>
          </div>
          <Link
            to="/cart"
            className="bg-black text-white px-6 py-2 rounded font-semibold hover:bg-gray-800 transition text-center w-full md:w-auto"
          >
            Add to Cart
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail