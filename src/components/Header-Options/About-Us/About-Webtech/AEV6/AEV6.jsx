'use client';                         // ① required – uses browser-only libs

import React, { useRef } from 'react';
import dynamic from 'next/dynamic';   // ② load react-slick only on the client
import AEV6Common from './AEV6Common';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

/* slick-carousel CSS (keep exactly as before).  You can import these once
   in `app/globals.css` if you prefer. */
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/* -----------------------  environment shortcuts  ----------------------- */
const IMG  = process.env.NEXT_PUBLIC_IMG_url;
const IMG1 = process.env.NEXT_PUBLIC_IMG_url1;

/* ------------------------- testimonial data ---------------------------- */
const testimonials = [
  {
    id: 1,
    review: `Webtech Evolution provide excellent support to our in-house development team allowing us to scale to meet the needs of each project. Their experience is key to making this relationship work and offering real value to our business. Having worked with many development agencies in the past that have not delivered, we are keen to see we continue to work closely with Webtech Evolution as they consistently deliver outstanding services.`,
    name: 'CHRIS NUTBEEN',
    title: 'Director At Nuttifox',
    image: `${IMG}/man1.png`,
  },
  {
    id: 2,
    review: `We have worked personally with Mithil and his team on a number of projects in the past. Mithil holds great communication and PHP expertise which were needed with our custom PHP programming job. Not only did Webtech Evolution create a custom module for us, but they did it on time and below the original budget. I can't fault them enough and would highly recommend them to anyone seeking this type of custom work.`,
    name: 'JOANA BURNS',
    title: 'Managing Director, SEO Moves Ltd',
    image: `${IMG}/woman1-jpg.jpg`,
  },
  {
    id: 3,
    review: `I was really impressed with the communication. Webtech Evolution team is very quick to adjust any changes or preferences I had. I was always asked my thoughts and the programmer wanted to make sure I was completely satisfied with every page on my website. Outstanding team! I will definitely hire again!`,
    name: 'MATTHIAS GUTSCH',
    title: 'Owner at Studiomodo',
    image: `${IMG}/t_1.jpg`,
  },
  {
    id: 4,
    review: `Mithil and the Webtech Evolution team demonstrated Mithil and the Webtech Evolution team demonstrated exceptional communication and PHP proficiency in delivering a custom module promptly and under budget, earning my strong recommendation for similar bespoke projects.communication and PHP proficiency in delivering a custom module promptly and under budget, earning my strong recommendation for similar bespoke projects.`,
    name: 'MARK HEDRY',
    title: 'CEO founder',
    image: `${IMG}/author-img_3.jpg`,
  },
  {
    id: 5,
    review: `Working closely with Mithil and the Webtech Evolution team on various projects, their adept communication and PHP expertise stood out. They not only delivered a custom module promptly but also managed to stay below the initial budget, earning my wholehearted recommendation for anyone in need of similar tailored solutions.`,
    name: 'ALISON ROSE',
    title: 'CEO founder',
    image: `${IMG}/author-img_4.jpg`,
  },
  {
    id: 6,
    review: `I have been working along with Mithil and his team for the past nine years. I would be lost without their professional work and knowledge. Mithil and his team are AMAZING. Their team is very flexible and understands the customers needs. No job is too big or too small for them. There is a reason why I always go with them for web and app development. The bottom line is they deliver!`,
    name: 'AIDAN SPENCE',
    title: 'Owner at Spence Digital Agency',
    image: `${IMG}/aidan-e1706109855886.jpg`,
  },
  {
    id: 7,
    review: `There are talents out there, like hidden at different corners around the world …`,
    name: 'ALI OZINAN',
    title: 'Marketing Manager',
    image: `${IMG}/t_8.jpg`,
  },
];

/* --------------------------- component --------------------------------- */
export default function AEV6() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
  };

  return (
    <div
      className="h-full relative flex items-center justify-center py-12 px-4 sm:px-6 lg:px-44 overflow-hidden"
      style={{
        fontFamily: 'Roboto, sans-serif',
        background: 'linear-gradient(90deg, #1e3c72 0%, #2a5298 100%)',
      }}
    >
      {/* decorative blob in the corner */}
      <img
        src={`${IMG}/element_82.png`}
        alt=""
        className="absolute w-[42%] z-0 -top-[3%] -left-[10%] overflow-hidden"
      />

      <div className="mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        {/* ---------- left column (text + arrows) ---------- */}
        <div className="text-center lg:text-left w-full lg:w-[80%]">
          <p className="text-[#fff] text-lg tracking-wider mb-2 font-[500]">
            Testimonials
          </p>
          <h2
            className="text-4xl md:text-[6vh] text-white leading-tight mb-6 font-[600]"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            What Our Clients Say
          </h2>
          <p className="text-white leading-relaxed mb-8 font-[400]">
            Flourishing with client fulfillment, our different and fulfilled
            customer base validate the quality, dependability, and greatness
            embedded in our administrations. Join the positions of organizations
            that have experienced achievement and satisfaction through our
            devoted and customized arrangements.
          </p>

          {/* navigation buttons */}
          <div className="flex justify-center lg:justify-start space-x-4">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="group flex cursor-pointer justify-center items-center p-3 rounded-full bg-white w-[6.5vh] h-[6.5vh] shadow-md hover:bg-[#1A96D5] transition-colors duration-400"
              aria-label="Previous testimonial"
            >
              {/* same SVG as original */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="12"
                viewBox="0 0 24 12"
              >
                <g transform="translate(0)">
                  <path
                    d="M6,0l6,9H0Z"
                    transform="translate(0 12) rotate(-90)"
                    fill="#1A96D5"
                    className="group-hover:fill-white transition-colors duration-400"
                  />
                  <rect
                    width="15"
                    height="2"
                    transform="translate(9 5)"
                    fill="#1A96D5"
                    className="group-hover:fill-white transition-colors duration-400"
                  />
                </g>
              </svg>
            </button>

            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="group cursor-pointer flex justify-center items-center p-3 rounded-full bg-white w-[6.5vh] h-[6.5vh] shadow-md hover:bg-[#1A96D5] transition-colors duration-400"
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="12"
                viewBox="0 0 24 12"
              >
                <g transform="translate(0)">
                  <path
                    d="M6,0l6,9H0Z"
                    transform="translate(24) rotate(90)"
                    fill="#1A96D5"
                    className="group-hover:fill-white transition-colors duration-400"
                  />
                  <rect
                    width="15"
                    height="2"
                    transform="translate(0 5)"
                    fill="#1A96D5"
                    className="group-hover:fill-white transition-colors duration-400"
                  />
                </g>
              </svg>
            </button>
          </div>
        </div>

        {/* ---------- right column (slider) ---------- */}
        <div className="relative flex items-center justify-center min-h-[300px] w-full lg:w-[100%]">
          <Slider {...settings} ref={sliderRef} className="w-full">
            {testimonials.map((t) => (
              <div key={t.id}>
                <AEV6Common testimonial={t} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}