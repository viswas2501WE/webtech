'use client';                                                   // ← required for hooks & DOM use

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

export default function HeaderOptionsMobile({ onClose }) {
  /* ------------------------------------------------------------------ */
  /* 1️⃣  ROUTING STATE (Next.js replacement for useLocation / NavLink)  */
  /* ------------------------------------------------------------------ */
  const pathname = usePathname();

  /* main UI state */
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubMenu, setOpenSubMenu]   = useState(null);
  const [openMern, setOpenMern]         = useState(false);

  /* reset menus on route change */
  useEffect(() => {
    setOpenDropdown(null);
    setOpenSubMenu(null);
    setOpenMern(false);
  }, [pathname]);

  /* ------------------------------------------------------------------ */
  /* 2️⃣  DATA DEFINITIONS (same as your React version)                  */
  /* ------------------------------------------------------------------ */
  const subMenus = {
    design: [
      { label: 'Graphics',             path: '/our-services/design-solutions/Graphics' },
      { label: 'Logo Design',          path: '/our-services/design-solutions/Logo-Design' },
      { label: 'Branding Elements',    path: '/our-services/design-solutions/Branding-Elements' },
      { label: 'UI/UX',                path: '/our-services/design-solutions/Website-Design' },
      { label: 'Mobile App Design',    path: '/our-services/design-solutions/Mobile-App-Design' },
    ],
    marketing: [
      { label: 'SEO',                  path: '/our-services/digital-marketing/SEO' },
      { label: 'Social Media Marketing', path: '/our-services/digital-marketing/Social-Media-Marketing' },
      { label: 'Email Marketing',      path: '/our-services/digital-marketing/Email-Marketing' },
      { label: 'PPC',                  path: '/our-services/digital-marketing/PPC' },
      { label: 'Amazon Marketing',     path: '/our-services/digital-marketing/Amazon-Marketing' },
      { label: 'App Store Optimization', path: '/our-services/digital-marketing/App-Store-Optimization' },
    ],
    ecom: [
      { label: 'BigCommerce',          path: '/our-services/e-commerce-solutions/BigCommerce' },
      { label: 'Shopify Development',  path: '/our-services/e-commerce-solutions/Shopify-Development' },
    ],
    mobile: [
      { label: 'IOS Development',      path: '/our-services/mobile-app-development/IOS-Development' },
      { label: 'Android Development',  path: '/our-services/mobile-app-development/Android-Development' },
      { label: 'React Native',         path: '/our-services/mobile-app-development/React-Native' },
      { label: 'Flutter',              path: '/our-services/mobile-app-development/Flutter' },
      { label: 'IONIC',                path: '/our-services/mobile-app-development/IONIC' },
    ],
    web: [
      { label: 'WordPress Development', path: '/our-services/Web-Development/WordPress-Development' },
      { label: 'Laravel Development',   path: '/our-services/Web-Development/Laravel-Development' },
      { label: 'JAVA',                  path: '/our-services/Web-Development/JAVA' },
      { label: 'Python Development',    path: '/our-services/Web-Development/Python-Development' },
      {
        label: 'Mernstack Development',
        path:  '/our-services/Web-Development/Mern-Stack',
        subItem: [
          { label: 'Angular JS', path: '/our-services/Web-Development/Mern-Stack/Angular-Js' },
          { label: 'Node JS',    path: '/our-services/Web-Development/Mern-Stack/Node-Js' },
          { label: 'React JS',   path: '/our-services/Web-Development/Mern-Stack/React-Js' },
          { label: 'Vue JS',     path: '/our-services/Web-Development/Mern-Stack/Vue-Js' },
        ],
      },
    ],
  };

  /* navItems + socials (unchanged except Link instead of NavLink) */
  const navGroups = [
    {
      group: 'top',
      items: [
        { label: 'Home',        path: '/',                icon: '/Local/home.png' },
        { label: 'Contact Us',  path: '/contact-us',      icon: '/Local/contact.png' },
        // { label: 'Blog',        path: '/blog',            icon: '/Local/blog.png' },
      ],
    },
    {
      group: 'middle',
      items: [
        {
          label: 'Our Services',
          key:   'service',
          icon:  '/Local/service.png',
          dropdown: [
            { label: 'Espire Vox Services', path: '/our-services/espire-vox-services' },
            { label: 'Web Development',        key: 'web' },
            { label: 'Mobile App Development', key: 'mobile' },
            { label: 'E‑Commerce Solutions',   key: 'ecom' },
            { label: 'Design Solutions',       key: 'design' },
            { label: 'Digital Marketing',      key: 'marketing' },
          ],
        },
        { label: 'Our Portfolio', path: '/our-portfolio', icon: '/Local/portfolio.png' },
        { label: 'Hire Developers', path: '/hire-dev',    icon: '/Local/hire.png' },
      ],
    },
    {
      group: 'bottom',
      items: [
        {
          label: 'About Us',
          key:   'about',
          icon:  '/Local/about.png',
          dropdown: [
            { label: 'About Espire Vox', path: '/about-us/About-Espire-Vox' },
            { label: 'Our Team',         path: '/about-us/our-team' },
          ],
        },
        { label: 'Career', path: '/career', icon: '/Local/career.png' },
      ],
    },
  ];

  const socials = [
    { name: 'Instagram', url: 'https://www.instagram.com/',  icon: '/Local/insta.png' },
    { name: 'Facebook',  url: 'https://www.facebook.com/',   icon: '/Local/fb.png' },
    { name: 'LinkedIn',  url: 'https://www.linkedin.com/',   icon: '/Local/in.png' },
    { name: 'Dribbble',  url: 'https://dribbble.com/',       icon: '/Local/dribble.png' },
    { name: 'Behance',   url: 'https://www.behance.net/',    icon: '/Local/be.png' },
  ];

  const childActive = (items) =>
    items.some((it) => {
      if (it.path && pathname.startsWith(it.path)) return true;
      if (it.key && subMenus[it.key])
        return subMenus[it.key].some((inner) => pathname.startsWith(inner.path));
      return false;
    });

  const toggleDropdown = (key) =>
    setOpenDropdown((prev) => (prev === key ? null : key));

  const toggleSubMenu = (key) =>
    setOpenSubMenu((prev) => (prev === key ? null : key));

  /* ------------------------------------------------------------------ */
  /* 4️⃣  RENDER                                                         */
  /* ------------------------------------------------------------------ */
  return (
    <div
      className="font-[400] bg-white rounded-md p-4 flex flex-col h-full"
      style={{ fontFamily: 'Roboto, sans-serif' }}
    >
      {/* --- logo --- */}
      <div className="flex justify-between items-center mb-4">
        <div className="m-[1.5vw]">
          <img
            src={`${process.env.NEXT_PUBLIC_IMG_url1}/espire-vox-logo.png`}
            alt="Espire Vox Logo"
            width={140}
            height={40}
          />
        </div>
      </div>

      {/* --- nav groups --- */}
      {navGroups.map((grp, idx) => (
        <div
          key={grp.group}
          className={`
            mb-4 p-4 rounded-xl border border-gray-200
            ${idx === 0 ? 'flex flex-row flex-wrap justify-around' : ''}
          `}
        >
{grp.items.map((item) => {
  if (!item.dropdown) {
    return (
      <Link
        key={item.label}
        href={item.path}
        onClick={onClose}
        className={`
          ${grp.group === 'top' 
            ? 'flex flex-col items-center w-[30%] py-3 text-center' 
            : 'flex items-center py-2 px-2'}
          rounded-md text-sm transition-colors
          ${pathname.startsWith(item.path)
            ? 'text-[#F85C70]'
            : 'text-black hover:text-[#F85C70]'}
        `}
      >
        {item.icon && (
          <img
            src={item.icon}
            alt={item.label}
            className={grp.group === 'top'
              ? 'w-[3.5vh] h-[3.5vh] mb-2'
              : 'w-[2.5vh] h-[2.5vh] mr-2'}
          />
        )}
        <span>{item.label}</span>
      </Link>
    );
  }

            /* dropdown parent */
            const activeParent = childActive(item.dropdown);

            return (
              <div key={item.label}>
                <div
                  className={`
                    flex items-center justify-between py-2 px-2 cursor-pointer transition-colors
                    ${activeParent ? 'text-[#F85C70]' : 'text-black hover:text-[#F85C70]'}
                  `}
                  onClick={() => toggleDropdown(item.key)}
                >
                  {item.icon && (
                    <img
                      src={item.icon}
                      alt={item.label}
                      className="w-[3vh] h-[3vh] mr-2 -ml-1"
                    />
                  )}
                  <span className="flex-grow">{item.label}</span>
                  <ChevronRightIcon
                    className={`h-5 w-5 transition-transform duration-700 ${
                      openDropdown === item.key ? 'rotate-90 text-blue-500' : 'rotate-0 text-gray-400'
                    }`}
                  />
                </div>

                {/* dropdown content */}
                <div
                  className={`
                    overflow-hidden transition-all duration-700 px-6
                    ${openDropdown === item.key ? 'max-h-[900px] opacity-100' : 'max-h-0 opacity-0'}
                  `}
                >
                  {item.dropdown.map((sub) => {
                    /* sub with further submenu */
                    if (sub.key) {
                      const activeSub =
                        pathname.startsWith(`/${sub.key}`) || (sub.key === 'web' && openMern);
                      return (
                        <div key={sub.label}>
                          <div
                            className={`
                              flex items-center justify-between py-2 px-2 text-sm cursor-pointer transition-colors
                              ${activeSub ? 'text-[#F85C70]' : 'text-black hover:text-[#F85C70]'}
                            `}
                            onClick={() =>
                              sub.label === 'Mernstack Development'
                                ? setOpenMern((s) => !s)
                                : toggleSubMenu(sub.key)
                            }
                          >
                            <span className="flex-grow">{sub.label}</span>
                            <ChevronRightIcon
                              className={`h-5 w-5 transition-transform duration-700 ${
                                (openSubMenu === sub.key ||
                                  (sub.key === 'web' && openMern))
                                  ? 'rotate-90 text-blue-500'
                                  : 'rotate-0 text-gray-400'
                              }`}
                            />
                          </div>

                          {/* nested submenu */}
                          <div
                            className={`
                              overflow-hidden transition-all duration-700
                              ${openSubMenu === sub.key || (sub.key === 'web' && openMern)
                                ? 'max-h-[640px]'
                                : 'max-h-0'}
                            `}
                          >
                            {subMenus[sub.key] &&
  subMenus[sub.key].map((inner) => {
    const hasSubItems = Array.isArray(inner.subItem);
    const isMernstack = inner.label === 'Mernstack Development';

    return (
      <div key={inner.label}>
        {/* Mernstack or normal item */}
        <div
          className={`flex items-center justify-between py-2 px-2 text-sm cursor-pointer transition-colors
            ${pathname.startsWith(inner.path) || (isMernstack && openMern) ? 'text-[#F85C70]' : 'text-black hover:text-[#F85C70]'}
          `}
          onClick={() => {
            if (hasSubItems && isMernstack) {
              setOpenMern((prev) => !prev);
            } else {
              onClose();
            }
          }}
        >
          <Link
            href={inner.path}
            onClick={(e) => {
              if (hasSubItems && isMernstack) e.preventDefault();
              else onClose();
            }}
            className="flex-grow"
          >
            {inner.label}
          </Link>
          {hasSubItems && isMernstack && (
            <ChevronRightIcon
              className={`h-5 w-5 transition-transform duration-700 ${
                openMern ? 'rotate-90 text-blue-500' : 'rotate-0 text-gray-400'
              }`}
            />
          )}
        </div>

        {/* Show subItem only for Mernstack */}
        {hasSubItems && isMernstack && (
          <div
            className={`overflow-hidden transition-all duration-700 ${
              openMern ? 'max-h-[600px]' : 'max-h-0'
            }`}
          >
            {inner.subItem.map((subInner) => (
              <Link
                key={subInner.label}
                href={subInner.path}
                onClick={onClose}
                className={`block py-2 px-8 text-sm ${
                  pathname.startsWith(subInner.path)
                    ? 'text-[#F85C70]'
                    : 'text-black hover:text-[#F85C70]'
                }`}
              >
                {subInner.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  })}

                          </div>
                        </div>
                      );
                    }

                    /* simple link in dropdown */
                    return (
                      <Link
                        key={sub.label}
                        href={sub.path}
                        onClick={onClose}
                        className={`
                          block py-2 px-2 text-sm transition-colors
                          ${
                            pathname.startsWith(sub.path)
                              ? 'text-[#F85C70]'
                              : 'text-black hover:text-[#F85C70]'
                          }
                        `}
                      >
                        {sub.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      ))}

      {/* --- socials --- */}
      <div className="mb-4 p-4 rounded-xl border border-gray-200">
        {socials.map((s) => (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center py-2 px-2 transition-colors text-black hover:text-[#F85C70]"
          >
            <img src={s.icon} alt={s.name} className="w-[2.5vh] h-[2.5vh] mr-3" />
            <span>{s.name}</span>
          </a>
        ))}
      </div>

      {/* --- footer --- */}
      <div className="text-center text-sm text-gray-500 mt-4">
        © 2025 Espire Vox — All Rights Reserved.
      </div>
    </div>
  );
}
