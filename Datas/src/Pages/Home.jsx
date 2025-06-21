import React from 'react';
// import LoginModal from '../Components/LoginModal';
// import RegisterModal from '../Components/RegisterModal';
// import { useAuthModal } from '../Context/AuthModalContext';
import { Link } from 'react-router-dom';
import HeroSlider from '../Components/HeroSlider';
import Nuspav from '../Components/Nuspav';
import thriftImage from '../assets/Nuspav7.jpg';
import teeImg from '../assets/tee.jpg';
import jacketImg from '../assets/jacket.jpg';
import shortsImg from '../assets/shorts.jpg';

const featuredProducts = [
  { id: 1, name: 'Vintage Tee', price: 5.99, image: teeImg },
  { id: 2, name: 'Retro Jacket', price: 9.99, image: jacketImg },
  { id: 3, name: 'Denim Shorts', price: 4.99, image: shortsImg },
];

const testimonials = [
  { name: 'Alex R.', comment: 'Amazing finds at great prices! Will shop again.', rating: 5 },
  { name: 'Priya S.', comment: 'I love that it’s sustainable and stylish.', rating: 4 },
];

const Home = () => {
//   const { openLogin, openRegister } = useAuthModal();

  return (
    <div className="w-full bg-gray-50 text-gray-800">
  <HeroSlider /> 

{/* Why Shop Thrift */}
      <section className="py-16 px-6 md:px-16 bg-white text-center">
        <h2 className="text-4xl font-bold mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>
          Why Shop Thrift?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            {
              icon: <i className="bi bi-tree-fill text-4xl text-black-700"></i>,
              title: "Sustainable",
              desc: "Reduce waste and protect the planet.",
              extra: "Every purchase helps reduce landfill waste and supports eco-friendly fashion."
            },
            {
              icon: <i className="bi bi-cash-coin text-4xl text-black-500"></i>,
              title: "Affordable",
              desc: "Top styles without breaking the bank.",
              extra: "Find unique pieces at prices you'll love—refresh your wardrobe for less."
            },
            {
              icon: <i className="bi bi-stars text-4xl text-black-500"></i>,
              title: "Unique",
              desc: "Each piece tells a story – find your style.",
              extra: "Stand out with one-of-a-kind finds you won’t see anywhere else."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#ECD5E5] bg-opacity-80 shadow-lg rounded-2xl p-6 h-55 flex flex-col justify-center items-center transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="italic text-gray-700">{item.desc}</p>
              <p className="text-gray-500 text-sm mt-2">{item.extra}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Nuspav Section */}
      <Nuspav />

      {/* Featured Products */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">Featured Finds</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {featuredProducts.map(p => (
            <div key={p.id} className="bg-gray-100 rounded-xl shadow p-4 text-center hover:shadow-lg transition">
              <img src={p.image} alt={p.name} className="w-40 h-40 mx-auto object-cover mb-4 rounded" />
              <h3 className="font-semibold text-lg">{p.name}</h3>
              <p className="text-gray-600 mb-2">${p.price}</p>
              <Link to={`/products/${p.id}`} className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                View
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 md:px-16 bg-pink-50">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Shoppers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow">
              <p className="italic mb-4">"{t.comment}"</p>
              <div className="flex items-center justify-between">
                <span className="font-semibold">{t.name}</span>
                <span className="text-yellow-400">{'★'.repeat(t.rating)}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 md:px-16 bg-gradient-to-br from-gray-50 to-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">Steps to Own your Dream Outfit</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: <i className="bi bi-search-heart-fill text-3xl text-black-500"></i>, title: 'Browse', desc: 'Explore unique thrift pieces.' },
            { icon: <i className="bi bi-handbag-fill text-3xl text-black-500"></i>, title: 'Add to Cart', desc: 'Pick your favorites before they’re gone!' },
            { icon: <i className="bi bi-credit-card-fill text-3xl text-black-500"></i>, title: 'Checkout', desc: 'Easy, secure, and fast payment.' },
            { icon: <i className="bi bi-gift-fill text-3xl text-black-500"></i>, title: 'Enjoy', desc: 'Receive your thrift treasures!' }
          ].map((step, i) => (
            <div key={i} className="bg-[#C0C9EE] rounded-2xl p-6 shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-100 flex flex-col items-center">
              <div className="mb-4">{step.icon}</div>
              <h3 className="font-semibold text-xl text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-6 md:px-16 bg-pink-600 text-black text-center">
        <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
        <p className="mb-6">Get exclusive deals and updates in your inbox.</p>
        <div className="flex justify-center gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded text-black w-64 bg-white border border-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
          <button className="bg-black px-4 py-2 rounded hover:bg-white hover:text-black transition">Subscribe</button>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full mt-10 px-6 md:px-16 bg-pink-50">
        <div className="flex flex-col md:flex-row items-stretch justify-between gap-10">
          <div className="md:w-1/2 flex items-center text-center md:text-left">
            <div>
              <p className="text-2xl text-pink-700 font-semibold flex items-center justify-center md:justify-start gap-2 mb-4" style={{ fontFamily: "'Dancing Script', cursive" }}>
                Created with love <i className="bi bi-balloon-heart-fill text-pink-500 text-3xl align-middle"></i> for every individual out there.
              </p>
              <h2 className="text-lg font-medium mb-4 flex items-center justify-center md:justify-start gap-2">
                Join the Thrift Movement <i className="bi bi-globe-americas-fill text-xl text-green-800 align-middle"></i>
              </h2>
              <Link to="/shop" className="inline-block bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
                Browse Collection
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-end items-end">
            <img src={thriftImage} alt="Thrift Movement" className="max-h-[400px] w-auto object-cover shadow-lg" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
