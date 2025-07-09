'use client';                               // needed for framer‑motion + hooks

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

import CommonButton from '@/components/common/CommonButton';
import Screen3      from '@/components/common/Animations/Screen3';

export default function Part3() {
  const base = process.env.NEXT_PUBLIC_IMG_url;   // 2024/02 folder

  return (
    <div className="lg:pt-0 pt-10 relative w-full overflow-hidden">
      <Screen3 />

      <div className="h-full relative flex flex-col items-center justify-center px-2 sm:px-6 md:px-8 py-12 pb-0 lg:pb-10 lg:py-0">
        <div className="relative w-full max-w-screen-xl">

          {/* heading */}
          <div className="pb-10 text-center">
            <div className="font-[500] text-lg text-[#FF3A4F]" style={{ fontFamily: 'Roboto, sans-serif' }}>
              WHY CHOOSE US
            </div>
            <div className="font-[600] text-[5vh] md:text-[5.5vh] lg:text-[6vh]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Our Services
            </div>
          </div>

          {/* card grid */}
          <div className="flex flex-wrap justify-center lg:px-[10vh] relative items-stretch">
            {/* Card 1 */}
            <ServiceCard
              href="/our-services/espire-vox-services/Web-Design-And-Development"
              img={`${base}/Web-Design-Development1-1.png`}
              title="Web Design And Development"
              text="Starting around 2014, we have been a visionary and a dependable programming improvement organization serving clients across the globe and container India. We design and develop as per your need!"
            />

            {/* Card 2 */}
            <ServiceCard
              href="/our-services/espire-vox-services/SEO-And-Digital-Marketing"
              img={`${base}/SEO-Digital-Marketing1-1.png`}
              title="SEO And Digital Marketing"
              text="Our group contains experienced Search engine optimization and computerized advertisers that will elevate your company's web-online arrive at in a limited capacity to understand time."
            />

            {/* Card 3 */}
            <ServiceCard
              href="/our-services/espire-vox-services/Hire-Dedicated-Developers"
              img={`${base}/Hire-Dedicated-Developers1-1.png`}
              title="Hire Dedicated Developers"
              text="Searching for devoted designers to chip away on your venture, we have you arranged. You can move toward us with your necessities and we will offer you our best!"
            />

            {/* Card 4 */}
            <ServiceCard
              href="/our-services/espire-vox-services/Customized-Solutions"
              img={`${base}/Customized-Solutions1-1.png`}
              title="Customized Solutions"
              text="We can chip away on complex prerequisites and convey past assumptions. With years of experience in the industry, we have worked on all kinds of projects."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------ */
/* Card helper component with framer‑motion reveal               */
/* ------------------------------------------------------------ */
function ServiceCard({ href, img, title, text }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      className="w-full sm:w-1/2 lg:w-1/4 p-4 flex flex-col items-start"
      style={{
        transform: inView ? 'translateY(0)' : 'translateY(5vh)',
        opacity: inView ? 1 : 0,
        transition: 'all 1s ease',
      }}
    >
      <div className="flex lg:flex-col items-center mb-4">
        <div className="w-16 h-16 lg:w-24 lg:h-24 sm:w-20 lg:mb-[5%] sm:h-20 bg-[#F8F8F8] rounded-full flex justify-center items-center mr-4 lg:mr-0">
          <img src={img} alt={title} className="w-10 sm:w-12" />
        </div>
        <div
          className="font-[600] text-[2.5vh] md:text-[3vh] lg:text-[3.5vh] text-left"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {title}
        </div>
      </div>

      <div
        className="font-[400] text-[#4F4F4F] leading-7 text-left flex-grow"
        style={{ fontFamily: 'Roboto, sans-serif' }}
      >
        {text}
      </div>

      <Link href={href}>
        <CommonButton className="my-4 flex-shrink-0">Read More</CommonButton>
      </Link>
    </motion.div>
  );
}
