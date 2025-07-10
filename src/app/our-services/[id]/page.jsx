'use client';

import { useParams, useRouter } from 'next/navigation';
import {  useEffect } from 'react';
import { services } from '../../../../Constance'; // adjust path as needed

import PageCover from '@/components/PageCover';
import EVS1 from '@/components/Header-Options/Our-Services/WebtechServices/EVS1';
import EVS2 from '@/components/Header-Options/Our-Services/WebtechServices/EVS2/EVS2';

const BASE3 = process.env.NEXT_PUBLIC_IMG_url;
const BASE1 = process.env.NEXT_PUBLIC_IMG_url1;
const BASE2 = process.env.NEXT_PUBLIC_IMG_url2;

const BASE = BASE1 || BASE2 || BASE3

// Ensure these IDs exactly match the 'id' in Constance.jsx for your sub-services
const pagesData = [
  {
    id: 'Webtech-services',
    banner: `${BASE}/banner-2-our-services.jpg`,
    title1: 'Empowering Innovation, Driving Digital Excellence.',
    title2: 'Our Diverse Services Catering to all Businesses!',
    description1: 'Webtech Evolution is a leading force in the realm of Information Technology. Established in 2014, we have been at the forefront of delivering cutting-edge IT solutions that propel businesses into the future. Our commitment to innovation, quality, and client satisfaction has made us a trusted partner for organizations seeking transformative digital experiences. Our process started with a dream to give unrivaled IT benefits that enable organizations to flourish in the computerized age. Over the years, we have evolved into a dynamic and forward-thinking company, staying ahead of industry trends to offer solutions that meet the ever-changing needs of our clients. Additionally, with the rapid evolution of technology, we are continually adapting and expanding our service offerings to meet the changing needs of the industry.',
    image: `service-8-1963x2048.png`,
    serviceIds: [
      services[0]?.id, // Branding-Elements
      services[1]?.id, // Graphics
      services[2]?.id, // BigCommerce
      services[3]?.id, // IONIC
      services[4]?.id, // Android-Development
      services[5]?.id, // React-Native
      services[6]?.id, // Flutter
      services[7]?.id, // Python-Development
      services[8]?.id, // IOS-Development
      services[9]?.id, // JAVA
      services[10]?.id, // Email-Marketing
      services[11]?.id, // Amazon-Marketing
      services[12]?.id, // App-Store-Optimization
      services[13]?.id, // PPC
      services[14]?.id, // Social-Media-Marketing
      services[15]?.id, // SEO
      services[16]?.id, // Logo-Design
      services[17]?.id, // Mobile-App-Design
      services[18]?.id, // Website-Design
      services[19]?.id, // Angular-Js
      services[20]?.id, // Laravel-Development
      services[21]?.id, // Shopify-Development
      services[22]?.id, // WordPress-Development
      services[23]?.id, // Vue-Js
      services[24]?.id, // Node-Js
      services[25]?.id, // React-Js
      services[26]?.id, // Digital-Marketing
      services[27]?.id, // Mern Stack
      services[28]?.id, // Web Design And Development
      services[29]?.id, // SEO And Digital Marketing
      services[30]?.id, // Hire Dedicated Developers
      services[31]?.id, // Customized Solutions
    ].filter(Boolean),
  },
  {
    id: 'web-development',
    banner: `${BASE}/Web-Development-banner.png`,
    title1: 'EFFORTLESS EFFICIENCY',
    title2: 'Navigating Our Seamless Process',
    description1: 'Webtech Evolution specializes in Web and App development, blending expertise and passion to harmonize design and functionality, crafting highly dependable websites tailored precisely to meet your business needs with accuracy and scalability. CMS-based and custom websites offer a crucial competitive advantage and adaptability.',
    description2: 'At Webtech Evolution, our adept team of software programmers is equipped to deliver customized solutions to your requirements. We design CMS-based websites featuring a user-friendly back-end panel for effortless page management. Adhering to standard programming practices, our coding ensures a search engine-friendly structure, facilitating better search results by enabling seamless crawling of content, images, and links on the website.',
    image: `service-4-2048x1989.png`,
    serviceIds: [
        services[22]?.id, // WordPress-Development
        services[20]?.id, // Laravel-Development
        services[9]?.id,  // JAVA
        services[7]?.id,  // Python-Development
        services[27]?.id, // MERN-Stack
        services[19]?.id, // Angular-Js
        services[24]?.id, // Node-Js
        services[25]?.id, // React-Js
        services[23]?.id, // Vue-Js
        services.find(s => s.id === 'Mern-Stack')?.id,
    ].filter(Boolean),
  },
  {
    id: 'mobile-app-development',
    banner: `${BASE1}/Ourservices-banner-8.png`,
    title1: 'USER FRIENDLY APPS',
    title2: 'Enhancing Digital Experiences!',
    description1: `At Webtech Evolution, we don't just build mobile apps; we sculpt immersive digital experiences that captivate, engage, and elevate your brand. As an upcoming mobile app development company, we combine cutting-edge technology with creative prowess to turn your vision into reality. We are architects of innovation, constantly pushing boundaries to create mobile apps that stand out in a crowded digital landscape. Your users are at the heart of our design philosophy. We craft intuitive and visually stunning interfaces that provide a seamless and delightful experience. With a team of skilled developers, we embrace the latest technologies to ensure your mobile app is not just functional but at the forefront of industry standards.`,
    description2: '',
    image: `service-5-1885x2048.png`,
    serviceIds: [
        services[8]?.id,  // IOS-Development
        services[4]?.id,  // Android-Development
        services[5]?.id,  // React-Native
        services[6]?.id,  // Flutter
        services[3]?.id,  // IONIC
    ].filter(Boolean),
  },
  {
    id: 'e-commerce-solutions',
    banner: `${BASE}/E-Commerce-Solutions-banner.png`,
    title1: 'SELL ONLINE!',
    title2: 'Crafting E-Commerce Stores That Sell While You Sleep!',
    description1: `A visually appealing website is beneficial, but one that drives sales is superior. At Webtech Evolution, we comprehend your eCommerce business goals and offer comprehensive solutions. This includes enticing product catalogs, secure payment gateways, and enjoyable shopping experiences for your valued customers. We employ cost-effective and user-friendly E-Commerce open source platforms such as WooCommerce, Shopify, Laravel, BigCommerce and Magento to ensure your portal is functional, adaptable, and user-friendly.`,
    description2: ``,
    image: 'service-3-1783x2048.png',
    serviceIds: [
        services[2]?.id,  // BigCommerce
        services[21]?.id, // Shopify-Development
        // If you have WooCommerce or other e-commerce platforms, add their IDs here
    ].filter(Boolean),
  },
  {
    id: 'design-solutions',
    banner: `${BASE}/UI-UX-Design-banner.png`,
    title1: 'ENCHANTING FIRST IMPRESSIONS',
    title2: 'Crafting a Magical Website Experience for Your Customers ',
    description1: `Hence, our UI/UX Design Company and dedicated designers continually strive to create captivating and delightful experiences for your customers.`,
    description2: `Webtech Evolution defines UI/UX design services as the process of crafting user interfaces and experiences that are intuitive, visually appealing, and user-friendly. The main objective is to ensure users have a positive interaction with digital products like websites, apps, and software. This involves user research, visual design, and usability testing to optimize the user experience. UI/UX designers offer services like user research, wireframing, prototyping, visual design, and usability testing. Investing in UI/UX design services can enhance customer satisfaction, elevate engagement, and drive business growth and revenue.`,
    image: 'service-6-1807x2048.png',
    serviceIds: [
        services[0]?.id,  // Branding-Elements
        services[1]?.id,  // Graphics
        services[16]?.id, // Logo-Design
        services[17]?.id, // Mobile-App-Design
        services[18]?.id, // Website-Design (assuming this covers general UI/UX)
    ].filter(Boolean),
  },
  {
    id: 'digital-marketing',
    banner: `${BASE2}/Digital-Marketing-banner.png`,
    title1: 'DIGITAL HARMONY',
    title2: 'Your One-Stop Solution for Comprehensive Digital Needs!',
    description1: `Our group of in-house computerized promoting specialists, addressing the best computerized showcasing office, is devoted to upgrading your web-based presence and establishing a long term connection with your item or business' end-clients. The following are the administrations we stretch out to our clients:`,
    description2: ``,
    image: 'service-7-1857x2048.png',
    serviceIds: [
        services[15]?.id, // SEO
        services[14]?.id, // Social-Media-Marketing
        services[10]?.id, // Email-Marketing
        services[13]?.id, // PPC
        services[11]?.id, // Amazon-Marketing
        services[12]?.id, // App-Store-Optimization
    ].filter(Boolean),
  },
];

const ServicePage = () => {
  const params = useParams();
  const router = useRouter();

  const { id } = params;

  const pageData = pagesData.find((entry) => entry.id === id);

  useEffect(() => {
    if (!pageData) {
      router.push('/not-found'); // redirect if invalid id
    }
  }, [pageData, router]);

  if (!pageData) return null;

  return (
    
    <div className="text-black">
      {/* <Suspense> */}
      <PageCover bgImage={pageData.banner} />
      <EVS1
        EVS1Title1={pageData.title1}
        EVS1Title2={pageData.title2}
        EVS1Para1={pageData.description1}
        EVS1Para2={pageData.description2}
        EVS1Img={`${BASE}/${pageData.image}`}
        />
      {/* For the first nested page, the basePath for EVS2 items includes the current ID */}
      <EVS2
        serviceIds={pageData.serviceIds} // Pass the array of service IDs directly
        basePath={`/our-services/${id}`} // Construct the basePath for nested links
        />
        {/* </Suspense> */}
    </div>
  );
};

export default ServicePage;
