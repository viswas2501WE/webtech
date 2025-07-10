import GreetingRotator from '@/components/Admin/Common/Hello';
import Image from 'next/image';
import React from 'react';

// Main App component for the login page
export default function Admin() {
    const bgImg = `/Local/AdminBG.avif`;
  return (
      <div className=" overflow-hidden flex flex-col md:flex-row w-full h-full">
        
        <div className="w-full md:w-1/2 h-[300px] md:h-screen bg-cover bg-center relative">
    <Image
        src={bgImg}
        alt="Espire Vox Logo"
        fill
        className="object-cover"
        priority
    />
    <div className="text-white absolute top-[40%] left-[10%] z-50">
        <span><GreetingRotator /></span>
        <p className="pt-15 text-4xl md:text-6xl text-gray-300">
            Welcome Back
        </p>
    </div>
</div>

        {/* Right Section: Login Form */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center items-center">
          <div className="absolute top-4 right-4 md:relative md:top-auto md:right-auto md:self-end md:mb-4">
          </div>

          <div className="flex justify-center w-1/2 mb-8">
            {/* Placeholder for Logo */}
                <h2 className="text-3xl font-semibold text-gray-800">Sign In</h2>
            
          </div>

          <form className="w-full max-w-sm">
            <div className="mb-4">
              <input
                type="email"
                placeholder="E-mail Address *"
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#252A3F] focus:ring-1 focus:ring-[#252A3F] text-gray-700"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password *"
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#252A3F] focus:ring-1 focus:ring-[#252A3F] text-gray-700"
                required
              />
            </div>
            <div className="flex justify-end mb-6">
              <a href="#" className="text-sm text-[#252A3F] hover:underline">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-[#252A3F] cursor-pointer text-white py-3 rounded-lg font-semibold hover:bg-[#333952] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#252A3F] focus:ring-offset-2"
            >
              Sign In
            </button>
          </form>

         
        </div>

    </div>
  );
}

