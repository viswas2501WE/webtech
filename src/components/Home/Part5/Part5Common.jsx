'use client';                                   
import React from "react";

const Part5Common = ({ icon, title, description }) => {
    return (
        <div className="relative group w-full h-full p-4 sm:p-6 bg-white rounded shadow-lg hover:shadow-lg transition-shadow duration-300 cursor-pointer flex flex-col  hue-rotate-220">
            {/* hover animation corners - NO CHANGES */}
            <span className="absolute w-6 h-6 sm:w-8 sm:h-8 border-t-4 border-l-4 translate-x-4 translate-y-4
                group-hover:translate-x-0 group-hover:translate-y-0 border-red-500 opacity-0 transform
                scale-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-400
                ease-in-out top-0 left-0"
            />
            <span className="absolute w-6 h-6 sm:w-8 sm:h-8 border-t-4 border-r-4 -translate-x-4 translate-y-4
                group-hover:translate-x-0 group-hover:translate-y-0 border-red-500 opacity-0 transform
                scale-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-400
                ease-in-out top-0 right-0"
            />
            <span className="absolute w-6 h-6 sm:w-8 sm:h-8 border-b-4 border-l-4 translate-x-4 -translate-y-4
                group-hover:translate-x-0 group-hover:translate-y-0 border-red-500 opacity-0 transform
                scale-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-400
                ease-in-out bottom-0 left-0"
            />
            <span className="absolute w-6 h-6 sm:w-8 sm:h-8 border-b-4 border-r-4 -translate-x-4 -translate-y-4
                group-hover:translate-x-0 group-hover:translate-y-0 border-red-500 opacity-0 transform
                scale-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-400
                ease-in-out bottom-0 right-0"
            />

            {/* Icon */}
            <div className="text-red-400 mb-2 sm:mb-4 text-5xl sm:text-6xl md:text-[70px] flex-shrink-0">
                {React.cloneElement(icon, { size: undefined })}
            </div>

            {/* Title */}
            <h3
                className="text-xl sm:text-2xl text-gray-900 mb-2 font-[600] hover:text-[#f85c70] transition-all duration-200 ease-in flex-shrink-0"
                style={{ fontFamily: "Poppins, sans-serif" }}
            >
                {title}
            </h3>

            {/* Description */}
            <div
                className="text-sm sm:text-base text-gray-600 leading-relaxed line-clamp-3 font-[400] flex-grow"
                style={{ fontFamily: "Roboto, sans-serif" }}
            >
                {description}
            </div>
        </div>
    );
};

export default Part5Common;
