import React, { useState, useEffect } from 'react';
import img1 from '../assets/Nuspav1.jpg';
import img2 from '../assets/Nuspav2.jpg';
import img3 from '../assets/Nuspav3.jpg';
import img4 from '../assets/Nuspav4.jpg';
import img5 from '../assets/Nuspav5.jpg';
import img6 from '../assets/Nuspav6.jpg';

const images = [img1, img2, img3, img4, img5, img6];

const Nuspav = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    
    <section className="w-full px-8 md:px-1 bg-gray-100">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-15 items-center">
        {/* Left Image Slider */}
        <div className="h-[400px] w-full overflow-hidden">
          <img
            src={images[current]}
            alt="NUSPAV Feature"
            className="w-full h-full object-cover"
            style={{ borderRadius: 0 }}
          />
        </div>
 
        {/* Right Text Content */}
        <div className="text-center md:text-left md:pl-20">
          <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
            {/* <span className="text-gray-600 text-sm">& More</span> */}
          </div>
          <h2 className="text-3xl font-semibold mb-2 text-gray-800">NUSPAV Specials</h2>
          <p className="text-xl text-gray-600 mb-4">
  Up to 50% Off on Premium Styles.<br />
  Explore unique thrifted finds in shorts, jeans, t-shirts, shirts, dresses, shoes, and heels.<br />
  </p>
          <button className="text-red-700 font-medium hover:underline text-base">+ Explore</button>
        </div>
      </div>
    </section>
    
  );
};

export default Nuspav;
