'use client';                     // enable useState / useEffect / framer‑motion

import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';

export default function Part6Common({ title, count, paddingClass }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayCount, setDisplayCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  /* simple count‑up when element scrolls into view */
  useEffect(() => {
    if (!isInView) return;

    let current = 0;
    const duration = 3000;
    const increment = count / (duration / 16);
    const intId = setInterval(() => {
      current += increment;
      if (current >= count) {
        current = count;
        clearInterval(intId);
      }
      setDisplayCount(Math.ceil(current));
    }, 16);

    return () => clearInterval(intId);
  }, [isInView, count]);

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        className={`relative group w-64 h-30 p-6 rounded-sm overflow-hidden text-black shadow-md bg-white mx-3 ${paddingClass}`}
        style={{ fontFamily: 'Poppins, sans-serif' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* red sliding background */}
        <motion.div
          className="absolute top-0 left-0 h-full w-full bg-[#242D65] z-0 origin-left"
          style={{ originX: isHovered ? 0 : 1 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* content */}
        <div className="relative z-10">
          {/* corner triangle SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25.864"
            height="54.334"
            viewBox="0 0 25.864 54.334"
            className="absolute top-0 -right-6 group"
          >
            <path
              d="M0,0,24.432,32.45c2.755,3.66,1.414,8.48-3,10.767L0,54.334Z"
              transform="translate(25.864 54.334) rotate(180)"
              className="fill-current transition-colors duration-400 ease-in-out text-gray-400 group-hover:text-white"
            />
          </svg>

          <div className="p-1">
            <h4 className="text-lg font-[500] text-gray-800 transition-all duration-400 ease-in-out group-hover:text-white">
              {title}
            </h4>
            <div className="text-4xl font-[700] text-gray-900 transition-all duration-400 ease-in-out group-hover:text-white">
              {displayCount}+
            </div>
          </div>

          {/* animated chevron pattern */}
          <motion.div
            initial={{ x: -10, opacity: 0.35 }}
            whileHover={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute top-0 left-20 mt-3 w-[140px] h-[36px] group-hover:text-white"
          >
            {/* same SVG you supplied */}
            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="142.005"
                            height="35.236"
                            viewBox="0 0 142.005 35.236"
                            className="w-full h-full"
                        >
                            <g transform="translate(0.324 0.413)" opacity="1">
                                <path d="M1385.028,501.491l-3.78-4.816,9.725-12.39-9.725-12.389,3.78-4.816,13.5,17.205Z" transform="translate(-1381.248 -467.08)" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="0.51"></path>
                                <path d="M1383.218,484.286l-9.725-12.389,3.78-4.816,13.5,17.205-13.5,17.205-3.78-4.816Z" transform="translate(-1365.739 -467.08)" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="0.51" opacity="0.938"></path>
                                <path d="M1375.464,484.286l-9.725-12.389,3.78-4.816,13.5,17.205-13.5,17.205-3.78-4.816Z" transform="translate(-1350.23 -467.08)" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="0.51" opacity="0.875"></path>
                                <path d="M1367.709,484.286l-9.725-12.389,3.78-4.816,13.5,17.205-13.5,17.205-3.78-4.816Z" transform="translate(-1334.721 -467.08)" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="0.51" opacity="0.813"></path>
                                <path d="M1359.954,484.286,1350.23,471.9l3.78-4.816,13.5,17.205-13.5,17.205-3.78-4.816Z" transform="translate(-1319.212 -467.08)" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="0.51" opacity="0.75"></path>
                                <path d="M1352.2,484.286l-9.725-12.389,3.78-4.816,13.5,17.205-13.5,17.205-3.78-4.816Z" transform="translate(-1303.703 -467.08)" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="0.51" opacity="0.688"></path>
                                <path d="M1344.446,484.286l-9.725-12.389,3.78-4.816,13.5,17.205-13.5,17.205-3.78-4.816Z" transform="translate(-1288.193 -467.08)" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="0.51" opacity="0.625"></path>
                                <path d="M1336.691,484.286l-9.725-12.389,3.78-4.816,13.5,17.205-13.5,17.205-3.78-4.816Z" transform="translate(-1272.684 -467.08)" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="0.51" opacity="0.563"></path>
                                <path d="M1328.937,484.286l-9.725-12.389,3.78-4.816,13.5,17.205-13.5,17.205-3.78-4.816Z" transform="translate(-1257.175 -467.08)" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="0.51" opacity="0.5"></path>
                                <path d="M1321.182,484.286l-9.725-12.389,3.78-4.816,13.5,17.205-13.5,17.205-3.78-4.816Z" transform="translate(-1241.666 -467.08)" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="0.51" opacity="0.438"></path>
                                <path d="M1313.427,484.286,1303.7,471.9l3.78-4.816,13.5,17.205-13.5,17.205-3.78-4.816Z" transform="translate(-1226.157 -467.08)" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="0.51" opacity="0.375"></path>
                                <path d="M1305.673,484.286l-9.725-12.389,3.78-4.816,13.5,17.205-13.5,17.205-3.78-4.816Z" transform="translate(-1210.648 -467.08)" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="0.51" opacity="0.313"></path>
                                <path d="M1297.918,484.286l-9.725-12.389,3.78-4.816,13.5,17.205-13.5,17.205-3.78-4.816Z" transform="translate(-1195.139 -467.08)" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="0.51" opacity="0.25"></path>
                                <path d="M1290.164,484.286l-9.725-12.389,3.78-4.816,13.5,17.205-13.5,17.205-3.78-4.816Z" transform="translate(-1179.63 -467.08)" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="0.51" opacity="0.188"></path>
                                <path d="M1282.409,484.286l-9.725-12.389,3.78-4.816,13.5,17.205-13.5,17.205-3.78-4.816Z" transform="translate(-1164.121 -467.08)" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="0.51" opacity="0.125"></path>
                                <path d="M1274.654,484.286,1264.93,471.9l3.78-4.816,13.5,17.205-13.5,17.205-3.78-4.816Z" transform="translate(-1148.611 -467.08)" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="0.51" opacity="0.063"></path>
                                <path d="M1260.955,501.491l-3.78-4.816,9.725-12.39-9.725-12.389,3.78-4.816,13.5,17.205Z" transform="translate(-1133.103 -467.08)" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="0.51" opacity="0"></path>
                            </g>
                        </svg>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
