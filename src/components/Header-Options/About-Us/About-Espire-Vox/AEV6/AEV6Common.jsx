'use client';    
import { useState, useEffect } from 'react';                            

export default function AEV6Common({ testimonial }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null; // skip rendering on server

  return (
    <div
      className="bg-white p-[4vh] md:p-[6vh] rounded-xl flex flex-col h-full"
      style={{ fontFamily: 'Roboto, sans-serif' }}
    >
      {/* testimonial text */}
      <div className="text-base md:text-lg leading-relaxed mb-6 font-[600] text-gray-600 text-left">
        {testimonial.review}
      </div>

      <div className="flex items-center justify-start mb-4">
        {/* author photo */}
        {testimonial.image && (
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-[14vh] h-[14vh] rounded-full object-cover flex justify-center"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                'https://placehold.co/100x100/CCCCCC/000000?text=User';
            }}
          />
        )}

        {/* quote icon + author name/title */}
        <div className="flex-col justify-start ml-[5vh]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="63.999"
            height="45.176"
            viewBox="0 0 63.999 45.176"
          >
            <g transform="translate(-0.001 -9.412)">
              <path
                d="M50.629,26.226c-.129-1.393-.03-5.182,3.6-10.449a1,1,0,0,0-.116-1.274c-1.479-1.479-2.4-2.413-3.038-3.066-.845-.861-1.23-1.254-1.795-1.766a1,1,0,0,0-1.328-.013,38.326,38.326,0,0,0-12.334,30.81c.6,8.182,6.563,14.12,14.189,14.12a14.193,14.193,0,0,0,.823-28.362Z"
                fill="#cbe5fc"
              />
              <path
                d="M15.114,26.226c-.13-1.39-.034-5.175,3.6-10.449A1,1,0,0,0,18.6,14.5c-1.477-1.477-2.392-2.409-3.033-3.062-.848-.863-1.234-1.257-1.8-1.77a1,1,0,0,0-1.328-.014A38.332,38.332,0,0,0,.1,40.468C.7,48.65,6.665,54.588,14.291,54.588a14.193,14.193,0,0,0,.822-28.362Z"
                fill="#cbe5fc"
              />
            </g>
          </svg>

          <div
            className="text-[#FF3174] text-lg md:text-xl font-[600] pt-[2vh]"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {testimonial.name}
          </div>
          <div className="text-gray-600 text-sm md:text-base font-[400]">
            {testimonial.title}
          </div>
        </div>
      </div>
    </div>
  );
}