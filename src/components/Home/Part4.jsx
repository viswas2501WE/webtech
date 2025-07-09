'use client';                       // uses <Link>, icons, and CommonButton (client‑side)

import Link from 'next/link';
import { FaCheck } from 'react-icons/fa';

import CommonButton from '@/components/common/CommonButton';

export default function Part4() {
  /* base WordPress folder from .env.local */
  const base = process.env.NEXT_PUBLIC_IMG_url; // 2024/02

  return (
    <div className="relative w-full overflow-hidden">
      {/* background photo & dark overlay */}
      <img
        src="/Local/gradient-geometric-shapes-blue-background_573652-2480.jpg"
        alt=""
        className="absolute object-cover w-full h-full -scale-x-100 -z-50"
      />
      <span className="absolute inset-0 bg-blue-950 opacity-90 -z-40" />

      {/* floating animation asset (desktop only) */}
      <img
        src="/Animation/element_70.png"
        alt=""
        className="absolute top-[55%] right-[7%] hidden lg:block"
      />

      {/* ---------------------------------- main flex row ---------------------------------- */}
      <div className="flex flex-col lg:flex-row justify-between items-center px-[5%] py-[15%] lg:p-[5%] sm:p-[7%]">
        {/* --------------------------- left text column --------------------------- */}
        <div className="w-full lg:w-1/2 lg:pl-[6%]">

          <h4
            className="font-[600] text-[#1A96D5] text-lg"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            WE ARE SPECIALISTS IN E‑COMMERCE
          </h4>

          <h2
            className="font-[600] text-[5vh] lg:text-[6vh] text-white leading-tight mt-2"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            We Build Stores that Sell while you Sleep!
          </h2>

          <p
            className="font-[400] leading-6 lg:leading-7 py-3 lg:py-5 text-sm lg:text-base text-gray-200"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
           Unlock the path to business success with our expertise in building E-Commerce platforms. Seamlessly integrate cutting-edge technology and user-friendly interfaces to elevate your online presence. From vigorous item indexes to get installment passages, we tailor arrangements that drive deals. Join us in shaping a thriving online venture, where success meets innovation and customer satisfaction is paramount. Embrace the fate of trade with our custom fitted Web based business arrangements, making your business a computerized win.
          </p>

          {/* bullet list */}
          <div
            className="font-[400] flex flex-col sm:flex-row py-3"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            <BulletList items={['Shopify', 'BigCommerce']} />
            <BulletList items={['WooCommerce', 'Custom Platforms']} />
          </div>

          {/* CTA button */}
          <div className="py-2">
            <Link href="/contact-us">
              <CommonButton className="w-43">CONTACT US</CommonButton>
            </Link>
          </div>
        </div>

        {/* --------------------------- right clipped image --------------------------- */}
        <div className="w-full lg:w-[42%] relative max-w-sm lg:max-w-xl mx-auto mt-8 lg:mt-0 px-[2%]">
          {/* red accent behind image */}
          <div className="absolute top-0 right-0 w-[75%] h-[80%] bg-[#1A96D5] hidden lg:flex z-0" />

          {/* clipped image container */}
          <div
            className="relative z-10 lg:top-10 lg:right-5 overflow-hidden"
            style={{ clipPath: 'polygon(20% 0%,100% 0%,100% 85%,80% 100%,0% 100%,0% 15%)' }}
          >
            <img
              src={`${base}/business-colleagues-shaking-hands.jpg`}
              alt="E‑commerce partnership"
              className="w-full h-auto object-cover"
            />
            <img
              src="/Animation/faq-pattern-1.png"
              alt=""
              className="absolute top-[20%] -left-[15%] w-[97vh] hidden lg:block"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function BulletList({ items }) {
  return (
    <div className="w-full xs:w-1/2">
      {items.map((label) => (
        <div key={label} className="flex items-center py-2">
          <div className="h-[5vh] w-[5vh] lg:h-[7vh] lg:w-[7vh] bg-[#e1e7f8] flex justify-center items-center rounded-full text-[#1A96D5] text-xl lg:text-2xl mr-2.5">
            <FaCheck />
          </div>
          <span className="text-base lg:text-lg text-white">{label}</span>
        </div>
      ))}
    </div>
  );
}
