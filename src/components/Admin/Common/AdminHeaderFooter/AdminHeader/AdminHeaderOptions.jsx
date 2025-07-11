// components/Common/AdminHeaderFooter/AdminHeader/AdminHeaderOptions.jsx
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function AdminHeaderOptions() {
  const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
  

  const baseClass =
    'hover:text-[#1A96D5] transition-colors duration-300 cursor-pointer py-12 px-4'; // Added px-4 for spacing
  const defaultTextColorClass = isScrolled? "text-black" : "text-white" // Admin header will always be on a white background

  const combinedBaseClass = `${baseClass} ${defaultTextColorClass}`;

  // Define admin navigation links
  const adminNavLinks = [
    { label: 'Dashboard', path: '/admin@2096/dashboard' },
    { label: 'Hire Developers', path: '/admin@2096/dev-requests' },
    { label: 'Career', path: '/admin@2096/applicants' },
    { label: 'Contact Us', path: '/admin@2096/user-queries' },
    { label: 'SEO', path: '/admin@2096/seo-meta' },
    { label: 'Our Team', path: '/admin@2096/our-team-section' },
  ];

   useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <div
      className="font-[500] flex justify-between items-center h-full"
      style={{ fontFamily: 'Roboto, sans-serif', width: '100%' }} // Adjusted width for flex distribution
    >
      {adminNavLinks.map(({ label, path }) => (
        <Link
          key={path}
          href={path}
          className={
            pathname.startsWith(path)
              ? 'text-[#1A96D5] py-12 px-4' // Added px-4 for spacing
              : combinedBaseClass
          }
        >
          {label}
        </Link>
      ))}
    </div>
  );
}

export default AdminHeaderOptions; // Changed to direct default export
