import React from 'react'
import { Link } from 'react-router-dom'

const collections = [
  {
    name: 'Summer Essentials',
    description: 'Lightweight shorts, tees, and dresses for sunny days.',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80',
    link: '/shop?cat=Shorts'
  },
  {
    name: 'Denim Days',
    description: 'Classic jeans and jackets for every style.',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80',
    link: '/shop?cat=Jeans'
  },
  {
    name: 'Dress Up',
    description: 'Find the perfect dress for any occasion.',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    link: '/shop?cat=Dresses'
  },
  {
    name: 'Step Up',
    description: 'Shoes and heels to complete your look.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
    link: '/shop?cat=Shoes'
  },
  {
    name: 'Shirt Stories',
    description: 'From casual to formal, shirts for every mood.',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    link: '/shop?cat=Shirts'
  },
  {
    name: 'Tee Time',
    description: 'Trendy and comfy t-shirts for all-day wear.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
    link: '/shop?cat=T-Shirts'
  },
  {
    name: 'Heels Collection',
    description: 'Step out in style with our curated heels.',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    link: '/shop?cat=Heels'
  }
]

const Collections = () => (
  <div className="w-full flex-1 bg-gray-50 py-12">
    <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">Our Collections</h1>
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
      {collections.map(col => (
        <Link to={col.link} key={col.name} className="group bg-white rounded-lg shadow hover:shadow-lg transition flex flex-col overflow-hidden">
          <img src={col.image} alt={col.name} className="h-48 w-full object-cover group-hover:scale-105 transition-transform" />
          <div className="p-4 flex-1 flex flex-col">
            <h2 className="text-xl font-semibold mb-2 text-gray-900">{col.name}</h2>
            <p className="text-gray-600 text-sm flex-1">{col.description}</p>
            <span className="mt-4 inline-block text-blue-700 font-semibold group-hover:underline">Shop Now &rarr;</span>
          </div>
        </Link>
      ))}
    </div>
  </div>
)

export default Collections