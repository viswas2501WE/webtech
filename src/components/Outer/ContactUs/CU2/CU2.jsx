'use client';

import Image from 'next/image';
import CU2Common from '@/components/Outer/ContactUs/CU2/CU2Common';

const CU2 = () => {
    const BASE = process.env.NEXT_PUBLIC_IMG_url; // 2024/02

    return (
        <div className="relative flex justify-center items-center h-screen overflow-hidden">
            {/* Background Image */}
            <Image 
                src="/Local/Screenshot 2025-06-13 115436.png"
                alt="Background image of an office space"
                fill
                className="object-cover"
                priority
                sizes="100vw"
            />
            
            {/* Overlay */}
            <span className="absolute inset-0 bg-black opacity-65" />

            {/* Content */}
            <div className="relative z-10 flex justify-center items-center p-4 sm:p-6">
                <CU2Common />
            </div>
        </div>
    );
}

export default CU2;
