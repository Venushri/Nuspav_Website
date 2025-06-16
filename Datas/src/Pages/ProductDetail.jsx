import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../Context/CartContext'; 
import teeImg from '../assets/tee.jpg';
import jacketImg from '../assets/jacket.jpg';
import shortsImg from '../assets/shorts.jpg';

const products = [
  { id: 1, name: 'Vintage Tee', category: 'T-Shirts', price: 5.99, image: teeImg },
  { id: 2, name: 'Retro Jacket', category: 'Shirts', price: 9.99, image: jacketImg },
  { id: 3, name: 'Denim Shorts', category: 'Jeans', price: 4.99, image: shortsImg },
];

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart(); 

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="w-full flex-1 flex items-center justify-center">
        <p className="text-xl text-gray-700">Product not found.</p>
      </div>
    );
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
          <button
            onClick={() => addToCart(product)} 
            className="bg-black text-black px-6 py-2 rounded font-semibold hover:bg-gray-800 transition text-center w-full md:w-auto"

          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
