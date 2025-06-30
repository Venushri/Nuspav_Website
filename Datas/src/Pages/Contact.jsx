import React, { useState } from 'react';
import { motion } from 'framer-motion'; 
import HelpSidebar from '../Components/HelpSidebar';
import { useAuth } from '../Context/AuthContext';
import { Info, LogIn, PhoneCall } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const Contact = () => {
  const [selected, setSelected] = useState('order');
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-teal-50 px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 tracking-tight mb-2">
            Help Center
          </h2>
          <p className="text-base sm:text-lg text-gray-600 flex justify-center items-center gap-1">
            <Info className="w-5 h-5 text-teal-500" />
            We’re here to help. Choose a topic to get started.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-1"
          >
            <div className="bg-white shadow-md rounded-xl p-4 sm:p-5">
              <HelpSidebar selected={selected} setSelected={setSelected} />
            </div>
          </motion.div>

          {/* Main */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="bg-white border border-gray-200 rounded-xl shadow-md p-5 sm:p-8 transition-all duration-300">
              {!isAuthenticated ? (
                <div className="text-center">
                  <p className="text-gray-700 mb-6 text-base sm:text-lg relative group">
                    Please log in to view your recent purchase queries.
                    <span className="absolute -top-6 right-0 bg-teal-600 text-white text-xs sm:text-sm px-3 py-1 rounded shadow hidden group-hover:block">
                      Secure access to your orders
                    </span>
                  </p>
                  <button
                    className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-black font-semibold py-2 px-5 sm:px-6 rounded-lg shadow"
                    onClick={() => navigate('/login')}
                  >
                    <LogIn className="w-5 h-5" />
                    LOG IN
                  </button>
                </div>
              ) : (
                <HelpContent selected={selected} />
              )}
            </div>

            {/* Call to Action */}
            <div className="mt-8 sm:mt-10 bg-gradient-to-r from-teal-500 to-teal-700 text-white rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg">
              <div className="text-center md:text-left">
                <h3 className="text-lg sm:text-xl font-bold">Still Need Help?</h3>
                <p className="text-sm sm:text-base opacity-90">Our support team is just one call away.</p>
              </div>
              <a
                href="tel:+1800123456"
                className="inline-flex items-center bg-black text-teal-300 font-semibold py-2 px-5 rounded-lg shadow hover:bg-gray-800 transition"
              >
                <PhoneCall className="w-5 h-5 mr-2" />
                Call Support
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;