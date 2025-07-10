'use client';               

import { usePathname } from 'next/navigation';
import Image from 'next/image';           

export const labelMap = {
  '/': 'Home',
    '/about-us': 'About Us',
    '/hire-dev': 'Hire Developer',
    '/our-services': 'Our Services',
    '/our-portfolio': 'Our Portfolio',
    '/career': 'Career',
    '/blog': 'Blog',
    '/contact-us': 'Contact Us',
    
    '/admin/applicants': 'Career ',
    '/admin/applicants': 'Career ',

    '/our-services/Webtech-services/Web-Design-And-Development': 'Web Design And Development',
    '/our-services/Webtech-services/SEO-And-Digital-Marketing': 'SEO And Digital Marketing',
    '/our-services/Webtech-services/Hire-Dedicated-Developers': 'Hire Dedicated Developers',
    '/our-services/Webtech-services/Customized-Solutions': 'Customized Solutions',

    '/about-us/About-Webtech': 'About Webtech Evolution',
    '/about-us/our-team': 'Our Team',

    '/our-services/Webtech-services': 'Webtech Evolution Services',
    '/our-services/web-development': 'Web Development',
    
    '/our-services/Web-Development/WordPress-Development': 'WordPress Development',
    '/our-services/Web-Development/Laravel-Development': 'Laravel Development',
    '/our-services/Web-Development/JAVA': 'JAVA',
    '/our-services/Web-Development/Python-Development': 'Python Development',
    '/our-services/Web-Development/Mern-Stack': 'Mernstack Development',
    '/our-services/Webtech-services/WordPress-Development': 'WordPress Development',
    '/our-services/Webtech-services/Laravel-Development': 'Laravel Development',
    '/our-services/Webtech-services/JAVA': 'JAVA',
    '/our-services/Webtech-services/Python-Development': 'Python Development',
    '/our-services/Webtech-services/Mern-Stack': 'Mernstack Development',

    '/our-services/Web-Development/Mern-Stack/Angular-Js': 'Angular JS',
    '/our-services/Web-Development/Mern-Stack/Node-Js': 'Node JS',
    '/our-services/Web-Development/Mern-Stack/React-Js': 'React JS',
    '/our-services/Web-Development/Mern-Stack/Vue-Js': 'Vue JS',
    '/our-services/Webtech-services/Angular-Js': 'Angular JS',
    '/our-services/Webtech-services/Node-Js': 'Node JS',
    '/our-services/Webtech-services/React-Js': 'React JS',
    '/our-services/Webtech-services/Vue-Js': 'Vue JS',

    '/our-services/mobile-app-development': 'Mobile App Development',

    '/our-services/mobile-app-development/IOS-Development': 'IOS Development',
    '/our-services/mobile-app-development/Android-Development': 'Android Development',
    '/our-services/mobile-app-development/React-Native': 'React Native',
    '/our-services/mobile-app-development/Flutter': 'Flutter',
    '/our-services/mobile-app-development/IONIC': 'IONIC',
    '/our-services/Webtech-services/IOS-Development': 'IOS Development',
    '/our-services/Webtech-services/Android-Development': 'Android Development',
    '/our-services/Webtech-services/React-Native': 'React Native',
    '/our-services/Webtech-services/Flutter': 'Flutter',
    '/our-services/Webtech-services/IONIC': 'IONIC',

    '/our-services/e-commerce-solutions': 'E-commerce Solutions',

    '/our-services/e-commerce-solutions/BigCommerce': 'Big Commerce',
    '/our-services/e-commerce-solutions/Shopify-Development': 'Shopify Development',
    '/our-services/Webtech-services/BigCommerce': 'Big Commerce',
    '/our-services/Webtech-services/Shopify-Development': 'Shopify Development',

    '/our-services/design-solutions': 'Design Solutions',

    '/our-services/design-solutions/Graphics': 'Graphics',
    '/our-services/design-solutions/Logo-Design': 'Logo Design',
    '/our-services/design-solutions/Branding-Elements': 'Branding Elements',
    '/our-services/design-solutions/Website-Design': 'Website Design',
    '/our-services/design-solutions/Mobile-App-Design': 'Mobile App Design',
    '/our-services/Webtech-services/Graphics': 'Graphics',
    '/our-services/Webtech-services/Logo-Design': 'Logo Design',
    '/our-services/Webtech-services/Branding-Elements': 'Branding Elements',
    '/our-services/Webtech-services/Website-Design': 'Website Design',
    '/our-services/Webtech-services/Mobile-App-Design': 'Mobile App Design',

    '/our-services/digital-marketing': 'Digital Marketing',
    '/our-services/Webtech-services/Digital-Marketing': 'Digital Marketing',

    '/our-services/digital-marketing/SEO': 'SEO',
    '/our-services/digital-marketing/Social-Media-Marketing': 'Social Media Marketing',
    '/our-services/digital-marketing/Email-Marketing': 'Email Marketing',
    '/our-services/digital-marketing/PPC': 'PPC',
    '/our-services/digital-marketing/Amazon-Marketing': 'Amazon Marketing',
    '/our-services/digital-marketing/App-Store-Optimization': 'App Store Optimization',
    '/our-services/Webtech-services/SEO': 'SEO',
    '/our-services/Webtech-services/Social-Media-Marketing': 'Social Media Marketing',
    '/our-services/Webtech-services/Email-Marketing': 'Email Marketing',
    '/our-services/Webtech-services/PPC': 'PPC',
    '/our-services/Webtech-services/Amazon-Marketing': 'Amazon Marketing',
    '/our-services/Webtech-services/App-Store-Optimization': 'App Store Optimization',

    '/our-portfolio/1' : 'Murry Woods',
    '/our-portfolio/2' : 'McAUliffes Craft Shop',
    '/our-portfolio/3' : 'Gift Works',
    '/our-portfolio/4' : 'Health Food Heaven',
    '/our-portfolio/5' : 'BBEdutech',
    '/our-portfolio/6' : 'Apponix Academy',
    '/our-portfolio/7' : 'Baby Sitter',
    '/our-portfolio/8' : 'Trek',
    '/our-portfolio/9' : 'Nick lessons and music',
    '/our-portfolio/10' : 'Wazobia',
    '/our-portfolio/11' : 'Cullen Diamond',
    '/our-portfolio/12' : 'Tirzart',
    '/our-portfolio/13' : 'QLD Hot Water & Plumbing',
    '/our-portfolio/14' : 'True Balance Within',
    '/our-portfolio/15' : 'Istat Academy',
    '/our-portfolio/16' : 'Fabricio Morales',
    '/our-portfolio/17' : 'Devinity',
    '/our-portfolio/18' : 'Carolwood',
    '/our-portfolio/19' : 'Morinda',
    '/our-portfolio/20' : 'Blossom and Syrup',
    '/our-portfolio/21' : 'Bardy',
    '/our-portfolio/22' : 'The Studio Fitness',


    '/*' : 'Page Not Found'
    
};

/* ---------- component ---------- */
export default function PageCover({ bgImage }) {
  const pathname   = usePathname();                   // ← Next hook
  const label      = labelMap[pathname] || 'Page';    // fallback

  return (
    <header className="relative w-full h-[40vh] sm:h-[45vh] md:h-[50vh] xl:h-[60vh] 2xl:h-[70vh] overflow-hidden">
      {/* background image (optimised) */}
      <Image
        src={bgImage}
        alt={label}
        fill
        priority                        // load hero early
        className="object-cover object-center"
      />

      {/* dark overlay */}
      <span className="absolute inset-0 bg-black/20" />

      {/* centred heading */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 text-center">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-[700] py-3"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {label}
        </h1>
        <div
          className="text-base sm:text-lg font-[500]"
          style={{ fontFamily: 'Roboto, sans-serif' }}
        >
          Home / {label}
        </div>
      </div>
    </header>
  );
}
