import React from 'react'
import { Link } from 'react-router-dom'
import HTMLFlipBook from 'react-pageflip'
import accessories1Img from '../assets/accessories1.jpg'
import shoe2Img from '../assets/shoe2.jpg'
import hat1Img from '../assets/hat1.jpg'
import bag1Img from '../assets/bag1.jpg'
import arezzoImg from '../assets/arezzo.jpeg'
import dress1Img from '../assets/dress1.jpg'
import springcollectionImg from '../assets/springcollection.jpg'
import spring1Img from '../assets/spring1.jfif'
import summercollectionImg from '../assets/summercollection.jfif'
import summer1Img from '../assets/summer1.jpg'
import wintercollectionImg from '../assets/wintercollection.jfif'
import winter1Img from '../assets/winter1.jpg'
import autumncollectionImg from '../assets/autumncollection.jpg'
import autumn1Img from '../assets/autumn1.jpg'
import shoe1Img from '../assets/shoe1.jpg'
import shirt1Img from '../assets/shirt1.jpg'
import tshirt1Img from '../assets/tshirt1.jpg'
import sunglasses1Img from '../assets/sunglasses1.jpg'

const categories = [
  { name: 'Dresses', link: '/shop?cat=Dresses' },
  { name: 'Spring Collection', link: '/shop?cat=Spring' },
  { name: 'Summer Collection', link: '/shop?cat=Summer' },
  { name: 'Autumn Collection', link: '/shop?cat=Autumn' },
  { name: 'Winter Collection', link: '/shop?cat=Winter' },
  { name: 'Shoes', link: '/shop?cat=Shoes' },
  { name: 'Shirts', link: '/shop?cat=Shirts' },
  { name: 'T-Shirts', link: '/shop?cat=T-Shirts' },
  { name: 'Heels', link: '/shop?cat=Heels' },
  { name: 'Hats', link: '/shop?cat=Hats' },
  { name: 'Sunglasses', link: '/shop?cat=Sunglasses' }
]

const collections = [
  {
    name: 'Dresses Galore',
    description: 'Explore our latest collection of dresses for every occasion.',
    image: dress1Img,
    link: '/shop?cat=Dresses'
  },
  {
    name: 'Spring Collection',
    title: 'Spring Collection',
    description: 'Fresh styles to welcome the blooming season, perfect for any event.',
    image: spring1Img,
    link: '/shop?cat=Dresses'
  },
  { image: springcollectionImg, onlyImage: true },
  {
    name: 'Summer Collection',
    title: 'Summer Collection',
    description: 'Light and breezy outfits perfect for the summer heat.',
    image: summercollectionImg,
    link: '/shop?cat=Dresses'
  },
  { image: summer1Img, onlyImage: true },
  {
    name: 'Autumn Collection',
    title: 'Autumn Collection',
    description: 'Fall in love with our autumn styles.',
    image: autumncollectionImg,
    link: '/shop?cat=Dresses'
  },
  { image: autumn1Img, onlyImage: true },
  {
    name: 'Winter Collection',
    title: 'Winter Collection',
    description: 'Warm and cozy styles to keep you snug this winter.',
    image: wintercollectionImg,
    link: '/shop?cat=Dresses'
  },
  { image: winter1Img, onlyImage: true },
  {
    name: 'Step Up',
    description: 'Shoes and heels to complete your look.',
    image: shoe1Img,
    link: '/shop?cat=Shoes'
  },
  {
    name: 'Shirt Stories',
    description: 'From casual to formal, shirts for every mood.',
    image: shirt1Img,
    link: '/shop?cat=Shirts'
  },
  {
    name: 'Tee Time',
    description: 'Trendy and comfy t-shirts for all-day wear.',
    image: tshirt1Img,
    link: '/shop?cat=T-Shirts'
  },
  {
    name: 'Heels Collection',
    description: 'Step out in style with our curated heels.',
    image: arezzoImg,
    link: '/shop?cat=Heels'
  }
]

const addOns = [
  {
    title: 'Accessories',
    description: 'Chic accessories to elevate your style.',
    image: accessories1Img,
    link: '/shop?cat=Accessories'
  },
  {
    title: 'Bags',
    description: 'Trendy bags for every occasion.',
    image: bag1Img,
    link: '/shop?cat=Bags'
  },
  {
    title: 'Shoes',
    description: 'Step confidently with our shoe collection.',
    image: shoe2Img,
    link: '/shop?cat=Shoes'
  },
  {
    title: 'Heels',
    description: 'Elegant heels for any outfit.',
    image: arezzoImg,
    link: '/shop?cat=Heels'
  },
  {
    title: 'Hats',
    description: 'Stylish hats to complete your look.',
    image: hat1Img,
    link: '/shop?cat=Hats'
  },
   {
    title: 'Sunglasses',
    description: 'Trendy sunglasses to protect your eyes in style.',
    image: sunglasses1Img,
    link: '/shop?cat=Sunglasses'
   }
]

