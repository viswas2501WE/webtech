import CommonButton from '@/components/Common/CommonButton';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';

const PricingCard = ({ plantitle, planprice, planduration, planfeatures, planlink }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const featuresListRef = useRef(null);
    const [needsShowMore, setNeedsShowMore] = useState(false);
    const [contentHeight, setContentHeight] = useState(0);

    const COLLAPSED_HEIGHT = 120;

    useEffect(() => {
        if (featuresListRef.current) {
            const scrollHeight = featuresListRef.current.scrollHeight;
            setContentHeight(scrollHeight);
            setNeedsShowMore(scrollHeight > COLLAPSED_HEIGHT);
        }
    }, [planfeatures]);

    const toggleExpansion = () => setIsExpanded((prev) => !prev);

    return (
        <div className="bg-white rounded-lg shadow-md border-2 border-[#1A96D5] h-full flex flex-col transition-all duration-300 ease-in-out">
            {/* Header */}
            <div
                className="w-full flex justify-center rounded-t-md"
                style={{
                    background:
                        'linear-gradient(45deg, rgba(248, 92, 112, 1) 11%, rgba(250, 115, 133, 1) 49%, rgba(248, 92, 112, 1) 83%)',
                }}
            >
                <div className="w-fit text-center">
                    <h2
                        className="text-2xl font-bold text-white my-4 border-b-2"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                        {plantitle}
                    </h2>
                    <p className="text-5xl font-extrabold text-white mb-6">
                        {planprice}
                        <span className="text-xl font-normal text-gray-100">{planduration}</span>
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-grow text-center bg-[#fff3f4] rounded-b-lg">
                {/* Feature List with Animation */}
                <div
                    style={{
                        maxHeight: isExpanded ? contentHeight : COLLAPSED_HEIGHT,
                        transition: 'max-height 0.5s ease-in-out',
                        overflow: 'hidden',
                    }}
                    className="w-full"
                >
                    <ul
                        ref={featuresListRef}
                        className="text-gray-700 text-lg space-y-3 w-full text-left"
                    >
                        {planfeatures.map((planfeature, index) => (
                            <li key={index} className="flex items-start">
                                <svg
                                    className="w-7 h-7 text-[#1A96D5] mr-2 flex-shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span>{planfeature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Show More / Less Toggle */}
                {needsShowMore && (
                    <button
                        onClick={toggleExpansion}
                        className="text-[#1A96D5] text-sm mt-6 font-semibold underline-offset-3 hover:underline focus:outline-none"
                    >
                        {isExpanded ? 'Show Less' : 'Show More'}
                    </button>
                )}

                {/* Button at Bottom */}
                <div className="mt-auto pt-6">
                    <Link href={planlink} className="w-full flex justify-center">
                        <CommonButton className="w-48">Subscribe Plan</CommonButton>
                    </Link>
                </div>
            </div>
        </div>
    );
};



// PricingPlans Component (No changes needed here for this approach)
export const PricingPlans = ({ data = [], plantitle1 }) => {
    if (!data.length) return null;

    return (
        <div className="pt-15">
            <h1 className="text-xl text-[#242D65] font-[600] text-center mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>{plantitle1}</h1>
            <h2 className="text-5xl font-bold text-center mb-10" style={{ fontFamily: "Poppins, sans-serif" }}>PRICING PLANS</h2>
            <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-33 ">
                {data.map((plan, idx) => (
                    <PricingCard key={idx} {...plan} />
                ))}
            </div>
        </div>
    );
};