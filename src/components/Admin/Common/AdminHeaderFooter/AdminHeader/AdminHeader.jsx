'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowUp, FaTimes } from 'react-icons/fa'; 
import AdminHeaderOptions from './AdminHeaderOptions'; 
import AdminHeaderOptionsMobile from './AdminHeaderOptionsMobile'; 
import { motion } from 'framer-motion';

const AdminHeader = () => {
  const [isDropOpen, setIsDropOpen] = useState(false); 
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollTop, setScrollTop] = useState(false);
  const menuRef = useRef(null); 

  // Close mobile menu handler
  const closeMobileMenu = () => setIsDropOpen(false);

 
  useEffect(() => {
    document.body.style.overflow = isDropOpen ? 'hidden' : '';
    return () => (document.body.style.overflow = '');
  }, [isDropOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !e.target.closest('.hamburger-button')
      ) {
        setIsDropOpen(false);
      }
    };
    if (isDropOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDropOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  

  const logoUrl = `${process.env.NEXT_PUBLIC_IMG_url1}/espire-vox-logo.png`;


  return (
    <div className="relative text-black">
      <div
        className={`top-0 xl:flex hidden left-0 w-full z-50 justify-center transition-all duration-700 ease-in-out ${
          isScrolled ? 'fixed bg-white shadow-lg text-black' : 'absolute bg-transparent pt-[2vh] text-white'
        }`}
        style={{ height: '11vh' }} // Consistent height
      >
        <div className="flex justify-between items-center" style={{ height: '11vh', width: '75%' }}>
          {/* Logo */}
          <div style={{ width: '15.4%' }}>
            <Link href="/admin/dashboard"> {/* Link to admin dashboard */}
              <Image
                width={200}
                height={60}
                src={logoUrl}
                alt="Admin Logo"
                priority
              />
            </Link>
          </div>

          {/* Admin Header Options */}
          <div className="flex justify-end items-center" style={{ width: '74.5%', height: '15vh' }}>
            <AdminHeaderOptions />
          </div>
        </div>
      </div>

      <div className="fixed top-0 xl:hidden w-full z-[999]">
        {/* --- top bar --- */}
        <div
          className={`flex h-[6.5vh] z-[1001] justify-between relative px-3 ${
            isDropOpen ? 'shadow-none bg-none' : 'shadow-md bg-white'
          }`}
        >
          {/* logo */}
          <Link href="/admin/dashboard" onClick={closeMobileMenu} className="flex items-center">
            <Image
              src={logoUrl}
              alt="Admin Logo"
              width={160}
              height={45}
              priority
              className="w-[15vh] h-auto"
            />
          </Link>

          {/* hamburger */}
          <button
            onClick={() => setIsDropOpen(!isDropOpen)}
            className="w-15 h-full flex justify-end items-center hamburger-button z-[1002]"
            aria-label="Toggle admin menu"
          >
            <div className="relative w-7 h-4">
              <span
                className={`absolute right-0 h-0.5 w-full rounded transition-transform duration-300 ${
                  isDropOpen ? 'rotate-45 top-1.5 bg-white' : 'top-0 bg-gray-800'
                }`}
              />
              <span
                className={`absolute right-0 h-0.5 w-6 rounded transition-opacity duration-300 ${
                  isDropOpen ? 'opacity-0' : 'top-1.5 bg-gray-800'
                }`}
              />
              <span
                className={`absolute right-0 h-0.5 w-6 rounded transition-opacity duration-300 ${
                  isDropOpen ? 'opacity-0' : 'top-3 bg-gray-800'
                }`}
              />
              <span
                className={`absolute right-0 h-0.5 w-full rounded transition-transform duration-300 ${
                  isDropOpen ? '-rotate-45 top-1.5 bg-white' : 'top-4.5 bg-gray-800'
                }`}
              />
            </div>
          </button>
        </div>

        {/* overlay */}
        {isDropOpen && (
          <div
            className="fixed inset-0 bg-black/70 z-[1000]"
            onClick={closeMobileMenu}
          />
        )}

        {scrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-7 right-7 z-50 group overflow-hidden w-10 h-10 rounded-sm bg-[#1A96D5] flex justify-center items-center transition-all duration-700 ease-in-out"
            aria-label="Scroll to top"
            style={{ fontFamily: "Roboto, sans-serif" }}
            onMouseEnter={handleHover}
          >
            <div className="absolute inset-0 bg-[#1A96D5] z-0 transform scale-y-0 origin-bottom transition-transform duration-500 ease-in-out group-hover:scale-y-100" />
            <motion.div className="relative z-10 text-white" animate={controls} initial={{ y: 0 }}>
              <FaArrowUp className="transition-transform duration-300" />
            </motion.div>
          </button>
        )}
        {/* slide-in menu */}
        <div
          ref={menuRef}
          className={`bg-white fixed top-0 left-0 z-[1001] h-screen w-[80vw] overflow-y-auto transform transition-transform duration-500 ${
            isDropOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          style={{ scrollbarWidth: 'none' }}
        >
          <div className="flex justify-between items-center mb-4 p-4">
            <Link href="/admin/dashboard" onClick={closeMobileMenu} className="w-fit">
              <Image
                src={logoUrl}
                alt="Admin Logo"
                width={140}
                height={40}
                priority
              />
            </Link>
            <button
              onClick={closeMobileMenu}
              className="flex justify-center items-center w-8 h-8 rounded-full bg-[#1A96D5] text-white"
              aria-label="Close menu"
            >
              <FaTimes className="h-5 w-5" />
            </button>
          </div>
          <AdminHeaderOptionsMobile onClose={closeMobileMenu} />
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
