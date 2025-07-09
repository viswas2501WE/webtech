'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Screen2 from '@/components/Common/Animations/Screen2';
import CommonButton from '@/components/Common/CommonButton';

const BASE = process.env.NEXT_PUBLIC_IMG_url;

export default function C1() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

    const itemVariants = {
        hidden: { opacity: 0, y: 70 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
    };

    const itemVariants2 = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeOut', delay: 0.4 } },
    };

    return (
        <div
            className="relative overflow-hidden flex flex-col lg:flex-row-reverse items-center justify-between py-[5vh] md:py-[10vh] px-4 md:px-[4%] lg:px-[8%] xl:px-[13%]"
            style={{ fontFamily: 'Roboto, sans-serif' }}
        >
            <Screen2 />

            {/* Image Section */}
            <motion.div
                ref={ref}
                variants={itemVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="w-full lg:w-[50%] mb-8 md:mb-0"
            >
                <div className="relative w-full h-auto">
                    <svg
                        viewBox="0 0 564 564"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 w-[80%] h-[80%] fill-[#F1EFFF] rotate-30 hidden lg:flex left-[30%] -z-10"
                    >
                        <path d="M282,150.8C476.8,54.6,564,126.256,564,282S437.744,564,282,564,0,437.744,0,282,87.2,247,282,150.8Z" />
                    </svg>

                    <Image
                        src={`${BASE}/service-9-1.png`}
                        alt="Service"
                        width={800}
                        height={600}
                        className="w-full h-auto"
                        unoptimized // allow external URLs without configuring domains
                    />
                </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
                ref={ref}
                variants={itemVariants2}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="w-full lg:w-[43%] px-4 text-left"
            >
                <div>
                    <h1 className="text-[#1A96D5] font-[500] text-lg md:text-xl lg:text-[2.5vh]">CAREER</h1>
                    <span className="text-[#1A96D5] border-t-2 border-dotted block w-[15%] md:w-[7%]"></span>
                    <h1
                        className="font-[600] text-3xl md:text-4xl lg:text-[5.5vh] py-[1vh]"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                        Work is Worship!
                    </h1>
                    <div className="font-[400] text-gray-700 text-sm md:text-base">
                        <p className="pb-[4%] leading-7">
                            Our IT company careers stands at the forefront of technological innovation, delivering
                            comprehensive IT solutions and services that empower businesses worldwide. The work atmosphere is
                            welcoming, inclusive, and rewarding. We encourage a very close, familial climate, praising events
                            and unique occasions with happiness and fervor! Below, you'll find current job openings. Our IT
                            company careers is your partner in success. Feel free to apply directly via the provided form,
                            and our HR team will promptly respond with our offers.
                        </p>
                    </div>
                    <Link href="/contact-us">
                        <CommonButton>CONTACT US</CommonButton>
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
