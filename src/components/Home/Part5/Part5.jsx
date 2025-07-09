'use client';                              // required for framer‑motion + icons

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FaAngular,
  FaLaravel,
  FaNodeJs,
  FaReact,
  FaShopify,
  FaWordpress,
} from 'react-icons/fa';

import Part5Common from '@/components/Home/Part5/Part5Common';

export default function Part5() {
  const services = [
    {
      icon: <FaAngular size={70} />,
      title: 'Angular Js',
      description:
        'AngularJS fills in as a JavaScript-based frontend web structure destined for creating single-page applications…',
      path: '/our-services/Web-Development/Mern-Stack/Angular-Js',
    },
    {
      icon: <FaLaravel size={70} />,
      title: 'Laravel Development',
      description:
        'Laravel remains as a web application system known for its rich language structure…',
      path: '/our-services/Web-Development/Laravel-Development',
    },
    {
      icon: <FaShopify size={70} />,
      title: 'Shopify Development',
      description:
        'For online store owners seeking the best e‑commerce platform, Shopify stands out…',
      path: '/our-services/e-commerce-solutions/Shopify-Development',
    },
    {
      icon: <FaWordpress size={70} />,
      title: 'WordPress Development',
      description:
        'WordPress, an open-source content management system crafted in PHP and MySQL…',
      path: '/our-services/Web-Development/WordPress-Development',
    },
    {
      icon: <FaNodeJs size={70} />,
      title: 'Node Js',
      description:
        'Node.js is made for building adaptable organization applications, filling in as an open-source…',
      path: '/our-services/Web-Development/Mern-Stack/Node-Js',
    },
    {
      icon: <FaReact size={70} />,
      title: 'React Js',
      description:
        'React, a free and open-source JavaScript library for frontend advancement, bases on building UIs…',
      path: '/our-services/Web-Development/Mern-Stack/React-Js',
    },
  ];

  return (
    <div className="items-center flex pt-10 pb-5 md:pt-20 md:pb-10 justify-center">
      <div>
        {/* section heading */}
        <div
          className="flex justify-center items-center font-[500] text-base md:text-lg"
          style={{ fontFamily: 'Roboto, sans-serif' }}
        >
          <span className="h-0.5 w-8 md:w-12 bg-[#1A96D5]" />
          <span className="text-[#4F4F4F] px-2 md:px-3">What We Do</span>
          <span className="h-0.5 w-8 md:w-12 bg-[#1A96D5]" />
        </div>

        <h2
          className="flex justify-center text-[4vh] text-center py-2 md:text-[6vh] md:py-4 font-[600]"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Web Based Services
        </h2>

        {/* cards grid */}
        <div className="mx-[5%] sm:mx-[10%] lg:mx-[12%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-8 md:py-15 gap-4 sm:gap-6 lg:gap-8">
          {services.map((svc, idx) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <Link href={svc.path}>
                <Part5Common {...svc} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
