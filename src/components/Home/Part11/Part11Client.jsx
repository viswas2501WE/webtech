'use client';                              

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import dynamic from 'next/dynamic';
import Image from 'next/image';

// react-slick touches `window`, so load it only on the client
const Slider = dynamic(() => import('react-slick'), { ssr: false });
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/* ─────────── data helper ─────────── */
const makeFeedbacks = () => {
  const BASE = process.env.NEXT_PUBLIC_IMG_url || '';   // ✅ replace Vite env syntax

  return [
    {
      image: `${BASE}/man1.png`,
      name: 'CHRIS NUTBEEN',
      position: 'Director at Nuttifox',
    quote: `Espire Vox provide excellent support to our in-house development team allowing us to scale to meet the needs of each project. Their experience is key to making this relationship work and offering real value to our business. Having worked with many development agencies in the past that have not delivered, we are keen to see we continue to work closely with Espire Vox as they consistently deliver outstanding services.`,
    },
    {
      image: `${BASE}/woman1-jpg.jpg`,
      name: 'JOANA BURNS',
      position: 'Managing Director, SEO Moves Ltd',
    quote: `We have worked personally with Mithil and his team on a number of projects in the past. Mithil holds great communication and PHP expertise which were needed with our custom PHP programming job. Not only did Espire Vox create a custom module for us, but they did it on time and below the original budget. I can't fault them enough and would highly recommend them to anyone seeking this type of custom work.`,
    },
    {
      image: `${BASE}/t_1.jpg`,
      name: 'MATTHIAS GUTSCH',
      position: 'Owner at Studiomodo',
    quote: `I was really impressed with the communication. Espire Vox team is very quick to adjust any changes or preferences I had. I was always asked my thoughts and the programmer wanted to make sure I was completely satisfied with every page on my website. Outstanding team! I will definitely hire again!`,
    },
    {
      image: `${BASE}/author-img_3.jpg`,
      name: 'MARK HEDRY',
      position: 'CEO Founder',
    quote: `Mithil and the Webtech Evolution team demonstrated Mithil and the Espire Vox team demonstrated exceptional communication and PHP proficiency in delivering a custom module promptly and under budget, earning my strong recommendation for similar bespoke projects.communication and PHP proficiency in delivering a custom module promptly and under budget, earning my strong recommendation for similar bespoke projects.`,
    },
    {
      image: `${BASE}/author-img_4.jpg`,
      name: 'ALISON ROSE',
      position: 'CEO Founder',
    quote: `Working closely with Mithil and the Espire Vox team on various projects, their adept communication and PHP expertise stood out. They not only delivered a custom module promptly but also managed to stay below the initial budget, earning my wholehearted recommendation for anyone in need of similar tailored solutions.`,
    },
    {
      image: `${BASE}/aidan-e1706109855886.jpg`,
      name: 'AIDAN SPENCE',
      position: 'Owner at Spence Digital Agency',
    quote: `I have been working along with Mithil and his team for the past nine years. I would be lost without their professional work and knowledge. Mithil and his team are AMAZING. Their team is very flexible and understands the customers needs. No job is too big or too small for them. There is a reason why I always go with them for web and app development. The bottom line is they deliver!`,
    },
    {
      image: `${BASE}/t_8.jpg`,
      name: 'ALI OZINAN',
      position: 'Marketing Manager',
    quote: `There are talents out there, like hidden at different corners around the world and knowing where they are is something much more than a business related benefit, Mithil and his team are the kind of people.`,
    },
  ];
};

export default function Part11Client() {
  const feedbacks = makeFeedbacks();

  /* slick settings */
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    speed: 800,
    dots: false,
    autoplay: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="w-full lg:w-[74%] relative">
      <Slider {...settings}>
        {feedbacks.map((c, i) => (
          <div key={i} className="bg-transparent rounded-lg text-left">
            <div
              className="text-[#6C6C6C] font-[400] leading-relaxed mb-8"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              {c.quote}
            </div>
            <div className="flex items-center gap-4 mt-6">
              {/* avatar – optimised image */}
              <Image
                src={c.image}
                alt={c.name}
                width={60}
                height={60}
                className="w-15 h-15 rounded-full object-cover"
              />
              <div className="pr-1">
                <h4
                  className="text-2xl font-[600] text-[#061526] uppercase"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {c.name}
                </h4>
                <div
                  className="text-sm font-[400] text-[#8C8C8C]"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  {c.position}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

/* ─────────── custom arrows ─────────── */
function NextArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="absolute flex items-center justify-center w-8 h-8 bg-white border border-[#1A96D5]
                 top-[80%] right-0 rounded-full text-[#1A96D5] hover:text-white hover:bg-[#1A96D5]
                 transition-colors duration-300 z-10 cursor-pointer"
    >
      <FaArrowRight className="text-sm" />
    </div>
  );
}

function PrevArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="absolute flex items-center justify-center w-8 h-8 bg-white border border-[#1A96D5]
                 top-[80%] right-[10%] lg:right-[9%] xl:right-[7%] rounded-full text-[#1A96D5]
                 hover:text-white hover:bg-[#1A96D5] transition-colors duration-300 z-10 cursor-pointer"
    >
      <FaArrowLeft className="text-sm" />
    </div>
  );
}
