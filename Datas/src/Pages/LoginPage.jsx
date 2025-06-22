import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react'; // Make sure you have lucide-react installed

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-white to-teal-100 px-4">
      <div className="bg-white shadow-2xl rounded-xl p-8 sm:p-10 w-full max-w-md transition-all">
        {/* Heading */}
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Welcome Back 👋</h2>
        <p className="text-sm text-gray-500 text-center mb-8">Login to continue shopping with us</p>

        {/* Login Form */}
        <form>
          {/* Email Field */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1"></label>
            <input
              type="email"
              placeholder="example@xyz.com"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none transition"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1"></label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="w-full px-4 py-2 pr-10 border rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none transition"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-300 to-teal-300 text-white font-semibold py-2 rounded-lg shadow-md hover:opacity-90 transition"
          >
            Login
          </button>
        </form>

        {/* Signup Link */}
        <div className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{' '}
          <button
            onClick={() => navigate('/signup')}
            className="text-teal-600 hover:underline font-medium"
            type="button"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
