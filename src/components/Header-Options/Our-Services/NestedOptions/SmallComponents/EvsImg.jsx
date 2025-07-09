'use client';

import Image from 'next/image';
import React from 'react';

const EvsImg = ({ src, alt = "image", showPattern = true, showRedBg = true }) => {
  return (
    <div className="relative">
      <div className="lg:relative lg:-top-[6vh] flex lg:mb-[7vh] lg:-right-[10vh]">
        <div className="w-full px-[0%] md:px-[4%] relative max-w-sm md:max-w-xl mx-auto mb-[6vh]">
          {showRedBg && (
            <div className="absolute top-0 right-0 w-[75%] h-[80%] bg-[#FF3147] z-0" />
          )}

          <div
            className="relative z-10 md:top-10 md:right-5 overflow-hidden"
            style={{
              clipPath: `polygon(20% 0%,100% 0%,100% 85%,80% 100%,0% 100%,0% 15%)`,
            }}
          >
            {/* MAIN IMAGE (external src from env) */}
            <Image
              src={src}
              alt={alt}
              width={800}
              height={500}
              className="md:w-full w-[93%] mt-[7%] md:mt-0 h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvsImg;
