'use client';

import { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

export default function Screen1() {
  const base = process.env.NEXT_PUBLIC_IMG_url || '';

  /* refs grouped by animation --------------------------------------- */
  const scaleRefs  = useRef([]); // element_1.png → scale 1↔1.7 (12 s)
  const scaleARefs = useRef([]); // element_9/10.png → scale 1↔1.5 (10 s)
  const spinRef    = useRef(null); // element_4.png → 360° spin

  /* initialise GSAP tweens once per mount --------------------------- */
  useLayoutEffect(() => {
    /* scale 1 ↔ 1.7, 12 s */
    if (scaleRefs.current.length) {
      gsap.to(scaleRefs.current, {
        scale: 1.7,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        transformOrigin: 'left center',
      });
    }

    /* scale 1 ↔ 1.5, 10 s */
    if (scaleARefs.current.length) {
      gsap.to(scaleARefs.current, {
        scale: 1.5,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        transformOrigin: 'left center',
      });
    }

    /* constant 360° rotation, 10 s */
    if (spinRef.current) {
      gsap.to(spinRef.current, {
        rotation: 360,
        duration: 10,
        repeat: -1,
        ease: 'linear',
        transformOrigin: '40% 50%',
      });
    }
  }, []);

  /* helpers to place refs ------------------------------------------ */
  const setScaleRef = (i) => (el) => (scaleRefs.current[i] = el);
  const setScaleARef = (i) => (el) => (scaleARefs.current[i] = el);

  /* ---------------------------------------------------------------- */
  return (
    <div className="absolute hidden lg:flex -z-50 inset-0 pointer-events-none hue-rotate-220">
      {/* left cluster */}
      <Image
        ref={setScaleRef(0)}
        src={`${base}/element_1.png`}
        alt=""
        width={150}
        height={150}
        className="absolute top-[25%] left-[5%]"
        priority
      />
      <Image
        src={`${base}/element_2.png`}
        alt=""
        width={200}
        height={200}
        className="absolute top-[57%] left-[1%]"
      />

      {/* centre rotating ring */}
      <Image
        ref={spinRef}
        src={`${base}/element_4.png`}
        alt=""
        width={80}
        height={80}
        className="absolute top-[23%] left-[32%]"
      />
      <Image
        src={`${base}/element_5.png`}
        alt=""
        width={190}
        height={190}
        className="absolute top-[19%] left-[51%]"
      />

      {/* right cluster */}
      <Image
        ref={setScaleARef(0)}
        src={`${base}/element_9.png`}
        alt=""
        width={120}
        height={120}
        className="absolute top-[22%] right-[11%]"
      />
      <Image
        ref={setScaleARef(1)}
        src={`${base}/element_10.png`}
        alt=""
        width={180}
        height={180}
        className="absolute top-[17%] right-[2%]"
      />
      <Image
        src={`${base}/element_11.png`}
        alt=""
        width={120}
        height={120}
        className="absolute bottom-[25%] right-[5%]"
      />
    </div>
  );
}
