// components/Common/AdminHeaderFooter/AdminHeader/AdminHeaderOptions.jsx
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function AdminHeaderOptions() {
  const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
  

  const baseClass =
    'hover:text-[#FF3147] transition-colors duration-300 cursor-pointer py-12 px-4'; // Added px-4 for spacing
  const defaultTextColorClass = isScrolled? "text-black" : "text-white" // Admin header will always be on a white background

  const combinedBaseClass = `${baseClass} ${defaultTextColorClass}`;

  // Define admin navigation links
  const adminNavLinks = [
    { label: 'Dashboard', path: '/admin/dashboard' },
    { label: 'Hire Developers', path: '/admin/dev-requests' },
    { label: 'Career', path: '/admin/applicants' },
    { label: 'Contact Us', path: '/admin/user-queries' },
    { label: 'SEO', path: '/admin/seo-meta' },
    { label: 'Our Team', path: '/admin/our-team-section' },
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
              ? 'text-[#F85C70] py-12 px-4' // Added px-4 for spacing
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
