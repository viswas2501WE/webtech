export const dynamic = 'force-dynamic';
import PageCover from "@/components/PageCover";
import AEV1 from "@/components/Header-Options/About-Us/About-Webtech/AEV1";
import AEV2 from "@/components/Header-Options/About-Us/About-Webtech/AEV2";
import AEV4 from "@/components/Header-Options/About-Us/About-Webtech/AEV4/AEV4";
import Part3 from "@/components/Home/Part3";
import AEV5 from "@/components/Header-Options/About-Us/About-Webtech/AEV5/AEV5";
import AEV6 from "@/components/Header-Options/About-Us/About-Webtech/AEV6/AEV6";
import { Suspense } from "react";
// import Loader from "@/components/Loader";
// import Loader from "@/components/Loader";

const AboutUs = () => {
    const BASE = process.env.NEXT_PUBLIC_IMG_url;
    return(
            <Suspense>
        <div className="text-black">

            <PageCover bgImage={`${BASE}/banner-1-about-us.jpg`}/>
            <AEV1/>
            <AEV2/>
            <div className="py-[0vh] lg:py-[10vh]">
            <Part3/>
            </div>
            <AEV4/>
            <AEV5/>
            <AEV6/>
        </div>
            </Suspense>
    )
}
export default AboutUs;