import AEV6 from "@/components/Header-Options/About-Us/About-Espire-Vox/AEV6/AEV6";
import OT1 from "@/components/Header-Options/About-Us/Our-Team/OT1/OT1";
import OT2 from "@/components/Header-Options/About-Us/Our-Team/OT2";
import PageCover from "@/components/PageCover";

const OurTeam = () => {
    const BASE = process.env.NEXT_PUBLIC_IMG_url;
    return(
        <div className=" text-black">
            <PageCover bgImage={`${BASE}/our-team-banner.png`}/>
            <OT1/>
            <OT2/>
            <AEV6/>
        </div>
    )
}
export default OurTeam;