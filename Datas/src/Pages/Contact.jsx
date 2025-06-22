import React, { useState } from 'react';
import HelpSidebar from '../Components/HelpSidebar';
import HelpContent from '../Components/HelpContent';
import { useAuth } from '../Context/AuthContext';
import { motion } from 'framer-motion';
import { Info, LogIn, PhoneCall } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // <-- Add this import

const Contact = () => {
  const [selected, setSelected] = useState('order');
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate(); // <-- Add this line

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-teal-50 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold text-gray-800 tracking-tight mb-2">
            Help Center
          </h2>
          <p className="text-lg text-gray-600">
            <Info className="inline-block w-5 h-5 mr-2 text-teal-500" />
            We’re here to help. Choose a topic to get started.
          </p>
        </motion.div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="md:col-span-1"
          >
            <div className="bg-white shadow-md rounded-xl p-4">
              <HelpSidebar selected={selected} setSelected={setSelected} />
            </div>
          </motion.div>

          {/* Main Content Area */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="md:col-span-3"
          >
            <div className="bg-white border border-gray-200 rounded-xl shadow-md p-8 transition-all duration-300">
              {!isAuthenticated ? (
                <div className="text-center">
                  <p className="text-gray-700 mb-6 text-lg relative group">
                    <span className="inline-block">
                      Please log in to view your recent purchase queries.
                    </span>
                    <span className="absolute -top-6 right-0 bg-teal-600 text-white text-sm px-3 py-1 rounded shadow hidden group-hover:block">
                      Secure access to your orders
                    </span>
                  </p>
                  <button
                    className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-black font-semibold py-2 px-6 rounded-lg shadow"
                    onClick={() => navigate('/login')} // <-- Add this handler
                  >
                    <LogIn className="w-5 h-5" />
                    LOG IN
                  </button>
                </div>
              ) : (
                <HelpContent selected={selected} />
              )}
            </div>

            {/* Call to Action Section */}
            <div className="mt-10 bg-gradient-to-r from-teal-500 to-teal-700 text-white rounded-xl p-6 flex flex-col md:flex-row items-center justify-between shadow-lg">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold">Still Need Help?</h3>
                <p className="text-sm opacity-90">Our support team is just one call away.</p>
              </div>
              <a
                href="tel:+1800123456"
                className="inline-flex items-center bg-black text-teal-700 font-semibold py-2 px-5 rounded-lg shadow hover:bg-gray-100 transition"
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
