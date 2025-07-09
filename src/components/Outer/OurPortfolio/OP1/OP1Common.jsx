'use client';                                               

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';                              
import Image from 'next/image';                           

export function ImageFilterNav({ options, activeFilter, onFilterChange }) {
  return (
    <nav className="mb-8" style={{ fontFamily: 'Roboto, sans-serif' }}>
      <ul className="flex flex-wrap justify-center gap-2 sm:gap-4 p-2">
        {options.map((option) => (
          <li key={option.value}>
            <button
              onClick={() => onFilterChange(option.value)}
              className={`
                px-4 py-2 text-sm sm:text-base font-[600] transition-all
                cursor-pointer hover:text-[#F85C70] duration-300 ease-in-out
                ${activeFilter === option.value ? 'text-[#F85C70]' : 'text-black'}
              `}
            >
              {option.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function ImageGrid({ images }) {
  return (
    <div className="
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3
        gap-4 sm:gap-6 max-w-screen-xl px-4 lg:max-w-screen-2xl
        mx-[0vh] lg:mx-[12vh] xl:mx-[17vh]
      ">
      {images.length ? (
        images.map((image) => <GalleryImage key={image.id} image={image} />)
      ) : (
        <p className="col-span-full text-center text-gray-600 text-lg py-8">
          No images found for this category.
        </p>
      )}
    </div>
  );
}

export function GalleryImage({ image }) {
  const [ref, inView] = useInView({ threshold: 0.5 });

  const itemVariants = {
    hidden:  { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div className="
        relative w-full h-auto md:h-[51vh] pb-[100%] group overflow-hidden
        shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform
      ">
     
      <Image
        src={image.src}         
        alt={image.alt}
        fill                        
        sizes="(max-width: 768px) 100vw, 33vw"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300"
        onError={(e) => {
         
          e.target.src = 'https://placehold.co/400x400/CCCCCC/333333?text=Image+Error';
        }}
      />

      {/* Sliding text panel */}
      <div className="
          absolute z-10 h-1/2 bottom-0 inset-x-0 transition-all ease-in-out duration-500
          transform translate-y-0 group-hover:-translate-y-full
        ">
        <div className="text-white absolute top-[45%] w-full p-4 duration-500">
   
          <Link href={`/our-portfolio/${image.id}`}>
            <h1 className="
                text-2xl md:text-[3xl]  xl:text-[4vh] font-[700] pb-[2vh]
                transition-colors duration-300 ease-in-out
              ">
              {image.title}
            </h1>
          </Link>

          <motion.div
            ref={ref}
            variants={itemVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            data-animate-on-mobile
          >
            <h2
              className="text-md font-[600] pb-[2vh]"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {image.subtitle}
            </h2>
            <div className="leading-relaxed">{image.content}</div>

            <Link
              href={`/our-portfolio/${image.id}`}
              className="
                text-gray-900 leading-relaxed flex items-center py-3 line-clamp-3
                font-[600] transition-colors group group-hover:text-white
                duration-400 ease-in-out
              "
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              READ MORE
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="37" height="10" className="mx-3" viewBox="0 0 37 10"
              >
                <g transform="translate(-352 -742)">
                  <path d="M5,0l5,8H0Z" transform="translate(389 742) rotate(90)" fill="currentColor" />
                  <rect width="29" height="2" transform="translate(352 746)" fill="currentColor" />
                </g>
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="
            absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent
            transition-transform duration-500 ease-in-out
            transform translate-y-[40%] group-hover:translate-y-0
          " />
        <div className="
            absolute inset-0 bg-gradient-to-t from-red-500/60 via-red-800/50 to-black/40
            opacity-0 group-hover:opacity-100
            transition-opacity duration-500 ease-in-out
          " />
      </div>
    </div>
  );
}
