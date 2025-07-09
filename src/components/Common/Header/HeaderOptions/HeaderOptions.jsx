'use client';                                  // ✅ required – this file uses hooks

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function HeaderOptions() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [scrolledHalfway, setScrolledHalfway] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolledHalfway(window.scrollY > window.innerHeight / 2);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const baseClass =
    'hover:text-[#1A96D5] transition-colors duration-300 cursor-pointer py-12';
  const defaultTextColorClass =
    isHomePage || scrolledHalfway ? 'text-black' : 'text-white';
  const combinedBaseClass = `${baseClass} ${defaultTextColorClass}`;

  const checkIfAnyChildIsActive = (paths) =>
    paths.some((p) => pathname.startsWith(p));

  /* ---------- path arrays (unchanged) ---------- */
  const aboutUsPaths = ['/about-us', '/about-espire-vox', '/about-us/our-team'];

  const servicePaths = [
    '/service',
    '/our-services/espire-vox-services',
    '/our-services/web-development',
    '/our-services/mobile-app-development',
    '/our-services/e-commerce-solutions',
    '/our-services/design-solutions',
    '/our-services/digital-marketing',
    '/our-services/',
  ];

  /* ---------- nested‑submenu builder ---------- */
  const menus = {
    design: [
      { label: 'Graphics', path: '/our-services/design-solutions/Graphics' },
      { label: 'Logo Design', path: '/our-services/design-solutions/Logo-Design' },
      { label: 'Branding Elements', path: '/our-services/design-solutions/Branding-Elements' },
      { label: 'UI/UX', path: '/our-services/design-solutions/Website-Design' },
      { label: 'Mobile App Design', path: '/our-services/design-solutions/Mobile-App-Design' },
    ],
    marketing: [
      { label: 'SEO', path: '/our-services/digital-marketing/SEO' },
      { label: 'Social Media Marketing', path: '/our-services/digital-marketing/Social-Media-Marketing' },
      { label: 'Email Marketing', path: '/our-services/digital-marketing/Email-Marketing' },
      { label: 'PPC', path: '/our-services/digital-marketing/PPC' },
      { label: 'Amazon Marketing', path: '/our-services/digital-marketing/Amazon-Marketing' },
      { label: 'App Store Optimization', path: '/our-services/digital-marketing/App-Store-Optimization' },
    ],
    ecom: [
      { label: 'Big Commerce', path: '/our-services/e-commerce-solutions/BigCommerce' },
      { label: 'Shopify Development', path: '/our-services/e-commerce-solutions/Shopify-Development' },
    ],
    mobile: [
      { label: 'IOS Development', path: '/our-services/mobile-app-development/IOS-Development' },
      { label: 'Android Development', path: '/our-services/mobile-app-development/Android-Development' },
      { label: 'React Native', path: '/our-services/mobile-app-development/React-Native' },
      { label: 'Flutter', path: '/our-services/mobile-app-development/Flutter' },
      { label: 'IONIC', path: '/our-services/mobile-app-development/IONIC' },
    ],
    web: [
      { label: 'WordPress Development', path: '/our-services/Web-Development/WordPress-Development' },
      { label: 'Laravel Development', path: '/our-services/Web-Development/Laravel-Development' },
      { label: 'JAVA', path: '/our-services/Web-Development/JAVA' },
      { label: 'Python Development', path: '/our-services/Web-Development/Python-Development' },
      {
        label: 'Mernstack Development',
        path: '/our-services/Web-Development/Mern-Stack',
        subItem: [
          { label: 'Angular JS', path: '/our-services/Web-Development/Mern-Stack/Angular-Js' },
          { label: 'Node JS', path: '/our-services/Web-Development/Mern-Stack/Node-Js' },
          { label: 'React JS', path: '/our-services/Web-Development/Mern-Stack/React-Js' },
          { label: 'Vue JS', path: '/our-services/Web-Development/Mern-Stack/Vue-Js' },
        ],
      },
    ],
  };

  const renderSubMenu = (key) =>
    menus[key].map(({ label, path, subItem }) => {
      const active =
        pathname.startsWith(path) ||
        (label === 'Mernstack Development' &&
          ['/our-services/Web-Development/Mern-Stack/Angular-Js', '/our-services/Web-Development/Mern-Stack/Node-Js', '/our-services/Web-Development/Mern-Stack/React-Js', '/our-services/Web-Development/Mern-Stack/Vue-Js'].some((s) =>
            pathname.startsWith(s),
          ));

      return (
        <div key={label} className="relative group">
          <Link
            href={path}
            className={`block py-2 px-5 whitespace-nowrap ${
              active ? 'text-[#1A96D5]' : 'hover:text-[#1A96D5]'
            }`}
          >
            {label}
          </Link>

          {Array.isArray(subItem) && (
            <div
              className="
                absolute -top-2 right-57 w-57 ml-2 border-t-4 border-[#1A96D5]
                bg-white shadow-lg mt-2 py-5 z-50 font-[500] rounded-b-md
                transition-transform duration-700 ease-in-out origin-top
                scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100
                pointer-events-none group-hover:pointer-events-auto
              "
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              {subItem.map(({ label: innerLabel, path: innerPath }) => (
                <Link
                  key={innerLabel}
                  href={innerPath}
                  className={`block py-2 px-4 ${
                    pathname.startsWith(innerPath)
                      ? 'text-[#1A96D5]'
                      : 'hover:text-[#1A96D5]'
                  }`}
                >
                  {innerLabel}
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    });

  /* ------------- convenience path groups for “Our Services” highlighting ------------- */
  const groups = {
    web: [
      '/our-services/web-development',
      '/our-services/Web-Development/WordPress-Development',
      '/our-services/Web-Development/Laravel-Development',
      '/our-services/Web-Development/JAVA',
      '/our-services/Web-Development/Python-Development',
      '/our-services/Web-Development/Mern-Stack',
      '/our-services/Web-Development/Mern-Stack/Angular-Js',
      '/our-services/Web-Development/Mern-Stack/Node-Js',
      '/our-services/Web-Development/Mern-Stack/React-Js',
      '/our-services/Web-Development/Mern-Stack/Vue-Js',
    ],
    mobile: [
      '/our-services/mobile-app-development',
      '/our-services/mobile-app-development/IOS-Development',
      '/our-services/mobile-app-development/Android-Development',
      '/our-services/mobile-app-development/React-Native',
      '/our-services/mobile-app-development/Flutter',
      '/our-services/mobile-app-development/IONIC',
    ],
    ecom: [
      '/our-services/e-commerce-solutions',
      '/our-services/e-commerce-solutions/BigCommerce',
      '/our-services/e-commerce-solutions/Shopify-Development',
    ],
    design: [
      '/our-services/design-solutions',
      '/our-services/design-solutions/Graphics',
      '/our-services/design-solutions/Logo-Design',
      '/our-services/design-solutions/Branding-Elements',
      '/our-services/design-solutions/Website-Design',
      '/our-services/design-solutions/Mobile-App-Design',
    ],
    marketing: [
      '/our-services/digital-marketing',
      '/our-services/digital-marketing/SEO',
      '/our-services/digital-marketing/Social-Media-Marketing',
      '/our-services/digital-marketing/Email-Marketing',
      '/our-services/digital-marketing/PPC',
      '/our-services/digital-marketing/Amazon-Marketing',
      '/our-services/digital-marketing/App-Store-Optimization',
    ],
  };

  /* ------------- JSX ------------- */
  return (
    <div
      className="font-[500] flex flex-col xl:flex-row xl:justify-between xl:items-center h-full xl:h-[15vh]"
      style={{ fontFamily: 'Roboto, sans-serif', width: '91%' }}
    >
      {/* Home */}
      <Link href="/" className={pathname === '/' ? 'text-[#1A96D5] py-12' : combinedBaseClass}>
        Home
      </Link>

      {/* About Us dropdown */}
      <div
        className="relative"
        onMouseEnter={() => setOpenDropdown('about')}
        onMouseLeave={() => setOpenDropdown(null)}
      >
        <span
          className={
            checkIfAnyChildIsActive(aboutUsPaths)
              ? 'text-[#1A96D5] py-12 cursor-pointer'
              : combinedBaseClass
          }
        >
          About Us
        </span>

        {/* about submenu */}
        <div
          className={`
            absolute top-full left-0 w-57 bg-white shadow-lg border-t-4 border-[#1A96D5] out
            mt-7 p-5 z-50 font-[500] rounded-b-md transition-transform duration-700
            origin-top ${openDropdown === 'about' ? 'scale-y-100 opacity-100 pointer-events-auto' : 'scale-y-0 opacity-0 pointer-events-none'}
          `}
          style={{ fontFamily: 'Roboto, sans-serif' }}
        >
          <Link
            href="/about-us/About-Espire-Vox"
            className={`block py-2 ${
              pathname === '/about-us/About-Espire-Vox' ? 'text-[#1A96D5]' : 'hover:text-[#1A96D5]'
            }`}
          >
            About Espire Vox
          </Link>
          <Link
            href="/about-us/our-team"
            className={`block py-2 ${
              pathname === '/about-us/our-team' ? 'text-[#1A96D5]' : 'hover:text-[#1A96D5]'
            }`}
          >
            Our Team
          </Link>
        </div>
      </div>

      {/* Hire Developers */}
      <Link
        href="/hire-dev"
        className={pathname.startsWith('/hire-dev') ? 'text-[#1A96D5] py-12' : combinedBaseClass}
      >
        Hire Developers
      </Link>

      {/* Our Services mega dropdown */}
      <div
        className="relative"
        onMouseEnter={() => setOpenDropdown('service')}
        onMouseLeave={() => {
          setOpenDropdown(null);
          setOpenSubMenu(null);
        }}
      >
        <span
          className={
            checkIfAnyChildIsActive(servicePaths)
              ? 'text-[#1A96D5] cursor-pointer py-12'
              : combinedBaseClass
          }
        >
          Our Services
        </span>

        <div
          className={`
            absolute top-full left-0 w-57 bg-white shadow-lg border-t-4 border-[#1A96D5]
            mt-7 py-5 z-50 font-[500] rounded-b-md transition-transform duration-700
            origin-top ${openDropdown === 'service' ? 'scale-y-100 opacity-100 pointer-events-auto' : 'scale-y-0 opacity-0 pointer-events-none'}
          `}
          style={{ fontFamily: 'Roboto, sans-serif' }}
        >
          <Link
            href="/our-services/espire-vox-services"
            className={`block py-2 px-5 ${
              pathname.startsWith('/our-services/espire-vox-services')
                ? 'text-[#1A96D5]'
                : 'hover:text-[#1A96D5]'
            }`}
          >
            Espire Vox Services
          </Link>

          {[
            { label: 'Web Development', key: 'web', path: '/our-services/web-development' },
            { label: 'Mobile App Development', key: 'mobile', path: '/our-services/mobile-app-development' },
            { label: 'E‑commerce solutions', key: 'ecom', path: '/our-services/e-commerce-solutions' },
            { label: 'Design Solutions', key: 'design', path: '/our-services/design-solutions' },
            { label: 'Digital Marketing', key: 'marketing', path: '/our-services/digital-marketing' },
          ].map(({ label, key, path }) => (
            <div
              key={key}
              className="relative"
              onMouseEnter={() => setOpenSubMenu(key)}
              onMouseLeave={() => setOpenSubMenu(null)}
            >
              <Link
                href={path}
                className={`block py-2 px-5 ${
                  checkIfAnyChildIsActive(groups[key])
                    ? 'text-[#1A96D5]'
                    : 'hover:text-[#1A96D5]'
                }`}
              >
                {label}
              </Link>

              {/* nested submenu */}
              <div
                className={`
                  absolute -top-11 right-57 w-57 bg-white shadow-lg border-t-4 border-[#1A96D5]
                  mt-11 py-5 z-50 font-[500] rounded-b-md transition-transform duration-700
                  origin-top ${
                    openSubMenu === key ? 'scale-y-100 opacity-100 pointer-events-auto' : 'scale-y-0 opacity-0 pointer-events-none'
                  }
                `}
                style={{ fontFamily: 'Roboto, sans-serif' }}
              >
                {renderSubMenu(key)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* static links */}
      {[
        { label: 'Our Portfolio', path: '/our-portfolio' },
        { label: 'Career', path: '/career' },
        // { label: 'Blog', path: '/blog' },
        { label: 'Contact Us', path: '/contact-us' },
      ].map(({ label, path }) => (
        <Link
          key={path}
          href={path}
          className={pathname.startsWith(path) ? 'text-[#1A96D5] py-12' : combinedBaseClass}
        >
          {label}
        </Link>
      ))}
    </div>
  );
}

export default React.memo(HeaderOptions);
