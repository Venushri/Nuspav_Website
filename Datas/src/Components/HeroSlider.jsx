import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import thriftHome from '../assets/thrift_home.jpg'
import thriftHome2 from '../assets/thrift_home2.jpg'

const heroImages = [thriftHome, thriftHome2]

const HeroSlider = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % heroImages.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    // 🔽 Replace THIS <section> block:
    <section
      className="h-[500px] w-full relative flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${heroImages[current]})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        transition: 'background-image 1s ease-in-out',
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-md mb-4 tracking-wide">
          Thrift & Trendy
        </h1>
        <p
          className="text-lg md:text-2xl text-gray-200 drop-shadow-sm mb-8 font-[cursive] italic"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Discover sustainable fashion curated just for you — stylish, smart, and affordable.
        </p>
        <div className="flex justify-center gap-4">
          
             <Link
            to="/Shop"
            className="border border-white text-white font-medium px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            Shop Now
          </Link>
          <Link
            to="/about"
            className="border border-white text-white font-medium px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSlider
