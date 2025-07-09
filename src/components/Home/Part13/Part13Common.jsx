'use client';            

import React from 'react';

/**
 * @param {Object} props
 * @param {string}  props.name – label under the icon
 * @param {React.ComponentType} props.icon – icon component from react-icons
 */
export default function Part13Common({ name, icon: Icon }) {
  return (
    <div
      className="relative group inline-flex items-center gap-3 px-9 py-7 text-white
                 border-white cursor-pointer overflow-hidden transition-all duration-400
                 ease-in-out w-full"
    >
      {/* inner border */}
      <div className="absolute inset-0 border-2 border-white pointer-events-none
                      transition-opacity duration-400 group-hover:opacity-0" />

      {/* top-left corner  */}
      <span className="absolute top-[10%] left-[4%] w-6 h-4 border-t-2 border-l-2 border-white
                       group-hover:w-[calc(100%-8%)] group-hover:h-[calc(100%-20%)]
                       group-hover:border-[#1A96D5] transition-all duration-400" />
      {/* bottom-right corner */}
      <span className="absolute bottom-[10%] right-[4%] w-6 h-4 border-b-2 border-r-2 border-white
                       group-hover:w-[calc(100%-8%)] group-hover:h-[calc(100%-20%)]
                       group-hover:border-[#1A96D5] transition-all duration-400" />

      {/* circular icon */}
      <span className="bg-white group-hover:bg-[#1A96D5] w-10 h-10 flex items-center justify-center rounded-full
                       transition-colors duration-400">
        <Icon className="text-2xl text-[#0F285F]" />
      </span>

      {/* label */}
      <span
        className="font-bold text-3xl group-hover:text-[#1A96D5] transition-colors duration-400"
        style={{ fontFamily: 'Roboto, sans-serif' }}
      >
        {name}
      </span>
    </div>
  );
}
