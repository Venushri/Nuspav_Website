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
    <div className="w-full flex-1 bg-gray-50 py-12 flex flex-col items-center gap-8 px-8">
      <div className="flex-1 flex flex-col items-center" style={{minHeight:'900px', justifyContent:'flex-start'}}>
        <h2 className="text-4xl font-extrabold mb-10 text-center tracking-widest uppercase"
          style={{ letterSpacing: '0.2em', color: '#ec4899' }}>
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
        <HTMLFlipBook ref={flipBookRef} width={450} height={700} showCover={true} className="shadow-lg mb-12">
          {collections.map((col, idx) =>
            col.onlyImage ? (
              <div key={idx} className="h-full p-0 flex flex-col items-center justify-center relative" style={{background:'#fff'}}>
                <img
                  src={col.image}
                  alt={col.coverTitle || ''}
                  className="object-cover"
                  style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                />
                {col.coverTitle && (
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: '#fff',
                    fontSize: '2.8rem',
                    fontWeight: 'bold',
                    letterSpacing: '0.15em',
                    textShadow: '0 4px 24px rgba(0,0,0,0.35)',
                    background: 'rgba(0,0,0,0.18)',
                    padding: '0.5em 1.5em',
                    borderRadius: '18px',
                    fontFamily: 'Times New Roman, Times, serif',
                    zIndex: 2
                  }}>
                    {col.coverTitle}
                  </div>
                )}
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
        <div style={{height:'40px'}}></div>
        {/* Style Your Look section below flipbook and categories */}
        <div style={{ height: '40px' }}></div>
        <section
          style={{
            position: 'relative',
            left: '20px', 
            width: 'calc(100% - 20px)', 
            background: 'linear-gradient(90deg, #fffbe7 60%, #ffe3ec 100%)',
            borderRadius: '22px',
            boxShadow: '0 4px 24px 0 rgba(200, 24, 91, 0.10)',
            padding: '32px 18px 28px 18px',
            margin: '0 0 32px 0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            minWidth: '0',
            maxWidth: '1300px',
          }}
        >
          <h3
            style={{
              fontFamily: 'Times New Roman, Times, serif',
              fontSize: '2.1rem',
              fontWeight: 'bold',
              background: 'linear-gradient(90deg, #c2185b 40%, #006400 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '1.2rem',
              textAlign: 'center', 
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              width: '100%',
              alignSelf: 'center', 
            }}
          >
            Style Your Look
          </h3>
          <div
            className="flex flex-row gap-4 items-stretch flex-nowrap"
            style={{
              width: '100%',
              flexWrap: 'nowrap',
              justifyContent: 'flex-start',
              alignSelf: 'flex-start',
              overflow: 'visible',
              maxWidth: '1300px',
              paddingBottom: '0',
            }}
          >
            {addOns.map(item => (
              <div
                key={item.title}
                className="bg-white rounded-xl shadow p-4 flex flex-col items-center justify-between"
                style={{
                  minWidth: '140px',
                  maxWidth: '150px',
                  height: '230px',
                  flex: '1 1 0',
                  margin: '0 8px 0 0',
                  boxSizing: 'border-box',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover rounded mb-2"
                  style={{ objectFit: 'cover', width: '90px', height: '90px' }}
                />
                <h4 className="font-bold text-base mb-1 text-center" style={{whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis',width:'100%'}}>{item.title}</h4>
                <p className="text-sm text-gray-600 mb-2 text-center" style={{overflow:'hidden',textOverflow:'ellipsis',display:'-webkit-box',WebkitLineClamp:2,WebkitBoxOrient:'vertical',maxWidth:'100%'}}>{item.description}</p>
                <Link
                  to={item.link}
                  className="bg-black text-white px-3 py-1 text-sm rounded hover:bg-gray-800"
                  style={{whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis',width:'100%',textAlign:'center'}}
                >
                  Explore →
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Collections