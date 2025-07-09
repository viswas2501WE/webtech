'use client'; // Needed because this component has hover effects + uses next/image

import Image from 'next/image';

const CommonButton = ({ children, className = '', ...props }) => {
  return (
    <button
      style={{ fontFamily: 'Roboto, sans-serif' }}
      className={`relative font-[500] overflow-hidden text-white min-w-40 h-13.5 rounded-[2rem] group flex justify-center cursor-pointer items-center bg-[#F85C70] z-0 ${className}`}
      {...props}
    >
      {/* Hover animation layer */}
      <div className="absolute inset-0 bg-[#FF3147] transform scale-y-0 origin-bottom transition-transform duration-500 ease-in-out group-hover:scale-y-100 z-0" />

      {/* Text + icon layer */}
      <div className="flex items-center justify-center relative z-10">
        <Image
          className="pr-2"
          src="https://espirevox.com/wp-content/uploads/2024/02/l-arrow-right.svg"
          alt="arrow"
          width={28}
          height={28}
        />
        <span>{children}</span>
      </div>
    </button>
  );
};

export default CommonButton;
