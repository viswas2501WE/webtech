'use client';                                   // ✔ framer‑motion + hooks

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import Part6Common from '@/components/Home/Part6/Part6Common';

export default function Part6() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  /* WordPress folder defined in .env.local */
  const base = process.env.NEXT_PUBLIC_IMG_url; // 2024/02

  return (
    <div
      className="relative w-full min-h-[53vh] flex flex-col items-center justify-center p-4 overflow-hidden"
      style={{ background: 'linear-gradient(90deg, #f85c70 0%, #ff8345 100%)' }}
    >
      {/* floating elements — keep <img> because they’re lightweight PNGs */}
      <img src={`${base}/element_55.png`} className="absolute top-[50%] left-[5%] md:left-[8%] w-8 md:w-12" alt="" />
      <img src={`${base}/element_56.png`} className="absolute top-[5%]   right-[10%] md:right-[36%] w-9 md:w-13" alt="" />
      <img src={`${base}/element_56.png`} className="absolute bottom-[5%] left-[10%] md:left-[31%] w-9 md:w-13" alt="" />
      <img src={`${base}/element_58.png`} className="absolute top-[10%]  right-[5%]  md:right-[40%] w-[20%] md:w-[27%]" alt="" />
      <img src={`${base}/element_57.png`} className="absolute bottom-[10%] right-[5%] md:right-[13%] w-9 md:w-13" alt="" />

      {/* -------------- counters -------------- */}
      <div className="flex flex-wrap justify-center md:py-0 py-5 items-center gap-y-8 gap-x-8 md:gap-0 z-10">
        {[
          { title: 'Projects',      count: 400, delay: 0.2, extra: 'md:mt-8' },
          { title: 'Happy Clients', count: 150, delay: 0.4, extra: 'md:mb-8' },
          { title: 'Team Members',  count: 35,  delay: 0.6, extra: 'md:mt-8' },
          { title: 'Experience',    count: 10,  delay: 0.8, extra: 'md:mb-8' },
        ].map(({ title, count, delay, extra }) => (
          <motion.div
            key={title}
            ref={ref}
            className={extra}
            style={{
              transform: isInView ? 'translateY(0)' : 'translateY(5vh)',
              opacity: isInView ? 1 : 0,
              transition: `all 1s ease ${delay}s`,
            }}
          >
            <Part6Common title={title} count={count} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
