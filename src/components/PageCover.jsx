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

    '/our-services/espire-vox-services/Web-Design-And-Development': 'Web Design And Development',
    '/our-services/espire-vox-services/SEO-And-Digital-Marketing': 'SEO And Digital Marketing',
    '/our-services/espire-vox-services/Hire-Dedicated-Developers': 'Hire Dedicated Developers',
    '/our-services/espire-vox-services/Customized-Solutions': 'Customized Solutions',

    '/about-us/About-Espire-Vox': 'About Webtech Evolution',
    '/about-us/our-team': 'Our Team',

    '/our-services/espire-vox-services': 'Webtech Evolution Services',
    '/our-services/web-development': 'Web Development',
    
    '/our-services/Web-Development/WordPress-Development': 'WordPress Development',
    '/our-services/Web-Development/Laravel-Development': 'Laravel Development',
    '/our-services/Web-Development/JAVA': 'JAVA',
    '/our-services/Web-Development/Python-Development': 'Python Development',
    '/our-services/Web-Development/Mern-Stack': 'Mernstack Development',
    '/our-services/espire-vox-services/WordPress-Development': 'WordPress Development',
    '/our-services/espire-vox-services/Laravel-Development': 'Laravel Development',
    '/our-services/espire-vox-services/JAVA': 'JAVA',
    '/our-services/espire-vox-services/Python-Development': 'Python Development',
    '/our-services/espire-vox-services/Mern-Stack': 'Mernstack Development',

    '/our-services/Web-Development/Mern-Stack/Angular-Js': 'Angular JS',
    '/our-services/Web-Development/Mern-Stack/Node-Js': 'Node JS',
    '/our-services/Web-Development/Mern-Stack/React-Js': 'React JS',
    '/our-services/Web-Development/Mern-Stack/Vue-Js': 'Vue JS',
    '/our-services/espire-vox-services/Angular-Js': 'Angular JS',
    '/our-services/espire-vox-services/Node-Js': 'Node JS',
    '/our-services/espire-vox-services/React-Js': 'React JS',
    '/our-services/espire-vox-services/Vue-Js': 'Vue JS',

    '/our-services/mobile-app-development': 'Mobile App Development',

    '/our-services/mobile-app-development/IOS-Development': 'IOS Development',
    '/our-services/mobile-app-development/Android-Development': 'Android Development',
    '/our-services/mobile-app-development/React-Native': 'React Native',
    '/our-services/mobile-app-development/Flutter': 'Flutter',
    '/our-services/mobile-app-development/IONIC': 'IONIC',
    '/our-services/espire-vox-services/IOS-Development': 'IOS Development',
    '/our-services/espire-vox-services/Android-Development': 'Android Development',
    '/our-services/espire-vox-services/React-Native': 'React Native',
    '/our-services/espire-vox-services/Flutter': 'Flutter',
    '/our-services/espire-vox-services/IONIC': 'IONIC',

    '/our-services/e-commerce-solutions': 'E-commerce Solutions',

    '/our-services/e-commerce-solutions/BigCommerce': 'Big Commerce',
    '/our-services/e-commerce-solutions/Shopify-Development': 'Shopify Development',
    '/our-services/espire-vox-services/BigCommerce': 'Big Commerce',
    '/our-services/espire-vox-services/Shopify-Development': 'Shopify Development',

    '/our-services/design-solutions': 'Design Solutions',

    '/our-services/design-solutions/Graphics': 'Graphics',
    '/our-services/design-solutions/Logo-Design': 'Logo Design',
    '/our-services/design-solutions/Branding-Elements': 'Branding Elements',
    '/our-services/design-solutions/Website-Design': 'Website Design',
    '/our-services/design-solutions/Mobile-App-Design': 'Mobile App Design',
    '/our-services/espire-vox-services/Graphics': 'Graphics',
    '/our-services/espire-vox-services/Logo-Design': 'Logo Design',
    '/our-services/espire-vox-services/Branding-Elements': 'Branding Elements',
    '/our-services/espire-vox-services/Website-Design': 'Website Design',
    '/our-services/espire-vox-services/Mobile-App-Design': 'Mobile App Design',

    '/our-services/digital-marketing': 'Digital Marketing',
    '/our-services/espire-vox-services/Digital-Marketing': 'Digital Marketing',

    '/our-services/digital-marketing/SEO': 'SEO',
    '/our-services/digital-marketing/Social-Media-Marketing': 'Social Media Marketing',
    '/our-services/digital-marketing/Email-Marketing': 'Email Marketing',
    '/our-services/digital-marketing/PPC': 'PPC',
    '/our-services/digital-marketing/Amazon-Marketing': 'Amazon Marketing',
    '/our-services/digital-marketing/App-Store-Optimization': 'App Store Optimization',
    '/our-services/espire-vox-services/SEO': 'SEO',
    '/our-services/espire-vox-services/Social-Media-Marketing': 'Social Media Marketing',
    '/our-services/espire-vox-services/Email-Marketing': 'Email Marketing',
    '/our-services/espire-vox-services/PPC': 'PPC',
    '/our-services/espire-vox-services/Amazon-Marketing': 'Amazon Marketing',
    '/our-services/espire-vox-services/App-Store-Optimization': 'App Store Optimization',

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
