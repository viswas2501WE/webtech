'use client';           
                    
import Link from 'next/link'; 
import Image from 'next/image';

export default function Part7Common({
  icon,         
  title,
  description,
  ReadMore,     
  image,        
}) {
  return (
    <div className="relative group w-full p-8 bg-white overflow-hidden hover:bg-black transition-colors duration-[700ms] ease-linear">

      <div
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-50 transform transition-transform duration-1000 group-hover:scale-115 bg-center bg-cover"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* ─── foreground content ─── */}
      <div className="relative z-10">
        {/* icon (already an <Image> from parent) */}
        <div className="text-[#1A96D5] hue-rotate-220 py-2">{icon}</div>

        {/* heading */}
        <h3
          className="text-2xl text-gray-900 font-[600] pt-4 transition-colors group-hover:text-white duration-400 ease-in-out"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {title}
        </h3>

        {/* description */}
        <div
          className="text-gray-700 leading-relaxed line-clamp-3 py-3 font-[400] transition-colors group-hover:text-white duration-400 ease-in-out"
          style={{ fontFamily: 'Roboto, sans-serif' }}
        >
          {description}
        </div>

        {/* READ MORE link */}
        <Link
          href={ReadMore}
          className="text-gray-900 leading-relaxed flex items-center py-3 font-[600] transition-colors group-hover:text-white duration-400 ease-in-out"
          style={{ fontFamily: 'Roboto, sans-serif' }}
        >
          READ MORE
          <svg xmlns="http://www.w3.org/2000/svg" width="37" height="10" className="mx-3" viewBox="0 0 37 10">
            <g transform="translate(-352 -742)">
              <path d="M5,0l5,8H0Z" transform="translate(389 742) rotate(90)" fill="currentColor" />
              <rect width="29" height="2" transform="translate(352 746)" fill="currentColor" />
            </g>
          </svg>
        </Link>
      </div>
    </div>
  );
}
