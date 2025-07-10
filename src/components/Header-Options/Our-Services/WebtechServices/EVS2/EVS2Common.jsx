'use client';

import React from 'react';
import Image from 'next/image';

// env example usage (optional if icon is passed directly)
const BASE = process.env.NEXT_PUBLIC_IMG_url;
const BASE1 = process.env.NEXT_PUBLIC_IMG_url1;
const BASE2 = process.env.NEXT_PUBLIC_IMG_url2;
const BASE3 = process.env.NEXT_PUBLIC_IMG_url3;
const BASE4 = process.env.NEXT_PUBLIC_IMG_url4;

const EVS2Common = ({ icon, title, discription }) => {
  return (
    <div className="relative group w-full h-full p-4 sm:p-6 bg-white rounded shadow-lg hover:shadow-lg transition-shadow duration-300 cursor-pointer flex flex-col">
      {/* Border animation corners */}
      <span className="absolute w-6 h-6 sm:w-8 sm:h-8 border-t-4 border-l-4 translate-x-4 translate-y-4
        group-hover:translate-x-0 group-hover:translate-y-0 border-[#1A96D5] opacity-0 transform
        scale-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-400
        ease-in-out top-0 left-0"
      />
      <span className="absolute w-6 h-6 sm:w-8 sm:h-8 border-t-4 border-r-4 -translate-x-4 translate-y-4
        group-hover:translate-x-0 group-hover:translate-y-0 border-[#1A96D5] opacity-0 transform
        scale-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-400
        ease-in-out top-0 right-0"
      />
      <span className="absolute w-6 h-6 sm:w-8 sm:h-8 border-b-4 border-l-4 translate-x-4 -translate-y-4
        group-hover:translate-x-0 group-hover:translate-y-0 border-[#1A96D5] opacity-0 transform
        scale-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-400
        ease-in-out bottom-0 left-0"
      />
      <span className="absolute w-6 h-6 sm:w-8 sm:h-8 border-b-4 border-r-4 -translate-x-4 -translate-y-4
        group-hover:translate-x-0 group-hover:translate-y-0 border-[#1A96D5] opacity-0 transform
        scale-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-400
        ease-in-out bottom-0 right-0"
      />

      {/* Icon + Title Section */}
      <div className="text-red-400 mb-2 flex sm:flex-col sm:mb-4 text-5xl sm:text-6xl md:text-[70px] flex-shrink-0">
        <div className="max-w-[15%] max-h-[100%] sm:max-w-[22%] sm:max-h-[100%] relative">
          <Image
            src={icon}
            alt=""
            width={100}
            height={100}
            className="w-full h-full object-contain hue-rotate-220"
          />
        </div>

        <h3
          className="text-xl sm:text-2xl pt-[5%] ml-[5%] sm:ml-0 text-gray-900 mb-2 font-[600] hover:text-[#1A96D5] transition-all duration-200 ease-in flex-shrink-0"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {title}
        </h3>
      </div>

      {/* Description */}
      <div
        className="text-sm sm:text-base text-gray-600 leading-7 font-[400] line-clamp-2"
        style={{ fontFamily: 'Roboto, sans-serif' }}
      >
        {discription}
      </div>
    </div>
  );
};

export default EVS2Common;
