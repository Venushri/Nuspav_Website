import React, { useRef, useEffect } from 'react'
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
import jewellery1Img from '../assets/jewellery1.jpg'
import stylebookImg from '../assets/stylebook.jpg'
import stylishtopsImg from '../assets/stylishtops.jfif'
import baggImg from '../assets/bagg.jpg'


const categories = [
  { name: 'Dresses', link: '/shop?cat=Dresses' },
  { name: 'Spring Collection', link: '/shop?cat=Spring' },
  { name: 'Summer Collection', link: '/shop?cat=Summer' },
  { name: 'Autumn Collection', link: '/shop?cat=Autumn' },
  { name: 'Winter Collection', link: '/shop?cat=Winter' },
  { name: 'Bags Collection', link: '/shop?cat=Bags' },
  { name: 'Shoes', link: '/shop?cat=Shoes' },
  { name: 'Shirts', link: '/shop?cat=Shirts' },
  { name: 'T-Shirts', link: '/shop?cat=T-Shirts' },
  { name: 'Heels', link: '/shop?cat=Heels' },
  { name: 'Hats', link: '/shop?cat=Hats' },
  { name: 'Sunglasses', link: '/shop?cat=Sunglasses' },
  { name: 'Jewelry', link: '/shop?cat=Jewelry' },
]

const collections = [
  {
    image: stylebookImg,
    onlyImage: true,
    coverTitle: 'Style Book'
  },
  {
    image: stylishtopsImg,
    onlyImage: true,
    coverTitle: 'Stylish Tops'
  },
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
  },
   {
    name: 'Bags Collection',
    description: 'Bags that blend style and functionality.',
    image: baggImg,
    link: '/shop?cat=Bags'
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
    title: 'Jewelry',
    description: 'Beautiful jewelry to sparkle to your outfit.',
    image: jewellery1Img,
    link: '/shop?cat=Jewelry'
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
    description: 'Trendy sunglasses to protect your eyes.',
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

const Collections = () => {
  const flipBookRef = useRef(null);
  const directionRef = useRef(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (flipBookRef.current) {
        const pageCount = flipBookRef.current.pageFlip().getPageCount();
        const currentPage = flipBookRef.current.pageFlip().getCurrentPageIndex();
        if (directionRef.current === 1) {
          if (currentPage < pageCount - 1) {
            flipBookRef.current.pageFlip().flipNext();
          } else {
            directionRef.current = -1;
          }
        } else {
          if (currentPage > 0) {
            flipBookRef.current.pageFlip().flipPrev();
          } else {
            directionRef.current = 1;
          }
        }
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex-1 bg-gray-50 py-12 flex flex-col items-center gap-8 px-4 sm:px-6 lg:px-8">
      <div className="flex-1 flex flex-col items-center w-full max-w-7xl">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 text-center tracking-widest uppercase text-pink-500">
          Our Collections
        </h2>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
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

        <div className="w-full max-w-4xl mb-12">
          <HTMLFlipBook
            ref={flipBookRef}
            width={300}
            height={450}
            showCover={true}
            className="shadow-lg mx-auto"
            size="stretch"
            mobileScrollSupport={true}
          >
            {collections.map((col, idx) =>
              col.onlyImage ? (
                <div
                  key={idx}
                  className="h-full flex flex-col items-center justify-center relative bg-white"
                >
                  <img
                    src={col.image}
                    alt={col.coverTitle || ''}
                    className="w-full h-full object-cover"
                  />
                  {col.coverTitle && (
                    <div className="absolute text-white text-2xl font-bold text-center bg-black/40 px-4 py-2 rounded">
                      {col.coverTitle}
                    </div>
                  )}
                </div>
              ) : (
                <div key={idx} className="h-full bg-white p-4 flex flex-col justify-between">
                  <div className="flex justify-center items-center h-1/2">
                    <img
                      src={col.image}
                      alt={col.name}
                      className="max-h-full w-full object-contain"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <h2 className="text-lg font-bold mb-1">{col.name}</h2>
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
        </div>

        <section className="w-full max-w-7xl bg-gradient-to-r from-yellow-50 via-pink-50 to-white rounded-2xl shadow-md p-6">
          <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-700 to-green-700 bg-clip-text text-transparent mb-6 text-center uppercase tracking-wide">
            Style Your Look
          </h3>
          <div className="flex gap-4 overflow-x-auto scrollbar-hide">
            {addOns.map(item => (
              <div
                key={item.title}
                className="flex-shrink-0 bg-white rounded-xl shadow p-4 w-40 sm:w-48 flex flex-col items-center justify-between"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover rounded mb-2 w-20 h-20"
                />
                <h4 className="font-bold text-base mb-1 text-center truncate w-full">{item.title}</h4>
                <p className="text-sm text-gray-600 mb-2 text-center line-clamp-2">{item.description}</p>
                <Link
                  to={item.link}
                  className="bg-black text-white px-3 py-1 text-sm rounded hover:bg-gray-800 w-full text-center truncate"
                >
                  Explore →
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Collections;