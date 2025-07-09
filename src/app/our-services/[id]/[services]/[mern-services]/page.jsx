'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { services } from '../../../../../../Constance'; // Correct path

// IMPORTS FROM PAGE3.JSX FOR STYLING AND STRUCTURE
import Link from 'next/link';
import PageCover from '@/components/PageCover';
import Circle from '@/components/Common/Animations/Circle';
import CommonButton from '@/components/Common/CommonButton';
import OP2 from '@/components/Outer/OurPortfolio/OP2';
import Part13 from '@/components/Home/Part13/Part13';
import DynamicRenderer from '@/components/Header-Options/Our-Services/NestedOptions/DynamicRender';
import Part8 from '@/components/Home/Part8/Part8';
import Screen3 from '@/components/Common/Animations/Screen3';

// Import EVS2Data
import { EVS2Data } from '@/components/Header-Options/Our-Services/NestedOptions/EVS2Data';

const MernstackPage = () => {
  const params = useParams();
  const router = useRouter();

  // Destructure all expected parameters, including the deepest level 'mern-services'
  const { id: mainCategoryId, services: subCategoryId, 'mern-services': leafServiceId } = params;
  const [item, setItem] = useState(null); // State to hold the fetched data

  useEffect(() => {
    // For page3.jsx, the ID to lookup is 'leafServiceId' (e.g., 'angular-js', 'node-js')
    const idToLookup = leafServiceId;

    console.log("Page3: mainCategoryId:", mainCategoryId);
    console.log("Page3: subCategoryId:", subCategoryId);
    console.log("Page3: leafServiceId (ID to lookup):", idToLookup);


    if (idToLookup) {
      const match = EVS2Data.find((d) => d.id.toLowerCase() === idToLookup.toLowerCase());

      if (!match) {
        console.log("Page3: No matching service data found for:", idToLookup, "Redirecting to /not-found.");
        router.push('/not-found');
      } else {
        setItem(match);
      }
    } else {
      console.log("Page3: Leaf Service ID is undefined. This might indicate an incorrect URL or routing setup.");
      router.push('/not-found');
    }
  }, [leafServiceId, router]); // Depend on leafServiceId for re-fetching

  if (!item) {
    return (
      <div className="flex items-center justify-center min-h-screen text-xl text-gray-700">
        Loading service details or redirecting...
      </div>
    );
  }

  return (
    <div className="text-black">
      {/* Page Cover Section - Styled exactly as page3.jsx, using 'item' */}
      <PageCover bgImage={item.coverlink} />

      {/* Main Content Section - Styled exactly as page3.jsx, using 'item' */}
      <div className="flex-col flex xl:flex-row pt-[10vh]">
        <Circle img1={item.img11} img2={item.img12} img3={item.img13} img4={item.img14} />
        <div className="min-h-fit lg:min-h-screen justify-center xl:px-0 relative xl:-left-[5%] px-[5%] xl:pt-[10vh] w-full xl:w-[55%]">
          <div className="w-full xl:w-[75%]">
            <h1 className="font-[500] text-lg text-[#FF8345]">{item.evst1}</h1>
            <h1 className="font-[600] text-5xl uppercase py-[4%] leading-16" style={{ fontFamily: 'Poppins, sans-serif' }}>{item.evst2}</h1>
            <div className="font-[500] text-base w-[100%] leading-7 text-gray-600">{item.evsp1}</div>
            <div className="flex-col flex md:flex-row pt-[8%]">
              <Link href="/contact-us" className="mr-[2vh]">
                <CommonButton className="w-45">CONTACT US</CommonButton>
              </Link>
              <Link href="/our-portfolio">
                <CommonButton className="w-53 md:mt-0 mt-[5%]">VIEW PORTFOLEN</CommonButton>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Renderer Section - Styled exactly as page3.jsx, using 'item.left' and 'item.right' */}
      <div className="relative">
        <Screen3 />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-[5%] md:mx-[7%] lg:mx-[12.5%] pt-[10%] pb-[3%] leading-7">
          <div>
            <DynamicRenderer blocks={item.left} />
          </div>
          <div>
            <DynamicRenderer blocks={item.right} />
          </div>
        </div>
      </div>

      {/* Footer/Related Sections - Copied directly from page3.jsx */}
      <Part8 services={[0,1,2,3,4].map((id)=>(services[id] && services[id] ))} title1slide="Distinct Solutions" title2slide="RELATED SERVICES"/>
      <div className="pb-10 pt-10">
        <OP2 />
      </div>

      <Part13 />
    </div>
  );
};

export default MernstackPage;