export const dynamic = 'force-dynamic';

import { services } from "../../../Constance";
import PageCover from "@/components/PageCover";
import EVS1 from "@/components/Header-Options/Our-Services/WebtechServices/EVS1";
import EVS2 from "@/components/Header-Options/Our-Services/WebtechServices/EVS2/EVS2";
import { Suspense } from "react";

const OurServices = () => {
    const BASE = process.env.NEXT_PUBLIC_IMG_url;
    
    // Define the IDs of your main 6 service categories as they appear in Constance.jsx
    const serviceIds= [
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
    ].filter(Boolean)
    const mainServiceCategoryIds = [
        "Webtech-services", // This needs to be an actual ID from Constance.jsx if you want it displayed
        "web-development",
        "mobile-app-development",
        "e-commerce-solutions",
        "design-solutions",
        "digital-marketing",
    ];

    return (
        <div className="text-black">
            <Suspense>

            <PageCover bgImage={`${BASE}/banner-2-our-services.jpg`} />
            <EVS1
                EVS1Title1="Empowering Innovation, Driving Digital Excellence."
                EVS1Title2="Our Diverse Services Catering to all Businesses!"
                EVS1Para1="Webtech Evolution is a leading force in the realm of Information Technology. Established in 2014, we have been at the forefront of delivering cutting-edge IT solutions that propel businesses into the future. Our commitment to innovation, quality, and client satisfaction has made us a trusted partner for organizations seeking transformative digital experiences. Our process started with a dream to give unrivaled IT benefits that enable organizations to flourish in the computerized age. Over the years, we have evolved into a dynamic and forward-thinking company, staying ahead of industry trends to offer solutions that meet the ever-changing needs of our clients. Additionally, with the rapid evolution of technology, we are continually adapting and expanding our service offerings to meet the changing needs of the industry."
                EVS1Img={`${BASE}/service-8-1963x2048.png`}
            />
            {/* For the top-level page, the basePath for EVS2 items is directly /our-services */}
            <EVS2 serviceIds={serviceIds} basePath="/our-services" />
                </Suspense>
        </div>
    );
};

export default OurServices;
