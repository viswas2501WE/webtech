import Part13 from "@/components/Home/Part13/Part13";
import CU1 from "@/components/Outer/ContactUs/CU1";
import CU2 from "@/components/Outer/ContactUs/CU2/CU2";
import PageCover from "@/components/PageCover";

const ContactUs = () => {
    const BASE = process.env.NEXT_PUBLIC_IMG_url;
 return (
  <div>
   <PageCover bgImage={`${BASE}/Contact-Us-Banner.png`} />
   <CU1/>
   <CU2/>
   <Part13/>
  </div>
 );
};

export default ContactUs;
