'use client';                                   // ← required (hooks + framer‑motion run in the browser)

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

import CommonButton from '@/components/Common/CommonButton';
import Screen2 from '@/components/common/Animations/Screen2';

export default function Part2() {
  /* ---------- framer‑motion in‑view ---------- */
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  });

  /* ---------- image URLs ---------- */
  const heroImg = `${process.env.NEXT_PUBLIC_IMG_url}/mascot 2.png`;

  return (
    <div className="relative flex justify-center overflow-hidden items-center w-full lg:my-20 leading-7">
      <Screen2 />

      <div className="relative flex flex-col lg:flex-row justify-between items-center w-11/12 lg:w-[75.5%]">
        {/* left image */}
        <div className="hidden lg:flex w-[50%] mb-8 lg:mb-0">
          {/* next/image for external URL (needs width/height or fill) */}
          <Image
            src={heroImg}
            alt="Espire Vox About‑us banner"
            width={750}
            height={690}
            className="w-[89%] mx-auto lg:mx-0"
            priority
          />
        </div>

        {/* right content */}
        <motion.div
          ref={ref}
          style={{
            transform: isInView ? 'translateX(0)' : 'translateX(5vh)',
            opacity: isInView ? 1 : 0,
            transition: 'all 2s ease',
          }}
          className="w-full lg:w-[49%] px-2 lg:px-0"
        >
          <div
            className="font-[500] flex items-center text-[#242D65] text-base sm:text-lg"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            <h1 className="pr-2 sm:pr-5">About Us</h1>
            <span className="h-0.5 w-24 sm:w-36 bg-[#242D65] inline-block" />
          </div>

          <h2
            className="font-[600] leading-tight py-4 text-[4.5vh] sm:text-5xl lg:text-[230%]"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            WE CONSTRUCT COMPETITIVE BUSINESS SECTORS
          </h2>

          <div
            className="font-[500] text-[#5E5E5E] leading-7 text-md"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            At Espire Vox, we are a group of energetic and gifted experts driven by a solitary objective - to engage our clients with the most recent innovative progressions. With an establishment based on skill, honesty, and development, we stand as a solid accomplice for organizations looking for ahmedabad best IT company. At our center, we have practical experience in creating and bracing cutthroat business areas. Through strategic planning, innovative solutions, and a commitment to excellence, we empower organizations to thrive in dynamic and competitive environments. Our tailored approach ensures sustainable growth, resilience, and a distinct edge within the business landscape. Espirevox stands at the forefront of the IT company in India, Uk, USA, Canada, Australia.
            {/* full paragraph unchanged */}
          </div>

          <Link href="/about-us">
            <CommonButton className="cursor-pointer mt-8 lg:mt-11">
              ABOUT US
            </CommonButton>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
