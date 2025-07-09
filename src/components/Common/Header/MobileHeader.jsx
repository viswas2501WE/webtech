'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HeaderOptionsMobile from '@/components/Common/Header/HeaderOptions/HeaderOptionsMobile';

export default function MobileHeader() {
  const [isDropOpen, setIsDropOpen] = useState(false);
  const menuRef     = useRef(null);

  /* ------------- touch‑swipe state ------------- */
  const [touchStartX, setTouchStartX]   = useState(0);
  const [touchCurrentX, setTouchCurrentX] = useState(0);

  const closeMobileMenu = () => setIsDropOpen(false);

  /* ------------- lock body scroll when menu open ------------- */
  useEffect(() => {
    document.body.style.overflow = isDropOpen ? 'hidden' : '';
    return () => (document.body.style.overflow = '');
  }, [isDropOpen]);

  /* ------------- close on outside click ------------- */
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
    if (isDropOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDropOpen]);

  /* ------------- touch handlers ------------- */
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchCurrentX(e.touches[0].clientX);
  };
  const handleTouchMove = (e) => setTouchCurrentX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    const deltaX = touchCurrentX - touchStartX;
    if (deltaX < -50) closeMobileMenu();          // swipe‑left dismiss
    setTouchStartX(0);
    setTouchCurrentX(0);
  };

  /* ------------- logo URL via env var ------------- */
  const logoSrc = `${process.env.NEXT_PUBLIC_IMG_url1}/espire-vox-logo.png`;

  return (
    <div className="fixed top-0 xl:hidden w-full z-[999]">
      {/* --- top bar --- */}
      <div
        className={`flex h-[6.5vh] z-[1001] justify-between relative px-3 ${
          isDropOpen ? 'shadow-none bg-none' : 'shadow-md bg-white'
        }`}
      >
        {/* logo */}
        <Link href="/" onClick={closeMobileMenu} className="flex items-center">
          <Image
            src={logoSrc}
            alt="Espire Vox Logo"
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
          aria-label="Toggle menu"
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

      {/* slide‑in menu */}
      <div
        ref={menuRef}
        className={`bg-white fixed top-0 left-0 z-[1001] h-screen w-[80vw] overflow-y-auto transform transition-transform duration-500 ${
          isDropOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ scrollbarWidth: 'none' }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <HeaderOptionsMobile onClose={closeMobileMenu} />
      </div>
    </div>
  );
}
