'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Screen3() {
  const base = process.env.NEXT_PUBLIC_IMG_url || '';

  const floatCRef = useRef(null);    // element_62 (right floatc)
  const moveXRef = useRef(null);     // element_62 (left movex)
  const floatCARef = useRef(null);   // element_63 (left floatca)

  useEffect(() => {
    let ctx;
    (async () => {
      const { gsap } = await import('gsap');

      ctx = gsap.context(() => {
        // movex (left-side subtle X translation)
        if (moveXRef.current) {
          gsap.to(moveXRef.current, {
            x: '5vh',
            duration: 7,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
          });
        }

        // floatc (complex motion + rotation)
        if (floatCRef.current) {
          gsap.to(floatCRef.current, {
            keyframes: [
              { x: '250%', y: '60%',  rotation: 35 },
              { x: '172%', y: '309%', rotation: 75 },
              { x: '-16%', y: '380%', rotation: 120 },
              { x: '-250%', y: '200%', rotation: 165 },
              { x: '0%',   y: '0%',   rotation: 360 },
            ],
            duration: 9,
            repeat: -1,
            ease: 'linear',
          });
        }

        // floatca (complex motion + rotation)
        if (floatCARef.current) {
          gsap.to(floatCARef.current, {
            keyframes: [
              { x: '100%', y: '40%',  rotation: 35 },
              { x: '45%',  y: '75%',  rotation: 75 },
              { x: '-16%', y: '160%', rotation: 120 },
              { x: '-80%', y: '60%',  rotation: 165 },
              { x: '0%',   y: '0%',   rotation: 360 },
            ],
            duration: 10,
            repeat: -1,
            ease: 'linear',
          });
        }
      });
    })();

    return () => ctx?.revert();
  }, []);

  return (
    <div className="absolute hidden lg:flex -z-50 inset-0 pointer-events-none overflow-hidden hue-rotate-220">
      {/* element_62: floatc (right) */}
      <Image
        ref={floatCRef}
        src={`${base}/element_62.png`}
        alt=""
        width={40}
        height={40}
        className="absolute top-[40%] right-[3%]"
      />

      {/* element_62: movex (left) */}
      <Image
        ref={moveXRef}
        src={`${base}/element_62.png`}
        alt=""
        width={30}
        height={30}
        className="absolute top-0 -left-[1%]"
      />

      {/* element_63: static top-right */}
      <Image
        src={`${base}/element_63.png`}
        alt=""
        width={100}
        height={100}
        className="absolute top-[6%] right-0"
      />

      {/* element_63: floatca (left) */}
      <Image
        ref={floatCARef}
        src={`${base}/element_63.png`}
        alt=""
        width={100}
        height={100}
        className="absolute top-[20%] left-[5%]"
      />
    </div>
  );
}
