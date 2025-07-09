'use client';

import React from 'react';
import Link from 'next/link';
import CommonButton from '@/components/Common/CommonButton';

const EVS1 = ({EVS1Title1, EVS1Title2, EVS1Para1, EVS1Para2, EVS1Img}) => {
  const clipPathId = 'myClipPath';

  const svgWidth = 578.969;
  const svgHeight = 635;
  const svgViewBox = `0 0 ${svgWidth} ${svgHeight}`;

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 sm:px-6 md:px-8 lg:px-[10%] py-8 md:py-12 lg:py-16" style={{ fontFamily: 'Roboto, sans-serif' }}>
      {/* Text Section */}
      <div className="mb-8 lg:mb-0 w-full lg:w-1/2 px-4 sm:px-6 lg:pl-[5%] text-left lg:text-left">
        <h1 className="text-base sm:text-lg md:text-xl font-[500] text-[#1A96D5] mb-2 sm:mb-4">
          {EVS1Title1}
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-[600] text-gray-900 mb-4 sm:mb-6 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {EVS1Title2}
        </h1>
        <div className="text-sm sm:text-base text-gray-600 leading-relaxed font-[400] mb-6 sm:mb-8 max-w-full lg:max-w-3xl mx-auto lg:mx-0">
          {EVS1Para1}
        </div>
        <div className="text-sm sm:text-base text-gray-600 leading-relaxed font-[400] mb-6 sm:mb-8 max-w-full lg:max-w-3xl mx-auto lg:mx-0">
          {EVS1Para2}
        </div>
        <Link href="/contact-us">
          <CommonButton>CONTACT US</CommonButton>
        </Link>
      </div>

      {/* SVG Section */}
      <div className="w-full lg:w-[45%] flex justify-center items-center mt-8 lg:mt-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="auto"
          viewBox={svgViewBox}
          className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-full hue-rotate-220"
        >
          <defs>
            <clipPath id={clipPathId}>
              <path
                d="M608.276,1908.78a50.3,50.3,0,0,1,31.089,64.03l-132.093,380.3a50.376,50.376,0,0,1-95.2-32.98l132.093-380.3A50.393,50.393,0,0,1,608.276,1908.78Zm188.248,46.57a50.306,50.306,0,0,1,31.089,64.03L695.52,2399.69a50.378,50.378,0,0,1-95.2-32.99l132.093-380.3A50.41,50.41,0,0,1,796.524,1955.35Zm-111.337,13.6c26.289,9.11,41.208,34.77,32.089,61.03L571.42,2449.91a50.378,50.378,0,0,1-95.2-32.99L622.075,1997C631.194,1970.74,658.9,1959.84,685.187,1968.95Zm194.429,54.25a50.3,50.3,0,0,1,31.089,64.03L764.85,2507.15a50.376,50.376,0,0,1-95.2-32.98L815.5,2054.25A50.393,50.393,0,0,1,879.616,2023.2Zm-378.4-23.68a16.763,16.763,0,0,1,10.363,21.34L412.5,2306.09a16.792,16.792,0,0,1-31.734-10.99l99.072-285.23A16.8,16.8,0,0,1,501.211,1999.52Zm412.262,143.71a16.761,16.761,0,0,1,10.363,21.34L824.765,2449.8a16.792,16.792,0,0,1-31.734-10.99L892.1,2153.58A16.8,16.8,0,0,1,913.473,2143.23Zm11.013,55.3a8.381,8.381,0,0,1,5.181,10.67l-77.055,221.85a8.4,8.4,0,0,1-15.867-5.5L913.8,2203.7A8.4,8.4,0,0,1,924.486,2198.53Zm-1.439,52.76a4.189,4.189,0,0,1,2.591,5.33L873.35,2407.16a4.2,4.2,0,0,1-7.933-2.75l52.288-150.53A4.2,4.2,0,0,1,923.047,2251.29Zm22.115-27.85a4.2,4.2,0,0,1,2.591,5.34l-52.288,150.54a4.2,4.2,0,0,1-7.933-2.75l52.287-150.54A4.2,4.2,0,0,1,945.162,2223.44ZM457.207,2036.65a8.377,8.377,0,0,1,5.181,10.67l-77.055,221.85a8.4,8.4,0,0,1-15.867-5.5l77.056-221.85A8.391,8.391,0,0,1,457.207,2036.65Zm-23.33,18.54a4.2,4.2,0,0,1,2.591,5.34L384.18,2211.07a4.2,4.2,0,0,1-7.933-2.75l52.288-150.54A4.2,4.2,0,0,1,433.877,2055.19Z"
                transform="translate(-369 -1906)"
              />
            </clipPath>
          </defs>

          <rect
            x={0}
            y={0}
            width={svgWidth}
            height={svgHeight}
            fill="#F40D74"
            style={{ clipPath: `url(#${clipPathId})` }}
          />

          <image
            href={EVS1Img}
            x={0}
            y={0}
            width={svgWidth}
            height={svgHeight}
            style={{ clipPath: `url(#${clipPathId})` }}
          />
        </svg>
      </div>
    </div>
  );
};

export default EVS1;
