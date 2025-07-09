'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Part11Client from './Part11Client';

export default function Part11() {
  const containerRef = useRef(null);
  const imgRefs = useRef([]);
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, margin: '-100px' });

  const IMG = process.env.NEXT_PUBLIC_IMG_url || '';

  useEffect(() => {
    let cancel = false;

    const loadGsap = async () => {
      const { gsap } = await import('gsap');
      if (cancel) return;

      const container = containerRef.current;
      const images = imgRefs.current;
      if (!container) return;

      let rect = container.getBoundingClientRect();
      const mouse = { x: 0, y: 0, moved: false };

      const onMove = (e) => {
        rect = container.getBoundingClientRect();
        mouse.moved = true;
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
      };

      const onLeave = () => {
        images.slice(0, 2).forEach((img) => {
          gsap.to(img, { duration: 1, x: 0, y: 0, ease: 'power3.out' });
        });
      };

      const onResize = () => {
        rect = container.getBoundingClientRect();
      };

      const animate = () => {
        if (mouse.moved) {
          images.slice(0, 2).forEach((img) => {
            gsap.to(img, {
              duration: 1,
              y: ((mouse.y - rect.height / 2) / rect.width) * -40,
              x: ((mouse.x - rect.width / 2) / rect.width) * -40,
              ease: 'power3.out',
            });
          });
          mouse.moved = false;
        }
        animationId = requestAnimationFrame(animate);
      };

      if (images[2]) {
        gsap.to(images[2], {
          y: 100,
          duration: 6,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
        });
      }

      let animationId = requestAnimationFrame(animate);
      container.addEventListener('mousemove', onMove);
      container.addEventListener('mouseleave', onLeave);
      window.addEventListener('resize', onResize);

      return () => {
        cancelAnimationFrame(animationId);
        container.removeEventListener('mousemove', onMove);
        container.removeEventListener('mouseleave', onLeave);
        window.removeEventListener('resize', onResize);
      };
    };

    loadGsap();

    return () => {
      cancel = true;
    };
  }, []);

  return (
    <div
      id="container"
      ref={containerRef}
      className="flex items-center py-20 overflow-hidden"
    >
      {/* Left Side */}
      <div className="w-[50%] hidden lg:block">
        <div className="relative flex justify-center pl-22">
          <Image
            src={`${IMG}/test-wrap-img_1.png`}
            alt=""
            width={600}
            height={400}
            className="shadow-lg rounded-xl w-[47%]"
          />
          <img
            ref={(el) => (imgRefs.current[0] = el)}
            src={`${IMG}/author-img_2.jpg`}
            alt=""
            className="absolute top-[13%] left-[25%] rounded-xl w-[18%]"
            loading="lazy"
          />
          <img
            ref={(el) => (imgRefs.current[1] = el)}
            src={`${IMG}/author-img_2.jpg`}
            alt=""
            className="absolute bottom-[4%] left-[67%] rounded-xl w-[17%]"
            loading="lazy" 
          />
          <img
            ref={(el) => (imgRefs.current[2] = el)}
            src={`${IMG}/element-01.png`}
            alt=""
            className="absolute left-[60%] w-[12%] pointer-events-none hue-rotate-220"
            style={{ top: '-10%' }}
            loading="lazy"
          />
          <Image
            src={`${IMG}/element_25.png`}
            alt=""
            width={120}
            height={120}
            className="absolute -bottom-[7%] left-[28%] w-[28%] -z-10 animate-[moveya_10s_ease-in-out_infinite] "
          />
          <Image
            src={`${IMG}/element_24.png`}
            alt=""
            width={120}
            height={120}
            className="absolute -top-[6%] left-[65%] w-[22%] -z-10 animate-[movexa_10s_ease-in-out_infinite]"
          />
          <Image
            src={`${IMG}/element-02.png`}
            alt=""
            width={120}
            height={120}
            className="absolute top-[50%] left-[32%] w-[12%] -z-10 animate-[movexa_10s_ease-in-out_infinite] "
          />
          <Image
            src={`${IMG}/element_23.png`}
            alt=""
            width={120}
            height={120}
            className="absolute -top-[20%] left-[15%] w-[30%] -z-10 animate-[moveya_10s_ease-in-out_infinite] hue-rotate-220"
          />
          <style jsx>{`
            @keyframes movexa {
              0%,
              100% {
                transform: translateX(0);
              }
              50% {
                transform: translateX(7vh);
              }
            }
            @keyframes moveya {
              0%,
              100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(7vh);
              }
            }
          `}</style>
        </div>
      </div>

      {/* Right Side */}
      <motion.div
        ref={headerRef}
        className="w-full lg:w-[50%] px-5 lg:px-0"
        style={{
          transform: isInView ? 'translateX(0)' : 'translateX(5vh)',
          opacity: isInView ? 1 : 0,
          transition: 'all 2s ease',
        }}
      >
        <div
          className="font-[500] text-[2.5vh] text-gray-600"
          style={{ fontFamily: 'Roboto, sans-serif' }}
        >
          <p>Testimonials</p>
          <span className="inline-block w-12 h-0.5 bg-[#1A96D5]" />
        </div>

        <h2
          className="font-[600] text-[6vh] py-4"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Client&apos;s Feedback
        </h2>

        <Part11Client />
      </motion.div>
    </div>
  );
}
