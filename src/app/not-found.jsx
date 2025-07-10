'use client';               // needed for useState + hover effects

import { useState } from 'react';
import Link from 'next/link';
import { HomeIcon } from 'lucide-react';
import Image from 'next/image';      // for optimisation (optional)

export default function NotFound() {
  /* ---------------- state for the animated button ---------------- */
  const [isHovered, setIsHovered]       = useState(false);
  const [shrinkToCircle, setShrink]     = useState(false);

  const d   = '8vh';      // button diameter
  const wLg = '26vh';     // button width before shrink
  const h   = '8vh';
  const side = '25vh';    // side‑bar width

  const enter = () => {
    setIsHovered(true);
    setTimeout(() => setShrink(true), 0);
  };
  const leave = () => {
    setIsHovered(false);
    setShrink(false);
  };

  return (
    <div
      className="h-screen flex justify-center relative"
      style={{ background: 'radial-gradient(circle at bottom, #fee1e1 , #1A96D5)' }}
    >
      {/* 404 illustration from /public/Local/404.png */}
      <Image
        src="/Local/404.png"
        alt="404 illustration"
        width={600}
        height={400}
        className="absolute top-[10vh] w-3/7 h-auto object-fill"
        priority
      />

      {/* CTA button */}
      <div className="flex justify-center items-center mt-[30%] my-[5%]">
        <div
          className="relative"
          style={{ width: `calc(${side}*2 + ${d})`, height: h }}
          onMouseEnter={enter}
          onMouseLeave={leave}
        >
          {/* left pink bar */}
          <div
            className="absolute bg-[#7dcdff] rounded-full transition-all duration-300 origin-right"
            style={{
              width: side,
              height: d,
              left: 18,
              transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
            }}
          />
          {/* right pink bar */}
          <div
            className="absolute bg-[#7dcdff] rounded-full transition-all duration-300 origin-left"
            style={{
              width: side,
              height: d,
              right: 18,
              transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
            }}
          />

          {/* main button */}
          <Link
            href="/"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          >
            <button
              className="
                bg-[#1A96D5] text-white border-2 flex justify-center items-center
                transition-all duration-200 overflow-hidden
              "
              style={{
                width: shrinkToCircle ? d : wLg,
                height: h,
                transform: isHovered && shrinkToCircle ? 'scale(1.5)' : 'scale(1)',
                borderRadius: '9999px',
              }}
            >
              {shrinkToCircle ? (
                <HomeIcon className="w-5 h-5" />
              ) : (
                <span className="text-sm font-[500] whitespace-nowrap px-4">Back to Home</span>
              )}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
