'use client';

import { useState, useEffect } from 'react';
import { ImageFilterNav, ImageGrid } from '@/components/Outer/OurPortfolio/OP1/OP1Common';

const BASE0 = process.env.NEXT_PUBLIC_IMG_url;   

export const allImages = [
  {
    id: 1, src: `${BASE0}/MurrayWoods-2-600x630.png`,
    alt: 'Murray Woods',
    category: 'Shopify',
    title: 'Murry Woods',
    subtitle: 'Shopify Store',
    content: 'Murray Woods provides dental equipment, clinic design, and engineering support services across Ireland.',
  },
  {
    id: 2, src: `${BASE0}/McA-Uliffes-Craft-Shop-600x630.png`,
    alt: 'Skyscrapers in a bustling city',
    category: 'Shopify',
    title: 'McAUliffes Craft Shop',
    subtitle: 'Shopify Store',
    content: `McAuliffe's Craft Shop is a family-run store in Donegal offering Irish crafts, fashion, and gifts.`,
  },
  {
    id: 3, src: `${BASE0}/Gift-WorksStore-2-600x630.png`,
    alt: 'Colorful abstract pattern',
    category: 'Shopify',
    title: 'Gift Works',
    subtitle: 'Shopify Store',
    content: 'Gift Works specializes in unique home accessories, stylish decor, and personalized gift items.',
  },
  {
    id: 4, src: `${BASE0}/Healthood-Heaven-600x630.png`,
    alt: 'Mountain landscape with clear sky',
    category: 'Shopify',
    title: 'Health Food Heaven',
    subtitle: 'Shopify Store',
    content: 'Health Food Heaven offers herbal teas, superfoods, natural soaps, and health supplements for holistic wellness.',
  },
  {
    id: 5, src: `${BASE0}/portfolo6-600x630.png`,
    alt: 'Group of happy people smiling',
    category: 'WordPress',
    title: 'BBEdutech',
    subtitle: 'Developed in WordPress',
    content: 'BBEdutech provides online degree programs, study abroad services, and free academic counseling.',
  },
  {
    id: 6, src: `${BASE0}/apponix-5-1024x930-1-600x630.webp`,
    alt: 'Night view of city lights',
    category: 'Laravel',
    title: 'Apponix Academy',
    subtitle: 'Developed in Laravel',
    content: 'Apponix provides IT, cloud, data science, and digital marketing training with placement support.',
  },
  {
    id: 7, src: `${BASE0}/babysitter-8-1024x930-1-600x630.webp`,
    alt: 'Serene lake surrounded by trees',
    category: 'Laravel',
    title: 'Baby Sitter',
    subtitle: 'Developed in Laravel',
    content: 'Online Caretaker Booking Portal with verified reviews, detailed star grading, advanced search by location, and user-friendly interface.',
  },
  {
    id: 8, src: `${BASE0}/nicklessonsandmusic-1-5-1024x930-1-600x630.webp`,
    alt: 'Geometric shapes in vibrant colors',
    category: 'Mern Stack',
    title: 'Trek',
    subtitle: 'Developed in MERN',
    content: 'Multi-vendor trip organizer website featuring online trek booking, flexible part payment facility, and real-time availability tracking',
  },
  {
    id: 9, src: `${BASE0}/nicklessonsandmusic-10-1024x930-1-600x630.webp`,
    alt: 'Portrait of a person laughing',
    category: 'Mern Stack',
    title: 'Nick lessons and music',
    subtitle: 'Developed in MERN',
    content: 'Online Music Tuition Website offering live events, interactive webinars, and a seamless course booking system.',
  },
  {
    id: 10, src: `${BASE0}/wazobiaafricankitchen-1024x930-1-600x630.webp`,
    alt: 'Historic street in an old town',
    category: 'WooCommerce',
    title: 'Wazobia',
    subtitle: 'WooCommerce Store',
    content: 'Wazobia is a Nigerian media company known for Pidgin English radio stations and local entertainment.',
  },
  {
    id: 11, src: `${BASE0}/cullendiamonds-2-1024x930-3-2-600x630.webp`,
    alt: 'Desert landscape at sunset',
    category: 'WooCommerce',
    title: 'Cullen Diamond',
    subtitle: 'WooCommerce Store',
    content: 'Online jewelry store featuring auction bidding, a referral rewards program, and special festive discount offers.',
  },
  {
    id: 12, src: `${BASE0}/tirzart-1024x930-1-600x630.webp`,
    alt: 'Swirling patterns of light',
    category: 'WooCommerce',
    title: 'Tirzart',
    subtitle: 'WooCommerce Store',
    content: `Tirzart is a modern-bohemian fashion boutique from Australia offering curated women's clothing, accessories, and footwear.`,
  },
  {
    id: 13, src: `${BASE0}/qldhotwaterplumbing-3-1024x930-1-600x630.webp`,
    alt: 'Swirling patterns of light',
    category: 'WordPress',
    title: 'Hot Water & Plumbing',
    subtitle: 'Developed in WordPress',
    content: 'QLD Hot Water & Plumbing is a family-owned business specializing in hot water systems, plumbing, and 24/7 emergency services.',
  },
  {
    id: 14, src: `${BASE0}/sunshinecoastwebdesign-1024x930-1-600x630.webp`,
    alt: 'Swirling patterns of light',
    category: 'WordPress',
    title: 'True Balance Within',
    subtitle: 'Developed in WordPress',
    content: 'True Balance Within offers personalized kinesiology and energy healing services on the Sunshine Coast.',
  },
  {
    id: 15, src: `${BASE0}/istart-1024x930-1-600x630.webp`,
    alt: 'Swirling patterns of light',
    category: 'WordPress',
    title: 'Istat Academy',
    subtitle: 'Developed in WordPress',
    content: 'iSTAT Academy is an online platform offering IT and business courses to help learners start new careers.',
  },
  {
    id: 16, src: `${BASE0}/fabricaio-1024x930-1-600x630.webp`,
    alt: 'Swirling patterns of light',
    category: 'WordPress',
    title: 'Fabricio Morales',
    subtitle: 'Developed in WordPress',
    content: 'Fabricio Morales’ website showcases his tennis career highlights, achievements, and updates for fans and sponsors.',
  },
  {
    id: 17, src: `${BASE0}/devinity-1024x930-1-600x630.webp`,
    alt: 'Swirling patterns of light',
    category: 'WordPress',
    title: 'Devinity',
    subtitle: 'Developed in WordPress',
    content: 'Divinity Hospice offers compassionate end-of-life care with personalized support across Texas.',
  },
  {
    id: 18, src: `${BASE0}/carolwoodboutique-1024x930-1-600x630.webp`,
    alt: 'Swirling patterns of light',
    category: 'Shopify',
    title: 'Carolwood',
    subtitle: 'Shopify Store',
    content: 'Carolwood Jewelry offers elegant, everyday jewelry pieces crafted with meaning and minimalist style.',
  },
  {
    id: 19, src: `${BASE0}/morinda-1024x930-1-600x630.webp`,
    alt: 'Swirling patterns of light',
    category: 'Shopify',
    title: 'Morinda',
    subtitle: 'Shopify Store',
    content: 'Morinda is a wellness company known for its flagship Tahitian Noni Juice and a range of health-focused products.',
  },
  {
    id: 20, src: `${BASE0}/blossomandsyrup-5-1024x930-1-600x630.webp`,
    alt: 'Swirling patterns of light',
    category: 'Shopify',
    title: 'Blossom and Syrup',
    subtitle: 'Shopify Store',
    content: 'Blossom & Syrup is a boutique brand offering bridal robes and gifts, blending elegance with affordability for special occasions.',
  },
  {
    id: 21, src: `${BASE0}/bardy-5-1024x930-1-600x630.webp`,
    alt: 'Swirling patterns of light',
    category: 'Shopify',
    title: 'Bardy',
    subtitle: 'Shopify Store',
    content: 'Bardy offers curated grooming kits delivered to your door, helping you achieve a fuller, healthier beard. ',
  },
  {
    id: 22, src: `${BASE0}/the-studio-1024x930-1-600x630.webp`,
    alt: 'Swirling patterns of light',
    category: 'WordPress',
    title: 'The Studio Fitness',
    subtitle: 'Developed in Wordpress',
    content: 'The Studio El Paso is a vibrant fitness community offering strength, cardio, and Pilates classes',
  },
];

export default function OP1() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 font-sans antialiased">
      <ImageGallery />
    </div>
  );
}

function ImageGallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filtered, setFiltered] = useState(allImages);

  useEffect(() => {
    setFiltered(
      activeFilter === 'All'
        ? allImages
        : allImages.filter((img) => img.category === activeFilter)
    );
  }, [activeFilter]);

  const filterOptions = [
    { label: 'All', value: 'All' },
    'WordPress',
    'Shopify',
    'Mern Stack',
    'Laravel',
    'WooCommerce',
  ].map((c) => (typeof c === 'string' ? { label: c, value: c } : c));

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 text-black">
      <ImageFilterNav
        options={filterOptions}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />
      <ImageGrid images={filtered} />
    </div>
  );
}
