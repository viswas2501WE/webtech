export const dynamic = 'force-dynamic';
import HD1 from "@/components/Outer/HireDev/HD1";
import HD2 from "@/components/Outer/HireDev/HD2";
import HD3 from "@/components/Outer/HireDev/HD3";
import HD4 from "@/components/Outer/HireDev/HD4";
import PageCover from "@/components/PageCover";
import { Suspense } from "react";

const DevRequests = () => {
        const BASE = process.env.NEXT_PUBLIC_IMG_url;
    return(
        
        <div className="text-black">
            <Suspense>
            <PageCover bgImage={`${BASE}/banner3.png`} />
            <div className="relative">
                <HD1/>
                <HD2/>
                <HD3/>
                <HD4/>
            </div>
        </Suspense>
        </div>
    )
}
export default DevRequests;