const gradientTextStyle = {
  fontFamily: '"Times New Roman", Times, serif',
  fontSize: '2rem',
  fontWeight: 'bold',
  background: 'linear-gradient(90deg, #c2185b 40%, #006400 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  marginBottom: '0.5rem',
  textAlign: 'center'
}

const boxStyle = "bg-yellow-100 shadow rounded-lg p-6 flex flex-col items-center";
const boxTitleStyle = "text-xl font-bold mb-2";

const Collections = () => (
  <div className="w-full flex-1 bg-gray-50 py-12 flex flex-row items-start gap-8 px-8">
    <aside className="w-56 bg-pink-100 shadow p-4 flex flex-col gap-2" style={{ marginTop: '120px', height: '700px', justifyContent: 'flex-start' }}>
      <h3 className="text-lg font-bold mb-2" style={{ color: '#8d6748' }}>Categories</h3>
      {categories.map(cat => (
        <Link
          key={cat.name}
          to={cat.link}
          className="px-4 py-2 rounded font-medium transition"
          style={{ color: '#b29982' }}
          onMouseOver={e => (e.target.style.color = '#8d6748')}
          onMouseOut={e => (e.target.style.color = '#b29982')}
        >
          {cat.name}
        </Link>
      ))}
    </aside>
    <div className="flex-1 flex flex-col items-center">
      <h2 className="text-4xl font-extrabold mb-10 text-gray-900 text-center tracking-widest uppercase" style={{ letterSpacing: '0.2em' }}>
        Our Collections
      </h2>
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className={boxStyle}>
          <h3 className={`${boxTitleStyle} text-yellow-900`}>New Arrivals</h3>
          <p className="text-yellow-900 text-center">Check out the latest additions to our collection!</p>
        </div>
        <div className={boxStyle}>
          <h3 className={`${boxTitleStyle} text-yellow-900`}>New Accessories</h3>
          <p className="text-yellow-900 text-center">Discover trendy accessories to complete your look.</p>
        </div>
        <div className={boxStyle}>
          <h3 className={`${boxTitleStyle} text-yellow-900`}>Trending / Popular Now</h3>
          <p className="text-yellow-900 text-center">See what's hot and popular among our shoppers!</p>
        </div>
      </div>
      <HTMLFlipBook width={450} height={700} showCover={true} className="shadow-lg mb-12">
        {collections.map((col, idx) =>
          col.onlyImage ? (
            <div key={idx} className="h-full bg-white p-8 flex items-center justify-center">
              <img
                src={col.image}
                alt=""
                className="object-contain"
                style={{ maxHeight: '100%', width: '100%' }}
              />
            </div>
          ) : (
            <div key={col.name || idx} className="h-full bg-white p-8 flex flex-col justify-between">
              <div className="flex justify-center items-center" style={{ height: '45%' }}>
                <img
                  src={col.image}
                  alt={col.name}
                  className="object-contain"
                  style={{ maxHeight: '100%', width: '100%' }}
                />
              </div>
              {col.title && <div style={gradientTextStyle}>{col.title}</div>}
              <div className="text-center">
                <h2 className="text-xl font-bold mb-1">{col.name}</h2>
                <p className="text-sm text-gray-700 mb-3">{col.description}</p>
                {col.link && (
                  <Link
                    to={col.link}
                    className="bg-black text-white px-3 py-1 rounded text-sm hover:bg-gray-800 transition"
                  >
                    Shop Now →
                  </Link>
                )}
              </div>
            </div>
          )
        )}
      </HTMLFlipBook>
      <h3 className="text-2xl font-bold mt-10 mb-6 text-gray-800">Complete Your Look</h3>
      <div className="grid grid-cols-6 gap-4 max-w-6xl w-full justify-start items-start" style={{marginLeft:0}}>
        {addOns.map(item => (
          <div key={item.title} className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center w-full" style={{minWidth:'120px', maxWidth:'180px'}}>
            <img src={item.image} alt={item.title} className="h-32 w-32 object-cover rounded mb-2" />
            <h4 className="font-bold text-base mb-1 text-center">{item.title}</h4>
            <p className="text-xs text-gray-600 mb-2 text-center">{item.description}</p>
            <Link to={item.link} className="bg-black text-white px-3 py-1 text-xs rounded hover:bg-gray-800">
              Explore →
            </Link>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default Collections