'use client';                 
import Link from 'next/link';   
import Image from 'next/image';

export default function Part8Common({
  icon,        
  title,
  discription,  
  id,          
}) {
  return (
    <div className="relative bg-white w-65 xs:w-70 sm:w-75 md:w-80 xl:w-85
                    ml-[5vw] xs:ml-[12vw] sm:ml-[15vw] md:ml-0 p-6 mr-15">
      {/* orange corner frame */}
      <div className="absolute top-0 right-0 h-full w-full">
        <div className="absolute right-[-10%] top-[7%] w-[10%] border-t-5 border-orange-500" />
        <div className="absolute right-[-10%] top-[7%] h-[80%] border-r-5 border-orange-500" />
        <div className="absolute bottom-[13%] right-[-10%] w-[20%] border-b-5 border-orange-500" />
      </div>

      <div className="relative flex flex-col justify-center items-center">
        {/* icon */}
        <div className="flex justify-center py-3">
          {/* Next’s <Image> optimises, but needs explicit size or "fill" */}
          <Image
            src={icon}
            alt={`${title} icon`}
            width={72}      /* ≈ 18 rem (tailwind w-18) */
            height={72}
            className="w-18"
          />
        </div>

        {/* title */}
        <h2
          className="w-fit text-center text-2xl py-2 font-[600] text-gray-900"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {title}
        </h2>

        {/* description */}
        <div
          className="text-gray-600 my-4 font-[400] text-center line-clamp-2"
          style={{ fontFamily: 'Roboto, sans-serif' }}
        >
          {discription}
        </div>

        {/* READ MORE link */}
        <Link
          href={`/our-services/espire-vox-services/${id}`}
          className="flex items-baseline transition-colors fill-[#FF8345]
                     hover:fill-[#0F285F] py-2 duration-300
                     text-[#0F285F] hover:text-[#FF8345]"
        >
          <span className="font-[600]" style={{ fontFamily: 'Roboto, sans-serif' }}>
            READ MORE
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" className="mx-2" viewBox="0 0 10 12">
            <path d="M6 0l6 10H0Z" transform="translate(10) rotate(90)" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
