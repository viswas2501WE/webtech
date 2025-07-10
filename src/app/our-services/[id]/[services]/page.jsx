'use client';

import Circle from '@/components/Common/Animations/Circle';
import Screen3 from '@/components/Common/Animations/Screen3';
import CommonButton from '@/components/Common/CommonButton';
import DynamicRenderer from '@/components/Header-Options/Our-Services/NestedOptions/DynamicRender';
import { EVS2Data } from '@/components/Header-Options/Our-Services/NestedOptions/EVS2Data';
import Part13 from '@/components/Home/Part13/Part13';
import Part8 from '@/components/Home/Part8/Part8';
import OP2 from '@/components/Outer/OurPortfolio/OP2';
import PageCover from '@/components/PageCover';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { services } from '../../../../../Constance'; // Corrected import path for this deepest level
import { PricingPlans } from '@/components/Outer/Plans/P1Common';

export default function EVS2Inner() {
  const params = useParams();
  const { id: mainCategoryId, services: subCategoryId, 'mern-services': leafServiceId } = params;
  const [item, setItem] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const idToLookup = leafServiceId || subCategoryId;


    if (idToLookup) {
      const match = EVS2Data.find((d) => d.id.toLowerCase() === idToLookup.toLowerCase());

      if (!match) {
        router.push('/not-found');
      } else {
        setItem(match);
      }
    } else {
      router.push('/not-found');
    }
  }, [mainCategoryId, subCategoryId, leafServiceId, router]); // Ensure all relevant params are dependencies

  if (!item) {
    return (
      <div className="flex items-center justify-center min-h-screen text-xl text-gray-700">
        Loading service details or redirecting...
      </div>
    );
  }
  // THIS IS THE CRUCIAL PART FOR THE TEST:
  return (
    
    
    <div className="text-black">
      {/* <Suspense> */}
      <PageCover bgImage={item.coverlink} />
      <div className="flex-col flex xl:flex-row pt-[10vh]">
        <Circle img1={item?.img11} img2={item.img12} img3={item.img13} img4={item.img14} />
        <div className="min-h-fit lg:min-h-screen justify-center xl:pl-0 xl:pr-[5%] relative xl:-left-[5%] pl-[5%] pr-[5%] xl:pt-[10vh] w-full xl:w-[55%]">
          <div className="w-full relative">
            <h1 className="font-[500] text-lg text-[#242D65]">{item.evst1}</h1>
            <h1 className="font-[600] text-5xl uppercase py-[4%] leading-16" style={{ fontFamily: 'Poppins, sans-serif' }}>{item.evst2}</h1>
            <div className="font-[500] text-base w-[100%] leading-7 text-gray-600">{item.evsp1}</div>
            <div className="flex-col flex md:flex-row pt-[8%]">
              <Link href="/contact-us" className="mr-[2vh]">
                <CommonButton className="w-45">CONTACT US</CommonButton>
              </Link>
              <Link href="/our-portfolio">
                <CommonButton className="w-53 md:mt-0 mt-[5%]">VIEW PORTFOLIO</CommonButton>
              </Link>
            </div>
          </div>
        </div>
      </div>

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

      {/* part 3 */}
      <Part8 services={item.index.map((id) => services[id]).filter(Boolean)} title1slide="Distinct Solutions" title2slide="RELATED SERVICES" />
      {item.pricingPlans && item.pricingPlans.length > 0 && (
        <div className="">
          <PricingPlans data={item.pricingPlans} plantitle1={item.plantitle1} />
        </div>
      )}

      <div className="pb-10 pt-10">
        <OP2 />
      </div>

      {/* part 4 */}
      <Part13 />
      {/* </Suspense> */}
    </div>
  );
}