'use client';

import Link from 'next/link';
import EVS2Common from '@/components/Header-Options/Our-Services/EspireVoxServices/EVS2/EVS2Common';
import { services } from '../../../../../../Constance'; // Import services to get the ID for nested links

const EVS2 = ({ serviceIds = [], basePath = '/our-services' }) => { // Accept serviceIds and basePath
    // Filter and map services based on the provided serviceIds
    console.log("serviceIds",serviceIds);
    
    const displayedServices = serviceIds.map(id => services.find(service => service.id === id)).filter(Boolean);
    console.log("displayedServices",displayedServices);
    console.log("basePath",basePath);
    

    return (
        <div>
            <div className="items-center flex pt-10 pb-5 md:pt-20 md:pb-10 justify-center">
                <div>
                    {/* What We Offer */}
                    <div
                        className="flex justify-center items-center font-[500] text-base md:text-lg"
                        style={{ fontFamily: 'Roboto, sans-serif' }}
                    >
                        <span className="h-0.5 w-8 md:w-12 bg-[#1A96D5]" />
                        <span className="text-[#4F4F4F] px-2 md:px-3">What We Offer</span>
                        <span className="h-0.5 w-8 md:w-12 bg-[#1A96D5]" />
                    </div>

                    {/* Our Services Title */}
                    <div
                        className="flex justify-center text-[4vh] text-center py-2 md:text-[6vh] md:py-4 font-[600]"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                        Our Services
                    </div>

                    {/* Services Grid */}
                    <div className="mx-[5%] sm:mx-[10%] lg:mx-[12%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-8 md:pt-15 gap-4 sm:gap-6 lg:gap-8">
                        {displayedServices.map((serviceItem) => ( // Use displayedServices
                            <div key={serviceItem.id}>
                                {/* Construct the nested link using basePath and serviceItem.id */}
                                <Link href={`${basePath}/${serviceItem.id}`}>
                                    <EVS2Common {...serviceItem} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EVS2;
