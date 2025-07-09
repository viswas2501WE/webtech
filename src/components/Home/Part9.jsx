'use client';                   

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import Part7Common from './Part7/Part7-9Common'; 

export default function Part9() {
  const IMG0 = process.env.NEXT_PUBLIC_IMG_url || '';
  const IMG1 = process.env.NEXT_PUBLIC_IMG_url1 || '';
  const IMG2 = process.env.NEXT_PUBLIC_IMG_url2 || '';

  const services = [
    {
      icon: (
        <Image
          src={`${IMG1}/Email-Marketing.png`}
          alt="Email Marketing icon"
          width={68}
          height={68}
          className="w-17"
        />
      ),
      title: 'Email Marketing',
      description:
        'Email marketing involves sending promotional or informational content via email to your audience.',
      ReadMore: '/our-services/digital-marketing/Email-Marketing',
      image: `${IMG0}/email-marketing-570x420.jpg`,
    },
    {
      icon: (
        <Image
          src={`${IMG1}/Amazon-marketing.png`}
          alt="Amazon Marketing icon"
          width={68}
          height={68}
          className="w-17"
        />
      ),
      title: 'Amazon Marketing',
      description:
        'We help you use Sponsored Products, Sponsored Brands, and more to boost Amazon sales.',
      ReadMore: '/our-services/digital-marketing/Amazon-Marketing',
      image: `${IMG0}/Amazon-Marketing-570x420.png`,
    },
    {
      icon: (
        <Image
          src={`${IMG1}/App-Store-Optimization.png`}
          alt="ASO icon"
          width={76}
          height={76}
          className="w-19"
        />
      ),
      title: 'App Store Optimization',
      description:
        'Optimise your mobile app listing to rank higher in Apple’s App Store and Google Play.',
      ReadMore: '/our-services/digital-marketing/App-Store-Optimization',
      image: `${IMG1}/representations-user-experience-interface-design_23-2150038906-570x420.png`,
    },
    {
      icon: (
        <Image
          src={`${IMG1}/PPC.png`}
          alt="PPC icon"
          width={68}
          height={68}
          className="w-17"
        />
      ),
      title: 'PPC',
      description:
        'Pay-Per-Click campaigns that maximise ROI across Google, Bing, and social ads.',
      ReadMore: '/our-services/digital-marketing/PPC',
      image: `${IMG0}/ppc-pay-per-click-570x420.png`,
    },
    {
      icon: (
        <Image
          src={`${IMG1}/Social-Media-Marketing.png`}
          alt="Social Media Marketing icon"
          width={60}
          height={60}
          className="w-15"
        />
      ),
      title: 'Social Media Marketing',
      description:
        'Strategic campaigns on Facebook, Instagram, LinkedIn, and more to grow your community.',
      ReadMore: '/our-services/digital-marketing/Social-Media-Marketing',
      image: `${IMG1}/hand-holding-smartphone-social-media-concept-570x420.png`,
    },
    {
      icon: (
        <Image
          src={`${IMG1}/SEO.png`}
          alt="SEO icon"
          width={56}
          height={56}
          className="w-14"
        />
      ),
      title: 'SEO',
      description:
        'Technical and content SEO to push your site higher on Google and Bing.',
      ReadMore: '/our-services/digital-marketing/SEO',
      image: `${IMG2}/Digital-Marketing2-570x420.png`,
    },
  ];

  /* duplicate for “infinite” feel */
  const duplicateServices = [...services, ...services];

  /* ──────────── carousel logic ──────────── */
  const scrollRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollToCard = (index) => {
    const node = scrollRef.current;
    if (node) {
      const cardWidth = node.scrollWidth / duplicateServices.length;
      node.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
      setCurrentSlide(index);
    }
  };

  /* update dots when user drags/scrolls */
  useEffect(() => {
    const node = scrollRef.current;
    if (!node) return;

    const handleScroll = () => {
      const cardWidth = node.scrollWidth / duplicateServices.length;
      const newIndex = Math.round(node.scrollLeft / cardWidth);
      setCurrentSlide(newIndex % services.length);
    };

    node.addEventListener('scroll', handleScroll);
    return () => node.removeEventListener('scroll', handleScroll);
  }, [services.length, duplicateServices.length]);

  /* ──────────── UI ──────────── */
  return (
    <div className="py-10 md:py-16 lg:py-20">
      {/* header */}
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
            Our Digital Marketing Services
          </div>
        </div>

        <div
          className="font-[400] text-left w-full lg:w-[53%] text-[#4F4F4F] leading-relaxed text-sm sm:text-base"
          style={{ fontFamily: 'Roboto, sans-serif' }}
        >
          <p className="mb-5">
            A robust online presence is crucial for business success, and we are
            here to catapult your brand through our full-stack digital marketing
            services.
          </p>
          <p>
            Ready to elevate your brand’s digital presence? Contact us to explore how our digital marketing services can propel your business to new heights. We should set out on an excursion of computerized achievement together!
          </p>
        </div>
      </div>

      {/* carousel */}
      <div className="pl-5 sm:pl-10 lg:pl-[12.5%] py-10">
        <div
          ref={scrollRef}
          className="flex overflow-x-scroll overflow-hidden"
          style={{ scrollbarWidth: 'none', height: '100%' }}
        >
          {duplicateServices.map((svc, idx) => (
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
              <Part7Common {...svc} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* dots */}
      <div className="flex space-x-2 sm:space-x-4 justify-start ml-[5%] sm:ml-[10%] lg:ml-[13%]">
        {services.map((_, idx) => (
          <span
            key={idx}
            role="button"
            aria-label={`Go to slide ${idx + 1}`}
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
}
