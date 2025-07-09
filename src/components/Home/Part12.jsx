/****************************************************************
 * app/components/Part12.jsx
 ***************************************************************/
'use client';                         // ← hooks + react-slick run in the browser

import { useRef } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

/*  react-slick touches `window`, so load it only on the client.
    The slick CSS files can be imported right here; App Router will
    include them only in the client bundle. */
const Slider = dynamic(() => import('react-slick'), { ssr: false });
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/* ────────────── helper to build logo list ────────────── */
const getTechLogos = () => {
  const BASE = process.env.NEXT_PUBLIC_IMG_url || ''; // ✅ Next.js env syntax

  return [
    { src: `${BASE}/React-1.png`,   class: 'h-14 flex justify-self-center' },
    { src: `${BASE}/vuetech-1.png`, class: 'h-14 flex justify-self-center' },
    { src: `${BASE}/Word-press-1.png`, class: 'h-16 flex justify-self-center' },
    { src: `${BASE}/Shopify-1.png`, class: 'h-12 flex justify-self-center' },
    { src: `${BASE}/laravel-1.png`, class: 'h-10 flex justify-self-center' },
    { src: `${BASE}/UI-UX-1.png`, class: 'h-10 flex justify-self-center' },
    { src: `${BASE}/Woo-commerce-1.png`, class: 'h-9 flex justify-self-center' },
    { src: `${BASE}/Anguler-1.png`, class: 'h-12 flex justify-self-center' },
    { src: `${BASE}/android-dp-1.png`, class: 'h-14 flex justify-self-center' },
    { src: `${BASE}/ios-2-1.png`, class: 'h-14 flex justify-self-center' },
    { src: `${BASE}/java-1.png`, class: 'h-14 flex justify-self-center' },
    { src: `${BASE}/Node-1.png`, class: 'h-12 flex justify-self-center' },
    { src: `${BASE}/python-1.png`, class: 'h-14 flex justify-self-center' },
  ];
};

export default function Part12() {
  const sliderRef = useRef(null);
  const techLogos = getTechLogos();

  const settings = {
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768,  settings: { slidesToShow: 3 } },
      { breakpoint: 480,  settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section
      className="min-h-[41vh] py-12 overflow-hidden"
      style={{ background: 'linear-gradient(90deg,#f85c70 0%,#ff8345 100%)' }}
    >
      <h3
        className="text-center font-[500] text-white text-[3vh] sm:text-[4vh] md:text-[2.5vh]"
        style={{ fontFamily: 'Roboto, sans-serif' }}
      >
        OUR SKILL-SET
      </h3>
      <h2
        className="text-center font-[600] text-white text-[5vh] sm:text-[6.5vh] md:text-[6vh]"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        Technologies We Work With
      </h2>

      <div className="w-[75%] mx-[12.5%] my-10">
        <Slider ref={sliderRef} {...settings}>
          {techLogos.map((logo, idx) => (
            <div
              key={idx}
              className="flex justify-center items-center min-h-30"
              onClick={() => sliderRef.current?.slickGoTo(idx)}
            >
              {/* use next/image for optimisation */}
              <div className='flex justify-center items-center min-h-25'>

              <Image
                src={logo.src}
                alt={`tech-${idx}`}
                width={140}
                height={56}
                className={`object-contain flex justify-self-center px-4 max-h-20 w-45 ${logo.class}`}
              />
              {/* simple divider */}
              <span className="text-white select-none">||</span>
            </div>
                </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
