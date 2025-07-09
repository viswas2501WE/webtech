'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import Part8Common from './Part8Common';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Part8({ services = [], title1slide, title2slide }) {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute md:bottom-[120%] bottom-[130%] z-20 group
                 rounded-md bg-gradient-to-r from-white to-white
                 hover:from-[#f85c70] hover:to-[#ff8345] p-[2px]
                 transition-colors duration-100"
      style={{
        width: '3.25vw',
        height: '3.25vw',
        minWidth: 40,
        minHeight: 40,
        maxWidth: 52,
        maxHeight: 52,
      }}
    >
      <button
        onClick={onClick}
        className="w-full h-full flex items-center justify-center rounded-sm
                   bg-[#0f285f] text-white bg-gradient-to-r
                   group-hover:from-[#f85c70] group-hover:to-[#ff8345]
                   transition-colors duration-300 cursor-pointer"
      >
        <ChevronLeft
          style={{
            fontSize: '1.625vw',
            minWidth: 20,
            minHeight: 20,
            maxWidth: 26,
            maxHeight: 26,
          }}
        />
      </button>
    </div>
  );

  const NextArrow = ({ onClick }) => (
    <div
      className="absolute md:bottom-[120%] bottom-[130%] right-2 z-20 group
                 rounded-md bg-gradient-to-r from-white to-white
                 hover:from-[#f85c70] hover:to-[#ff8345] p-[2px]
                 transition-colors duration-100"
      style={{
        width: '3.25vw',
        height: '3.25vw',
        minWidth: 40,
        minHeight: 40,
        maxWidth: 52,
        maxHeight: 52,
      }}
    >
      <button
        onClick={onClick}
        className="w-full h-full flex items-center justify-center rounded-sm
                   bg-[#0f285f] text-white bg-gradient-to-r
                   group-hover:from-[#f85c70] group-hover:to-[#ff8345]
                   transition-colors duration-300 cursor-pointer"
      >
        <ChevronRight
          style={{
            fontSize: '1.625vw',
            minWidth: 20,
            minHeight: 20,
            maxWidth: 26,
            maxHeight: 26,
          }}
        />
      </button>
    </div>
  );

  /* ───────────── slick settings ───────────── */
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1350, settings: { slidesToShow: 2 } },
      { breakpoint: 900, settings: { slidesToShow: 1 } },
    ],
  };

  /* ───────────── UI ───────────── */
  return (
    <div className="relative w-full overflow-hidden z-40">
      {/* hero backdrop -- using Next <Image> for optimisation */}
      <Image
        src="https://espirevox.com/wp-content/uploads/2024/02/bg_3.jpg"
        alt=""
        fill           /* expands to cover the parent */
        priority       /* loads early */
        className="object-cover z-0"
        sizes="100vw"
      />

      <div className="relative" style={{ backgroundColor: 'rgba(15,40,95,0.8)' }}>
        <motion.div
          ref={ref}
          className="relative z-10 py-20"
          style={{
            transform: isInView ? 'translateY(0)' : 'translateY(5vh)',
            opacity: isInView ? 1 : 0,
            transition: 'all 2s ease',
          }}
        >
          {/* headings */}
          <div className="text-center">
            <div
              className="text-[#FF8345] font-[500] flex justify-center"
              style={{
                fontFamily: 'Roboto, sans-serif',
                fontSize: 'clamp(1rem, 2.5vw, 2rem)',
              }}
            >
              {title1slide}
            </div>
            <div
              className="font-[600] text-white flex py-2 justify-center"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'clamp(1.6rem, 4vw, 4rem)',
              }}
            >
              {title2slide}
            </div>
          </div>

          {/* slider */}
          <div className="w-[85%] mx-auto mt-12 relative pb-5">
            <Slider {...settings}>
              {services.map((svc) => { // Removed idx as it's not needed for the div key anymore
                const { key, ...restOfSvcProps } = svc; // Destructure 'key' and rest of the props

                return (
                  <div key={key} className="px-2"> {/* Use the 'key' from the object here */}
                    <Part8Common {...restOfSvcProps} /> {/* Spread the rest of the props */}
                  </div>
                );
              })}
            </Slider>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
