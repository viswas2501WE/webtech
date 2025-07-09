// C2.jsx
'use client';

import Link from 'next/link';
import CommonButton from '@/components/Common/CommonButton';
import C2Common from '@/components/Outer/Career/C2/C2Common';
import Screen3 from '@/components/Common/Animations/Screen3';

export default function C2() {
    const myBulletPoints1 = [
        { id: 1, text: 'Capability in object-situated PHP and Laravel 5 PHP System with top to bottom comprehension.' },
        { id: 2, text: 'Down to earth skill in MySQL diagram plan, Strong principles, and REST Programming interface plan.' },
        { id: 3, text: 'Hearty experience with Web based business, installment door, and Programming interface coordination.' },
        { id: 4, text: 'Skill in MySQL profiling and optimizing queries.' },
        { id: 5, text: 'Strong command of GIT and Bitbucket is essential.' },
    ];
    const myBulletPoints2 = [
        { id: 1, text: 'Thorough handle of Vue.js, Angular.js, or React.js...' },
        { id: 2, text: 'Profound expertise in MVC/MVVM frameworks.' },
        { id: 3, text: 'Broad capability in HTML5, JavaScript, CSS/CSS3, JQuery, SCSS, and Bootstrap.' },
        { id: 4, text: 'Proficiency in Angular (8+), JIRA, etc.' },
        { id: 5, text: 'Comprehension of fundamental design principles for scalable applications.' },
    ];
    const myBulletPoints3 = [
        { id: 1, text: 'Exhaustive comprehension of article arranged PHP...' },
        { id: 2, text: 'Down to earth ability in MySQL composition plan...' },
        { id: 3, text: 'Robust familiarity with Ecommerce, payment gateway integration...' },
        { id: 4, text: 'Proficiency in MySQL profiling and optimizing queries.' },
        { id: 5, text: 'Strong command of GIT and Bitbucket is required.' },
    ];
    const myBulletPoints4 = [
        { id: 1, text: 'Authority in Vue.js, Angular.js, or React.js...' },
        { id: 2, text: 'Robust expertise in MVC/MVVM frameworks.' },
        { id: 3, text: 'Extensive order of HTML5, JavaScript, CSS/CSS3, JQuery, SCSS, and Bootstrap.' },
        { id: 4, text: 'Proficiency in Angular (8+), JIRA, and more.' },
        { id: 5, text: 'Top to bottom appreciation of major plan principles for building versatile applications.' },
    ];
    const myBulletPoints5 = [
        { id: 1, text: 'Branding expertise' },
        { id: 2, text: 'Visual design proficiency' },
        { id: 3, text: 'Mastery in color, typography, and layouts' },
        { id: 4, text: 'Proficient in design research' },
        { id: 5, text: 'Competency in interactivity and animation' },
        { id: 6, text: 'UI prototyping abilities (capability in Adobe XD and Figma required)' },
        { id: 7, text: 'Proficiency in HTML, CSS, Bootstrap, Media queries' },
        { id: 8, text: 'Principal information on executing Shopify/Laravel/Rakish/WordPress with Web designers' },
        { id: 9, text: 'Abilities in responsive plan, logo (vector)Design, SCSS, capable in utilizing GIT and Bitbucket' },
    ];

    const scrollToForm = (e) => {
        e.preventDefault(); // Prevent default link behavior
        const formElement = document.getElementById('apply-form');
        if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='relative'>
            <Screen3 />

            {/* First row */}
            <div className='flex flex-col lg:flex-row px-4 sm:px-6 md:px-8 lg:px-[10%] pb-[5%]'>
                <div className="w-full lg:w-1/2 px-2 sm:px-3 md:px-4 lg:px-[2%] mb-8 lg:mb-0">
                    <C2Common title1="FULL-TIME" title2="Laravel Developer" bulletPoints={myBulletPoints1} />
                    <div className='py-[3%]'>
                        {/* Updated to use onClick for smooth scroll */}
                        <CommonButton onClick={scrollToForm}>APPLY NOW</CommonButton>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 px-2 sm:px-3 md:px-4 lg:px-[2%]">
                    <C2Common title1="FULL-TIME" title2="Frontend Developer" bulletPoints={myBulletPoints2} />
                    <div className='py-[3%]'>
                        {/* Updated to use onClick for smooth scroll */}
                        <CommonButton onClick={scrollToForm}>APPLY NOW</CommonButton>
                    </div>
                </div>
            </div>

            {/* Second row */}
            <div className='flex flex-col lg:flex-row px-4 sm:px-6 md:px-8 lg:px-[10%] pb-[5%]'>
                <div className="w-full lg:w-1/2 px-2 sm:px-3 md:px-4 lg:px-[2%] mb-8 lg:mb-0">
                    <C2Common title1="FULL-TIME" title2="WordPress" bulletPoints={myBulletPoints3} />
                    <div className='py-[3%]'>
                        {/* Updated to use onClick for smooth scroll */}
                        <CommonButton onClick={scrollToForm}>APPLY NOW</CommonButton>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 px-2 sm:px-3 md:px-4 lg:px-[2%]">
                    <C2Common title1="FULL-TIME" title2="Shopify" bulletPoints={myBulletPoints4} />
                    <div className='py-[3%]'>
                        {/* Updated to use onClick for smooth scroll */}
                        <CommonButton onClick={scrollToForm}>APPLY NOW</CommonButton>
                    </div>
                </div>
            </div>

            {/* Third row */}
            <div className='flex flex-col lg:flex-row px-4 sm:px-6 md:px-8 lg:px-[10%] pb-[5%] items-center'>
                <div className="w-full lg:w-1/2 px-2 sm:px-3 md:px-4 lg:px-[2%] mb-8 lg:mb-0">
                    <C2Common title1="FULL-TIME" title2="Ui Ux Designer" bulletPoints={myBulletPoints5} />
                    <div className='py-[3%]'>
                        {/* Updated to use onClick for smooth scroll */}
                        <CommonButton onClick={scrollToForm}>APPLY NOW</CommonButton>
                    </div>
                </div>
                <div className="relative w-full lg:w-1/2 hidden lg:flex px-2 sm:px-3 md:px-4 lg:px-[2%] mt-8 lg:mt-0">
                    <svg
                        viewBox="0 0 564 564"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 w-full h-full fill-[#F1EFFF] rotate-30 -top-[10%] -z-10"
                    >
                        <path d="M282,150.8C476.8,54.6,564,126.256,564,282S437.744,564,282,564,0,437.744,0,282,87.2,247,282,150.8Z" />
                    </svg>
                    <img src="/Local/career-123.png" alt="Career image" className="w-full h-auto" />
                </div>
            </div>
        </div>
    );
}