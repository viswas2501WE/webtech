'use client'; // Required because of Framer Motion and useRef

import { Suspense, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link'; // ✅ replaces NavLink
import Part6Common from '@/components/Home/Part6/Part6Common'; // ✅ Adjust if your path differs

const AEV2 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div
      className="h-full py-[4vw] flex flex-col lg:flex-row items-center justify-between px-4 xl:px-[12vw] text-white"
      style={{
        background: 'linear-gradient(90deg, #1A96D5 0%, #242D65 100%)',
      }}
    >
      {/* ---------- LEFT SIDE ---------- */}
      <div className="w-full lg:w-[50%] px-[0.7vw] ">
        <h1
          className="font-[600] text-[4vh] md:text-[6vh]"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Worldwide Trust and Professional Dedication
        </h1>
        <div
          className="font-[400] leading-7 py-[3vh] lg:py-[2vw]"
          style={{ fontFamily: 'Roboto, sans-serif' }}
        >
          Our organization holds the distinction of being perceived as a devoted and proficient association, recognizing our greatness and development in our field. Top IT Companies In Ahmedabad significantly contribute to the city's economic and industrial landscape. We stand for quality, deliver before time and always strive to exceed expectations from our clients. We are available 24X7 to solve any queries, fix issues or get a quote for your next dream project!
        </div>

        {/* ✅ Replaced NavLink with next/link */}
        <Link href="/contact-us">
          <button
            style={{ fontFamily: 'Roboto, sans-serif' }}
            className="relative font-[500] cursor-pointer overflow-hidden text-[#1A96D5] transition-colors hover:text-white duration-500 ease-in-out w-50 h-13.5 px-8 rounded-[2rem] group flex justify-center items-center bg-white z-0"
          >
            {/* Fill animation */}
            <div className="absolute inset-0 bg-[#1A96D5] transform scale-y-0 origin-bottom transition-transform duration-500 ease-in-out group-hover:scale-y-100 z-0" />

            {/* Content inside button */}
            <div className="flex items-center justify-center relative z-10 py-2">
              <span className="px-2">Contact Us</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19.996"
                height="16.635"
                viewBox="0 0 19.996 16.635"
                className="transition duration-500 group-hover:[&>g>g>path]:fill-white"
              >
                <g data-name="right-arrow (8)" transform="translate(0 -41.346)">
                  <g data-name="Group 146" transform="translate(0 41.346)">
                    <path
                      data-name="Path 504"
                      d="M19.676,48.887l-7.221-7.221a1.1,1.1,0,0,0-1.548,0l-.656.656a1.086,1.086,0,0,0-.319.774,1.108,1.108,0,0,0,.319.783L14.464,48.1H1.08A1.068,1.068,0,0,0,0,49.176V50.1a1.109,1.109,0,0,0,1.08,1.124H14.512l-4.26,4.246a1.084,1.084,0,0,0,0,1.537l.656.654a1.1,1.1,0,0,0,1.548,0l7.221-7.221a1.1,1.1,0,0,0,0-1.553Z"
                      transform="translate(0 -41.346)"
                      fill="#1A96D5"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </button>
        </Link>
      </div>

      {/* ---------- RIGHT SIDE ---------- */}
      <div className="w-full lg:w-[50%]">
        <div className="flex flex-wrap justify-center md:py-0 py-10 items-center gap-y-8 gap-x-8 md:gap-0 z-10">
          {/* Projects */}
          <motion.div
            ref={ref}
            style={{
              transform: isInView ? 'translateY(0)' : 'translateY(5vh)',
              opacity: isInView ? 1 : 0,
              transition: 'all 1s ease',
              transitionDelay: '0.3s',
            }}
            className="md:mt-8"
          >
            <Suspense>

            <Part6Common title="Projects" count={400} />
            </Suspense>
          </motion.div>

          {/* Happy Clients */}
          <motion.div
            ref={ref}
            style={{
              transform: isInView ? 'translateY(0)' : 'translateY(5vh)',
              opacity: isInView ? 1 : 0,
              transition: 'all 1s ease',
              transitionDelay: '0.6s',
            }}
            className="md:mb-8"
          >
            <Suspense>

            <Part6Common title="Happy Clients" count={150} />
            </Suspense>
          </motion.div>

          {/* Team Members */}
          <motion.div
            ref={ref}
            style={{
              transform: isInView ? 'translateY(0)' : 'translateY(5vh)',
              opacity: isInView ? 1 : 0,
              transition: 'all 1s ease',
              transitionDelay: '0.9s',
            }}
            className="md:mt-8"
          ><Suspense>

            <Part6Common title="Team Members" count={35} />
          </Suspense>
          </motion.div>

          {/* Experience */}
          <motion.div
            ref={ref}
            style={{
              transform: isInView ? 'translateY(0)' : 'translateY(5vh)',
              opacity: isInView ? 1 : 0,
              transition: 'all 1s ease',
              transitionDelay: '1.2s',
            }}
            className="md:mb-8"
          ><Suspense>
            
            <Part6Common title="Experience" count={10} />
          </Suspense>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AEV2;
