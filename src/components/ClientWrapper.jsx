'use client';

import { useEffect, useRef, useState } from 'react';
import VerticalBackground from '@/components/Common/Bg'; 
import Header from '@/components/Common/Header/Header';   
import Footer from '@/components/Common/Footer';          
import ScrollToTop from './ScrollToTop';
import { Toaster } from 'react-hot-toast';


export default function ClientWrapper({ children }) {
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
    <>
      <VerticalBackground observedHeight={height} />
      <Toaster position="top-right" reverseOrder={false} />

      <main ref={contentRef} className="relative z-10 min-h-screen">
      <Header />
        {children}
      <Footer />
      </main>
      <ScrollToTop/>

    </>
  );
}
