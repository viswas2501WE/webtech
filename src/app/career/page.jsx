
import C1 from "@/components/Outer/Career/C1";
import C2 from "@/components/Outer/Career/C2/C2";
import C3 from "@/components/Outer/Career/C3";
import PageCover from "@/components/PageCover";

const Career = () => {
    const BASE = process.env.NEXT_PUBLIC_IMG_url;
 return (
    
  <div className="text-black">  
   <PageCover bgImage={`${BASE}/Career-banner.png`} />
   <C1/>
   <C2/>
   <C3/> 
  </div>
 );
};

export default Career;
