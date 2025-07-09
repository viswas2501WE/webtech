'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

import {
  FaBehance,
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from 'react-icons/fa';

import Part13Common from './Part13Common';

const socials = [
  { icon: FaFacebookF, name: 'Facebook',  path: 'https://www.facebook.com/people/Espirevox/61555211339336/' },
  { icon: FaInstagram, name: 'Instagram', path: 'https://www.instagram.com/espirevox'    },
  { icon: FaWhatsapp,  name: 'WhatsApp',  path: 'https://api.whatsapp.com/send/?phone=%2B919601965456&amp;text&amp;type=phone_number&amp;app_absent=0'    },
  { icon: FaBehance,   name: 'Behance',   path: 'https://www.behance.net/mithilchauhan'    },
  { icon: FaLinkedinIn,name: 'LinkedIn',  path: 'https://www.linkedin.com/company/espirevox/'    },
  { icon: FaDribbble,  name: 'Dribbble',  path: 'https://dribbble.com/Espirevox'    },
];

export default function Part13() {
  /* env helper */
  const IMG = process.env.NEXT_PUBLIC_IMG_url || '';

  return (
    <section className="relative min-h-[85vh] py-12 lg:py-25 overflow-x-hidden overflow-y-hidden bg-[#0F285F]">
      <div className="hidden md:block -z-50">
        {/* static bg shape */}
        <Image
          src={`${IMG}/element_41.png`}
          alt=""
          width={180}
          height={180}
          className="absolute bottom-10 -left-20"
        />

        {/* pulsing blobs */}
        <Image
          src={`${IMG}/element_42.png`}
          alt=""
          width={500}
          height={500}
          className="absolute top-[15%] -left-[2%] w-[50vh] h-[50vh] animate-[scalePulse_7s_ease-in-out_infinite] pointer-events-none z-0"
        />
        <Image
          src={`${IMG}/element_44.png`}
          alt=""
          width={500}
          height={500}
          className="absolute top-[10%] -right-[5%] w-[50vh] h-[50vh] animate-[scalePulse_7s_ease-in-out_infinite] pointer-events-none z-0"
        />

        {/* floating element on a polygon path */}
        <Image
          src={`${IMG}/element_43.png`}
          alt=""
          width={140}
          height={140}
          className="absolute top-[10%] right-[10%] w-35 h-35 animate-[floatPath_14s_linear_infinite] origin-center pointer-events-none z-0"
        />

        {/* local keyframes */}
        <style jsx>{`
          @keyframes scalePulse {
            0%,
            100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.2);
            }
          }
          @keyframes floatPath {
            0% {
              transform: translate(0%, 0%) rotate(0deg);
            }
            20% {
              transform: translate(50%, 12%) rotate(35deg);
            }
            40% {
              transform: translate(38%, 63%) rotate(75deg);
            }
            60% {
              transform: translate(-3%, 84%) rotate(120deg);
            }
            80% {
              transform: translate(-50%, 40%) rotate(165deg);
            }
            100% {
              transform: translate(0%, 0%) rotate(360deg);
            }
          }
        `}</style>
      </div>

      {/* ───────────── COPY ───────────── */}
      <div className="relative z-10 text-white text-center px-5">
        <h3
          className="font-medium text-[2.5vh] flex justify-center"
          style={{ fontFamily: 'Roboto, sans-serif' }}
        >
          <span>
            Find&nbsp;Us
            <span className="block w-8 h-0.5 bg-[#F85C70]" />
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
          Your go-to partner for unparalleled&nbsp;IT&nbsp;services
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
              <Link href={s.path} target='_blank'>
                <Part13Common {...s} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
