'use client';

import AdminHeader from '@/components/Admin96@Charlie/Common/AdminHeaderFooter/AdminHeader/AdminHeader';
import AdminFooter from '@/components/Admin96@Charlie/Common/AdminHeaderFooter/AdminFooter/AdminFooter';
import VerticalBackground from '@/components/Common/Bg';
import ScrollToTop from '@/components/ScrollToTop';
import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation'; 
import { Toaster } from 'react-hot-toast';

export default function Admin({ children }) {
  
  const pathname = usePathname();

  const pathsWithoutHeaderFooter = [
    '/admin'
  ];

  const shouldHideHeaderFooter = pathsWithoutHeaderFooter.includes(pathname);

  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);
  

  useEffect(() => {
    if (!contentRef.current) return;

    const observer = new ResizeObserver((entries) => {
      if (entries[0]) {
        setHeight(entries[0].contentRect.height);
      }
    });

    observer.observe(contentRef.current);
    setHeight(contentRef.current.offsetHeight);

    return () => observer.disconnect();
  }, []);

  return (
    <div className='text-black relative min-h-screen flex flex-col'>
      <VerticalBackground observedHeight={height} />
      <Toaster position="bottom-center" reverseOrder={false} />

      {!shouldHideHeaderFooter && <AdminHeader />}
      <main ref={contentRef} className="relative z-10 flex-grow">
        {children}
      {!shouldHideHeaderFooter && <AdminFooter />}
      </main>


      <ScrollToTop />
    </div>
  );
}
