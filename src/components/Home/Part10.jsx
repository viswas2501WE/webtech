'use client';                 // ← this file runs on the client (uses hooks, <Link>)

import Link from 'next/link';
import Image from 'next/image';

export default function Part10() {
  /* ——— env helper ——— */
  const IMG = process.env.NEXT_PUBLIC_IMG_url || '';

  return (
    <div
      className="relative w-full min-h-[50vh] py-16 flex flex-col items-center justify-center
                 text-center overflow-hidden px-4 sm:px-6 lg:px-8"
      style={{ background: 'linear-gradient(90deg, #f85c70 0%, #ff8345 100%)' }}
    >
      {/* ——— floating decorative images ——— */}
      <Image
        src={`${IMG}/element_55.png`}
        alt="element 55"
        width={48}
        height={48}
        className="absolute top-[30%] left-[5%] w-8 sm:w-10 lg:w-12 xl:w-16"
      />
      <Image
        src={`${IMG}/element_56.png`}
        alt="element 56-1"
        width={48}
        height={48}
        className="absolute top-[5%] right-[5%] w-8 sm:w-10 lg:w-13 xl:w-16"
      />
      <Image
        src={`${IMG}/element_56.png`}
        alt="element 56-2"
        width={48}
        height={48}
        className="absolute bottom-[5%] left-[20%] w-8 sm:w-10 lg:w-13 xl:w-16"
      />
      <Image
        src={`${IMG}/element_58.png`}
        alt="element 58"
        fill                                  /* stretches to its own <div> bounds */
        sizes="25vw"
        className="absolute right-[40%] w-1/4 sm:w-[20%] lg:w-[15%] xl:w-[23%] object-contain"
      />
      <Image
        src={`${IMG}/element_57.png`}
        alt="element 57"
        width={48}
        height={48}
        className="absolute bottom-[10%] right-[5%] w-8 sm:w-10 lg:w-13 xl:w-16"
      />

      {/* ——— main copy & CTA buttons ——— */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2
          className="font-[600] text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-8"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          A Business Idea On Your Mind?
        </h2>

        {/* buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
          {/* Hire-Dev button */}
          <Link href="/hire-dev">
            <button
              className="relative font-[500] cursor-pointer overflow-hidden text-white w-full sm:min-w-50 h-13.5
                         px-8 rounded-[2rem] group flex justify-center items-center bg-[#F85C70]
                         transition-all duration-300"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              <span className="absolute inset-0 bg-[#FF3147] scale-y-0 origin-bottom
                               group-hover:scale-y-100 transition-transform duration-500 ease-in-out" />
              <span className="relative z-10 flex items-center py-2">
                {/* (inline SVG) */}
                <svg xmlns="http://www.w3.org/2000/svg" width="16.548" height="11.707" viewBox="0 0 16.548 11.707">
                  <path d="M0 0h16.548v11.707H0z" fill="none" />
                  <path fill="#fff" d="M1.963 0h12.517a1 1 0 0 1 .989 1.15L8.274 5.676.975 1.15A1 1 0 0 1 1.963 0Z" />
                  <path fill="#fff" d="m.002 2 .001 9.707 8.273-5.433L16.547 11.7V2L8.273 7.43Z" />
                </svg>
                <span className="px-2">Hire Developers</span>
              </span>
            </button>
          </Link>

          {/* Contact-Us button */}
          <Link href="/contact-us">
            <button
              className="relative cursor-pointer font-[500] overflow-hidden text-[#FF3147] w-full sm:min-w-50 h-13.5
                         px-8 rounded-[2rem] group flex justify-center items-center bg-white
                         transition-colors duration-500 ease-in-out hover:text-white"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              <span className="absolute inset-0 bg-[#FF3147] scale-y-0 origin-bottom
                               group-hover:scale-y-100 transition-transform duration-500 ease-in-out" />
              <span className="relative z-10 flex items-center py-2">
                <span className="px-2">Contact Us</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19.996"
                  height="16.635"
                  viewBox="0 0 19.996 16.635"
                  className="transition duration-500 group-hover:[&>path]:fill-white"
                >
                  <path
                    d="m12.455 0 7.221 7.221a1.1 1.1 0 0 1 0 1.553l-7.221 7.221a1.1 1.1 0 0 1-1.548 0l-.656-.654a1.084 1.084 0 0 1 0-1.537l4.259-4.246H1.08A1.109 1.109 0 0 1 0 9.176v-.924A1.068 1.068 0 0 1 1.08 7.128H14.464L10.205 2.883a1.108 1.108 0 0 1-.319-.783 1.086 1.086 0 0 1 .319-.774l.656-.656a1.1 1.1 0 0 1 1.548 0Z"
                    transform="translate(0 -.001)"
                    fill="#f85c70"
                  />
                </svg>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
