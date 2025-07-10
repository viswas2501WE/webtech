export const dynamic = 'force-dynamic';
import { Suspense } from "react";
import AboutUs from "../page";
// import Loader from "@/components/Loader";

const AboutEspireVox = () => {
    return (
        <div>
            <Suspense>
                <AboutUs />
            </Suspense>
        </div>
    )
}
export default AboutEspireVox;