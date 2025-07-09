'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';  
export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  /* external logo via env variable */
  const logoSrc = `${process.env.NEXT_PUBLIC_IMG_url}/webtech.png`;

  return (
    <div className="relative overflow-hidden text-black">
      <motion.div
        ref={ref}
        initial={{ y: 60, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 2, ease: 'easeInOut' }}
        className="py-1.5"
      >
        {/* ------------ main grid ------------ */}
        <div className="flex flex-col xl:flex-row justify-between w-[75%] mx-auto py-10">
          {/* logo */}
          <div className="mb-8 xl:mb-0 flex justify-center xl:justify-start">

            <Image
              src={logoSrc}
              alt="Espire Vox Logo"
              width={150}
              height={60}
              className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-[15.5%] xl:w-[150px] max-w-[200px]"
              priority
            />
          </div>

          {/* nav links */}
          <div
            className="
              grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4
              xl:flex xl:flex-wrap xl:justify-end xl:gap-x-12
              gap-y-4 pt-5 xl:pt-0 font-[500] text-center items-baseline-last"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            {[
              { label: 'About Us',          href: '/about-us' },
              { label: 'Our Services',      href: '/our-services' },
              { label: 'Hire Developers',   href: '/hire-dev' },
              { label: 'Our Team',          href: '/our-team' },
              { label: 'Our Portfolio',     href: '/our-portfolio' },
              { label: 'Career',            href: '/career' },
              { label: 'Blog',              href: '/blog' },
              { label: 'Contact Us',        href: '/contact-us' },
            ].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="hover:text-[#1A96D5] transition-colors flex duration-300"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* divider & copyright */}
        <span className="h-0.5 w-[75.5%] bg-[#1A96D5] mx-auto block" />

        <h1
          style={{ fontFamily: 'Roboto, sans-serif' }}
          className="font-[400] text-center py-10 tracking-widest text-sm sm:text-base px-4"
        >
          © 2025 Espire Vox — All Rights Reserved.
        </h1>
      </motion.div>
    </div>
  );
}
