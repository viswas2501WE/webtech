'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Screen1 from '@/components/Common/Animations/Scree1';
import CommonButton from '@/components/Common/CommonButton';

const bulletPointsData = [
  {
    id: 1,
    text: 'Top IT Companies In Ahmedabad drive the economic and industrial growth of the city, establishing it as a major business hub in India. A hearty site fills in as the web-online character, opening ways to endless learning opportunities. To flourish in the computerized domain, a site should epitomize contemporariness, seriousness, and adjust intimately with its planned reason.',
  },
  {
    id: 2,
    text: 'Espire Vox remains as a quickly growing IT organization, devoted to conveying worldwide electronic turn of events and programming arrangements. Including gifted programming experts with profound area mastery, the organization endeavors to impart its insight through inventive arrangements and committed administrations.',
  },
  {
    id: 3,
    text: 'Throughout recent years, Espire Vox has successfully created and sent off various sites for clients around the world. Ahmedabad is home to some of the top IT companies where EspireVox hires developers to drive technological innovation.',
  },
  { id: 4, text: 'Get a FREE Quotation 5 Days a Week!' },
];

/* ------------------------------------------------------------------ */

export default function AboutUsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div className="relative overflow-hidden">
      <Screen1 />

      <div className="flex flex-col lg:flex-row px-4 md:px-8 lg:px-[13vw] justify-between py-8 md:py-12 lg:py-[7vw] gap-8 lg:gap-0"
           style={{ fontFamily: 'Roboto, sans-serif' }}>
        {/* ---------- LEFT COLUMN ---------- */}
        <div className="w-full lg:w-[37.3%]">
          <h1 className="font-[500] text-[#1A96D5] text-base md:text-lg">ABOUT US</h1>
          <h1 className="font-[600] text-[4vh] md:text-[4.5vh] lg:text-[5.5vh] leading-tight mt-2"
              style={{ fontFamily: 'Poppins, sans-serif' }}>
            We turn your ideas into reality!
          </h1>

          {/* Bullet points */}
          <div className="mt-6">
            {bulletPointsData.map(item => (
              <div key={item.id} className="flex items-start py-[0.6vw] font-[400] text-sm md:text-base">
                <div className="flex justify-center items-center h-5 w-5 md:h-6 md:w-6 flex-shrink-0 relative">
                  <span className="absolute h-3.5 w-3.5 bg-[#1A96D5]" />
                  <span className="absolute h-2.5 w-2.5 bg-white" />
                  <span className="absolute h-1.5 w-1.5 bg-[#1A96D5]" />
                </div>
                <div className="ml-2 leading-relaxed">{item.text}</div>
              </div>
            ))}
          </div>

          {/* CTA button */}
          <div className="pt-8 md:pt-[1.5vw]">
            <Link href="/contact-us" passHref>
              {/* CommonButton already renders a <button>.  */}
              <CommonButton>CONTACT&nbsp;US</CommonButton>
            </Link>
          </div>
        </div>

        {/* ---------- RIGHT COLUMN (Image blob) ---------- */}
        <motion.div
          ref={ref}
          className="flex justify-center relative items-center w-full lg:w-auto"
          style={{
            transform: isInView ? 'translateY(0)' : 'translateY(7vh)',
            opacity: isInView ? 1 : 0,
            transition: 'all 2s ease',
          }}
        >
          <div className="relative w-full h-[50vh] lg:w-[75vh] overflow-hidden lg:h-[75vh] max-w-full lg:max-w-[75vh]">
            {/* pastel blob behind the picture */}
            <svg viewBox="0 0 564 564"
                 className="absolute inset-0 w-full h-full fill-[#F1EFFF] rotate-30 transform translate-x-[2vw] translate-y-[2vw] -z-10">
              <path d="M282,150.8C476.8,54.6,564,126.256,564,282S437.744,564,282,564,0,437.744,0,282,87.2,247,282,150.8Z" />
            </svg>

            {/* same SVG path used as a clip mask */}
            <svg viewBox="0 0 564 564" className="w-full h-full z-10">
              <defs>
                <clipPath id="heartClip">
                  <path d="M282,150.8C476.8,54.6,564,126.256,564,282S437.744,564,282,564,0,437.744,0,282,87.2,247,282,150.8Z" />
                </clipPath>
              </defs>

              {/* ↘️ note: next/image cannot live inside <svg>, so we keep a plain SVG <image> */}
              <image
                href={`${process.env.NEXT_PUBLIC_IMG_url}/about-img_9.jpg`} // ⬅️ env var
                width="564"
                height="564"
                clipPath="url(#heartClip)"
                preserveAspectRatio="xMidYMid slice"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
