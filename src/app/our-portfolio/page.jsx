'use client'
import OP1 from "@/components/Outer/OurPortfolio/OP1/OP1";
import OP2 from "@/components/Outer/OurPortfolio/OP2";
import PageCover from "@/components/PageCover";

const OurPortfolio = () => {
        const BASE = process.env.NEXT_PUBLIC_IMG_url;
    return(
        <div className="text-black">
            <PageCover bgImage={`${BASE}/Our-services-banner-2-2.png`} />
            <OP1/>
            <OP2/>
        </div>
    )
}
export default OurPortfolio;