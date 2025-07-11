'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminHeaderOptionsMobile({ onClose }) {
  const pathname = usePathname();

  const adminNavLinks = [
    { label: 'Dashboard', path: '/admin@2096/dashboard' },
    { label: 'Hire Developers', path: '/admin@2096/dev-requests' },
    { label: 'Career', path: '/admin@2096/applicants' },
    { label: 'Contact Us', path: '/admin@2096/user-queries' },
    { label: 'SEO', path: '/admin@2096/seo-meta' },
    { label: 'Our Team', path: '/admin@2096/our-team-section' },
  ];

  useEffect(() => {
  }, [pathname]);

  return (
    <div
      className="font-[400] bg-white rounded-md p-4 flex flex-col h-screen"
      style={{ fontFamily: 'Roboto, sans-serif' }}
    >
      {/* --- Admin Nav Links --- */}
      <div className="mb-4 p-4 rounded-xl border border-gray-200">
        {adminNavLinks.map((item) => (
          <Link
            key={item.label}
            href={item.path}
            onClick={onClose} // Close the mobile menu when a link is clicked
            className={`
              flex items-center py-2 px-2 rounded-md text-sm transition-colors
              ${pathname.startsWith(item.path)
                ? 'text-[#1A96D5]'
                : 'text-black hover:text-[#1A96D5]'}
            `}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className="text-center text-sm text-gray-500 mt-auto pt-4"> {/* mt-auto pushes it to the bottom */}
        © 2025 Admin Panel — All Rights Reserved.
      </div>
    </div>
  );
}
