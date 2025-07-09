'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// You can load env variables like this (if needed for future image usage)
const BASE = process.env.NEXT_PUBLIC_IMG_url;
const BASE1 = process.env.NEXT_PUBLIC_IMG_url1;
const BASE2 = process.env.NEXT_PUBLIC_IMG_url2;
const BASE3 = process.env.NEXT_PUBLIC_IMG_url3;
const BASE4 = process.env.NEXT_PUBLIC_IMG_url4;

const C2Common = ({ title1 = 'Default Title 1', title2 = 'Default Title 2', bulletPoints = [] }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="flex flex-col p-4"
      data-animate-on-mobile
    >
      <div style={{ fontFamily: 'Roboto, sans-serif' }}>
        <h1 className="text-lg font-[500] text-[#1A96D5]">{title1}</h1>
        <h2
          className="text-5xl font-[600] pt-[2%] pb-[5%]"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {title2}
        </h2>

        {/* Bullet Points Section */}
        <div className="space-y-4">
          {bulletPoints.length > 0 ? (
            bulletPoints.map((point) => (
              <div key={point.id} className="flex items-start">
                <div className="flex justify-center items-center mr-[1.5%] h-5 w-5 md:h-6 md:w-6 flex-shrink-0 relative">
                  <span className="absolute h-3.5 w-3.5 bg-[#1A96D5]"></span>
                  <span className="absolute h-2.5 w-2.5 bg-white"></span>
                  <span className="absolute h-1.5 w-1.5 bg-[#1A96D5]"></span>
                </div>

                <p>{point.text}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 italic">No bullet points to display.</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default C2Common;
