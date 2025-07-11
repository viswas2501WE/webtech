'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

/* icons & child component */
import {
  FaBehance,
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from 'react-icons/fa';
import Part13Common from './Part13Common';

/* social links */
const socials = [
  { icon: FaFacebookF, name: 'Facebook',  path: 'https://www.facebook.com/webtechevolution2014/' },
  { icon: FaInstagram, name: 'Instagram', path: 'https://www.instagram.com/webtech_evolution_business' },
  { icon: FaWhatsapp,  name: 'WhatsApp',  path: 'https://api.whatsapp.com/send?phone=%2B919601965456' },
  { icon: FaLinkedinIn, name: 'LinkedIn', path: 'https://www.linkedin.com/company/webtechevolution' },
];

export default function Part13() {
  const IMG = process.env.NEXT_PUBLIC_IMG_url || '';

  /* refs for GSAP‑animated elements --------------------------------- */
  const pulseLeftRef  = useRef(null); // element_42.png
  const pulseRightRef = useRef(null); // element_44.png
  const floatRef      = useRef(null); // element_43.png

  useEffect(() => {
    let ctx;                                 // GSAP context holder
    (async () => {
      const { gsap } = await import('gsap');

      ctx = gsap.context(() => {
        /* ------- scalePulse on two blobs ------- */
        const pulseConfig = {
          scale: 1.2,
          duration: 7,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
        };
        if (pulseLeftRef.current)  gsap.to(pulseLeftRef.current,  pulseConfig);
        if (pulseRightRef.current) gsap.to(pulseRightRef.current, pulseConfig);

        /* ------- floatPath (polygon path + rotation) ------- */
        if (floatRef.current) {
          gsap.to(floatRef.current, {
            keyframes: [
              { x: '50%',  y: '12%',  rotation: 35  },
              { x: '38%',  y: '63%',  rotation: 75  },
              { x: '-3%',  y: '84%',  rotation: 120 },
              { x: '-50%', y: '40%',  rotation: 165 },
              { x: '0%',   y: '0%',   rotation: 360 },
            ],
            duration: 14,
            repeat: -1,
            ease: 'linear',
            transformOrigin: 'center',
          });
        }
      });
    })();

    return () => ctx?.revert();            // cleanup on unmount
  }, []);

  /* ------------------------------------------------------------------ */
  return (
    <section className="relative min-h-[85vh] py-12 lg:py-25 overflow-x-hidden overflow-y-hidden bg-[#0F285F]">
      {/* ───────────── Animated background (desktop only) ───────────── */}
      <div className="hidden md:block -z-50">
        {/* static background shape */}
        <Image
          src={`${IMG}/element_41.png`}
          alt=""
          width={180}
          height={180}
          className="absolute bottom-10 -left-20 hue-rotate-220"
        />

        {/* pulsing blobs */}
        <Image
          ref={pulseLeftRef}
          src={`${IMG}/element_42.png`}
          alt=""
          width={500}
          height={500}
          className="absolute top-[15%] -left-[2%] w-[50vh] h-[50vh] pointer-events-none hue-rotate-220"
        />
        <Image
          ref={pulseRightRef}
          src={`${IMG}/element_44.png`}
          alt=""
          width={500}
          height={500}
          className="absolute top-[10%] -right-[5%] w-[50vh] h-[50vh] pointer-events-none hue-rotate-220"
        />

        {/* floating icon on polygon path */}
        <Image
          ref={floatRef}
          src={`${IMG}/element_43.png`}
          alt=""
          width={140}
          height={140}
          className="absolute top-[10%] right-[10%] w-35 h-35 pointer-events-none hue-rotate-220"
        />
      </div>

      {/* ───────────── COPY ───────────── */}
      <div className="relative z-10 text-white text-center px-5">
        <h3
          className="font-medium text-[2.5vh] flex justify-center"
          style={{ fontFamily: 'Roboto, sans-serif' }}
        >
          <span>
            Find&nbsp;Us
            <span className="block w-8 h-0.5 bg-[#1A96D5]" />
          </span>
        </h3>

        <h2
          className="font-semibold text-[6vh] py-3.5"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Letʼs Get Connected
        </h2>

        <p
          className="font-semibold text-[3vh] md:text-[4vh]"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Your go‑to partner for unparalleled&nbsp;IT&nbsp;services
        </p>
      </div>

      {/* ───────────── SOCIAL GRID ───────────── */}
      <div className="relative z-10 flex justify-center py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socials.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              <Link href={s.path} target="_blank">
                <Part13Common {...s} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
