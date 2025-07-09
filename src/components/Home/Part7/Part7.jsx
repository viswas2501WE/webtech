'use client';                     // ⬅ required: we use hooks on the client

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';   // ⬅ Next’s optimized image component
import Part7Common from './Part7-9Common';

const Part7 = () => {
  /* ──────────── state & refs ──────────── */
  const scrollRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  /* ──────────── data – use process.env ──────────── */
  const url = process.env.NEXT_PUBLIC_IMG_url;
  const url1 = process.env.NEXT_PUBLIC_IMG_url1;

  const services = [
    {
      icon: (
        <Image
          src={`${url1}/IONIC.png`}
          alt="IONIC logo"
          width={68}
          height={68}
        />
      ),
      title: 'IONIC',
      description:
        'Ionic is an open-source framework for building cross-platform mobile applications using web technologies',
      ReadMore: '/our-services/mobile-app-development/IONIC',
      image: `${url}/app-development-570x400.png`,
    },
    {
      icon: (
        <Image
          src={`${url1}/Android-development.png`}
          alt="Android Development logo"
          width={58}
          height={58}
        />
      ),
      title: 'Android Development',
      description:
        'Android app development involves creating software applications for devices running the Android',
      ReadMore: '/our-services/mobile-app-development/Android-Development',
      image: `${url}/app-development-570x400.png`,
    },
    {
      icon: (
        <Image
          src={`${url1}/React-Native.png`}
          alt="React Native logo"
          width={80}
          height={80}
        />
      ),
      title: 'React Native',
      description:
        'React Native is an open-source framework developed by Facebook for building mobile applications',
      ReadMore: '/our-services/mobile-app-development/React-Native',
      image: `${url}/atomic-science-technology-570x420.jpg`,
    },
    {
      icon: (
        <Image
          src={`${url1}/Flutter-2-1.png`}
          alt="Flutter logo"
          width={50}
          height={50}
        />
      ),
      title: 'Flutter',
      description:
        'Flutter is an open-source UI software development toolkit created by Google. It is',
      ReadMore: '/our-services/mobile-app-development/Flutter',
      image: `${url}/6308d1ab615e60c9047c9d06_AppDev_Flutter-tools-570x420.png`,
    },
    {
      icon: (
        <Image
          src={`${url1}/IOS-Development.png`}
          alt="iOS Development logo"
          width={96}
          height={96}
        />
      ),
      title: 'IOS development',
      description:
        'Our team of seasoned iOS developers, with over 8 years of expertise, specializes in leveraging iOS technologies,',
      ReadMore: '/our-services/mobile-app-development/IOS-Development',
      image: `${url}/app-development-570x400.png`,
    },
  ];

  /* duplicate to create infinite-like effect */
  const duplicateServices = [...services, ...services];

  /* ──────────── helpers ──────────── */
  const scrollToCard = (index) => {
    if (scrollRef.current) {
      const scrollWidth =
        scrollRef.current.scrollWidth / duplicateServices.length;
      scrollRef.current.scrollTo({
        left: scrollWidth * index,
        behavior: 'smooth',
      });
      setCurrentSlide(index);
    }
  };

  /* update dot indicator on manual scroll */
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollLeft = scrollRef.current.scrollLeft;
        const cardWidth =
          scrollRef.current.children[0].offsetWidth + 24; /* mr-6 = 24 px */
        const newIndex = Math.round(scrollLeft / cardWidth);
        setCurrentSlide(newIndex % services.length);
      }
    };

    const node = scrollRef.current;
    node?.addEventListener('scroll', handleScroll);
    return () => node?.removeEventListener('scroll', handleScroll);
  }, [services.length]);

  /* ──────────── UI ──────────── */
  return (
    <div className="py-10 md:py-16 lg:py-20">
      {/* Heading */}
      <div className="flex flex-col lg:flex-row justify-between items-center px-5 sm:px-10 lg:px-[12.5%] text-center lg:text-left">
        <div className="w-full lg:w-[55%] mb-8 lg:mb-0">
          <div
            className="font-[500] text-xl sm:text-lg text-[#1A96D5]"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            WHAT WE DO
          </div>
          <div
            className="font-[600] text-4xl lg:text-[6vh] leading-tight mt-2"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Mobile App Based Services
          </div>
        </div>
        <div
          className="font-[400] text-left w-full lg:w-[43%] text-[#4F4F4F] leading-relaxed text-sm sm:text-base"
          style={{ fontFamily: 'Roboto, sans-serif' }}
        >
          In the time of computerized network, having a strong versatile
          presence is fundamental, and we are here to transform your application
          vision into a reality. From concept to deployment and beyond, our
          comprehensive mobile app services cover every aspect of the
          development lifecycle.
        </div>
      </div>

      {/* Carousel */}
      <div className="pl-5 sm:pl-10 lg:pl-[12.5%] py-10">
        <div
          ref={scrollRef}
          className="flex overflow-x-scroll overflow-hidden"
          style={{ scrollbarWidth: 'none', height: '100%' }}
        >
          {duplicateServices.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: (idx % services.length) * 0.1,
              }}
              className="mr-6 h-full
                         min-w-[85vw]
                         sm:min-w-[70vw]
                         md:min-w-[45vw]
                         lg:min-w-[30vw]
                         xl:min-w-[24vw]"
            >
              <Part7Common {...service} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pagination dots */}
      <div className="flex space-x-2 sm:space-x-4 justify-start ml-[5%] sm:ml-[10%] lg:ml-[13%] mt-5">
        {services.map((_, idx) => (
          <span
            key={idx}
            aria-label={`Go To Slide ${idx + 1}`}
            role="button"
            tabIndex={0}
            onClick={() => scrollToCard(idx)}
            className={`w-7 h-2 sm:w-8.5 sm:h-2.5 rounded-lg cursor-pointer ${
              currentSlide === idx
                ? 'bg-[#1A96D5] border border-[#1A96D5]'
                : 'bg-transparent border border-[#1A96D5]'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Part7;
