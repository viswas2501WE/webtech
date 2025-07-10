
import Part1 from "@/components/Home/Part1"
import Part2 from "@/components/Home/Part2";
import Part3 from "@/components/Home/Part3";
import Part4 from "@/components/Home/Part4";
import Part5 from "@/components/Home/Part5/Part5";
import Part6 from "@/components/Home/Part6/Part6";
import Part7 from "@/components/Home/Part7/Part7";
import Part8 from "@/components/Home/Part8/Part8";
import { services } from "../../Constance";
import Part9 from "@/components/Home/Part9";
import Part10 from "@/components/Home/Part10";
import Part11 from "@/components/Home/Part11/Part11";
import Part12 from "@/components/Home/Part12";
import Part13 from "@/components/Home/Part13/Part13";
import { Suspense } from "react";

const Home = () => {
    return (
        <div className="text-black">
            {/* <Suspense> */}
                <Part1 />
                <Part2 />
                <Part3 />
                <Part4 />
                <Part5 />
                <Part6 />
                <Part7 />
                <Part8 services={[0, 1, 2, 3, 4].map((id) => (services[id] && services[id]))} title1slide="DESIGN SERVICES" title2slide="BRANDING | GRAPHICS | UI-UX" />
                <Part9 />
                <Part10 />
                <Part11 />
                <Part12 />
                <Part13 />
            {/* </Suspense> */}
        </div>
    )
}
export default Home