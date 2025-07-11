'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Screen2() {
  const base = process.env.NEXT_PUBLIC_IMG_url || '';

  /* refs grouped by animation type --------------------------------- */
  const scaleRef       = useRef(null); // element_3.png (scale 1‑1.7)
  const moveXScaleRef  = useRef(null); // element_17.png (x+scale)
  const moveYRef       = useRef(null); // element_16.png (y)
  const spinRef        = useRef(null); // element_7.png (rotate)
  const floatARef      = useRef(null); // element_19.png (complex float a)
  const floatBRef      = useRef(null); // element_18.png (complex float b)

  useEffect(() => {
    let ctx;
    (async () => {
      const { gsap } = await import('gsap');
      /* set up an isolated GSAP context so everything cleans up */
      ctx = gsap.context(() => {
        /* ----- scale 1 ↔ 1.7 (12 s) ----- */
        if (scaleRef.current) {
          gsap.to(scaleRef.current, {
            scale: 1.7,
            duration: 12,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
            transformOrigin: 'left center',
          });
        }

        /* ----- translateX + scale (7 s) ----- */
        if (moveXScaleRef.current) {
          gsap.to(moveXScaleRef.current, {
            x: '5vh',
            scale: 1.2,
            duration: 7,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
          });
        }

        /* ----- translateY (8 s) ----- */
        if (moveYRef.current) {
          gsap.to(moveYRef.current, {
            y: '7vh',
            duration: 8,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
          });
        }

        /* ----- constant spin (10 s) ----- */
        if (spinRef.current) {
          gsap.to(spinRef.current, {
            rotation: 360,
            duration: 10,
            repeat: -1,
            ease: 'linear',
            transformOrigin: '40% 50%',
          });
        }

        /* ----- complex float A (8 s) ----- */
        if (floatARef.current) {
          gsap.to(floatARef.current, {
            keyframes: [
              { x: '250%', y: '60%',  rotation: 35 },
              { x: '172%', y: '309%', rotation: 75 },
              { x: '-16%', y: '380%', rotation: 120 },
              { x: '-250%', y: '200%', rotation: 165 },
              { x: '0%',   y: '0%',   rotation: 360 },
            ],
            duration: 8,
            repeat: -1,
            ease: 'linear',
          });
        }

        /* ----- complex float B (7 s) ----- */
        if (floatBRef.current) {
          gsap.to(floatBRef.current, {
            keyframes: [
              { x: '100%', y: '20%',  rotation: 35 },
              { x: '45%',  y: '70%',  rotation: 75 },
              { x: '-4%',  y: '150%', rotation: 120 },
              { x: '-60%', y: '60%',  rotation: 165 },
              { x: '0%',   y: '0%',   rotation: 360 },
            ],
            duration: 7,
            repeat: -1,
            ease: 'linear',
          });
        }
      });
    })();

    /* cleanup on unmount */
    return () => ctx?.revert();
  }, []);

  /* ----------------------------------------------------------------- */
  return (
    <div className="absolute hidden lg:flex -z-50 inset-0 pointer-events-none hue-rotate-220">
      {/* element_3: scaleaa */}
      <Image
        ref={scaleRef}
        src={`${base}/element_3.png`}
        alt=""
        width={100}
        height={100}
        className="absolute top-[0%] left-[5%]"
      />

      {/* element_17: moveXScale */}
      <Image
        ref={moveXScaleRef}
        src={`${base}/element_17.png`}
        alt=""
        width={80}
        height={80}
        className="absolute top-[2%] left-[35%]"
      />

      {/* element_16: movey */}
      <Image
        ref={moveYRef}
        src={`${base}/element_16.png`}
        alt=""
        width={80}
        height={80}
        className="absolute bottom-[15%] left-[7%]"
      />

      {/* element_7: rotateSpin */}
      <Image
        ref={spinRef}
        src={`${base}/element_7.png`}
        alt=""
        width={80}
        height={80}
        className="absolute top-[8%] left-[38%]"
      />

      {/* element_15: static */}
      <Image
        src={`${base}/element_15.png`}
        alt=""
        width={600}
        height={600}
        className="absolute top-[0%] -left-[13%]"
      />

      {/* element_19: floata */}
      <Image
        ref={floatARef}
        src={`${base}/element_19.png`}
        alt=""
        width={30}
        height={30}
        className="absolute top-[30%] left-[43%]"
      />

      {/* element_12: static */}
      <Image
        src={`${base}/element_12.png`}
        alt=""
        width={170}
        height={170}
        className="absolute top-[3%] right-[5%]"
      />

      {/* element_18: floatb */}
      <Image
        ref={floatBRef}
        src={`${base}/element_18.png`}
        alt=""
        width={70}
        height={70}
        className="absolute top-[45%] left-[42%]"
      />
    </div>
  );
}
