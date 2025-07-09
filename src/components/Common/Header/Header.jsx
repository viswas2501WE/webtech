'use client';

import { useEffect, useRef, useState } from "react";
import { FaArrowUp, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import HeaderOptions from "./HeaderOptions/HeaderOptions";
import HomeSidebar from "./HomeSidebar";
import MobileHeader from "./MobileHeader";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollTop, setScrollTop] = useState(false);
  const sidebarRef = useRef();
  const buttonRef = useRef();
  const controls = useAnimation();

  const handleHover = async () => {
    await controls.start({ y: -20, transition: { duration: 0.2 } });
    controls.set({ y: 20 });
    await controls.start({ y: 0, transition: { duration: 0.2 } });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight / 2;
      const scrolledY = window.scrollY;

      setIsScrolled(scrolledY > scrollThreshold);
      setScrollTop(scrolledY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoUrl = `${process.env.NEXT_PUBLIC_IMG_url1}/espire-vox-logo.png`;

  return (
    <div className="relative text-black">
      <div
        className={`top-0 xl:flex hidden left-0 w-full z-50 justify-center transition-all duration-700 ease-in-out ${
          isScrolled ? "fixed bg-white shadow-lg" : "absolute bg-transparent pt-[2vh]"
        }`}
        style={{ height: "11vh" }}
      >
        <div className="flex justify-between items-center" style={{ height: "11vh", width: "75%" }}>
          {/* Logo */}
          <div style={{ width: "15.4%" }}>
            <Link href="/">
              <Image
                width={200}
                height={60}
                src={logoUrl}
                alt="Espire Vox Logo"
                priority
              />
            </Link>
          </div>

          {/* Header Options & Hamburger */}
          <div className="flex justify-between items-center" style={{ width: "74.5%", height: "15vh" }}>
            <HeaderOptions />

            <div className="z-50" style={{ width: "7%" }}>
              <button
                ref={buttonRef}
                onClick={() => setIsOpen(!isOpen)}
                className="w-11 h-11 rounded-full bg-white shadow-md flex justify-center items-center transition-all duration-300 ease-in-out cursor-pointer"
                style={{ boxShadow: "revert-layer" }}
              >
                <div className="relative w-5 h-4">
                  <span className={`absolute left-0 h-0.5 w-full bg-pink-500 rounded transition-transform duration-300 ease-in-out ${isOpen ? "rotate-45 top-1.5" : "top-0"}`}></span>
                  <span className={`absolute left-0 h-0.5 w-full bg-pink-500 rounded transition-all duration-300 ease-in-out ${isOpen ? "opacity-0" : "top-1.5"}`}></span>
                  <span className={`absolute left-0 h-0.5 w-full bg-pink-500 rounded transition-transform duration-300 ease-in-out ${isOpen ? "-rotate-45 bottom-2" : "bottom-0"}`}></span>
                </div>
              </button>

              {/* Sidebar */}
              <div
                ref={sidebarRef}
                className={`fixed top-0 left-0 h-full w-40/155 p-6 bg-white shadow-2xl overflow-auto transform transition-transform duration-500 ease-in-out z-50 ${
                  isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
                style={{ scrollbarWidth: "none" }}
              >
                <div className="flex justify-between justify-self-center items-center py-6" style={{ width: "84%" }}>
                  <Link href="/" className="w-fit">
                    <Image
                      src={logoUrl}
                      alt="Espire Vox Logo"
                      width={170}
                      height={45}
                      priority
                    />
                  </Link>

                  <div
                    className="flex justify-center items-center cursor-pointer h-[3vw]  bg-[#F85C70] rounded-full"
                    style={{ width: "16%" }}
                    onClick={() => setIsOpen(false)}
                  >
                    <FaTimes className="text-white h-5" />
                  </div>
                </div>
                <HomeSidebar />
              </div>
            </div>
          </div>
        </div>

        {scrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-7 right-7 z-50 group overflow-hidden w-10 h-10 rounded-sm bg-[#F85C70] flex justify-center items-center transition-all duration-700 ease-in-out"
            aria-label="Scroll to top"
            style={{ fontFamily: "Roboto, sans-serif" }}
            onMouseEnter={handleHover}
          >
            <div className="absolute inset-0 bg-[#FF3147] z-0 transform scale-y-0 origin-bottom transition-transform duration-500 ease-in-out group-hover:scale-y-100" />
            <motion.div className="relative z-10 text-white" animate={controls} initial={{ y: 0 }}>
              <FaArrowUp className="transition-transform duration-300" />
            </motion.div>
          </button>
        )}
      </div>
      <MobileHeader />
    </div>
  );
};

export default Header;
