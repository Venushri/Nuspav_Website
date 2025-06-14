import React from 'react'
import { Link } from 'react-router-dom'

const categories = [
  { name: 'Shorts', image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80', link: '/shop?cat=shorts' },
  { name: 'Jeans', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80', link: '/shop?cat=jeans' },
  { name: 'T-Shirts', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80', link: '/shop?cat=tshirts' },
  { name: 'Shirts', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', link: '/shop?cat=shirts' },
  { name: 'Dresses', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80', link: '/shop?cat=dresses' },
  { name: 'Shoes', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80', link: '/shop?cat=shoes' },
  { name: 'Heels', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', link: '/shop?cat=heels' },
]

const featuredProducts = [
  { id: 1, name: 'Classic Tee', price: 29.99, image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80' },
  { id: 2, name: 'Summer Dress', price: 49.99, image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80' },
  { id: 3, name: 'Leather Bag', price: 89.99, image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80' },
]

const Home = () => (
  <div className="flex-1 w-full bg-gray-50">
    {/* Hero Section */}
    <section
      className="relative bg-cover bg-center h-[400px] flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80')",
      }}
    >
      {/* This section is now just the image */}
    </section>
    <div className="bg-black bg-opacity-50 p-10 rounded text-center mt-8 mb-8 max-w-2xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Discover Your Style</h1>
      <p className="text-lg text-gray-200 mb-6">Shop the latest trends in fashion</p>
      <Link
        to="/shop"
        className="bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-200 transition"
      >
        Shop Now
      </Link>
    </div>

    {/* Promo Banner */}
    <div className="bg-pink-600 text-white text-center py-2 font-semibold">
      Free Shipping on orders over $50!
    </div>

    {/* Categories */}
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Shop by Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {categories.map(cat => (
          <Link to={cat.link} key={cat.name} className="group relative rounded-lg overflow-hidden shadow hover:shadow-lg transition">
            <img src={cat.image} alt={cat.name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform" />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <span className="text-white text-xl font-semibold">{cat.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>

    {/* Featured Products */}
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {featuredProducts.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <img src={product.image} alt={product.name} className="w-40 h-40 object-cover mb-2 rounded" />
            <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
            <p className="text-gray-600 mb-2">${product.price}</p>
            <Link to={`/products/${product.id}`} className="bg-black text-white px-4 py-1 rounded hover:bg-gray-800 transition">View</Link>
          </div>
        ))}
      </div>
    </section>
  </div>
)

export default Home